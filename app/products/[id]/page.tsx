import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getProductById } from "@/services/product";
import ProductDetailsClient from "./ProductDetailsClient";
import type { Product } from "@/types/product";

type ProductPageProps = {
	params: {
		id: string;
	};
};

export const dynamic = 'force-dynamic';

export default async function ProductDetailsPage({ params }: ProductPageProps) {
	const { id } = await params;

	const rawProduct: Product | null = await getProductById(id);

	if (!rawProduct) {
		return (
			<main className="min-h-screen flex items-center justify-center text-slate-600">
				Product not found
			</main>
		);
	}

	const product = {
		...rawProduct,
		createdAt: rawProduct.createdAt
			? (rawProduct.createdAt as any).toDate?.().toISOString() || new Date(rawProduct.createdAt as any).toISOString()
			: null,
	};

	return <ProductDetailsClient product={product} />;
}
