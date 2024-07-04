import Typography, { TypographyProps } from "@mui/material/Typography";
import { ProjectKey, projectDescription, projectKeys } from "@/constants";

export default function ProjectDescription({
  projectKey,
  ...props
}: { projectKey: ProjectKey } & TypographyProps) {
  return (
    <Typography variant="body2" {...props}>
      {projectDescription[projectKey]}
    </Typography>
  );
}
