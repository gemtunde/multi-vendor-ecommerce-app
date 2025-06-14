"use client";

import DeleteBtn from "@/components/Actions/DeleteBtn";
import EditBtn from "@/components/Actions/EditBtn";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatAmount } from "@/lib/formatAmount";
import { formatDate } from "@/lib/formateDate";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";

export const productColumns = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const title = row.getValue("title");
      return <p className="ml-4">{title}</p>;
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Product Image",
    cell: ({ row }) => {
      const imageUrl = row.getValue("imageUrl");
      return (
        <Image
          src={imageUrl[0]}
          alt={row.title}
          width={100}
          height={100}
          className="rounded-full w-14 h-14"
        />
      );
    },
  },
  {
    accessorKey: "productPrice",
    header: "Product Price",
    cell: ({ row }) => {
      const productPrice = formatAmount(row.getValue("productPrice"));
      return <div className="line-clamp-1">{productPrice}</div>;
    },
  },
  {
    accessorKey: "qty",
    header: "Product Quantity",
    cell: ({ row }) => {
      const qty = row.getValue("qty");
      return <div className="line-clamp-1">{qty}</div>;
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
  {
    id: "actions",
    cell: ({ row }) => {
      const isActive = row.isActive;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {/* <DropdownMenuLabel>Actions</DropdownMenuLabel> */}
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(isActive)}
            >
              Copy status
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <DeleteBtn
                title={row.original.title}
                endpoint={`products/${row.original.id}`}
              />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <EditBtn
                title={row.original.title}
                endpoint={`products/update/${row.original.id}`}
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
