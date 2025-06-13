"use client";
import TextInput from "@/components/FormInputs/TextInput";
//import ToggleInput from "@/components/FormInputs/ToggleInput";
import React from "react";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentStep,
  updateCheckoutFormData,
} from "@/redux/slices/checkoutSlice";
import { useSession } from "next-auth/react";

export default function PersonalDetailsForm() {
  const { data: session } = useSession();
  const userId = session?.user?.id;

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
      firstName: existingFormData.firstName || "",
      lastName: existingFormData.lastName || "",
      email: existingFormData.email || "",
      phone: existingFormData.phone || "",
    },
  });

  async function processData(data) {
    data.userId = userId;
    // Dispatch the action to update the checkout form data
    dispatch(updateCheckoutFormData(data));
    // Move the form to the next step after submission
    dispatch(setCurrentStep(currentStep + 1));
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl text-green-500 font-semibold my-4">
        Personal Details
      </h2>
      <div className="grid gap-4 max-w-3xl  sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Last Name"
          name="lastName"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Phone Number"
          name="phone"
          register={register}
          errors={errors}
        />
        <NavButtons />
      </div>
    </form>
  );
}
