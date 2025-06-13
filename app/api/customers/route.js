import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const customers = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: "USER",
      },
      include: {
        profile: true,
      },
    });
    console.log("customers", customers);
    return NextResponse.json(customers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch customers",
        error,
      },
      { status: 500 }
    );
  }
}

//FALLBACK 2 THIS
// export async function GET(request) {
//   try {
//     const profiles = await db.farmerProfile.findMany({
//       orderBy: {
//         createdAt: "desc",
//       },
//     });
//     console.log("Categories", profiles);
//     return NextResponse.json(profiles);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to fetch profiles",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }
