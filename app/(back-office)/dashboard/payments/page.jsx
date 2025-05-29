import React from "react";
import { DataTable } from "./data-table";
import { columns } from "./column";
import { getData } from "@/lib/getData";

// async function getData() {
//   return [
//     {
//       id: "123434",
//       amount: 199,
//       status: "Pending",
//       email: "mx@gmail.com",
//     },
//   ];
// }
export default async function Payment() {
  const data = await getData("/categories");
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
