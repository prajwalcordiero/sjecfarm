"use client";

import { UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";


export default function Navbar() {
  return (
    <header className="w-full pt-5 bg-black shadow-md ">
      
      <div className="flex  justify-between">
       
        <div className="flex items-center ">
            <Link href="/">
  <span className="text-3xl cursor-pointer bg-black border-2 rounded-2xl p-0.5 border-white pr-2 text-white pl-2 ml-4 mr-8 ">←</span>
</Link>
          
          <img src="/logo.png" alt="SJEC" className="w-12 h-12 object-contain" />


          <Link href="/" className="text-2xl font-semibold text-white leading-tight">
            SJEC MART
          </Link>
        </div>

        
        <div className="flex items-center gap-4 mr-4">
          <Link href="/cart"><ShoppingCart/></Link>
         

          <UserButton />
        </div>
      </div>
    </header>
  );
}
