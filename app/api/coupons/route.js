import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { couponCode, title, expiryDate, isActive } = await request.json();

    const newCoupon = await db.coupon.create({
      data: { title, couponCode, expiryDate, isActive },
    });
    console.log("API Coupons--===----<<", newCoupon);
    return NextResponse.json(newCoupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create coupons",
        error,
      },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const coupons = await db.coupon.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("Coupons", coupons);
    return NextResponse.json(coupons);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch coupons",
        error,
      },
      { status: 500 }
    );
  }
}
