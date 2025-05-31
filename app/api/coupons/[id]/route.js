import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const coupon = await db.coupon.findUnique({
      where: {
        id,
      },
    });
    console.log("coupon", coupon);
    return NextResponse.json(coupon);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch coupon",
        error,
      },
      { status: 500 }
    );
  }
}
export async function DELETE(request, { params: { id } }) {
  try {
    const isCouponExist = await db.coupon.findUnique({
      where: {
        id,
      },
    });
    if (!isCouponExist) {
      return NextResponse.json(
        {
          data: null,
          message: " coupon not found",
          error,
        },
        { status: 404 }
      );
    }
    const deleteCoupon = await db.coupon.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        data: deleteCoupon,
        message: "Successfully deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete Coupon",
        error,
      },
      { status: 500 }
    );
  }
}
