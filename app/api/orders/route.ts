import { NextResponse } from "next/server";

// TEMP storage (replace with DB later)
let orders: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();
  orders.push(body);

  return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json(orders);
}
