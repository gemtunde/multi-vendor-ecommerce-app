import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request, { params: { id } }) {
  try {
    const banner = await db.banner.findUnique({
      where: {
        id,
      },
    });
    console.log("Banner", banner);
    return NextResponse.json(banner);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch banner",
        error,
      },
      { status: 500 }
    );
  }
}
export async function DELETE(request, { params: { id } }) {
  try {
    const isBannerExist = await db.banner.findUnique({
      where: {
        id,
      },
    });
    if (!isBannerExist) {
      return NextResponse.json(
        {
          data: null,
          message: " Banner not found",
          error,
        },
        { status: 404 }
      );
    }
    const deleteBanner = await db.banner.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      {
        data: deleteBanner,
        message: "Successfully deleted",
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to delete Banner",
        error,
      },
      { status: 500 }
    );
  }
}
