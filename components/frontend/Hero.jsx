"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import { CircleDollarSign, FolderSync, HelpCircle } from "lucide-react";

export default function Hero() {
  const categories = [
    {
      id: 1,
      href: "/",
      name: "Vegetables",
      image: "/apple.jpg",
    },
    {
      id: 2,
      href: "/",
      name: "oranges",
      image: "/apple.jpg",
    },
    {
      id: 3,
      href: "/",
      name: "Mangos",
      image: "/apple.jpg",
    },
    {
      id: 4,
      href: "/",
      name: "Bananas",
      image: "/apple.jpg",
    },
    {
      id: 5,
      href: "/",
      name: "Guavas",
      image: "/apple.jpg",
    },
    {
      id: 6,
      href: "/",
      name: "Cashews",
      image: "/apple.jpg",
    },
    {
      id: 7,
      href: "/",
      name: "Pineapples",
      image: "/apple.jpg",
    },
    {
      id: 8,
      href: "/",
      name: "Grapes",
      image: "/apple.jpg",
    },
    {
      id: 9,
      href: "/",
      name: "Pawpaws",
      image: "/apple.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className=" hidden sm:block col-span-3 bg-white border border-gray-200 rounded-lg dark:bg-slate-800 dark:border-gray-700  text-slate-800 overflow-hidden ">
        <h2 className="bg-slate-100 py-4 px-6 font-semibold border-b border-gray-300">
          Shop By Category
        </h2>
        <div className="py-6 px-6 h-[300px] overflow-y-scroll">
          {categories.map((category) => {
            return (
              <Link
                key={category.id}
                href={category.href}
                className="flex items-center gap-3 p-2 dark:text-slate-50 hover:bg-slate-300 dark:hover:bg-slate-600 duration-500 transition-all "
              >
                <Image
                  width={556}
                  height={556}
                  className="w-12 h-12 rounded-full object-cover border border-lime-300"
                  src={category.image}
                  alt="fruits"
                />
                <span>{category.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="col-span-7 bg-blue-600">
        {" "}
        <HeroCarousel />
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
