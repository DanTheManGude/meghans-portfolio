import Container from "@mui/material/Container";

import ProjectGrid from "@/components/ProjectGrid";

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ marginY: 4 }}>
      Home
      <ProjectGrid />
    </Container>
  );
}
