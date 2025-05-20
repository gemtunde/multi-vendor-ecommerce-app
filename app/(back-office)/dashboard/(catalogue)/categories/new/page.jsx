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
import SelectInput from "@/components/FormInputs/SelectInput";

const NewCategory = () => {
  //const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const markets = [
    {
      id: 1,
      title: "Sproutes Farmers Market",
    },
    {
      id: 2,
      title: "Cabbages Farmers Market",
    },
    {
      id: 3,
      title: "Carrots Farmers Market",
    },
    {
      id: 4,
      title: "Guavas Farmers Market",
    },
    {
      id: 5,
      title: "Bananas Farmers Market",
    },
  ];
  console.log("IMAGE URL========", imageUrl);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    //defaultValues: initialData,
    mode: "onChange",
  });
  const onSubmit = async (data) => {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.imageUrl = imageUrl;
    console.log("DATA===>", data);

    makePostRequest(setIsLoading, "api/categories", data, "Categories", reset);
    setImageUrl("");
  };

  return (
    <div>
      {/* header */}
      <FormHeader title="New Category" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-600 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Category Title"
            name="title"
            register={register}
            errors={errors}
          />
          <SelectInput
            label="Select Market"
            name="marketIds"
            register={register}
            errors={errors}
            options={markets}
            multiple={false}
          />
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
        </div>
        <SubmitButton
          disabled={!isValid}
          isLoading={isLoading}
          buttonTitle="Create Category"
          loadingButtonTitle="Creating category, please wait..."
        />
      </form>
    </div>
  );
};

export default NewCategory;
