"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function OrderSuccess() {
  const params = useSearchParams();

  const productName = params.get("product");
  const qty = params.get("qty");
  const total = params.get("total");
  const paymentMethod = params.get("payment");

  const today = new Date();

  const todayDate = today.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const currentTime = today.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-xl rounded-3xl p-8 max-w-lg w-full text-center border border-gray-200">

        {/* Success Icon */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-extrabold text-green-600 mb-3">
          Order Confirmed!
        </h1>

        <p className="text-gray-700 mb-6 text-lg">
          Thank you for shopping with SJEC Farm!
        </p>

        {/* Order Details Card */}
        <div className="bg-gray-50 rounded-2xl p-4 text-left shadow-inner border border-gray-200">
          <p className="text-gray-800 text-base mb-2">
            
          </p>

          <p className="text-gray-800 text-base mb-2">
            
          </p>

          <p className="text-gray-800 text-base mb-2">
            <span className="font-bold">Payment Method:</span> {paymentMethod}
          </p>

          <p className="text-gray-800 text-base mb-2">
            <span className="font-bold">Total Paid:</span>{" "}
            <span className="text-green-600 font-semibold">₹{total}</span>
          </p>

          <p className="text-gray-800 text-base mt-3">
            <span className="font-bold">Pickup Location:</span> SJEC Farm
          </p>

          <p className="text-gray-800 text-base">
            <span className="font-bold">Date:</span> {todayDate}
          </p>

          <p className="text-gray-800 text-base">
            <span className="font-bold">Time:</span> {currentTime}
          </p>

          <p className="text-gray-600 text-sm mt-4">
            Please collect your order before <strong>5:00 PM today</strong>.
          </p>
        </div>

        {/* Go Home Button */}
        <Link
          href="/"
          className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition-all duration-200"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
