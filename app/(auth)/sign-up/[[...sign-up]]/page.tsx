"use client"

import { SignUp } from "@clerk/nextjs";
export default function Page() {
    return (
        <main className="min-h-[60vh] grid place-items-center p-6">
            <SignUp redirectUrl={"/home"} />
        </main>
    )
}