import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {
  ProjectKey,
  SectionKey,
  sectionDescriptions,
  sectionNames,
} from "@/constants";

import ProjectGrid from "./ProjectGrid";

export default function ProjectSection({
  projectKey,
  sectionKey,
  openDialog,
}: {
  projectKey: ProjectKey;
  sectionKey: SectionKey;
  openDialog: (index: number) => void;
}) {
  return (
    <Stack>
      <Typography sx={{ fontSize: { xs: 18, md: 31 } }}>
        {sectionNames[sectionKey]}
      </Typography>
      <Typography variant="body2">{sectionDescriptions[sectionKey]}</Typography>

      <ProjectGrid
        projectKey={projectKey}
        sectionKey={sectionKey}
        openDialog={openDialog}
      />
    </Stack>
  );
}