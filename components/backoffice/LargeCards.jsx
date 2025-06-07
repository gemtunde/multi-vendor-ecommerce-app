import React from "react";
import LargeCard from "./LargeCard";
import { Layers } from "lucide-react";

const LargeCards = () => {
  const orderStats = [
    {
      id: 1,
      icon: Layers,
      period: " Today orders",
      sales: 203.89,
      color: "bg-green-600",
    },
    {
      id: 2,
      icon: Layers,
      period: " Yesterday orders",
      sales: 593.89,
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: Layers,
      period: " This Month",
      sales: 703.89,
      color: "bg-orange-600",
    },
    // {
    //   id: 4,
    //   icon: Layers,
    //   period: " Last Month",
    //   sales: 503.89,
    //   color: "bg-purple-600",
    // },
    {
      id: 5,
      icon: Layers,
      period: " All time sales",
      sales: 503.89,
      color: "bg-yellow-600",
    },
  ];
  return (
    <div className="py-8 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      {orderStats.map((item) => (
        <LargeCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default LargeCards;
