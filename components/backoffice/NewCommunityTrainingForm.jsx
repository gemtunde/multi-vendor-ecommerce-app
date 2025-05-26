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
import ToggleInput from "@/components/FormInputs/ToggleInput";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
//import QuillEditor from "@/components/FormInputs/QuillEditor";

const QuillEditor = dynamic(
  () => import("@/components/FormInputs/QuillEditor"),
  {
    ssr: false,
  }
);
const NewCommunityTrainingForm = ({ categories }) => {
  //const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //   const category = [
  //     {
  //       id: 1,
  //       title: "Category 1",
  //     },
  //     {
  //       id: 2,
  //       title: "Category 2",
  //     },
  //     {
  //       id: 3,
  //       title: "Category 3",
  //     },
  //   ];
  console.log("IMAGE URL========", imageUrl);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      isActive: true,
    },
    mode: "onChange",
  });
  const router = useRouter();
  function redirect() {
    router.push("/dashboard/trainings");
  }
  const isActive = watch("isActive");

  const [content, setContent] = useState("");

  const onSubmit = async (data) => {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.content = content;
    data.imageUrl = imageUrl;
    console.log("DATA===>", data);

    makePostRequest(
      setIsLoading,
      "api/trainings",
      data,
      "CommunityTrainings",
      reset,
      redirect
    );
    setImageUrl("");
    setContent("");
  };

  return (
    <div>
      {/* header */}
      <FormHeader title="New Community Training" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-600 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Community Training Title"
            name="title"
            register={register}
            errors={errors}
          />
          <SelectInput
            label="Select Category"
            name="categoryId"
            register={register}
            errors={errors}
            options={categories}
            multiple={false}
          />
          <TextareaInput
            label="Training Description"
            name="description"
            register={register}
            errors={errors}
          />

          <ImageUpload
            imageUploader="communityImageUploader"
            value={imageUrl}
            onChange={(url) => setImageUrl(url)}
          />
          {/* react quill */}
          <QuillEditor
            label="Blog Training Content"
            value={content}
            onChange={setContent}
          />
          {/* react quill */}
          <ToggleInput
            label="Publish your Product"
            name="isActive"
            trueTitle="Active"
            falseTitle="Draft"
            register={register}
          />
        </div>
        <SubmitButton
          disabled={!isValid}
          isLoading={isLoading}
          buttonTitle="Create Training"
          loadingButtonTitle="Creating Training, please wait..."
        />
      </form>
    </div>
  );
};

export default NewCommunityTrainingForm;
