"use client";
import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React, { useState } from "react";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />

      {/* main content */}
      <div className="lg:ml-60 ml-0 flex-grow bg-slate-100 min-h-screen">
        <Navbar setShowSidebar={setShowSidebar} showSidebar={showSidebar} />

        <main className=" p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 mt-12 min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
