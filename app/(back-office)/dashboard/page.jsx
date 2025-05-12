import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full">
      <Heading title="Dashboard overview" />
      {/* Large cards */}
      <LargeCards />
      {/* small cards */}
      <SmallCards />
      {/* charts */}
      {/* Recent orders Table */}
    </div>
  );
};

export default Dashboard;
