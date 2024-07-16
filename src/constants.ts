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
  SUPPLEMENT: "SUPPLEMENT",
  EMAIL: "EMAIL",
} as const;

export type ProjectKey = ValueOf<typeof projectKeys>;

export const projectOrder: ProjectKey[] = [
  projectKeys.NEURO_Q,
  projectKeys.LIFE_SEASONS,
  projectKeys.SUPPLEMENT,
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
} as const;

export type SectionKey = ValueOf<typeof sectionKeys>;

export type SectionInfo = { key: SectionKey; length: number };

export const projectSections: { [key in ProjectKey]: SectionInfo[] } = {
  [projectKeys.NEURO_Q]: [
    { key: sectionKeys.NEURO_Q_BRANDING, length: 3 },
    { key: sectionKeys.NEURO_Q_PACKAGING, length: 3 },
    { key: sectionKeys.NEURO_Q_LITERATURE, length: 3 },
    { key: sectionKeys.NEURO_Q_AMAZON, length: 3 },
    { key: sectionKeys.NEURO_Q_SOCIAL, length: 3 },
    { key: sectionKeys.NEURO_Q_LANDING_PAGES, length: 3 },
  ],
  [projectKeys.LIFE_SEASONS]: [],
  [projectKeys.SUPPLEMENT]: [],
  [projectKeys.EMAIL]: [],
};

export const sectionNames: { [key in SectionKey]: string } = {
  NEURO_Q_BRANDING: "Brand Guide",
  NEURO_Q_PACKAGING: "Custom Packaging",
  NEURO_Q_LITERATURE: "Literature Inserts",
  NEURO_Q_AMAZON: "Amazon",
  NEURO_Q_SOCIAL: "Organic Social",
  NEURO_Q_LANDING_PAGES: "Landing Pages",
  NEURO_Q_VIDEO: "Video Editing",
};

export const sectionDescriptions: { [key in SectionKey]: string } = {
  NEURO_Q_BRANDING: Copy.NEURO_Q_BRANDING_DESCRIPTION,
  NEURO_Q_PACKAGING: Copy.NEURO_Q_PACKAGING_DESCRIPTION,
  NEURO_Q_LITERATURE: Copy.NEURO_Q_LITERATURE_DESCRIPTION,
  NEURO_Q_AMAZON: Copy.NEURO_Q_AMAZON_DESCRIPTION,
  NEURO_Q_SOCIAL: Copy.NEURO_Q_SOCIAL_DESCRIPTION,
  NEURO_Q_LANDING_PAGES: Copy.NEURO_Q_LANDING_PAGES_DESCRIPTION,
  NEURO_Q_VIDEO: Copy.NEURO_Q_VIDEO_DESCRIPTION,
};

export const projectNames: {
  [key in ProjectKey]: string;
} = {
  [projectKeys.NEURO_Q]: "NeuroQ",
  [projectKeys.LIFE_SEASONS]: "LifeSeasons",
  [projectKeys.SUPPLEMENT]: "Supplement",
  [projectKeys.EMAIL]: "Email",
};

export const projectDescription: {
  [key in ProjectKey]: string;
} = {
  [projectKeys.NEURO_Q]: Copy.NEURO_Q_DESCRIPTION,
  [projectKeys.LIFE_SEASONS]: Copy.LIFE_SEASONS_DESCRIPTION,
  [projectKeys.SUPPLEMENT]: Copy.SUPPLEMENT_DESCRIPTION,
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
    [projectHeaderBlockSectionKeys.SCOPE]: "",
    [projectHeaderBlockSectionKeys.SKILLS_USED]: "",
    [projectHeaderBlockSectionKeys.TOOLS_USED]: "",
  },
  [projectKeys.SUPPLEMENT]: {
    [projectHeaderBlockSectionKeys.SCOPE]: "",
    [projectHeaderBlockSectionKeys.SKILLS_USED]: "",
    [projectHeaderBlockSectionKeys.TOOLS_USED]: "",
  },
  [projectKeys.EMAIL]: {
    [projectHeaderBlockSectionKeys.SCOPE]: "",
    [projectHeaderBlockSectionKeys.SKILLS_USED]: "",
    [projectHeaderBlockSectionKeys.TOOLS_USED]: "",
  },
};

export type TileInfo = { sectionKey: SectionKey; index: number };

export const accentColor = "#e3e5f3";

export const logoPath = "/images/logo.png";
