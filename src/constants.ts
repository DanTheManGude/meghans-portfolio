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

export const accentColor = "#e3e5f3";
