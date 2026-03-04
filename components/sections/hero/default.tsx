import { type VariantProps } from "class-variance-authority";
import { ChevronRightIcon, StarIcon } from "lucide-react";
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
import { Terminal, TypingAnimation } from "../../ui/terminal";

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
  description = "The friendly SaaS starter. Build and ship faster with Next.js, Convex, and TypeScript.",
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
      className="animate-appear group hover:border-primary/50 bg-background flex cursor-pointer items-center gap-3 rounded-full p-1 pr-2 text-xs shadow-sm transition-colors"
    >
      <span className="bg-foreground text-background my-0.5 ml-0.5 rounded-full px-2 py-1 text-xs font-semibold">
        New
      </span>
      <span className="text-muted-foreground font-semibold">
        Convex Real-Time DB, Stripe Billing, Shadcn UI & more!
      </span>
      <div className="ml-1 flex items-center justify-center rounded-full bg-black/5 p-1 dark:bg-white/10">
        <ChevronRightIcon className="text-foreground size-3 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Badge>
  ),
  buttons = [
    {
      href: siteConfig.links.github,
      text: "View on GitHub",
      variant: "default",
      icon: <Github className="mr-2 size-4" />,
    },
  ],
  className,
}: HeroProps) {
  return (
    <Section
      className={cn(
        "fade-bottom overflow-hidden pt-24 pb-0 sm:pt-32 sm:pb-0 md:pt-40 md:pb-0",
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
                <span className="bg-gradient-to-br from-blue-600 to-cyan-400 bg-clip-text text-transparent drop-shadow-md dark:to-cyan-300">
                  Ship This Weekend
                </span>
              </>
            )}
          </h1>
          <p className="text-md animate-appear relative z-10 max-w-[740px] leading-relaxed font-medium text-balance text-slate-500 opacity-0 delay-100 sm:text-xl dark:text-slate-300">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex flex-col items-center gap-3 opacity-0 delay-300">
              <div className="flex justify-center mb-4 gap-4">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || "default"}
                    size="xl"
                    className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3 text-lg shadow-lg shadow-black/10"
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
              <Terminal
                copyCommand="npx create-fluxkit-app@latest"
                className="pointer-events-auto w-full max-w-xl"
              >
                <TypingAnimation
                  className="text-blue-400 dark:text-brand font-mono text-lg font-semibold tracking-tight delay-0 sm:text-xl"
                  duration={40}
                >
                  npx create-fluxkit-app@latest
                </TypingAnimation>
              </Terminal>
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
