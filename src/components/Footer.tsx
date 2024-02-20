import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { accentColor } from "@/constants";

export default function Footer() {
  return (
    <Container
      sx={{ marginTop: "auto", width: "100vw", backgroundColor: accentColor }}
    >
      <Typography>Footer</Typography>
    </Container>
  );
}
