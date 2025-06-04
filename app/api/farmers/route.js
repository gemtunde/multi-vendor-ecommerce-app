import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const farmerData = await request.json();

    //check if user exists
    const userExists = await db.user.findUnique({
      where: { id: farmerData.userId },
    });
    if (!userExists) {
      return NextResponse.json(
        {
          message: "User does not exist",
        },
        { status: 404 }
      );
    }
    const updatedUser = await db.user.update({
      where: { id: farmerData.userId },
      data: {
        emailVerified: true,
      },
    });
    const newFarmerProfile = await db.farmerProfile.create({
      data: {
        address: farmerData.address,
        code: farmerData.code,
        contactPerson: farmerData.contactPerson,
        contactPersonPhone: farmerData.contactPersonPhone,
        email: farmerData.email,
        name: farmerData.name,
        notes: farmerData.notes,
        phone: farmerData.phone,
        terms: farmerData.terms,
        isActive: farmerData.isActive,
        profileImageUrl: farmerData.profileImageUrl,
        products: farmerData.products,
        mainCrop: farmerData.mainCrop,
        landSize: parseFloat(farmerData.landSize),
        userId: farmerData.userId,
      },
    });

    console.log("API FARMER PRoFILE--===----<<", newFarmerProfile);
    return NextResponse.json(newFarmerProfile);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to farmer Profile banner",
        error,
      },
      { status: 500 }
    );
  }
}
export async function GET(request) {
  try {
    const farmers = await db.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        role: "FARMER",
      },
      include: {
        farmerProfile: true,
      },
    });
    console.log("Farmers", farmers);
    return NextResponse.json(farmers);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch farmers",
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
