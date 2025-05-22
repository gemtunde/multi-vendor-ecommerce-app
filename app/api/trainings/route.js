import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      title,
      categoryIds,
      description,
      content,
      isActive,
      slug,
      imageUrl,
    } = await request.json();
    const newTraining = {
      title,
      categoryIds,
      description,
      content,
      isActive,
      slug,
      imageUrl,
    };

    console.log("API CATEGoRIES--===----<<", newTraining);
    return NextResponse.json(newTraining);
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
