import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./contexts/theme-context";
import { ClientLayout } from "@/components/client-layout";

export const metadata: Metadata = {
  title: "Portfolio GuilhermeP3"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="relative">
        <ThemeProvider>
          <ClientLayout>
            {children}
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
