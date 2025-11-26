"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import LocalFont from 'next/font/local'

const Tomorrow = LocalFont({
  src: [
    { path: "../public/fonts/Tomorrow-Thin.ttf", weight: "300" }, 
    { path: "../public/fonts/Tomorrow-Bold.ttf", weight: "700" },
  ],
  variable: "--Tomorrow",
});


export default function Navbar() {
	
  const segment = useSelectedLayoutSegment();

  const isProducts = segment === "category";
	return (
		<header>
			<div className={`${isProducts ? "bg-white": "bg-[#212121]"} p-4 flex justify-between drop-shadow`}>
				<div className="flex items-center ">
					<img src={isProducts ? "/logo-black.png": "/logo.png"} alt="SJEC" className="w-12 h-12 object-contain" />
					<Link href="/" className={`text-[20px] font-semibold ${isProducts ? "text-[#1E1E1E]":"text-white"} pl-2 flex-col ${Tomorrow.variable}`}>
						<div className="font-bold">SJEC MART</div>
						<div className="text-[9px] font-thin">SLOGAN GOES HERE</div>
					</Link>
				</div>
				<div className="flex items-center gap-4 mr-4">
					<Link href="/cart"><ShoppingCart color={isProducts ? "#1E1E1E": "white"}/></Link>


					<SignedOut>
						<Link href="/sign-in">
							<button className="text-sm sm:text-base font-medium text-[#6c47ff]">
								Sign In
							</button>
						</Link>

						<Link href="/sign-up">
							<button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
								Sign Up
							</button>
						</Link>
					</SignedOut>
					<SignedIn>
						<UserButton />
					</SignedIn>
				</div>
			</div>
		</header>
	);
}
