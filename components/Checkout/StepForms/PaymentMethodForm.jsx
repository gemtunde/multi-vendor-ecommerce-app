import React from "react";
import { Circle, CreditCard, HeartHandshake, Truck } from "lucide-react";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateCheckoutFormData,
} from "@/redux/slices/checkoutSlice";

export default function PaymentMethodForm() {
  const currentStep = useSelector((store) => store.checkout.currentStep);
  const dispatch = useDispatch();

  const existingFormData = useSelector(
    (store) => store.checkout.checkoutFormData
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      paymentMethod: existingFormData.paymentMethod || "",
    },
  });

  async function processData(data) {
    // Dispatch the action to update the checkout form data
    dispatch(updateCheckoutFormData(data));
    // Move the form to the next step after submission
    dispatch(setCurrentStep(currentStep + 1));
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold my-4">
        Please select a Payment Method{" "}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 mt-8">
        <div className="col-span-full">
          <ul className="grid w-full gap-6 md:grid-cols-2">
            {/* Option 1 */}
            <li>
              <input
                {...register("paymentMethod", {
                  required: "Pick a Payment Method",
                })}
                type="radio"
                id="cashOnDelivery"
                value="cashOnDelivery"
                className="hidden peer"
              />
              <label
                htmlFor="cashOnDelivery"
                className="inline-flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer
                         peer-checked:border-blue-600 peer-checked:text-blue-600
                         hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex gap-2 items-center">
                  <HeartHandshake className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <p>Cash On Delivery</p>
                  </div>
                </div>
                <Circle className="w-5 h-5 flex-shrink-0" />
              </label>
            </li>

            {/* Option 2 */}
            <li>
              <input
                {...register("paymentMethod", {
                  required: "Pick a Payment Method",
                })}
                type="radio"
                id="creditCard"
                value="creditCard"
                className="hidden peer"
              />
              <label
                htmlFor="creditCard"
                className="inline-flex items-center justify-between w-full p-5 border rounded-lg cursor-pointer
                         peer-checked:border-blue-600 peer-checked:text-blue-600
                         hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex gap-2 items-center">
                  <CreditCard className="w-8 h-8 flex-shrink-0" />
                  <div>
                    <p>Credit Card</p>
                  </div>
                </div>
                <Circle className="w-5 h-5 flex-shrink-0" />
              </label>
            </li>
          </ul>
          {errors.shippingCost && (
            <p className="mt-2 text-sm text-red-600">
              {errors.shippingCost.message}
            </p>
          )}
        </div>

        {/* 3️⃣ Make sure the NavButtons component renders a submit button */}
        <NavButtons />
      </div>
    </form>
  );
}
