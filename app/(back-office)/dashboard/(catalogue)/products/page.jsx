import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { PlusIcon } from "lucide-react";
import DataTable from "@/components/table-components/DataTable";
import { getData } from "@/lib/getData";
import { productColumns } from "./column";

export default async function Products() {
  const products = await getData("/products");
  return (
    <div>
      <PageHeader
        headingText="Product"
        href="/dashboard/products/new"
        linkTitle="Add Product"
        Icon={PlusIcon}
      />
      {/* Table Actions */}
      <TableActions />
      {/* table */}
      <div className="py-8">
        <DataTable data={products} columns={productColumns} />
      </div>
    </div>
  );
}

//export default Products;
