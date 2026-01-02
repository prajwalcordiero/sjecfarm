"use client";

import { useEffect, useState } from "react";

type Product = {
	price: number;
	stock: number;
};

export default function AdminDashboard() {
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/products")
			.then(res => res.json())
			.then(data => {
				setProducts(data.products || []);
				setLoading(false);
			});
	}, []);

	if (loading) {
		return (
			<div className="text-gray-500 mt-10">
				Loading dashboard…
			</div>
		);
	}

	const totalProducts = products.length;
	const totalStock = products.reduce((s, p) => s + p.stock, 0);
	const outOfStock = products.filter(p => p.stock === 0).length;
	const inventoryValue = products.reduce(
		(s, p) => s + p.price * p.stock,
		0
	);

	return (
		<div className="space-y-10">
			<div>
				<h1 className="text-3xl font-semibold tracking-tight">
					Dashboard
				</h1>
				<p className="text-gray-500 mt-1">
					Store overview & health
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
				<Stat title="Total Products" value={totalProducts} />
				<Stat title="Total Stock Units" value={totalStock} />
				<Stat
					title="Out of Stock"
					value={outOfStock}
					danger
				/>
				<Stat
					title="Inventory Value"
					value={`₹${inventoryValue}`}
				/>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<div className="bg-white rounded-2xl shadow-sm p-6">
					<h2 className="font-medium mb-2">
						Stock Alerts
					</h2>
					<p className="text-sm text-gray-500">
						{outOfStock > 0
							? `${outOfStock} products need restocking`
							: "All products are in stock"}
					</p>
				</div>

				<div className="bg-white rounded-2xl shadow-sm p-6">
					<h2 className="font-medium mb-2">
						Inventory Health
					</h2>
					<p className="text-sm text-gray-500">
						Inventory value helps track capital locked in stock.
					</p>
				</div>
			</div>
		</div>
	);
}

function Stat({
	title,
	value,
	danger,
}: {
	title: string;
	value: any;
	danger?: boolean;
}) {
	return (
		<div className="bg-white rounded-2xl shadow-sm p-6">
			<p className="text-sm text-gray-500">{title}</p>
			<p
				className={`text-2xl font-semibold mt-2 ${
					danger ? "text-red-600" : ""
				}`}
			>
				{value}
			</p>
		</div>
	);
}
