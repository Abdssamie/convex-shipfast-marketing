import {
    BarChart3Icon,
    BellRingIcon,
    CheckIcon,
    CircleDollarSignIcon,
    DatabaseIcon,
    KeyRoundIcon,
    Users2Icon,
} from "lucide-react";
import { Section } from "../ui/section";
import { Container } from "./container";

export function ProductTour() {
    const groups = [
        {
            title: "Authentication",
            icon: KeyRoundIcon,
            points: [
                "Email/password, magic links, reset and verification",
                "Session lifecycle with Better Auth",
            ],
        },
        {
            title: "Billing",
            icon: CircleDollarSignIcon,
            points: ["Polar subscriptions", "Usage-aware billing behavior"],
        },
        {
            title: "Teams",
            icon: Users2Icon,
            points: ["Organizations", "Invites", "Role-based access"],
        },
        {
            title: "Realtime backend",
            icon: DatabaseIcon,
            points: ["Reactive Convex data", "Fast mutations and sync"],
        },
        {
            title: "Operations",
            icon: BellRingIcon,
            points: ["Sentry", "Rate limits", "Notifications"],
        },
        {
            title: "Growth surfaces",
            icon: BarChart3Icon,
            points: ["Landing structure", "Blog and analytics wiring"],
        },
    ];

    return (
        <Section>
            <Container>
                <div className="mb-10 flex items-end justify-between gap-4">
                    <div className="max-w-3xl">
                        <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
                            Product tour
                        </p>
                        <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
                            Every core system a commercial SaaS needs
                        </h2>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {groups.map((group) => {
                        const Icon = group.icon;
                        return (
                            <article
                                key={group.title}
                                className="border-border/70 from-card/80 to-card/30 rounded-2xl border bg-gradient-to-b p-5"
                            >
                                <div className="mb-4 flex items-center gap-2">
                                    <Icon className="text-brand size-5" />
                                    <h3 className="text-base font-semibold">{group.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {group.points.map((point) => (
                                        <li
                                            key={point}
                                            className="text-muted-foreground flex items-start gap-2 text-sm leading-relaxed"
                                        >
                                            <CheckIcon className="text-brand mt-0.5 size-4 shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </Section>
    );
}
