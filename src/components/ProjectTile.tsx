"use client";

import { useState } from "react";

import Image from "next/image";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";

import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import {
  WorksKey,
  worksBlurData,
  worksNames,
  worksSlideShow,
} from "@/constants";

export default function ProjectTile({ worksKey }: { worksKey: WorksKey }) {
  const overlayId = `${worksKey}-overlay`;

  const worksName = worksNames[worksKey];
  const { fileExtension, length: slideshowLength } = worksSlideShow[worksKey];
  const slideshowMax = slideshowLength - 1;

  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const blurData = worksBlurData[worksKey];

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

  const getImageUrl = (index: number): string =>
    `/images/projects/${worksKey}/${index}.${fileExtension}`;

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
          priority={true}
          src={`/images/thumbnails/${worksKey}.jpg`}
          alt={`Project ${worksName} thumbnail`}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          placeholder={blurData ? "blur" : "empty"}
          blurDataURL={blurData || ""}
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
            height: { xs: "80vh", md: "90vh" },
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
          <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
            <Image
              priority
              src={getImageUrl(slideshowIndex)}
              alt={`Project ${worksName} showcase example ${slideshowIndex}`}
              width={0}
              height={0}
              sizes="100vw"
              fill
              style={{ objectFit: "contain", zIndex: 9000 }}
            />
            {[...Array(slideshowLength)].map((_, index) => (
              <Image
                key={`preview-${worksName}-${index}`}
                src={getImageUrl(index)}
                alt={`preview ${worksName} ${index}`}
                width={0}
                height={0}
                sizes="100vw"
                fill
                style={{ objectFit: "contain", zIndex: 1, opacity: 0 }}
              />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Stack
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
            paddingX={1}
            sx={{ width: "100%" }}
          >
            <Button
              variant="outlined"
              color="secondary"
              onClick={onLeftMove}
              sx={{ flexGrow: "1", maxWidth: "33%" }}
            >
              <ArrowBackRoundedIcon />
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={onRightMove}
              sx={{ flexGrow: "1", maxWidth: "33%" }}
            >
              <ArrowForwardRoundedIcon />
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
}
