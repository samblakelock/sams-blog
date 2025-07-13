import { BlogPosts } from "app/components/posts";
import { Breadcrumbs } from "app/components/breadcrumbs";
import { baseUrl } from "app/sitemap";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description: "Thoughts on music, education and guitar.",
  alternates: {
    canonical: `${baseUrl}/writing`,
  },
  openGraph: {
    title: "Writing | Sam Blakelock",
    description: "Thoughts on music, education and guitar.",
    url: `${baseUrl}/writing`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Writing | Sam Blakelock",
    description: "Thoughts on music, education and guitar.",
  },
};

export default function Page() {
  return (
    <section>
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Writing", href: "/writing" },
        ]}
      />
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Writing</h1>
      <BlogPosts />
    </section>
  );
}
