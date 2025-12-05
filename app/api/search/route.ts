import { NextResponse } from "next/server";
import { getAllProducts } from "@/services/product";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("q")?.toLowerCase() ?? "";

  const products = await getAllProducts();

  const filtered = products
    .filter((p) => p.name.toLowerCase().startsWith(text))
    .slice(0, 6);

  return NextResponse.json(filtered);
}
