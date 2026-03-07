import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./button";
import { Card, CardContent } from "./card";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  className: string;
  background: ReactNode;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
}

function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 gap-4 lg:grid-cols-3",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  ...props
}: BentoCardProps) {
  return (
    <Card
      className={cn(
        "group bg-card relative col-span-1 flex flex-col justify-between overflow-hidden border-border/70 shadow-xl",
        "dark:shadow-[0_-20px_80px_-20px_rgba(255,255,255,0.08)_inset]",
        className,
      )}
      {...props}
    >
      <div>{background}</div>
      <CardContent className="p-5">
        <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-2 transition-all duration-300 lg:group-hover:-translate-y-8">
          <Icon className="text-brand h-10 w-10 origin-left transform-gpu transition-all duration-300 ease-in-out lg:group-hover:scale-75" />
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-muted-foreground max-w-lg text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="pointer-events-none flex w-full flex-row items-center transition-all duration-300 lg:hidden">
          <Button
            variant="link"
            asChild
            size="sm"
            className="pointer-events-auto p-0"
          >
            <Link href={href}>
              {cta}
              <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </CardContent>

      <div className="pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex">
        <Button
          variant="link"
          asChild
          size="sm"
          className="pointer-events-auto p-0"
        >
          <Link href={href}>
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </Link>
        </Button>
      </div>

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/3 group-hover:dark:bg-neutral-800/10" />
    </Card>
  );
}

export { BentoCard, BentoGrid };
