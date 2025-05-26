"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroCarousel from "./HeroCarousel";

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
    <div className="flex gap-8">
      <div
        className="w-1/3 bg-white border border-gray-200 rounded-lg
      dark:bg-slate-800 dark:border-gray-700  text-slate-800 overflow-hidden "
      >
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
      <div className="w-2/3 bg-blue-600">
        {" "}
        <HeroCarousel />
      </div>
    </div>
  );
}
