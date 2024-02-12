export type PageKeys = "home" | "print" | "packaging" | "digital" | "web";

export const pageKeys: PageKeys[] = [
  "home",
  "print",
  "packaging",
  "digital",
  "web",
];

export const pageNames: { [key in PageKeys]: string } = {
  home: "Home",
  print: "Print",
  packaging: "Packaging",
  digital: "Digital",
  web: "Web",
};

export const pagePaths: { [key in PageKeys]: string } = {
  home: "",
  print: "print",
  packaging: "packaging",
  digital: "digital",
  web: "web",
};
