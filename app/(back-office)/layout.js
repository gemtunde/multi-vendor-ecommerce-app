import Navbar from "@/components/backoffice/Navbar";
import Sidebar from "@/components/backoffice/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex">
      {/* sidebar */}
      <Sidebar />

      {/* main content */}
      <div className="w-full">
        <Navbar />
        <main className="flex ml-52 p-8 bg-slate-900 text-slate-50 min-h-screen mt-12">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
