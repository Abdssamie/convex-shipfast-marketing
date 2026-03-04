import { ReactNode } from "react";

import Convex from "../../logos/convex";
import Github from "../../logos/github";
import NextJs from "../../logos/nextjs";
import React from "../../logos/react";
import ShadcnUi from "../../logos/shadcn-ui";
import Tailwind from "../../logos/tailwind";
import TypeScript from "../../logos/typescript";
import Logo from "../../ui/logo";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Built on a Production Stack Developers Already Trust",
  badge = (
    <p className="text-muted-foreground max-w-2xl text-sm">
      Convex ShipFast combines a modern frontend stack with battle-tested SaaS
      building blocks so you can focus on product velocity, not glue code.
    </p>
  ),
  logos = [
    <Logo key="convex" image={Convex} name="Convex" />,
    <Logo key="nextjs" image={NextJs} name="Next.js" />,
    <Logo key="react" image={React} name="React" />,
    <Logo key="typescript" image={TypeScript} name="TypeScript" />,
    <Logo key="tailwind" image={Tailwind} name="Tailwind CSS" />,
    <Logo key="shadcn" image={ShadcnUi} name="Shadcn UI" />,
    <Logo key="github" image={Github} name="GitHub" />,
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
