import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import { logoPath } from "@/constants";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import theme from "../theme";
import "./globals.css";

const seoKeywords = [
  "graphic design",
  "graphic designer",
  "freelance graphic design",
  "freelance graphic designer",
  "freelance graphic design work",
  "graphic design freelance",
  "graphic design portfolio",
  "graphic design project",
  "new york",
  "new york city",
  "long island",
  "product and package design",
  "email design",
  "social media ads",
  "marketing material",
  "amazon content",
];

export const metadata: Metadata = {
  title: "Meghan's Portfolio",
  description: "Graphic Design Portfolio",
  openGraph: {
    type: "website",
    url: "https://dev.gudedesigns.com",
    title: "Meghan's Portfolio",
    description: "Graphic Design Portfolio",
    images: [{ url: logoPath }],
  },
  keywords: seoKeywords,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <NavBar />
            {children}
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
        <Analytics />
      </body>
    </html>
  );
}
