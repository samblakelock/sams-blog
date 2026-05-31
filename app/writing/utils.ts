import fs from "fs";
import path from "path";
import { cache } from "react";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  if (!match) {
    throw new Error("Missing frontmatter block (expected '--- ... ---').");
  }
  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    // Skip blank lines and any line without a "key: value" shape so we never
    // create an empty-string key on the metadata object.
    if (!line.includes(": ")) return;
    const [key, ...valueArr] = line.split(": ");
    const trimmedKey = key.trim();
    if (!trimmedKey) return;
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove surrounding quotes
    metadata[trimmedKey as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  // eslint-disable-next-line security/detect-non-literal-fs-filename
  const rawContent = fs.readFileSync(filePath, "utf-8");
  try {
    return parseFrontmatter(rawContent);
  } catch (error) {
    // Surface which file is malformed instead of a bare null-deref/parse error.
    throw new Error(
      `Failed to parse "${filePath}": ${(error as Error).message}`
    );
  }
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    const readTime = calculateReadTime(content);

    return {
      metadata,
      slug,
      content,
      readTime,
    };
  });
}

// Memoized per request render: generateStaticParams, generateMetadata, and the
// page component all call this, but the filesystem is read at most once.
export const getBlogPosts = cache(() => {
  const posts = getMDXData(path.join(process.cwd(), "app", "writing", "posts"));

  // Newest first, with a stable slug tiebreak so posts sharing a publishedAt
  // (e.g. two dated 2015-12-22) always render in a deterministic order.
  return posts.sort((a, b) => {
    const diff =
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime();
    return diff !== 0 ? diff : a.slug.localeCompare(b.slug);
  });
});

export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  const fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}

export function calculateReadTime(content: string) {
  const wordsPerMinute = 200;
  const trimmed = content.trim();
  const words = trimmed ? trimmed.split(/\s+/).length : 0;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
  return `${minutes} min read`;
}
