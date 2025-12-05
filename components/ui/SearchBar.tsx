"use client";
import { Search } from "lucide-react";

export default function SearchBar() {
    return (
        <div className="w-full flex justify-center">
            <div className="relative w-full max-w-xl">
                <input
                    type="text"
                    placeholder="Search for items…"
                    className="w-full h-12 pl-12 pr-4 rounded-2xl border border-slate-200 bg-white/80 shadow-[0_8px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl
                     text-[14px] text-slate-700 placeholder:text-slate-400 outline-none transition
                     focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200"
                />
                <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    color="#212121"
                />
            </div>
        </div>
    );
}
