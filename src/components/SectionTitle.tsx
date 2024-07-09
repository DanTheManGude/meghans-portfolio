import { PropsWithChildren } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export default function SectionTitle({
  children,
  ...props
}: PropsWithChildren<TypographyProps>) {
  return (
    <Typography
      fontWeight={600}
      sx={{ fontSize: { xs: 18, md: 26 } }}
      {...props}
    >
      {children}
    </Typography>
  );
}
