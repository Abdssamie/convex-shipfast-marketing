import {
  BellRingIcon,
  BlocksIcon,
  DatabaseIcon,
  LayoutTemplateIcon,
  ShieldCheckIcon,
} from "lucide-react";
import React from "react";

import { AnimatedList } from "@/components/ui/animated-list";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
  invertOnDark?: boolean;
}

let notifications = [
  {
    name: "Next.js",
    description: "App Router foundations.",
    time: "Ready",
    icon: "https://cdn.simpleicons.org/nextdotjs/white",
    color: "#000000",
  },
  {
    name: "React",
    description: "Component baselines.",
    time: "Ready",
    icon: "https://cdn.simpleicons.org/react",
    color: "#fff",
  },
  {
    name: "TypeScript",
    description: "End-to-end type safety.",
    time: "Ready",
    icon: "https://cdn.simpleicons.org/typescript",
    color: "#fff",
  },
  {
    name: "Convex",
    description: "Real-time sync.",
    time: "Connected",
    icon: "https://www.convex.dev/favicon.ico",
    color: "#fff",
  },
];

const Notification = ({ name, description, icon, color, time, invertOnDark }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <img
            src={icon}
            alt={`${name} icon`}
            width={20}
            height={20}
            className={invertOnDark ? "dark:invert" : undefined}
          />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white ">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-container mx-auto">{children}</div>;
}

export default function BentoSection() {
  const items = [
    {
      Icon: BlocksIcon,
      name: "Modern Tech Stack",
      description:
        "Built on Next.js App Router, React 19, TypeScript, and Convex for maximum developer velocity.",
      href: "#features",
      cta: "Explore stack",
      className: "lg:col-span-2 overflow-hidden",
      background: (
        <div className="absolute right-0 top-4 h-[100%] max-h-[220px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_bottom,transparent_0%,#000_15%,#000_60%,transparent_100%)] group-hover:scale-[101%] z-0">
          <AnimatedList delay={1500} className="px-4">
            {notifications.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>
        </div>
      ),
    },
    {
      Icon: LayoutTemplateIcon,
      name: "Premium landing and dashboard",
      description:
        "The paid tier adds polished conversion surfaces and app layouts so you can ship a serious product presentation without redesigning the frontend.",
      href: "#pricing",
      cta: "View pricing",
      className: "lg:col-span-1",
      background: (
        <div className="h-36 w-full p-5">
          <div className="bg-background/80 border-border/70 h-full rounded-lg border p-3">
            <p className="text-muted-foreground text-xs">Premium surfaces</p>
            <p className="mt-1 text-2xl font-semibold">Landing + App</p>
            <p className="mt-1 text-xs text-emerald-500">Ready for launch polish</p>
          </div>
        </div>
      ),
    },
    {
      Icon: DatabaseIcon,
      name: "Realtime Convex backend",
      description:
        "Reactive queries keep dashboards fresh and notifications instant without complex client cache logic.",
      href: "#features",
      cta: "Explore backend",
      className: "lg:col-span-1",
      background: (
        <div className="h-36 w-full p-5">
          <div className="bg-background/80 border-border/70 h-full rounded-lg border p-3">
            <p className="text-muted-foreground text-xs">Query sync latency</p>
            <p className="mt-1 text-2xl font-semibold">&lt; 200ms</p>
            <p className="text-muted-foreground mt-1 text-xs">
              Reactive updates across dashboard widgets
            </p>
          </div>
        </div>
      ),
    },
    {
      Icon: BellRingIcon,
      name: "Ops and observability",
      description:
        "Sentry, Upstash rate limiting, and analytics hooks come pre-integrated for production reliability.",
      href: "#features",
      cta: "See ops stack",
      className: "lg:col-span-1",
      background: (
        <div className="h-36 w-full p-5">
          <div className="bg-background/80 border-border/70 h-full space-y-2 rounded-lg border p-3 text-xs">
            <div className="rounded-md border border-emerald-500/30 px-2 py-1 text-emerald-500">
              Sentry connected
            </div>
            <div className="rounded-md border border-emerald-500/30 px-2 py-1 text-emerald-500">
              Upstash enabled
            </div>
            <div className="rounded-md border border-emerald-500/30 px-2 py-1 text-emerald-500">
              Analytics ready
            </div>
          </div>
        </div>
      ),
    },
    {
      Icon: ShieldCheckIcon,
      name: "Ship with confidence",
      description:
        "Use a commercial starter that already solves core SaaS risk areas so your team can focus on customer value.",
      href: siteConfig.docsUrl,
      cta: "Read docs",
      className: "lg:col-span-1",
      background: (
        <div className="h-36 w-full p-5">
          <div className="bg-background/80 border-border/70 h-full rounded-lg border p-3 text-xs">
            <p className="text-muted-foreground">Included foundations</p>
            <ul className="mt-2 space-y-1">
              <li>Auth + Teams</li>
              <li>Realtime + Notifications</li>
              <li>Notifications + Emails</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Section className="pt-2 pb-8 sm:pt-4 sm:pb-14">
      <Container>
        <div className="mx-auto mb-8 max-w-3xl text-center">
          <p className="text-brand mb-2 text-xs font-semibold tracking-[0.16em] uppercase">
            Developer-first value
          </p>
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
            The production blocks you actually need
          </h2>
        </div>

        <BentoGrid className="lg:grid-rows-2">
          {items.map((item) => (
            <BentoCard key={item.name} {...item} />
          ))}
        </BentoGrid>
      </Container>
    </Section>
  );
}
