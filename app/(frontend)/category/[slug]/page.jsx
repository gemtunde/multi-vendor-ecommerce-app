import FilterComponent from "@/components/frontend/Filter/FilterComponent";
import { getData } from "@/lib/getData";
import React from "react";

export default async function CategoryDetailsPage({ params: { slug } }) {
  const categories = await getData(`categories/filter/${slug}`);
  //const { products } = categories;
  //console.log("FILTER ATS CATEGORY PRODUCTS==>", products);
  return (
    <div>
      <FilterComponent categories={categories} />
    </div>
  );
}
