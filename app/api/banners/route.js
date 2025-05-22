import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, imageUrl, link, isActive } = await request.json();
    const newBanner = await db.banner.create({
      data: { title, imageUrl, link, isActive },
    });

    console.log("API BANNER--===----<<", newBanner);
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
