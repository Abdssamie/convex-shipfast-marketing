import Link from "next/link";

const sections = [
  {
    title: "Getting Started",
    body: "Install dependencies with Bun, run the marketing app, and understand where the public site and Convex backend entrypoints live.",
    href: "/docs/getting-started",
  },
  {
    title: "Features",
    body: "Review the shipped app foundation, premium frontend surfaces, and the billing integration boundary before you customize the product.",
    href: "/docs/features",
  },
  {
    title: "Billing",
    body: "Use the Convex Polar component wiring to sync products, process webhooks, and gate premium access from backend state.",
    href: "/docs/features/billing",
  },
  {
    title: "Deployment",
    body: "Prepare canonical URLs, Convex env vars, monitoring, and Polar webhook configuration before opening the product publicly.",
    href: "/docs/deployment",
  },
];

export default function DocsIndexPage() {
  return (
    <article className="rounded-2xl border bg-card/40 p-8 shadow-sm sm:p-10">
      <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
        FluxKit docs
      </p>
      <h1 className="text-4xl font-semibold tracking-tight">Documentation</h1>
      <p className="text-muted-foreground mt-4 max-w-3xl text-base leading-7">
        FluxKit ships as a combined marketing site, docs surface, and app
        foundation. These pages cover the production setup path, the current
        feature split, and the new Polar billing integration points inside
        Convex.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="hover:border-brand/50 rounded-2xl border bg-background/60 p-5 transition-colors"
          >
            <h2 className="text-lg font-semibold">{section.title}</h2>
            <p className="text-muted-foreground mt-2 text-sm leading-6">
              {section.body}
            </p>
          </Link>
        ))}
      </div>
    </article>
  );
}
