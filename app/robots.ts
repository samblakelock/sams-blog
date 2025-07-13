import { baseUrl } from "app/sitemap";

export default function robots() {
  return `User-agent: *
Allow: /
Disallow: /private/

Host: ${baseUrl}
Sitemap: ${baseUrl}/sitemap.xml`;
}
