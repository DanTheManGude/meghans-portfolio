import Image from "next/image";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import { accentColor, emailUrl, linkedinUrl } from "@/constants";

const paragraphOne = `I'm a Graphic Designer based in New York, and have a passion for all things design. I offer a wide range of graphic design services including - product and package design, email design, social media ads, marketing material, video editing, Amazon content and more. When I'm not designing I love going to the beach, reading, and cooking new recipes.`;
const paragraphTwo = `Shoot me an email to discuss your project, let's create something together.`;

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ marginY: 4 }}>
      <Grid
        width={"100%"}
        container
        rowSpacing={5}
        justifyContent="space-around"
      >
        <Grid
          item
          xs={12}
          md={6}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ width: "100%" }}>
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
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ width: "100%" }}>
            <Image
              src={`/images/portfolio-pic.jpg`}
              alt={`Photo of myself`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
