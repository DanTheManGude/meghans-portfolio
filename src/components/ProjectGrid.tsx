import Grid from "@mui/material/Grid";

import { WorksPageKey, WorksKey, worksMap, worksNames } from "@/constants";
import ProjectTile from "./ProjectTile";

export default function ProjectGrid({ pageKey }: { pageKey: WorksPageKey }) {
  return (
    <Grid
      container
      spacing={5}
      alignItems="center"
      sx={{ paddingTop: "30px", paddingBottom: "15px" }}
      textAlign="center"
    >
      {worksMap[pageKey].map((worksKey) => (
        <Grid
          key={worksKey}
          item
          xs={12}
          md={4}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ProjectTile worksKey={worksKey} />
        </Grid>
      ))}
    </Grid>
  );
}
