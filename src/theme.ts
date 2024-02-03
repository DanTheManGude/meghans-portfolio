"use client";

import { Open_Sans, Raleway } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const OpenSansFont = Open_Sans({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const RalewayFont = Raleway({
  weight: ["600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const theme = createTheme({
  typography: {
    fontFamily: OpenSansFont.style.fontFamily,
    h5: { fontFamily: RalewayFont.style.fontFamily },
  },
});

export default theme;
