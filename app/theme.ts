"use client";

import { createTheme } from "@mui/material/styles";

import localFont from "next/font/local";

const OpenSans = localFont({ src: "./OpenSans-Regular.ttf" });

const theme = createTheme({
  typography: {
    fontFamily: OpenSans.style.fontFamily,
  },
});

export default theme;
