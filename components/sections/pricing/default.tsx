import { BriefcaseBusinessIcon, Check, SparklesIcon, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { PricingColumn, PricingColumnProps } from "../../ui/pricing-column";
import { Section } from "../../ui/section";

interface PricingProps {
  title?: string | false;
  description?: string | false;
  plans?: PricingColumnProps[] | false;
  className?: string;
}

export default function Pricing({
  title = "Pricing for Pro and Teams",
  description = "One-time licenses for founders and teams. No subscriptions.",
  plans = [
    {
      name: "Pro",
      icon: <SparklesIcon className="size-4" />,
      description: "Single-user commercial license with lifetime updates.",
      price: 135,
      originalPrice: 200,
      promotionText: "One-time license",
      priceNote: "One-time payment. Delivered via Gumroad.",
      cta: {
        variant: "default",
        label: "Get Pro",
        href: siteConfig.pricing.pro,
      },
      features: [
        { label: "Single-seat commercial use", included: true },
        { label: "Lifetime updates", included: true },
        { label: "Auth foundation", included: true },
        { label: "Dashboard foundation", included: true },
        { label: "Gumroad checkout", included: true },
        { label: "Landing page content", included: true },
        { label: "Testing + linting setup", included: true },
        { label: "Priority bug fixes", included: true },
      ],
      variant: "default",
    },
    {
      name: "Teams",
      icon: <BriefcaseBusinessIcon className="size-4" />,
      description: "Multi-seat internal team license with priority support.",
      price: 90,
      originalPrice: 349,
      promotionText: "Team license",
      priceNote: "One-time payment. Delivered via Gumroad.",
      cta: {
        variant: "glow",
        label: "Get Teams",
        href: siteConfig.pricing.teams,
      },
      features: [
        { label: "Everything in Pro", included: true },
        { label: "Multi-seat internal access", included: true },
        { label: "Team-wide commercial use", included: true },
        { label: "Priority support", included: true },
      ],
      variant: "glow-brand",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section id="pricing" className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {plans !== false && plans.length > 0 && (
          <div className="max-w-container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
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
        )}

        {/* Feature Comparison Table */}
        <div className="w-full max-w-4xl px-4">
          <div className="glass-1 dark:glass-3 overflow-hidden rounded-2xl shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-input border-b">
                    <th className="p-4 text-left font-semibold">Features</th>
                    <th className="p-4 text-center font-semibold">Pro</th>
                    <th className="p-4 text-center font-semibold">Teams</th>
                  </tr>
                </thead>
                <tbody className="divide-input divide-y">
                  <tr>
                    <td className="p-4 text-sm">Auth flows already wired</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">
                      Organizations and role support
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">
                      Convex backend and realtime foundation
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Gumroad one-time checkout</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">
                      Landing page and dashboard shell
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">
                      Commercial license and lifetime updates
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">
                      Team-friendly commercial usage
                    </td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Priority support</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">
                      Multi-seat internal team access
                    </td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
