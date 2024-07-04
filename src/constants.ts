import { ValueOf } from "next/dist/shared/lib/constants";
import { NEURO_Q_DESCRIPTION } from "./copy";

export const HOME_KEY = "HOME";
export const ABOUT_KEY = "ABOUT";

export type PageKey = typeof HOME_KEY | typeof ABOUT_KEY;

export const pageKeys: PageKey[] = [HOME_KEY, ABOUT_KEY];

export const pageNames: { [key in PageKey]: string } = {
  [HOME_KEY]: "Work",
  [ABOUT_KEY]: "About",
};

export const pagePaths: { [key in PageKey]: string } = {
  [HOME_KEY]: "home",
  [ABOUT_KEY]: "about",
} as const;

export const projectKeys = {
  NEURO_Q: "NEURO_Q",
} as const;

export type ProjectKey = ValueOf<typeof projectKeys>;

export const sectionKeys = {
  NEURO_Q_BRANDING: "NEURO_Q_BRANDING",
  NEURO_Q_PACKAGING: "NEURO_Q_PACKAGING",
  NEURO_Q_LITERATURE: "NEURO_Q_LITERATURE",
  NEURO_Q_AMAZON: "NEURO_Q_AMAZON",
  NEURO_Q_SOCIAL: "NEURO_Q_SOCIAL",
  NEURO_Q_LANDING_PAGES: "NEURO_Q_LANDING_PAGES",
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
};

export const sectionNames: { [key in SectionKey]: string } = {
  NEURO_Q_BRANDING: "Branding",
  NEURO_Q_PACKAGING: "Packaging",
  NEURO_Q_LITERATURE: "Literature",
  NEURO_Q_AMAZON: "Amazon",
  NEURO_Q_SOCIAL: "Social",
  NEURO_Q_LANDING_PAGES: "Landing Pages",
};

export const sectionDescriptions: { [key in SectionKey]: string } = {
  NEURO_Q_BRANDING: "b",
  NEURO_Q_PACKAGING: "p",
  NEURO_Q_LITERATURE: "l",
  NEURO_Q_AMAZON: "a",
  NEURO_Q_SOCIAL: "s",
  NEURO_Q_LANDING_PAGES: "lp",
};

export const projectNames: {
  [key in ProjectKey]: string;
} = {
  [projectKeys.NEURO_Q]: "NeuroQ",
};

export const projectDescription: {
  [key in ProjectKey]: string;
} = {
  [projectKeys.NEURO_Q]: NEURO_Q_DESCRIPTION,
};

export const accentColor = "#e3e5f3";

export const logoPath = "/images/logo.png";
