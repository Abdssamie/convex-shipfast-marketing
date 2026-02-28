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
  className?: string;
}

export default function BuildVsBuy({
  title = "Skip Months of Infrastructure Work",
  rows = [
    {
      component: "Authentication (email, OAuth, MFA)",
      buildTime: "2-4 weeks",
      withFluxKit: "Pre-built",
    },
    {
      component: "Stripe subscription billing",
      buildTime: "2-3 weeks",
      withFluxKit: "Pre-built",
    },
    {
      component: "Multi-tenant organizations",
      buildTime: "3-4 weeks",
      withFluxKit: "Pre-built",
    },
    {
      component: "Real-time features with Convex",
      buildTime: "2-3 weeks",
      withFluxKit: "Pre-built",
    },
    {
      component: "Admin dashboard",
      buildTime: "2-3 weeks",
      withFluxKit: "Pre-built",
    },
    {
      component: "File storage system",
      buildTime: "1-2 weeks",
      withFluxKit: "Pre-built",
    },
    {
      component: "Email system",
      buildTime: "1 week",
      withFluxKit: "Pre-built",
    },
    {
      component: "Blog & documentation",
      buildTime: "1-2 weeks",
      withFluxKit: "Pre-built",
    },
    {
      component: "Dark mode & theming",
      buildTime: "3-5 days",
      withFluxKit: "Pre-built",
    },
    {
      component: "Responsive UI components",
      buildTime: "2-3 weeks",
      withFluxKit: "Pre-built",
    },
  ],
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
                  With FluxKit
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
                Build from scratch
              </div>
              <div className="text-3xl font-bold sm:text-4xl">3-6 months</div>
              <div className="text-muted-foreground text-sm">500+ hours</div>
            </div>

            <div className="border-brand bg-brand/5 flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
              <div className="text-brand text-sm font-semibold">
                With FluxKit
              </div>
              <div className="text-brand text-3xl font-bold sm:text-4xl">
                Day 1
              </div>
              <div className="text-muted-foreground text-sm">
                Start building features
              </div>
            </div>

            <div className="border-border bg-muted/30 flex flex-col items-center gap-3 rounded-lg border p-6 text-center">
              <div className="text-muted-foreground text-sm font-semibold">
                Estimated savings
              </div>
              <div className="text-3xl font-bold sm:text-4xl">$15k-$50k</div>
              <div className="text-muted-foreground text-sm">
                In developer time
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
