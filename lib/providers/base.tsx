"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import ReactQueryProvider from "./ReactQuery";

export function BaseProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>

      <NextThemesProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>

    </ReactQueryProvider>
  );
}
