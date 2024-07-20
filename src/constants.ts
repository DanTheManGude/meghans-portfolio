import { ValueOf } from "next/dist/shared/lib/constants";

import * as Copy from "./copy";

export const HOME_KEY = "HOME";
export const ABOUT_KEY = "ABOUT";

export type PageKey = typeof HOME_KEY | typeof ABOUT_KEY;

export const pageKeys: PageKey[] = [HOME_KEY, ABOUT_KEY];

export const pageNames: { [key in PageKey]: string } = {
  [HOME_KEY]: "work",
  [ABOUT_KEY]: "about",
};

export const pagePaths: { [key in PageKey]: string } = {
  [HOME_KEY]: "home",
  [ABOUT_KEY]: "about",
} as const;

export const projectKeys = {
  NEURO_Q: "NEURO_Q",
  LIFE_SEASONS: "LIFE_SEASONS",
  SUPPLEMENTS: "SUPPLEMENTS",
  EMAIL: "EMAIL",
} as const;

export const projectNames: {
  [key in ProjectKey]: string;
} = {
  [projectKeys.NEURO_Q]: "NeuroQ",
  [projectKeys.LIFE_SEASONS]: "LifeSeasons",
  [projectKeys.SUPPLEMENTS]: "Supplements",
  [projectKeys.EMAIL]: "Email Design",
};

export const projectPaths: {
  [key in ProjectKey]: string;
} = {
  [projectKeys.NEURO_Q]: "NeuroQ",
  [projectKeys.LIFE_SEASONS]: "LifeSeasons",
  [projectKeys.SUPPLEMENTS]: "Supplements",
  [projectKeys.EMAIL]: "Email",
};

export type ProjectKey = ValueOf<typeof projectKeys>;

export const projectOrder: ProjectKey[] = [
  projectKeys.NEURO_Q,
  projectKeys.LIFE_SEASONS,
  projectKeys.SUPPLEMENTS,
  projectKeys.EMAIL,
];

export const sectionKeys = {
  NEURO_Q_BRANDING: "NEURO_Q_BRANDING",
  NEURO_Q_PACKAGING: "NEURO_Q_PACKAGING",
  NEURO_Q_LITERATURE: "NEURO_Q_LITERATURE",
  NEURO_Q_AMAZON: "NEURO_Q_AMAZON",
  NEURO_Q_SOCIAL: "NEURO_Q_SOCIAL",
  NEURO_Q_LANDING_PAGES: "NEURO_Q_LANDING_PAGES",
  NEURO_Q_VIDEO: "NEURO_Q_VIDEO",
  LIFE_SEASONS_PRODUCT: "LIFE_SEASONS_PRODUCT",
  LIFE_SEASONS_VIDEO: "LIFE_SEASONS_VIDEO",
  LIFE_SEASONS_AMAZON: "LIFE_SEASONS_AMAZON",
  LIFE_SEASONS_RETAIL: "LIFE_SEASONS_RETAIL",
  SUPPLEMENTS_WARRIOR_STRONG_WELLNESS: "SUPPLEMENTS_WARRIOR_STRONG_WELLNESS",
  SUPPLEMENTS_ALPHA_WOLF_NUTRITION: "SUPPLEMENTS_ALPHA_WOLF_NUTRITION",
  SUPPLEMENTS_BELLES_SECRETS: "SUPPLEMENTS_BELLES_SECRETS",
  SUPPLEMENTS_REDS_KITCHEN_SINK: "SUPPLEMENTS_REDS_KITCHEN_SINK",
  SUPPLEMENTS_SHADOW_SUPPLEMENTS: "SUPPLEMENTS_SHADOW_SUPPLEMENTS",
  SUPPLEMENTS_KETO_VITALS: "SUPPLEMENTS_KETO_VITALS",
  EMAIL_CANVAS_PEOPLE: "EMAIL_CANVAS_PEOPLE",
  EMAIL_NEURO_Q: "EMAIL_NEURO_Q",
  EMAIL_LIFE_SEASONS: "EMAIL_LIFE_SEASONS",
} as const;

