"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  imageUrl: string;
}

export default function ProductsPage() {
  const { user, isLoaded } = useUser();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Wait until Clerk user is loaded
  useEffect(() => {
    if (!isLoaded) return;

    // Check if user is admin
    const isAdmin = user?.publicMetadata?.role === "admin";
    if (!isAdmin) {
      setError("Access Denied: You are not an admin.");
      setLoading(false);
      return;
    }

    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error(`Failed to fetch products. Status: ${res.status}`);
        }
        const data = await res.json();
        setProducts(data.products || []);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [isLoaded, user]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  if (products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="text-black">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className="border p-2">Image</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td className="border p-2">
                <img
                  src={p.imageUrl}
                  className="w-16 h-16 object-cover rounded"
                  alt={p.name}
                />
              </td>
              <td className="border p-2">{p.name}</td>
              <td className="border p-2">{p.category}</td>
              <td className="border p-2">₹{p.price}</td>
              <td className="border p-2">{p.stock}</td>
              <td className="border p-2">
                <a
                  className="text-blue-600 hover:underline mr-3"
                  href={`/admin/products/${p.category}/${p.id}`}
                >
                  Edit
                </a>
                <button
                  className="text-red-600 hover:underline"
                  onClick={async () => {
                    if (!confirm("Delete product?")) return;

                    try {
                      const res = await fetch(`/api/products/${p.category}/${p.id}`, {
                        method: "DELETE",
                      });
                      if (!res.ok) throw new Error("Delete failed");
                      setProducts(products.filter((prod) => prod.id !== p.id));
                    } catch (err: any) {
                      alert(err.message || "Failed to delete product");
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
