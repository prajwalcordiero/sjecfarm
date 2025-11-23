"use client";

import { UserButton } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full bg-black shadow-md py-4 px-6">
      {/* use justify-between to place left group and right group at extremes */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* LEFT GROUP */}
        <div className="flex items-center gap-3">
          {/* public/ asset path should start with / */}
          <img src="/sjec-logo.png" alt="SJEC" className="w-12 h-12 object-contain" />

          <Link href="/" className="text-2xl font-semibold text-white leading-tight">
            SJEC<br />
            FARM <br />
            PRODUCE
          </Link>
        </div>

        {/* RIGHT GROUP */}
        <div className="flex items-center gap-4">
          <Link href="/cart" aria-label="Cart">
            <ShoppingCart className="w-8 h-8 text-white hover:text-amber-100 cursor-pointer" />
          </Link>

          <UserButton />
        </div>
      </div>
    </header>
  );
}
