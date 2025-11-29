"use client";

import { useState } from "react";

export default function NewProduct() {
	const [loading, setLoading] = useState(false);

	const submit = async (e: any) => {
		e.preventDefault();
		setLoading(true);

		const form = new FormData(e.target);

		const res = await fetch("/api/products", {
			method: "POST",
			body: form,
		});

		const data = await res.json();
		setLoading(false);

		if (data.ok) {
			alert("Product created!");
			window.location.href = "/admin/products";
		} else {
			alert(data.error);
		}
	};

	return (
		<div className="text-black">
			<h1 className="text-3xl font-bold mb-4">Add Product</h1>

			<form onSubmit={submit} className="grid gap-4 max-w-md">
				<input name="name" placeholder="Name" className="border p-2" required />
				<input name="price" type="number" placeholder="Price" className="border p-2" required />
				<input name="stock" type="number" placeholder="Stock" className="border p-2" required />

				<select name="category" className="border p-2" required>
					<option value="">Select Category</option>
					<option value="bakery">Bakery</option>
					<option value="vegetables">Vegetables</option>
					<option value="eggs">Eggs</option>
				</select>

				

				<input type="file" name="file" accept="image/*" required />

				<button disabled={loading} className="bg-blue-600 text-white py-2 rounded">
					{loading ? "Saving..." : "Create Product"}
				</button>
			</form>
		</div>
	);
}
