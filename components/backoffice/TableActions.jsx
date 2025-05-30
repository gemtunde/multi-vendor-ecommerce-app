import React from "react";
import { Button } from "@/components/ui/button";
import { Download, Search, Trash2 } from "lucide-react";

const TableActions = () => {
  return (
    <div>
      <div
        className="flex items-center gap-8 justify-between py-6 px-8 bg-white text-slate-800
    dark:text-slate-50 dark:bg-slate-600 rounded-lg"
      >
        <Button
          variant="outline"
          className="bg-slate-100 text-slate-800
    dark:text-slate-50 dark:bg-green-700"
        >
          <Download />
          <span>Export</span>
        </Button>
        {/* Search */}
        {/* <div className="flex-grow">
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <Search className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="table-search"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full py-3 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for items"
            />
          </div>
        </div> */}
        {/* Delete */}
        <Button variant="destructive">
          <Trash2 />
          <span>Bulk Delete</span>
        </Button>
      </div>
    </div>
  );
};

export default TableActions;
