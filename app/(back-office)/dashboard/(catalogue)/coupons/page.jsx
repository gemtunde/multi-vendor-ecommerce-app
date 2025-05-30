import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/table-components/DataTable";
import { getData } from "@/lib/getData";
import { PlusIcon } from "lucide-react";
import React from "react";
import { couponsColumns } from "./column";

export default async function Coupons() {
  const coupons = await getData("/coupons");

  return (
    <div>
      <PageHeader
        headingText="Coupons"
        href="/dashboard/coupons/new"
        linkTitle="Add Coupons"
        Icon={PlusIcon}
      />
      {/* Table Actions */}
      <TableActions />
      {/* table */}
      <div className="py-8">
        <DataTable data={coupons} columns={couponsColumns} />
      </div>
    </div>
  );
}

//export default Coupons;
