import FormHeader from "@/components/backoffice/FormHeader";
import NewCommunityTrainingForm from "@/components/backoffice/Forms/NewCommunityTrainingForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateCommunityTrainings({ params: { id } }) {
  const training = await getData(`trainings/${id}`);
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  console.log("TRAINING----==>", training);
  return (
    <div>
      <FormHeader title="Update Community Training" />
      <NewCommunityTrainingForm
        categories={categories}
        updateTraining={training}
      />
      ;
    </div>
  );
}
