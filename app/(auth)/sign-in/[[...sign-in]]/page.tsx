"use client"

import { SignIn } from "@clerk/nextjs";
export default function Page() {
    return (
        <main className="min-h-[60vh] grid place-items-center p-6">
            <SignIn redirectUrl={"/home"} />
        </main>
    )
}