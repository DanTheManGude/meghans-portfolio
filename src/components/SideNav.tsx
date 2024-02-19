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

import logo from "@/app/icon.png";
import { pageKeys, pageNames, pagePaths, accentColor } from "@/constants";

export default function SideNav({ pathname }: { pathname: string }) {
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
      <Drawer anchor="right" open={isOpenDrawer} onClose={closeDrawer}>
        <Box sx={{ width: "50vw", height: "100%", bgcolor: accentColor }}>
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
              <Link href={`/${pagePaths[pageKey]}`}>
                <Typography
                  color="secondary"
                  key={pageKey}
                  fontSize="28px"
                  fontWeight={600}
                  sx={{
                    textDecoration:
                      pathname === `/${pagePaths[pageKey]}`
                        ? "underline"
                        : "none",
                  }}
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
            <Image src={logo} alt="logo" width={100} height={100} />
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
