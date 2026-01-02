"use client";

import { useEffect, useState } from "react";

type Props = {
	open: boolean;
	onClose: () => void;
	category: string;
	id: string;
	onUpdated: () => void;
};

export default function EditProductModal({
	open,
	onClose,
	category,
	id,
	onUpdated,
}: Props) {
	const [loading, setLoading] = useState(true);
	const [product, setProduct] = useState<any>(null);

	useEffect(() => {
		if (!open) return;

		setLoading(true);
		fetch(`/api/products/${category}/${id}`)
			.then(res => res.json())
			.then(data => {
				setProduct(data);
				setLoading(false);
			});
	}, [open, id]);

	if (!open) return null;

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

		onUpdated();
		onClose();
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
					Edit Product
				</h2>
				<p className="text-gray-500 mb-6 text-sm">
					Update product details
				</p>

				{loading ? (
					<div className="text-gray-500">Loading…</div>
				) : (
					<form onSubmit={update} className="space-y-4">
						<input
							name="name"
							defaultValue={product.name}
							className="w-full rounded-lg border px-3 py-2"
							placeholder="Product name"
						/>

						<div className="grid grid-cols-2 gap-4">
							<input
								name="price"
								defaultValue={product.price}
								type="number"
								className="rounded-lg border px-3 py-2"
								placeholder="Price"
							/>
							<input
								name="stock"
								defaultValue={product.stock}
								type="number"
								className="rounded-lg border px-3 py-2"
								placeholder="Stock"
							/>
						</div>

						<textarea
							name="description"
							defaultValue={product.description}
							className="w-full rounded-lg border px-3 py-2"
							placeholder="Description"
							rows={4}
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
								className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
							>
								Save Changes
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	);
}
