import { Pencil } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function EditBtn({ endpoint, title }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <Link
      href={`${baseUrl}/dashboard/${endpoint}`}
      className="flex items-center text-lime-500"
    >
      <Pencil className="mr-2 w-4 h-4" />
      Edit {title}
    </Link>
  );
}
