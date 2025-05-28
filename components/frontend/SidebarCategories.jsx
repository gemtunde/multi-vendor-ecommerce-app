import { getData } from "@/lib/getData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function SidebarCategories() {
  const categories = await getData("categories");
  return (
    <div className=" hidden sm:block col-span-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-800 dark:border-gray-700  text-slate-800 overflow-hidden ">
      <h2 className="bg-slate-100 py-4 px-6 font-semibold border-b border-gray-300">
        Shop By Category ({categories.length})
      </h2>
      <div className="py-6 px-6 h-[450px] overflow-y-scroll">
        {categories.map((category) => {
          return (
            <Link
              key={category.id}
              href=""
              className="flex items-center gap-3 p-2 dark:text-slate-50 hover:bg-slate-300 dark:hover:bg-slate-600 duration-500 transition-all "
            >
              <Image
                width={556}
                height={556}
                className="w-12 h-12 rounded-full object-cover border border-lime-300"
                src={category.imageUrl}
                alt={category.title}
              />
              <span>{category.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
