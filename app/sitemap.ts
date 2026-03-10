import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { posts } from "#site/content";

const staticRoutes = [
  "",
  "/blog",
  "/changelog",
  "/privacy",
  "/terms",
  "/license",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = staticRoutes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: "2026-03-07",
  }));

  const blogPosts = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...pages, ...blogPosts];
}
