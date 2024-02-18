import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

import Typography from "@mui/material/Typography";

import {
  pageKeys,
  pageNames,
  pagePaths,
  pagePathToKey,
  PagePath,
  HOME_KEY,
} from "@/constants";

const isPagePath = (pagePath: string): pagePath is PagePath => {
  return Object.keys(pagePathToKey).indexOf(pagePath) !== -1;
};

export const getStaticPaths = (async () => {
  return {
    paths: pageKeys.map((pageKey) => ({
      params: {
        pagePath: pagePaths[pageKey],
      },
    })),
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const pagePath = context.params && context.params.pagePath;
  if (typeof pagePath !== "string" || !isPagePath(pagePath)) {
    return {
      redirect: {
        destination: pagePaths[HOME_KEY],
        permanent: false,
      },
    };
  }

  return { props: { pagePath } };
}) satisfies GetStaticProps<{
  pagePath: PagePath;
}>;

export default function Page({
  pagePath,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (typeof pagePath !== "string" || !isPagePath(pagePath)) {
    return;
  }

  const pageKey = pagePathToKey[pagePath];

  return <Typography>{pageNames[pageKey]}</Typography>;
}
