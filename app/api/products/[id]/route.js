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

export async function PUT(request, { params: { id } }) {
  try {
    const {
      title,
      slug,
      imageUrl,
      barcode,
      categoryId,
      description,
      farmerId,
      productPrice,
      salePrice,
      sku,
      tags,
      isActive,
      isWholesale,
      wholesalePrice,
      wholesaleQty,
      productCode,
      unit,
      productStock,
      qty,
    } = await request.json();

    const existingProduct = await db.product.findUnique({
      where: { id },
    });
    if (!existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product not found",
        },
        { status: 409 }
      );
    }
    const updatedProduct = await db.product.update({
      where: { id },
      data: {
        title,
        slug,
        imageUrl,
        barcode,
        description,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        sku,
        tags,
        isWholesale,
        isActive,
        //  wholesalePrice: parseFloat(wholesalePrice),
        // wholesaleQty: parseInt(wholesaleQty),
        productCode,
        // unit,
        productStock: parseInt(productStock),
        qty: parseInt(qty),
        ...(unit ? { unit } : {}),
        ...(wholesalePrice !== undefined &&
        wholesalePrice !== "" &&
        !isNaN(wholesalePrice)
          ? { wholesalePrice: parseFloat(wholesalePrice) }
          : {}),
        ...(wholesaleQty !== undefined &&
        wholesaleQty !== "" &&
        !isNaN(wholesaleQty)
          ? { wholesaleQty: parseInt(wholesaleQty) }
          : {}),
        category: {
          connect: { id: categoryId },
        },
        user: {
          connect: { id: farmerId },
        },
      },
    });

    console.log("UPDATE Product--===----<<", updatedProduct);
    return NextResponse.json(
      {
        message: `${title} product updated successfully`,
        data: updatedProduct,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update product",
        error,
      },
      { status: 500 }
    );
  }
}
