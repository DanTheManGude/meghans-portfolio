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
import SectionTitle from "./SectionTitle";

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
      <SectionTitle>{sectionNames[sectionKey]}</SectionTitle>
      <Typography variant="body2" sx={{ width: { md: "75%" } }}>
        {sectionDescriptions[sectionKey]}
      </Typography>

      <ProjectGrid
        projectKey={projectKey}
        sectionKey={sectionKey}
        openDialog={openDialog}
      />
    </Stack>
  );
}
