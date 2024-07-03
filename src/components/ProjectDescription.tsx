import { PropsWithChildren } from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";

export default function ProjectDescription({
  children,
  ...props
}: PropsWithChildren<TypographyProps>) {
  return (
    <Typography variant="body2" {...props}>
      {children}
    </Typography>
  );
}
