import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/table-components/DataTable";
import { getData } from "@/lib/getData";
import { PlusIcon } from "lucide-react";
import React from "react";
import { bannerColumns } from "./column";

export default async function Banners() {
  const banners = await getData("/banners");
  return (
    <div>
      <PageHeader
        headingText="Banners"
        href="/dashboard/banners/new"
        linkTitle="Add Banners"
        Icon={PlusIcon}
      />
      {/* Table Actions */}
      <TableActions />
      {/* table */}
      <div className="py-8">
        <DataTable data={banners} columns={bannerColumns} />
      </div>
    </div>
  );
}

//export default Banners;
