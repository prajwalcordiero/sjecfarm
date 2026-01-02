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

const metricChips = [
	{
		label: "Campus-grown",
		detail: "Vegetables and fruits grown within SJEC campus.",
	},
	{
		label: "Fresh produce",
		detail: "Daily-use items harvested close to consumption.",
	},
	{
		label: "Institution-led",
		detail: "Managed as part of SJEC sustainability initiatives.",
	},
];

const steps = [
	{
		title: "Grow",
		subtitle: "Cultivated inside the campus",
		body: "Vegetables and fruits are grown within SJEC premises through campus gardens and green zones, supporting sustainability and hands-on learning.",
	},
	{
		title: "Prepare",
		subtitle: "Handled and organised on campus",
		body: "Produce is sorted and prepared carefully, along with bakery items and eggs sourced from campus-supported facilities.",
	},
	{
		title: "Serve",
		subtitle: "Fresh food for the SJEC community",
		body: "Items are made available directly to students and staff, ensuring freshness, transparency and minimal wastage.",
	},
];

const microBlocks = [
	{
		tag: "Purpose",
		title: "Turning campus cultivation into daily nourishment.",
		body: "SJEC Mart connects food grown within the campus directly to its community, closing the gap between cultivation and consumption.",
	},
	{
		tag: "Approach",
		title: "Simple, local and sustainable.",
		body: "By focusing only on campus-grown produce, SJEC Mart avoids long supply chains and keeps food systems transparent and efficient.",
	},
	{
		tag: "Outcome",
		title: "Learning, sustainability and nutrition together.",
		body: "The initiative serves as a living example of how institutions can combine education, sustainability and food security.",
	},
];

