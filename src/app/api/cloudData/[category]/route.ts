import { cloudData } from "@/app/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  if (!cloudData[category]) {
    return NextResponse.json({ error: "Category not found" }, { status: 404 });
  }

  // Return only the items array, excluding the 'side' property
  return NextResponse.json({ items: cloudData[category].items });
}
