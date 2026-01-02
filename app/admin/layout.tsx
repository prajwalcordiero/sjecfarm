"use client";

import { useState } from "react";

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [open, setOpen] = useState(false);

	return (
		<div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 text-black">
			{/* Mobile Overlay */}
			{open && (
				<div
					className="fixed inset-0 bg-black/40 z-40 lg:hidden"
					onClick={() => setOpen(false)}
				/>
			)}

			<div className="flex">
				{/* Sidebar */}
				<aside
					className={`
						fixed lg:static z-50
						w-64 min-h-screen
						bg-white/90 backdrop-blur shadow-sm
						px-6 py-8 flex flex-col
						transition-transform duration-300
						${open ? "translate-x-0" : "-translate-x-full"}
						lg:translate-x-0
					`}
				>
					<h2 className="text-xl font-semibold tracking-tight mb-10">
						SJEC Admin
					</h2>

					<nav className="flex flex-col gap-2 text-sm">
						<a
							href="/admin"
							className="px-4 py-2 rounded-xl hover:bg-green-50 font-medium"
						>
							Dashboard
						</a>

						<a
							href="/admin/products"
							className="px-4 py-2 rounded-xl hover:bg-green-50 font-medium"
						>
							Products
						</a>
					</nav>

					<div className="mt-auto text-xs text-gray-400">
						SJEC Farm Produce
					</div>
				</aside>

				{/* Main */}
				<div className="flex-1 min-h-screen">
					{/* Top Bar */}
					<header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-10">
						<div className="flex items-center gap-3">
							{/* Hamburger */}
							<button
								onClick={() => setOpen(true)}
								className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
							>
								☰
							</button>
{/* 
							<p className="text-sm text-gray-500 hidden sm:block">
								Admin Workspace
							</p> */}
						</div>
{/* 
						<div className="w-9 h-9 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-semibold">
							A
						</div> */}
					</header>

					<main className="px-4 sm:px-6 lg:px-10 pb-10">
						{children}
					</main>
				</div>
			</div>
		</div>
	);
}
