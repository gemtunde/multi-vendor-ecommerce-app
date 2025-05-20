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
      quantity,
      salePrice,
      sku,
    } = await request.json();
    const newProduct = {
      title,
      slug,
      imageUrl,
      barcode,
      categoryId,
      description,
      farmerId,
      productPrice,
      quantity,
      salePrice,
      sku,
    };

    console.log("API PRoDUCT--===----<<", newProduct);
    return NextResponse.json(newProduct);
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
