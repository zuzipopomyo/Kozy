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
        <main >{children}</main>
      </body>
    </html>
  );
}
