import { siteConfig } from "@/config/site";
import { GithubIcon, SparklesIcon } from "lucide-react";
import { PricingColumn } from "../ui/pricing-column";
import { Section } from "../ui/section";

export function PricingSection() {
  const plans = [
    {
      name: "FluxKit Open Source",
      icon: <GithubIcon className="size-4" />,
      description: "Backend foundation for free",
      price: 0,
      priceNote: "Free access to the open-source app foundation.",
      cta: {
        variant: "glow" as const,
        label: "Get Open Source",
        href: siteConfig.pricing.free,
      },
      features: [
        "Authentication flows and account foundations",
        "Organizations, invites, and role support",
        "Billing backend logic and lifecycle wiring",
        "Convex realtime patterns and core app architecture",
        "TypeScript, Next.js, and shared UI baseline",
        "Documentation and setup guidance",
      ],
      variant: "default" as const,
      className: "w-full max-w-lg",
    },
    {
      name: "FluxKit Pro",
      icon: <SparklesIcon className="size-4" />,
      description: "Premium landing page and dashboard",
      price: 299,
      promotionText: "Most popular",
      priceNote: "One-time purchase. Unlimited projects. Lifetime updates.",
      cta: {
        variant: "default" as const,
        label: "Buy FluxKit",
        href: siteConfig.pricing.pro,
      },
      features: [
        "Premium marketing landing page system",
        "Production-ready dashboard UI and app shell",
        "Polished hero, pricing, FAQ, and CTA sections",
        "Premium page layouts for launch and conversion",
        "Refined dashboard screens and settings experience",
        "Built-in navigation, structure, and responsive polish",
        "Ready-made SaaS presentation layer for demos and sales",
        "Higher-end visual treatment across public and app surfaces",
        "Refined SaaS navigation and page composition",
        "Commercial-grade presentation and conversion surfaces",
        "Polished user-facing layouts for faster launch",
        "Lifetime updates for premium frontend surfaces",
        "Commercial license with unlimited project usage",
      ],
      variant: "default" as const,
      className:
        "w-full max-w-lg border-brand/30 bg-card lg:-translate-y-2 lg:scale-[1.02]",
    },
  ];

  return (
    <Section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
          <p className="text-brand text-xs font-semibold tracking-[0.16em] uppercase">
            Pricing
          </p>
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            Start free. Upgrade once.
          </h2>
          <p className="text-muted-foreground text-md max-w-[700px] font-medium sm:text-xl">
            Start with the open-source backend and app foundation, then upgrade
            when you want the premium landing page and dashboard experience.
          </p>
        </div>

        <div className="max-w-container mx-auto grid w-full gap-6 px-4 lg:grid-cols-2 lg:items-start">
          {plans.map((plan) => (
            <PricingColumn
              key={plan.name}
              name={plan.name}
              icon={plan.icon}
              description={plan.description}
              price={plan.price}
              promotionText={plan.promotionText}
              priceNote={plan.priceNote}
              cta={plan.cta}
              features={plan.features}
              variant={plan.variant}
              className={plan.className}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
