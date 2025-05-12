import React from "react";
import { ShoppingCart } from "lucide-react";

const SmallCard = ({ data }) => {
  return (
    <div className="bg-slate-600 shadow-lg flex items-center rounded-lg gap-2 p-4">
      <div
        className={`flex items-center justify-center h-[50px] w-[50px] rounded-full text-slate-50 ${data.color}`}
      >
        {/* <ShoppingCart /> */}
        {<data.icon />}
      </div>
      <div>
        <p className="text-slate-50">{data.title}</p>
        <h4 className="font-semibold text-2xl">{data.sales}</h4>
      </div>
    </div>
  );
};
export default SmallCard;
