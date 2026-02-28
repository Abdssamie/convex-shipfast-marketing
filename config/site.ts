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
    pro: "https://buy.stripe.com/fluxkit-pro", // Update with actual Stripe link
    proPolar: "https://polar.sh/fluxkit/products/pro", // Update with actual Polar link
  },
  stats: {
    github: 0, // Will update as stars grow
    features: 50,
    components: 30,
    integrations: 8,
    total: "50+",
    updated: "Feb 2026",
  },
};

export type SiteConfig = typeof siteConfig;
