export type PageKeys =
  | "HOME"
  | "DIGITAL"
  | "PACKAGING"
  | "PRINT"
  | "WEB"
  | "CONTACT";

export const pageKeys: PageKeys[] = [
  "HOME",
  "DIGITAL",
  "PACKAGING",
  "PRINT",
  "WEB",
  "CONTACT",
];

export const pageNames: { [key in PageKeys]: string } = {
  HOME: "Home",
  DIGITAL: "Digital",
  PACKAGING: "Packaging",
  PRINT: "Print",
  WEB: "Web",
  CONTACT: "Contact",
};

export const pagePaths: { [key in PageKeys]: string } = {
  HOME: "",
  DIGITAL: "digital",
  PACKAGING: "packaging",
  PRINT: "print",
  WEB: "web",
  CONTACT: "contact",
};
