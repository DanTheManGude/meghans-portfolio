"use client";

import { useState } from "react";

import Image from "next/image";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import { WorksKey, worksNames } from "@/constants";

export default function ProjectTile({ worksKey }: { worksKey: WorksKey }) {
  const worksName = worksNames[worksKey];
  const overlayId = `${worksKey}-overlay`;

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          maxWidth: "400px",
          position: "relative",
          [`& #${overlayId}`]: {
            opacity: 0,
          },
          [`& #${overlayId}:hover`]: {
            opacity: 1,
          },
          cursor: "pointer",
        }}
        onClick={openDialog}
      >
        <Image
          src={`/images/thumbnails/${worksKey}.jpg`}
          alt={`Project ${worksName} thumbnail`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
        <Box
          id={overlayId}
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            backgroundColor: "rgba(0,0,0,.5)",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              position: "absolute",
              width: "100%",
              top: "50%",
            }}
            color="primary"
          >
            {worksName}
          </Typography>
        </Box>
      </Box>
      <Dialog
        onClose={closeDialog}
        open={isDialogOpen}
        sx={{
          "& .MuiDialog-paper": {
            width: "95%",
            maxWidth: "90vh",
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="dialog-title">
          {worksName}
        </DialogTitle>
        <IconButton
          size="large"
          aria-label="close"
          onClick={closeDialog}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
          }}
          color="secondary"
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
        <DialogContent dividers>
          <Box>
            <Image
              src={`/images/projects/${worksKey}/0.jpg`}
              alt={`Project ${worksName}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
