import { adminDb } from '@/lib/firebase/firebase-admin';
import { fromFirestore } from '@/lib/firebase/mappers/product';
import type { Product } from '@/types/product';

export async function getAllProducts(): Promise<Product[]> {
    const snap = await adminDb.collection("products").orderBy("createdAt", "desc").get();
    return snap.docs.map(d => fromFirestore(d.id, d.data()));
}

export async function getProductById(id: string): Promise<Product | null> {
    console.log(id)
  const doc = await adminDb.collection("products").doc(id).get();
  if (!doc.exists) return null;
  return fromFirestore(doc.id, doc.data() as Product);
}
