import { PropsWithChildren } from "react";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import ProjectGrid from "@/components/ProjectGrid";

const titleText = "I'm Meghan Butera, designer and creative based in New York.";
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
        <Stack
          sx={{ width: { xs: "100%", md: 700, mx: "auto" } }}
          alignItems="center"
        >
          <Title>{titleText}</Title>
          <Subtitle>{subTitleText}</Subtitle>
        </Stack>
      </Box>

      <ProjectGrid />
    </Container>
  );
}
