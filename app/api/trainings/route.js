import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      categoryId,
      description,
      content,
      isActive,
      slug,
      imageUrl,
    } = await request.json();
    const existingTraining = await db.training.findUnique({
      where: { slug },
    });
    if (existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: "Training already exists",
        },
        { status: 409 }
      );
    }
    const newTraining = await db.training.create({
      data: {
        title,
        categoryId,
        description,
        content,
        isActive,
        slug,
        imageUrl,
      },
    });
    // const newTraining = {
    //   title,
    //   categoryIds,
    //   description,
    //   content,
    //   isActive,
    //   slug,
    //   imageUrl,
    // };

    console.log("API Training--===----<<", newTraining);
    return NextResponse.json({
      data: newTraining,
      message: "Market created successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to create new training",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const trainings = await db.training.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("trainings", trainings);
    return NextResponse.json(trainings);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch trainings",
        error,
      },
      { status: 500 }
    );
  }
}
