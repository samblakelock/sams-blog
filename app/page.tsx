import Image from "next/image";
import { CustomMDX } from "app/components/mdx";
import { BlogPosts } from "app/components/posts";
import { promises as fs } from "fs";
import path from "path";

export default async function Page() {
  const content = await fs.readFile(
    path.join(process.cwd(), "app/about/about.mdx"),
    "utf8"
  );

  return (
    <section>
      <div className="float-left mr-4 mb-2">
        <Image
          className="rounded-2xl"
          src="/images/sam-blakelock-profile.jpg"
          alt="Sam Blakelock"
          width={100}
          height={100}
        />
      </div>
      <article className="prose prose-invert mb-10">
        <CustomMDX source={content} />
      </article>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6">Posts</h3>
        <BlogPosts />
      </div>
    </section>
  );
}
