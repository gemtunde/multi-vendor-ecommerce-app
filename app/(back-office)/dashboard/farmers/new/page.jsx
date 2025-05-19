"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { makePostRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateCouponCode";
import TextareaInput from "@/components/FormInputs/TextAreaInput";

const NewFarmer = () => {
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
    const code = generateUserCode(data.name);
    data.code = code;
    console.log("farmer===>", data);

    makePostRequest(setIsLoading, "api/farmers", data, "Farmer", reset);
  };

  return (
    <div>
      {/* header */}
      <FormHeader title="New Farmer" />
      {/* form */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-600 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Farmer's Fullname"
            name="name"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Farmer's Phone"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Farmer's Email"
            name="email"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Farmer's Address"
            name="address"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Farmer's Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Farmer's Contact Person Phone"
            name="contactPersonPhone"
            register={register}
            type="tel"
            errors={errors}
            className="full"
          />
          <TextareaInput
            label="Farmer's Payment Terms"
            name="terms"
            register={register}
            errors={errors}
            //className="full"
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            //className="full"
            isRequired={false}
          />
        </div>
        <SubmitButton
          isLoading={isLoading}
          buttonTitle="Create Farmer"
          loadingButtonTitle="Creating Farmer, please wait..."
        />
      </form>
    </div>
  );
};

export default NewFarmer;
