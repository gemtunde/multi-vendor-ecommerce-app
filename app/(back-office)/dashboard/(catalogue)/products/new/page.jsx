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
import { Plus, X } from "lucide-react";
import ArrayItemInput from "@/components/FormInputs/ArrayItemInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";

const NewProduct = () => {
  //const router = useRouter();
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //tags
  const [tags, setTags] = useState([]);

  //end tags
  const categories = [
    {
      id: 1,
      title: "Category 1",
    },
    {
      id: 2,
      title: "Category 2",
    },
    {
      id: 3,
      title: "Category 3",
    },
  ];
  const farmers = [
    {
      id: 1,
      title: "Farmer 1",
    },
    {
      id: 2,
      title: "Farmer 2",
    },
    {
      id: 3,
      title: "Farmer 3",
    },
  ];
  console.log("IMAGE URL========", imageUrl);
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    //defaultValues: initialData,
    mode: "onChange",
    isActive: true,
  });
  const isActive = watch("isActive");
  const onSubmit = async (data) => {
    const slug = generateSlug(data.title);
    data.slug = slug;
    data.tags = tags;
    data.imageUrl = imageUrl;
    console.log("DATA===>", data);

    makePostRequest(setIsLoading, "api/products", data, "Products", reset);
    setImageUrl("");
  };

  return (
    <div>
      {/* header */}
      <FormHeader title="New Product" />
      {/* form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-600 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Product Title"
            name="title"
            register={register}
            errors={errors}
            className="w-full"
          />
          <TextInput
            label="Product SKU"
            name="sku"
            className="w-full"
            register={register}
            errors={errors}
          />
          <TextInput
            className="w-full"
            label="Product Quantity"
            name="quantity"
            register={register}
            errors={errors}
            type="number"
          />
          <TextInput
            className="w-full"
            label="Product Barcode"
            name="barcode"
            register={register}
            errors={errors}
          />
          <TextInput
            className="w-full"
            label="Product Price (Before Discount)"
            name="productPrice"
            register={register}
            errors={errors}
            type="number"
          />
          <TextInput
            className="w-full"
            label="Product Sale Price (Discounted)"
            name="salePrice"
            register={register}
            errors={errors}
            type="number"
          />
          <SelectInput
            className="w-full"
            label="Select Categories"
            name="categoryId"
            register={register}
            errors={errors}
            options={categories}
          />
          <SelectInput
            className="w-full"
            label="Select Farmers"
            name="farmerId"
            register={register}
            errors={errors}
            options={farmers}
          />

          <ImageUpload
            imageUploader="productImageUploader"
            value={imageUrl}
            onChange={(url) => setImageUrl(url)}
          />
          {/* Tags */}
          <ArrayItemInput itemTitle="Tag" setItems={setTags} items={tags} />
          <TextareaInput
            label="Product Description"
            name="description"
            register={register}
            errors={errors}
          />
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
          buttonTitle="Create Product"
          loadingButtonTitle="Creating product, please wait..."
        />
      </form>
    </div>
  );
};

export default NewProduct;
