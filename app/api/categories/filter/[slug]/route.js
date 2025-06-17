import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { slug } }) {
  try {
    const category = await db.category.findUnique({
      where: {
        slug,
      },
      include: {
        products: true,
      },
    });
    console.log("Category", category);
    return NextResponse.json(category);
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
export async function DELETE(request, { params: { slug } }) {
  try {
    const isCategoryExist = await db.category.findUnique({
      where: {
        slug,
      },
    });
    if (!isCategoryExist) {
      return NextResponse.json(
        {
          data: null,
          message: " Category not found",
          error,
        },
        { status: 404 }
      );
    }
    const deleteCategory = await db.category.delete({
      where: {
        slug,
      },
    });

    return NextResponse.json(
      {
        data: deleteCategory,
        message: "Successfully deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete category",
        error,
      },
      { status: 500 }
    );
  }
}

export async function PUT(request, { params: { slug } }) {
  try {
    const { title, slug, imageUrl, description, isActive } =
      await request.json();
    const existingCategory = await db.category.findUnique({
      where: { slug },
    });
    if (!existingCategory) {
      return NextResponse.json(
        {
          data: null,
          message: "Category not found",
        },
        { status: 409 }
      );
    }
    const updatedCategory = await db.category.update({
      where: { slug },
      data: { title, slug, imageUrl, description, isActive },
    });

    console.log("UPDATE CATEGoRIES--===----<<", updatedCategory);
    return NextResponse.json(
      {
        message: `${title} category updated successfully`,
        data: updatedCategory,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update category",
        error,
      },
      { status: 500 }
    );
  }
}
