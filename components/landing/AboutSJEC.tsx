"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const fadeInUp = {
	hidden: { opacity: 0, y: 18 },
	visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const stats = [
	{
		label: "Established",
		value: "2002",
		detail: "Over two decades of engineering & management education.",
	},
	{
		label: "Students",
		value: "~2300",
		detail: "Across UG, PG and research programmes.",
	},
	{
		label: "Location",
		value: "Vamanjoor, Mangaluru",
		detail: "A green, well-connected campus in coastal Karnataka.",
	},
];

const pillars = [
	{
		title: "Autonomous under VTU",
		body: "SJEC operates as an autonomous institute under Visvesvaraya Technological University, Belagavi, with the flexibility to craft modern, industry-aligned curricula.",
		tag: "Academic Autonomy",
	},
	{
		title: "Recognised by AICTE",
		body: "All core programmes are approved by the All India Council for Technical Education, with multiple NBA-accredited B.E. programmes and NAAC A+ accreditation.",
		tag: "Accreditations",
	},
	{
		title: "Engineering, MBA & MCA",
		body: "The college offers undergraduate and postgraduate programmes in engineering, business administration and computer applications, along with research opportunities in multiple disciplines.",
		tag: "Programs",
	},
];

const campusLife = [
	{
		title: "Clubs, Fests & Student Life",
		body: "From TIARA tech fest to cultural and sports events, SJEC balances academics with vibrant student-led initiatives, technical clubs and professional bodies.",
	},
	{
		title: "Green & Future-Ready Campus",
		body: "The campus emphasises discipline, infrastructure, placements and green initiatives, creating a space that feels both professional and welcoming.",
	},
	{
		title: "Connected to the City",
		body: "Located about 10 km from Mangaluru city centre, the campus is accessible by frequent buses along the national highway towards Moodbidri.",
	},
];

