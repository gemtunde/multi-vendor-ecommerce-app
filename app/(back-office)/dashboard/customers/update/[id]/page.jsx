import React from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import { getData } from "@/lib/getData";
import UpdateCustomerForm from "@/components/backoffice/Forms/UpdateCustomerForm";

export default async function UpdateCustomer({ params: { id } }) {
  const customer = await getData(`customers/${id}`);
  console.log("customers <<<==", customer);
  return (
    <div className="flex flex-col gap-6 px-16 py-4">
      <FormHeader title="Update Customer Profile" />
      <div className=" px-4 mx-auto">
        <h2 className="text-slate-800 dark:text-slate-50">
          Hello {customer?.name}, tell us more about yourself
        </h2>
      </div>
      <UpdateCustomerForm user={customer} />;
    </div>
  );
}
