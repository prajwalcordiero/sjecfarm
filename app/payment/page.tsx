"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function PaymentPage() {
    const router = useRouter();
    const params = useSearchParams();

const productName = params.get("product");
const quantity = params.get("qty");


  
  const totalBill = Number(params.get("total")) || 0;

  const [paymentMethod, setPaymentMethod] = useState("");

  function handleConfirm() {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

router.push(
  `/order-success?payment=${paymentMethod}&total=${totalBill}&product=${productName}&qty=${quantity}`
);

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-black p-4">
      <div className="bg-white shadow-xl p-6 rounded-2xl w-full max-w-md">
        
        {/* Total Bill Section */}
        <h2 className="text-xl font-semibold text-center mb-4">
          Total Bill: <span className="text-green-600">₹{totalBill}</span>
        </h2>

        <hr className="mb-6" />

        <h1 className="text-2xl font-bold text-center mb-6">Select Payment Method</h1>

        {/* Cash on Delivery */}
        <label className="block border p-4 rounded-xl mb-4 cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            className="mr-3"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        {/* Online Payment */}
        <label className="block border p-4 rounded-xl mb-6 cursor-pointer hover:bg-gray-50">
          <input
            type="radio"
            name="payment"
            value="Online Payment"
            className="mr-3"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Online Payment
        </label>

        {/* Confirm Order Button */}
        <button
          onClick={handleConfirm}
          className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700"
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
