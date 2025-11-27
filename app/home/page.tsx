"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import CategoryCard from "@/components/ui/CategoryCard";
import LocalFont from 'next/font/local'
import SearchBar from "@/components/ui/SearchBar";
const AtomicAge = LocalFont({
	src: [{ path: "../../public/fonts/AtomicAge-Regular.ttf" }],
	variable: "--Atomic-age"
})


export default function HomePage() {
	const { isSignedIn } = useUser();
	const router = useRouter();

	useEffect(() => {
		if (!isSignedIn) {
			router.replace("/");
		}
	}, [isSignedIn, router]);

	return (
		<>
			<main className="w-full min-[93vh] bg-[#212121] flex flex-col items-center justify-start">
				<h1 className={`text-white text-center text-[50px] ${AtomicAge.className} p-10`}>
					Order food & Vegetables. The <br />best from SJEC Mart!
				</h1>
				<SearchBar />
				<div className="flex gap-[100px] m-15">
					<Link href="/category/vegetable">
						<CategoryCard category="vegetable" />
					</Link>
					<Link href="/category/bakery">
						<CategoryCard category="bakery" />
					</Link>
					<Link href="/category/eggs">
						<CategoryCard category="eggs" />
					</Link>
				</div>
				<section className="w-full h-full bg-white rounded-t-3xl p-12">
					<h1 className="font-bold text-3xl text-black ">Order the best Options</h1>
				</section>
			</main>
		</>
	);
}
