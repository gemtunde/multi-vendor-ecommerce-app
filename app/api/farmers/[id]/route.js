import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const farmer = await db.user.findUnique({
      where: {
        id,
      },
      include: {
        farmerProfile: true,
      },
    });
    console.log("farmer Profile", farmer);
    return NextResponse.json(farmer);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch farmer ",
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
