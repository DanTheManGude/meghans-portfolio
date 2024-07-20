"use client";

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { pageKeys, pageNames, pagePaths, logoPath } from "@/constants";
import SideNav from "./SideNav";

function ResponsiveAppBar() {
  const router = useRouter();

  return (
    <AppBar
      color="primary"
      elevation={0}
      sx={{ paddingTop: 2, paddingBottom: 1 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            <Image src={logoPath} alt="logo" width={80} height={80} />
          </Box>

          <Box
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            <Image src={logoPath} alt="logo" width={60} height={60} />
          </Box>

          <Stack
            direction={"row"}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            {pageKeys.map((pageKey) => (
              <Button
                key={pageKey}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link href={`/${pagePaths[pageKey]}`}>
                  <Typography
                    color="secondary"
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

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <SideNav />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default function ElevateAppBar() {
  return (
    <React.Fragment>
      <ResponsiveAppBar />
      <Toolbar />
    </React.Fragment>
  );
}
