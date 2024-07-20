import { PropsWithChildren } from "react";

import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { projectNames, projectOrder, projectPaths } from "@/constants";

const titleText1 = "I'm Meghan Butera,";
const titleText2 = "designer and creative based in New York.";
const subTitleText = "Specializing in branding, packaging, and digital design.";

const Title = (props: PropsWithChildren) => (
  <Typography
    sx={{
      fontSize: { xs: 23, md: 45 },
    }}
    fontWeight={600}
    textAlign="center"
  >
    {props.children}
  </Typography>
);

const Subtitle = (props: PropsWithChildren) => (
  <Typography
    sx={{
      fontSize: { xs: 14, md: 22 },
      paddingTop: 1,
    }}
    textAlign="center"
  >
    {props.children}
  </Typography>
);

export default function Page() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginY: 4,
        paddingTop: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          paddingBottom: 10,
          textAlign: "center",
        }}
        display="flex"
        justifyContent="center"
      >
        <Stack alignItems="center">
          <Stack sx={{ width: "100%" }}>
            <Title>{titleText1}</Title>
            <Title>{titleText2}</Title>
            <Subtitle>{subTitleText}</Subtitle>
          </Stack>
          <Grid
            width={{ xs: "100%", md: "95%", mx: "auto" }}
            container
            spacing={5}
            alignItems="center"
            sx={{ paddingTop: "30px", paddingBottom: "15px" }}
            textAlign="center"
          >
            {projectOrder.map((projectKey) => {
              const overlayId = `${projectKey}-overlay`;

              return (
                <Grid
                  key={projectKey}
                  item
                  xs={12}
                  md={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Link href={`/${projectPaths[projectKey]}`}>
                    <Box
                      sx={{
                        width: "100%",
                        position: "relative",
                        [`& #${overlayId}`]: {
                          opacity: 0,
                        },
                        [`& #${overlayId}:hover`]: {
                          opacity: 1,
                        },
                        cursor: "pointer",
                      }}
                    >
                      <Image
                        priority={true}
                        src={`/images/projectThumbnails/${projectKey}.jpg`}
                        alt={`Project ${projectNames[projectKey]} thumbnail`}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: "100%", height: "auto" }}
                      />
                      <Box
                        id={overlayId}
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          top: "0",
                          backgroundColor: "rgba(0,0,0,.5)",
                        }}
                      />
                    </Box>
                  </Link>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
}
