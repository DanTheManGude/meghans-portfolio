import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import ProjectTitle from "@/components/ProjectTitle";

const TITLE = "NeuroQ";

export default function Page() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginY: 4,
        paddingTop: 3,
      }}
    >
      <ProjectTitle>{TITLE}</ProjectTitle>
    </Container>
  );
}
