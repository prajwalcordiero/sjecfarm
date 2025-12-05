"use client";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/ui/SearchBar";
import { db } from "@/lib/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal, ArrowDownWideNarrow } from "lucide-react";

const FILTERS = ["Organic", "Fresh", "Local"];
const SORT_OPTIONS = ["Price: Low to High", "Price: High to Low", "Newest"];

export default function CategoryPage() {
	const { category } = useParams();
	const [products, setProducts] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	const titleMap: any = {
		vegetables: "Fresh Vegetables",
		vegetable: "Fresh Vegetables",
		fruits: "Seasonal Fruits",
		bakery: "Fresh Bakery Goods",
		eggs: "Farm Fresh Eggs",
	};

	const heroImages: any = {
		vegetable: "/vegetable_banner.png",
		fruits: "/images/fruits-hero.jpg",
		bakery: "/bakery_banner.png",
		eggs: "/eggs_banner.png",
	};

	useEffect(() => {
		const fetchProducts = async () => {
			if (!category) return;

			const normalizedCategory =
				category === "vegetable" ? "vegetables" : category;

			try {
				const ref = collection(
					db,
					"products",
					normalizedCategory,
					normalizedCategory
				);
				const querySnapshot = await getDocs(ref);
				const list: any[] = [];

				querySnapshot.forEach((doc) => {
					list.push({ id: doc.id, ...doc.data() });
				});

				setProducts(list);
			} catch (err) {
				console.error("Error fetching products:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchProducts();
	}, [category]);

	return (
		<div className="min-h-screen bg-[#f6f7f9] pb-20">
			{/* Sticky Search */}
			<div className="sticky top-0 bg-white z-20 shadow-[0_2px_12px_rgba(0,0,0,0.06)] px-6 py-4 backdrop-blur-xl">
				<div className="max-w-xl mx-auto">
					<SearchBar />
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-6 pt-10">

				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-center mb-12 py-16 rounded-3xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
				>
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{
							backgroundImage: `url(${heroImages[category] || "/images/default-hero.jpg"})`,
						}}
					/>

					<div className="absolute inset-0 bg-white/20 backdrop-blur-[6px]" />

					<div className="relative z-10">
						<h1 className="text-4xl sm:text-6xl font-bold text-slate-900 tracking-tight">
							{titleMap[category] || "Products"}
						</h1>
						<p className="text-sm sm:text-base text-slate-600 mt-2">
							Fresh. Local. Delivered smarter.
						</p>
					</div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className="mb-10 p-4 rounded-3xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur-xl flex flex-col sm:flex-row justify-between items-center gap-4"
				>
					{/* FILTERS */}
					<div className="flex items-center gap-2 text-emerald-700">
						<SlidersHorizontal className="w-5 h-5" />
						<span className="font-semibold text-slate-800">Filters:</span>

						<div className="flex gap-2 ml-3">
							{FILTERS.map((filter) => (
								<button
									key={filter}
									className="text-xs px-3 py-1.5 rounded-full border border-slate-300 bg-white hover:bg-emerald-50 hover:border-emerald-300 transition"
								>
									{filter}
								</button>
							))}
						</div>
					</div>

					{/* SORT */}
					<div className="flex items-center gap-2 text-emerald-700">
						<ArrowDownWideNarrow className="w-5 h-5" />
						<span className="font-semibold text-slate-800">Sort By:</span>

						<select className="bg-white/80 border border-slate-300 rounded-full px-3 py-1 text-sm text-slate-700 outline-none hover:bg-slate-50 transition">
							{SORT_OPTIONS.map((option) => (
								<option key={option}>{option}</option>
							))}
						</select>
					</div>
				</motion.div>

				{loading ? (
					<p className="text-center text-slate-500 mt-20">Loading...</p>
				) : products.length === 0 ? (
					<p className="text-center text-slate-500 text-lg mt-20">
						No products found.
					</p>
				) : (
					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
						{products.map((item, index) => (
							<motion.div
								key={item.id}
								initial={{ opacity: 0, y: 25 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.45, delay: index * 0.04 }}
							>
								<ProductCard item={item} />
							</motion.div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
