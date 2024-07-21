"use client";

import { useEffect, useRef } from "react";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import MultiLineTextFlow from "./MultiLineTextFlow";

const titleText1 = "I'm Meghan Butera,";
const titleText2 = "designer and creative based in New York.";
const subTitleText = "Specializing in branding, packaging, and digital design.";

export default function MainTitle() {
  return (
    <Stack sx={{ width: "100%", maxWidth: "100vw" }} alignItems={"center"}>
      <Typography
        sx={{
          fontSize: { xs: 23, md: 45 },
        }}
        fontWeight={600}
        textAlign="center"
      >
        {titleText1}
      </Typography>
      <MultiLineTextFlow
        sx={{
          fontSize: { xs: 23, md: 45 },
        }}
        maxWidth="100%"
        fontWeight={600}
        textAlign="center"
        whiteSpace={"initial"}
      >
        {titleText2}
      </MultiLineTextFlow>
      <Typography
        sx={{
          fontSize: { xs: 14, md: 22 },
          paddingTop: 1,
        }}
        textAlign="center"
      >
        {subTitleText}
      </Typography>
    </Stack>
  );
}
