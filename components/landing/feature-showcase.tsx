"use client";

import { BlocksIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

import { Container } from "./container";

const showcaseData = {
  tagline: "Core Functionality",
  title: "Everything you need out of the box",
  description:
    "Stop rebuilding the same foundational systems. FluxKit gives you a production-ready starting point with the core SaaS layers already wired.",
  features: [
    {
      id: "landing",
      title: "Next.js and React 19 foundation",
      description:
        "Built on the modern App Router stack with Server Components, Server Actions, and Turbopack-ready development defaults.",
      highlight: "Frontend platform",
      media: {
        type: "image",
        src: "/landing-page-preview.png",
        alt: "React and Next.js architecture preview",
      },
    },
    {
      id: "dashboard",
      title: "Convex real-time backend",
      description:
        "Reactive data, live client sync, and typed backend functions are already part of the baseline, so your product logic starts from a working system.",
      highlight: "Live data layer",
      media: {
        type: "image",
        src: "/dashboard-preview.png",
        alt: "Real-time dashboard preview",
      },
    },
    {
      id: "customization",
      title: "Authentication and payments",
      description:
        "Secure account flows and monetization primitives come preconfigured so you can ship sign-in, billing, and upgrade paths earlier.",
      highlight: "Revenue-ready flows",
      media: {
        type: "video",
        src: "/theme-customized-showcase-video.mp4",
      },
    },
  ],
};

export function FeatureShowcase() {
  return (
    <Section className="overflow-hidden py-16 md:py-24">
      <Container>
        <div className="mb-10 max-w-3xl md:mb-14">
          <Badge variant="brand" className="mb-4 gap-2 px-3 py-1.5">
            <BlocksIcon className="size-3.5" />
            {showcaseData.tagline}
          </Badge>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {showcaseData.title}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg leading-relaxed">
            {showcaseData.description}
          </p>
        </div>

        <div className="flex flex-col gap-8 md:gap-10">
          {showcaseData.features.map((feature, index) => {
            const isEven = index % 2 === 0;

            return (
              <Card
                key={feature.id}
                className={cn(
                  "from-card via-card to-card/70 overflow-hidden rounded-[2rem] border-border/60 bg-gradient-to-br shadow-xl",
                  "dark:shadow-[0_20px_80px_-40px_rgba(255,255,255,0.18)]",
                )}
              >
                <div
                  className={cn(
                    "grid items-stretch lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)]",
                    !isEven && "lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)]",
                  )}
                >
                  <CardHeader className={cn("justify-center p-8 md:p-10 lg:p-12", !isEven && "lg:order-2")}>
                    <Badge variant="outline" className="mb-4 w-fit">
                      {feature.highlight}
                    </Badge>
                    <CardTitle className="text-2xl leading-tight md:text-3xl">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="max-w-xl text-base leading-7 md:text-lg">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent
                    className={cn(
                      "relative border-t border-border/40 p-5 md:p-8 lg:border-t-0 lg:border-l lg:p-10",
                      !isEven && "lg:order-1 lg:border-l-0 lg:border-r",
                    )}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.16),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.12),transparent_35%)]" />
                    <div className="bg-background/80 relative overflow-hidden rounded-[1.5rem] border border-border/60 p-2 shadow-2xl backdrop-blur-sm">
                      <div className="overflow-hidden rounded-[1rem]">
                        {feature.media.type === "image" ? (
                          <img
                            src={feature.media.src}
                            alt={feature.media.alt!}
                            className="block w-[calc(100%+5px)] max-w-none translate-x-[-2.5px] translate-y-[-2.5px] rounded-[1rem]"
                          />
                        ) : (
                          <video
                            src={feature.media.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="block w-[calc(100%+5px)] max-w-none translate-x-[-2.5px] translate-y-[-2.5px] rounded-[1rem]"
                          />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
