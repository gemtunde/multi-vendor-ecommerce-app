import React from "react";
import Product from "../Product";
import Paginate from "./Paginate";

export default async function FilteredProducts({ products = [] }) {
  // const products = await getData("products"); //
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, i) => {
          return <Product product={product} key={i} />;
        })}
      </div>
      <div className="flex items-center justify-center p-8 mx-auto">
        <Paginate />
      </div>
    </>
  );
}
