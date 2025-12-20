"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

export default function AdminOrdersPage() {
  const { user, isLoaded } = useUser();
  const [orders, setOrders] = useState([]);

  if (!isLoaded) return <p>Loading...</p>;

  const isAdmin = user?.publicMetadata?.role === "admin";
  if (!isAdmin) return <h2 className="text-red-600 text-xl">Access Denied</h2>;

  useEffect(() => {
    fetch("/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="text-black">
      <h1 className="text-3xl font-bold mb-6">User Orders</h1>

      {orders.length === 0 && <p>No orders yet.</p>}

      {orders.map((order: any, i) => (
        <div key={i} className="border rounded-xl p-4 mb-4 bg-white">
          <p><strong>Email:</strong> {order.email}</p>
          <p><strong>Name:</strong> {order.deliveryDetails.name}</p>
          <p><strong>Hostel:</strong> {order.deliveryDetails.hostel}</p>
          <p><strong>Room:</strong> {order.deliveryDetails.room}</p>
          <p><strong>Payment:</strong> {order.paymentMethod}</p>

          <h3 className="font-semibold mt-3">Products:</h3>
          <ul className="list-disc ml-5">
            {order.products.map((p: any, idx: number) => (
              <li key={idx}>
                {p.name} × {p.quantity} — ₹{p.price}
              </li>
            ))}
          </ul>

          <p className="font-bold mt-3">Total: ₹{order.totalAmount}</p>
        </div>
      ))}
    </div>
  );
}
