import React from "react";
import Heading from "@/components/backoffice/Heading";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const FormHeader = ({ title }) => {
  return (
    <div
      className="flex items-center justify-between py-6 px-12 my-8 bg-white text-slate-800
    dark:text-slate-50 dark:bg-slate-600 rounded-lg shadow-md"
    >
      <Heading title={title} />
      <Button>
        <X />
      </Button>
    </div>
  );
};

export default FormHeader;
