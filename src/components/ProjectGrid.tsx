import Typography from "@mui/material/Typography";

import { WorksPageKey, worksMap, worksNames } from "@/constants";

export default function ProjectGrid({ pageKey }: { pageKey: WorksPageKey }) {
  return worksMap[pageKey].map((worksKey) => (
    <Typography>{worksNames[worksKey]}</Typography>
  ));
}
