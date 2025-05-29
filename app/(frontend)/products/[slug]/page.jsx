import BreadCrumb from "@/components/frontend/BreadCrumb";
import CategoryCarousel from "@/components/frontend/CategoryCarousel";
import { getData } from "@/lib/getData";
import { BaggageClaim, Minus, Plus, Send, Share2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function ProductDetailsPage({ params: { slug } }) {
  const category = await getData(`/categories/68360a1e669869a524ef8e08`);
  console.log("CATEGRY", category);
  return (
    <div>
      <BreadCrumb />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="">
          <Image
            src="/apple.jpg"
            alt="apple"
            width={556}
            height={556}
            className="w-full"
          />
        </div>
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="text-xl lg:text-2xl font-semibold">Bread Pizza</h2>
            <button>
              <Share2 />
            </button>
          </div>
          <div className="text-[16px] border-b border-gray-600">
            <p className="py-2 ">
              Never from Concentrate | 100% recyclable packaging | Low calorie
              and no fat, we’ll drink to that!
            </p>
            <div className="flex items-center gap-8 py-4">
              <p className="">SKU: 90998773</p>
              <p className="bg-lime-200 text-slate-800 py-2 px-4 rounded-full">
                <b>Stock:</b> 109
              </p>
            </div>
          </div>

          <div className="flex items-center pt-3 gap-4 border-b border-gray-600 pb-4">
            <h4 className="text-2xl">NGN4500.00</h4>
            <del className="text-slate-400 text-sm">2000.00</del>
          </div>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center border gap-4 rounded-xl">
              <button className=" border-r py-2 px-4 ">
                <Minus />
              </button>
              <p className="text-slate-400 text-xl py-2 px-4 ">1</p>
              <button className=" border-l py-2 px-4 ">
                <Plus />
              </button>
            </div>
            <button className="flex items-center space-x-2 bg-lime-600 px-4 py-3 rounded-md text-white">
              <BaggageClaim />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
        <div className="  bg-white border border-gray-200 rounded-lg dark:bg-slate-800 dark:border-gray-700  text-slate-800 overflow-hidden ">
          <h2 className="bg-slate-100 py-4 px-6 font-semibold border-b border-gray-300">
            Delivery & Returns
          </h2>
          <div className="p-4">
            <div className="flex py-2 px-4 items-center rounded-lg bg-orange-500 text-slate-50">
              <span>Limi Express</span>
              <Send />
            </div>
            <div className="py-3 mb-2 text-slate-500 border-b border-gray-500">
              Eligible for free delivery
              <Link href="#">View Details</Link>
            </div>
            <h2 className="font-semibold py-2 text-slate-800 dark:text-slate-100">
              Choose your location
            </h2>
            <div className="border pb-3">
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="border  pb-3">
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 my-8 bg-white dark:bg-slate-800 rounded-lg">
        <h2 className="mb-4 font-semibold text-2xl">Similar Products</h2>
        {category ? (
          <CategoryCarousel products={category.products} />
        ) : (
          "loading"
        )}
      </div>
    </div>
  );
}
