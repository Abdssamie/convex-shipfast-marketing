import Link from "next/link";

const featureCards = [
  {
    title: "Open-source foundation",
    body: "Authentication, organizations, realtime architecture, shared UI primitives, and the main application baseline.",
  },
  {
    title: "Pro frontend surfaces",
    body: "Premium landing page sections, polished dashboard shell, and the public presentation layer used for launch and conversion.",
  },
  {
    title: "Billing integration",
    body: "Polar subscriptions are mounted in Convex so plans, checkout, and customer portal flows can be driven from backend state.",
    href: "/docs/features/billing",
  },
];

export default function DocsFeaturesPage() {
  return (
    <article className="rounded-2xl border bg-card/40 p-8 shadow-sm sm:p-10">
      <h1 className="text-3xl font-semibold tracking-tight">Features</h1>
      <p className="text-muted-foreground mt-4 text-base leading-7">
        FluxKit is intentionally split between a public open-source app
        foundation and a paid presentation layer. Billing lives at the boundary
        between those two, because entitlements affect both the app shell and
        the commercial surface.
      </p>

      <div className="mt-8 grid gap-4">
        {featureCards.map((card) =>
          card.href ? (
            <Link
              key={card.title}
              href={card.href}
              className="hover:border-brand/50 rounded-2xl border bg-background/60 p-5 transition-colors"
            >
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-muted-foreground mt-2 text-sm leading-6">
                {card.body}
              </p>
            </Link>
          ) : (
            <section
              key={card.title}
              className="rounded-2xl border bg-background/60 p-5"
            >
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <p className="text-muted-foreground mt-2 text-sm leading-6">
                {card.body}
              </p>
            </section>
          ),
        )}
      </div>
    </article>
  );
}
