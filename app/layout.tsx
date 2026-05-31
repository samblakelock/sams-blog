import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";
import {
  SITE_NAME,
  SITE_DESCRIPTION,
  TWITTER_HANDLE,
  OG_IMAGE,
  jsonLdScript,
} from "./seo";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: baseUrl,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    site: TWITTER_HANDLE,
    creator: TWITTER_HANDLE,
    images: [OG_IMAGE.url],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      {
        url: "/images/sam-blakelock-32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/sam-blakelock-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/sam-blakelock-512.jpg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
    apple: [
      {
        url: "/images/sam-blakelock-180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} bg-white text-neutral-900`}
    >
      <body className="antialiased flex flex-col min-h-screen items-center">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: jsonLdScript({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": `${baseUrl}/#website`,
                  url: baseUrl,
                  name: "Sam Blakelock",
                  alternateName: "samblakelock.com",
                  description: "Co-Founder and CEO of Pickup Music.",
                  publisher: {
                    "@id": `${baseUrl}/#person`,
                  },
                  inLanguage: "en-US",
                },
                {
                  "@type": "Person",
                  "@id": `${baseUrl}/#person`,
                  name: "Sam Blakelock",
                  url: baseUrl,
                  description: "Co-Founder and CEO of Pickup Music.",
                  jobTitle: "Co-Founder and CEO",
                  worksFor: {
                    "@type": "Organization",
                    name: "Pickup Music",
                    url: "https://pickupmusic.com",
                  },
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `${baseUrl}/#webpage`,
                  },
                },
              ],
            }),
          }}
        />
        <main className="flex-1 flex flex-col w-full max-w-xl px-4 mt-6">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
