"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // Wait until the component mounts on the client
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      variant="outline"
      className="bg-slate-50 dark:bg-slate-700 border-none w-full shadow-none"
    >
      {theme === "light" ? (
        <Moon className="w-8 h-8" />
      ) : (
        <Sun className="w-8 h-8" />
      )}
    </Button>
  );
}
