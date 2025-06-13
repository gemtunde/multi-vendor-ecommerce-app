import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/table-components/DataTable";
import { getData } from "@/lib/getData";
import { PlusIcon } from "lucide-react";
import React from "react";
import { customersColumns } from "./column";

const Customers = async () => {
  const customers = await getData("/customers");
  return (
    <div className="mt-8">
      {/* Table Actions */}
      <TableActions />
      {/* table */}
      <div className="py-8">
        <DataTable
          data={customers}
          columns={customersColumns}
          filterKeys={["name"]}
        />
      </div>
    </div>
  );
};

export default Customers;
