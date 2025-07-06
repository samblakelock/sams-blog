import "./global.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { baseUrl } from "./sitemap";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Sam Blakelock",
    template: "%s | Sam Blakelock",
  },
  description:
    "Co-Founder and CEO of Pickup Music. Writing about music, technology, and building products.",
  openGraph: {
    title: "Sam Blakelock",
    description:
      "Co-Founder and CEO of Pickup Music. Writing about music, technology, and building products.",
    url: baseUrl,
    siteName: "Sam Blakelock",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${baseUrl}/images/sam-blakelock-1200-630.jpg`,
        width: 1200,
        height: 630,
        alt: "Sam Blakelock",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Blakelock",
    description:
      "Co-Founder and CEO of Pickup Music. Writing about music, technology, and building products.",
    creator: "@samblakelock",
    images: [`${baseUrl}/images/sam-blakelock-1200-630.jpg`],
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
      className={`text-white bg-black ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased flex flex-col min-h-screen items-center">
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
