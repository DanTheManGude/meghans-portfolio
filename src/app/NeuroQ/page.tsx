import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ProjectTitle from "@/components/ProjectTitle";

import * as Copy from "./copy";
import ProjectDescription from "@/components/ProjectDescription";

export default function Page() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginY: 4,
        paddingTop: 3,
      }}
    >
      <Stack>
        <ProjectTitle>{Copy.TITLE}</ProjectTitle>
        <ProjectDescription>{Copy.DESCRIPTION}</ProjectDescription>
      </Stack>
    </Container>
  );
}
