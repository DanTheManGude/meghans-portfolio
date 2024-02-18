import Typography from "@mui/material/Typography";

import { pageNames, PageKey, HOME_KEY } from "@/constants";

export default function SubTitle({ pageKey }: { pageKey: PageKey }) {
  if (pageKey === HOME_KEY) return null;

  return <Typography>{pageNames[pageKey]}</Typography>;
}
