import { ProjectKey, projectNames } from "@/constants";
import Typography, { TypographyProps } from "@mui/material/Typography";

export default function ProjectTitle({
  projectKey,
  ...props
}: { projectKey: ProjectKey } & TypographyProps) {
  return (
    <Typography
      sx={{
        fontSize: { xs: 18, md: 31 },
      }}
      fontWeight={600}
      textAlign="left"
      {...props}
    >
      {projectNames[projectKey]}
    </Typography>
  );
}
