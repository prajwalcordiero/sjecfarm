"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = (e: any) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?query=${query}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full flex justify-center mt-4">
      <div className="relative w-full max-w-[668px]">

        {/* Background Box */}
        <div className="absolute inset-0 bg-[#363636] rounded-[25px]"></div>

        {/* Input */}
        <input
          type="text"
          placeholder="  Search for products..."
          className="relative w-full h-14 rounded-[25px] bg-transparent text-white px-4 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </form>
  );
}
