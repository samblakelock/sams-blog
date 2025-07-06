import Link from "next/link";
import { getBlogPosts, formatDate } from "app/writing/utils";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div className="space-y-8">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 group"
            href={`/writing/${post.slug}`}
          >
            <div className="text-neutral-600 dark:text-neutral-400 text-sm md:w-32 flex-shrink-0 md:pt-0.5">
              {formatDate(post.metadata.publishedAt)}
            </div>
            <div className="flex-1">
              <h2 className="text-neutral-900 dark:text-neutral-100 text-lg font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                {post.metadata.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">
                {post.metadata.summary}
              </p>
              <p className="text-neutral-500 dark:text-neutral-500 text-xs mt-2">
                {post.readTime}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
