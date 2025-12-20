"use client";

import { useUser } from "@clerk/nextjs";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return <p>Loading...</p>;

  const isAdmin = user?.publicMetadata?.role === "admin";
  if (!isAdmin) return <h2 className="text-red-600 text-xl">Access Denied</h2>;

  return (
    <div className="flex min-h-screen">
      <aside className="w-60 bg-gray-900 text-white p-5">
        <h2 className="text-2xl font-bold mb-5">Admin Panel</h2>

        {/* Debug info (inside return) */}
        <p className="text-xs mb-3">
          Email: {user.primaryEmailAddress?.emailAddress}
        </p>
        <p className="text-xs mb-4">
          Metadata: {JSON.stringify(user.publicMetadata)}
        </p>

        <nav className="flex flex-col gap-3">
          <a href="/admin" className="hover:underline">Dashboard</a>
          <a href="/admin/products" className="hover:underline">Products</a>
          <a href="/admin/products/new" className="hover:underline">Add Product</a>
          <a href="/admin/orders" className="hover:underline">Orders</a>
        </nav>
      </aside>

      <main className="flex-1 p-10 bg-gray-50">{children}</main>
    </div>
  );
}
