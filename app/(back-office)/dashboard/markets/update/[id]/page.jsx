import FormHeader from "@/components/backoffice/FormHeader";
import NewMarketForm from "@/components/backoffice/Forms/NewMarketForm";
import { getData } from "@/lib/getData";
import React from "react";

export default async function UpdateMarket({ params: { id } }) {
  const market = await getData(`markets/${id}`);
  const categoriesData = await getData("categories");
  const categories = categoriesData.map((category) => {
    return {
      id: category.id,
      title: category.title,
    };
  });
  console.log("MARKETS===>>", market);
  return (
    <div>
      <FormHeader title={`Update ${market.title} `} />
      <NewMarketForm categories={categories} updateMarket={market} />;
    </div>
  );
}
