import "nextra-theme-docs/style.css";

import { getPageMap } from "nextra/page-map";
import { Layout } from "nextra-theme-docs";

import themeConfig from "./theme-config";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap("/docs");

  return (
    <Layout pageMap={pageMap} {...themeConfig}>
      {children}
    </Layout>
  );
}
