import { Check, Github, X } from "lucide-react";

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
  title = "Pricing for Open Source and Growth Teams",
  description = "Start free for core auth-first product setup, then upgrade to unlock organizations, complete product surfaces, and business-ready workflows.",
  plans = [
    {
      name: "Free",
      icon: <Github className="size-4" />,
      description: "Open-source starter for auth-first products and solo builders.",
      price: 0,
      priceNote: "MIT license. Community support and updates.",
      cta: {
        variant: "default",
        label: "Get Free Tier",
        href: siteConfig.pricing.free,
      },
      features: [
        "Email/password authentication",
        "Magic links and verification",
        "Polar payments integration",
        "Brevo email integration",
        "Convex backend setup",
        "Testing and linting starter setup",
        "TypeScript and Next.js baseline",
        "Open-source code access",
        "No organization or teams support",
        "No advanced dashboard modules",
        "Community support",
      ],
      variant: "default",
    },
    {
      name: "Business",
      description: "Full Convex ShipFast stack for teams shipping commercial SaaS.",
      price: 399,
      priceNote: "One-time payment. Lifetime updates. Commercial use.",
      cta: {
        variant: "glow",
        label: "Get Business Tier",
        href: siteConfig.pricing.pro,
      },
      features: [
        "Everything in Free, plus:",
        "Organizations and team management",
        "Role-based access control",
        "Complete dashboard experience",
        "Landing page and content surfaces",
        "Advanced analytics modules",
        "Production notifications patterns",
        "Business-ready architecture defaults",
        "Priority support",
        "Lifetime updates",
        "Commercial license",
        "Unlimited projects",
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
                    <th className="p-4 text-center font-semibold">Free</th>
                    <th className="p-4 text-center font-semibold">Business</th>
                  </tr>
                </thead>
                <tbody className="divide-input divide-y">
                  <tr>
                    <td className="p-4 text-sm">Email/password auth</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Magic links + verification</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Convex backend setup</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Polar payments</td>
                    <td className="p-4 text-center">
                        <Check className="text-muted-foreground mx-auto size-5" />
                      </td>
                      <td className="p-4 text-center">
                        <Check className="text-brand-foreground mx-auto size-5" />
                      </td>
                    </tr>
                    <tr>
                    <td className="p-4 text-sm">Brevo email integration</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Organizations and teams</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Dashboard modules</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Landing page sections</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Testing starter setup</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Analytics + monitoring setup</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Rate limiting patterns</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">
                      Commercial project use
                    </td>
                    <td className="p-4 text-center">
                      <span className="text-muted-foreground text-xs">MIT</span>
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
                    <td className="p-4 text-sm">Unlimited projects</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Community support</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Commercial license</td>
                    <td className="p-4 text-center">
                      <span className="text-muted-foreground text-xs">MIT</span>
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Lifetime updates</td>
                    <td className="p-4 text-center">
                      <span className="text-muted-foreground text-xs">
                        Community
                      </span>
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
