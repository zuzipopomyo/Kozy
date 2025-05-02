import type { Metadata } from "next";
import Navbar from "./components/navbar";
import "./globals.css";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Navbar/>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
