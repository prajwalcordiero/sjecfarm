"use client";
import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useRouter } from "next/navigation";
import Toast from "./Toast";

export default function ProductCard({ item }: any) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [message, setMessage] = useState("");

  const handleBuyNow = (item: any) => {
    router.push(
      `/checkout?src=buy&id=${item.id}&name=${item.name}&price=${item.price}&imageUrl=${item.imageUrl}`
    );
  };

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      imageUrl: item.imageUrl,
      quantity: 1,
      stock: item.stock
    });

    setMessage(`${item.name} added to cart!`);
    setTimeout(() => setMessage(""), 2000);
  };

	const handleSelect = (id: string) => {
		router.push(`/products/${id}`);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-4 border border-gray-100">
        <div className="cursor-pointer" onClick={() => handleSelect(item.id)} >
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-40 object-cover rounded-lg"
          />

          <h3 className="mt-3 text-lg font-semibold text-gray-900">
            {item.name}
          </h3>

          <p className="text-sm text-gray-500">₹{item.price}</p>
        </div>
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

      {/* Toast Popup */}
      <Toast message={message} />
    </>
  );
}
