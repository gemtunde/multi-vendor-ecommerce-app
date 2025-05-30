import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/table-components/DataTable";
import { getData } from "@/lib/getData";
import { PlusIcon } from "lucide-react";
import React from "react";
import { categoryColumns } from "./column";

export default async function Categories() {
  const categories = await getData("/categories");
  return (
    <div>
      <PageHeader
        headingText="Categories"
        href="/dashboard/categories/new"
        linkTitle="Add Category"
        Icon={PlusIcon}
      />
      {/* Table Actions */}
      <TableActions />
      {/* table */}
      <div className="py-8">
        <DataTable data={categories} columns={categoryColumns} />
      </div>
    </div>
  );
}

//export default Categories;
