import { CustomMDX } from "app/components/mdx";
import { promises as fs } from "fs";
import path from "path";
import { baseUrl } from "app/sitemap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music",
  description: "Music and podcasts by Sam Blakelock.",
  alternates: {
    canonical: `${baseUrl}/music`,
  },
  openGraph: {
    title: "Music | Sam Blakelock",
    description: "Music and podcasts by Sam Blakelock.",
    url: `${baseUrl}/music`,
    type: "website",
    images: [`${baseUrl}/images/sam-blakelock-1200-630.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Music | Sam Blakelock",
    description: "Music and podcasts by Sam Blakelock.",
    creator: "@samblakelock",
    images: [`${baseUrl}/images/sam-blakelock-1200-630.jpg`],
  },
};

export default async function Page() {
  const content = await fs.readFile(
    path.join(process.cwd(), "app/music/music.mdx"),
    "utf8"
  );

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Music</h1>
      <article className="prose prose-invert">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}
