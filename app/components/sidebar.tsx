"use-client";
import {UserButton} from "@clerk/nextjs";
import Link from "next/link";

export default function Sidebar() {
    return(
        <div>
        <aside className="w-64 flex flex-col h-screen bg-[#3F3E3D] p-6">
            <Link href="/" className="text-xl p-3 hover:underline">
            Vegetables </Link>
                        <Link href="/" className="text-xl p-3 hover:underline ">
            Fruits </Link>
                        <Link href="/" className="text-xl p-3 hover:underline">
            Bakery Items</Link>
                        <Link href="/" className="text-xl p-3 hover:underline">
            Eggs </Link>
            <Link href="/" className="text-xl p-3 hover:underline">
            Settings
            </Link>
                        <Link href="/" className="text-xl p-3 hover:underline">
            About us </Link>

        </aside>
        </div>


    )
}
 