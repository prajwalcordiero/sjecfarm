"use client";
import Navbar from "@/components/navbar";
import { useSearchParams, useRouter } from "next/navigation"; // added useRouter
import { useState, useEffect } from "react";

export default function CheckoutPage() {
  const params = useSearchParams();
  const router = useRouter(); // initialize router

  const productName = params.get("name") || "Product";
  const productPrice = Number(params.get("price")) || 0;
  const imageUrl = params.get("imageUrl") || "/placeholder.jpg";

  const [qty, setQty] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [total, setTotal] = useState(productPrice);

  useEffect(() => {
    setTotal(productPrice * qty);
  }, [qty, productPrice]);

  const confirmOrder = () => {
    // redirect to success page instead of alert
    router.push(
      `/order-success?product=${productName}&qty=${qty}&total=${total}&payment=${paymentMethod}`
    );
  };

  return (
    <>
      <div className="bg-white text-black l-8" style={{ padding: 20 }}>
        <h1 className="text-4xl m-4">Checkout</h1>

        <h2 className="text-2xl font-bold">{productName}</h2>

        {/* Product Image */}
        <img
          src={imageUrl}
          alt={productName}
          className="w-40 h-40 object-contain mt-4"
        />

        <p className="mt-3 text-xl">Price: ₹{productPrice}</p>

        {/* Quantity Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginTop: 10,
          }}
        >
          <button
            className="text-xl rounded-lg border-2 p-2 "
            onClick={() => setQty((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <span>{qty}</span>
          <button
            className="text-xl rounded-lg border-2 p-2 "
            onClick={() => setQty((q) => q + 1)}
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <h3 style={{ marginTop: 20 }} className="text-2xl">
          Total: ₹{total}
        </h3>

        {/* Payment Method */}
        <div className="text-xl mt-5">
          <h4>Select Payment Method:</h4>

          <label>
            <input
              type="radio"
              name="payment"
              value="cod"
              checked={paymentMethod === "cod"}
              onChange={() => setPaymentMethod("cod")}
            />
            Cash on Delivery
          </label>
        </div>

        <div className="text-xl">
          <label>
            <input
              type="radio"
              name="payment"
              value="online"
              checked={paymentMethod === "online"}
              onChange={() => setPaymentMethod("online")}
            />
            Online Payment
          </label>
        </div>

        {/* Confirm Order */}
        <button
          onClick={confirmOrder}
          style={{
            marginTop: 30,
            padding: "10px 20px",
            background: "green",
            color: "white",
            borderRadius: 6,
            cursor: "pointer",
          }}
        >
          Confirm Order
        </button>
      </div>
    </>
  );
}
