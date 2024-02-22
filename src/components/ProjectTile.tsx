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
  const { fileExtension, length } = worksSlideShow[worksKey];

  const [slideshowIndex, setSlideshowIndex] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => {
    setIsDialogOpen(false);
    setSlideshowIndex(0);
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
        <DialogContent dividers sx={{ paddingX: "0" }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={0}
            sx={{ paddingX: "1%" }}
          >
            <Button
              sx={{
                width: "5%",
                height: "150px",
                paddingX: "0",
                minWidth: "13px",
              }}
              variant="outlined"
              color="secondary"
            >
              <ArrowBackIosRoundedIcon fontSize="medium" color="secondary" />
            </Button>
            <Box sx={{ width: "85%" }}>
              <Image
                src={`/images/projects/${worksKey}/${slideshowIndex}.${fileExtension}`}
                alt={`Project ${worksName} showcase example ${slideshowIndex}`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
              />
            </Box>

            <Button
              sx={{
                width: "5%",
                height: "150px",
                paddingX: "0",
                minWidth: "13px",
              }}
              variant="outlined"
              color="secondary"
            >
              <ArrowForwardIosRoundedIcon fontSize="medium" color="secondary" />
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
}
