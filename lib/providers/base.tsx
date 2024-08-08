"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import StoreProvider from "./StoreProvider";
import ReactQueryProvider from "./ReactQuery";

export function BaseProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <StoreProvider>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </StoreProvider>
    </ReactQueryProvider>
  );
}
