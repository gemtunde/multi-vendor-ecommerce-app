import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const customer = await db.user.findUnique({
      where: {
        id,
      },
      include: {
        profile: true,
      },
    });
    console.log("customer Profile", customer);
    return NextResponse.json(customer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch customer ",
        error,
      },
      { status: 500 }
    );
  }
}
//FALLBACK 2 THIS
// export async function GET(request, { params: { id } }) {
//   try {
//     const farmerProfile = await db.farmerProfile.findUnique({
//       where: {
//         id,
//       },
//     });
//     console.log("farmer Profile", farmerProfile);
//     return NextResponse.json(farmerProfile);
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to fetch farmer Profile",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }
export async function DELETE(request, { params: { id } }) {
  try {
    const isFarmerExist = await db.user.findUnique({
      where: {
        id,
      },
    });
    if (!isFarmerExist) {
      return NextResponse.json(
        {
          data: null,
          message: " farmer not found",
          error,
        },
        { status: 404 }
      );
    }
    const deleteFarmer = await db.user.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        data: deleteFarmer,
        message: "Successfully deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete farmer",
        error,
      },
      { status: 500 }
    );
  }
}
// export async function DELETE(request, { params: { id } }) {
//   try {
//     const isFarmerProfileExist = await db.farmerProfile.findUnique({
//       where: {
//         id,
//       },
//     });
//     if (!isFarmerProfileExist) {
//       return NextResponse.json(
//         {
//           data: null,
//           message: " farmer Profile not found",
//           error,
//         },
//         { status: 404 }
//       );
//     }
//     const deleteFarmerProfile = await db.farmerProfile.delete({
//       where: {
//         id,
//       },
//     });

//     return NextResponse.json(
//       {
//         data: deleteFarmerProfile,
//         message: "Successfully deleted",
//       },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.log(error);
//     return NextResponse.json(
//       {
//         message: "Failed to delete farmer profile",
//         error,
//       },
//       { status: 500 }
//     );
//   }
// }

export async function PUT(request, { params: { id } }) {
  try {
    const {
      userId,
      name,
      userName,
      email,
      phone,
      streetAddress,
      city,
      country,
      zipCode,
      dateOfBirth,
      imageUrl,
    } = await request.json();
    const existingUser = await db.user.findUnique({
      where: { id },
    });
    if (!existingUser) {
      return NextResponse.json(
        {
          data: null,
          message: "User not found",
        },
        { status: 409 }
      );
    }
    const updatedUser = await db.userProfile.create({
      data: {
        userId,
        name,
        userName,
        email,
        phone,
        streetAddress,
        city,
        country,
        zipCode,
        dateOfBirth,
        imageUrl,
      },
    });

    console.log("UPDATE USER--===----<<", updatedUser);
    return NextResponse.json(
      {
        message: `${name} updated successfully`,
        data: updatedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to update user",
        error,
      },
      { status: 500 }
    );
  }
}
