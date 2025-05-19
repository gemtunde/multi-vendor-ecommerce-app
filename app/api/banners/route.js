import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, imageUrl, link } = await request.json();
    const newBanner = { title, imageUrl, link };

    console.log("API CATEGoRIES--===----<<", newBanner);
    return NextResponse.json(newBanner);
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
