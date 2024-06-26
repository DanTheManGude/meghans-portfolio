"use client";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  accentColor,
  pageKeys,
  pageNames,
  pagePaths,
  logoPath,
} from "@/constants";

export default function Footer() {
  const pathname = usePathname();

  return (
    <Box
      sx={{ marginTop: "auto", width: "100vw", backgroundColor: accentColor }}
    >
      <Box sx={{ paddingLeft: "20px", display: { xs: "none", md: "flex" } }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack>
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
          <Box paddingRight={"20px"}>
            <Image src={logoPath} alt="logo" width={80} height={80} />
          </Box>
        </Stack>
      </Box>
      <Stack
        spacing={1}
        alignItems="center"
        sx={{ paddingTop: "20px", display: { xs: "flex", md: "none" } }}
      >
        <Box>
          <Image src={logoPath} alt="logo" width={60} height={60} />
        </Box>
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
