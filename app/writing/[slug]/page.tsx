import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/writing/utils";
import { baseUrl } from "app/sitemap";
import { Breadcrumbs } from "app/components/breadcrumbs";
import { OG_IMAGE, TWITTER_HANDLE, jsonLdScript } from "app/seo";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/writing/${post.slug}`,
    },
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      authors: [`${baseUrl}/about`],
      url: `${baseUrl}/writing/${post.slug}`,
      images: [
        {
          url: ogImage,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: `${title} - Blog post by Sam Blakelock`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: TWITTER_HANDLE,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: jsonLdScript({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `${baseUrl}/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/writing/${post.slug}`,
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/writing/${post.slug}`,
            },
            author: {
              "@type": "Person",
              name: "Sam Blakelock",
              url: `${baseUrl}/about`,
            },
            publisher: {
              "@type": "Person",
              name: "Sam Blakelock",
              url: baseUrl,
            },
          }),
        }}
      />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Writing", href: "/writing" },
          { name: post.metadata.title, href: `/writing/${post.slug}` },
        ]}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600">
          {formatDate(post.metadata.publishedAt)}
        </p>
        <p className="text-sm text-neutral-600">{post.readTime}</p>
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