export const sectionTypes = {
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
} as const;

export type SectionKey = ValueOf<typeof sectionKeys>;
export type SectionType = ValueOf<typeof sectionTypes>;

export type SectionInfo = {
  key: SectionKey;
  length: number;
  type: SectionType;
  width: number;
};

export const projectSections: { [key in ProjectKey]: SectionInfo[] } = {
  [projectKeys.NEURO_Q]: [
    {
      key: sectionKeys.NEURO_Q_BRANDING,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.NEURO_Q_PACKAGING,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.NEURO_Q_LITERATURE,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.NEURO_Q_AMAZON,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.NEURO_Q_SOCIAL,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.NEURO_Q_LANDING_PAGES,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.NEURO_Q_VIDEO,
      length: 3,
      type: sectionTypes.VIDEO,
      width: 4,
    },
  ],
  [projectKeys.LIFE_SEASONS]: [
    {
      key: sectionKeys.LIFE_SEASONS_PRODUCT,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.LIFE_SEASONS_VIDEO,
      length: 3,
      type: sectionTypes.VIDEO,
      width: 4,
    },
    {
      key: sectionKeys.LIFE_SEASONS_AMAZON,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.LIFE_SEASONS_RETAIL,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
  ],
  [projectKeys.SUPPLEMENTS]: [
    {
      key: sectionKeys.SUPPLEMENTS_WARRIOR_STRONG_WELLNESS,
      length: 6,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.SUPPLEMENTS_ALPHA_WOLF_NUTRITION,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.SUPPLEMENTS_BELLES_SECRETS,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.SUPPLEMENTS_REDS_KITCHEN_SINK,
      length: 2,
      type: sectionTypes.IMAGE,
      width: 5,
    },
    {
      key: sectionKeys.SUPPLEMENTS_SHADOW_SUPPLEMENTS,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
    {
      key: sectionKeys.SUPPLEMENTS_KETO_VITALS,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
  ],
  [projectKeys.EMAIL]: [
    {
      key: sectionKeys.EMAIL_CANVAS_PEOPLE,
      length: 4,
      type: sectionTypes.IMAGE,
      width: 3,
    },
    {
      key: sectionKeys.EMAIL_NEURO_Q,
      length: 4,
      type: sectionTypes.IMAGE,
      width: 3,
    },
    {
      key: sectionKeys.EMAIL_LIFE_SEASONS,
      length: 3,
      type: sectionTypes.IMAGE,
      width: 4,
    },
  ],
};

export const sectionNames: { [key in SectionKey]: string } = {
  NEURO_Q_BRANDING: "Brand Guide",
  NEURO_Q_PACKAGING: "Custom Packaging",
  NEURO_Q_LITERATURE: "Literature Inserts",
  NEURO_Q_AMAZON: "Amazon",
  NEURO_Q_SOCIAL: "Organic Social",
  NEURO_Q_LANDING_PAGES: "Landing Pages",
  NEURO_Q_VIDEO: "Video Editing",
  LIFE_SEASONS_PRODUCT: "Product Design",
  LIFE_SEASONS_VIDEO: "Video Editing",
  LIFE_SEASONS_AMAZON: "Amazon",
  LIFE_SEASONS_RETAIL: "Retail",
  SUPPLEMENTS_WARRIOR_STRONG_WELLNESS: "Warrior Strong Wellness",
  SUPPLEMENTS_ALPHA_WOLF_NUTRITION: "Alpha Wolf Nutrition",
  SUPPLEMENTS_BELLES_SECRETS: "Belle's Secrets",
  SUPPLEMENTS_REDS_KITCHEN_SINK: "Red's Kitchen Sink",
  SUPPLEMENTS_SHADOW_SUPPLEMENTS: "Shadow Supplements",
  SUPPLEMENTS_KETO_VITALS: "KetoVitals",
  EMAIL_CANVAS_PEOPLE: "Canvas People",
  EMAIL_NEURO_Q: "NeuroQ",
  EMAIL_LIFE_SEASONS: "LifeSeasons",
};

export const sectionDescriptions: { [key in SectionKey]?: string } = {
  NEURO_Q_BRANDING: Copy.NEURO_Q_BRANDING_DESCRIPTION,
  NEURO_Q_PACKAGING: Copy.NEURO_Q_PACKAGING_DESCRIPTION,
  NEURO_Q_LITERATURE: Copy.NEURO_Q_LITERATURE_DESCRIPTION,
  NEURO_Q_AMAZON: Copy.NEURO_Q_AMAZON_DESCRIPTION,
  NEURO_Q_SOCIAL: Copy.NEURO_Q_SOCIAL_DESCRIPTION,
  NEURO_Q_LANDING_PAGES: Copy.NEURO_Q_LANDING_PAGES_DESCRIPTION,
  NEURO_Q_VIDEO: Copy.NEURO_Q_VIDEO_DESCRIPTION,
  LIFE_SEASONS_PRODUCT: Copy.LIFE_SEASONS_PRODUCT,
  LIFE_SEASONS_VIDEO: Copy.LIFE_SEASONS_VIDEO,
  LIFE_SEASONS_AMAZON: Copy.LIFE_SEASONS_AMAZON,
  LIFE_SEASONS_RETAIL: Copy.LIFE_SEASONS_RETAIL,
};

export const projectHeaderInfos: {
  [key in ProjectKey]: {
    color: string;
    backgroundImage?: boolean;
    logoImage: boolean;
  };
} = {
  [projectKeys.NEURO_Q]: {
    backgroundImage: true,
    color: "#3070b4",
    logoImage: true,
  },
  [projectKeys.LIFE_SEASONS]: { color: "#99c55f", logoImage: true },
  [projectKeys.SUPPLEMENTS]: { color: "#7f5e78", logoImage: false },
  [projectKeys.EMAIL]: { color: "#ea9d76", logoImage: false },
};

export const projectThumbnailColors: {
  [key in ProjectKey]: string;
} = {
  [projectKeys.NEURO_Q]: "#3d81bd",
  [projectKeys.LIFE_SEASONS]: "#acc969",
  [projectKeys.SUPPLEMENTS]: "#92778a",
  [projectKeys.EMAIL]: "#e99c76",
};

export const projectDescription: {
  [key in ProjectKey]: string;
} = {
  [projectKeys.NEURO_Q]: Copy.NEURO_Q_DESCRIPTION,
  [projectKeys.LIFE_SEASONS]: Copy.LIFE_SEASONS_DESCRIPTION,
  [projectKeys.SUPPLEMENTS]: Copy.SUPPLEMENTS_DESCRIPTION,
  [projectKeys.EMAIL]: Copy.EMAIL_DESCRIPTION,
};

export const projectHeaderBlockSectionKeys = {
  SCOPE: "SCOPE",
  SKILLS_USED: "SKILLS_USED",
  TOOLS_USED: "TOOLS_USED",
} as const;

export type ProjectHeaderBlockSectionKey = ValueOf<
  typeof projectHeaderBlockSectionKeys
>;

export const projectHeaderBlockSectionOrder: ProjectHeaderBlockSectionKey[] = [
  projectHeaderBlockSectionKeys.SCOPE,
  projectHeaderBlockSectionKeys.SKILLS_USED,
  projectHeaderBlockSectionKeys.TOOLS_USED,
];

export const projectHeaderBlockSectionTitles: {
  [key in ProjectHeaderBlockSectionKey]: string;
} = {
  [projectHeaderBlockSectionKeys.SCOPE]: Copy.PROJECT_HEADER_BLOCK_SCOPE_TITLE,
  [projectHeaderBlockSectionKeys.SKILLS_USED]:
    Copy.PROJECT_HEADER_BLOCK_SKILLS_USED_TITLE,
  [projectHeaderBlockSectionKeys.TOOLS_USED]:
    Copy.PROJECT_HEADER_BLOCK_TOOLS_USED_TITLE,
};

export const projectHeaderBlockSectionBodyTexts: {
  [key in ProjectKey]: {
    [key in ProjectHeaderBlockSectionKey]: string;
  };
} = {
  [projectKeys.NEURO_Q]: {
    [projectHeaderBlockSectionKeys.SCOPE]:
      Copy.PROJECT_HEADER_BLOCK_SCOPE_BODY_NEURO_Q,
    [projectHeaderBlockSectionKeys.SKILLS_USED]:
      Copy.PROJECT_HEADER_BLOCK_SKILLS_USED_BODY_NEURO_Q,
    [projectHeaderBlockSectionKeys.TOOLS_USED]:
      Copy.PROJECT_HEADER_BLOCK_TOOLS_USED_BODY_NEURO_Q,
  },
  [projectKeys.LIFE_SEASONS]: {
    [projectHeaderBlockSectionKeys.SCOPE]:
      Copy.PROJECT_HEADER_BLOCK_SCOPE_BODY_LIFE_SEASONS,
    [projectHeaderBlockSectionKeys.SKILLS_USED]:
      Copy.PROJECT_HEADER_BLOCK_SKILLS_USED_BODY_LIFE_SEASONS,
    [projectHeaderBlockSectionKeys.TOOLS_USED]:
      Copy.PROJECT_HEADER_BLOCK_TOOLS_USED_BODY_LIFE_SEASONS,
  },
  [projectKeys.SUPPLEMENTS]: {
    [projectHeaderBlockSectionKeys.SCOPE]:
      Copy.PROJECT_HEADER_BLOCK_SCOPE_BODY_SUPPLEMENTS,
    [projectHeaderBlockSectionKeys.SKILLS_USED]:
      Copy.PROJECT_HEADER_BLOCK_SKILLS_USED_BODY_SUPPLEMENTS,
    [projectHeaderBlockSectionKeys.TOOLS_USED]:
      Copy.PROJECT_HEADER_BLOCK_TOOLS_USED_BODY_SUPPLEMENTS,
  },
  [projectKeys.EMAIL]: {
    [projectHeaderBlockSectionKeys.SCOPE]:
      Copy.PROJECT_HEADER_BLOCK_SCOPE_BODY_EMAIL,
    [projectHeaderBlockSectionKeys.SKILLS_USED]:
      Copy.PROJECT_HEADER_BLOCK_SKILLS_USED_BODY_EMAIL,
    [projectHeaderBlockSectionKeys.TOOLS_USED]:
      Copy.PROJECT_HEADER_BLOCK_TOOLS_USED_BODY_EMAIL,
  },
};

export type TileInfo = { sectionKey: SectionKey; index: number };

export const videoSources: { [key in SectionKey]?: string[] } = {
  [sectionKeys.NEURO_Q_VIDEO]: [
    "https://videos.gudedesigns.com/hubfs/portfolio/NQ-blog-reduce-inflammation.mp4",
    "https://videos.gudedesigns.com/hubfs/portfolio/NQ-blog-video-hyperaphantasia.mp4",
    "https://videos.gudedesigns.com/hubfs/portfolio/NQ-blog-video-pqq.mp4",
  ],
  [sectionKeys.LIFE_SEASONS_VIDEO]: [
    "https://videos.gudedesigns.com/hubfs/portfolio/LS_breathe-x_amazon_video.mp4",
    "https://videos.gudedesigns.com/hubfs/portfolio/LS_circulari-T_amazon_video.mp4",
    "https://videos.gudedesigns.com/hubfs/portfolio/LS_visibili-T_amazon_video.mp4",
  ],
};

export const accentColor = "#e3e5f3";

export const logoPath = "/images/logo.png";

export const emailUrl = "mailto:gudedesigns@gmail.com";
export const linkedinUrl = "https://www.linkedin.com/in/meghangude/";
