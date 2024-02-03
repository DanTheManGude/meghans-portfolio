import type { Metadata } from "next";
import "./globals.css";

import localFont from "next/font/local";

const OpenSans = localFont({ src: "./OpenSans-Regular.ttf" });

export const metadata: Metadata = {
  title: "Gude Designs",
  description: "Graphic Design Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>{children}</body>
    </html>
  );
}
