import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { existingFormData, orderItems } = await request.json();

    const {
      city,
      country,
      email,
      firstName,
      lastName,
      paymentMethod,
      phone,
      shippingCost,
      streetAddress,
      userId,
      zipCode,
    } = existingFormData;

    const newOrder = await db.order.create({
      data: {
        city,
        country,
        email,
        firstName,
        lastName,
        paymentMethod,
        phone,
        shippingCost: parseFloat(shippingCost),
        streetAddress,
        userId,
        zipCode,
      },
    });

    // Create order items
    const orderItemsData = orderItems.map((item) => ({
      orderId: newOrder.id,
      productId: item.id,
      quantity: parseInt(item.qty),
      price: parseFloat(item.salePrice),
    }));
    const newOrderItems = await db.orderItem.createMany({
      data: orderItemsData,
    });

    console.log("API Order Items--===----<<", newOrderItems);
    console.log("API Order--===----<<", newOrder);

    // console.log("API Training--===----<<", newTraining);
    return NextResponse.json({
      data: newOrder,
      message: "Order created successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create new Order",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const orders = await db.order.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("trainings", orders);
    return NextResponse.json(orders);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch orders",
        error,
      },
      { status: 500 }
    );
  }
}
