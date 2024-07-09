import Grid from "@mui/material/Grid";

import {
  ProjectKey,
  projectHeaderBlockSectionBodyTexts,
  projectHeaderBlockSectionOrder,
  projectHeaderBlockSectionTitles,
} from "@/constants";
import ProjectHeaderBlock from "./ProjectHeaderBlock";

export default function ProjectHeaderBlockSection({
  projectKey,
}: {
  projectKey: ProjectKey;
}) {
  return (
    <Grid
      width={"100%"}
      container
      spacing={0}
      sx={{ paddingTop: "30px", paddingBottom: "15px" }}
      textAlign="center"
      alignItems="flex-start"
    >
      {projectHeaderBlockSectionOrder.map((projectHeaderBlockSectionKey) => (
        <Grid
          key={projectHeaderBlockSectionKey}
          item
          xs={12}
          md={4}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ProjectHeaderBlock
            titleText={
              projectHeaderBlockSectionTitles[projectHeaderBlockSectionKey]
            }
            bodyText={
              projectHeaderBlockSectionBodyTexts[projectKey][
                projectHeaderBlockSectionKey
              ]
            }
          />
        </Grid>
      ))}
    </Grid>
  );
}
