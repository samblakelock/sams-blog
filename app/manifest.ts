import type { MetadataRoute } from "next";
import { SITE_NAME, SITE_DESCRIPTION } from "./seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [
      {
        src: "/images/sam-blakelock-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/sam-blakelock-512.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
