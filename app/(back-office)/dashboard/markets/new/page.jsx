"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
//import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import TextareaInput from "@/components/FormInputs/TextAreaInput";
import { generateSlug } from "@/lib/generateSlug";
import ImageUpload from "@/components/FormInputs/ImageUpload";
import { makePostRequest } from "@/lib/apiRequest";

const NewMarket = () => {
  //const router = useRouter();
  const [logoUrl, setLogoUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log("IMAGE URL========", logoUrl);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    //defaultValues: initialData,
  });
  const onSubmit = async (data) => {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = logoUrl;
    console.log("DATA===>", data);

    makePostRequest(setIsLoading, "api/markets", data, "Markets", reset);
    setImageUrl("");
  };

  return (
    <div>
      {/* header */}
      <FormHeader title="New Market" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-600 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
          />

          <ImageUpload
            imageUploader="marketImageUploader"
            value={imageUrl}
            onChange={(url) => setLogoUrl(url)}
          />
        </div>
        <SubmitButton
          isLoading={isLoading}
          buttonTitle="Create Market"
          loadingButtonTitle="Creating market, please wait..."
        />
      </form>
    </div>
  );
};

export default NewMarket;
