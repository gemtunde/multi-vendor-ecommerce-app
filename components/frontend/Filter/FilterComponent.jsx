import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Breadcrumb from "./Breadcrumb";
import Sorting from "./Sorting";
import Filters from "./Filters";
import FilteredProducts from "./FilteredProducts";

export default function FilterComponent() {
  return (
    <div>
      <div className="bg-white text-slate-900 space-y-6 py-8 px-4">
        <Breadcrumb />
        <Sorting />
      </div>
      <div className="grid grid-cols-12 gap-4 py-8 ">
        <div className="col-span-3">
          <Filters />
        </div>
        <div className="col-span-9 ">
          <FilteredProducts />
        </div>
      </div>
    </div>
  );
}
