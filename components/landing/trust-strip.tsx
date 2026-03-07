import { CheckIcon } from "lucide-react";
import FluxkitLogo from "../ui/fluxkit-logo";
import { Section } from "../ui/section";
import { Container } from "./container";

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
