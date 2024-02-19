"use client";

import { Open_Sans, Raleway } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const OpenSansFont = Open_Sans({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const RalewayFont = Raleway({
  weight: ["400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: RalewayFont.style.fontFamily,
    body2: {
      fontFamily: OpenSansFont.style.fontFamily,
    },
  },
  palette: {
    primary: { main: "#ffffff" },
    secondary: { main: "#000000" },
  },
});

export default theme;
