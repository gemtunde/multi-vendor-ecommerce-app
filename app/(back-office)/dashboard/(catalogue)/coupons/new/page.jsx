"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { makePostRequest } from "@/lib/apiRequest";
import { generateCouponCode } from "@/lib/generateCouponCode";

const NewCoupon = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    //defaultValues: initialData,
  });

  const onSubmit = async (data) => {
    const couponCode = generateCouponCode(data.title, data.expiryDate);
    data.couponCode = couponCode;
    console.log("Coupon===>", data);

    makePostRequest(setIsLoading, "api/coupons", data, "Coupon", reset);
  };

  return (
    <div>
      {/* header */}
      <FormHeader title="New Coupon" />
      {/* form */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-600 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Coupon Title"
            name="title"
            register={register}
            errors={errors}
          />

          <TextInput
            label="Coupon Expiry Date"
            name="expiryDate"
            type="date"
            register={register}
            errors={errors}
          />
        </div>
        <SubmitButton
          isLoading={isLoading}
          buttonTitle="Create Coupon"
          loadingButtonTitle="Creating coupon, please wait..."
        />
      </form>
    </div>
  );
};

export default NewCoupon;
