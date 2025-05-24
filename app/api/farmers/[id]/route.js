import db from "@/lib/db";

export async function GET(request, { params: { id } }) {
  try {
    const users = await db.users.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("Categories", categories);
    return NextResponse.json(categories);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Failed to fetch categories",
        error,
      },
      { status: 500 }
    );
  }
}
