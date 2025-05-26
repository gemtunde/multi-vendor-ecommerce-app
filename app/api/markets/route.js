import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, logoUrl, slug, description, isActive, categoryIds } =
      await request.json();
    const existingMarket = await db.market.findUnique({
      where: { slug },
    });
    if (existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "Market already exists",
        },
        { status: 409 }
      );
    }
    const newMarket = await db.market.create({
      data: {
        title,
        slug,
        logoUrl,
        categoryIds,
        description,
        isActive,
      },
    });

    //const newMarket = { title, logoUrl, slug, description, isActive ,categoryIds};

    console.log("API CATEGoRIES--===----<<", newMarket);
    return NextResponse.json({
      data: newMarket,
      message: "Market created successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create market",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const markets = await db.market.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("markets", markets);
    return NextResponse.json(markets);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch markets",
        error,
      },
      { status: 500 }
    );
  }
}
