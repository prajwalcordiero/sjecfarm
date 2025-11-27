import { adminDb } from "@/lib/firebase/firebase-admin";
import { auth, currentUser } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { cloudinary } from "@/lib/cloudinary/cloudinary";
import { FieldValue } from "firebase-admin/firestore";
import { Product } from "@/lib/firebase/schema/product";
import { orderBy } from "firebase/firestore";

const CATEGORIES = new Set(["bakery", "vegetables", "eggs"]);
const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "image/jpg", "image/heic", "image/avif"]);
const MAX_BYTES = 5 * 1024 * 1024;

function toBuffer(ab: ArrayBuffer) {
	return Buffer.from(new Uint8Array(ab));
}

export async function GET() {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await currentUser();
    if (user?.privateMetadata?.role !== "admin")
        return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });

    try {
		const products: Product[] = [];
		
		for (const category of CATEGORIES) {
			const snap = await adminDb
				.collection("products")
				.doc(category)
				.collection(category)
				.orderBy("createdAt", "desc")
				.get();
			
			snap.docs.forEach(d => {
				products.push({ id: d.id, category: category, ...d.data() })
			})
		}
		return NextResponse.json({ ok: true, products });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e?.message ?? "Failed to fetch products"}, { status: 500 } );
    }
}

export async function POST(req: NextRequest) {   
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await currentUser();
    if (user?.privateMetadata?.role !== "admin")
        return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });

    try {        
        const form = await req.formData();
        const name = String(form.get("name") ?? "").trim();
		const price = Number(form.get("price") ?? 0);
		const stock = Number(form.get("stock") ?? 0);
		const category = String(form.get("category") ?? "").toLowerCase();
		const description = form.get("description") ? String(form.get("description")) : undefined;

		if (!name) return NextResponse.json({ ok: false, error: "Name required" }, { status: 400 });
		if (!(price >= 0)) return NextResponse.json({ ok: false, error: "Invalid price" }, { status: 400 });
		if (!Number.isInteger(stock) || stock < 0) return NextResponse.json({ ok: false, error: "Invalid stock" }, { status: 400 });
		if (!CATEGORIES.has(category)) return NextResponse.json({ ok: false, error: "Invalid category" }, { status: 400 });

        const file = form.get("file") as File | null;
		if (!file) return NextResponse.json({ ok: false, error: "No file" }, { status: 400 });

		const mime = file.type || "application/octet-stream";
		if (!ALLOWED.has(mime)) return NextResponse.json({ ok: false, error: `Unsupported type: ${mime}` }, { status: 415 });
		if (file.size > MAX_BYTES) return NextResponse.json({ ok: false, error: `File too large (max ${MAX_BYTES} bytes)` }, { status: 413 });
        
        const baseFolder = process.env.CLOUDINARY_UPLOAD_FOLDER || "sjecfarm";
		const folder = `${baseFolder}/${category}`;
		const buffer = toBuffer(await file.arrayBuffer());

		const uploadRes: any = await new Promise((resolve, reject) => {
			const stream = cloudinary.uploader.upload_stream(
				{ folder, resource_type: "image" },
				(err, res) => (err ? reject(err) : resolve(res))
			);
			stream.end(buffer);
		});

		const imageUrl = uploadRes.secure_url as string;
		const publicId = uploadRes.public_id as string;

        const ref = await adminDb
			.collection("products")
			.doc(category)
			.collection(category)
			.add({
				name,
				description: description ?? null,
				price,
				stock,
				category,
				imageUrl,
				publicId,
				createdAt: FieldValue.serverTimestamp(),
			});

		return NextResponse.json({
			ok: true,
			id: ref.id,
			imageUrl,
			publicId,
		});

    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e?.message ?? "Create failed" }, { status: 500 });
    }
}