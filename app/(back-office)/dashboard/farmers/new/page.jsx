import React from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import NewFarmerOnboardForm from "@/components/backoffice/Forms/NewFarmerOnboard";

export default async function NewFarmer() {
  return (
    <div>
      {/* header */}
      <FormHeader title="New Farmer" />
      {/* form */}
      <NewFarmerOnboardForm />
    </div>
  );
}
