import db from "@/lib/db";
import { NextResponse } from "next/server";

function generateOrderNumber(length) {
  const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let orderNumber = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    orderNumber += characters.charAt(randomIndex);
  }

  return orderNumber;
}
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
      title: item.title,
      imageUrl: item.imageUrl,
      orderNumber: generateOrderNumber(8),
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
      include: {
        orderItems: true,
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
