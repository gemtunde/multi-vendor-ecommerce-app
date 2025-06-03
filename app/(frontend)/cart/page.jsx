"use client";
import BreadCrumb from "@/components/frontend/BreadCrumb";
import CartItems from "@/components/frontend/CartItems";
import CartSubtotalCard from "@/components/frontend/CartSubtotalCard";
//import CartProduct from "@/components/frontend/CartProduct";

//import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((store) => store.cart);
  const subTotal =
    cartItems.reduce((acc, item) => acc + item.salePrice * item.qty, 0) ?? 0;
  console.log("cartItems", cartItems);
  return (
    <div>
      <BreadCrumb />
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
        <CartItems cartItems={cartItems} />
        <CartSubtotalCard subTotal={subTotal} />
      </div>
    </div>
  );
}
