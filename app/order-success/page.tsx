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
    month: "2-digit",
    year: "numeric",
  });

  const currentTime = today.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-white px-6 text-center">
      <div className="bg-gray-100 p-8 rounded-3xl shadow-xl border border-black max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-black">
          Thank You for Your Order!
        </h1>

        <p className="text-lg text-black whitespace-pre-line leading-7">
          {`Order Confirmed!\n`}
          {`Product: ${productName}\n`}
          {`Quantity: ${qty}\n`}
          {`Total: ₹${total}\n`}
          {`Payment: ${paymentMethod}\n\n`}
          {`You can collect your order at college SJEC Farm.\n\n`}
          {`Date: ${todayDate}\n`}
          {`Time: ${currentTime}\n`}
          {`Please collect your order before 5:00 PM today.`}
        </p>
        <Link href="/" className="text-black rounded-lg bg-green-600 p-2 mt-4">Go Back to Home</Link>
      </div>
    </div>
  );
}
