"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-end items-center p-4 gap-4 h-16">
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
        </header>
    )
}