const AboutSJEC: React.FC = () => {
	return (
		<main className="relative min-h-screen w-full bg-[#f5f7f9] px-4 py-24 text-slate-900 sm:px-6 lg:px-12">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.11),transparent_55%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.12),transparent_60%)]" />

			<div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 lg:gap-14">
				<motion.section
					variants={staggerChildren}
					initial="hidden"
					animate="visible"
					className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
				>
					<motion.div variants={fadeInUp} className="space-y-4 max-w-3xl">
						<div className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.16em] text-slate-500 shadow-sm backdrop-blur-xl">
							<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
							<span>About SJEC</span>
							<span className="h-3 w-px bg-slate-200" />
							<span>St Joseph Engineering College, Mangaluru</span>
						</div>

						<h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
							A top engineering college in{" "}
							<span className="inline-block rounded-2xl px-2.5 py-1 text-emerald-700">
								Vamanjoor, Mangaluru
							</span>
							with an autonomous, modern academic ecosystem.
						</h1>

						<p className="max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
							St Joseph Engineering College (SJEC) is an autonomous engineering
							and management institution under Visvesvaraya Technological
							University, Belagavi, recognized by AICTE and rooted in the
							Diocese of Mangalore. It brings together engineering, business and
							computer applications under one contemporary campus.
						</p>
					</motion.div>
					<motion.div
					  className="absolute top-0 right-0 bottom-0"
					  initial={{ scale: 1.04, opacity: 0 }}
					  animate={{ scale: 1, opacity: 1 }}
					  transition={{ duration: 0.9, ease: "easeOut" }}
					>
					  <Image
						src="/sjec.jpg"
						alt="Curated grocery basket for SJEC hostels"
						fill
						className="object-cover"
						priority
					  />
					</motion.div>

					<motion.div
						variants={fadeInUp}
						className="inline-flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-xs text-slate-600 shadow-sm backdrop-blur-xl lg:mb-1"
					>
						<div className="flex flex-col">
							<span className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
								Campus Address
							</span>
							<span className="mt-1 text-[13px] font-semibold text-slate-900">
								Vamanjoor, Mangaluru, Karnataka 575028
							</span>
							<span className="text-[11px] text-slate-500">
								A calm, green campus linked to the city by frequent buses.
							</span>
						</div>
					</motion.div>
				</motion.section>

				<motion.section
					variants={staggerChildren}
					initial="hidden"
					animate="visible"
					className="grid gap-3 sm:grid-cols-3"
				>
					{stats.map((item) => (
						<motion.div
							key={item.label}
							variants={fadeInUp}
							className="rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl sm:p-5"
						>
							<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
								{item.label}
							</p>
							<p className="mt-2 text-xl font-semibold text-slate-900">
								{item.value}
							</p>
							<p className="mt-1 text-[12px] leading-relaxed text-slate-500">
								{item.detail}
							</p>
						</motion.div>
					))}
				</motion.section>

				<motion.section
					variants={staggerChildren}
					initial="hidden"
					animate="visible"
					className="grid gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)_minmax(0,1fr)]"
				>
					{pillars.map((pillar) => (
						<motion.article
							key={pillar.title}
							variants={fadeInUp}
							className="relative flex flex-col rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-2xl sm:p-6"
						>
							<div className="inline-flex items-center gap-2 rounded-full bg-slate-50/90 px-3 py-1 text-[11px] font-medium text-slate-500">
								<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
								<span>{pillar.tag}</span>
							</div>
							<h2 className="mt-3 text-base font-semibold text-slate-900 sm:text-lg">
								{pillar.title}
							</h2>
							<p className="mt-2 text-[13px] leading-relaxed text-slate-600">
								{pillar.body}
							</p>
						</motion.article>
					))}
				</motion.section>

				<motion.section
					variants={staggerChildren}
					initial="hidden"
					animate="visible"
					className="grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)] lg:items-start"
				>
					<div className="space-y-5">
						<motion.div
							variants={fadeInUp}
							className="max-w-xl space-y-2 rounded-3xl border border-slate-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-xl"
						>
							<p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-400">
								Academic & Campus Life
							</p>
							<p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
								SJEC combines strong academics with a rich campus experience:
								engineering departments, MBA and MCA programmes, research
								centres, student clubs, sports facilities and a consistent focus
								on discipline, values and professional readiness.
							</p>
						</motion.div>

						<div className="grid gap-4 sm:grid-cols-3">
							{campusLife.map((item) => (
								<motion.div
									key={item.title}
									variants={fadeInUp}
									className="rounded-3xl border border-slate-200/80 bg-white/80 p-4 text-[12px] leading-relaxed text-slate-600 shadow-sm backdrop-blur-xl"
								>
									<p className="text-[12px] font-semibold text-slate-900">
										{item.title}
									</p>
									<p className="mt-1.5 text-[12px] text-slate-600">
										{item.body}
									</p>
								</motion.div>
							))}
						</div>
					</div>

					<motion.aside
						variants={fadeInUp}
						className="rounded-3xl border border-slate-200/80 bg-white/90 p-5 text-[13px] text-slate-600 shadow-[0_18px_45px_rgba(15,23,42,0.16)] backdrop-blur-2xl sm:p-6"
					>
						<div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-medium text-emerald-700">
							<span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
							<span>SJEC FARM PRODUCE connection</span>
						</div>

						<h3 className="mt-3 text-sm font-semibold text-slate-900">
							Why SJEC matters for SJEC FARM PRODUCE
						</h3>
						<p className="mt-2 text-[13px] leading-relaxed text-slate-600">
							SJEC FARM PRODUCE is built specifically for this campus community:
							students, staff and hostels at SJEC. The college’s structured
							schedule, hostels, green initiatives and local ecosystem of
							vendors make it a natural home for a premium, campus-focused
							grocery platform.
						</p>
						<p className="mt-3 text-[12px] text-slate-500">
							By aligning with SJEC&apos;s values of discipline, academic
							excellence and sustainability, SJEC FARM PRODUCE can feel less like a side
							project and more like a real extension of campus life.
						</p>

						<div className="mt-4 grid grid-cols-2 gap-3 border-t border-slate-200/80 pt-4 text-[11px]">
							<div className="space-y-1">
								<p className="font-medium uppercase tracking-[0.16em] text-slate-400">
									Hostels & Blocks
								</p>
								<p className="text-[12px] font-semibold text-slate-900">
									Evening delivery focus
								</p>
								<p className="text-[11px] text-slate-500">
									Designed around class hours and hostel timings.
								</p>
							</div>
							<div className="space-y-1">
								<p className="font-medium uppercase tracking-[0.16em] text-slate-400">
									Green Lens
								</p>
								<p className="text-[12px] font-semibold text-slate-900">
									Local & reuse-first
								</p>
								<p className="text-[11px] text-slate-500">
									Nearby farms, reusable crates, smart routing.
								</p>
							</div>
						</div>
					</motion.aside>
				</motion.section>
			</div>
		</main>
	);
};

export default AboutSJEC;
