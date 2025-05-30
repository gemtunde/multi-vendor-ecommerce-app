import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/table-components/DataTable";
import { getData } from "@/lib/getData";
import { PlusIcon } from "lucide-react";
import React from "react";
import { marketColumns } from "./column";

export default async function Markets() {
  const markets = await getData("/markets");
  return (
    <div>
      <PageHeader
        headingText="Markets"
        href="/dashboard/markets/new"
        linkTitle="Add Markets"
        Icon={PlusIcon}
      />
      {/* Table Actions */}
      <TableActions />
      {/* table */}
      <div className="py-8">
        <DataTable data={markets} columns={marketColumns} />
      </div>
    </div>
  );
}

//export default Markets;
