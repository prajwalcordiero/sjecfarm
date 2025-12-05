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
		label: "Campus-only",
		detail: "Designed just for SJEC students & staff.",
	},
	{
		label: "Local-first sourcing",
		detail: "Farms, bakeries and vendors near campus.",
	},
	{
		label: "Green delivery",
		detail: "Reusable crates, fewer random trips.",
	},
];

const steps = [
	{
		title: "Curate",
		subtitle: "From pantry chaos to calm baskets",
		body: "Instead of endless categories, SJEC FARM PRODUCE groups items into short, focused flows: fruits, veggies, bakery, eggs and essentials — tuned to what hostel life actually needs.",
	},
	{
		title: "Batch",
		subtitle: "Orders that travel together",
		body: "Orders are batched by hostel blocks and time windows. That means less zig-zag routing and more predictable delivery time for clusters of students.",
	},
	{
		title: "Deliver",
		subtitle: "Crates, not clutter",
		body: "Deliveries land in reusable crates, with lower plastic usage and cleaner handovers to hostel lobbies or designated drop points.",
	},
];

const microBlocks = [
	{
		tag: "Problem",
		title: "City-scale apps feel overkill inside campus.",
		body: "Most grocery apps are built for entire cities. Filters, surge slots, random delivery windows — it’s noisy for a single college campus.",
	},
	{
		tag: "Approach",
		title: "Design for one campus, deeply.",
		body: "SJEC FARM PRODUCE embraces the constraint: one campus, known hostels, predictable time windows. That lets the UI stay minimal, while the system logic stays smart.",
	},
	{
		tag: "Outcome",
		title: "A product case study, not just a project.",
		body: "The goal is something you can proudly show as a product story — UX, logistics, sustainability and campus life woven together.",
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
							<span>About SJEC FARM PRODUCE</span>
							<span className="h-3 w-px bg-slate-200" />
							<span>GreenBasket for one campus</span>
						</div>

						<h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.6rem]">
							A campus-only grocery platform that treats{" "}
							<span className="inline-block rounded-2xl bg-emerald-50 px-2.5 py-1 text-emerald-700">
								hostel life
							</span>{" "}
							like a real product use-case.
						</h1>

						<p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
							SJEC FARM PRODUCE (internally called GreenBasket) focuses on exactly one
							environment: the SJEC campus. Instead of competing with city-scale
							apps, it optimizes for predictable hostel drops, local vendors and
							greener delivery patterns — all inside a calm, premium interface.
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

					<motion.div
						variants={fadeUp}
						className="relative h-80 rounded-3xl border border-white/60 bg-white/60 p-3 shadow-[0_24px_60px_rgba(15,23,42,0.2)] backdrop-blur-2xl sm:h-[360px] lg:h-[380px]"
					>
						<div className="absolute inset-0 overflow-hidden rounded-2xl bg-slate-950/3" />
						<div className="relative z-10 grid h-full grid-cols-[1.3fr_1fr] gap-3">
							<div className="relative overflow-hidden rounded-2xl">
								<motion.div
									className="absolute inset-0"
									initial={{ scale: 1.04, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.9, ease: "easeOut" }}
								>
									<Image
										src="/green.jpeg"
										alt="Curated grocery basket for SJEC hostels"
										fill
										className="object-cover"
										priority
									/>
								</motion.div>
								<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
								<div className="pointer-events-none absolute left-3 bottom-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] text-slate-100">
									Evening hostel drop · 7:30 PM
								</div>
							</div>

							<div className="flex flex-col gap-3">
								<div className="relative h-1/2 overflow-hidden rounded-2xl">
									<Image
										src="/extra.jpeg"
										alt="Hostel corridor where crates are delivered"
										fill
										className="object-cover"
									/>
									<div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-slate-950/55 via-transparent to-transparent" />
									<div className="pointer-events-none absolute left-3 bottom-2 text-[11px] font-medium text-slate-100">
										Hostel blocks as delivery nodes
									</div>
								</div>
								<div className="relative h-1/2 overflow-hidden rounded-2xl">
									<Image
										src="/hand.webp"
										alt="Nearby farm sourcing produce for SJEC FARM PRODUCE"
										fill
										className="object-cover"
									/>
									<div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-slate-950/55 via-transparent to-transparent" />
									<div className="pointer-events-none absolute left-3 bottom-2 text-[11px] font-medium text-slate-100">
										Nearby farms · Morning sourcing
									</div>
								</div>
							</div>
						</div>

						<div className="pointer-events-none absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-500 shadow-sm">
							Built as a student product story
						</div>
					</motion.div>
				</motion.section>

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
								From selection to crate
							</p>
							<h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
								How an SJEC FARM PRODUCE order actually moves through the system.
							</h2>
							<p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-[15px]">
								We treat the entire journey as a designed flow: what the student
								sees, how the order is grouped, how it moves across campus, and
								how it finally lands at a hostel block — ideally in a shared,
								reusable crate instead of a pile of plastic bags.
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

					<motion.aside
						variants={fadeUp}
						className="relative lg:top-24"
					>
						<div className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/90 shadow-[0_22px_60px_rgba(15,23,42,0.22)] backdrop-blur-2xl">
							<div className="relative h-64 sm:h-72">
								<Image
									src="/sjec.jpg"
									alt="Reusable grocery crates used for SJEC FARM PRODUCE deliveries"
									fill
									className="object-cover"
								/>
								<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
								<div className="pointer-events-none absolute left-4 bottom-4 space-y-1 text-[11px] text-slate-100">
									<p className="inline-flex items-center rounded-full bg-black/55 px-2.5 py-1 font-medium">
										<span className="mr-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
										Shared crate · Not single-use bags
									</p>
									<p className="text-[11px] text-slate-200">
										Each crate can serve multiple evening drops before being
										cycled back to vendors.
									</p>
								</div>
							</div>

							<div className="border-t border-white/70 bg-linear-to-br from-slate-50/95 to-slate-100/95 p-4 text-[12px] text-slate-600 sm:p-5">
								<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
									Why this matters
								</p>
								<p className="mt-1.5">
									SJEC FARM PRODUCE uses the visual language of premium software
									products, but the real story sits here — in how baskets are
									grouped, how crates are reused and how routes respect the way
									students actually live on campus.
								</p>
								<p className="mt-2 text-[11px] text-slate-500">
									That&apos;s what turns a “grocery website” into a product
									you&apos;d proudly put into a portfolio or a case study.
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
