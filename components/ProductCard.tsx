"use client";
import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useRouter } from "next/navigation";
import Toast from "./Toast";

interface Product {
  id: string;
  name: string;
  price: number;
}

export default function ProductCard({ item }: { item: Product }) {
  const cart = useCart();
  if (!cart) throw new Error("useCart must be used within CartProvider");
  const { addToCart } = cart;
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleBuyNow = (item: Product) => {
    router.push(
      `/checkout?id=${item.id}&name=${item.name}&price=${item.price}`
    );
  };

  const handleAddToCart = (item: Product) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1,
    });

    setMessage(`${item.name} added to cart!`);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-4 border border-gray-100">
        <h3 className="mt-3 text-lg font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">₹{item.price}</p>

        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="px-4 py-1.5 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition"
          >
            Add
          </button>

          <button
            onClick={() => handleBuyNow(item)}
            className="px-4 py-1.5 border rounded-full text-sm text-black hover:bg-gray-100 transition"
          >
            Buy now
          </button>
        </div>
      </div>

      <Toast message={message} />
    </>
  );
}
