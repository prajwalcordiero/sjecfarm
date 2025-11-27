import { adminDb } from '@/lib/firebase/firebase-admin';
import { fromFirestore } from '@/lib/firebase/mappers/product';
import type { Product } from '@/types/product';

export async function getAllProducts(): Promise<Product[]> {
     const products: Product[] = [];

    for (const category of ["bakery", "vegetables", "eggs"]) {
        const snap = await adminDb
            .collection("products")
            .doc(category)
            .collection(category)
            .orderBy("createdAt", "desc")
            .get();

        snap.docs.forEach((d) => {
            products.push(fromFirestore(d.id, d.data()));
        });
    }

    return products;
}

export async function getProductById(id: string): Promise<Product | null> {

const CATEGORIES = ["bakery", "vegetables", "eggs"];
	for (const category of CATEGORIES) {
		const doc = await adminDb
			.collection("products")
			.doc(category)
			.collection(category)
			.doc(id)
			.get();

		if (doc.exists) {
			return { id: doc.id, category, ...doc.data() } as Product;
		}
	}

	return null;
}
