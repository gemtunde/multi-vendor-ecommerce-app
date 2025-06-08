"use client";
import { Minus, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function OrderSummary() {
  const cartItems = useSelector((store) => store.cart);
  const subTotal =
    cartItems.reduce((acc, item) => acc + item.salePrice * item.qty, 0) ?? 0;
  console.log("OrderSummary cartItems", cartItems);
  return (
    <div className="bg-red-500">
      {cartItems.length > 0 ? (
        cartItems.map((cartItem, i) => (
          <div
            key={i}
            className="flex  items-center border-b border-slate-400 text-slate-400 pb-3 text-sm"
          >
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
              {/* <div className="flex items-center border gap-2 sm:gap-4 rounded-xl">
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
              </div> */}
              {/* <div className="flex gap-2 sm:gap-40">
                <h2>${cartItem.salePrice * cartItem.qty}</h2>
                <button onClick={() => handleRemoveCart(cartItem.id)}>
                  <Trash2 className="text-red-600 text-sm" />
                </button>
              </div> */}
            </div>
          </div>
        ))
      ) : (
        <p>No cart items</p>
      )}
    </div>
  );
}
