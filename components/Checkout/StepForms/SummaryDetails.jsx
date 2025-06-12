import { makePostRequest } from "@/lib/apiRequest";
import { setCurrentStep } from "@/redux/slices/checkoutSlice";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function SummaryDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const existingFormData = useSelector(
    (store) => store.checkout.checkoutFormData
  );

  const cartItems = useSelector((store) => store.cart);
  const subTotal =
    cartItems.reduce((acc, item) => acc + item.salePrice * item.qty, 0) ?? 0;
  console.log("OrderSummary cartItems", cartItems);

  const router = useRouter();
  // function redirect() {
  //   router.push("/order-confirmation");
  // }
  const SubmitData = async () => {
    console.log("Proceed to payment with data:", existingFormData);

    const data = {
      orderItems: cartItems,
      existingFormData,
    };
    console.log("Combined Data:", data);
    // start request
    try {
      setIsLoading(true);
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
      const response = await fetch(`${baseUrl}/api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const responseData = await response.json();
      if (response.ok) {
        setIsLoading(false);
        console.log("resp--==>,", responseData);
        toast.success(`New order Created Successfully`);
        //reset();
        router.push(`/order-confirmation/${responseData?.id}`);
      } else {
        setIsLoading(false);
        console.log("Error Response", response);
        if (response.status === 409) {
          toast.error(
            responseData?.message || "The Giving Warehouse Stock is NOT Enough"
          );
          //toast.error("The Giving Warehouse Stock is NOT Enough");
        } else {
          console.log("Error Response2", response);
          toast.error(responseData.message || "Something Went wrong");
          //toast.error("Something Went wrong");
        }
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error.message || "Internal server error");
    }

    //end request
    //makePostRequest(setIsLoading, "api/orders", data, "orders", redirect);
    //redirect();
  };
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const dispatch = useDispatch();

  const handlePreviousStep = () => {
    dispatch(setCurrentStep(currentStep - 1));
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
      <div className="flex items-center justify-between gap-4 mt-4">
        <button
          className="flex items-center  px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
          onClick={handlePreviousStep}
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          <span>Previous</span>
        </button>
        <button
          disabled={isLoading}
          className="flex items-center justify-center px-4 py-2 bg-lime-600 text-white rounded hover:bg-lime-800"
          onClick={SubmitData}
        >
          {isLoading ? (
            <p>Processing orders, please wait</p>
          ) : (
            <>
              <span>Proceed to payment</span>
              <ChevronRight className="w-5 h-5 " />
            </>
          )}
        </button>
      </div>
    </>
  );
}
