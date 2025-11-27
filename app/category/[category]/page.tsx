"use client";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/ui/SearchBar";
import { db } from "@/lib/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = useParams();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!category) return;

      const normalizedCategory = category === "vegetable" ? "vegetables" : category;

      try {
        const ref = collection(db, "products", normalizedCategory, normalizedCategory);
        const querySnapshot = await getDocs(ref);
        const list: any[] = [];

        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });

        setProducts(list);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white z-10 shadow-sm px-6 py-4">
        <SearchBar />
      </div>

      <div className="px-6 mt-6">
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight capitalize">
          {category === "vegetables" && "Fresh Vegetables"}
          {category === "fruits" && "Seasonal Fruits"}
          {category === "bakery" && "Fresh Bakery Goods"}
          {category === "eggs" && "Fresh Farm Eggs"}
        </h1>

        {(category === "vegetables" || category === "fruits") && (
          <div className="mt-4 flex gap-3">
            <a
              href="/category/vegetables"
              className={`px-5 py-2 rounded-full border transition-all ${
                category === "vegetables"
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              Vegetables
            </a>

            <a
              href="/category/fruits"
              className={`px-5 py-2 rounded-full border transition-all ${
                category === "fruits"
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300"
              }`}
            >
              Fruits
            </a>
          </div>
        )}
      </div>

      <div className="px-6 mt-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-gray-500">No products found</p>
        ) : (
          <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
            {products.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
