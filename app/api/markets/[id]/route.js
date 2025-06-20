import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const market = await db.market.findUnique({
      where: {
        id,
      },
    });
    console.log("market", market);
    return NextResponse.json(market);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch market",
        error,
      },
      { status: 500 }
    );
  }
}
export async function DELETE(request, { params: { id } }) {
  try {
    const isMarketExist = await db.market.findUnique({
      where: {
        id,
      },
    });
    if (!isMarketExist) {
      return NextResponse.json(
        {
          data: null,
          message: " market not found",
          error,
        },
        { status: 404 }
      );
    }
    const deleteMarket = await db.market.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        data: deleteMarket,
        message: "Successfully deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete Market",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { id } }) {
  try {
    const { title, logoUrl, slug, description, isActive, categoryIds } =
      await request.json();
    const existingMarket = await db.market.findUnique({
      where: { id },
    });
    if (!existingMarket) {
      return NextResponse.json(
        {
          data: null,
          message: "Market not found",
        },
        { status: 409 }
      );
    }
    const updatedMarket = await db.market.update({
      where: { id },
      data: { title, logoUrl, slug, description, isActive, categoryIds },
    });

    console.log("UPDATE MARKET--===----<<", updatedMarket);
    return NextResponse.json(
      {
        message: `${title} market updated successfully`,
        data: updatedMarket,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update Market",
        error,
      },
      { status: 500 }
    );
  }
}
