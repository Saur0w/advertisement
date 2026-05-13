import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Veloura",
  description: "~@sauroww(X) @saur0w(GitHub)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
