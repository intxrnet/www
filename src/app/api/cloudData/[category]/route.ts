import { cloudData } from "@/app/data";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  if (!cloudData[category]) {
    return NextResponse.json({
      name: "template",
      items: [
        {
          text: "template item 1",
          description: "template item 1 description",
        },
        {
          text: "template item 2",
          description: "template item 2 description",
        },
        {
          text: "template item 3",
          description: "template item 3 description",
        },
      ],
    });
  }

  // Return only the items array, excluding the 'side' property
  return NextResponse.json({
    name: category,
    items: cloudData[category].items,
  });
}
