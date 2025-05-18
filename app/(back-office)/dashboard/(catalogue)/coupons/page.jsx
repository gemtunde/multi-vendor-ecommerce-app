import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import { PlusIcon } from "lucide-react";
import React from "react";

const Coupons = () => {
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
        <h2>table</h2>
      </div>
    </div>
  );
};

export default Coupons;
