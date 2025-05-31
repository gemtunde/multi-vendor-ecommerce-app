"use client";
import React from "react";
import Heading from "@/components/backoffice/Heading";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const FormHeader = ({ title }) => {
  const router = useRouter();
  return (
    <div
      className="flex items-center justify-between py-6 px-12 my-8 bg-white text-slate-800
    dark:text-slate-50 dark:bg-slate-600 rounded-lg shadow-md"
    >
      <Heading title={title} />
      <Button onClick={() => router.back()}>
        <X />
      </Button>
    </div>
  );
};

export default FormHeader;
