import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "iO Ghent",
    short_name: "iO Ghent",
    description: "iO Ghent Next.js starter kit",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#0017ee",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
