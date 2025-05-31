import React from "react";
import FormHeader from "@/components/backoffice/FormHeader";
import NewBannerForm from "@/components/backoffice/Forms/NewBannerForm";
import { getData } from "@/lib/getData";

export default async function UpdateBanner({ params: { id } }) {
  const banners = await getData(`banners/${id}`);

  console.log("BANNERS******", banners);
  return (
    <div>
      <FormHeader title={`Update ${banners.title} Banner`} />
      <NewBannerForm updateBanner={banners} />
    </div>
  );
}
