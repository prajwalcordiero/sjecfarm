"use client";
import Link from "next/link";

import { useCart } from "@/components/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  return (
    <div className="p-6 bg-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-black">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-black">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.id}
            className="border p-4 mb-4 rounded-xl flex items-center gap-4"
          >
            <img src={item.imageUrl} className="w-20 h-20" />
            <div>
              <p className="font-bold text-black">{item.name}</p>
              <p className="text-black">₹{item.price}</p>
              <p className="text-black">Quantity: {item.quantity}</p>
              
            </div>
            
          </div>
          
        ))
      )}
    </div>
    
  );
}
