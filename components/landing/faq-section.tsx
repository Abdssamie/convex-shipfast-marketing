import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/config/site";

import { Section } from "../ui/section";
import { Container } from "./container";

const faqs = [
  {
    q: "What is included in the open-source version?",
    a: "The open-source version gives you the core application foundation, backend flows, authentication baseline, billing wiring, and the main implementation starting point for building your product.",
  },
  {
    q: "What do I get with FluxKit Pro?",
    a: "FluxKit Pro adds the premium landing page system, polished dashboard surfaces, refined app shell, and the higher-end frontend presentation layer intended to help you launch faster.",
  },
  {
    q: "Can I start with open source and upgrade later?",
    a: "Yes. You can begin on the open-source foundation and move to Pro when you want the premium landing and dashboard experience without rebuilding those surfaces yourself.",
  },
  {
    q: "Is FluxKit Pro a subscription?",
    a: "No. FluxKit Pro is a one-time purchase with lifetime access and ongoing updates for the premium package.",
  },
  {
    q: "Can I use FluxKit Pro for multiple projects?",
    a: "Yes. The Pro plan is positioned for unlimited project usage under the commercial license included with the purchase.",
  },
  {
    q: "Can I customize the code and design?",
    a: "Yes. You own the code you work from and can adapt architecture, UI, data models, flows, branding, and product-specific behavior to fit your use case.",
  },
  {
    q: "Who is FluxKit for?",
    a: "FluxKit is for founders, indie makers, agencies, and product teams who want to ship a serious SaaS product without spending months rebuilding the same base systems.",
  },
  {
    q: "How quickly can we launch with it?",
    a: "Most teams can start implementing product-specific features immediately because the foundation work is already done. The speedup is biggest when you use the existing structure instead of replacing it upfront.",
  },
  {
    q: "Does the docs site explain the setup and feature split?",
    a: (
      <>
        Yes. The documentation covers setup, feature guides, deployment, and
        the product structure. See{" "}
        <Link href={siteConfig.docsUrl} className="text-foreground underline">
          the docs
        </Link>
        .
      </>
    ),
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

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.q}
                value={`faq-${index + 1}`}
                className="border-border/70 bg-card/30 mb-3 rounded-xl border px-5"
              >
                <AccordionTrigger className="hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
