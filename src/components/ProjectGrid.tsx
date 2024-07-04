import Grid from "@mui/material/Grid";

import { ProjectKey, SectionKey, projectSections } from "@/constants";
import ProjectTile from "./ProjectTile";

export default function ProjectGrid({
  projectKey,
  sectionKey,
  openDialog,
}: {
  projectKey: ProjectKey;
  sectionKey: SectionKey;
  openDialog: (index: number) => void;
}) {
  const getHandleOpenDialog = (relativeIndex: number) => () => {
    let targetIndex = 0;
    for (let sectionInfo of projectSections[projectKey]) {
      if (sectionInfo.key === sectionKey) {
        targetIndex += relativeIndex;
        break;
      } else {
        targetIndex += sectionInfo.length;
      }
    }

    openDialog(targetIndex);
  };

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
              onClick={getHandleOpenDialog(index)}
            />
          </Grid>
        )
      )}
      ( )
    </Grid>
  );
}
