"use client";

import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

import { projectKeys, projectSections } from "@/constants";
import ProjectTitle from "@/components/ProjectTitle";
import ProjectDescription from "@/components/ProjectDescription";
import ProjectSection from "@/components/ProjectSection";

const projectKey = projectKeys.NEURO_Q;

export default function Page() {
  const openDialog = (targetIndex: number) => {
    console.log(targetIndex);
  };
  return (
    <Container
      maxWidth="xl"
      sx={{
        marginY: 4,
        paddingTop: 3,
      }}
    >
      <Stack>
        <ProjectTitle projectKey={projectKey} />
        <ProjectDescription projectKey={projectKey} />
        {projectSections[projectKey].map((sectionInfo) => (
          <ProjectSection
            projectKey={projectKey}
            sectionKey={sectionInfo.key}
            openDialog={openDialog}
          />
        ))}
      </Stack>
    </Container>
  );
}
