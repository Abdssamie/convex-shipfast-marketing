import "nextra-theme-docs/style.css";

import Link from "next/link";
import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";

import FluxkitLogo from "@/components/ui/fluxkit-logo";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: "Documentation",
    template: `%s | ${siteConfig.name} Docs`,
  },
  description:
    "Setup guides and production-ready documentation for FluxKit features, architecture, and deployment.",
};

export default async function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<unknown>;
}>) {
  const pageMap = await getPageMap("/docs");

  return (
    <Layout
      navbar={
        <Navbar
          logo={
            <div className="flex items-center gap-2 text-sm font-semibold">
              <FluxkitLogo size={20} />
              <span>{siteConfig.name}</span>
            </div>
          }
          projectLink={siteConfig.links.github}
        />
      }
      pageMap={pageMap}
      docsRepositoryBase={siteConfig.links.github}
      editLink={null}
      feedback={{ content: null }}
      sidebar={{ autoCollapse: true }}
      toc={{ backToTop: true }}
      footer={
        <Footer>
          <div className="flex w-full items-center justify-between gap-4 text-sm">
            <span>
              {siteConfig.name} documentation for setup, operations, and core
              product features.
            </span>
            <Link href="/">Back to marketing site</Link>
          </div>
        </Footer>
      }
    >
      {children}
    </Layout>
  );
}
