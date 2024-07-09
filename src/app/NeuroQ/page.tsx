"use client";

import { useState } from "react";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { TileInfo, projectKeys, projectSections } from "@/constants";
import ProjectDescription from "@/components/ProjectDescription";
import ProjectSection from "@/components/ProjectSection";
import ProjectDialog from "@/components/ProjectDialog";
import NextProjectButton from "@/components/NextProjectButton";
import ProjectHeaderBlock from "@/components/ProjectHeaderBlock";

const projectKey = projectKeys.NEURO_Q;

const headerBlock1Title = "Scope:";
const headerBlock1Body =
  "Enhance customer journey, drive sales and create successfull marketing campaigns";
const headerBlock2Title = "Skills Used:";
const headerBlock2Body =
  "Branding • Layout • UX Design • Digital Design • Print and Packaging Design • Video Editing";
const headerBlock3Title = "Tools Used:";
const headerBlock3Body =
  "Photoshop • Illustrator • Figma • Sketch • Premiere Pro • Dimensions";

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
      maxWidth="xl"
      sx={{
        marginY: 4,
        paddingTop: 3,
        marginX: 2,
      }}
    >
      <Stack alignItems={"center"} width={"100%"}>
        <Stack
          direction={"row"}
          width={"100%"}
          justifyContent="space-around"
          alignItems="flex-start"
        >
          <ProjectHeaderBlock
            titleText={headerBlock1Title}
            bodyText={headerBlock1Body}
          />
          <ProjectHeaderBlock
            titleText={headerBlock2Title}
            bodyText={headerBlock2Body}
          />
          <ProjectHeaderBlock
            titleText={headerBlock2Title}
            bodyText={headerBlock3Body}
          />
        </Stack>
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
