import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";

export default function SummaryDetails() {
  const existingFormData = useSelector(
    (store) => store.checkout.checkoutFormData
  );

  const cartItems = useSelector((store) => store.cart);
  const subTotal =
    cartItems.reduce((acc, item) => acc + item.salePrice * item.qty, 0) ?? 0;
  console.log("OrderSummary cartItems", cartItems);

  const SubmitData = async () => {
    console.log("Proceed to payment with data:", existingFormData);
  };
  return (
    <>
      <h2 className="text-xl my-4 font-semibold dark:text-lime-500">
        Summary Details
      </h2>
      {cartItems.map((cartItem, i) => {
        return (
          <div
            key={i}
            className="flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 text-sm"
          >
            <div className="flex items-center pt-2 gap-2 sm:gap-12">
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
            </div>
            <div className="flex flex-col items-end">
              <span className="text-slate-600 font-semibold">
                ${cartItem.salePrice.toFixed(2)}
              </span>
              <span className="text-slate-400">Qty: {cartItem.qty}</span>
            </div>
          </div>
        );
      })}
      <div className="flex items-center my-4 justify-between border-b border-slate-400 text-slate-400 pb-3 text-sm">
        <span className="text-slate-600 font-semibold">Subtotal</span>
        <span className="text-slate-600 font-semibold">
          ${subTotal.toFixed(2)}
        </span>
      </div>
      <div>
        <button
          className="flex items-center justify-center px-4 py-2 bg-lime-600 text-white rounded hover:bg-lime-800"
          onClick={SubmitData}
        >
          <span>Proceed to payment</span>
          <ChevronRight className="w-5 h-5 " />
        </button>
      </div>
    </>
  );
}
