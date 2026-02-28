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
  title = "Simple, transparent pricing",
  description = "Start with our open-source version or unlock everything with Pro. One-time payment, lifetime access.",
  plans = [
    {
      name: "Free",
      icon: <Github className="size-4" />,
      description: "Perfect for learning and personal projects",
      price: 0,
      priceNote: "MIT License. Community updates.",
      cta: {
        variant: "default",
        label: "Get Free Version",
        href: siteConfig.pricing.free,
      },
      features: [
        "GitHub repository access",
        "Basic authentication",
        "Core Convex integration",
        "Community support",
        "MIT License",
        "Community updates",
      ],
      variant: "default",
    },
    {
      name: "Pro",
      description: "Everything you need to launch and scale your SaaS",
      price: 399,
      priceNote: "Lifetime access. Unlimited projects. Commercial license.",
      cta: {
        variant: "glow",
        label: "Buy Pro Version",
        href: siteConfig.pricing.pro,
      },
      features: [
        "Everything in Free, plus:",
        "Stripe billing integration",
        "Multi-tenancy/organizations",
        "Admin dashboard",
        "Real-time features",
        "File storage system",
        "Email system with templates",
        "AI integration examples",
        "Blog & documentation templates",
        "Landing page templates",
        "Priority Discord support",
        "Lifetime updates",
        "Commercial license",
        "Unlimited projects",
        "Private GitHub repo access",
      ],
      variant: "glow-brand",
    },
  ],
  className = "",
}: PricingProps) {
  return (
    <Section className={cn(className)}>
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
                    <th className="p-4 text-center font-semibold">Pro</th>
                  </tr>
                </thead>
                <tbody className="divide-input divide-y">
                  <tr>
                    <td className="p-4 text-sm">GitHub repository access</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Basic authentication</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Core Convex integration</td>
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
                    <td className="p-4 text-sm">Stripe billing integration</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Multi-tenancy/organizations</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Admin dashboard</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Real-time features</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">File storage system</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Email system with templates</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">AI integration examples</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">
                      Blog & documentation templates
                    </td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Landing page templates</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Priority Discord support</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
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
                    <td className="p-4 text-sm">Unlimited projects</td>
                    <td className="p-4 text-center">
                      <Check className="text-muted-foreground mx-auto size-5" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="text-brand-foreground mx-auto size-5" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-sm">Private GitHub repo access</td>
                    <td className="p-4 text-center">
                      <X className="text-muted-foreground/30 mx-auto size-5" />
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
