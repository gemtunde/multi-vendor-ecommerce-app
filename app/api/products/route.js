import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
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
      where: { slug },
    });
    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "Product already exists",
        },
        { status: 409 }
      );
    }
    const newProduct = await db.product.create({
      data: {
        title,
        slug,
        imageUrl,
        barcode,
        categoryId,
        description,
        userId: farmerId,
        productPrice: parseFloat(productPrice),
        salePrice: parseFloat(salePrice),
        sku,
        tags,
        isWholesale,
        isActive,
        wholesalePrice: parseFloat(wholesalePrice),
        wholesaleQty: parseInt(wholesaleQty),
        productCode,
        unit,
        productStock: parseInt(productStock),
        qty: parseInt(qty),
      },
    });

    // const newProduct = {
    //   title,
    //   slug,
    //   imageUrl,
    //   barcode,
    //   categoryId,
    //   description,
    //   userId: farmerId,
    //   productPrice,
    //   salePrice,
    //   sku,
    //   tags,
    //   isWholesale,
    //   wholesalePrice,
    //   wholesaleQty,
    //   productCode,
    //   unit,
    //   productStock,
    //   qty,
    // };

    console.log("API PRoDUCT--===----<<", newProduct);
    return NextResponse.json(
      {
        data: newProduct,
        message: "Product created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create product",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("products", products);
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch products",
        error,
      },
      { status: 500 }
    );
  }
}
