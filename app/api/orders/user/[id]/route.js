import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const order = await db.order.findMany({
      where: {
        userId: id,
      },
      include: {
        orderItems: true,
      },
    });
    console.log("market", order);
    return NextResponse.json(order);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch order",
        error,
      },
      { status: 500 }
    );
  }
}
