"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { db } from "@/lib/firebase/firebase";
import { collection, getDocs, query, orderBy, startAt, endAt } from "firebase/firestore";
import { useRouter } from "next/navigation";

interface Product {
  id: string;
  name: string;
}

export default function SearchBar() {
  const [text, setText] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!text.trim()) {
      setResults([]);
      return;
    }

    const fetchSuggestions = async () => {
      const productsRef = collection(db, "products");

      // Firestore prefix search
      const q = query(productsRef, orderBy("name"), startAt(text), endAt(text + "\uf8ff"));
      const snap = await getDocs(q);

      const items: Product[] = snap.docs.map((doc) => ({
        id: doc.id,
        name: (doc.data() as Product).name,
      }));

      setResults(items.slice(0, 6)); // show top 6 suggestions
    };

    fetchSuggestions();
  }, [text]);

  const handleSelect = (id: string) => {
    router.push(`/product/${id}`);
    setText("");
    setResults([]);
  };

  return (
    <div className="w-full flex justify-center relative">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder="Search for items…"
          className="w-full h-12 pl-12 pr-4 rounded-2xl border border-slate-200 bg-white/80 shadow-[0_8px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl
                     text-[14px] text-slate-700 placeholder:text-slate-400 outline-none transition
                     focus:border-emerald-300 focus:ring-2 focus:ring-emerald-200"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          color="#212121"
        />

        {results.length > 0 && (
          <div className="absolute w-full bg-white rounded-xl shadow-lg border mt-2 z-50">
            {results.map((item) => (
              <div
                key={item.id}
                className="p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(item.id)}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
