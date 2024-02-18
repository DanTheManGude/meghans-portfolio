"use client";

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Stack from "@mui/material/Stack";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { pageKeys, pageNames, pagePaths } from "@/constants";

const title = "Meghan Butera.";

function ResponsiveAppBar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <AppBar color="transparent" elevation={1}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            fontWeight={600}
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            {title}
          </Typography>

          <Typography
            variant="h4"
            fontWeight={600}
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            {title}
          </Typography>
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
                    color={"common.black"}
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

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="pages menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
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
