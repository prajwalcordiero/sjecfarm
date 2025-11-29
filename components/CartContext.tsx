"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useUser } from "@clerk/nextjs";

type CartItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  updateQuantity: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const { user } = useUser();
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from DB when user logs in
  useEffect(() => {
    if (!user) return;

    fetch("/api/cart")
      .then((res) => res.json())
      .then((data) => setCart(data.cart || []));
  }, [user]);

  const saveToDB = async (item: CartItem) => {
    await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" },
    });
  };

  const deleteFromDB = async (id: string) => {
    await fetch(`/api/cart?id=${id}`, { method: "DELETE" });
  };

  const addToCart = async (product: Omit<CartItem, "quantity">) => {
    const existing = cart.find((i) => i.id === product.id);
    const newQty = existing ? existing.quantity + 1 : 1;
    const newItem: CartItem = { ...product, quantity: newQty };

    await saveToDB(newItem);

    setCart((prev) => {
      if (existing) {
        return prev.map((i) => (i.id === product.id ? newItem : i));
      }
      return [...prev, newItem];
    });
  };

  const updateQuantity = async (id: string, qty: number) => {
    const item = cart.find((i) => i.id === id);

    if (!item) return; // ✅ item not found, do nothing

    if (qty <= 0) {
      await deleteFromDB(id);
      setCart((prev) => prev.filter((i) => i.id !== id));
      return;
    }

    const updated: CartItem = { ...item, quantity: qty };
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

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
