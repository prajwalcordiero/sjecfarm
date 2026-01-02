"use client";

import EditProductModal from "@/components/admin/EditProductModal";
import NewProductModal from "@/components/admin/NewProductModal";
import { useEffect, useState } from "react";

type Product = {
	id: string;
	name: string;
	category: string;
	price: number;
	stock: number;
	imageUrl: string;
};

export default function ProductsPage() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);
	const [showNewProduct, setShowNewProduct] = useState(false);
	const [editProduct, setEditProduct] = useState<{
		id: string;
		category: string;
	} | null>(null);


	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch("/api/products");
			const data = await res.json();
			setProducts(data.products || []);
			setLoading(false);
		};
		fetchProducts();
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center h-64 text-gray-500">
				Loading products…
			</div>
		);
	}

	return (
		<div className="space-y-8 text-black">
			<div className="flex items-center justify-between">
				<div>
					<h1 className="text-3xl font-semibold tracking-tight">
						Products
					</h1>
					<p className="text-gray-500 mt-1">
						Manage all store products
					</p>
				</div>

				<button
					onClick={() => setShowNewProduct(true)}
					className="px-5 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700"
				>
					+ Add Product
				</button>
			</div>


			<div className="grid gap-4">
				{products.map((p) => (
					<div
						key={p.id}
						className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-4 flex items-center gap-6"
					>
						<img
							src={p.imageUrl}
							alt={p.name}
							className="w-20 h-20 rounded-xl object-cover border"
						/>

						<div className="flex-1">
							<h2 className="text-lg font-medium">{p.name}</h2>
							<p className="text-sm text-gray-500">
								Category: {p.category}
							</p>

							<div className="flex gap-6 mt-2 text-sm">
								<span>
									<span className="text-gray-400">Price</span>{" "}
									<span className="font-medium">₹{p.price}</span>
								</span>

								<span>
									<span className="text-gray-400">Stock</span>{" "}
									<span
										className={`font-medium ${
											p.stock === 0
												? "text-red-600"
												: "text-green-600"
										}`}
									>
										{p.stock}
									</span>
								</span>
							</div>
						</div>

						<div className="flex gap-3">
							<button
								onClick={() =>
									setEditProduct({ id: p.id, category: p.category })
								}
								className="px-4 py-2 rounded-lg text-sm font-medium bg-gray-100 hover:bg-gray-200"
							>
								Edit
							</button>


							<button
								onClick={async () => {
									if (!confirm("Delete product?")) return;

									await fetch(
										`/api/products/${p.category}/${p.id}`,
										{ method: "DELETE" }
									);
									location.reload();
								}}
								className="px-4 py-2 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition"
							>
								Delete
							</button>
						</div>
					</div>
				))}
			</div>
			{editProduct && (
				<EditProductModal
					open={true}
					id={editProduct.id}
					category={editProduct.category}
					onClose={() => setEditProduct(null)}
					onUpdated={() => location.reload()}
				/>
			)}
			{showNewProduct && (
				<NewProductModal
					open={true}
					onClose={() => setShowNewProduct(false)}
					onCreated={() => location.reload()}
				/>
			)}

		</div>
	);
}
