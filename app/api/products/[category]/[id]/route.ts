import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { adminDb } from "@/lib/firebase/firebase-admin";
import { productSchema } from "@/lib/firebase/schema/product";

export async function GET(
    req: Request,
    { params }: { params: { category: string, id: string } }
) {
    const { category, id } = await params;
    
    const doc = await adminDb
        .collection("products")
        .doc(category)
        .collection(category)
        .doc(id)
        .get();
    
    if (!doc.exists) return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
    return NextResponse.json({ ok: true, id, ...doc.data() });
}

export async function PATCH(
    req: Request,
    { params }: { params: { category: string, id: string } }
) {
    const { userId } = await auth();
    if (!userId)
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await currentUser();
    if (user?.privateMetadata?.role !== "admin")
        return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });

    const { category, id } = await params;
    if (!id)
        return NextResponse.json({ error: "Missing id" }, { status: 400 });

    try {
        const body = await req.json();

        const partialSchema = productSchema.partial().omit({ createdAt: true });
        const parsed = partialSchema.parse(body);

        const ref = adminDb.collection("products").doc(category).collection(category).doc(id);
        const snap = await ref.get();

        if (!snap.exists)
            return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });

        await ref.update(parsed);
        return NextResponse.json({ ok: true, id, updated: parsed });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e.message ?? "Update failed" }, { status: 400 });
    }
}


export async function DELETE(
    _req: Request,
    { params }: { params: { category: string; id: string } }
) {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await currentUser();
    if (user?.privateMetadata?.role !== "admin") {
        return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });
    }

    const { category, id } = await params;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    try {
        const ref = adminDb.collection("products").doc(category).collection(category).doc(id);
        const snap = await ref.get();
        if (!snap.exists) {
            return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
        }

        await ref.delete();
        return NextResponse.json({ ok: true, id });
    } catch (e: any) {
        return NextResponse.json({ ok: false, error: e?.message ?? "Delete failed" }, { status: 500 });
    }
}
