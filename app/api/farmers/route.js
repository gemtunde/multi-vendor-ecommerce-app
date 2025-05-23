import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {
      address,
      code,
      contactPerson,
      contactPersonPhone,
      email,
      name,
      notes,
      phone,
      terms,
      isActive,
      profileImageUrl,
    } = await request.json();
    const newFarmer = await db.farmer.create({
      data: {
        address,
        code,
        contactPerson,
        contactPersonPhone,
        email,
        name,
        notes,
        phone,
        terms,
        isActive,
        profileImageUrl,
      },
    });

    console.log("API CATEGoRIES--===----<<", newFarmer);
    return NextResponse.json(newFarmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to farmer banner",
        error,
      },
      { status: 500 }
    );
  }
}
