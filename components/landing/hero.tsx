"use client";

import React, { useRef, useState, useMemo } from "react"; 
import Image from "next/image";
import {
	motion,
	useMotionValue,
	useAnimationFrame,
} from "framer-motion";

const galleryCards = [
	{
		id: "farms",
		title: "Campus Gardens",
		subtitle: "Vegetables & fruits grown at SJEC",
		image: "/green.jpeg",
		accent: "bg-emerald-500/70",
	},
	{
		id: "project",
		title: "SJEC Initiative",
		subtitle: "Managed by the institution & students",
		image: "/classs.jpeg",
		accent: "bg-sky-500/70",
		featured: true,
	},
	{
		id: "green",
		title: "Sustainable Campus",
		subtitle: "Green practices & fresh harvests",
		image: "/hand.webp",
		accent: "bg-lime-500/70",
	},
	{
		id: "hostel",
		title: "Campus Community",
		subtitle: "Food for students & staff",
		image: "/green.jpeg",
		accent: "bg-amber-500/70",
	},
	{
		id: "bakery",
		title: "Campus Bakery & Eggs",
		subtitle: "Bakery items and eggs for daily use",
		image: "/extra.jpeg",
		accent: "bg-rose-500/70",
	},
];

type GalleryCardProps = {
	index: number;
	total: number;
	title: string;
	subtitle: string;
	image: string;
	accent: string;
	featured?: boolean;
};

const GalleryCard: React.FC<GalleryCardProps> = ({
	index,
	total,
	title,
	subtitle,
	image,
	accent,
	featured,
}) => {
	const logicalIndex = index % total;
	const centerIndex = (total - 1) / 2;
	const depth = Math.abs(logicalIndex - centerIndex);

	const baseScale = featured ? 1.06 : 0.94 - depth * 0.02;

	return (
		<motion.div
			className="relative h-80 w-48 overflow-hidden rounded-3xl border border-white/60 bg-white/60 shadow-[0_18px_45px_rgba(15,23,42,0.12)] backdrop-blur-xl sm:h-96 sm:w-56 lg:h-104 lg:w-64"
			style={{
				scale: baseScale,
				transformStyle: "preserve-3d",
			}}
			whileHover={{
				scale: baseScale + 0.04,
				translateY: -8,
			}}
			transition={{
				type: "spring",
				stiffness: 220,
				damping: 26,
				mass: 0.8,
			}}
		>
			<div className="absolute inset-0">
				<Image
					src={image}
					alt={title}
					fill
					priority={featured}
					className="object-cover"
				/>
			</div>

			<div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-900/0 to-slate-900/0" />

			<div className="pointer-events-none absolute inset-x-4 bottom-4 flex flex-col gap-2 text-left text-slate-50">
				<div className="space-y-1">
					<h3 className="text-sm font-semibold sm:text-base">{title}</h3>
					<p className="text-[11px] text-slate-200/75 sm:text-xs">
						{subtitle}
					</p>
				</div>
			</div>
		</motion.div>
	);
};

function useInfiniteCarousel(items: any[], speed = 0.6) {
	const [cards, setCards] = useState(items);
	const x = useMotionValue(0);
	const ref = useRef<HTMLDivElement | null>(null);

	useAnimationFrame(() => {
		if (!ref.current) return;

		const firstCard = ref.current.children[0] as HTMLElement;
		if (!firstCard) return;

		const firstWidth = firstCard.offsetWidth + 24;

		x.set(x.get() - speed);

		if (Math.abs(x.get()) >= firstWidth) {
			setCards((prev) => {
				const clone = [...prev];
				const removed = clone.shift()!;
				clone.push(removed);
				return clone;
			});

			x.set(x.get() + firstWidth);
		}
	});

	return { cards, x, ref };
}

const RealInfiniteScroller: React.FC<{
	data: any[];
	speed?: number;
	render: (item: any, idx: number) => React.ReactNode;
}> = ({ data, speed = 0.7, render }) => {
	const { cards, x, ref } = useInfiniteCarousel(data, speed);

	return (
		<motion.div
			ref={ref}
			style={{ x }}
			className="flex items-center gap-6 lg:gap-8"
		>
			{cards.map((item, i) => render(item, i))}
		</motion.div>
	);
};

const Hero: React.FC = () => {
	const duplicatedGalleryCards = useMemo(() => {
		return [...galleryCards, ...galleryCards];
	}, []);

	return (
		<section className="relative flex min-h-screen w-full items-center flex-col gap-10 justify-center overflow-hidden bg-[#f5f7f9] px-4 py-10 text-slate-900 sm:px-6 lg:px-12">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.12),transparent_55%),radial-gradient(circle_at_bottom,rgba(15,23,42,0.16),transparent_60%)]" />
			
			<div className="relative z-10 flex w-full max-w-6xl flex-col gap-8 lg:flex-row items-center">
				<motion.div
					className="max-w-xl rounded-3xl border border-white/70 bg-white/80 p-6 shadow-[0_22px_70px_rgba(15,23,42,0.18)] backdrop-blur-2xl sm:p-8 lg:p-10"
					initial={{ opacity: 0, y: 28, scale: 0.98 }}
					animate={{ opacity: 1, y: 0, scale: 1 }}
					transition={{
						type: "spring",
						stiffness: 130,
						damping: 24,
						mass: 0.9,
					}}
				>
					<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-slate-50/80 px-3 py-1.5 text-xs font-medium text-slate-600 sm:text-[10px]">
						<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
						<span className="uppercase tracking-[0.16em] text-slate-500 text-[10px]">
							SJEC MART
						</span>
						<span className="h-3 w-px bg-slate-200" />
						<span className="text-slate-500">
							Campus-grown food for the SJEC community
						</span>
					</div>

					<div className="space-y-4">
						<h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
							Fresh food grown at{' '}
							<span className="inline-block rounded-2xl py-1 text-emerald-700">
								SJEC campus
							</span>
							<br /> for students and staff.
						</h1>

						<p className="text-sm leading-relaxed text-slate-600 sm:text-base">
							SJEC Mart is an institutional initiative that brings vegetables,
							fruits, bakery items and eggs grown or supported within the
							campus directly to the SJEC community. The focus is on freshness,
							sustainability and responsible consumption.
						</p>
					</div>

					<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
						<motion.button
							className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-50 shadow-[0_14px_35px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 hover:bg-slate-900/95"
							whileTap={{ scale: 0.97 }}
						>
							Explore campus produce
						</motion.button>
						<button className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white/60 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50/90">
							Learn about the initiative
						</button>
					</div>
				</motion.div>
			</div>

			<div className="pointer-events-none lg:absolute inset-0 flex items-center justify-center">
				<RealInfiniteScroller
					data={duplicatedGalleryCards}
					speed={0.7}
					render={(card, index) => (
						<GalleryCard
							key={card.id + index}
							index={index}
							total={duplicatedGalleryCards.length}
							title={card.title}
							subtitle={card.subtitle}
							image={card.image}
							accent={card.accent}
							featured={card.featured}
						/>
					)}
				/>
			</div>
		</section>
	);
};

export default Hero;
