import React from "react";
import MarketCarousel from "./MarketCarousel";
import { getData } from "@/lib/getData";

export default async function MarketList() {
  const markets = await getData("markets");
  return (
    <div className="text-white py-6">
      {/* Market list */}
      <div className="bg-slate-100 dark:bg-slate-500 rounded-lg ">
        <h2 className="py-2 text-center bg-red-200 text-slate-400 dark:text-slate-50 font-semibold text-[1.6rem]">
          Shop By Market
        </h2>
        <div className="p-4">
          <MarketCarousel markets={markets} />
        </div>
      </div>
    </div>
  );
}
