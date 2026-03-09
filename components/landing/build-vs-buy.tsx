import { CheckCircle2 } from "lucide-react";

import { Section } from "../ui/section";
import { Container } from "./container";

export function BuildVsBuy() {
    const rows = [
        ["Auth (email + OAuth + magic links)", "2-3 weeks", "Included"],
        ["Billing (Polar checkout + portal + webhooks)", "1-2 weeks", "Included"],
        ["Organizations, invitations, and roles", "3-4 weeks", "Included"],
        ["Realtime backend + notifications", "2-3 weeks", "Included"],
        ["Ops + email providers (Sentry, Upstash, Brevo/Resend)", "1-2 weeks", "Included"],
    ];

    return (
        <Section>
            <Container>
                <div className="mb-12 text-center max-w-3xl mx-auto">
                    <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
                        Decision support
                    </p>
                    <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
                        Build vs buy: reclaim engineering time
                    </h2>
                </div>

                <div className="glass-1 dark:glass-3 relative mx-auto max-w-5xl flex flex-col gap-6 overflow-hidden rounded-2xl p-6 sm:p-10 shadow-xl">
                    <hr className="via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent" />

                    {/* Header */}
                    <div className="hidden sm:grid grid-cols-3 gap-6 pb-4 border-b border-border/40 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        <div>Capability</div>
                        <div>Build yourself</div>
                        <div>With FluxKit</div>
                    </div>

                    {/* Rows */}
                    <div className="flex flex-col gap-2">
                        {rows.map((row, index) => (
                            <div key={row[0]} className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-4 items-center ${index !== rows.length - 1 ? 'border-b border-border/40' : ''}`}>
                                <div className="font-medium text-lg sm:text-base">{row[0]}</div>
                                <div className="text-muted-foreground flex items-center justify-between sm:block">
                                    <span className="sm:hidden text-xs uppercase font-semibold">Build yourself</span>
                                    <span>{row[1]}</span>
                                </div>
                                <div className="flex items-center justify-between sm:justify-start gap-2">
                                    <span className="sm:hidden text-xs uppercase font-semibold text-muted-foreground">With FluxKit</span>
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="text-brand size-5 shrink-0" />
                                        <span className="font-medium">{row[2]}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mx-auto mt-8 grid max-w-5xl gap-6 sm:grid-cols-3">
                    <article className="glass-1 dark:glass-3 relative flex flex-col gap-2 overflow-hidden rounded-2xl p-8 text-center sm:text-left shadow-xl">
                        <hr className="via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent" />
                        <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">
                            Build from scratch
                        </p>
                        <p className="mt-1 text-4xl font-bold tracking-tight">6-8 weeks</p>
                    </article>

                    <article className="glass-3 from-card/100 to-card/100 dark:glass-4 relative flex flex-col gap-2 overflow-hidden rounded-2xl p-8 text-center sm:text-left shadow-xl after:content-[''] after:absolute after:-top-[128px] after:left-1/2 after:h-[128px] after:w-[100%] after:max-w-[960px] after:-translate-x-1/2 after:rounded-[50%] after:bg-brand-foreground/70 after:blur-[72px]">
                        <hr className="via-brand absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent z-10" />
                        <p className="text-brand text-sm font-semibold uppercase tracking-wider relative z-10">
                            With FluxKit
                        </p>
                        <p className="mt-1 text-4xl font-bold tracking-tight relative z-10">Day 1</p>
                    </article>

                    <article className="glass-1 dark:glass-3 relative flex flex-col gap-2 overflow-hidden rounded-2xl p-8 text-center sm:text-left shadow-xl">
                        <hr className="via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent" />
                        <p className="text-muted-foreground text-sm font-semibold uppercase tracking-wider">
                            Estimated savings
                        </p>
                        <p className="mt-1 text-4xl font-bold tracking-tight">300+ hours</p>
                    </article>
                </div>
            </Container>
        </Section>
    );
}
