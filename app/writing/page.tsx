import { BlogPosts } from "app/components/posts";
import { Breadcrumbs } from "app/components/breadcrumbs";
import { pageMetadata } from "app/seo";

export const metadata = pageMetadata({
  title: "Writing",
  description: "Thoughts on music, education and guitar.",
  path: "/writing",
});

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
