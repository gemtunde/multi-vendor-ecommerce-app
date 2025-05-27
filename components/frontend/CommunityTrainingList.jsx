import React from "react";
import CommunityTrainingCarousel from "./CommunityTrainingCarousel";

export default function CommunityTrainingList() {
  return (
    <div className="text-white py-6">
      {/* Market list */}
      <div className="bg-slate-100 dark:bg-slate-500 rounded-lg ">
        <div className="flex item-center justify-between bg-slate-800 dark:bg-slate-700 px-6  py-2">
          <h2 className=" text-slate-400 dark:text-slate-50 font-semibold text-[1.2rem]">
            Community Training
          </h2>
          <h2 className=" text-slate-400 dark:text-slate-50 font-semibold text-[1.2rem]">
            See All
          </h2>
        </div>
        <div className="p-4">
          <CommunityTrainingCarousel />
        </div>
      </div>
    </div>
  );
}
