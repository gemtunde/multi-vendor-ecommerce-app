import React from "react";
import { AlignJustify, Bell, User, Sun } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-slate-700 text-slate-50 h-16 px-8 py-4">
      <button>
        <AlignJustify />
      </button>
      <div className="flex space-x-3">
        <button>
          <Sun />
        </button>
        <button>
          {" "}
          <Bell />
        </button>
        <button>
          <User />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
