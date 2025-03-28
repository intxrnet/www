import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { siteMetadata } from "./metadata";
import Link from "next/link";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});

export const metadata: Metadata = {
  title: "the intxrnet",
  description: siteMetadata.description,
  keywords:
    "web tools, open source, client-side, development tools, browser tools",
  authors: [{ name: siteMetadata.author }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.socialBanner,
        width: 800,
        height: 800,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner],
    creator: siteMetadata.authorUrl,
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
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  alternates: {
    canonical: siteMetadata.siteUrl,
  },
  metadataBase: new URL(siteMetadata.siteUrl),
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-16 flex flex-col items-center bg-background z-10 px-4">
      <div className="flex items-center w-full">
        <h1 className="text-2xl flex-1 flex justify-end">
          <Link href="https://www.intxr.net" className="hover:underline">
            www
          </Link>
        </h1>
        <h1 className="text-2xl">
          .
          <Link href="https://www.intxr.net" className="hover:underline">
            intxr
          </Link>
          .
        </h1>
        <h1 className="text-2xl flex-1 flex justify-start">
          <Link href="https://net.intxr.net" className="hover:underline">
            net
          </Link>
        </h1>
      </div>
      <p className="text-gray-500 text-sm">
        free and local web apps. some generated using{" "}
        <Link
          href="https://www.isthisan.ai/b/rlhf"
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          reinforcement learning
        </Link>
      </p>
    </header>
  );
}

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 h-8 flex justify-between items-center px-4 text-gray-500 bg-background z-10">
      <Link
        href="https://github.com/intxrnet"
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        contribute:github/intxrnet
      </Link>
      <Link
        href="https://its-ours.org"
        className="hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        its-ours pledge
      </Link>
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlex.variable}>
      <body className="flex flex-col min-h-screen">
        <Header />
        <div className="h-16" aria-hidden="true"></div>
        <main className="flex-1 flex flex-col">{children}</main>
        <div className="h-8" aria-hidden="true"></div>
        <Footer />
      </body>
    </html>
  );
}
