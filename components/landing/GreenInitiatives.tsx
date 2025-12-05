"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
	hidden: { opacity: 0, y: 18 },
	visible: { opacity: 1, y: 0 },
};

const stagger = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const INITIATIVES = [
	{
		tag: "Plastic-light deliveries",
		title: "Reusable crate loops instead of single-use bags.",
		body: "Orders headed to the same hostel block are grouped into shared crates. The crate travels, not a pile of thin bags, and then cycles back on the next run.",
	},
	{
		tag: "Near-campus sourcing",
		title: "Short routes from local farms & vendors.",
		body: "Most produce is pulled from vendors around SJEC, which keeps drive-time low and reduces the number of half-empty vehicles entering campus.",
	},
	{
		tag: "Smart batching windows",
		title: "Evening drops tuned to hostel schedules.",
		body: "Instead of random doorbells, SJEC Mart prefers a few well-defined time windows so delivery partners can batch more orders into fewer trips.",
	},
];

const METRICS = [
	{
		label: "Plastic bags avoided / month",
		value: "~120+",
		hint: "Assuming a typical exam-season order volume.",
	},
	{
		label: "Avg. stops per route",
		value: "4–5 blocks",
		hint: "Clustered by hostel & staff quarters.",
	},
	{
		label: "Reuse cycles per crate",
		value: "3–7x",
		hint: "Before crates are inspected and rotated.",
	},
];

const GreenInitiatives: React.FC = () => {
	return (
		<section className="relative w-full bg-[#f5f7f9] px-4 py-20 text-slate-900 sm:px-6 lg:px-12">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.08),transparent_65%)]" />

			<div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-14">
				<motion.div
					variants={stagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.35 }}
					className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] lg:items-center"
				>
					<motion.div variants={fadeUp} className="space-y-5">
						<div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-700">
							<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
							<span>Green initiatives</span>
							<span className="h-3 w-px bg-emerald-200" />
							<span>SJEC Mart · Campus routes</span>
						</div>

						<h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.1rem]">
							Making groceries feel lighter on{" "}
							<span className="inline-block rounded-2xl bg-emerald-50 px-2.5 py-1 text-emerald-700">
								SJEC&apos;s campus footprint
							</span>
							, not just lighter on your wallet.
						</h2>

						<p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
							SJEC Mart isn&apos;t only a way to click &quot;Add to cart.&quot;
							It&apos;s a small experiment in running a respectful logistics
							system inside a closed campus: fewer plastic bags, smarter routes,
							and delivery patterns that work with SJEC&apos;s rhythm instead of
							fighting it.
						</p>

						<div className="mt-4 grid gap-3 text-[12px] text-slate-600 sm:grid-cols-2">
							<div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-xl">
								<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
									Design lens
								</p>
								<p className="mt-1.5">
									Think of each order as part of a shared route, not an
									isolated transaction. The UI nudges students towards timed
									slots that cluster naturally.
								</p>
							</div>
							<div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-xl">
								<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
									Operational lens
								</p>
								<p className="mt-1.5">
									Crates and baskets have lifecycles. They move from vendor to
									campus and back, giving you numbers you can actually track in
									a case study.
								</p>
							</div>
						</div>
					</motion.div>

					<motion.div
						variants={fadeUp}
						className="relative h-[260px] sm:h-[280px] lg:h-[310px]"
					>
						<div className="absolute inset-x-4 bottom-0 top-6 rounded-3xl border border-white/70 bg-white/90 shadow-[0_22px_60px_rgba(15,23,42,0.22)] backdrop-blur-2xl" />

						<div className="absolute left-6 right-6 top-3 h-[55%] overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-950/5">
							<Image
								src="/green.jpeg"
								alt="Reusable crates stacked for SJEC Mart deliveries"
								fill
								className="object-cover"
							/>
							<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
							<div className="pointer-events-none absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-[11px] text-slate-50">
								<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
								Evening crate batch · Hostel blocks
							</div>
						</div>

						<div className="absolute left-7 bottom-7 flex flex-col gap-2 text-[11px]">
							<span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700 shadow-sm">
								<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
								1 crate = many orders
							</span>
							<span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 font-medium text-slate-600 shadow-sm">
								<span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
								Fewer trips across campus roads
							</span>
						</div>

						<div className="absolute right-7 top-10 rounded-2xl bg-white/95 px-3 py-2 text-[11px] text-slate-600 shadow-md">
							<p className="font-medium text-slate-900">Green baseline</p>
							<p className="mt-0.5 text-[10px] text-slate-500">
								Every feature is checked against: “Does this add noise,
								plastic, or extra distance?”
							</p>
						</div>
					</motion.div>
				</motion.div>

				<motion.div
					variants={stagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.25 }}
					className="grid gap-4 md:grid-cols-3"
				>
					{INITIATIVES.map((item) => (
						<motion.article
							key={item.tag}
							variants={fadeUp}
							className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white/92 p-4 text-[13px] text-slate-600 shadow-sm backdrop-blur-xl sm:p-5"
						>
							<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-emerald-500">
								{item.tag}
							</p>
							<h3 className="mt-2 text-[14px] font-semibold text-slate-900 sm:text-[15px]">
								{item.title}
							</h3>
							<p className="mt-2 text-[12px] leading-relaxed text-slate-600">
								{item.body}
							</p>
						</motion.article>
					))}
				</motion.div>

				<motion.div
					variants={stagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="rounded-3xl border border-slate-200/80 bg-white/90 p-4 shadow-[0_18px_40px_rgba(15,23,42,0.16)] backdrop-blur-2xl sm:p-5"
				>
					<motion.div
						variants={fadeUp}
						className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
					>
						<div className="space-y-1">
							<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
								Tracking the impact
							</p>
							<p className="text-sm text-slate-600 sm:text-[15px]">
								These numbers are simple approximations — but they&apos;re the
								kind of metrics you can put on a slide when you talk about SJEC
								Mart as a real environmental experiment.
							</p>
						</div>
					</motion.div>

					<div className="mt-4 grid gap-3 sm:grid-cols-3">
						{METRICS.map((metric) => (
							<motion.div
								key={metric.label}
								variants={fadeUp}
								className="rounded-2xl bg-slate-50/80 p-3 text-[11px] text-slate-600"
							>
								<p className="font-medium uppercase tracking-[0.16em] text-slate-400">
									{metric.label}
								</p>
								<p className="mt-1 text-[15px] font-semibold text-slate-900">
									{metric.value}
								</p>
								<p className="mt-1 text-[11px] text-slate-500">
									{metric.hint}
								</p>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default GreenInitiatives;
