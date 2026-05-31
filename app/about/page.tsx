import { CustomMDX } from "app/components/mdx";
import { promises as fs } from "fs";
import path from "path";
import { baseUrl } from "app/sitemap";
import { Breadcrumbs } from "app/components/breadcrumbs";
import { pageMetadata, jsonLdScript } from "app/seo";

export const metadata = pageMetadata({
  title: "About",
  description: "Co-Founder and CEO of Pickup Music.",
  path: "/about",
});

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
          __html: jsonLdScript({
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
      <article className="prose">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}
