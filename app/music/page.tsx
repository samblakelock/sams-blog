import { CustomMDX } from "app/components/mdx";
import { promises as fs } from "fs";
import path from "path";

export const metadata = {
  title: "Music",
  description: "Music and podcasts",
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
