"use client";

import { useEffect, useState } from "react";

export default function ProductsPage() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch("/api/products");
			const data = await res.json();
			setProducts(data.products || []);
			setLoading(false);
		};
		fetchProducts();
	}, []);

	if (loading) return <p>Loading...</p>;

	return (
		<div className="text-black">
			<h1 className="text-3xl font-bold mb-6">Products</h1>

			<table className="w-full border-collapse text-left">
				<thead>
					<tr>
						<th className="border p-2">Image</th>
						<th className="border p-2">Name</th>
						<th className="border p-2">Category</th>
						<th className="border p-2">Price</th>
						<th className="border p-2">Stock</th>
						<th className="border p-2">Actions</th>
					</tr>
				</thead>

				<tbody>
					{products.map((p: any) => (
						<tr key={p.id}>
							<td className="border p-2">
								<img src={p.imageUrl} className="w-16 h-16 object-cover rounded" />
							</td>

							<td className="border p-2">{p.name}</td>
							<td className="border p-2">{p.category}</td>
							<td className="border p-2">₹{p.price}</td>
							<td className="border p-2">{p.stock}</td>

							<td className="border p-2">
								<a
									className="text-blue-600 hover:underline mr-3"
									href={`/admin/products/${p.category}/${p.id}`}
								>
									Edit
								</a>

								<button
									className="text-red-600 hover:underline"
									onClick={async () => {
										if (!confirm("Delete product?")) return;

										await fetch(`/api/products/${p.category}/${p.id}`, {
											method: "DELETE",
										});
										location.reload();
									}}
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
