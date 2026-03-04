import Link from "next/link";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "What is Convex ShipFast?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Convex ShipFast is a production-ready SaaS boilerplate built with
          Next.js 16, Convex, Better Auth, Polar billing, and a modern dashboard
          architecture. It gives you a serious starting point for commercial
          products without rebuilding core infrastructure.
        </p>
      ),
    },
    {
      question: "What does the free tier include?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          The free open-source tier includes authentication flows, Polar
          payments, Brevo email integration, Convex setup, and testing/linting
          starter configuration. It is intentionally limited and does not include
          organization or teams support.
        </p>
      ),
    },
    {
      question: "What unlocks with the Business tier?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Business includes everything in free plus organizations, team and role
          support, full dashboard modules, polished landing page surfaces, and
          business-ready defaults for scaling product teams.
        </p>
      ),
    },
    {
      question: "Is Convex ShipFast customizable?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Yes. You own the code and can adapt UI, data models, auth flows,
          billing behavior, and infrastructure integrations. The stack is fully
          TypeScript-based for safer changes and faster iteration.
        </p>
      ),
    },
    {
      question: "How fast can I start development?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Most teams can start implementing product-specific features on day one.
          You can run Convex locally, start Next.js development, and begin from
          a clean foundation instead of weeks of setup work.
        </p>
      ),
    },
    {
      question: "Where can I find setup docs?",
      answer: (
        <p className="text-muted-foreground mb-4 max-w-[640px]">
          Start with the README and setup guide in the repository:{" "}
          <Link href={siteConfig.docsUrl} className="text-foreground underline">
            Convex ShipFast documentation
          </Link>
          .
        </p>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section id="faq" className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">{title}</h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}
