import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getAllBlogPosts } from "@/lib/blog-posts";

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

  const blogPosts = getAllBlogPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [...pages, ...blogPosts];
}
