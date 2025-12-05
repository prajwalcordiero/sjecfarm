"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Clock3 } from "lucide-react";

export default function OrderSuccessPage() {
	const router = useRouter();

	return (
		<div className="min-h-screen bg-[#f5f7fa] flex items-center justify-center px-4 py-10 text-slate-900">
			<motion.div
				initial={{ opacity: 0, y: 18 }}
				animate={{ opacity: 1, y: 0 }}
				className="w-full max-w-xl rounded-3xl bg-white/95 border border-slate-200/70 shadow-[0_22px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl px-6 py-8 sm:px-8 sm:py-10"
			>
				<div className="flex justify-center">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						transition={{ type: "spring", stiffness: 200, damping: 18 }}
						className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50"
					>
						<CheckCircle2 className="h-9 w-9 text-emerald-600" />
					</motion.div>
				</div>

				<div className="mt-6 text-center">
					<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
						Order placed successfully
					</h1>
					<p className="mt-2 text-sm sm:text-[15px] text-slate-600 max-w-sm mx-auto">
						Your SJEC Mart order is now being prepared and will be routed to your
						hostel block inside campus.
					</p>
				</div>

				<div className="mt-6 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-4 text-[13px] text-slate-600">
					<div className="flex justify-between">
						<span className="font-medium text-slate-700">Order status</span>
						<span className="text-emerald-700 font-semibold">Confirmed</span>
					</div>
					<div className="mt-3 flex items-center justify-between gap-4">
						<div className="flex items-center gap-2">
							<Clock3 className="h-4 w-4 text-slate-500" />
							<span className="text-[12px] text-slate-600">
								Est. delivery: Today evening
							</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin className="h-4 w-4 text-slate-500" />
							<span className="text-[12px] text-slate-600">
								Inside SJEC campus
							</span>
						</div>
					</div>
				</div>

				<div className="mt-5 grid grid-cols-3 gap-3 text-center text-[11px] text-slate-600">
					<div className="rounded-2xl bg-white border border-slate-200/70 px-3 py-2">
						<p className="font-medium text-slate-800">Step 1</p>
						<p className="mt-1 text-[11px]">Packed at vendor</p>
					</div>
					<div className="rounded-2xl bg-white border border-slate-200/70 px-3 py-2">
						<p className="font-medium text-slate-800">Step 2</p>
						<p className="mt-1 text-[11px]">Batched into crate</p>
					</div>
					<div className="rounded-2xl bg-white border border-slate-200/70 px-3 py-2">
						<p className="font-medium text-slate-800">Step 3</p>
						<p className="mt-1 text-[11px]">Dropped at hostel</p>
					</div>
				</div>

				<div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-3">
					<button
						onClick={() => router.push("/")}
						className="w-full sm:w-auto rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-md hover:bg-emerald-700 transition"
					>
						Back to home
					</button>
					<button
						onClick={() => router.push("/cart")}
						className="w-full sm:w-auto rounded-full border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
					>
						View cart
					</button>
				</div>

				<p className="mt-4 text-center text-[11px] text-slate-500">
					You'll receive updates from your delivery partner once the crate is on
					its way to your block.
				</p>
			</motion.div>
		</div>
	);
}
