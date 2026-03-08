import { BriefcaseBusinessIcon, SparklesIcon } from "lucide-react";

import { siteConfig } from "@/config/site";

import { PricingColumn } from "../ui/pricing-column";
import { Section } from "../ui/section";

export function PricingSection() {
  const comparisonRows = [
    {
      feature: "Auth flows wired",
      pro: true,
      teams: true,
    },
    {
      feature: "Organizations + roles",
      pro: true,
      teams: true,
    },
    {
      feature: "Convex realtime backend",
      pro: true,
      teams: true,
    },
    {
      feature: "Billing groundwork",
      pro: true,
      teams: true,
    },
    {
      feature: "Setup docs + guidance",
      pro: true,
      teams: true,
    },
    {
      feature: "Shared UI primitives",
      pro: true,
      teams: true,
    },
    {
      feature: "Polished landing page",
      pro: true,
      teams: true,
    },
    {
      feature: "Dashboard foundations",
      pro: true,
      teams: true,
    },
    {
      feature: "Account + billing views",
      pro: true,
      teams: true,
    },
    {
      feature: "Settings screens",
      pro: true,
      teams: true,
    },
    {
      feature: "Pricing, FAQ, CTA",
      pro: true,
      teams: true,
    },
    {
      feature: "Premium styling system",
      pro: true,
      teams: true,
    },
    {
      feature: "Commercial license + updates",
      pro: true,
      teams: true,
    },
    {
      feature: "Team commercial use",
      pro: false,
      teams: true,
    },
    {
      feature: "Team-wide usage",
      pro: false,
      teams: true,
    },
    {
      feature: "Multi-seat access",
      pro: false,
      teams: true,
    },
  ];

  const plans = [
    {
      name: "FluxKit Pro",
      icon: <SparklesIcon className="size-4" />,
      description: "Single-user commercial license",
      price: 99,
      originalPrice: 149,
      promotionText: "One-time license",
      priceNote:
        "One-time license for solo builders.",
      cta: {
        variant: "default" as const,
        label: "Get Pro",
        href: siteConfig.pricing.pro,
      },
      features: comparisonRows.map((row) => ({
        label: row.feature,
        included: row.pro,
      })),
      variant: "default" as const,
      className: "w-full max-w-lg",
    },
    {
      name: "FluxKit Teams",
      icon: <BriefcaseBusinessIcon className="size-4" />,
      description: "Multi-seat internal team license",
      price: 249,
      originalPrice: 349,
      promotionText: "Team license",
      priceNote:
        "One-time license for teams and collaborators.",
      cta: {
        variant: "default" as const,
        label: "Get Teams",
        href: siteConfig.pricing.teams,
      },
      features: comparisonRows.map((row) => ({
        label: row.feature,
        included: row.teams,
      })),
      variant: "glow-brand" as const,
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
            Choose the package that fits how you ship.
          </h2>
          <p className="text-muted-foreground text-md max-w-[700px] font-medium sm:text-xl">
            One-time licenses only. Pro is for solo builders. Teams is the same
            product packaged for people building with collaborators instead of
            alone.
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
              originalPrice={plan.originalPrice}
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
