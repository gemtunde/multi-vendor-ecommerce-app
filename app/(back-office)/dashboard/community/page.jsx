import PageHeader from "@/components/backoffice/PageHeader";
import TableActions from "@/components/backoffice/TableActions";
import DataTable from "@/components/table-components/DataTable";
import { getData } from "@/lib/getData";
import { PlusIcon } from "lucide-react";
import React from "react";
import { trainingColumns } from "./column";

export default async function Community() {
  const communityTraining = await getData("/trainings");
  return (
    <div>
      <PageHeader
        headingText="Community"
        href="/dashboard/community/new"
        linkTitle="Add Community Trainings"
        Icon={PlusIcon}
      />
      {/* Table Actions */}
      <TableActions />
      {/* table */}
      <div className="py-8">
        <h2>table</h2>
        <DataTable data={communityTraining} columns={trainingColumns} />
      </div>
    </div>
  );
}

//export default Community;
