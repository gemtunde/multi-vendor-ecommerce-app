import React from "react";
import SearchForm from "./SearchForm";
import logo from "../../public/logo.png";
import Link from "next/link";
import Image from "next/image";
import { HelpCircle, ShoppingCart, User, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ThemeSwitcher } from "../ThemeSwitcherBtn";
import HelpModal from "./HelpModal";
const Navbar = () => {
  return (
    <div className=" bg-slate-100 dark:bg-slate-800 ">
      <div className=" flex items-center justify-between py-3 max-w-7xl mx-auto px-8 gap-8">
        <Link className="" href="/">
          <Image src={logo} alt="gem-food logo" className="w-40" />
        </Link>
        <div className="flex-grow">
          <SearchForm />
        </div>
        <div className="flex gap-4">
          <Link
            href="/login"
            className="flex items-center space-x-1 text-green-950 dark:text-slate-50"
          >
            <User />
            <span>Login</span>
          </Link>

          <HelpModal />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg "
              >
                <ShoppingCart className="text-lime-700 dark:text-lime-500" />
                <span className="sr-only">Cart</span>
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500  rounded-full -top-0 end-6 dark:border-gray-900">
                  20
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="py-2 px-4 pr-8 bg-slate-100 dark:bg-slate-800">
              <DropdownMenuLabel>Cart Items</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/profile.jpeg"
                    alt="User profile"
                    width={200}
                    height={200}
                    className="w-8 h-8 rounded-full"
                  />
                  <Link href="/cart" className="flex flex-col space-y-1">
                    <p>Yellow Sweet Corn Stock out, </p>
                    <div className="flex items-center space-x-2">
                      <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm ">
                        Stock Out
                      </p>
                      <p>Dec 12 2021 - 12:40PM</p>
                    </div>
                  </Link>
                  <button>
                    <X />
                  </button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/profile.jpeg"
                    alt="User profile"
                    width={200}
                    height={200}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col space-y-1">
                    <p>Yellow Sweet Corn Stock out, </p>
                    <div className="flex items-center space-x-2">
                      <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm ">
                        Stock Out
                      </p>
                      <p>Dec 12 2021 - 12:40PM</p>
                    </div>
                  </div>
                  <button>
                    <X />
                  </button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <div className="flex items-center space-x-2">
                  <Image
                    src="/profile.jpeg"
                    alt="User profile"
                    width={200}
                    height={200}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col space-y-1">
                    <p>Yellow Sweet Corn Stock out, </p>
                    <div className="flex items-center space-x-2">
                      <p className="px-3 py-0.5 bg-red-700 text-white rounded-full text-sm ">
                        Stock Out
                      </p>
                      <p>Dec 12 2021 - 12:40PM</p>
                    </div>
                  </div>
                  <button>
                    <X />
                  </button>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
