import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import {
  ProjectKey,
  SectionInfo,
  SectionKey,
  TileIdentifier,
  sectionDescriptions,
  sectionNames,
} from "@/constants";

import ProjectGrid from "./ProjectGrid";
import SectionTitle from "./SectionTitle";

export default function ProjectSection({
  projectKey,
  sectionInfo,
  openDialog,
}: {
  projectKey: ProjectKey;
  sectionInfo: SectionInfo;
  openDialog: (targetTile: TileIdentifier) => void;
}) {
  return (
    <Stack width={"100%"} alignItems={"left"} paddingTop={4}>
      <SectionTitle>{sectionNames[sectionInfo.key]}</SectionTitle>
      <Typography variant="body2" sx={{ width: { md: "75%" } }}>
        {sectionDescriptions[sectionInfo.key]}
      </Typography>
      <ProjectGrid
        projectKey={projectKey}
        sectionInfo={sectionInfo}
        openDialog={openDialog}
      />
    </Stack>
  );
}
