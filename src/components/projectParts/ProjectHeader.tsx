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
  const backgroundImageStyles: BoxProps["sx"] = {
    backgroundImage: `url(/images/headers/${projectKey}.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: projectHeaderInfos[projectKey].color,
        ...Object.entries(backgroundImageStyles).reduce(
          (acc, [key, value]) => ({
            ...acc,
            [key]: {
              md: value,
              xs: projectHeaderInfos[projectKey].mobileColorOnly ? "" : value,
            },
          }),
          {}
        ),
      }}
    >
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
            fontWeight={600}
            fontSize={{ md: 60, xs: 34 }}
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
