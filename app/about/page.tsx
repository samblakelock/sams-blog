import { CustomMDX } from "app/components/mdx";
import { promises as fs } from "fs";
import path from "path";
import { baseUrl } from "app/sitemap";
import { Breadcrumbs } from "app/components/breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Co-Founder and CEO of Pickup Music.",
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: "About Sam Blakelock",
    description: "Co-Founder and CEO of Pickup Music.",
    url: `${baseUrl}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sam Blakelock",
    description: "Co-Founder and CEO of Pickup Music.",
  },
};

export default async function Page() {
  const content = await fs.readFile(
    path.join(process.cwd(), "app/about/about.mdx"),
    "utf8"
  );

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sam Blakelock",
            jobTitle: "Co-Founder and CEO",
            worksFor: {
              "@type": "Organization",
              name: "Pickup Music",
              url: "https://pickupmusic.com",
            },
            url: `${baseUrl}/about`,
          }),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">About</h1>
      <article className="prose prose-invert">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}
