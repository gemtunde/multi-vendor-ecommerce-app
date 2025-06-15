"use client";
import React, { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Minus, Plus } from "lucide-react";
export default function PriceFilter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger className="flex items-center justify-between cursor-pointer p-4 mb-2 w-full">
        <span className="text-lg font-semibold">Price</span>
        {isOpen ? (
          <Minus className="w-4 h-4 text-gray-500" />
        ) : (
          <Plus className="w-4 h-4 text-gray-500" />
        )}
      </CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects. No attribution
        required.
      </CollapsibleContent>
    </Collapsible>
  );
}
