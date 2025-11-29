"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { cart, updateQuantity, removeItem } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-4 text-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">

        {/* LEFT SIDE: ITEMS */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-4">
            <h1 className="text-2xl font-bold mb-4">My Cart ({cart.length})</h1>

            {cart.length === 0 && (
              <p>Your cart is empty</p>
            )}

            {cart.map((item) => (
              <div key={item.id} className="border-b py-5 flex gap-4">

                {/* Image */}
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-28 h-28 object-cover rounded-md"
                />

                {/* Item Details */}
                <div className="flex-1">
                  <p className="text-lg font-semibold">{item.name}</p>
                  <p className="text-gray-600 text-sm">Seller: SJEC Farm</p>

                  {/* Pricing */}
                  <div className="mt-2">
                    <span className="text-xl font-bold text-black">₹{item.price}</span>
                  </div>

                  {/* Quantity controls */}
                  <div className="mt-3 flex items-center gap-4">
                    <button
                      className="px-2 border rounded"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>

                    <span className="text-lg">{item.quantity}</span>

                    <button
                      className="px-2 border rounded"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>

                    {/* <button className="text-blue-600 text-sm ml-4">Save for Later</button> */}

                    <button
                      className="text-red-600 text-sm"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {cart.length > 0 && (
              <div className="text-right mt-4">
<Link href={`/payment?total=${totalPrice}`}>
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded">
                  Place Order
                </button>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT SIDE: PRICE SUMMARY */}
        {cart.length > 0 && (
          <div>
            <div className="bg-white shadow-sm rounded-lg p-4 sticky top-4">
              <h2 className="text-xl font-semibold mb-4">Price Details</h2>

              <div className="flex justify-between mb-2">
                <span>Price ({cart.length} items)</span>
                <span>₹{totalPrice}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Discount</span>
                <span className="text-green-600">− ₹0</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Delivery Charges</span>
                <span className="text-green-600">FREE</span>
              </div>

              <hr className="my-3" />

              <div className="flex justify-between font-bold text-lg">
                <span>Total Amount</span>
                <span>₹{totalPrice}</span>
              </div>

              <p className="text-green-600 mt-2 text-sm">You will save ₹0 on this order</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
