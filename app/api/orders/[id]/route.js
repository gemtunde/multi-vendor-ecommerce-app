import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const order = await db.order.findUnique({
      where: {
        id,
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

export async function DELETE(request, { params: { id } }) {
  try {
    const isOrderExist = await db.order.findUnique({
      where: {
        id,
      },
    });
    if (!isOrderExist) {
      return NextResponse.json(
        {
          data: null,
          message: " order not found",
          error,
        },
        { status: 404 }
      );
    }
    const deleteOrder = await db.order.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        data: deleteOrder,
        message: "Successfully deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete Order",
        error,
      },
      { status: 500 }
    );
  }
}
