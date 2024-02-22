"use client";

import { useState } from "react";

import Image from "next/image";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { WorksKey, worksNames, worksSlideShow } from "@/constants";

export default function ProjectTile({ worksKey }: { worksKey: WorksKey }) {
  const overlayId = `${worksKey}-overlay`;

  const worksName = worksNames[worksKey];
  const { fileExtension, length: slideshowLength } = worksSlideShow[worksKey];
  const slideshowMax = slideshowLength - 1;

  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    setIsDialogOpen(false);
    setSlideshowIndex(0);
  };

  const onLeftMove = () => {
    setSlideshowIndex((currentIndex) => {
      if (currentIndex > 0) {
        return currentIndex - 1;
      }
      return slideshowMax;
    });
  };

  const onRightMove = () => {
    setSlideshowIndex((currentIndex) => {
      if (currentIndex === slideshowMax) {
        return 0;
      }
      return currentIndex + 1;
    });
  };

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
            width: "98%",
            maxWidth: "95vh",
            margin: 0,
          },
        }}
      >
        <DialogTitle sx={{ marginRight: "50px", padding: 2 }}>
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
            zIndex: 9000,
          }}
          color="secondary"
        >
          <CloseIcon fontSize="medium" />
        </IconButton>
        <DialogContent dividers sx={{ paddingX: "0", paddingY: "0" }}>
          <Box sx={{ width: "100%" }}>
            <Image
              src={`/images/projects/${worksKey}/${slideshowIndex}.${fileExtension}`}
              alt={`Project ${worksName} showcase example ${slideshowIndex}`}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "50%",
              height: "100%",
              top: "0",
              left: "0",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={onLeftMove}
          />
          <Box
            sx={{
              position: "absolute",
              width: "50%",
              height: "100%",
              top: "0",
              right: "0",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
            onClick={onRightMove}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
