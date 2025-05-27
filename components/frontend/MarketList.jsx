import React from "react";
import MarketCarousel from "./MarketCarousel";

export default function MarketList() {
  return (
    <div className="text-white py-6">
      {/* Market list */}
      <div className="bg-slate-100 dark:bg-slate-500 rounded-lg ">
        <h2 className="py-2 text-center bg-red-200 text-slate-400 dark:text-slate-50 font-semibold text-[1.6rem]">
          Shop By Market
        </h2>
        <div className="p-4">
          <MarketCarousel />
        </div>
      </div>
    </div>
  );
}
