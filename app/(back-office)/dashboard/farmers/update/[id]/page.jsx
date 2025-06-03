import React from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import NewFarmerOnboardForm from "@/components/backoffice/Forms/NewFarmerOnboard";
import { getData } from "@/lib/getData";

export default async function UpdateFarmer({ params: { id } }) {
  const farmer = await getData(`farmers/${id}`);
  console.log("FARMERS plplplpl==", farmer);
  return (
    <div className="flex flex-col gap-6 p-16">
      <FormHeader title="Update Farmer Profile" />
      <div className="max w-4xl px-4 mx-auto">
        <h2>Hello {farmer?.name}, tell us more about yourself</h2>
      </div>
      <NewFarmerOnboardForm user={farmer} />;
    </div>
  );
}
