import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { getAllProducts } from "@/services/product";
import Link from "next/link";

function optimize(url: string) {
    try {
        const u = new URL(url);
        if (u.hostname.includes("res.cloudinary.com") && u.pathname.includes("/upload/")) {
            return url.replace("/upload/", "/upload/f_auto,q_auto,w_800,c_fill/");
        }
    } catch { }
    return url;
}

export default async function ProductsPage() { 
    const { userId } = await auth();
    if (!userId) redirect("/sign-in?redirect=/products");
    const products = await getAllProducts();
    return (
        <main className="bg-amber-100">
            <h1 className="flex justify-center items-center text-4xl font-bold text-black"> Fresh fruits & Vegetables</h1>
            <div className="mx-auto max-w-6xl p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                
            {products.map((p) => (
                <div key={p.id} className="rounded-4xl border border-black/10 p-4 bg-gray-300 text-black h-120 w-80">
                    {p.imageUrl ? (
                        <img
                            alt={p.name}
                            src={optimize(p.imageUrl)}
                            className="mb-3 aspect-square w-full rounded-xl object-cover"
                        />
                    ) : (
                        <div className="mb-3 aspect-square w-full rounded-xl bg-white/5 grid place-items-center text-sm opacity-60">
                            No image
                        </div>
                    )}

                    <div className="flex items-start justify-between gap-3">
                        <h3 className="text-lg font-semibold">{p.name}</h3>
                        {p.category && (
                            <span className="rounded-full border border-white/10 px-2 py-0.5 text-xs uppercase opacity-80">
                                {p.category}
                            </span>
                        )}
                    </div>

                    {p.description ? (
                        <p className="mt-1 text-sm opacity-80 line-clamp-2">{p.description}</p>
                    ) : null}

                    <div className="mt-2 font-semibold">₹{Number(p.price).toFixed(2)}</div>
                    <div className="mt-1 text-xs opacity-70">Stock: {p.stock}</div>

                    <div className="mt-4">
                        <Link href={`/products/${p.id}`} className="text-white/75 text-sm">
                            View Details
                        </Link>
                    </div>
                </div>
            ))}
            </div>
        </main>
    );
}