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
import { Plus, X } from "lucide-react";
import ArrayItemInput from "@/components/FormInputs/ArrayItemInput";
import ToggleInput from "@/components/FormInputs/ToggleInput";
import { generateUserCode } from "@/lib/generateCouponCode";
import { useRouter } from "next/navigation";
import MultipleImageUpload from "@/components/FormInputs/MultipleImageUpload";

const NewProductForm = ({ categories, farmers, updateProduct = {} }) => {
  //const router = useRouter();
  const id = updateProduct?.id ?? "";
  const initialImageUrl = updateProduct?.imageUrl ?? "";
  const initialTags = updateProduct?.tags ?? [];

  //const [imageUrl, setImageUrl] = useState(initialImageUrl);
  const [imageUrls, setImageUrls] = useState(
    Array.isArray(initialImageUrl)
      ? initialImageUrl
      : initialImageUrl
        ? [initialImageUrl]
        : []
  );
  const [isLoading, setIsLoading] = useState(false);

  //tags
  const [tags, setTags] = useState(initialTags);

  //end tags
  const measurement = [
    {
      id: 1,
      title: "kg",
    },
    {
      id: 2,
      title: "tons",
    },
    {
      id: 3,
      title: "liters",
    },
  ];

  console.log("IMAGE URL========", imageUrls);
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      isActive: true,
      isWholesale: false,
      farmerId: updateProduct?.userId,
      ...updateProduct,
    },
    mode: "onChange",
  });
  const isActive = watch("isActive");
  const isWholesale = watch("isWholesale");

  const router = useRouter();
  function redirect() {
    router.push("/dashboard/products");
  }

  const onSubmit = async (data) => {
    const slug = generateSlug(data.title);
    const productCode = generateUserCode("LLP", data.title);
    data.slug = slug;
    data.productCode = productCode;
    data.tags = tags;
    //data.qty = 1;
    data.imageUrl = imageUrls;
    console.log("DATA===>", data);

    if (id) {
      makePutRequest(
        setIsLoading,
        `api/products/${id}`,
        data,
        "Products",
        redirect
      );
    } else {
      makePostRequest(
        setIsLoading,
        "api/products",
        data,
        "Products",
        reset,
        redirect
      );
      setImageUrls([]);
      setTags([]);
    }
  };

  return (
    <div>
      {/* header */}

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
            name="qty"
            register={register}
            errors={errors}
            type="number"
          />
          <TextInput
            className="w-full"
            label="Product Stock"
            name="productStock"
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
          <ToggleInput
            label="Supports wholesale selling"
            name="isWholesale"
            trueTitle="Supported"
            falseTitle="Not Supported"
            register={register}
          />
          {isWholesale && (
            <>
              <TextInput
                //className="w-full"
                label="Wholesale Product Price"
                name="wholesalePrice"
                register={register}
                errors={errors}
                type="number"
              />

              <TextInput
                className="w-full"
                label="Minimum Wholesale Qty"
                name="wholesaleQty"
                register={register}
                errors={errors}
                type="number"
              />
              <SelectInput
                className="w-full"
                label="Select Unit of measurement"
                name="unit"
                register={register}
                errors={errors}
                options={measurement}
              />
            </>
          )}

          {/* <ImageUpload
            imageUploader="productImageUploader"
            value={imageUrl}
            onChange={(url) => setImageUrl(url)}
          /> */}
          <MultipleImageUpload
            imageUploader="productImageUploader"
            value={imageUrls}
            onChange={(urls) => setImageUrls(urls)}
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
          buttonTitle={` ${id ? "Update" : "Create"} Product`}
          loadingButtonTitle={` ${id ? "Updating" : "Creating"} product, please wait...`}
        />
      </form>
    </div>
  );
};

export default NewProductForm;
