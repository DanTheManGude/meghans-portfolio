import Typography from "@mui/material/Typography";

import { redirect } from "next/navigation";
import {
  pageNames,
  pagePathToKey,
  PagePath,
  HOME_KEY,
  pagePaths,
} from "@/constants";

const isPagePath = (pagePath: string): pagePath is PagePath => {
  return Object.keys(pagePathToKey).indexOf(pagePath) !== -1;
};

export default function Page({
  params: { pagePath },
}: {
  params: { pagePath: string };
}) {
  if (!isPagePath(pagePath)) {
    redirect(pagePaths[HOME_KEY]);
  }

  const pageKey = pagePathToKey[pagePath];

  return <Typography>{pageNames[pageKey]}</Typography>;
}
