import { PropsWithChildren } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export default function ProjectTitle(
  props: PropsWithChildren<TypographyProps>
) {
  return (
    <Typography
      sx={{
        fontSize: { xs: 23, md: 45 },
      }}
      fontWeight={600}
      textAlign="center"
    >
      {props.children}
    </Typography>
  );
}
