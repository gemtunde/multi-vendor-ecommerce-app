import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { address, email, name, notes, phone, password } =
      await request.json();
    const newStaff = {
      address,
      email,
      name,
      notes,
      phone,
      password,
    };

    console.log("API STAFF--===----<<", newStaff);
    return NextResponse.json(newStaff);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to Staff banner",
        error,
      },
      { status: 500 }
    );
  }
}
