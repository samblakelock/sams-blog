import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'
import Head from 'next/head'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Sam Blakelock',
    template: '%s | Sam Blakelock',
  },
  description: 'Welcome',
  openGraph: {
    title: 'Sam Blakelock',
    description: 'Writing, music and reccomendartions',
    url: baseUrl,
    siteName: 'Sam Blakelock',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`text-white bg-black ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className="antialiased flex flex-col min-h-screen items-center"
      >
        <main className="flex-1 flex flex-col w-full max-w-xl px-4 mt-6">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
