"use client";

import { useState } from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { TileInfo, projectKeys, projectSections } from "@/constants";
import ProjectSection from "@/components/ProjectSection";
import ProjectDialog from "@/components/ProjectDialog";
import NextProjectButton from "@/components/NextProjectButton";
import ProjectHeaderBlockSection from "@/components/ProjectHeaderBlockSection";
import ProjectHeader from "@/components/ProjectHeader";

const projectKey = projectKeys.NEURO_Q;

export default function Page() {
  const [openingTargetTile, setOpeningTargetTile] = useState<TileInfo>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const closeDialog = () => setIsDialogOpen(false);

  const openDialog = (targetTile: TileInfo) => {
    setOpeningTargetTile(targetTile);
    setIsDialogOpen(true);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginY: 4,
        paddingTop: 3,
        paddingX: 5,
      }}
    >
      <Stack alignItems={"center"} width={"100%"}>
        <ProjectHeader projectKey={projectKey} />
        <ProjectHeaderBlockSection projectKey={projectKey} />
        {projectSections[projectKey].map((sectionInfo) => (
          <ProjectSection
            key={sectionInfo.key}
            projectKey={projectKey}
            sectionKey={sectionInfo.key}
            openDialog={openDialog}
          />
        ))}
        <NextProjectButton currentProjectKey={projectKey} />
      </Stack>
      <ProjectDialog
        projectKey={projectKey}
        isDialogOpen={isDialogOpen}
        closeDialog={closeDialog}
        openingTargetTile={openingTargetTile}
      />
    </Container>
  );
}
