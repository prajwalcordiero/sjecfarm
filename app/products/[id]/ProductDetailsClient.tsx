"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useCart } from "@/components/CartContext";
import type { Product } from "@/types/product";

export default function ProductDetailsClient({
  product,
}: {
  product: Product;
}) {
  const router = useRouter();
  const { addToCart } = useCart();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* ---------- HERO PRODUCT SECTION ---------- */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
        >
          {/* IMAGE */}
          <div className="relative">
            <div className="aspect-square rounded-[32px] bg-[#f6f7f8] flex items-center justify-center">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-contain p-10"
              />
            </div>
          </div>

          {/* DETAILS */}
          <div className="flex flex-col gap-8">
            {/* CATEGORY */}
            {product.category && (
              <span className="text-xs uppercase tracking-[0.2em] text-emerald-600">
                {product.category}
              </span>
            )}

            {/* TITLE */}
            <h1 className="text-[42px] leading-tight font-semibold tracking-tight">
              {product.name}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-[17px] text-slate-600 leading-relaxed max-w-xl">
              {product.description ||
                "Carefully sourced and delivered fresh within the SJEC campus. Packed responsibly and handled with care."}
            </p>

            {/* PRICE */}
            <div className="flex items-end gap-4">
              <span className="text-3xl font-semibold text-slate-900">
                ₹{product.price}
              </span>
              <span className="text-sm text-slate-500">
                {product.stock > 0 ? `In stock (${product.stock})` : "Out of stock"}
              </span>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-4 pt-6">
              <button
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    imageUrl: product.imageUrl,
                  })
                }
                className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
              >
                Add to cart
              </button>

              <button
                onClick={() =>
                  router.push(
                    `/checkout?id=${product.id}&name=${product.name}&price=${product.price}&imageUrl=${product.imageUrl}`
                  )
                }
                className="px-8 py-4 rounded-full border border-slate-300 text-slate-900 font-medium hover:bg-slate-50 transition"
              >
                Buy now
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ---------- INFO STRIP ---------- */}
      <section className="border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-slate-600">
          <div>
            <p className="font-medium text-slate-900 mb-1">Campus delivery</p>
            <p>Delivered within SJEC on the same day.</p>
          </div>
          <div>
            <p className="font-medium text-slate-900 mb-1">Sustainability</p>
            <p>Minimal plastic, reusable crates.</p>
          </div>
          <div>
            <p className="font-medium text-slate-900 mb-1">Sourced locally</p>
            <p>From nearby farms and trusted vendors.</p>
          </div>
        </div>
      </section>

      {/* ---------- EDITORIAL SECTION ---------- */}
      <section className="bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight mb-6">
            Why SJEC Mart?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            SJEC Mart is built for campus life. We focus on freshness, speed,
            sustainability, and a calm shopping experience — no clutter, no noise,
            just what you need.
          </p>
        </div>
      </section>
    </div>
  );
}
