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
    q: "What do I get with FluxKit Pro?",
    a: "FluxKit Pro gives you the finished commercial starter: the premium landing page, polished dashboard shell, settings and account surfaces, and the underlying app foundation already wired around auth, organizations, and billing flows.",
  },
  {
    q: "Who is FluxKit Teams for?",
    a: "FluxKit Teams is for agencies, multi-developer startups, and internal product teams that need broader commercial coverage, smoother onboarding, and higher-touch support than the standard Pro package.",
  },
  {
    q: "Why buy Pro instead of building from scratch?",
    a: "Because the expensive work is not only backend setup. Pro saves the time it takes to finish the product surface: landing page, app shell, account flows, settings, billing states, and the visual polish that makes a SaaS feel ready to sell.",
  },
  {
    q: "Is FluxKit Pro a subscription?",
    a: "No. FluxKit Pro is a one-time purchase with lifetime access and ongoing updates for the premium package.",
  },
  {
    q: "What is the difference between Pro and Teams?",
    a: "Both plans include the product itself. Teams adds broader usage rights and a more hands-on commercial package for multi-person teams that want a smoother rollout and support path.",
  },
  {
    q: "Can I customize the code and design?",
    a: "Yes. You own the code you work from and can adapt architecture, UI, data models, flows, branding, and product-specific behavior to fit your use case.",
  },
  {
    q: "Can I use my license for a client project?",
    a: "Client work requires a separate license purchased for that client. Your own license covers your internal use only.",
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
  {
    q: "How can I contact support?",
    a: (
      <>
        Email support at{" "}
        <Link
          href="mailto:abdessamie.elmoubarki@gmail.com"
          className="text-foreground underline"
        >
          abdessamie.elmoubarki@gmail.com
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
