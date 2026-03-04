export const siteConfig = {
  name: "FluxKit",
  url: "https://fluxkit.dev",
  getStartedUrl: "https://github.com/fluxkit/fluxkit",
  docsUrl: "https://docs.fluxkit.dev",
  ogImage: "https://fluxkit.dev/og.jpg",
  description:
    "Production-ready SaaS starter kit with authentication, billing, teams, and real-time features. Built with Next.js, Convex, and TypeScript.",
  links: {
    twitter: "https://twitter.com/fluxkit",
    github: "https://github.com/fluxkit/fluxkit",
    discord: "https://discord.gg/fluxkit",
    email: "mailto:hello@fluxkit.dev",
  },
  pricing: {
    free: "https://github.com/fluxkit/fluxkit",
    pro: "/#pricing",
    proPolar: "/#pricing",
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
