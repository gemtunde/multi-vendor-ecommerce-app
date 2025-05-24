"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import NewFarmerOnboardForm from "@/components/backoffice/NewFarmerOnboard";

const NewFarmer = () => {
  return (
    <div>
      {/* header */}
      <FormHeader title="New Farmer" />
      {/* form */}
      <NewFarmerOnboardForm />
    </div>
  );
};

export default NewFarmer;
