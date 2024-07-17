import Image from "next/image";

import Stack from "@mui/material/Stack";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  ProjectKey,
  projectDescription,
  projectHeaderBackgroundInfos,
} from "@/constants";

export default function ProjectHeader({
  projectKey,
}: {
  projectKey: ProjectKey;
}) {
  var parentBoxStyles: BoxProps["sx"] = { width: "100%" };

  if (projectHeaderBackgroundInfos[projectKey].image) {
    parentBoxStyles = {
      ...parentBoxStyles,
      backgroundImage: `url(/images/headers/${projectKey}.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
    };
  }
  if (projectHeaderBackgroundInfos[projectKey].color) {
    parentBoxStyles = {
      ...parentBoxStyles,
      backgroundColor: projectHeaderBackgroundInfos[projectKey].color,
    };
  }

  return (
    <Box sx={parentBoxStyles}>
      <Stack alignItems={"center"} spacing={2} paddingTop={5} paddingBottom={8}>
        <Box
          sx={{ display: { md: "flex", xs: "none" } }}
          justifyContent="center"
        >
          <Image
            src={`/images/projectLogos/${projectKey}.png`}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "64px" }}
          />
        </Box>
        <Box
          sx={{ display: { md: "none", xs: "flex" } }}
          justifyContent="center"
        >
          <Image
            src={`/images/projectLogos/${projectKey}.png`}
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "40px" }}
          />
        </Box>

        <Typography
          variant="body2"
          fontSize={18}
          color={"primary"}
          textAlign={"center"}
          sx={{ width: { md: "80%", xs: "85%" } }}
        >
          {projectDescription[projectKey]}
        </Typography>
      </Stack>
    </Box>
  );
}
