import "@/app/globals.css";

import type { Metadata } from "next";

import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "FluxKit",
    "SaaS boilerplate",
    "Next.js 16",
    "Convex",
    "Authentication",
    "Teams",
    "Dashboard template",
  ],
  authors: [
    {
      name: "FluxKit",
      url: siteConfig.getStartedUrl,
    },
  ],
  creator: "FluxKit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=20260309b", type: "image/x-icon" },
      {
        url: "/favicon-32x32.png?v=20260309b",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon-16x16.png?v=20260309b",
        sizes: "16x16",
        type: "image/png",
      },
      { url: "/icon.png?v=20260309b", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=20260309b",
    apple: "/apple-icon.png?v=20260309b",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<unknown>;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
