import type { Product } from "@/types/product";

export function fromFirestore(id: string, data: FirebaseFirestore.DocumentData): Product {
  return {
    id,
    name: data.name ?? "",
    description: data.description ?? undefined,
    price: Number(data.price ?? 0),
    stock: Number(data.stock ?? 0),
    category: data.category ?? "bakery",
    imageUrl: data.imageUrl ?? undefined,
    publicId: data.publicId ?? undefined,
    createdAt: data.createdAt?.toDate?.() ?? null,
  };
}
