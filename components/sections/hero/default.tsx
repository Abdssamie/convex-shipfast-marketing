import { type VariantProps } from "class-variance-authority";
import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react";
import { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button, buttonVariants } from "../../ui/button";
import Glow from "../../ui/glow";
import { Mockup, MockupFrame } from "../../ui/mockup";
import Screenshot from "../../ui/screenshot";
import { Section } from "../../ui/section";
import { LimitedOfferPill } from "./limited-offer-pill";

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
  buttons?: HeroButtonProps[] | false;
  className?: string;
}

export default function Hero({
  title,
  description = "A production-ready SaaS starter with a polished landing page, finished dashboard shell, and the core product surfaces already in place.",
  mockup = (
    <Screenshot
      srcLight="/dashboard-preview-light.png"
      srcDark="/dashboard-preview-dark.png"
      alt="FluxKit dashboard screenshot"
      width={1248}
      height={765}
      className="w-full"
    />
  ),
  buttons = [
    {
      href: siteConfig.getStartedUrl,
      text: "Get FluxKit - $135",
      variant: "default",
      iconRight: <ArrowRightIcon className="size-4" />,
    },
    {
      href: siteConfig.demoUrl,
      text: "View Live Demo",
      variant: "outline",
      iconRight: <ExternalLinkIcon className="size-4" />,
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
          <LimitedOfferPill currentPrice={135} originalPrice={200} />
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
          <p className="text-md animate-appear relative z-10 max-w-[740px] leading-relaxed font-semibold text-balance text-slate-500 opacity-0 delay-100 sm:text-xl dark:text-slate-300">
            {description}
          </p>
          {buttons !== false && buttons.length > 0 && (
            <div className="animate-appear relative z-10 flex flex-col items-center gap-3 opacity-0 delay-300">
              <div className="mb-4 flex justify-center gap-4">
                {buttons.map((button, index) => (
                  <Button
                    key={index}
                    variant={button.variant || "default"}
                    size="xl"
                    className={cn(
                      "px-8 py-3 text-lg shadow-lg shadow-black/10",
                      button.variant === "default" &&
                        "bg-foreground text-background hover:bg-foreground/90",
                    )}
                    asChild
                  >
                    <a
                      href={button.href}
                      className="inline-flex items-center gap-2"
                    >
                      {button.icon && (
                        <span className="shrink-0">{button.icon}</span>
                      )}
                      <span>{button.text}</span>
                      {button.iconRight && (
                        <span className="shrink-0">{button.iconRight}</span>
                      )}
                    </a>
                  </Button>
                ))}
              </div>
              <a
                href="https://www.producthunt.com/products/fluxkit?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-fluxkit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <img
                  alt="FluxKit - Skip the Boilerplate, Ship This Weekend | Product Hunt"
                  width="250"
                  height="54"
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1094116&theme=light&t=1773122698823"
                  className="h-auto max-w-full"
                />
              </a>
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
