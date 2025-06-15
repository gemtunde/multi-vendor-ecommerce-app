import FilterComponent from "@/components/frontend/Filter/FilterComponent";
import React from "react";

export default async function CategoryDetailsPage({ params: { slug } }) {
  return (
    <div>
      <FilterComponent />
    </div>
  );
}
