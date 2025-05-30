"use client";

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
    accessorKey: "code",
    header: "Code",
    // header: ({ column }) => {
    //   return (
    //     <Button
    //       variant="ghost"
    //       onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //     >
    //       Name
    //       <ArrowUpDown className="ml-2 h-4 w-4" />
    //     </Button>
    //   );
    // },
    cell: ({ row }) => {
      const code = row.getValue("code");
      return <p className="ml-4">{code}</p>;
    },
  },
  {
    accessorKey: "profileImageUrl",
    header: "Profile Image",
    cell: ({ row }) => {
      const profileImageUrl = row.getValue("profileImageUrl");
      return (
        <Image
          src={profileImageUrl ?? "/profile.jpeg"}
          alt={row.name}
          width={100}
          height={100}
          className="rounded-full w-14 h-14"
        />
      );
    },
  },
  {
    accessorKey: "contactPerson",
    header: "Contact Person",
    cell: ({ row }) => {
      const contactPerson = row.getValue("contactPerson");
      return <div className="line-clamp-1">{contactPerson}</div>;
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
            <DropdownMenuItem>Delete</DropdownMenuItem>
            <DropdownMenuItem>Edit</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
