import { Section } from "../ui/section";
import { Container } from "./container";

export function BuildVsBuy() {
    const rows = [
        ["Auth + recovery + verification", "2-3 weeks", "Included"],
        ["Billing + subscription management", "2-3 weeks", "Included"],
        ["Organizations + permissions", "3-4 weeks", "Included"],
        ["Realtime backend + notifications", "2-3 weeks", "Included"],
        ["Ops stack (monitoring + rate limiting)", "1-2 weeks", "Included"],
    ];

    return (
        <Section>
            <Container>
                <div className="mb-8 text-center">
                    <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
                        Decision support
                    </p>
                    <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
                        Build vs buy: reclaim engineering time
                    </h2>
                </div>
                <div className="border-border/70 bg-card/50 overflow-hidden rounded-2xl border">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-muted/30">
                            <tr>
                                <th className="p-4 font-semibold">Capability</th>
                                <th className="p-4 font-semibold">Build yourself</th>
                                <th className="p-4 font-semibold">With FluxKit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row) => (
                                <tr key={row[0]} className="border-border/60 border-t">
                                    <td className="p-4">{row[0]}</td>
                                    <td className="text-muted-foreground p-4">{row[1]}</td>
                                    <td className="p-4 font-medium text-emerald-600 dark:text-emerald-400">
                                        {row[2]}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                    <article className="border-border/70 bg-card/40 rounded-xl border p-5 text-center">
                        <p className="text-muted-foreground text-xs uppercase">
                            Build from scratch
                        </p>
                        <p className="mt-2 text-3xl font-semibold">3-5 months</p>
                    </article>
                    <article className="border-brand/60 bg-brand/10 rounded-xl border p-5 text-center">
                        <p className="text-muted-foreground text-xs uppercase">
                            With FluxKit
                        </p>
                        <p className="mt-2 text-3xl font-semibold">Day 1</p>
                    </article>
                    <article className="border-border/70 bg-card/40 rounded-xl border p-5 text-center">
                        <p className="text-muted-foreground text-xs uppercase">
                            Estimated savings
                        </p>
                        <p className="mt-2 text-3xl font-semibold">300+ hours</p>
                    </article>
                </div>
            </Container>
        </Section>
    );
}
