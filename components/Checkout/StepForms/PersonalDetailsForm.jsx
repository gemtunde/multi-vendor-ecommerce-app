"use client";
import TextInput from "@/components/FormInputs/TextInput";
//import ToggleInput from "@/components/FormInputs/ToggleInput";
import React from "react";
import { useForm } from "react-hook-form";
import NavButtons from "../NavButtons";

export default function PersonalDetailsForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  async function processData(data) {
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(processData)}>
      <h2 className="text-xl font-semibold my-4">Personal Details</h2>
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
        <TextInput
          label="First Name"
          name="firstName"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Last Name"
          name="lastName"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Email Address"
          name="email"
          type="email"
          register={register}
          errors={errors}
        />
        <TextInput
          label="Phone Number"
          name="phone"
          register={register}
          errors={errors}
        />
        <NavButtons />
      </div>
    </form>
  );
}
