"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Home, ShoppingCart } from "lucide-react";
import Link from "next/link";
import LocalFont from "next/font/local";

const Tomorrow = LocalFont({
	src: [
		{ path: "../public/fonts/Tomorrow-Thin.ttf", weight: "300" },
		{ path: "../public/fonts/Tomorrow-Bold.ttf", weight: "700" },
	],
	variable: "--Tomorrow",
});

export default function Navbar() {

	return (
		<header className="sticky top-0 left-0 z-100 w-full backdrop-blur-xl">
			<div className={`flex h-20 items-center justify-between px-5 sm:px-8 transition-colors bg-white border-b border-slate-200/70`}>
				<div className="flex items-center gap-3">
					<img
						src={"/logo-black.png"}
						className="w-12 h-12 object-contain"
						alt="SJEC Mart"
					/>
					<Link
						href="/"
						className={`flex flex-col ${Tomorrow.variable}`}
					>
						<span className="text-[18px] font-bold text-slate-900 tracking-tight">
							SJEC MART
						</span>
						<span className="text-[10px] font-medium text-slate-500 tracking-wide">
							Campus Groceries · Made Simple
						</span>
					</Link>
				</div>

				<div className="flex items-center gap-4">
					

					<SignedOut>
						<Link href="/sign-in">
							<button className="text-sm font-medium text-slate-700 hover:text-slate-900">
								Sign In
							</button>
						</Link>

						<Link href="/sign-up">
							<button className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-[0_6px_20px_rgba(0,0,0,0.16)] hover:bg-slate-900/90 transition">
								Sign Up
							</button>
						</Link>
					</SignedOut>

					<SignedIn>
						<Link href="/home">
							<div className="relative">
								<Home
									size={22}
									className="text-slate-700 hover:text-slate-900 transition"
								/>
							</div>
						</Link>
						<Link href="/cart">
							<div className="relative">
								<ShoppingCart
									size={22}
									className="text-slate-700 hover:text-slate-900 transition"
								/>
							</div>
						</Link>
						<UserButton afterSignOutUrl="/" />
					</SignedIn>
				</div>
			</div>
		</header>
	);
}