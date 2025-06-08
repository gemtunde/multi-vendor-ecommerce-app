import Link from "next/link";
import React from "react";

export default function CartSubtotalCard({ subTotal }) {
  const shipping = 15;
  const tax = 25;
  const totalPrice = subTotal > 0 ? subTotal + tax + shipping : 0;
  return (
    <div className="col-span-4 p-6 bg-white border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-700 text-slate-800 dark:text-slate-100 overflow-hidden">
      <h2 className="py-3 text-2xl">Cart total</h2>
      <div className="flex items-center justify-between border-b pb-6 border-slate-500">
        <span>Subtotal</span>
        <span>N{subTotal.toFixed(2) ?? 0}</span>
      </div>
      <div className="flex items-center justify-between  py-4 ">
        <span>Tax</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between  py-4 ">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>
      <p className=" pb-4 border-b border-slate-500">
        We only charge for shipping when you have over 2kg items
      </p>
      <div className="flex mb-8 items-center justify-between  py-4 ">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <Link
        href="/checkout"
        className="bg-lime-600 text-slate-50 dark:text-slate-50  py-3 px-6 rounded-lg"
      >
        Continue to Checkout
      </Link>
    </div>
  );
}
