import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SalesLineChart } from "./SalesLIneChart";

const WeeklySalesChart = () => {
  return (
    <div className="p-8 rounded-lg shadow-xl bg-slate-50 text-slate-900 dark:text-slate-50 dark:bg-slate-700 w-full">
      <h2 className="text-xl font-semibold">Weekly Sales Chart</h2>
      <Tabs
        defaultValue="sales"
        className="w-full h-full p-4 bg-slate-50 text-slate-900 dark:bg-slate-700 dark:text-slate-50"
      >
        <TabsList className="grid w-full grid-cols-2 bg-slate-50 text-slate-900 dark:bg-slate-600 dark:text-slate-50">
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="orders">orders</TabsTrigger>
        </TabsList>
        <TabsContent value="sales">
          SALES
          <SalesLineChart />
        </TabsContent>
        <TabsContent value="orders">orders</TabsContent>
      </Tabs>
    </div>
  );
};

export default WeeklySalesChart;
