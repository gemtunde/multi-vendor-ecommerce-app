import React from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import NewProductForm from "@/components/backoffice/Forms/NewProductForm";
import { getData } from "@/lib/getData";

export default async function UpdateProduct({ params: { id } }) {
  const categoriesData = await getData("categories");
  const usersData = await getData("users");
  const product = await getData(`products/${id}`);

  const farmersData = usersData.filter((user) => user.role === "FARMER");
  const farmers = farmersData.map((farmer) => {
    return {
      id: farmer.id,
      title: farmer.name,
    };
  });
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  console.log("productS----===>", product);
  return (
    <div>
      <FormHeader title={`Update ${product.title} `} />
      <NewProductForm
        updateProduct={product}
        categories={categories}
        farmers={farmers}
      />
      ;
    </div>
  );
}
