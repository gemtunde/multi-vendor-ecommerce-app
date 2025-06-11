"use client";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Edit, LayoutDashboard, LogOut, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { getInitials } from "@/lib/getInitials";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Link from "next/link";

export default function UserAvatar({ user }) {
  const { name, image } = user;
  const router = useRouter();
  const role = user?.role;
  const handleLogout = async () => {
    await signOut();
    router.push("/login");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="w-full">
        {/* <User className="border-none" /> */}
        <button>
          {image ? (
            <Image
              src={image}
              alt="User Profile"
              width={200}
              height={200}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <Avatar>
              <AvatarFallback>{getInitials(name)}</AvatarFallback>
            </Avatar>
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56  text-slate-900 dark:text-slate-50 dark:bg-slate-600 bg-slate-50 border-none p-2">
        <DropdownMenuLabel>{name || " N/A"}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center space-x-2 "
          >
            <LayoutDashboard className="w-4 h-4 mr-2 " />
            <span>Dashboard</span>
          </button>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link
            href="/dashboard/profile"
            className="flex items-center space-x-2 "
          >
            <Edit className="w-4 h-4 mr-2 " />
            <span>Edit Profile</span>
          </Link>
        </DropdownMenuItem>
        {role === "USER" && (
          <DropdownMenuItem asChild>
            <Link
              href="/dashboard/order-confirmation"
              className="flex items-center space-x-2 "
            >
              <Edit className="w-4 h-4 mr-2 " />
              <span>My Orders</span>
            </Link>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem asChild>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 "
          >
            <LogOut className="w-4 h-4 mr-2 " />
            <span>Logout</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
