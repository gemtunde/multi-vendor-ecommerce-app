import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import { CircleDollarSign, FolderSync, HelpCircle } from "lucide-react";
import SidebarCategories from "./SidebarCategories";
import { getData } from "@/lib/getData";

export default async function Hero() {
  const banners = await getData("banners");
  return (
    <div className="grid grid-cols-12 gap-8">
      <SidebarCategories />
      <div className="col-span-7 bg-blue-600">
        {" "}
        <HeroCarousel banners={banners} />
      </div>
      <div
        className="hidden sm:block col-span-2 bg-white p-2 dark:bg-slate-800 rounded-lg"
        //className="col-span-2 p-2 bg-slate-100 border border-gray-200 rounded-lg dark:bg-slate-800 dark:border-gray-700  text-slate-800 dark:text-slate-100 overflow-hidden"
      >
        <Link href="#" className="flex items-center space-x-3 my-2">
          <HelpCircle className="shrink-0 w-5 h-5 text-lime-500" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Help center</h2>
            <p className="text-[0.7rem]">Customer care</p>
          </div>
        </Link>
        <Link href="#" className="flex items-center space-x-3 my-2">
          <FolderSync className="shrink-0 w-5 h-5 text-lime-500" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Easy Return</h2>
            <p className="text-[0.6rem]">Quick Return</p>
          </div>
        </Link>
        <Link
          href="/register-farmer"
          className="flex items-center space-x-3 my-2"
        >
          <CircleDollarSign className="shrink-0 w-5 h-5 text-lime-500" />
          <div className="flex flex-col">
            <h2 className="uppercase text-sm">Sell Today</h2>
            <p className="text-[0.6rem]">Millions of visitors</p>
          </div>
        </Link>
        <Image
          src="/banners/buy-2.gif"
          alt="banners"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
