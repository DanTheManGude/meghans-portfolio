import { CONTACT_KEY, HOME_KEY, pageKeys, pagePaths } from "@/constants";
import { MetadataRoute } from "next";

const BASE_URL = "https://dev.gudedesigns.com/home";

export default function sitemap(): MetadataRoute.Sitemap {
  return pageKeys.map((pageKey) => {
    let priority = 0.5;
    switch (pageKey) {
      case HOME_KEY:
        priority = 1;
        break;
      case CONTACT_KEY:
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
  });
}
