import { useState, useEffect } from "react";

import Image from "next/image";

import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import {
  ProjectKey,
  TileInfo,
  projectSections,
  sectionNames,
} from "@/constants";

export default function ProjectSection({
  projectKey,
  closeDialog,
  isDialogOpen,
  openingTargetTile,
}: {
  projectKey: ProjectKey;
  closeDialog: () => void;
  isDialogOpen: boolean;
  openingTargetTile: TileInfo;
}) {
  const [targetTile, setTargetTile] = useState<TileInfo>(openingTargetTile);

  useEffect(() => {
    setTargetTile(openingTargetTile);
  }, [openingTargetTile]);

  const getImageUrl = (tile: TileInfo) =>
    `/images/works/${projectKey}/${tile.sectionKey}/${tile.index}.jpg`;

  const onLeftMove = () =>
    setTargetTile((existingTile) => {
      if (targetTile.index > 0) {
        return {
          ...existingTile,
          index: existingTile.index - 1,
        };
      }

      const currentSectionIndex = projectSections[projectKey].findIndex(
        (sectionInfo) => sectionInfo.key === existingTile.sectionKey
      );
      const newSectionIndex =
        (currentSectionIndex > 0
          ? currentSectionIndex
          : projectSections[projectKey].length) - 1;

      return {
        sectionKey: projectSections[projectKey][newSectionIndex].key,
        index: projectSections[projectKey][newSectionIndex].length - 1,
      };
    });

  const onRightMove = () =>
    setTargetTile((existingTile) => {
      const currentSectionIndex = projectSections[projectKey].findIndex(
        (sectionInfo) => sectionInfo.key === existingTile.sectionKey
      );

      if (
        existingTile.index + 1 <
        projectSections[projectKey][currentSectionIndex].length
      ) {
        return {
          ...existingTile,
          index: existingTile.index + 1,
        };
      }

      if (currentSectionIndex + 1 < projectSections[projectKey].length) {
        return {
          sectionKey: projectSections[projectKey][currentSectionIndex + 1].key,
          index: 0,
        };
      }
      return { sectionKey: projectSections[projectKey][0].key, index: 0 };
    });

  return (
    <Dialog
      onClose={closeDialog}
      open={isDialogOpen}
      sx={{
        "& .MuiDialog-paper": {
          width: "98%",
          height: { xs: "80vh", md: "90vh" },
          maxHeight: "130vw",
          maxWidth: "95vh",
          margin: 0,
        },
      }}
    >
      <DialogTitle sx={{ marginRight: "50px", padding: 2 }}>
        {sectionNames[targetTile.sectionKey]}
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
            src={getImageUrl(targetTile)}
            alt={`${sectionNames[targetTile.sectionKey]} example ${
              targetTile.index + 1
            }`}
            width={0}
            height={0}
            sizes="100vw"
            fill
            style={{ objectFit: "contain", zIndex: 9000 }}
          />
          {[
            ...projectSections[projectKey].map((sectionInfo) =>
              [...Array(sectionInfo.length)].map((_, index) => (
                <Image
                  key={`preview-${sectionInfo.key}-${index}`}
                  src={getImageUrl({ sectionKey: sectionInfo.key, index })}
                  alt={`preview ${sectionInfo.key} ${index}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  fill
                  style={{ objectFit: "contain", zIndex: 1, opacity: 0 }}
                />
              ))
            ),
          ]}
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
  );
}
