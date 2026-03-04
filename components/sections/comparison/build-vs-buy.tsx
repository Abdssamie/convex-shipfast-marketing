import { CheckIcon, ClockIcon } from "lucide-react";

import { Section } from "../../ui/section";

interface ComparisonRow {
  component: string;
  buildTime: string;
  withFluxKit: string;
}

interface BuildVsBuyProps {
  title?: string;
  rows?: ComparisonRow[];
  summary?: {
    buildLabel: string;
    buildValue: string;
    buildCaption: string;
    shipfastLabel: string;
    shipfastValue: string;
    shipfastCaption: string;
    savingsLabel: string;
    savingsValue: string;
    savingsCaption: string;
  };
  className?: string;
}

export default function BuildVsBuy({
  title = "Ship Features Instead of Rebuilding SaaS Plumbing",
  rows = [
    {
      component: "Auth flows (email, magic links, verification)",
      buildTime: "2-3 weeks",
      withFluxKit: "Ready now",
    },
    {
      component: "Subscription billing with Polar",
      buildTime: "2-3 weeks",
      withFluxKit: "Ready now",
    },
    {
      component: "Organizations and team collaboration",
      buildTime: "3-4 weeks",
      withFluxKit: "Ready now",
    },
    {
      component: "Convex realtime backend + sync patterns",
      buildTime: "2-3 weeks",
      withFluxKit: "Ready now",
    },
    {
      component: "Dashboard modules (tasks, analytics, settings)",
      buildTime: "2-3 weeks",
      withFluxKit: "Ready now",
    },
    {
      component: "Email + notification infrastructure",
      buildTime: "1-2 weeks",
      withFluxKit: "Ready now",
    },
    {
      component: "Monitoring, analytics, and rate limiting",
      buildTime: "1-2 weeks",
      withFluxKit: "Ready now",
    },
    {
      component: "Landing page and growth surfaces",
      buildTime: "1-2 weeks",
      withFluxKit: "Ready now",
    },
  ],
  summary = {
    buildLabel: "Build from scratch",
    buildValue: "3-5 months",
    buildCaption: "Across auth, billing, orgs, and dashboard foundations",
    shipfastLabel: "With Convex ShipFast",
    shipfastValue: "Day 1",
    shipfastCaption: "Start building product-specific features immediately",
    savingsLabel: "Estimated savings",
    savingsValue: "300+ hours",
    savingsCaption: "Engineering effort reclaimed for product development",
  },
  className,
}: BuildVsBuyProps) {
  return (
    <Section className={className}>
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col items-center gap-12">
          <h2 className="max-w-[720px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>

          {/* Comparison Table */}
          <div className="w-full overflow-x-auto">
            <div className="min-w-[640px]">
              {/* Table Header */}
              <div className="border-border grid grid-cols-3 gap-4 border-b pb-4">
                <div className="text-muted-foreground text-sm font-semibold">
                  Component
                </div>
                <div className="text-muted-foreground text-center text-sm font-semibold">
                  Build Yourself
                </div>
                <div className="text-muted-foreground text-center text-sm font-semibold">
                  With Convex ShipFast
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-border divide-y">
                {rows.map((row, index) => (
                  <div
                    key={index}
                    className="hover:bg-muted/50 grid grid-cols-3 gap-4 py-4 transition-colors"
                  >
                    <div className="text-sm font-medium">{row.component}</div>
                    <div className="text-muted-foreground flex items-center justify-center gap-2 text-sm">
                      <ClockIcon className="size-4" />
                      <span>{row.buildTime}</span>
                    </div>
                    <div className="text-brand flex items-center justify-center gap-2 text-sm font-medium">
                      <CheckIcon className="size-4" />
                      <span>{row.withFluxKit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid w-full gap-6 sm:grid-cols-3">
            <div className="border-border bg-muted/30 flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
              <div className="text-muted-foreground text-sm font-semibold">
                {summary.buildLabel}
              </div>
              <div className="text-3xl font-bold sm:text-4xl">
                {summary.buildValue}
              </div>
              <div className="text-muted-foreground text-sm">
                {summary.buildCaption}
              </div>
            </div>

            <div className="border-brand bg-brand/5 flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
              <div className="text-brand text-sm font-semibold">
                {summary.shipfastLabel}
              </div>
              <div className="text-brand text-3xl font-bold sm:text-4xl">
                {summary.shipfastValue}
              </div>
              <div className="text-muted-foreground text-sm">
                {summary.shipfastCaption}
              </div>
            </div>

            <div className="border-border bg-muted/30 flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
              <div className="text-muted-foreground text-sm font-semibold">
                {summary.savingsLabel}
              </div>
              <div className="text-3xl font-bold sm:text-4xl">
                {summary.savingsValue}
              </div>
              <div className="text-muted-foreground text-sm">
                {summary.savingsCaption}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
