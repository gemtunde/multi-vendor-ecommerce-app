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
import { formatDate } from "@/lib/formateDate";
import {
  DropdownMenuContent,
  DropdownMenuLabel,
} from "@radix-ui/react-dropdown-menu";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import Image from "next/image";

export const farmersColumns = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const name = row.getValue("name");
      return <p className="ml-4">{name}</p>;
    },
  },
  {
    accessorKey: "role",
    header: "Role",

    cell: ({ row }) => {
      const role = row.getValue("role");
      return <p className="">{role}</p>;
    },
  },

  {
    accessorKey: "email",
    header: "Email",
    cell: ({ row }) => {
      const email = row.getValue("email");
      return <div className="line-clamp-1">{email}</div>;
    },
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
      console.log("RoW00--->>", row);
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
                title={row.original.name}
                endpoint={`farmers/${row.original.id}`}
              />
            </DropdownMenuItem>
            <DropdownMenuItem>
              <EditBtn
                title={row.original.name}
                endpoint={`farmers/update/${row.original.farmerProfile?.id}`}
              />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
