import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const user = await db.user.findUnique({
      where: {
        id,
      },
      // select: {
      //   id: true,
      //   name: true,
      //   email: true,
      //   emailVerified: true,
      //   role: true,
      //   createdAt: true,
      //   updatedAt: true,
      //   profile: true,
      //   // Add other safe fields here, but NOT password
      // },
      include: {
        profile: true,
      },
    });
    // return NextResponse.json(user);
    const { password, ...safeUser } = user;

    console.log("safe SAFE User", safeUser);
    return NextResponse.json(safeUser);
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
