"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";

const ArrayItemInput = ({ itemTitle, items = [], setItems }) => {
  const [showItemForm, setShowItemForm] = useState(false);
  const [itemText, setItemText] = useState("");

  function handleItems() {
    if (!itemText) return;
    setItems([...items, itemText]);
    setItemText("");
  }

  function removeItem(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }
  return (
    <div className="sm:cols-span-2">
      {showItemForm ? (
        <div class="flex items-center w-full mx-auto">
          <label for="voice-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 21 21"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                />
              </svg>
            </div>
            <input
              value={itemText}
              onChange={(e) => setItemText(e.target.value)}
              type="text"
              id="voice-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`Create a ${itemTitle}`}
            />
          </div>
          <button
            onClick={handleItems}
            type="button"
            className="inline-flex items-center py-2.5 px-4 ms-2 text-sm font-medium text-white bg-green-700 rounded-lg border border-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-700 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
          <button
            onClick={() => setShowItemForm(false)}
            type="button"
            className="inline-flex items-center py-2.5 px-4 ms-2 text-sm font-medium text-white bg-red-700 dark:bg-red-500 rounded-lg border border-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-re-700 dark:focus:ring-red-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setShowItemForm(true)}
          type="button"
          className="flex items-center space-x-2 px-4 py-2 text-slate-800 dark:text-slate-100"
        >
          <Plus />
          <span>Add {itemTitle}</span>
        </button>
      )}
      <div className="flex flex-wrap gap-1 mt-4">
        {items.map((item, i) => {
          return (
            <div
              onClick={() => removeItem(i)}
              key={i}
              className="flex items-center gap-1 bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100  px-4 py-2 rounded-md cursor-pointer"
            >
              <p>{item}</p>
              <button type="button">
                <X className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArrayItemInput;
