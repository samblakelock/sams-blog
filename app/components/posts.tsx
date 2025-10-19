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
          <div
            key={post.slug}
            className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0"
          >
            <div className="text-neutral-600 dark:text-neutral-400 text-sm md:w-32 flex-shrink-0 md:pt-0.5 select-none">
              {formatDate(post.metadata.publishedAt)}
            </div>
            <div className="flex-1">
              <Link href={`/writing/${post.slug}`}>
                <h2 className="text-neutral-900 dark:text-neutral-100 text-lg font-medium md:hover:text-blue-600 md:dark:hover:text-blue-400 transition-colors leading-tight [-webkit-tap-highlight-color:transparent] cursor-pointer">
                  {post.metadata.title}
                </h2>
              </Link>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1 select-none">
                {post.metadata.summary}
              </p>
              <p className="text-neutral-500 dark:text-neutral-500 text-xs mt-2 select-none">
                {post.readTime}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
}
