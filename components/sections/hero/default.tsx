import { type VariantProps } from "class-variance-authority";
import { ChevronRightIcon, RocketIcon, StarIcon } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Github from "../../logos/github";
import { Badge } from "../../ui/badge";
import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";

interface HeroButtonProps {
  href: string;
  text: string;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: ReactNode;
  iconRight?: ReactNode;
}

interface HeroProps {
  title?: string;
  description?: string;
  mockup?: ReactNode | false;
  badge?: ReactNode | false;
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title,
  description = "The open-source, production-ready SaaS starter. Built with Next.js, Convex, and TypeScript. Inspect the code, self-host, or fork it freely before committing to Pro.",
  mockup = (
    <Screenshot
      srcLight="/dashboard-light.png"
      srcDark="/dashboard-dark.png"
      alt="FluxKit dashboard screenshot"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  badge = (
    <Badge
      variant="outline"
      className="animate-appear p-1 pr-2 text-xs group hover:border-primary/50 cursor-pointer transition-colors rounded-full flex items-center gap-3 bg-background shadow-sm"
    >
      <span className="bg-foreground text-background font-semibold px-2 ml-0.5 py-1 my-0.5 text-xs rounded-full">
        New
      </span>
      <span className="text-muted-foreground font-medium">
        Convex Real-Time DB, Stripe Billing, Shadcn UI & more!
      </span>
      <div className="flex items-center justify-center bg-muted rounded-full p-1 ml-1">
        <ChevronRightIcon className="text-foreground size-3 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Badge>
  ),
  buttons = [
    {
      href: siteConfig.pricing.free,
      text: "Get Started Free",
      variant: "default",
      icon: <RocketIcon className="mr-2 size-4" />,
    },
    {
      href: siteConfig.links.github,
      text: "Starred by 1.2k on GitHub",
      variant: "glow",
      icon: <Github className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pt-8 pb-0 sm:pt-12 sm:pb-0 md:pt-16 md:pb-0",
        className,
      )}
    >
      <div className="max-w-container mx-auto flex flex-col gap-12 pt-4 sm:gap-24">
        <div className="flex flex-col items-center gap-5 text-center sm:gap-8">
          {badge !== false && badge}
          <h1 className="animate-appear relative z-10 text-4xl leading-tight font-semibold text-balance drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title ? (
              title
            ) : (
              <>
                <span className="text-foreground">Skip the Boilerplate </span>
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-orange-600 to-red-500 dark:to-red-300 drop-shadow-md">
                  Ship This Weekend
                </span>
              </>
            )}
          </h1>
          <p className="text-md animate-appear text-slate-500 dark:text-slate-300 relative z-10 max-w-[740px] font-medium text-balance opacity-0 delay-100 sm:text-xl leading-relaxed">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex flex-col items-center gap-3 opacity-0 delay-300">
              <div className="flex justify-center gap-4">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || "default"}
                    size="lg"
                    asChild
                  >
                    <a href={button.href}>
                      {button.icon}
                      {button.text}
                      {button.iconRight}
                    </a>
                  </Button>
                ))}
              </div>
              <p className="text-muted-foreground text-sm font-medium">
                Start building for free. Upgrade when you scale.
              </p>
            </div>
          )}
          {mockup !== false && (
            <div className="relative w-full pt-4 sm:pt-8">
              <MockupFrame
                className="animate-appear opacity-0 delay-700"
                size="small"
              >
                <Mockup
                  type="responsive"
                  className="bg-background/90 w-full rounded-xl border-0"
                >
                  {mockup}
                </Mockup>
              </MockupFrame>
              <div className="opacity-40 dark:opacity-70">
                <Glow
                  variant="above"
                  className="animate-appear-zoom opacity-0 delay-1000"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
