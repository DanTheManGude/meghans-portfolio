import Grid from "@mui/material/Grid";

import { ProjectKey, SectionKey, projectSections, TileInfo } from "@/constants";
import ProjectTile from "./ProjectTile";

export default function ProjectGrid({
  projectKey,
  sectionKey,
  openDialog,
}: {
  projectKey: ProjectKey;
  sectionKey: SectionKey;
  openDialog: (targetTile: TileInfo) => void;
}) {
  return (
    <Grid
      container
      spacing={5}
      alignItems="center"
      sx={{ paddingTop: "30px", paddingBottom: "15px" }}
      textAlign="center"
    >
      {Array.from(
        {
          length:
            projectSections[projectKey].find(
              (sectionInfo) => sectionInfo.key === sectionKey
            )?.length || 0,
        },
        (_value, index) => (
          <Grid
            key={`${sectionKey}-${index}`}
            item
            xs={12}
            md={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <ProjectTile
              projectKey={projectKey}
              sectionKey={sectionKey}
              index={index}
              onClick={() => openDialog({ sectionKey, index })}
            />
          </Grid>
        )
      )}
    </Grid>
  );
}
