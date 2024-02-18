import Typography from "@mui/material/Typography";

import { PageKey, CONTACT_KEY } from "@/constants";

export default function ProjectGrid({ pageKey }: { pageKey: PageKey }) {
  if (pageKey === CONTACT_KEY) return null;

  return <Typography>ProjectGrid</Typography>;
}
