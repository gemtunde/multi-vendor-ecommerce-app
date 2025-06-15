import Link from "next/link";
import React from "react";

export default function Sorting() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-semibold">Search Results - Electronics</h2>
      <div className="flex text-small items-center space-x-4">
        <p>Sort By:</p>
        <div className="flex">
          <Link
            href="#"
            className="px-2 py-1 border border-gray-300 rounded-l hover:bg-gray-100"
          >
            Relevance
          </Link>
          <Link
            href="#"
            className="px-2 py-1 border-t border-b border-r border-gray-300 hover:bg-gray-100"
          >
            Price: Low to High
          </Link>
          <Link
            href="#"
            className="px-2 py-1 border-t border-b border-r border-gray-300 rounded-r hover:bg-gray-100"
          >
            Price: High to Low
          </Link>
        </div>
      </div>
    </div>
  );
}
