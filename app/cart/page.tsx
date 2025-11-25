"use client";

import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { cart } = useCart();
  console.log(cart)

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            className="border p-4 mb-4 rounded-xl flex items-center gap-4"
          >
            <img src={item.imageUrl} className="w-20 h-20" />
            <div>
              <p className="font-bold">{item.name}</p>
              <p>₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
