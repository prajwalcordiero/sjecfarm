"use client"

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar"
import CategoryCard from "@/components/ui/CategoryCard";

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
         <Navbar/>
         <div className="flex">
         <Sidebar/>
            <main className="  w-full min-h-screen bg-black">
                
                <div className="items-center h-screen flex flex-col justify-start ">
                
                <h1 className="text-4xl font-bold pb-4  ">Welcome to SJEC Farm</h1>
                <div className="flex flex-row ">
                    <div >
                        <Link href="/products">
                        <CategoryCard category="vegetable" />
                        </Link>
                    </div>
                    <div >
                        <CategoryCard category="bakery" />
                    </div>
                    <div>
                        <CategoryCard category="eggs" />
                    </div>

                </div>
                
                </div>
                
            </main>
            </div>
        </>
    )
}