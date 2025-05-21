import React from "react";
import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { PlusIcon } from "lucide-react";

const Staff = () => {
  return (
    <div>
      <PageHeader
        headingText="Staff"
        href="/dashboard/staff/new"
        linkTitle="Add Staff"
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

export default Staff;
