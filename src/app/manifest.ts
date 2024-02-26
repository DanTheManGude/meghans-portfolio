import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Meghan's Portfolio",
    short_name: "Meghan's Portfolio",
    description: "Graphic Design Portfolio",
    start_url: "/home",
    lang: "en",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",
    icons: [
      {
        src: "favicon.ico",
        type: "image/x-icon",
        sizes: "48x48",
      },
      { src: "apple-icon.png", type: "image/png", sizes: "2084x2084" },
      { src: "icon.png", type: "image/png", sizes: "2084x2084" },
    ],
  };
}
