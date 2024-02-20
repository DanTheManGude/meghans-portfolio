"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import logo from "@/app/icon.png";
import { accentColor, pageKeys, pageNames, pagePaths } from "@/constants";

export default function Footer() {
  const pathname = usePathname();

  return (
    <Box
      sx={{ marginTop: "auto", width: "100vw", backgroundColor: accentColor }}
    >
      <Box sx={{ paddingLeft: "20px", display: { xs: "none", md: "flex" } }}>
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
        <Box
          sx={{
            position: "absolute",
            right: "20px",
            bottom: "15px",
          }}
        >
          <Image src={logo} alt="logo" width={80} height={80} />
        </Box>
      </Box>
      <Stack
        spacing={1}
        alignItems="center"
        sx={{ paddingTop: "20px", display: { xs: "flex", md: "none" } }}
      >
        <Box>
          <Image src={logo} alt="logo" width={60} height={60} />
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
