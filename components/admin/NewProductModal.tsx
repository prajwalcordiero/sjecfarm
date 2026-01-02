"use client";

import { useState } from "react";

type Props = {
	open: boolean;
	onClose: () => void;
	onCreated: () => void;
};

export default function NewProductModal({
	open,
	onClose,
	onCreated,
}: Props) {
	const [loading, setLoading] = useState(false);

	if (!open) return null;

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
			onCreated();
			onClose();
		} else {
			alert(data.error || "Failed to create product");
		}
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop */}
			<div
				className="absolute inset-0 bg-black/40 backdrop-blur-sm"
				onClick={onClose}
			/>

			{/* Modal */}
			<div className="relative bg-white w-full max-w-lg rounded-2xl shadow-xl p-6 animate-in fade-in zoom-in">
				<h2 className="text-2xl font-semibold mb-1">
					Add New Product
				</h2>
				<p className="text-gray-500 mb-6 text-sm">
					Create a product for the store
				</p>

				<form onSubmit={submit} className="space-y-4">
					<input
						name="name"
						required
						placeholder="Product name"
						className="w-full rounded-lg border px-3 py-2"
					/>

					<div className="grid grid-cols-2 gap-4">
						<input
							name="price"
							type="number"
							required
							placeholder="Price"
							className="rounded-lg border px-3 py-2"
						/>
						<input
							name="stock"
							type="number"
							required
							placeholder="Stock"
							className="rounded-lg border px-3 py-2"
						/>
					</div>

					<select
						name="category"
						required
						className="w-full rounded-lg border px-3 py-2"
					>
						<option value="">Select category</option>
						<option value="bakery">Bakery</option>
						<option value="vegetables">Vegetables</option>
						<option value="eggs">Eggs</option>
					</select>

					<textarea
						name="description"
						placeholder="Description"
						rows={4}
						className="w-full rounded-lg border px-3 py-2"
					/>

					<input
						type="file"
						name="file"
						accept="image/*"
						required
						className="text-sm"
					/>

					<div className="flex justify-end gap-3 pt-4">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
						>
							Cancel
						</button>

						<button
							type="submit"
							disabled={loading}
							className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
						>
							{loading ? "Creating…" : "Create Product"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
