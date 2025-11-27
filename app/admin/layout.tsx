export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="min-h-screen flex">
			<aside className="w-60 bg-gray-900 text-white p-5">
				<h2 className="text-2xl font-bold mb-5">Admin</h2>
				<nav className="flex flex-col gap-3">
					<a href="/admin" className="hover:underline">Dashboard</a>
					<a href="/admin/products" className="hover:underline">Products</a>
					<a href="/admin/products/new" className="hover:underline">Add Product</a>
				</nav>
			</aside>
			<main className="flex-1 p-10 bg-gray-50">{children}</main>
		</div>
	);
}
