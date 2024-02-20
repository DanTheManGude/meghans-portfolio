export const HOME_KEY = "HOME";
export const CONTACT_KEY = "CONTACT";

export type PageKey =
  | typeof HOME_KEY
  | "DIGITAL"
  | "PACKAGING"
  | "PRINT"
  | "WEB"
  | typeof CONTACT_KEY;

export const pageKeys: PageKey[] = [
  HOME_KEY,
  "DIGITAL",
  "PACKAGING",
  "PRINT",
  "WEB",
  CONTACT_KEY,
];

export const pageNames: { [key in PageKey]: string } = {
  [HOME_KEY]: "Home",
  DIGITAL: "Digital",
  PACKAGING: "Packaging",
  PRINT: "Print",
  WEB: "Web",
  [CONTACT_KEY]: "Contact",
};

export type PagePath =
  | "home"
  | "digital"
  | "packaging"
  | "print"
  | "web"
  | "contact";

export const pagePaths: { [key in PageKey]: PagePath } = {
  [HOME_KEY]: "home",
  DIGITAL: "digital",
  PACKAGING: "packaging",
  PRINT: "print",
  WEB: "web",
  [CONTACT_KEY]: "contact",
};

export const pagePathToKey: { [key in PagePath]: PageKey } =
  Object.entries<PagePath>(pagePaths).reduce<{ [key in PagePath]: PageKey }>(
    (acc, [pageKey, pagePath]) => ({ ...acc, [pagePath]: pageKey }),
    {} as { [key in PagePath]: PageKey }
  );

export type WorksPageKey = Exclude<PageKey, typeof CONTACT_KEY>;

export const worksNames = {
  CALM_THINKING_AMAZON: "Calm Thinking Amazon",
  ORGANIC_SOCIAL: "Variety of Organic Social Posts",
  PROMOTIONAL_LANDING_PAGE: "Promotional Landing Page Design",
  LITERATURE_AND_PACKAGING: "Variety of Literature and Packaging",
  MULTIVITAMIN_PRODUCT: "Multivitamin Product Design",
  TYPE_DREAMS_BRANDING: "Type Dreams Branding",
} as const;

export type WorksKey = keyof typeof worksNames;

export const worksMap: { [key in WorksPageKey]: WorksKey[] } = {
  [HOME_KEY]: [
    "CALM_THINKING_AMAZON",
    "ORGANIC_SOCIAL",
    "PROMOTIONAL_LANDING_PAGE",
    "LITERATURE_AND_PACKAGING",
    "MULTIVITAMIN_PRODUCT",
    "TYPE_DREAMS_BRANDING",
  ],
  DIGITAL: [],
  PACKAGING: [],
  PRINT: [],
  WEB: [],
};

export const accentColor = "#e3e5f3";
