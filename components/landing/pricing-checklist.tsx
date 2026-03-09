import { CheckIcon, FileCheck2Icon, XIcon } from "lucide-react";

import { Section } from "../ui/section";
import { Container } from "./container";

export function PricingChecklist() {
    const businessChecks = [
        "Organizations, invitations, and role support",
        "Advanced dashboard and productivity modules",
        "Polar checkout and customer portal wiring",
        "Better Auth flows (OAuth, magic links, reset)",
        "Realtime notifications and data patterns",
        "Brevo or Resend transactional email support",
        "Analytics + monitoring + rate limiting",
        "Commercial license with lifetime updates",
        "Unlimited project usage",
    ];

    return (
        <Section className="py-8 sm:py-12">
            <Container>
                <div className="border-border/70 bg-card/40 rounded-2xl border p-6 sm:p-8">
                    <h3 className="mb-4 text-xl font-semibold sm:text-2xl">
                        What Business unlocks
                    </h3>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {businessChecks.map((item) => (
                            <p
                                key={item}
                                className="text-muted-foreground flex items-center gap-2 text-sm"
                            >
                                <CheckIcon className="size-4 text-emerald-500" />
                                {item}
                            </p>
                        ))}
                        <p className="text-muted-foreground flex items-center gap-2 text-sm">
                            <XIcon className="size-4" />
                            No recurring subscription for starter access
                        </p>
                        <p className="text-muted-foreground flex items-center gap-2 text-sm">
                            <FileCheck2Icon className="size-4" />
                            Structured docs and setup guidance included
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
