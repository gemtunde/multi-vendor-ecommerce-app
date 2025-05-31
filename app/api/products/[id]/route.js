import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const product = await db.product.findUnique({
      where: {
        id,
      },
    });
    console.log("product", product);
    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch user",
        error,
      },
      { status: 500 }
    );
  }
}
export async function DELETE(request, { params: { id } }) {
  try {
    const isProductExist = await db.product.findUnique({
      where: {
        id,
      },
    });
    if (!isProductExist) {
      return NextResponse.json(
        {
          data: null,
          message: " Product not found",
          error,
        },
        { status: 404 }
      );
    }
    const deleteProduct = await db.product.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        data: deleteProduct,
        message: "Successfully deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete Product",
        error,
      },
      { status: 500 }
    );
  }
}
