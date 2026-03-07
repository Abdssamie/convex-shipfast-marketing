import {
    CircleDollarSignIcon,
    Clock3Icon,
    ShieldCheckIcon,
} from "lucide-react";

import { Section } from "../ui/section";
import { Container } from "./container";

export function CommercialValue() {
    const cards = [
        {
            title: "Launch in days",
            text: "Ship paid product features quickly instead of spending weeks on setup and glue code.",
            icon: Clock3Icon,
        },
        {
            title: "Reduce execution risk",
            text: "Use battle-tested foundations for auth, billing, and operations from the first commit.",
            icon: ShieldCheckIcon,
        },
        {
            title: "Monetize sooner",
            text: "Deploy with subscription-ready flows and focus engineering effort on what customers pay for.",
            icon: CircleDollarSignIcon,
        },
    ];

    return (
        <Section className="pt-8 sm:pt-14">
            <Container>
                <div className="mx-auto mb-10 max-w-3xl text-center">
                    <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
                        Commercial outcomes
                    </p>
                    <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
                        Built for teams that need speed and quality together
                    </h2>
                </div>
                <div className="grid gap-4 md:grid-cols-3">
                    {cards.map((card) => {
                        const Icon = card.icon;
                        return (
                            <article
                                key={card.title}
                                className="group border-border/70 bg-card/60 relative overflow-hidden rounded-2xl border p-6"
                            >
                                <div className="bg-brand/15 absolute -top-12 right-0 h-24 w-24 rounded-full blur-xl transition-transform duration-300 group-hover:scale-125" />
                                <Icon className="text-brand mb-4 size-5" />
                                <h3 className="mb-2 text-xl font-semibold">{card.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    {card.text}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
