import NewCommunityTrainingForm from "@/components/backoffice/NewCommunityTrainingForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function NewCommunityTraining() {
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });

  return <NewCommunityTrainingForm categories={categories} />;
}
