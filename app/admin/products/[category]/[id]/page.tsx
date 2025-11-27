"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function EditProduct({ params }: any) {
	const { category, id } = useParams();
	const [product, setProduct] = useState(null);

	useEffect(() => {
		fetch(`/api/products/${category}/${id}`)
			.then(res => res.json())
			.then(data => setProduct(data));
	}, []);

	if (!product) return <p>Loading...</p>;

	const update = async (e: any) => {
		e.preventDefault();

		const body = {
			name: e.target.name.value,
			price: Number(e.target.price.value),
			stock: Number(e.target.stock.value),
			description: e.target.description.value,
		};

		await fetch(`/api/products/${category}/${id}`, {
			method: "PATCH",
			body: JSON.stringify(body),
		});

		alert("Updated!");
	};

	return (
		<div>
			<h1 className="text-3xl font-bold mb-4">Edit Product</h1>

			<form onSubmit={update} className="grid gap-4 max-w-md">
				<input name="name" defaultValue={product.name} className="border p-2" />
				<input name="price" defaultValue={product.price} className="border p-2" />
				<input name="stock" defaultValue={product.stock} className="border p-2" />
				<textarea name="description" defaultValue={product.description} className="border p-2" />

				<button className="bg-green-600 text-white py-2 rounded">Update</button>
			</form>
		</div>
	);
}
