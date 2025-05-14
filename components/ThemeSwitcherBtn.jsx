"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="outline"
      //size="icon"
      className="bg-slate-50 dark:bg-slate-700 border-none w-full shadow-none"
    >
      {theme === "light" ? <Moon className="w-8 h-8" /> : <Sun />}
    </Button>
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button
    //       variant="outline"
    //       size="icon"
    //       className="bg-slate-50 dark:bg-slate-700 border-none w-full"
    //     >
    //       <Sun className="h-[2rem] w-[2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
    //       <Moon className="absolute h-[2rem] w-[2rem]  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    //       <span className="sr-only">Toggle theme</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end">
    //     <DropdownMenuItem onClick={() => setTheme("light")}>
    //       Light
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("dark")}>
    //       Dark
    //     </DropdownMenuItem>
    //     <DropdownMenuItem onClick={() => setTheme("system")}>
    //       System
    //     </DropdownMenuItem>
    //   </DropdownMenuContent>
    // </DropdownMenu>
  );
}
