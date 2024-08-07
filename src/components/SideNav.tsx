import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import {
  pageKeys,
  pageNames,
  pagePaths,
  accentColor,
  logoPath,
} from "@/constants";

export default function SideNav() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const openDrawer = () => setIsOpenDrawer(true);
  const closeDrawer = () => setIsOpenDrawer(false);

  return (
    <>
      <IconButton
        size="large"
        aria-label="pages menu"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        color="inherit"
        onClick={openDrawer}
      >
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer
        anchor="right"
        open={isOpenDrawer}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            backgroundColor: accentColor,
            width: "70vw",
          },
        }}
      >
        <IconButton
          size="medium"
          aria-label="close"
          sx={{
            position: "absolute",
            right: "10px",
            top: "15px",
            color: "black",
          }}
          onClick={closeDrawer}
        >
          <CloseRoundedIcon fontSize="large" />
        </IconButton>
        <Stack paddingLeft="35px" paddingTop={"65px"} spacing={2.5}>
          {pageKeys.map((pageKey) => (
            <Link key={pageKey} href={`/${pagePaths[pageKey]}`}>
              <Typography
                color="secondary"
                fontSize="28px"
                fontWeight={600}
                onClick={closeDrawer}
              >
                {pageNames[pageKey]}
              </Typography>
            </Link>
          ))}
        </Stack>
        <Box
          sx={{
            position: "absolute",
            right: "20px",
            bottom: "25px",
          }}
        >
          <Image src={logoPath} alt="logo" width={80} height={80} />
        </Box>
      </Drawer>
    </>
  );
}
