import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const training = await db.training.findUnique({
      where: {
        id,
      },
    });
    console.log("training", training);
    return NextResponse.json(training);
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
export async function DELETE(request, { params: { id } }) {
  try {
    const isTrainingExist = await db.training.findUnique({
      where: {
        id,
      },
    });
    if (!isTrainingExist) {
      return NextResponse.json(
        {
          data: null,
          message: " Training not found",
          error,
        },
        { status: 404 }
      );
    }
    const deleteTraining = await db.training.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        data: deleteTraining,
        message: "Successfully deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete Training",
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
      categoryId,
      description,
      content,
      isActive,
      slug,
      imageUrl,
    } = await request.json();
    const existingTraining = await db.training.findUnique({
      where: { id },
    });
    if (!existingTraining) {
      return NextResponse.json(
        {
          data: null,
          message: "Training not found",
        },
        { status: 409 }
      );
    }
    const updatedTraining = await db.training.update({
      where: { id },
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

    console.log("UPDATE Training--===----<<", updatedTraining);
    return NextResponse.json(
      {
        message: `${title} Training updated successfully`,
        data: updatedTraining,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update Training",
        error,
      },
      { status: 500 }
    );
  }
}
