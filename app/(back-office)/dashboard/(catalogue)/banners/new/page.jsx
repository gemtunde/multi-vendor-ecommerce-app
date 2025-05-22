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
import { useRouter } from "next/navigation";
import ToggleInput from "@/components/FormInputs/ToggleInput";

const NewBanner = () => {
  //const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  console.log("IMAGE URL========", imageUrl);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    //defaultValues: initialData,
    isActive: true,
  });
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/banners");
  }
  const isActive = watch("isActive");
  const onSubmit = async (data) => {
    // const slug = generateSlug(data.title);
    // data.slug = slug;
    data.imageUrl = imageUrl;
    console.log("DATA===>", data);

    makePostRequest(
      setIsLoading,
      "api/banners",
      data,
      "Banners",
      reset,
      redirect
    );
    setImageUrl("");
  };

  return (
    <div>
      {/* header */}
      <FormHeader title="New Banner" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-600 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Banner Title"
            name="title"
            register={register}
            errors={errors}
          />
          <TextareaInput
            label="Banner Link"
            name="link"
            register={register}
            errors={errors}
          />

          <ImageUpload
            imageUploader="bannerImageUploader"
            value={imageUrl}
            onChange={(url) => setImageUrl(url)}
          />
          <ToggleInput
            label="Publish your Banner"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          disabled={!isValid}
          isLoading={isLoading}
          buttonTitle="Create Banner"
          loadingButtonTitle="Creating banner, please wait..."
        />
      </form>
    </div>
  );
};

export default NewBanner;
