import type { Metadata } from "next";
import { baseUrl } from "./sitemap";

export const SITE_NAME = "Sam Blakelock";
export const TWITTER_HANDLE = "@samblakelock";
export const SITE_DESCRIPTION =
  "Co-Founder and CEO of Pickup Music. Writing about music, technology, and building products.";

export const OG_IMAGE = {
  url: `${baseUrl}/images/sam-blakelock-1200-630.jpg`,
  width: 1200,
  height: 630,
  alt: "Sam Blakelock - Co-Founder and CEO of Pickup Music",
} as const;

/**
 * Serialize a value for an inline JSON-LD <script>. JSON.stringify does not
 * escape the `</script>` sequence, so a stray `<` in any field (e.g. a post
 * title) could close the tag early and break the page (or inject markup if the
 * field were ever untrusted). Escaping `<` keeps the JSON valid and inert.
 */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * Build consistent canonical + OpenGraph + Twitter metadata for a standard
 * page. Social titles are normalized to "<title> | <site>" so cards read the
 * same everywhere; the document <title> still flows through the root template.
 */
export function pageMetadata({
  title,
  description,
  path = "",
  ogTitle = `${title} | ${SITE_NAME}`,
}: {
  title: string;
  description: string;
  path?: string;
  ogTitle?: string;
}): Metadata {
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description,
      url,
      type: "website",
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      site: TWITTER_HANDLE,
      creator: TWITTER_HANDLE,
      images: [OG_IMAGE.url],
    },
  };
}
