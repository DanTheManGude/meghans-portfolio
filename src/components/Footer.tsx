"use client";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { accentColor, pageKeys, pageNames, pagePaths } from "@/constants";

const TITLE = `Meghan Butera`;
const TAGLINE = `Graphic designer specializing in branding, packaging, and digital
design.`;
const EMAIL_BUTTON = `Say Hello`;

export default function Footer() {
  const pathname = usePathname();

  return (
    <Box
      sx={{ marginTop: "auto", width: "100vw", backgroundColor: accentColor }}
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
            <Typography sx={{ fontSize: 28 }} fontWeight={600}>
              {TITLE}
            </Typography>
            <Box sx={{ width: 400 }}>
              <Typography sx={{ fontSize: 19 }}>{TAGLINE}</Typography>
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
                      color="secondary"
                      fontWeight={600}
                      sx={{
                        textDecoration:
                          pathname === `/${pagePaths[pageKey]}`
                            ? "underline"
                            : "none",
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
            <Link href={"mailto:gudedesigns@gmail.com"}>
              <Button size="large" color="secondary" variant="contained">
                <Typography
                  fontSize={22}
                  color="primary"
                  sx={{ textTransform: "none" }}
                >
                  {EMAIL_BUTTON}
                </Typography>
              </Button>
            </Link>
            <Stack direction="row" sx={{ paddingBottom: "10px" }}>
              <Link href={"mailto:gudedesigns@gmail.com"}>
                <IconButton size="large" color="secondary">
                  <EmailOutlinedIcon fontSize="large" />
                </IconButton>
              </Link>
              <Link
                href={"https://www.linkedin.com/in/meghangude/"}
                rel="noopener noreferrer"
                target="_blank"
              >
                <IconButton size="large" color="secondary">
                  <LinkedInIcon fontSize="large" />
                </IconButton>
              </Link>
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
          paddingBottom: "20px",
        }}
      >
        <Typography fontSize={25} fontWeight={600} textAlign={"center"}>
          {TITLE}
        </Typography>
        <Typography fontSize={16} sx={{ maxWidth: "85%" }} textAlign={"center"}>
          {TAGLINE}
        </Typography>
        {pageKeys.map((pageKey) => (
          <Button key={pageKey} sx={{ color: "white", display: "block" }}>
            <Link href={`/${pagePaths[pageKey]}`}>
              <Typography
                fontSize={"16px"}
                color="secondary"
                fontWeight={600}
                sx={{
                  textDecoration:
                    pathname === `/${pagePaths[pageKey]}`
                      ? "underline"
                      : "none",
                  textTransform: "none",
                  fontSize: 20,
                }}
              >
                {pageNames[pageKey]}
              </Typography>
            </Link>
          </Button>
        ))}
        <Link href={"mailto:gudedesigns@gmail.com"}>
          <Button size="medium" color="secondary" variant="contained">
            <Typography
              fontSize={18}
              color="primary"
              sx={{ textTransform: "none" }}
            >
              {EMAIL_BUTTON}
            </Typography>
          </Button>
        </Link>
        <Stack direction="row" sx={{ paddingBottom: "10px" }}>
          <Link href={"mailto:gudedesigns@gmail.com"}>
            <IconButton size="large" color="secondary">
              <EmailOutlinedIcon fontSize="large" />
            </IconButton>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/meghangude/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconButton size="large" color="secondary">
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
}
