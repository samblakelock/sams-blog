import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sam Blakelock",
    short_name: "Sam Blakelock",
    description:
      "Co-Founder and CEO of Pickup Music. Writing about music, technology, and building products.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090B",
    theme_color: "#09090B",
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
