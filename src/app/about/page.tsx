import Image from "next/image";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

import { emailName, emailUrl, linkedinUrl, resumeInfos } from "@/constants";

const paragraphOne = `I'm a Graphic Designer based in New York, and have a passion for all things design. I offer a wide range of graphic design services including - product and package design, email design, social media ads, marketing material, video editing, Amazon content and more. When I'm not designing I love going to the beach, reading, and cooking new recipes.`;
const paragraphTwo = `Shoot me an email to discuss your project, let's create something together.`;

export default function Page() {
  return (
    <Container maxWidth="xl" sx={{ marginY: 4, paddingTop: 3 }}>
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
          <Stack width={"100%"} spacing={3}>
            <Box>
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
                <Typography variant="body2" color={"#5967af"}>
                  {emailName}
                </Typography>
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
            <Stack spacing={2}>
              {resumeInfos.map((resumeInfo) => (
                <>
                  <Grid
                    width={"100%"}
                    container
                    rowSpacing={3}
                    justifyContent="space-around"
                  >
                    <Grid
                      item
                      xs={12}
                      md={6}
                      style={{
                        paddingTop: 0,
                        display: "flex",
                        justifyContent: "left",
                      }}
                    >
                      <Stack>
                        <Typography fontWeight={600}>
                          {resumeInfo.title}
                        </Typography>
                        <Typography>{resumeInfo.company}</Typography>
                        <Typography>{resumeInfo.dates}</Typography>
                      </Stack>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      md={6}
                      style={{
                        paddingTop: 0,
                        display: "flex",
                      }}
                      sx={{ justifyContent: { xs: "left", md: "right" } }}
                    >
                      <Typography>{resumeInfo.location}</Typography>
                    </Grid>
                  </Grid>
                  <Divider
                    sx={{ borderColor: "black", borderBottomWidth: 2 }}
                  />
                </>
              ))}
            </Stack>
          </Stack>
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
