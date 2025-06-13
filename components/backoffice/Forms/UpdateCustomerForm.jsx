"use client";
import React, { useState } from "react";
//import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateCouponCode";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import { useRouter } from "next/navigation";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import ImageUpload from "@/components/FormInputs/ImageUpload";
import ArrayItemInput from "@/components/FormInputs/ArrayItemInput";
import { generateIsoFormattedDate } from "@/lib/generateIsoFormattedDate";
//import ArrayItemInput from "../FormInputs/ArrayItemInput";

const UpdateCustomerForm = ({ user = {} }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  console.log("SAFE user===>", user);
  const userData = user?.profile || user;
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      ...userData,
    },
  });

  const router = useRouter();
  function redirect() {
    router.push("/dashboard/customers");
  }

  const onSubmit = async (data) => {
    const isoFormattedDate = generateIsoFormattedDate(data.dateOfBirth);
    data.dateOfBirth = isoFormattedDate;

    data.userId = user?.id;
    data.imageUrl = imageUrl;
    console.log("customer===>", data);

    makePutRequest(
      setIsLoading,
      `api/customers/${user?.id}`,
      data,
      "Customer Profile",
      redirect,
      reset
    );
  };

  return (
    <div>
      {/* header */}
      {/* <FormHeader title="New Farmer" /> */}
      {/* form */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-600 dark:border-gray-700 mx-auto "
      >
        <h2 className="text-xl text-green-500 font-semibold my-4">
          Personal Details
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 border-b-2 border-gray-200 pb-6 mb-6">
          <TextInput
            label="Full Name"
            name="name"
            register={register}
            errors={errors}
            //className="full"
          />
          <TextInput
            label="User Name"
            name="userName"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Email Address"
            name="email"
            type="email"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Date of Birth"
            name="dateOfBirth"
            type="date"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Phone Number"
            name="phone"
            register={register}
            errors={errors}
            className="full"
          />
          <ImageUpload
            imageUploader="imageUploader"
            value={imageUrl}
            onChange={(url) => setImageUrl(url)}
          />
        </div>
        <h2 className="text-xl text-green-500 font-semibold my-4">
          Shipping Details
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Street Address"
            name="streetAddress"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="City"
            name="city"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Country"
            name="country"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Zip Code"
            name="zipCode"
            register={register}
            errors={errors}
            className="full"
          />
        </div>
        {/* <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
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
            isRequired={false}
          />
          <TextInput
            label="Farmer's Contact Person"
            name="contactPerson"
            register={register}
            errors={errors}
            className="full"
            isRequired={false}
          />
          <TextInput
            label="Farmer's Contact Person Phone"
            name="contactPersonPhone"
            register={register}
            type="tel"
            errors={errors}
            className="full"
            isRequired={false}
          />
          <TextInput
            label="What's your land size (Acres)"
            name="landSize"
            type="number"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="What's your main crop"
            name="mainCrop"
            register={register}
            errors={errors}
            className="full"
          />
          <ArrayItemInput
            setItems={setProducts}
            items={products}
            itemTitle="Products"
          />
          <ImageUpload
            imageUploader="imageUploader"
            value={imageUrl}
            onChange={(url) => setImageUrl(url)}
          />
          <TextareaInput
            label="Farmer's Payment Terms"
            name="terms"
            register={register}
            errors={errors}
            //className="full"
            isRequired={false}
          />
          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            //className="full"
            isRequired={false}
          />
          <ToggleInput
            label="Publish your Farmer"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div> */}
        <SubmitButton
          disabled={!isValid}
          isLoading={isLoading}
          buttonTitle="Update Customer"
          loadingButtonTitle="Updating Customer, please wait..."
        />
      </form>
    </div>
  );
};

export default UpdateCustomerForm;
