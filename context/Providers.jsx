"use client";

import { store } from "@/redux/store";
import { ThemeProvider } from "next-themes";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Toaster position="top-center" reverseOrder={false} />
      <Provider store={store}>{children}</Provider>
    </ThemeProvider>
  );
}
