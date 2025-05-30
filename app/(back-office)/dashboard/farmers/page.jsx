import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/table-components/DataTable";
import { getData } from "@/lib/getData";
import { PlusIcon } from "lucide-react";
import React from "react";
import { farmersColumns } from "./column";

export default async function Farmers() {
  const farmers = await getData("/farmers");
  return (
    <div>
      <PageHeader
        headingText="Farmers"
        href="/dashboard/farmers/new"
        linkTitle="Add Farmers"
        Icon={PlusIcon}
      />
      {/* Table Actions */}
      <TableActions />
      {/* table */}
      <div className="py-8">
        <DataTable
          data={farmers}
          columns={farmersColumns}
          filterKeys={["name"]}
        />
      </div>
    </div>
  );
}

//export default Farmers;
