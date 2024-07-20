import Image from "next/image";

import Box from "@mui/material/Box";
import { ProjectKey, SectionKey, TileInfo, sectionNames } from "@/constants";

export default function ProjectImageTile({
  projectKey,
  sectionKey,
  tileInfo,
  index,
  onClick,
  overlayId,
}: {
  projectKey: ProjectKey;
  sectionKey: SectionKey;
  tileInfo: TileInfo;
  index: number;
  onClick: () => void;
  overlayId: string;
}) {
  const thumbnailSource = `/images/${
    tileInfo.designatedThumbnail ? "worksThumbnails" : "works"
  }/${projectKey}/${sectionKey}/${index}.${
    tileInfo.thumbnailExt ?? tileInfo.workFileExt
  }`;

  return (
    <>
      <Image
        src={thumbnailSource}
        alt={`Section ${sectionNames[sectionKey]} thumbnail ${index + 1}`}
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
