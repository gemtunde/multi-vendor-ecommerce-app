"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateCouponCode } from "@/lib/generateCouponCode";
import {
  formatIsoDate,
  generateIsoFormattedDate,
} from "@/lib/generateIsoFormattedDate";
import { useRouter } from "next/navigation";
import ToggleInput from "@/components/FormInputs/ToggleInput";

const NewCouponForm = ({ updateCoupon = {} }) => {
  const expiryDateNormal = formatIsoDate(updateCoupon.expiryDate);
  const id = updateCoupon?.id ?? "";
  updateCoupon.expiryDate = expiryDateNormal;
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateCoupon,
    },
  });
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/coupons");
  }
  const isActive = watch("isActive");
  const onSubmit = async (data) => {
    const couponCode = generateCouponCode(data.title, data.expiryDate);
    const isoFormattedDate = generateIsoFormattedDate(data.expiryDate);
    data.expiryDate = isoFormattedDate;
    data.couponCode = couponCode;
    console.log("Coupon===>", data);

    if (id) {
      makePutRequest(
        setIsLoading,
        `api/coupons/${id}`,
        data,
        "Coupons",
        redirect
      );
    } else {
      makePostRequest(
        setIsLoading,
        "api/coupons",
        data,
        "Coupon",
        reset,
        redirect
      );
    }
  };

  return (
    <div>
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
          <ToggleInput
            label="Publish your coupon"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          disabled={!isValid}
          isLoading={isLoading}
          buttonTitle={` ${id ? "Update" : "Create"} Coupon`}
          loadingButtonTitle={` ${id ? "Updating" : "Creating"} coupon, please wait...`}
        />
      </form>
    </div>
  );
};

export default NewCouponForm;
