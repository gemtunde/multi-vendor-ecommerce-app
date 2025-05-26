"use client";
import React, { useState } from "react";
//import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { makePostRequest } from "@/lib/apiRequest";
import { generateUserCode } from "@/lib/generateCouponCode";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import { useRouter } from "next/navigation";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import ImageUpload from "@/components/FormInputs/ImageUpload";
import ArrayItemInput from "../FormInputs/ArrayItemInput";

const NewFarmerOnboardForm = ({ user }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [products, setProducts] = useState([]);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...user,
    },
  });

  const router = useRouter();
  function redirect() {
    router.push("/dashboard/farmers");
  }
  const isActive = watch("isActive");

  const onSubmit = async (data) => {
    const code = generateUserCode("GEM", data.name);
    data.code = code;
    data.userId = user?.id;
    data.products = products;
    data.imageUrl = imageUrl;
    console.log("farmer===>", data);

    makePostRequest(
      setIsLoading,
      "api/farmers",
      data,
      "Farmer Profile",
      reset,
      redirect
    );
  };

  return (
    <div>
      {/* header */}
      {/* <FormHeader title="New Farmer" /> */}
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
        </div>
        <SubmitButton
          disabled={!isValid}
          isLoading={isLoading}
          buttonTitle="Create Farmer"
          loadingButtonTitle="Creating Farmer, please wait..."
        />
      </form>
    </div>
  );
};

export default NewFarmerOnboardForm;
