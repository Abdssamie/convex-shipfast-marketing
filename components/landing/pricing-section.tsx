import { siteConfig } from "@/config/site";
import { SparklesIcon } from "lucide-react";
import { PricingColumn } from "../ui/pricing-column";
import { Section } from "../ui/section";

export function PricingSection() {
    const plan = {
        name: "FluxKit Business",
        icon: <SparklesIcon className="size-4" />,
        description: "For founders and teams shipping paid SaaS faster",
        price: 299,
        priceNote:
            "One-time purchase for full commercial stack. Unlimited projects. Lifetime access. Free updates.",
        cta: {
            variant: "glow" as const,
            label: "Buy FluxKit",
            href: siteConfig.pricing.pro,
        },
        features: [
            "Email/password auth, magic links & reset",
            "Organization workspaces & role-based access",
            "Polar subscriptions & billing lifecycle",
            "Usage-aware billing and account controls",
            "Convex realtime queries and live sync",
            "Analytics wiring & Sentry monitoring",
            "Dashboard architecture & productivity modules",
            "Landing UI and blog growth surfaces",
            "Type-safe end-to-end TypeScript baseline",
            "Commercial license with unlimited project usage",
        ],
        variant: "glow-brand" as const,
    };

    return (
        <Section id="pricing" className="py-16 sm:py-24">
            <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
                <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
                    <p className="text-brand text-xs font-semibold tracking-[0.16em] uppercase">
                        Pricing
                    </p>
                    <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                        Pay once. Use forever.
                    </h2>
                    <p className="text-muted-foreground text-md max-w-[600px] font-medium sm:text-xl">
                        Get lifetime access to the full commercial SaaS stack. No recurring
                        fees. Just simple, transparent pricing.
                    </p>
                </div>
                <div className="max-w-container mx-auto flex w-full justify-center px-4">
                    <PricingColumn
                        name={plan.name}
                        icon={plan.icon}
                        description={plan.description}
                        price={plan.price}
                        priceNote={plan.priceNote}
                        cta={plan.cta}
                        features={plan.features}
                        variant={plan.variant}
                        className="w-full max-w-lg"
                    />
                </div>
            </div>
        </Section>
    );
}
