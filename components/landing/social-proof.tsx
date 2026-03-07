import { Section } from "../ui/section";
import { Container } from "./container";

export function SocialProof() {
    const cards = [
        {
            title: "Founder teams",
            quote:
                "We validated paid customer workflows in week one instead of burning a month on boilerplate.",
        },
        {
            title: "SaaS agencies",
            quote:
                "FluxKit became our standard delivery baseline and cut setup effort across projects.",
        },
        {
            title: "Product engineers",
            quote:
                "It gave us production confidence without locking us into brittle abstractions.",
        },
    ];

    return (
        <Section>
            <Container>
                <div className="mb-8 text-center">
                    <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
                        Social proof
                    </p>
                    <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
                        Trusted by teams shipping paid SaaS
                    </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {cards.map((card) => (
                        <article
                            key={card.title}
                            className="border-border/70 from-card/70 to-card/20 rounded-2xl border bg-gradient-to-b p-6"
                        >
                            <p className="mb-3 text-sm font-semibold">{card.title}</p>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                &ldquo;{card.quote}&rdquo;
                            </p>
                        </article>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
