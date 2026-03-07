const productionUrl = "https://flux-kut.dev";
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? process.env.VERCEL_PROJECT_PRODUCTION_URL.startsWith("http")
    ? process.env.VERCEL_PROJECT_PRODUCTION_URL
    : `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : undefined;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  vercelUrl ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : productionUrl);

export const siteConfig = {
  name: "FluxKit",
  url: siteUrl,
  getStartedUrl: "https://github.com/fluxkit-hq/fluxkit",
  docsUrl: "/docs",
  ogImage: `${siteUrl}/og.jpg`,
  description:
    "Production-ready SaaS starter kit with authentication, teams, dashboard foundations, and real-time features. Built with Next.js, Convex, and TypeScript.",
  links: {
    github: "https://github.com/fluxkit-hq/fluxkit",
    email: "mailto:hello@flux-kut.dev",
  },
  pricing: {
    free: "https://github.com/fluxkit-hq/fluxkit",
    pro: "/#pricing",
  },
  stats: {
    github: 0,
    features: 40,
    components: 25,
    integrations: 9,
    total: "40+",
    updated: "Feb 2026",
  },
};

export type SiteConfig = typeof siteConfig;
