import { CheckIcon } from "lucide-react";
import { Section } from "../ui/section";
import { Container } from "./container";

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
