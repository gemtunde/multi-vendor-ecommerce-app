"use client";
import React from "react";
import { Delete, Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import toast from "react-hot-toast";
export default function CartProduct({ cartItem }) {
  const dispatch = useDispatch();
  const handleRemoveCart = (id) => {
    dispatch(removeFromCart(id));
    toast(`${cartItem.title} removed from cart`);
  };
  const handleQtyIncrement = (id) => {
    dispatch(incrementQty(id));
    toast(`${cartItem.title} qty has been removed increased`);
  };
  const handleQtyDecrement = (id) => {
    dispatch(decrementQty(id));
    toast(`${cartItem.title} quantity has been decreased`);
  };

  return (
    <div className="flex  items-center border-b border-slate-400 text-slate-400 pb-3 text-sm">
      <div className="flex items-center pt-2  gap-2 sm:gap-12">
        <Image
          src={cartItem.imageUrl}
          width={249}
          height={249}
          alt={cartItem.title}
          className="rounded-xl w-20 h-20"
        />
        <div className="flex flex-col">
          <h2>{cartItem.title}</h2>
          <small>Golden</small>
        </div>
        <div className="flex items-center border gap-2 sm:gap-4 rounded-xl">
          <button
            disabled={cartItem.qty === 1}
            onClick={() => handleQtyDecrement(cartItem.id)}
            className=" border-r py-2 px-4 cursor-pointer "
          >
            <Minus />
          </button>
          <p className="text-slate-400 text-xl py-2 px-4 ">
            {cartItem.qty ?? 1}
          </p>
          <button
            onClick={() => handleQtyIncrement(cartItem.id)}
            className=" border-l py-2 px-4 "
          >
            <Plus />
          </button>
        </div>
        <div className="flex gap-2 sm:gap-40">
          <h2>${cartItem.salePrice * cartItem.qty}</h2>
          <button onClick={() => handleRemoveCart(cartItem.id)}>
            <Trash2 className="text-red-600 text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
