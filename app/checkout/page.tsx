"use client";

import { useCart } from "@/components/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function CheckoutPage() {
	const { cart, updateQuantity, removeItem } = useCart();
	const router = useRouter();

	const totalPrice = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [hostel, setHostel] = useState("");
	const [payment, setPayment] = useState("cod");

	const handlePlaceOrder = () => {
		if (!name || !hostel || !room) {
			alert("Please fill in all delivery details.");
			return;
		}

		router.push("/order-success");
	};

	return (
		<div className="min-h-screen bg-[#f5f7fa] py-10 px-4 text-slate-900">
			<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					className="lg:col-span-2 bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-6"
				>
					<h1 className="text-2xl font-semibold mb-6">Checkout</h1>

					<div>
						<h2 className="text-lg font-semibold mb-4">Delivery Details</h2>

						<div className="grid sm:grid-cols-2 gap-4">
							<input
								className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white/70 outline-none focus:border-emerald-500 transition"
								placeholder="Full Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>

							<input
								className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white/70 outline-none focus:border-emerald-500 transition"
								placeholder="Hostel Name (e.g., LH1 / MH2 / Staff Quarters)"
								value={hostel}
								onChange={(e) => setHostel(e.target.value)}
							/>

							<input
								className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-white/70 outline-none focus:border-emerald-500 transition"
								placeholder="Room / Block Number"
								value={room}
								onChange={(e) => setRoom(e.target.value)}
							/>
						</div>
					</div>

					<hr className="my-8" />

					<div>
						<h2 className="text-lg font-semibold mb-4">Payment Method</h2>

						<div className="flex flex-col gap-3">
							<label
								className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer border transition
								  ${payment === "cod"
										? "border-emerald-500 bg-emerald-50"
										: "border-slate-300 bg-white"
									}`}
							>
								<input
									type="radio"
									name="payment"
									className="scale-125"
									checked={payment === "cod"}
									onChange={() => setPayment("cod")}
								/>
								<div className="text-sm">
									<p className="font-semibold">Cash on Delivery</p>
									<p className="text-slate-500 text-xs">Pay when your order arrives.</p>
								</div>
							</label>

							<label
								className={`flex items-center gap-3 p-4 rounded-2xl cursor-pointer border transition
									  ${payment === "upi"
										? "border-emerald-500 bg-emerald-50"
										: "border-slate-300 bg-white"
									}`}
							>
								<input
									type="radio"
									name="payment"
									className="scale-125"
									checked={payment === "upi"}
									onChange={() => setPayment("upi")}
								/>
								<div className="text-sm">
									<p className="font-semibold">UPI Payment</p>
									<p className="text-slate-500 text-xs">GPay / PhonePe / Paytm</p>
								</div>
							</label>
						</div>
					</div>

					<hr className="my-8" />

					<h2 className="text-lg font-semibold mb-3">Your Items</h2>

					<div className="space-y-4">
						{cart.map((item) => (
							<div
								key={item.id}
								className="flex justify-between items-center bg-white rounded-xl p-4 border border-slate-200/60 shadow-sm"
							>
								<div className="flex items-center gap-4">
									<img
										src={item.imageUrl}
										className="w-16 h-16 object-cover rounded-xl border border-slate-200"
									/>
									<div>
										<p className="font-medium">{item.name}</p>
										<p className="text-[13px] text-slate-500">Qty: {item.quantity}</p>
									</div>
								</div>
								<p className="font-semibold text-emerald-700">₹{item.price * item.quantity}</p>
							</div>
						))}
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-white/95 backdrop-blur-xl rounded-3xl border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.08)] p-6 sticky top-6 h-fit"
				>
					<h2 className="text-xl font-semibold mb-4">Order Summary</h2>

					<div className="flex justify-between mb-2 text-sm">
						<span>Subtotal</span>
						<span>₹{totalPrice}</span>
					</div>

					<div className="flex justify-between mb-2 text-sm">
						<span>Delivery Fee</span>
						<span className="text-emerald-600">FREE</span>
					</div>

					<hr className="my-3" />

					<div className="flex justify-between text-lg font-semibold">
						<span>Total</span>
						<span>₹{totalPrice}</span>
					</div>

					<p className="text-slate-500 text-xs mt-2">
						Delivering anywhere inside SJEC campus.
					</p>

					<button
						onClick={handlePlaceOrder}
						className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-full mt-6 shadow-md transition"
					>
						Confirm & Place Order
					</button>
				</motion.div>
			</div>
		</div>
	);
}
