import Image from "next/image";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { WorksPageKey, WorksKey, worksMap, worksNames } from "@/constants";

function ProjectTile({ worksKey }: { worksKey: WorksKey }) {
  const worksName = worksNames[worksKey];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "400px",
      }}
    >
      <Image
        src={`/projects/thumbnails/${worksKey}.jpg`}
        alt={`Project ${worksName} thumbnail`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
    </Box>
  );

  //<Typography variant="body2">{worksName}</Typography>;
}

export default function ProjectGrid({ pageKey }: { pageKey: WorksPageKey }) {
  return (
    <Grid
      container
      spacing={5}
      alignItems="center"
      sx={{ paddingTop: "30px" }}
      textAlign="center"
    >
      {worksMap[pageKey].map((worksKey) => (
        <Grid
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
