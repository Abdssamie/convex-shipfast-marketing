import {
  ArrowRightIcon,
  BarChart3Icon,
  BellRingIcon,
  CheckIcon,
  CircleDollarSignIcon,
  Clock3Icon,
  DatabaseIcon,
  FileCheck2Icon,
  KeyRoundIcon,
  Layers3Icon,
  ShieldCheckIcon,
  SparklesIcon,
  Users2Icon,
  XIcon,
} from "lucide-react";

import { siteConfig } from "@/config/site";

import FluxkitLogo from "../ui/fluxkit-logo";
import { Section } from "../ui/section";

const featureCatalog = [
  "Email/password auth + magic links + password reset",
  "Email verification and secure session management",
  "Organization workspaces with invite flows",
  "Role-based authorization patterns",
  "Polar subscriptions and billing lifecycle",
  "Usage-aware billing and account controls",
  "Convex realtime queries and live sync",
  "In-app realtime notifications",
  "Brevo transactional email pipelines",
  "Analytics wiring for growth decisions",
  "Sentry monitoring and issue visibility",
  "Upstash rate limiting for critical routes",
  "Dashboard architecture and account settings",
  "Tasks and calendar product modules",
  "Landing and blog growth surfaces",
  "Type-safe end-to-end TypeScript baseline",
  "Responsive UI with theme support",
  "Production-ready SaaS deployment patterns",
];

