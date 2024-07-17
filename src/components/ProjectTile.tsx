import Image from "next/image";

import Box from "@mui/material/Box";
import {
  ProjectKey,
  SectionInfo,
  SectionKey,
  projectNames,
  sectionNames,
} from "@/constants";

export default function ProjectImageTile({
  projectKey,
  sectionInfo,
  index,
  onClick,
  overlayId,
}: {
  projectKey: ProjectKey;
  sectionInfo: SectionInfo;
  index: number;
  onClick: () => void;
  overlayId: string;
}) {
  return (
    <>
      <Image
        priority={true}
        //TODO change url to thumbnails
        src={`/images/works/${projectKey}/${sectionInfo.key}/${index}.jpg`}
        alt={`Project ${projectNames[projectKey]} section ${
          sectionNames[sectionInfo.key]
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
        onClick={onClick}
      />
    </>
  );
}
