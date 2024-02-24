import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import theme from "../theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meghan's Portfolio",
  description: "Graphic Design Portfolio",
  openGraph: {
    type: "website",
    url: "https://dev.gudedesigns.com",
    title: "Meghan's Portfolio",
    description: "Graphic Design Portfolio",
    images: [
      {
        url: "/images/logo.png",
      },
    ],
  },
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
      </body>
    </html>
  );
}
