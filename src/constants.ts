export const HOME_KEY = "HOME";
export type HOME_KEY_TYPE = typeof HOME_KEY;

export type PageKeys =
  | HOME_KEY_TYPE
  | "DIGITAL"
  | "PACKAGING"
  | "PRINT"
  | "WEB"
  | "CONTACT";

export const pageKeys: PageKeys[] = [
  HOME_KEY,
  "DIGITAL",
  "PACKAGING",
  "PRINT",
  "WEB",
  "CONTACT",
];

export const pageNames: { [key in PageKeys]: string } = {
  [HOME_KEY]: "Home",
  DIGITAL: "Digital",
  PACKAGING: "Packaging",
  PRINT: "Print",
  WEB: "Web",
  CONTACT: "Contact",
};

export type PagePath =
  | "home"
  | "digital"
  | "packaging"
  | "print"
  | "web"
  | "contact";

export const pagePaths: { [key in PageKeys]: PagePath } = {
  [HOME_KEY]: "home",
  DIGITAL: "digital",
  PACKAGING: "packaging",
  PRINT: "print",
  WEB: "web",
  CONTACT: "contact",
};

export const pagePathToKey: { [key in PagePath]: PageKeys } =
  Object.entries<PagePath>(pagePaths).reduce<{ [key in PagePath]: PageKeys }>(
    (acc, [pageKey, pagePath]) => ({ ...acc, [pagePath]: pageKey }),
    {} as { [key in PagePath]: PageKeys }
  );
