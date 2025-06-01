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
import { makePostRequest, makePutRequest } from "@/lib/apiRequest";
import SelectInput from "@/components/FormInputs/SelectInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { useRouter } from "next/navigation";

const NewMarketForm = ({ categories, updateMarket = {} }) => {
  const id = updateMarket?.id ?? "";
  const initialImageUrl = updateMarket?.logoUrl ?? "";
  const [logoUrl, setLogoUrl] = useState(initialImageUrl);
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
      ...updateMarket,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/markets");
  }
  const onSubmit = async (data) => {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.logoUrl = logoUrl;

    if (id) {
      makePutRequest(
        setIsLoading,
        `api/markets/${id}`,
        data,
        "Markets",
        redirect
      );
    } else {
      makePostRequest(
        setIsLoading,
        "api/markets",
        data,
        "Markets",
        reset,
        redirect
      );
      setLogoUrl("");
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
            label="Market Title"
            name="title"
            register={register}
            errors={errors}
          />
          <SelectInput
            label="Select Category"
            name="categoryIds"
            register={register}
            errors={errors}
            options={categories}
            multiple={true}
          />
          <TextareaInput
            label="Market Description"
            name="description"
            register={register}
            errors={errors}
          />

          <ImageUpload
            imageUploader="marketImageUploader"
            value={logoUrl}
            onChange={(url) => setLogoUrl(url)}
          />
          <ToggleInput
            label="Publish your Market"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          disabled={!isValid}
          isLoading={isLoading}
          buttonTitle={` ${id ? "Update" : "Create"} Market`}
          loadingButtonTitle={` ${id ? "Updating" : "Creating"} market, please wait...`}
        />
      </form>
    </div>
  );
};

export default NewMarketForm;
