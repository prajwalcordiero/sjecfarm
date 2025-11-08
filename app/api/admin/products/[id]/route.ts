import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { adminDb } from "@/lib/firebase/firebase-admin";
import { productSchema } from "@/lib/firebase/schema/product";

export async function PATCH(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {
    const { userId } = await auth();
    if (!userId)
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await currentUser();
    if (user?.privateMetadata?.role !== "admin")
        return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });

    const { id } = await context.params;
    if (!id)
        return NextResponse.json({ error: "Missing id" }, { status: 400 });

    try {
        const body = await req.json();

        const partialSchema = productSchema.partial().omit({ createdAt: true });
        const parsed = partialSchema.parse(body);

        const ref = adminDb.collection("products").doc(id);
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
    ctx: { params: Promise<{ id: string }> }
) {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await currentUser();
    if (user?.privateMetadata?.role !== "admin") {
        return NextResponse.json({ error: "Forbidden: admin only" }, { status: 403 });
    }

    const { id } = await ctx.params;
    if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

    try {
        const ref = adminDb.collection("products").doc(id);
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
