"use client";
import React from "react";
import { BaggageClaim } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";

export default function Product({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart`);
  };
  return (
    <div className="mx-2 rounded-lg dark:bg-slate-600">
      <Link
        href={`/products/${product.slug}`}
        // className="rounded-lg "
        // className="flex items-center gap-3 p-2 dark:text-slate-50 hover:bg-slate-300 dark:hover:bg-slate-600 duration-500 transition-all "
      >
        <Image
          width={556}
          height={556}
          className="w-full"
          // className="w-12 h-12 rounded-full object-cover border border-lime-300"
          src={product.imageUrl[0]}
          alt={product.title}
        />
        <h2 className="bg-slate-200 rounded-b-lg dark:bg-slate-600 text-slate-600 dark:text-slate-100 p-2 text-center">
          {product.title}
        </h2>
      </Link>
      <div className="flex items-center justify-between gap-2 p-4">
        <p className="font-semibold">NGN{product.salePrice}</p>
        <button
          onClick={() => handleAddToCart()}
          className="flex items-center space-x-2 bg-lime-600 px-4 py-2 rounded-md text-white"
        >
          <BaggageClaim />
          <span>Add</span>
        </button>
      </div>
    </div>
  );
}
