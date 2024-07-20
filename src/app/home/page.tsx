import Image from "next/image";
import Link from "next/link";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

import {
  projectKeys,
  projectNames,
  projectOrder,
  projectPaths,
  projectThumbnailColors,
} from "@/constants";
import MainTitle from "@/components/MainTitle";

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
          <MainTitle />
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
                  flexGrow={1}
                >
                  <Box flexGrow={1}>
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
                          backgroundColor: projectThumbnailColors[projectKey],
                          aspectRatio: 2,
                        }}
                      >
                        <Image
                          priority={projectKey === projectKeys.NEURO_Q}
                          src={`/images/projectPosters/${projectKey}.jpg`}
                          alt={`Project ${projectNames[projectKey]} poster`}
                          width={0}
                          height={0}
                          sizes="100vw"
                          style={{ width: "100%", height: "auto", zIndex: 200 }}
                        />
                        <Box
                          id={overlayId}
                          sx={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            top: "0",
                            backgroundColor: "rgba(0,0,0,.5)",
                            zIndex: 2,
                          }}
                        />
                      </Box>
                    </Link>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      </Box>
    </Container>
  );
}
