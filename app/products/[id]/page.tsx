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

export default async function ProductDetailsPage({ params }: ProductPageProps) {
	const { id } = await params;

	const { userId } = await auth();
	if (!userId) {
		redirect(`/sign-in?redirect=/products/${id}`);
	}

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
			? rawProduct.createdAt.toDate().toISOString()
			: null,
	};

	return <ProductDetailsClient product={product} />;
}
