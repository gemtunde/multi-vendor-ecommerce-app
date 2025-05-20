import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { PlusIcon } from "lucide-react";

const Products = () => {
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
        <h2>table</h2>
      </div>
    </div>
  );
};

export default Products;
