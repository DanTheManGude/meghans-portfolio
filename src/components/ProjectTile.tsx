"use client";

import Image from "next/image";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { WorksKey, worksNames } from "@/constants";

export default function ProjectTile({ worksKey }: { worksKey: WorksKey }) {
  const worksName = worksNames[worksKey];
  const overlayId = `${worksKey}-overlay`;

  const handleTileClick = () => {
    alert(`Open ${worksName}`);
  };

  return (
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
      onClick={handleTileClick}
    >
      <Image
        src={`/projects/thumbnails/${worksKey}.jpg`}
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
  );
}
