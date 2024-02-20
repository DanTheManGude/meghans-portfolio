"use client";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { accentColor, pageKeys, pageNames, pagePaths } from "@/constants";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Container
      sx={{ marginTop: "auto", width: "100vw", backgroundColor: accentColor }}
    >
      <Container sx={{ display: { xs: "none", md: "flex" } }}>
        <Stack>
          <Stack direction="row">
            {pageKeys.map((pageKey) => (
              <Button
                key={pageKey}
                sx={{ my: 2, color: "white", display: "block" }}
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
      </Container>
    </Container>
  );
}
