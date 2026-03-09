import { ArrowRightIcon, BriefcaseBusinessIcon } from "lucide-react";

import { siteConfig } from "@/config/site";

import { Button } from "../ui/button";
import { Section } from "../ui/section";

export function PricingSection() {
  return (
    <Section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-4 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase backdrop-blur">
          <BriefcaseBusinessIcon className="size-3.5" />
          Team Licensing
        </div>
        <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
          Need a Team License for FluxKit?
        </h2>
        <p className="text-muted-foreground text-md max-w-[760px] font-medium sm:text-xl">
          Built for teams that need multi-seat usage, internal collaboration,
          and a clear commercial licensing path.
        </p>
        <div className="flex items-center justify-center">
          <Button
            size="xl"
            className="bg-brand hover:bg-brand/90 px-8 py-3 text-lg text-white"
            asChild
          >
            <a
              href={siteConfig.pricing.teams}
              className="inline-flex items-center gap-2"
            >
              <span>Get Teams License</span>
              <ArrowRightIcon className="size-4 shrink-0" />
            </a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
