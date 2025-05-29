"use client";

import { formatDate } from "@/lib/formateDate";
import Image from "next/image";

//import {ColumnDef} from "@tanstack/react-table"

export const columns = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "imageUrl",
    header: "Category Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("imageUrl");
      return (
        <Image
          src={imageUrl}
          alt={row.title}
          width={100}
          height={100}
          className="rounded-full w-14 h-14"
        />
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => {
      const description = row.getValue("description");
      return <div className="line-clamp-1">{description}</div>;
    },
  },
  {
    accessorKey: "isActive",
    header: "IsActive",
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => {
      const date = row.getValue("createdAt");
      return <div className="line-clamp-1">{formatDate(date) || "N/A"}</div>;
    },
  },
];
