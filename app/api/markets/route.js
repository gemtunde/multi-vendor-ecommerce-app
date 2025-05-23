import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, logoUrl, slug, description, isActive } =
      await request.json();
    const newMarket = { title, logoUrl, slug, description, isActive };

    console.log("API CATEGoRIES--===----<<", newMarket);
    return NextResponse.json(newMarket);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create banner",
        error,
      },
      { status: 500 }
    );
  }
}
