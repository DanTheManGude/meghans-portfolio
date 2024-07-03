import { PropsWithChildren } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export default function ProjectTitle({
  children,
  ...props
}: PropsWithChildren<TypographyProps>) {
  return (
    <Typography
      sx={{
        fontSize: { xs: 18, md: 31 },
      }}
      fontWeight={600}
      textAlign="left"
      {...props}
    >
      {children}
    </Typography>
  );
}
