import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import CustomDataTable from "@/components/backoffice/CustomDataTable";
import DashboardChart from "@/components/backoffice/DashboardChart";
import FarmerDashboard from "@/components/backoffice/FarmerDashboard";
import Heading from "@/components/backoffice/Heading";
import LargeCards from "@/components/backoffice/LargeCards";
import SmallCards from "@/components/backoffice/SmallCards";
import UserDashboard from "@/components/backoffice/UserDashboard";
import { getServerSession } from "next-auth";
import React from "react";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);
  const role = session?.user?.role;
  if (role === "USER") {
    return <UserDashboard />;
  }
  if (role === "FARMER") {
    return <FarmerDashboard />;
  }
  return (
    <div className="w-full">
      <Heading title="Dashboard overview" />
      {/* Large cards */}
      <LargeCards />
      {/* small cards */}
      <SmallCards />
      {/* charts */}
      <DashboardChart />
      {/* Recent orders Table */}
      <CustomDataTable />
    </div>
  );
};

export default Dashboard;
