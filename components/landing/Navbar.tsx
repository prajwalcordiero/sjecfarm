"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Farms", href: "/farms" },
	{ label: "Categories", href: "/categories" },
	{ label: "Green Story", href: "/green" },
	{ label: "About", href: "/about" },
];

export default function Navbar() {
	const [active, setActive] = useState("");

	return (
		<motion.nav
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ type: "spring", stiffness: 120, damping: 18 }}
			className="fixed top-0 left-0 z-100 w-full"
		>
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link
					href="/"
					className="flex items-center gap-2"
				>
					<div className="w-8 h-8 rounded-md bg-emerald-500"></div>
					<span className="text-[15px] font-extrabold tracking-tight text-slate-900">
						SJEC FARM PRODUCE
					</span>
				</Link>

				<div className="hidden gap-1 rounded-full border border-slate-200/80 bg-white/70 px-2 py-1 backdrop-blur-xl sm:flex">
					{navItems.map((item) => {
						const isActive = active === item.label;

						return (
							<button
								key={item.label}
								onMouseEnter={() => setActive(item.label)}
								onMouseLeave={() => setActive("")}
								className="relative px-4 py-1.5 text-xs font-medium text-slate-700 transition"
							>
								{isActive && (
									<motion.div
										layoutId="hoverBackground"
										className="absolute inset-0 rounded-full bg-slate-900/5"
										transition={{
											type: "spring",
											stiffness: 300,
											damping: 28,
										}}
									/>
								)}
								<span className="relative z-10">{item.label}</span>
							</button>
						);
					})}
				</div>

				<motion.div whileTap={{ scale: 0.96 }} className="rounded-xl bg-slate-50 py-1 text-[13px] font-medium text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5 hover:bg-slate-50/95">
					<Link
						href="/sign-in"
						className="p-4"
					>
						LOGIN
					</Link>
					<Link
						href="/sign-up"
						className="rounded-xl bg-slate-900 px-4 py-1.5 text-[13px] font-medium text-slate-50 shadow-[0_8px_20px_rgba(15,23,42,0.25)] transition hover:-translate-y-0.5 hover:bg-slate-900/95"
					>
						SIGNUP
					</Link>
				</motion.div>
			</div>

			<div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-slate-200/80 to-transparent" />
		</motion.nav>
	);
}
