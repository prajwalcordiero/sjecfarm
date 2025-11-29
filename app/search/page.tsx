"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const params = useSearchParams();
  const query = params.get("query")?.toLowerCase() || "";

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch all products from Firestore
  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data.products || []);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query)
  );

  return (
    <div className="p-6 text-black">
      <h1 className="text-2xl font-bold mb-4">
        Search results for "{query}"
      </h1>

      {loading && <p>Loading...</p>}

      {!loading && filtered.length === 0 && (
        <p>No matching products found.</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <img
              src={item.imageUrl}
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="mt-2 font-semibold">{item.name}</h2>
            <p className="text-gray-700">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
