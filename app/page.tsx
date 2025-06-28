import Image from "next/image";
import { CustomMDX } from "app/components/mdx";
import { promises as fs } from "fs";
import path from "path";

export default async function Page() {
  const content = await fs.readFile(
    path.join(process.cwd(), "app/about/about.mdx"),
    "utf8",
  );

  return (
    <section>
      <div className="float-left mr-4 mb-2">
        <Image
          className="rounded-full"
          src="/images/sam-blakelock-profile.jpg"
          alt="Sam Blakelock"
          width={100}
          height={100}
        />
      </div>
      <article className="prose prose-invert mb-10">
        <CustomMDX source={content} />
      </article>
    </section>
  );
}
