import Image from "next/image";
import Link from "next/link";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import {
  emailUrl,
  linkedinUrl,
  pageKeys,
  pageNames,
  pagePaths,
} from "@/constants";

const TITLE = `Meghan Butera`;
const TAGLINE = `Graphic Designer specializing in branding, packaging, and digital
design.`;
const EMAIL_BUTTON_TEXT = `Say Hello`;
const emailIconImagePath = "/images/mail-icon.png";

const RenderedEmailAndLinkedinLinks = (
  <>
    <Link href={emailUrl}>
      <IconButton>
        <Image
          priority
          src={emailIconImagePath}
          alt={`email`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "26.25px" }}
        />
      </IconButton>
    </Link>
    <Link href={linkedinUrl} rel="noopener noreferrer" target="_blank">
      <IconButton size="large" color="primary">
        <LinkedInIcon fontSize="large" />
      </IconButton>
    </Link>
  </>
);

export default function Footer() {
  return (
    <Box
      sx={{
        marginTop: "auto",
        width: "100vw",
        backgroundColor: "secondary.main",
      }}
    >
      <Box
        sx={{
          paddingLeft: "30px",
          paddingTop: "20px",
          paddingBottom: "10px",
          paddingRight: "20px",
          display: { xs: "none", md: "flex" },
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack>
            <Typography
              sx={{ fontSize: 28 }}
              fontWeight={600}
              color={"primary"}
            >
              {TITLE}
            </Typography>
            <Box sx={{ width: 400 }}>
              <Typography sx={{ fontSize: 19 }} color={"primary"}>
                {TAGLINE}
              </Typography>
            </Box>

            <Stack direction="row">
              {pageKeys.map((pageKey) => (
                <Button
                  key={pageKey}
                  sx={{ marginTop: "20px", color: "white", display: "block" }}
                >
                  <Link href={`/${pagePaths[pageKey]}`}>
                    <Typography
                      fontSize={"18px"}
                      color="primary"
                      fontWeight={600}
                      sx={{
                        textTransform: "none",
                        fontSize: 20,
                      }}
                    >
                      {pageNames[pageKey]}
                    </Typography>
                  </Link>
                </Button>
              ))}
            </Stack>
          </Stack>
          <Stack
            paddingRight={"20px"}
            justifyContent="space-around"
            sx={{ height: "100%" }}
          >
            <Link href={emailUrl}>
              <Button size="large" color="primary" variant="contained">
                <Typography
                  fontSize={22}
                  color="secondary"
                  sx={{ textTransform: "none" }}
                >
                  {EMAIL_BUTTON_TEXT}
                </Typography>
              </Button>
            </Link>
            <Stack
              direction="row"
              sx={{ paddingBottom: "10px" }}
              alignItems={"center"}
            >
              {RenderedEmailAndLinkedinLinks}
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Stack
        spacing={1}
        alignItems="center"
        sx={{
          display: { xs: "flex", md: "none" },
          paddingTop: "20px",
          paddingBottom: "40px",
        }}
      >
        <Typography
          fontSize={25}
          fontWeight={600}
          textAlign={"center"}
          color={"primary"}
        >
          {TITLE}
        </Typography>
        <Typography
          fontSize={16}
          sx={{ maxWidth: "85%" }}
          textAlign={"center"}
          color={"primary"}
        >
          {TAGLINE}
        </Typography>
        <Stack direction={"row"}>
          {pageKeys.map((pageKey) => (
            <Button
              key={pageKey}
              sx={{ color: "primary.main", display: "block" }}
            >
              <Link href={`/${pagePaths[pageKey]}`}>
                <Typography
                  fontSize={"16px"}
                  color="primary"
                  fontWeight={600}
                  sx={{
                    textTransform: "none",
                    fontSize: 20,
                  }}
                >
                  {pageNames[pageKey]}
                </Typography>
              </Link>
            </Button>
          ))}
        </Stack>

        <Link href={emailUrl}>
          <Button size="medium" color="primary" variant="contained">
            <Typography
              fontSize={18}
              color="secondary"
              sx={{ textTransform: "none" }}
            >
              {EMAIL_BUTTON_TEXT}
            </Typography>
          </Button>
        </Link>
        <Stack
          direction="row"
          sx={{ paddingBottom: "10px" }}
          alignItems={"center"}
        >
          {RenderedEmailAndLinkedinLinks}
        </Stack>
      </Stack>
    </Box>
  );
}
