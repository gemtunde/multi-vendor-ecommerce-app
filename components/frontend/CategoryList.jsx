import React from "react";
import CategoryCarousel from "./CategoryCarousel";

export default function CategoryList() {
  return (
    <div className="text-white py-2">
      {/* Market list */}
      <div className="bg-slate-100 dark:bg-slate-500 rounded-lg ">
        <div className="flex item-center justify-between bg-slate-200 dark:bg-slate-700 px-6  py-2">
          <h2 className=" text-slate-400 dark:text-slate-50 font-semibold text-[1.2rem]">
            Shop By Category
          </h2>
          <h2 className=" text-slate-400 dark:text-slate-50 font-semibold text-[1.2rem]">
            See All
          </h2>
        </div>
        <div className="p-4">
          <CategoryCarousel />
        </div>
      </div>
    </div>
  );
}
