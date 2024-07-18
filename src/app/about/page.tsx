import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { accentColor, emailUrl, linkedinUrl } from "@/constants";

const paragraphOne = `I'm a Graphic Designer based in New York, and have a passion for all things design. I offer a wide range of graphic design services including - product and package design, email design, social media ads, marketing material, video editing, Amazon content and more. When I'm not designing I love going to the beach, reading, and cooking new recipes.`;
const paragraphTwo = `Shoot me an email to discuss your project, let's create something together.`;

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ marginY: 4 }}>
      <Box sx={{ width: { xs: "100%", md: "75%" } }}>
        <Divider
          sx={{
            marginTop: "15px",
            marginBottom: "15px",
            borderBottomWidth: 8,
            borderColor: accentColor,
          }}
        />
        <Typography variant="body2">{paragraphOne}</Typography>
        <br />
        <Typography variant="body2">{paragraphTwo}</Typography>
        <br />
        <Typography fontWeight={600}>{`Contact:`}</Typography>
        <Link
          href={emailUrl}
          sx={{
            textDecoration: "none",
          }}
        >
          <Typography
            variant="body2"
            color={"#5967af"}
          >{`Gudedesigns@gmail.com`}</Typography>
        </Link>
        <Link
          href={linkedinUrl}
          sx={{
            textDecoration: "none",
          }}
        >
          <Typography
            variant="body2"
            color={"#5967af"}
          >{`Linkedin`}</Typography>
        </Link>
      </Box>
    </Container>
  );
}
