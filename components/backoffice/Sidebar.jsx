import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-slate-800 text-slate-50 space-y-6 w-52 h-screen p-4 fixed left-0 top-0">
      <Link className="mb-6" href="#">
        Logo
      </Link>
      <div className=" space-y-3 flex flex-col">
        <Link href="#">Dashboard</Link>
        <Link href="#">Catalogue</Link>
        <Link href="#">Customers</Link>
        <Link href="#">Markets</Link>
        <Link href="#">Farmers</Link>
        <Link href="#">orders</Link>
        <Link href="#">staff</Link>
        <Link href="#">Settings</Link>
        <Link href="#">online store</Link>
      </div>
    </div>
  );
};

export default Sidebar;
