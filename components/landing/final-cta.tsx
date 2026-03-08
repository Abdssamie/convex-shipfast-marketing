import { ArrowRightIcon } from "lucide-react";

import { siteConfig } from "@/config/site";

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
                        Skip the blank-canvas phase and start from a product surface
                        that already looks ready to ship.
                    </p>
                    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                        <a
                            href={siteConfig.getStartedUrl}
                            className="bg-foreground text-background inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-medium"
                        >
                            Get Started <ArrowRightIcon className="size-4" />
                        </a>
                        <a
                            href={siteConfig.demoUrl}
                            className="border-border inline-flex items-center justify-center rounded-md border px-5 py-3 text-sm font-medium"
                        >
                            Show Demo
                        </a>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
