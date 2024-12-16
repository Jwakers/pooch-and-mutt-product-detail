import Header from "@/components/layout/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "Pooch & Mutt - Dev task",
  description: "A product detail template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          poppins.variable,
          "grid min-h-dvh grid-rows-[auto,1fr,auto] antialiased",
        )}
      >
        <Header />
        <main>{children}</main>
        <footer>{/* placeholder */}</footer>
      </body>
    </html>
  );
}
