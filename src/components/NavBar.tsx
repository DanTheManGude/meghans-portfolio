"use client";

import * as React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import logo from "../app/icon.png";

const pagesKeys = ["allWorks", "print", "packaging", "digital", "web"] as const;

const pages: { [key in (typeof pagesKeys)[number]]: string } = {
  allWorks: "All Works",
  print: "Print",
  packaging: "Packaging",
  digital: "Digital",
  web: "Web",
};

function ResponsiveAppBar() {
  const router = useRouter();
  const pathname = usePathname();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar elevation={4}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            {`Portfolio`}
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="pages menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              marginThreshold={0}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              slotProps={{
                paper: {
                  sx: {
                    width: "100%",
                    maxWidth: "100%",
                    left: "0px",
                    right: "0px",
                  },
                },
              }}
            >
              {pagesKeys.map((pageKey) => (
                <MenuItem
                  key={pageKey}
                  onClick={() => {
                    handleCloseNavMenu();
                    router.push(`/${pageKey}`);
                  }}
                >
                  <Box sx={{ width: "100%", alignItems: "center" }}>
                    <Typography
                      textAlign="center"
                      color={"primary"}
                      fontSize={32}
                    >
                      {pages[pageKey]}
                    </Typography>
                  </Box>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            {`Portfolio`}
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pagesKeys.map((pageKey) => (
              <Button
                key={pageKey}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link href={`/${pageKey}`}>
                  <Typography
                    color={"primary.contrastText"}
                    sx={{
                      textDecoration:
                        pathname === `/${pageKey}` ? "underline" : "none",
                      textDecorationStyle: "dotted",
                    }}
                  >
                    {pages[pageKey]}
                  </Typography>
                </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={45} height={45} />
            </Link>
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
