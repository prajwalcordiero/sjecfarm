import { auth } from "@clerk/nextjs/server";
import { adminDb } from "@/lib/firebase/firebase-admin";
import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";

export async function GET() {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const snapshot = await adminDb
    .collection("users")
    .doc(userId)
    .collection("cart")
    .get();

  const cart = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  return NextResponse.json({ ok: true, cart });
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const { id, name, price, imageUrl, quantity } = body;

  await adminDb
    .collection("users")
    .doc(userId)
    .collection("cart")
    .doc(id)
    .set(
      {
        id,
        name,
        price,
        imageUrl,
        quantity,
        addedAt: FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

  return NextResponse.json({ ok: true });
}

export async function DELETE(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) return NextResponse.json({ error: "Missing id" }, { status: 400 });

  await adminDb
    .collection("users")
    .doc(userId)
    .collection("cart")
    .doc(id)
    .delete();

  return NextResponse.json({ ok: true });
}
