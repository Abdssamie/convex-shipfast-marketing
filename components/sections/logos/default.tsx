import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import Clerk from "../../logos/clerk";
import Convex from "../../logos/convex";
import NextJs from "../../logos/nextjs";
import React from "../../logos/react";
import ShadcnUi from "../../logos/shadcn-ui";
import Stripe from "../../logos/stripe";
import Tailwind from "../../logos/tailwind";
import TypeScript from "../../logos/typescript";
import { Badge } from "../../ui/badge";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Built with Modern, Production-Ready Technologies",
  badge = (
    <p className="text-muted-foreground max-w-2xl text-sm">
      FluxKit leverages the best tools in the ecosystem to deliver a fast,
      scalable, and maintainable codebase that accelerates your development
      workflow.
    </p>
  ),
  logos = [
    <Logo key="convex" image={Convex} name="Convex" />,
    <Logo key="nextjs" image={NextJs} name="Next.js" />,
    <Logo key="react" image={React} name="React" />,
    <Logo key="typescript" image={TypeScript} name="TypeScript" />,
    <Logo key="tailwind" image={Tailwind} name="Tailwind CSS" />,
    <Logo key="shadcn" image={ShadcnUi} name="Shadcn UI" />,
    <Logo key="stripe" image={Stripe} name="Stripe" />,
    <Logo key="clerk" image={Clerk} name="Clerk" />,
  ],
  className,
}: LogosProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        {logos !== false && logos.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-8">
            {logos}
          </div>
        )}
      </div>
    </Section>
  );
}
