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
		tag: "Responsible consumption",
		title: "Reducing waste begins with small daily choices.",
		body:
			"By limiting single-use plastics and encouraging mindful consumption, " +
			"SJEC promotes habits that are simple, practical, and impactful within campus life.",
	},
	{
		tag: "Sustainable sourcing",
		title: "Local, thoughtful, and campus-conscious.",
		body:
			"Resources and supplies are sourced responsibly, prioritising local availability " +
			"and reducing unnecessary transportation and environmental strain.",
	},
	{
		tag: "Campus harmony",
		title: "Practices aligned with learning and living.",
		body:
			"Green initiatives at SJEC are designed to work quietly alongside academic life, " +
			"supporting sustainability without disrupting daily campus routines.",
	},
];

const METRICS = [
	{
		label: "Cleaner campus environment",
		value: "Everyday impact",
		hint: "Maintained through collective participation.",
	},
	{
		label: "Energy & resource awareness",
		value: "Growing culture",
		hint: "Driven by sustainable practices and education.",
	},
	{
		label: "Student involvement",
		value: "Active & continuous",
		hint: "Through clubs, initiatives, and awareness programs.",
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
							<span>Green Initiatives</span>
							<span className="h-3 w-px bg-emerald-200" />
							<span>St Joseph Engineering College</span>
						</div>

						<h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-[2.1rem]">
							Building a campus where{" "}
							<span className="inline-block rounded-2xl bg-emerald-50 px-2.5 py-1 text-emerald-700">
								sustainability becomes a way of life
							</span>
							.
						</h2>

						<p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
							At St Joseph Engineering College, green initiatives reflect a deep
							commitment to environmental responsibility. The campus encourages
							sustainable thinking through everyday practices that promote
							cleanliness, conservation, and ecological balance.
						</p>

						<div className="mt-4 grid gap-3 text-[12px] text-slate-600 sm:grid-cols-2">
							<div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-xl">
								<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
									Our vision
								</p>
								<p className="mt-1.5">
									To create a campus environment where innovation and
									sustainability move together, shaping responsible engineers
									for the future.
								</p>
							</div>
							<div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur-xl">
								<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
									Our approach
								</p>
								<p className="mt-1.5">
									Green practices are integrated into daily operations,
									academic activities, and student engagement across campus.
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
								alt="Green campus initiatives at SJEC"
								fill
								className="object-cover"
							/>
							<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
							<div className="pointer-events-none absolute left-3 bottom-3 inline-flex items-center gap-2 rounded-full bg-black/65 px-3 py-1 text-[11px] text-slate-50">
								<span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
								A greener campus · Everyday practices
							</div>
						</div>

						<div className="absolute left-7 bottom-7 flex flex-col gap-2 text-[11px]">
							<span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 font-medium text-emerald-700 shadow-sm">
								<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
								Clean spaces · Green choices
							</span>
							<span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 font-medium text-slate-600 shadow-sm">
								<span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
								Learning with responsibility
							</span>
						</div>

						<div className="absolute right-7 top-10 rounded-2xl bg-white/95 px-3 py-2 text-[11px] text-slate-600 shadow-md">
							<p className="font-medium text-slate-900">Core belief</p>
							<p className="mt-0.5 text-[10px] text-slate-500">
								Sustainability begins with everyday actions.
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
								Impact on campus
							</p>
							<p className="text-sm text-slate-600 sm:text-[15px]">
								These initiatives help create a healthier campus environment
								while building long-term awareness and responsibility.
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
