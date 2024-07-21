import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import {
  ProjectKey,
  projectHeaderBlockSectionBodyTexts,
  projectHeaderBlockSectionOrder,
  projectHeaderBlockSectionTitles,
} from "@/constants";
import MultiLineTextFlow from "../MultiLineTextFlow";

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
          <Stack
            width={"100%"}
            alignItems={"center"}
            sx={{ paddingX: { md: 3.5, xs: 0 }, paddingY: { md: 0, xs: 2 } }}
          >
            <Typography
              fontWeight={600}
              sx={{ fontSize: { xs: 18, md: 22 } }}
              textAlign={"center"}
            >
              {projectHeaderBlockSectionTitles[projectHeaderBlockSectionKey]}
            </Typography>
            <MultiLineTextFlow
              sx={{ fontSize: { xs: 14, md: 17 } }}
              textAlign={"center"}
            >
              {
                projectHeaderBlockSectionBodyTexts[projectKey][
                  projectHeaderBlockSectionKey
                ]
              }
            </MultiLineTextFlow>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
}
