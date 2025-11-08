"use client"

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

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
            <main className="mx-auto max-w-5xl p-6">
                <h1 className="text-2xl font-semibold">Home</h1>
                <p className="opacity-80 mt-2">You're signed in. Continue shopping.</p>
                <Link href="/products">Products</Link>
            </main>
        </>
    )
}