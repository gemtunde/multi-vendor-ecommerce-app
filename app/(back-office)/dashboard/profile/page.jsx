import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Profile() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <div>Please log in to view your profile.</div>;
  }
  const name = session?.user?.name || "Guest";
  return (
    <div>
      <h2>Welcome {name}</h2>
    </div>
  );
}
