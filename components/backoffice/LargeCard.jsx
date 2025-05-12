import React from "react";
import { Layers } from "lucide-react";

const LargeCard = ({ item }) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 p-8 shadow-md rounded-lg text-white ${item.color}`}
    >
      {<item.icon />}
      <h4>{item.period}</h4>
      <h2 className="text-2xl md:text-3xl font-semibold">N{item.sales}</h2>
    </div>
  );
};

export default LargeCard;
