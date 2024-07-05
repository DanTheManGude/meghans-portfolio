import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import {
  ProjectKey,
  SectionKey,
  TileInfo,
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
  openDialog: (targetTile: TileInfo) => void;
}) {
  return (
    <Stack width={"100%"} alignItems={"left"} paddingTop={4}>
      <Typography fontWeight={600} sx={{ fontSize: { xs: 18, md: 26 } }}>
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
