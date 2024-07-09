import Image from "next/image";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { ProjectKey, projectDescription } from "@/constants";

export default function ProjectHeader({
  projectKey,
}: {
  projectKey: ProjectKey;
}) {
  return (
    <Box
      sx={{
        backgroundImage: `url(/images/headers/${projectKey}.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
      }}
    >
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
            style={{ width: "200px", height: "auto" }}
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
            style={{ width: "130px", height: "auto" }}
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
