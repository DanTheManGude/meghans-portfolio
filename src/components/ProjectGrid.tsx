import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import {
  ProjectKey,
  TileIdentifier,
  SectionInfo,
  sectionTypes,
  videoSources,
  defaultTileInfo,
} from "@/constants";
import ProjectImageTile from "./ProjectImageTile";
import VideoPlayer from "./VideoPlayer";

export default function ProjectGrid({
  projectKey,
  sectionInfo,
  openDialog,
}: {
  projectKey: ProjectKey;
  sectionInfo: SectionInfo;
  openDialog: (targetTile: TileIdentifier) => void;
}) {
  return (
    <Grid
      container
      spacing={5}
      alignItems="center"
      sx={{ paddingTop: "30px", paddingBottom: "15px" }}
      textAlign="center"
    >
      {Array.from({ length: sectionInfo.length }, (_value, index) => {
        const overlayId = `${sectionInfo.key}-${index}-overlay`;

        var RenderedTile = null;

        switch (sectionInfo.type) {
          case sectionTypes.VIDEO:
            RenderedTile = (
              <VideoPlayer
                videoSource={videoSources[sectionInfo.key]?.[index] ?? ""}
                posterSource={`/images/videoPosters/${sectionInfo.key}/${index}.jpg`}
              />
            );
            break;
          case sectionTypes.IMAGE:
          default:
            RenderedTile = (
              <ProjectImageTile
                projectKey={projectKey}
                sectionKey={sectionInfo.key}
                tileInfo={sectionInfo.tileInfos?.[index] ?? defaultTileInfo}
                index={index}
                overlayId={overlayId}
                onClick={() =>
                  openDialog({ sectionKey: sectionInfo.key, index })
                }
              />
            );
            break;
        }

        return (
          <Grid
            key={`${sectionInfo.key}-${index}`}
            item
            xs={12}
            md={sectionInfo.width}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: { xs: "440px" },
                position: "relative",
                [`& #${overlayId}`]: {
                  opacity: 0,
                },
                [`& #${overlayId}:hover`]: {
                  opacity: 1,
                },
                cursor: "pointer",
              }}
            >
              {RenderedTile}
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
