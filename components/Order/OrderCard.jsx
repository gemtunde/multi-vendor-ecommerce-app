import { formatDate } from "@/lib/formateDate";
import { generateSlug } from "@/lib/generateSlug";
//import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
//import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";
import React from "react";

export default function OrderCard({ order }) {
  const subTotal =
    order?.orderItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ) ?? 0;

  return (
    <li className="overflow-hidden bg-white border border-gray-200 rounded-md">
      <div className="lg:flex">
        <div className="w-full border-b border-gray-200 lg:max-w-xs lg:border-b-0 lg:border-r bg-gray-50">
          <div className="px-4 py-6 sm:p-6 lg:p-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-1">
              <div>
                <p className="text-sm font-medium text-gray-500">Order ID</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">
                  {order.orderNumber ?? "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Date</p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">
                  {formatDate(order.createdAt) ?? "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Total Amount
                </p>
                <p className="text-sm font-bold text-gray-900 mt-0.5">
                  ${subTotal.toFixed(2) ?? "N/A"}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">Status</p>
                <div className="mt-0.5 flex items-center">
                  <div className="inline-flex items-center justify-center flex-shrink-0 w-3 h-3 rounded-full text-white bg-amber-400 mr-1.5">
                    <svg
                      className="w-2 h-2"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-sm font-bold text-gray-900">
                    {" "}
                    {order.orderStatus ?? "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 px-4 py-6 sm:p-6 lg:p-8">
          <ul className="space-y-7">
            {order.orderItems && order.orderItems.length > 0 ? (
              order.orderItems.map((item, index) => {
                //const slug = generateSlug(item.title);
                return (
                  <li key={index} className="relative flex pb-10 sm:pb-0">
                    <div className="flex-shrink-0">
                      <Image
                        className="object-cover rounded-lg w-28 h-28"
                        src={item?.imageUrl ?? "/apple.jpg"}
                        // src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/order-details/3/product-1.png"
                        alt={item.title ?? "Product Image"}
                        width={200}
                        height={200}
                      />
                    </div>

                    <div className="flex flex-col justify-between flex-1 ml-5">
                      <div className="sm:grid sm:grid-cols-2 sm:gap-x-5">
                        <div>
                          <p className="text-base font-bold text-gray-900">
                            {item.title ?? "Product Title"}
                          </p>
                          <p className="mt-1.5 text-sm font-medium text-gray-500">
                            Golden
                          </p>
                        </div>

                        <div className="mt-4 sm:mt-0 flex items-center justify-between gap-4 sm:justify-end">
                          <p className=" text-sm font-medium text-gray-500">
                            Quantity: {item.quantity}
                          </p>
                          <p className="text-base font-bold text-left text-gray-900 sm:text-right">
                            ${item.price.toFixed(2) ?? "0.00"}
                          </p>
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 sm:relative">
                        <div className="flex space-x-5">
                          <Link
                            href="#"
                            // href={`/products/${slug}`}
                            title={item.title ?? "View Product"}
                            className="p-1 -m-1 text-sm font-medium text-gray-500 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          >
                            {" "}
                            View Product{" "}
                          </Link>

                          <span className="text-gray-200"> | </span>

                          <a
                            href="#"
                            title=""
                            className="p-1 -m-1 text-sm font-medium text-gray-500 transition-all duration-200 rounded hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                          >
                            {" "}
                            Similar Product{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })
            ) : (
              <p className="text-slate-700"> No item available</p>
            )}
          </ul>

          <hr className="mt-8 border-gray-200" />

          <div className="flex items-center mt-8 space-x-5">
            <Link
              href={`/dashboard/orders/${order.id}`}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-gray-900 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-100"
            >
              View Order
            </Link>

            <Link
              href={`/dashboard/orders/${order.id}/invoice`}
              className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-bold text-gray-900 transition-all duration-200 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 hover:bg-gray-100"
            >
              View Invoice
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}
