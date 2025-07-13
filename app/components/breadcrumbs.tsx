import Link from "next/link";
import { baseUrl } from "app/sitemap";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbStructuredData),
        }}
      />
      <nav
        className="flex items-center space-x-2 text-sm text-neutral-500 mb-4"
        aria-label="Breadcrumb"
      >
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center">
            {index > 0 && <span className="mx-2">→</span>}
            {index === items.length - 1 ? (
              <span className="text-neutral-400">{item.name}</span>
            ) : (
              <Link
                href={item.href}
                className="hover:text-neutral-300 transition-colors"
              >
                {item.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
