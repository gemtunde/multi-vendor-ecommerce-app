"use client";
import React, { useState } from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";
import { useForm } from "react-hook-form";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { makePostRequest } from "@/lib/apiRequest";
import TextareaInput from "@/components/FormInputs/TextAreaInput";

const NewStaff = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    //defaultValues: initialData,
  });

  const onSubmit = async (data) => {
    //const code = generateUserCode(data.name);
    // data.code = code;
    console.log("Staff===>", data);

    makePostRequest(setIsLoading, "api/staff", data, "Staff", reset);
  };

  return (
    <div>
      {/* header */}
      <FormHeader title="New Staff" />
      {/* form */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-slate-600 dark:border-gray-700 mx-auto my-3"
      >
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <TextInput
            label="Staff's Fullname"
            name="name"
            register={register}
            errors={errors}
          />
          <TextInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Staff's Phone"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Staff's Email"
            name="email"
            register={register}
            errors={errors}
            className="full"
          />
          <TextInput
            label="Staff's Address"
            name="address"
            register={register}
            errors={errors}
            className="full"
          />

          <TextareaInput
            label="Notes"
            name="notes"
            register={register}
            errors={errors}
            //className="full"
            isRequired={false}
          />
        </div>
        <SubmitButton
          isLoading={isLoading}
          buttonTitle="Create Staff"
          loadingButtonTitle="Creating Staff, please wait..."
          disabled={!isValid}
        />
      </form>
    </div>
  );
};

export default NewStaff;
