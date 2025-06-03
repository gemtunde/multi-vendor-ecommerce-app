import React from "react";
import CartProduct from "./CartProduct";

export default function CartItems({ cartItems }) {
  return (
    <div className="col-span-full sm:col-span-8">
      <h2 className="py-2 mb-6 text-2xl font-semibold">Your Cart</h2>
      <div className="flex items-center justify-between border-b border-slate-400 text-slate-400 pb-3 text-sm">
        <h2 className="uppercase">Product</h2>
        <h2 className="uppercase">Quantity</h2>
        <h2 className="uppercase">Price</h2>
      </div>
      <div className="">
        {/* cart */}
        {cartItems.length > 0 ? (
          cartItems.map((cartItem) => {
            return <CartProduct cartItem={cartItem} key={cartItem.id} />;
          })
        ) : (
          <p>no items in cart</p>
        )}
      </div>
    </div>
  );
}
