import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request) {
  try {
    const { name, email, password, role } = await request.json();

    //check if user exist
    const userExists = await db.user.findUnique({
      where: { email },
    });
    if (userExists) {
      return NextResponse.json(
        {
          data: null,
          message: "User already exists",
        },
        { status: 409 }
      );
    }

    //encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await db.user.create({
      data: { name, email, password: hashedPassword, role },
    });
    console.log("NEW USER", newUser);
    return NextResponse.json(
      {
        data: newUser,
        message: "user created successfully",
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "failed to create a user",
        error,
      },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    const users = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("users", users);
    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch users",
        error,
      },
      { status: 500 }
    );
  }
}
