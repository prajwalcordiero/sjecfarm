export type ProductID = string;
export type Category = "bakery" | "vegetables" | "eggs";

export interface Product {
    id: ProductID;
    name: string;
    description?: string;
    price: number;
    stock: number;
    category: Category;
    imageUrl?: string;
    publicId?: string;
    createdAt: Date | null;
}
