import React from "react";
import {
  AlignJustify,
  Bell,
  User,
  Sun,
  LogOut,
  LayoutDashboard,
  Edit,
  X,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ThemeSwitcher } from "../ThemeSwitcherBtn";

const Navbar = () => {
  return (
    <div className="flex mr-48 items-center justify-between bg-slate-50 dark:bg-slate-700 text-green-600 h-20 px-8 pr-[16rem]  py-4 fixed top-0 w-full ">
      <button>
        <AlignJustify />
      </button>
      <div className="flex space-x-3">
        <ThemeSwitcher />
        {/* <button>
          <Sun />
        </button> */}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-green-600 bg-transparent rounded-lg"
            >
              <Bell />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-0 end-6 dark:border-gray-900">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-86  text-slate-900 dark:text-slate-50 dark:bg-slate-600 bg-slate-50 border-none p-2">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <div className="flex items-center space-x-2 space-y-1">
                <Image
                  src="/profile.jpeg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <p>Yellow sweet corn stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 text-xs py-1 bg-red-600 rounded-full text-white">
                      Stock out
                    </p>
                    <p>Dec 12 2027 - 12:34pm</p>
                  </div>
                </div>
                <button>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <div className="flex items-center space-x-2 space-y-1">
                <Image
                  src="/profile.jpeg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <p>Yellow sweet corn stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 text-xs py-1 bg-red-600 rounded-full text-white">
                      Stock out
                    </p>
                    <p>Dec 12 2027 - 12:34pm</p>
                  </div>
                </div>
                <button>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <div className="flex items-center space-x-2 space-y-1">
                <Image
                  src="/profile.jpeg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col gap-1">
                  <p>Yellow sweet corn stock out</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 text-xs py-1 bg-red-600 rounded-full text-white">
                      Stock out
                    </p>
                    <p>Dec 12 2027 - 12:34pm</p>
                  </div>
                </div>
                <button>
                  <X className="w-4 h-4" />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <User className="border-none" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56  text-slate-900 dark:text-slate-50 dark:bg-slate-600 bg-slate-50 border-none p-2">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <button className="flex items-center space-x-2 ">
                <LayoutDashboard className="w-4 h-4 mr-2 " />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button className="flex items-center space-x-2 ">
                <Edit className="w-4 h-4 mr-2 " />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <button className="flex items-center space-x-2 ">
                <LogOut className="w-4 h-4 mr-2 " />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
