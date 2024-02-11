export type PageKeys = "allWorks" | "print" | "packaging" | "digital" | "web";

export const pageKeys: PageKeys[] = [
  "allWorks",
  "print",
  "packaging",
  "digital",
  "web",
];

export const pageNames: { [key in PageKeys]: string } = {
  allWorks: "All Works",
  print: "Print",
  packaging: "Packaging",
  digital: "Digital",
  web: "Web",
};
