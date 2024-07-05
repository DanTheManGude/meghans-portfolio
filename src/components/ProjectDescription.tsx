import Typography, { TypographyProps } from "@mui/material/Typography";
import { ProjectKey, projectDescription, projectKeys } from "@/constants";

export default function ProjectDescription({
  projectKey,
  sx = {},
  ...props
}: { projectKey: ProjectKey } & TypographyProps) {
  return (
    <Typography
      variant="body2"
      sx={{ ...sx, width: { md: "75%" } }}
      alignSelf={"flex-start"}
      {...props}
    >
      {projectDescription[projectKey]}
    </Typography>
  );
}