const AboutSJECMart: React.FC = () => {
	return (
		<main className="relative min-h-screen w-full bg-[#f5f7f9] px-4 py-24 text-slate-900 sm:px-6 lg:px-12">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.12),transparent_60%)]" />

			<div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-14 lg:gap-16">
				<motion.section
					variants={stagger}
					initial="hidden"
					animate="visible"
					className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center"
				>
					<motion.div variants={fadeUp} className="space-y-6">
						<div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 shadow-sm backdrop-blur-xl">
							<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
							<span>About SJEC Mart</span>
							<span className="h-3 w-px bg-slate-200" />
							<span>Campus-grown produce</span>
						</div>

						<h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
							Bringing{" "}
							<span className="inline-block rounded-2xl bg-emerald-50 px-2.5 py-1 text-emerald-700">
								SJEC-grown food
							</span>{" "}
							directly to the campus community.
						</h1>

						<p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
							SJEC Mart is an initiative that makes use of vegetables, fruits,
							bakery items and eggs produced within the St Joseph Engineering
							College campus. It connects institutional cultivation efforts
							directly with students and staff, ensuring freshness,
							sustainability and transparency.
						</p>

						<div className="mt-4 flex flex-wrap gap-2.5">
							{metricChips.map((chip) => (
								<div
									key={chip.label}
									className="group rounded-full border border-slate-200/80 bg-white/80 px-3.5 py-2 text-[11px] shadow-sm backdrop-blur-xl transition hover:border-emerald-200 hover:bg-emerald-50/70"
								>
									<div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
										<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
										<span>{chip.label}</span>
									</div>
									<p className="mt-0.5 text-[11px] text-slate-500">
										{chip.detail}
									</p>
								</div>
							))}
						</div>
					</motion.div>

					{/* IMAGE SECTION – KEPT EXACTLY SAME */}
					<motion.div
						variants={fadeUp}
						className="relative h-80 rounded-3xl border border-white/60 bg-white/60 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.2)] backdrop-blur-2xl sm:h-[360px] lg:h-[380px]"
					>
						<div className="absolute inset-0 overflow-hidden rounded-2xl bg-slate-950/3" />
						<div className="relative z-10 grid h-full grid-cols-[1.3fr_1fr] gap-3">
							<div className="relative overflow-hidden rounded-2xl">
								<Image
									src="/green.jpeg"
									alt="Campus-grown vegetables and fruits"
									fill
									className="object-cover"
									priority
								/>
								<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
								<div className="pointer-events-none absolute left-3 bottom-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] text-slate-100">
									SJEC campus cultivation
								</div>
							</div>

							<div className="flex flex-col gap-3">
								<div className="relative h-1/2 overflow-hidden rounded-2xl">
									<Image
										src="/extra.jpeg"
										alt="Bakery items prepared for campus use"
										fill
										className="object-cover"
									/>
									<div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-slate-950/55 via-transparent to-transparent" />
									<div className="pointer-events-none absolute left-3 bottom-2 text-[11px] font-medium text-slate-100">
										Campus bakery support
									</div>
								</div>
								<div className="relative h-1/2 overflow-hidden rounded-2xl">
									<Image
										src="/hand.webp"
										alt="Eggs and produce from campus-supported facilities"
										fill
										className="object-cover"
									/>
									<div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-slate-950/55 via-transparent to-transparent" />
									<div className="pointer-events-none absolute left-3 bottom-2 text-[11px] font-medium text-slate-100">
										Eggs & fresh produce
									</div>
								</div>
							</div>
						</div>

						<div className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-500 shadow-sm">
							SJEC sustainability initiative
						</div>
					</motion.div>
				</motion.section>

				{/* MICRO BLOCKS */}
				<motion.section
					variants={stagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.35 }}
					className="grid gap-4 md:grid-cols-3"
				>
					{microBlocks.map((block) => (
						<motion.article
							key={block.title}
							variants={fadeUp}
							className="flex flex-col rounded-3xl border border-slate-200/80 bg-white/90 p-4 text-[13px] text-slate-600 shadow-sm backdrop-blur-xl sm:p-5"
						>
							<span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
								{block.tag}
							</span>
							<h2 className="mt-2 text-[14px] font-semibold text-slate-900 sm:text-[15px]">
								{block.title}
							</h2>
							<p className="mt-2 text-[12px] leading-relaxed text-slate-600">
								{block.body}
							</p>
						</motion.article>
					))}
				</motion.section>

				{/* STEPS */}
				<motion.section
					variants={stagger}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					className="grid gap-10 border-t border-slate-200/70 pt-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-start"
				>
					<motion.div variants={fadeUp} className="space-y-6">
						<div className="space-y-2">
							<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500">
								From campus to community
							</p>
							<h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
								How SJEC-grown food reaches students and staff.
							</h2>
							<p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
								Every stage — from cultivation to consumption — happens within
								or around the SJEC ecosystem, reinforcing sustainability and
								practical learning.
							</p>
						</div>

						<div className="space-y-4">
							{steps.map((step, index) => (
								<div
									key={step.title}
									className="flex gap-3 rounded-3xl border border-slate-200/80 bg-white/90 p-4 text-[13px] text-slate-600 shadow-sm backdrop-blur-xl"
								>
									<div className="flex flex-col items-center pt-0.5">
										<div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-[11px] font-medium text-slate-50">
											{index + 1}
										</div>
										{index < steps.length - 1 && (
											<span className="mt-1 h-6 w-px rounded-full bg-slate-200" />
										)}
									</div>
									<div className="space-y-1">
										<p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-500">
											{step.title}
										</p>
										<p className="text-[13px] font-semibold text-slate-900">
											{step.subtitle}
										</p>
										<p className="text-[12px] leading-relaxed text-slate-600">
											{step.body}
										</p>
									</div>
								</div>
							))}
						</div>
					</motion.div>

					{/* IMAGE ASIDE – KEPT SAME */}
					<motion.aside variants={fadeUp} className="relative lg:top-24">
						<div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-[0_22px_60px_rgba(15,23,42,0.22)] backdrop-blur-2xl">
							<div className="relative h-64 sm:h-72">
								<Image
									src="/sjec.jpg"
									alt="SJEC campus greenery and cultivation"
									fill
									className="object-cover"
								/>
								<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
							</div>

							<div className="border-t border-white/70 bg-linear-to-br from-slate-50/95 to-slate-100/95 p-4 text-[12px] text-slate-600 sm:p-5">
								<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
									Why this matters
								</p>
								<p className="mt-1.5">
									SJEC Mart demonstrates how campus resources can be used
									thoughtfully to support nutrition, sustainability and
									education at the same time.
								</p>
							</div>
						</div>
					</motion.aside>
				</motion.section>
			</div>
		</main>
	);
};

export default AboutSJECMart;
