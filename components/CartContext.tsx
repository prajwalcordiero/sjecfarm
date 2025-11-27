"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

const CartContext = createContext(null);

export function CartProvider({ children }: any) {
  const { user } = useUser();
  const [cart, setCart] = useState([]);

  // 🔄 Load cart from DB when user logs in
  useEffect(() => {
    if (!user) return;

    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => setCart(data.cart || []));
  }, [user]);

  const saveToDB = async (item: any) => {
    await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify(item),
    });
  };

  const deleteFromDB = async (id: string) => {
    await fetch(`/api/cart?id=${id}`, { method: "DELETE" });
  };

  const addToCart = async (product: any) => {
    const existing = cart.find((i) => i.id === product.id);
    const newQty = existing ? existing.quantity + 1 : 1;

    const newItem = { ...product, quantity: newQty };

    await saveToDB(newItem);

    setCart((prev) => {
      if (existing) {
        return prev.map((i) => (i.id === product.id ? newItem : i));
      }
      return [...prev, newItem];
    });
  };

  const updateQuantity = async (id: string, qty: number) => {
    if (qty <= 0) {
      await deleteFromDB(id);
      setCart((prev) => prev.filter((i) => i.id !== id));
      return;
    }

    const item = cart.find((i) => i.id === id);
    const updated = { ...item, quantity: qty };
    await saveToDB(updated);

    setCart((prev) => prev.map((i) => (i.id === id ? updated : i)));
  };

  const removeItem = async (id: string) => {
    await deleteFromDB(id);
    setCart((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