const faqs = [
  {
    q: "Who should buy FluxKit?",
    a: "FluxKit is for founders, indie makers, and product teams who want to ship paid SaaS faster without spending months rebuilding auth, billing, and infrastructure.",
  },
  {
    q: "Can I customize architecture and UI?",
    a: "Yes. You own the full codebase and can adapt auth flows, billing logic, schemas, and UI patterns for your product domain.",
  },
  {
    q: "How quickly can we go live?",
    a: "Most teams can begin shipping product-specific features on day one because the commercial SaaS foundations are already wired.",
  },
  {
    q: "Is this one-time pricing?",
    a: "Yes. Business tier is a one-time purchase with lifetime updates for the starter.",
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-container mx-auto">{children}</div>;
}

export function TechStackStrip() {
  const technologies = [
    {
      name: "Next.js",
      version: "16.1.1",
      icon: "https://cdn.simpleicons.org/nextdotjs",
      invertOnDark: true,
    },
    {
      name: "React",
      version: "19.2.3",
      icon: "https://cdn.simpleicons.org/react",
    },
    {
      name: "TypeScript",
      version: "5.9.3",
      icon: "https://cdn.simpleicons.org/typescript",
    },
    {
      name: "Convex",
      version: "1.32.0",
      icon: "https://www.convex.dev/favicon.ico",
    },
    {
      name: "Better Auth",
      version: "1.4.9",
      icon: "/better-auth_light.svg",
      darkIcon: "/better-auth_dark.svg",
    },
    {
      name: "shadcn/ui",
      version: "Radix UI",
      icon: "https://cdn.simpleicons.org/shadcnui",
      invertOnDark: true,
    },
    {
      name: "Tailwind",
      version: "4.1.18",
      icon: "https://cdn.simpleicons.org/tailwindcss",
    },
    {
      name: "Bun",
      version: "latest",
      icon: "https://cdn.simpleicons.org/bun/f9f1e1",
    },
  ];

  return (
    <Section className="py-8 sm:py-12">
      <Container>
        <div className="mx-auto max-w-5xl px-4 py-8 text-center sm:px-6">
          <p className="inline-flex rounded-full border border-orange-300/70 bg-orange-100/70 px-4 py-1 text-xs font-semibold tracking-wide text-orange-700 dark:border-orange-500/50 dark:bg-orange-500/10 dark:text-orange-300">
            Last updated: 06 Mar 2026
          </p>
          <h2 className="mt-6 text-2xl leading-tight font-semibold sm:text-4xl">
            Built with industry-standard tools and best practices
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="inline-flex items-center gap-2 text-sm sm:text-base"
              >
                {"darkIcon" in tech ? (
                  <>
                    <img
                      src={tech.icon}
                      alt={`${tech.name} logo`}
                      width={22}
                      height={22}
                      className="dark:hidden"
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={tech.darkIcon}
                      alt={`${tech.name} logo`}
                      width={22}
                      height={22}
                      className="hidden dark:block"
                      loading="lazy"
                      decoding="async"
                    />
                  </>
                ) : (
                  <img
                    src={tech.icon}
                    alt={`${tech.name} logo`}
                    width={22}
                    height={22}
                    className={tech.invertOnDark ? "dark:invert" : undefined}
                    loading="lazy"
                    decoding="async"
                  />
                )}
                <span className="font-medium">{tech.name}</span>
                <span className="text-muted-foreground">{tech.version}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function TrustStrip() {
  const points = [
    "Commercial SaaS starter, not a demo template",
    "Built on Next.js 16, Convex, React 19, TypeScript",
    "Auth, billing, teams, realtime, ops included",
  ];

  return (
    <Section className="py-8 sm:py-10">
      <Container>
        <div className="border-border/70 from-card via-card to-card/70 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5 sm:p-7">
          <div className="bg-brand/15 pointer-events-none absolute -top-14 right-0 h-36 w-36 rounded-full blur-2xl" />
          <div className="grid gap-4 md:grid-cols-[auto_1fr] md:items-center">
            <div className="flex items-center gap-3">
              <FluxkitLogo size={34} className="rounded-md" />
              <div>
                <p className="text-sm font-semibold tracking-wide">FluxKit</p>
                <p className="text-muted-foreground text-xs">
                  Production-ready base
                </p>
              </div>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              {points.map((point) => (
                <p
                  key={point}
                  className="text-muted-foreground flex items-center gap-2 text-xs leading-relaxed sm:text-sm"
                >
                  <CheckIcon className="text-brand size-4" />
                  {point}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function CommercialValue() {
  const cards = [
    {
      title: "Launch in days",
      text: "Ship paid product features quickly instead of spending weeks on setup and glue code.",
      icon: Clock3Icon,
    },
    {
      title: "Reduce execution risk",
      text: "Use battle-tested foundations for auth, billing, and operations from the first commit.",
      icon: ShieldCheckIcon,
    },
    {
      title: "Monetize sooner",
      text: "Deploy with subscription-ready flows and focus engineering effort on what customers pay for.",
      icon: CircleDollarSignIcon,
    },
  ];

  return (
    <Section className="pt-8 sm:pt-14">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
            Commercial outcomes
          </p>
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
            Built for teams that need speed and quality together
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.title}
                className="group border-border/70 bg-card/60 relative overflow-hidden rounded-2xl border p-6"
              >
                <div className="bg-brand/15 absolute -top-12 right-0 h-24 w-24 rounded-full blur-xl transition-transform duration-300 group-hover:scale-125" />
                <Icon className="text-brand mb-4 size-5" />
                <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {card.text}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export function ProductTour() {
  const groups = [
    {
      title: "Authentication",
      icon: KeyRoundIcon,
      points: [
        "Email/password, magic links, reset and verification",
        "Session lifecycle with Better Auth",
      ],
    },
    {
      title: "Billing",
      icon: CircleDollarSignIcon,
      points: ["Polar subscriptions", "Usage-aware billing behavior"],
    },
    {
      title: "Teams",
      icon: Users2Icon,
      points: ["Organizations", "Invites", "Role-based access"],
    },
    {
      title: "Realtime backend",
      icon: DatabaseIcon,
      points: ["Reactive Convex data", "Fast mutations and sync"],
    },
    {
      title: "Operations",
      icon: BellRingIcon,
      points: ["Sentry", "Rate limits", "Notifications"],
    },
    {
      title: "Growth surfaces",
      icon: BarChart3Icon,
      points: ["Landing structure", "Blog and analytics wiring"],
    },
  ];

  return (
    <Section>
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
              Product tour
            </p>
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
              Every core system a commercial SaaS needs
            </h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <article
                key={group.title}
                className="border-border/70 from-card/80 to-card/30 rounded-2xl border bg-gradient-to-b p-5"
              >
                <div className="mb-4 flex items-center gap-2">
                  <Icon className="text-brand size-5" />
                  <h3 className="text-base font-semibold">{group.title}</h3>
                </div>
                <ul className="space-y-2">
                  {group.points.map((point) => (
                    <li
                      key={point}
                      className="text-muted-foreground flex items-start gap-2 text-sm leading-relaxed"
                    >
                      <CheckIcon className="text-brand mt-0.5 size-4 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export function FeatureCatalog() {
  return (
    <Section id="features">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
              Feature depth
            </p>
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
              Complete feature coverage, ready to ship
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm">
            No placeholder promises. This section maps directly to shipped
            capabilities in the source app.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featureCatalog.map((feature) => (
            <div
              key={feature}
              className="group border-border/70 bg-card/30 hover:border-brand/50 rounded-xl border px-4 py-3 text-sm transition-colors"
            >
              <p className="text-muted-foreground flex items-center gap-2 leading-relaxed">
                <CheckIcon className="text-brand size-4 shrink-0" />
                {feature}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function BuildVsBuy() {
  const rows = [
    ["Auth + recovery + verification", "2-3 weeks", "Included"],
    ["Billing + subscription management", "2-3 weeks", "Included"],
    ["Organizations + permissions", "3-4 weeks", "Included"],
    ["Realtime backend + notifications", "2-3 weeks", "Included"],
    ["Ops stack (monitoring + rate limiting)", "1-2 weeks", "Included"],
  ];

  return (
    <Section>
      <Container>
        <div className="mb-8 text-center">
          <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
            Decision support
          </p>
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
            Build vs buy: reclaim engineering time
          </h2>
        </div>
        <div className="border-border/70 bg-card/50 overflow-hidden rounded-2xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/30">
              <tr>
                <th className="p-4 font-semibold">Capability</th>
                <th className="p-4 font-semibold">Build yourself</th>
                <th className="p-4 font-semibold">With FluxKit</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]} className="border-border/60 border-t">
                  <td className="p-4">{row[0]}</td>
                  <td className="text-muted-foreground p-4">{row[1]}</td>
                  <td className="p-4 font-medium text-emerald-600 dark:text-emerald-400">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <article className="border-border/70 bg-card/40 rounded-xl border p-5 text-center">
            <p className="text-muted-foreground text-xs uppercase">
              Build from scratch
            </p>
            <p className="mt-2 text-3xl font-semibold">3-5 months</p>
          </article>
          <article className="border-brand/60 bg-brand/10 rounded-xl border p-5 text-center">
            <p className="text-muted-foreground text-xs uppercase">
              With FluxKit
            </p>
            <p className="mt-2 text-3xl font-semibold">Day 1</p>
          </article>
          <article className="border-border/70 bg-card/40 rounded-xl border p-5 text-center">
            <p className="text-muted-foreground text-xs uppercase">
              Estimated savings
            </p>
            <p className="mt-2 text-3xl font-semibold">300+ hours</p>
          </article>
        </div>
      </Container>
    </Section>
  );
}

export function SocialProof() {
  const cards = [
    {
      title: "Founder teams",
      quote:
        "We validated paid customer workflows in week one instead of burning a month on boilerplate.",
    },
    {
      title: "SaaS agencies",
      quote:
        "FluxKit became our standard delivery baseline and cut setup effort across projects.",
    },
    {
      title: "Product engineers",
      quote:
        "It gave us production confidence without locking us into brittle abstractions.",
    },
  ];

  return (
    <Section>
      <Container>
        <div className="mb-8 text-center">
          <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
            Social proof
          </p>
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
            Trusted by teams shipping paid SaaS
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="border-border/70 from-card/70 to-card/20 rounded-2xl border bg-gradient-to-b p-6"
            >
              <p className="mb-3 text-sm font-semibold">{card.title}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                &ldquo;{card.quote}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export function PricingSection() {
  return (
    <Section id="pricing">
      <Container>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
            Pricing
          </p>
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
            Commercial-first pricing for serious builders
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="border-border/70 bg-card/40 rounded-2xl border p-7">
            <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
              Free
            </p>
            <p className="mt-4 text-4xl font-semibold">$0</p>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Open-source baseline for evaluation, experimentation, and early
              validation.
            </p>
            <a
              href={siteConfig.pricing.free}
              className="border-border mt-6 inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium"
            >
              View on GitHub <ArrowRightIcon className="size-4" />
            </a>
          </article>
          <article className="border-brand/60 from-brand/15 to-card/70 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-7">
            <div className="bg-brand/30 pointer-events-none absolute -top-10 right-4 h-24 w-24 rounded-full blur-2xl" />
            <p className="text-xs font-semibold tracking-wider uppercase">
              Business
            </p>
            <p className="mt-4 text-4xl font-semibold">$399</p>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              One-time purchase for full commercial stack, unlimited projects,
              and lifetime updates.
            </p>
            <a
              href={siteConfig.pricing.pro}
              className="bg-foreground text-background mt-6 inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium"
            >
              Buy FluxKit <ArrowRightIcon className="size-4" />
            </a>
          </article>
        </div>
      </Container>
    </Section>
  );
}

export function PricingChecklist() {
  const businessChecks = [
    "Organizations, invitations, and role support",
    "Advanced dashboard and productivity modules",
    "Realtime notifications and data patterns",
    "Analytics + monitoring + rate limiting",
    "Commercial license with lifetime updates",
    "Unlimited project usage",
  ];

  return (
    <Section className="py-8 sm:py-12">
      <Container>
        <div className="border-border/70 bg-card/40 rounded-2xl border p-6 sm:p-8">
          <h3 className="mb-4 text-xl font-semibold sm:text-2xl">
            What Business unlocks
          </h3>
          <div className="grid gap-3 sm:grid-cols-2">
            {businessChecks.map((item) => (
              <p
                key={item}
                className="text-muted-foreground flex items-center gap-2 text-sm"
              >
                <CheckIcon className="size-4 text-emerald-500" />
                {item}
              </p>
            ))}
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <XIcon className="size-4" />
              No recurring subscription for starter access
            </p>
            <p className="text-muted-foreground flex items-center gap-2 text-sm">
              <FileCheck2Icon className="size-4" />
              Structured docs and setup guidance included
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function FaqSection() {
  return (
    <Section id="faq">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
              Objections handled
            </p>
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
              FAQ
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group border-border/70 bg-card/30 rounded-xl border p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-medium">
                  <span>{item.q}</span>
                  <SparklesIcon className="text-brand size-4 transition-transform group-open:rotate-12" />
                </summary>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function FinalCta() {
  return (
    <Section>
      <Container>
        <div className="border-border/70 from-card via-card to-brand/10 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-8 text-center sm:p-12">
          <div className="bg-brand/20 pointer-events-none absolute top-0 -left-8 h-24 w-24 rounded-full blur-2xl" />
          <div className="bg-brand/20 pointer-events-none absolute right-0 -bottom-10 h-32 w-32 rounded-full blur-2xl" />
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
            Ship your SaaS faster with FluxKit
          </h2>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
            Skip months of repetitive setup. Buy FluxKit and focus your team on
            revenue-producing features.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={siteConfig.pricing.pro}
              className="bg-foreground text-background inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium"
            >
              Buy FluxKit <ArrowRightIcon className="size-4" />
            </a>
            <a
              href={siteConfig.docsUrl}
              className="border-border inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-medium"
            >
              Read Docs
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export function LandingFooter() {
  const columns = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: siteConfig.docsUrl },
        { label: "GitHub", href: siteConfig.links.github },
        { label: "Discord", href: siteConfig.links.discord },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "Twitter", href: siteConfig.links.twitter },
        { label: "Contact", href: siteConfig.links.email },
      ],
    },
  ];

  return (
    <footer className="border-border/70 border-t px-4 py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <a
              href="/"
              className="mb-3 inline-flex items-center gap-2 text-lg font-semibold"
            >
              <FluxkitLogo size={24} className="rounded-md" />
              FluxKit
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Commercial SaaS starter for teams building with Next.js and
              Convex.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title} className="space-y-3">
              <p className="text-sm font-semibold">{column.title}</p>
              <div className="flex flex-col gap-2">
                {column.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-muted-foreground border-border/70 mt-8 border-t pt-4 text-sm">
          © 2026 FluxKit. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
