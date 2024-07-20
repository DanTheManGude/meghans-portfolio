import Image from "next/image";

import Stack from "@mui/material/Stack";
import Box, { BoxProps } from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  ProjectKey,
  projectDescription,
  projectHeaderInfos,
  projectNames,
} from "@/constants";

export default function ProjectHeader({
  projectKey,
}: {
  projectKey: ProjectKey;
}) {
  var parentBoxStyles: BoxProps["sx"] = { width: "100%" };

  if (projectHeaderInfos[projectKey].backgroundImage) {
    parentBoxStyles = {
      ...parentBoxStyles,
      backgroundColor: "black",
      backgroundImage: `url(/images/headers/${projectKey}.jpg)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      width: "100%",
    };
  }
  if (projectHeaderInfos[projectKey].color) {
    parentBoxStyles = {
      ...parentBoxStyles,
      backgroundColor: projectHeaderInfos[projectKey].color,
    };
  }

  return (
    <Box sx={parentBoxStyles}>
      <Stack alignItems={"center"} spacing={2} paddingTop={5} paddingBottom={8}>
        {projectHeaderInfos[projectKey].logoImage ? (
          <>
            <Box
              sx={{ display: { md: "flex", xs: "none" } }}
              justifyContent="center"
            >
              <Image
                src={`/images/projectLogos/${projectKey}.png`}
                priority
                alt={`${projectNames[projectKey]} logo`}
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
                priority
                alt={`${projectNames[projectKey]} logo`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "auto", height: "40px" }}
              />
            </Box>
          </>
        ) : (
          <Typography
            variant="body2"
            fontSize={{ md: 50, xs: 28 }}
            color={"primary"}
            textAlign={"center"}
          >
            {projectNames[projectKey]}
          </Typography>
        )}

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
