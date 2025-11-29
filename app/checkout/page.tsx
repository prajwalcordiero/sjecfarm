"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

export default function BuyNowPage() {
  const params = useSearchParams();

  // Get query params safely with fallbacks
  const name = params.get("name") || "Product";
  const price = Number(params.get("price")) || 0;
  const imageUrl = params.get("imageUrl") || "/default-image.jpg";

  const [quantity, setQuantity] = useState(1);

  const totalAmount = price * quantity;

  return (
    <div className="bg-gray-100 min-h-screen p-4 text-black">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* LEFT SIDE */}
        <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm">
          <h1 className="text-2xl font-bold mb-4">Buy Now</h1>

          <div className="flex gap-4">
            <img
              src={imageUrl}
              alt={name}
              className="w-32 h-32 object-cover rounded-md"
            />

            <div className="flex-1">
              <p className="text-xl font-semibold">{name}</p>
              <p className="text-gray-600">Seller: SJEC Farm</p>

              <div className="text-xl font-bold mt-2">₹{price}</div>

              {/* QUANTITY */}
              <div className="mt-3 flex items-center gap-4">
                <button
                  className="px-2 border rounded"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>

                <span className="text-lg">{quantity}</span>

                <button
                  className="px-2 border rounded"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE SUMMARY */}
        <div className="bg-white shadow-sm rounded-lg p-4 h-fit">
          <h2 className="text-xl font-semibold mb-4">Price Details</h2>

          <div className="flex justify-between mb-2">
            <span>Price</span>
            <span>₹{totalAmount}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span className="text-green-600">FREE</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span>
            <span>₹{totalAmount}</span>
          </div>

          <Link
            href={`/payment?total=${totalAmount}&product=${encodeURIComponent(
              name
            )}&qty=${quantity}`}
          >
            <button className="bg-orange-500 hover:bg-orange-600 text-white w-full mt-4 py-2 rounded">
              Proceed to Payment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
