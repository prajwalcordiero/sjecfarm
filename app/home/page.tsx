"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CategoryCard from "@/components/ui/CategoryCard";
import LocalFont from "next/font/local";
import SearchBar from "@/components/ui/SearchBar";
const AtomicAge = LocalFont({
	src: [{ path: "../../public/fonts/AtomicAge-Regular.ttf" }],
	variable: "--Atomic-age",
});

export default function HomePage() {
	const { isSignedIn } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!isSignedIn) {
			router.replace("/");
		}
	}, [isSignedIn, router]);

	return (
		<main className="w-full min-h-[93vh] bg-[#f5f7f9] flex flex-col items-center">
			<div className="h-20" />

			<section className="w-full max-w-5xl flex flex-col items-center px-4 sm:px-6">
				<h1
					className={`text-center text-[34px] sm:text-[42px] lg:text-[48px] leading-tight text-slate-900 ${AtomicAge.className}`}
				>
					Order food &amp; vegetables.
					<br className="hidden sm:block" />
					<span className="mt-1 inline-block rounded-2xl bg-emerald-50 px-3 py-1 text-emerald-700">
						The best from SJEC Mart.
					</span>
				</h1>

				<div className="mt-6 w-full max-w-xl">
					<SearchBar />
				</div>
			</section>

			<section className="mt-12 flex flex-wrap items-stretch justify-center gap-10 px-4 sm:px-6">
				<Link href="/category/vegetable">
					<CategoryCard category="vegetable" />
				</Link>
				<Link href="/category/bakery">
					<CategoryCard category="bakery" />
				</Link>
				<Link href="/category/eggs">
					<CategoryCard category="eggs" />
				</Link>
			</section>

			<section className="mt-16 w-full rounded-t-3xl border-t border-slate-200/80 bg-white px-4 py-10 sm:px-8 lg:px-12">
				<div className="mx-auto flex max-w-5xl flex-col gap-4">
					<h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">
						Order the best options
					</h2>
					<p className="max-w-xl text-sm sm:text-[15px] text-slate-600">
						Hand-picked categories for SJEC campus — vegetables, bakery, eggs
						and essentials curated with local vendors and smarter delivery
						windows.
					</p>
				</div>
			</section>
		</main>
	);
}
