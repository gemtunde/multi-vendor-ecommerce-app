import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const farmerData = await request.json();
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
    const profiles = await db.farmerProfile.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("Categories", profiles);
    return NextResponse.json(profiles);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch profiles",
        error,
      },
      { status: 500 }
    );
  }
}
