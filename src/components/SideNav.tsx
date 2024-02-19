import { useState } from "react";

import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";

import { pageKeys, pageNames } from "@/constants";

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
      <Drawer anchor="right" open={isOpenDrawer} onClose={closeDrawer}>
        <Stack>
          {pageKeys.map((pageKey) => (
            <Typography key={pageKey}>{pageNames[pageKey]}</Typography>
          ))}
        </Stack>
      </Drawer>
    </>
  );
}
