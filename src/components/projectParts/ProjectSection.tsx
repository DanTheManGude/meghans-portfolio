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
      <Typography fontWeight={600} sx={{ fontSize: { xs: 18, md: 26 } }}>
        {sectionNames[sectionInfo.key]}
      </Typography>
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
