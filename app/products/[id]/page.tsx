import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getProductById } from "@/services/product";
import type { Product } from "@/types/product";

function optimize(url: string) {
	try {
		const u = new URL(url);
		if (u.hostname.includes("res.cloudinary.com") && u.pathname.includes("/upload/")) {
			return url.replace("/upload/", "/upload/f_auto,q_auto,w_800,c_fill/");
		}
	} catch { }
	return url;
}

type ProductPageProps = {
	params: {
		id: string;
	};
};

export default async function ProductDetailsPage({ params }: ProductPageProps) {
	const { id } = await params;
	const { userId } = await auth();
	if (!userId) redirect(`/sign-in?redirect=/products/${id}`);

	const product: Product | null = await getProductById(id);
	if (!product) {
		return (
			<main className="p-6 text-center">
				<h2 className="text-xl font-semibold">Product not found</h2>
			</main>
		);
	}

	return (
		<main className="mx-auto max-w-3xl p-6">
			<div className="rounded-2xl border border-white/10 p-4">
				{product.imageUrl ? (
					<img
						alt={product.name}
						src={optimize(product.imageUrl)}
						className="mb-4 aspect-square w-full rounded-xl object-cover"
					/>
				) : (
					<div className="mb-4 aspect-square w-full rounded-xl bg-white/5 grid place-items-center text-sm opacity-60">
						No image
					</div>
				)}

				<h1 className="text-2xl font-bold mb-2">{product.name}</h1>

				{product.category && (
					<span className="inline-block mb-2 rounded-full border border-white/10 px-3 py-1 text-xs uppercase opacity-80">
						{product.category}
					</span>
				)}

				{product.description && (
					<p className="mb-4 text-sm opacity-80">{product.description}</p>
				)}

				<div className="text-lg font-semibold">₹{Number(product.price).toFixed(2)}</div>
				<div className="text-xs opacity-70">Stock: {product.stock}</div>
			</div>
		</main>
	);
}
