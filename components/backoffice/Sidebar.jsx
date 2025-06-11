"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import {
  Building,
  Building2,
  CarTaxiFront,
  ChevronDown,
  ChevronRight,
  DollarSignIcon,
  ExternalLink,
  Factory,
  LayoutGrid,
  LogOut,
  Settings2,
  Slash,
  SlashIcon,
  Truck,
  User,
  User2,
  UserSquare2,
  Warehouse,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { handleLogout } from "../Actions/handleLogout";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);
  const { theme } = useTheme();

  const { data: session, status } = useSession();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  let userLinks;
  const role = session?.user?.role;
  console.log("User role in sidebar", role);

  const sidebarLinks = [
    {
      title: "Customers",
      icon: User2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Sales",
      icon: Truck,
      href: "/dashboard/sales",
    },
    {
      title: "Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "Community",
      icon: Building2,
      href: "/dashboard/community",
    },
    {
      title: "Wallet",
      icon: DollarSignIcon,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: LayoutGrid,
      href: "/dashboard/settings",
    },
    {
      title: "online Store",
      icon: ExternalLink,
      href: "/dashboard/store",
    },
  ];
  let catalogueLinks = [
    {
      title: "Products",
      icon: User2,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: Warehouse,
      href: "/dashboard/categories",
    },
    // {
    //   title: "Attributes",
    //   icon: UserSquare2,
    //   href: "/dashboard/attributes",
    // },
    {
      title: "Coupons",
      icon: Truck,
      href: "/dashboard/coupons",
    },
    {
      title: " Store Banners",
      icon: ExternalLink,
      href: "/dashboard/banners",
    },
  ];

  if (role === "ADMIN") {
    userLinks = sidebarLinks;
  } else if (role === "FARMER") {
    userLinks = sidebarLinks.filter(
      (item) => item.title !== "Staff" && item.title !== "Farmers"
    );
  } else {
    userLinks = sidebarLinks.filter(
      (item) =>
        item.title !== "Wallet" &&
        item.title !== "Customers" &&
        item.title !== "Settings" &&
        item.title !== "Markets" &&
        item.title !== "Farmers" &&
        item.title !== "Community" &&
        item.title !== "Sales"
    );
    catalogueLinks = [];
  }
  return (
    <div
      className={
        showSidebar
          ? "sm:block mt-20 sm:mt-0 bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-50 space-y-6 w-60 h-screen fixed left-0 top-0 shadow-md overflow-y-scroll"
          : "mt-20 sm:mt-0 hidden sm:block bg-slate-50 text-slate-900 dark:bg-slate-800 dark:text-slate-50 space-y-6 w-60 h-screen fixed left-0 top-0 shadow-md overflow-y-scroll"
      }
    >
      <Link
        className="mb-20 px-6 py-4 "
        href="/dashboard"
        onClick={() => setShowSidebar(false)}
      >
        {theme === "dark" ? (
          <Image src="/logo-white.png" width={150} height={50} alt="logo" />
        ) : (
          <Image src="/logo.png" width={150} height={50} alt="logo" />
        )}
      </Link>
      <div className=" space-y-3 flex flex-col">
        <Link
          onClick={() => setShowSidebar(false)}
          className={`${pathname === "/dashboard" ? "border-l-8 border-green-600 text-green-600" : ""} flex items-center space-x-3 px-6 py-2 `}
          href="/dashboard"
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        {catalogueLinks.length > 0 && (
          <Collapsible className="px-6 py-2">
            <CollapsibleTrigger asChild onClick={() => setOpenMenu(!openMenu)}>
              <button
                className={`flex items-center space-x-6  py-2  ${pathname === "/dashboard/catalogue" ? "border-l-8 border-green-600" : ""}`}
              >
                <div className="flex items-center space-x-3">
                  <Building />
                  <span>Catalogue</span>
                </div>
                {openMenu ? <ChevronDown /> : <ChevronRight />}
              </button>
            </CollapsibleTrigger>

            <CollapsibleContent className="px-4 pl-8 bg-slate-50 text-slate-900  dark:bg-slate-800 dark:text-slate-50 rounded-lg">
              {catalogueLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    onClick={() => setShowSidebar(false)}
                    className={`${pathname === item.href ? " text-green-600" : ""} flex items-center text-sm space-x-3 py-2 `}
                    href={item.href}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </CollapsibleContent>
          </Collapsible>
        )}

        {userLinks.map((Item, index) => {
          const Icon = Item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={index}
              className={`flex items-center space-x-3 px-6 py-2  ${Item.href === pathname ? "border-l-8 border-green-600 text-green-600" : ""}`}
              href={Item.href}
            >
              <Icon />
              <span>{Item.title}</span>
            </Link>
          );
        })}
        <div className="px-8 py-2">
          <Button
            onClick={handleLogout}
            variant="default"
            className="flex items-center space-x-3 px-8 py-2  bg-green-600 w-full"
          >
            <LogOut />
            <span>Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
