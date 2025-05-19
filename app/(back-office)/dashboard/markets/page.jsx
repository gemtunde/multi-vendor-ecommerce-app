import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { PlusIcon } from "lucide-react";
import React from "react";

const Markets = () => {
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
        <h2>table</h2>
      </div>
    </div>
  );
};

export default Markets;
