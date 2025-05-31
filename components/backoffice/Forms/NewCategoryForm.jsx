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
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { useRouter } from "next/navigation";
//import SelectInput from "@/components/FormInputs/SelectInput";

const NewCategoryForm = ({ updateData = {} }) => {
  //const router = useRouter();
  const categoryId = updateData?.id ?? "";
  const initialImageUrl = updateData?.imageUrl ?? "";
  const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [isLoading, setIsLoading] = useState(false);
  // console.log("UPDATE tttt", updateData);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      isActive: true,
      ...updateData,
    },
  });
  const isActive = watch("isActive");
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/categories");
  }
  const onSubmit = async (data) => {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl ?? data.imageUrl;
    // console.log("DATA===>", data);

    if (categoryId) {
      /// make put request
      makePutRequest(
        setIsLoading,
        `api/categories/${categoryId}`,
        data,
        "Categories",
        redirect
      );
      console.log("MAKE PUT REQUEST", data);
    } else {
      //make post request
      makePostRequest(
        setIsLoading,
        "api/categories",
        data,
        "Categories",
        reset,
        redirect
      );
      setImageUrl("");
    }
  };

  return (
    <div>
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-600 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          {updateData.title}
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          {/* <SelectInput
            label="Select Market"
            name="marketIds"
            register={register}
            errors={errors}
            options={markets}
            multiple={false}
          /> */}
          <TextareaInput
            label="Category Description"
            name="description"
            register={register}
            errors={errors}
          />

          <ImageUpload
            imageUploader="imageUploader"
            value={imageUrl}
            onChange={(url) => setImageUrl(url)}
          />
          <ToggleInput
            label="Publish your category"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          disabled={!isValid}
          isLoading={isLoading}
          buttonTitle={`${categoryId ? "Update Category" : "Create Category"} `}
          loadingButtonTitle={`${categoryId ? "Updating Category" : "Creating Category"}`}
        />
      </form>
    </div>
  );
};

export default NewCategoryForm;
