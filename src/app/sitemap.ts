import {
  ABOUT_KEY,
  HOME_KEY,
  pageKeys,
  pagePaths,
  projectOrder,
  projectPaths,
} from "@/constants";
import { MetadataRoute } from "next";

const BASE_URL = "https://meghanbuteradesigns.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return pageKeys
    .map((pageKey) => {
      let priority = 0.4;
      switch (pageKey) {
        case HOME_KEY:
          priority = 1;
          break;
        case ABOUT_KEY:
          priority = 0.8;
          break;
        default:
          break;
      }
      return {
        url: `${BASE_URL}/${pagePaths[pageKey]}`,
        lastModified: new Date(),
        priority,
      };
    })
    .concat(
      projectOrder.map((projectKey) => {
        return {
          url: `${BASE_URL}/${projectPaths[projectKey]}`,
          lastModified: new Date(),
          priority: 0.6,
        };
      })
    );
}
