import { siteConfig } from "@/config/site";
import { ArrowRightIcon } from "lucide-react";
import { Section } from "../ui/section";
import { Container } from "./container";

export function FinalCta() {
    return (
        <Section>
            <Container>
                <div className="border-border/70 from-card via-card to-brand/10 relative overflow-hidden rounded-2xl border bg-gradient-to-br p-8 text-center sm:p-12">
                    <div className="bg-brand/20 pointer-events-none absolute top-0 -left-8 h-24 w-24 rounded-full blur-2xl" />
                    <div className="bg-brand/20 pointer-events-none absolute right-0 -bottom-10 h-32 w-32 rounded-full blur-2xl" />
                    <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
                        Ship your SaaS faster with FluxKit
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base leading-relaxed sm:text-lg">
                        Skip months of repetitive setup. Buy FluxKit and focus your team on
                        revenue-producing features.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <a
                            href={siteConfig.pricing.pro}
                            className="bg-foreground text-background inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium"
                        >
                            Buy FluxKit <ArrowRightIcon className="size-4" />
                        </a>
                        <a
                            href={siteConfig.docsUrl}
                            className="border-border inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-medium"
                        >
                            Read Docs
                        </a>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
