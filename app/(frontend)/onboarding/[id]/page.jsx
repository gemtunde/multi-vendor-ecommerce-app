import NewFarmerOnboardForm from "@/components/backoffice/NewFarmerOnboard";
import { getData } from "@/lib/getData";
import React from "react";

export default async function page({ params: { id } }) {
  const user = await getData(`users/${id}`);
  console.log("USERS plplplpl==", user);
  return (
    <div className="flex flex-col gap-6 p-16">
      <div className="max w-4xl p-4 mx-auto">
        <h2>Hello {user?.name}, tell us more about yourself</h2>
      </div>
      <NewFarmerOnboardForm user={user} />;
    </div>
  );
}
