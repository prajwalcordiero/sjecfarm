"use client"
import { useState } from "react";
export default function CreateProductTest() {

    const [category, setCategory] = useState("bakery");
    const [result, setResult] = useState<any>(null);

    async function submit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const res = await fetch("/api/admin/products", { method: "POST", body: form });
        const json = await res.json();
        setResult(json);
    }

    return (
        <form onSubmit={submit} className="p-6 space-y-3 max-w-md">
            <input name="name" placeholder="Name" className="border p-2 w-full" required />
            <input name="price" type="number" step="0.01" placeholder="Price" className="border p-2 w-full" required />
            <input name="stock" type="number" placeholder="Stock" className="border p-2 w-full" required />
            <select name="category" className="border p-2 w-full " value={category} onChange={e => setCategory(e.target.value)}>
                <option className="text-black" value="bakery">Bakery</option>
                <option className="text-black"  value="vegetable">Vegetables</option>
                <option className="text-black"  value="eggs">Eggs</option>
            </select>
            <input name="description" placeholder="Description" className="border p-2 w-full" />
            <input name="file" type="file" accept="image/*" className="border p-2 w-full" required />
            <button className="bg-emerald-600 text-white px-4 py-2 rounded">Create</button>

            {result?.imageUrl && (
                <img
                    src={result.imageUrl.replace("/upload/", "/upload/f_auto,q_auto,w_800,c_fill/")}
                    className="rounded mt-3"
                />
            )}
            {result?.error && <div className="text-red-500">{String(result.error)}</div>}
        </form>
    );
}
