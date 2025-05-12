import React from "react";
import SmallCard from "./SmallCard";
import { BookMarked, Calendar, Layers, ShoppingCart } from "lucide-react";

const SmallCards = () => {
  const orderStatus = [
    {
      id: 1,
      icon: Layers,
      title: " Total orders",
      sales: 103,
      color: "bg-green-600",
    },
    {
      id: 2,
      icon: ShoppingCart,
      title: " Pending orders",
      sales: 521,
      color: "bg-blue-600",
    },
    {
      id: 3,
      icon: Calendar,
      title: " Processing Month",
      sales: 173,
      color: "bg-orange-600",
    },
    {
      id: 4,
      icon: BookMarked,
      title: " Completed orders",
      sales: 445,
      color: "bg-purple-600",
    },
  ];
  return (
    <div className="py-8 gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {orderStatus.map((item) => (
        <SmallCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default SmallCards;
