import { SparklesIcon } from "lucide-react";
import { Section } from "../ui/section";
import { Container } from "./container";

const faqs = [
    {
        q: "Who should buy FluxKit?",
        a: "FluxKit is for founders, indie makers, and product teams who want to ship paid SaaS faster without spending months rebuilding auth, billing, and infrastructure.",
    },
    {
        q: "Can I customize architecture and UI?",
        a: "Yes. You own the full codebase and can adapt auth flows, billing logic, schemas, and UI patterns for your product domain.",
    },
    {
        q: "How quickly can we go live?",
        a: "Most teams can begin shipping product-specific features on day one because the commercial SaaS foundations are already wired.",
    },
    {
        q: "Is this one-time pricing?",
        a: "Yes. Business tier is a one-time purchase with lifetime updates for the starter.",
    },
];

export function FaqSection() {
    return (
        <Section id="faq">
            <Container>
                <div className="mx-auto max-w-3xl">
                    <div className="mb-8 text-center">
                        <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
                            Objections handled
                        </p>
                        <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
                            FAQ
                        </h2>
                    </div>
                    <div className="space-y-3">
                        {faqs.map((item) => (
                            <details
                                key={item.q}
                                className="group border-border/70 bg-card/30 rounded-xl border p-5"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-medium">
                                    <span>{item.q}</span>
                                    <SparklesIcon className="text-brand size-4 transition-transform group-open:rotate-12" />
                                </summary>
                                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                    {item.a}
                                </p>
                            </details>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
