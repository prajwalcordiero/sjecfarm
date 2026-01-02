"use client";

import { useCart } from "@/components/CartContext";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function CartPage() {
	const { cart, updateQuantity, removeItem } = useCart();
	const router = useRouter();

	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.quantity, 0
	);
	
	const handlePlaceOrder = () => {
		router.push(`/checkout?src=cart`);
	}

	return (
		<div className="min-h-screen bg-[#f5f7fa] py-10 px-4 text-slate-900">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					className="lg:col-span-2 bg-white/95 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_rgba(15,23,42,0.08)] border border-slate-200/60 p-6"
				>
					<h1 className="text-2xl font-semibold text-slate-900 mb-6">
						My Cart <span className="text-slate-500">({cart.length})</span>
					</h1>

					{cart.length === 0 && (
						<p className="text-slate-500 text-sm">Your cart is empty.</p>
					)}

					{cart.map((item) => (
						<div
							key={item.id}
							className="flex gap-4 py-6 border-b border-slate-200/50"
						>
							<div className="w-28 h-28 rounded-xl overflow-hidden border border-slate-200/60 shadow-sm">
								<img
									src={item.imageUrl}
									alt={item.name}
									className="w-full h-full object-cover"
								/>
							</div>

							<div className="flex-1">
								<p className="text-[16px] font-semibold">{item.name}</p>
								<p className="text-[12px] text-slate-500">Seller: SJEC Mart</p>

								<p className="text-[18px] font-semibold text-emerald-700 mt-2">
									₹{item.price}
								</p>

								<div className="mt-4 flex items-center gap-4">
									<button
										onClick={() => updateQuantity(item.id, item.quantity - 1)}
										className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-[18px] hover:bg-slate-100 transition"
									>
										−
									</button>

									<span className="text-lg font-medium">
										{item.quantity}
									</span>

									<button
										onClick={() => updateQuantity(item.id, item.quantity + 1)}
										className="w-8 h-8 rounded-full border border-slate-300 flex items-center justify-center text-[18px] hover:bg-slate-100 transition"
									>
										+
									</button>

									<button
										onClick={() => removeItem(item.id)}
										className="text-red-500 text-sm font-medium hover:underline ml-2"
									>
										Remove
									</button>
								</div>
							</div>
						</div>
					))}

					{cart.length > 0 && (
						<div className="text-right mt-6">
							<button onClick={handlePlaceOrder} className="bg-emerald-600 hover:bg-emerald-700 transition text-white px-6 py-3 rounded-full font-medium shadow-md">
								Place Order
							</button>
						</div>
					)}
				</motion.div>


				{cart.length > 0 && (
					<motion.div
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-6 sticky top-6 h-fit"
					>
						<h2 className="text-xl font-semibold mb-4 text-slate-900">
							Price Details
						</h2>

						<div className="flex justify-between text-[15px] mb-2">
							<span>Price ({cart.length} items)</span>
							<span>₹{totalPrice}</span>
						</div>

						<div className="flex justify-between text-[15px] mb-2">
							<span>Discount</span>
							<span className="text-emerald-600">− ₹0</span>
						</div>

						<div className="flex justify-between text-[15px] mb-2">
							<span>Delivery Charges</span>
							<span className="text-emerald-600">FREE</span>
						</div>

						<hr className="my-3" />

						<div className="flex justify-between font-semibold text-lg text-slate-900">
							<span>Total Amount</span>
							<span>₹{totalPrice}</span>
						</div>

						<p className="text-emerald-600 mt-2 text-sm">
							You will save ₹0 on this order
						</p>
					</motion.div>
				)}
			</div>
		</div>
	);
}
