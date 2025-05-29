import BreadCrumb from "@/components/frontend/BreadCrumb";
import { Delete, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Cart() {
  return (
    <div>
      <BreadCrumb />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <h2 className="py-2 mb-6 text-2xl font-semibold">Your Cart</h2>
          <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 text-sm">
            <h2 className="uppercase">Product</h2>
            <h2 className="uppercase">Quantity</h2>
            <h2 className="uppercase">Price</h2>
          </div>
          <div className="">
            <div className="flex  items-center border-b border-slate-400 text-slate-400 pb-3 text-sm">
              <div className="flex items-center pt-2  gap-12">
                <Image
                  src="/apple.jpg"
                  width={249}
                  height={249}
                  alt="apples"
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2>Apple Watch series 7-44mm</h2>
                  <small>Golden</small>
                </div>
                <div className="flex items-center border gap-4 rounded-xl">
                  <button className=" border-r py-2 px-4 ">
                    <Minus />
                  </button>
                  <p className="text-slate-400 text-xl py-2 px-4 ">1</p>
                  <button className=" border-l py-2 px-4 ">
                    <Plus />
                  </button>
                </div>
                <div className="flex gap-40">
                  <h2>$456</h2>
                  <button>
                    <Trash2 className="text-red-600 text-sm" />
                  </button>
                </div>
              </div>
            </div>
            {/* cart */}
            <div className="flex  items-center border-b border-slate-400 text-slate-400 pb-3 text-sm">
              <div className="flex items-center pt-2  gap-12">
                <Image
                  src="/apple.jpg"
                  width={249}
                  height={249}
                  alt="apples"
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2>Apple Watch series 7-44mm</h2>
                  <small>Golden</small>
                </div>
                <div className="flex items-center border gap-4 rounded-xl">
                  <button className=" border-r py-2 px-4 ">
                    <Minus />
                  </button>
                  <p className="text-slate-400 text-xl py-2 px-4 ">1</p>
                  <button className=" border-l py-2 px-4 ">
                    <Plus />
                  </button>
                </div>
                <div className="flex gap-40">
                  <h2>$456</h2>
                  <button>
                    <Trash2 className="text-red-600 text-sm" />
                  </button>
                </div>
              </div>
            </div>
            {/* cart */}
            <div className="flex  items-center border-b border-slate-400 text-slate-400 pb-3 text-sm">
              <div className="flex items-center pt-2  gap-12">
                <Image
                  src="/apple.jpg"
                  width={249}
                  height={249}
                  alt="apples"
                  className="rounded-xl w-20 h-20"
                />
                <div className="flex flex-col">
                  <h2>Apple Watch series 7-44mm</h2>
                  <small>Golden</small>
                </div>
                <div className="flex items-center border gap-4 rounded-xl">
                  <button className=" border-r py-2 px-4 ">
                    <Minus />
                  </button>
                  <p className="text-slate-400 text-xl py-2 px-4 ">1</p>
                  <button className=" border-l py-2 px-4 ">
                    <Plus />
                  </button>
                </div>
                <div className="flex gap-40">
                  <h2>$456</h2>
                  <button>
                    <Trash2 className="text-red-600 text-sm" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 p-6 hidden sm:block bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 dark:text-slate-100 overflow-hidden">
          <h2 className="py-3 text-2xl">Cart total</h2>
          <div className="flex items-center justify-between border-b pb-6 border-slate-500">
            <span>Subtotal</span>
            <span>$450</span>
          </div>
          <div className="flex items-center justify-between  py-4 ">
            <span>Tax</span>
            <span>$0</span>
          </div>
          <div className="flex items-center justify-between  py-4 ">
            <span>Shipping</span>
            <span>$90</span>
          </div>
          <p className=" pb-4 border-b border-slate-500">
            We only charge for shipping when you have over 2kg items
          </p>
          <div className="flex items-center justify-between  py-4 ">
            <span>Total</span>
            <span>$9000</span>
          </div>
          <Link
            href=""
            className="bg-slate-200 text-slate-800 py-2 px-4 rounded-lg"
          >
            Continue to Payment
          </Link>
        </div>
      </div>
    </div>
  );
}
