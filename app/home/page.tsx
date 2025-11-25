"use client";

import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Navbar from "@/components/navbar";
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
      <Navbar />

     
      <main className="w-full min-h-screen bg-black flex flex-col items-center justify-start ">

        
        <h1 className="text-white text-center text-5xl md:text-4xl font-bold font-serif">
          Order food & Vegetables.<br /> The best from SJEC Mart!
        </h1>

      
        <div className="w-full flex justify-center mt-2 p-4 ">
          <input
            type="text"
            placeholder="  Search for pizza..."
            className="
                w-full
                max-w-[550px]
                bg-neutral-900
                text-white
                 h-10 px-6
                rounded-full
                outline-none
                border border-neutral-700
              "
          />
        </div>
        
        

        
        <div className="flex gap-8 ">
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
        <section className="w-full bg-white rounded-t-3xl h-72 p-10">
        <h1 className="font-bold text-3xl text-black ">Order the best Options</h1>
        <div>
            <div >

            </div>
        </div>
      </section>
      </main>

     
      
    </>
  );
}
