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

    // const { checkoutFormData, orderItems } = await request.json();
    // const { userId, shippingCost } = checkoutFormData;

    // Create orderNumber function
    // function generateOrderNumber(length) {
    //   const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    //   let orderNumber = "";

    //   for (let i = 0; i < length; i++) {
    //     const randomIndex = Math.floor(Math.random() * characters.length);
    //     orderNumber += characters.charAt(randomIndex);
    //   }

    //   return orderNumber;
    // }

    // Use the Prisma transaction
    const result = await db.$transaction(async (prisma) => {
      // Create order and order items within the transaction
      const newOrder = await prisma.order.create({
        data: {
          city,
          country,
          email,
          firstName,
          lastName,
          paymentMethod,
          orderNumber: generateOrderNumber(8),
          phone,
          shippingCost: parseFloat(shippingCost),
          streetAddress,
          userId,
          zipCode,
        },
      });

      const newOrderItems = await prisma.orderItem.createMany({
        data: orderItems.map((item) => ({
          orderId: newOrder.id,
          productId: item.id,
          vendorId: item.vendorId,
          quantity: parseInt(item.qty),
          price: parseFloat(item.salePrice),
          title: item.title,
          imageUrl: item.imageUrl,
        })),
      });

      // Calculate total amount for each product and create a sale for each
      const sales = await Promise.all(
        orderItems.map(async (item) => {
          const totalAmount = parseFloat(item.salePrice) * parseInt(item.qty);

          const newSale = await prisma.sale.create({
            data: {
              orderId: newOrder.id,
              productId: item.id,
              productTitle: item.title,
              productImage: item.imageUrl,
              productPrice: parseFloat(item.salePrice),
              productQty: parseInt(item.qty),
              vendorId: item.vendorId,
              total: totalAmount,
            },
          });

          return newSale;
        })
      );

      return { newOrder, newOrderItems, sales };
    });

    console.log(result.newOrder, result.newOrderItems, result.sales);

    // Return the response
    return NextResponse.json(result.newOrder);
    // return new Response(JSON.stringify(result.newOrder), {
    //   status: 200,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Failed to create new Order",
        error,
      },
      { status: 500 }
    );
    // return new Response(
    //   JSON.stringify({
    //     message: "Failed to create Order",
    //     error: error.message,
    //   }),
    //   {
    //     status: 500,
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   }
    // );
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
