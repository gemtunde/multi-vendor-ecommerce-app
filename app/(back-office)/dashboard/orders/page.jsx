import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import OrderCard from "@/components/Order/OrderCard";
import { getData } from "@/lib/getData";
import { getServerSession } from "next-auth";
import React from "react";

export default async function Orders() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-900">
          Please login to view orders
        </h1>
      </div>
    );
  }
  console.log("session>>>>++++>>>>", session);
  const id = session?.user?.id;
  const orders = await getData(`orders/user/${id}`);
  console.log("orders>>>>++++>>>>", orders);
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 m-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Order Details
            </h1>
            <p className="mt-2 text-sm font-normal text-gray-600">
              Check the status of recent and old orders & discover more products
            </p>
          </div>

          <ul className="mt-8 space-y-5 lg:mt-12 sm:space-y-6 lg:space-y-10">
            {orders.length > 0 ? (
              orders.map(
                (order, index) =>
                  order.orderItems.length > 0 && (
                    <OrderCard order={order} key={index} />
                  )
              )
            ) : (
              <p>no available orders</p>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
