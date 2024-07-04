import Image from "next/image";

import Box from "@mui/material/Box";
import {
  ProjectKey,
  SectionKey,
  projectNames,
  sectionNames,
} from "@/constants";

export default function ProjectTile({
  projectKey,
  sectionKey,
  index,
  onClick,
}: {
  projectKey: ProjectKey;
  sectionKey: SectionKey;
  index: number;
  onClick: () => void;
}) {
  const overlayId = `${sectionKey}-${index}-overlay`;

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
      onClick={onClick}
    >
      <Image
        priority={true}
        src={`/images/thumbnails/${projectKey}/${sectionKey}/${index}.jpg`}
        alt={`Project ${projectNames[projectKey]} section ${
          sectionNames[sectionKey]
        } thumbnail ${index + 1}`}
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
      />
    </Box>
  );
}
