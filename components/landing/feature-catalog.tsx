import { CheckIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";

import { Container } from "./container";

const featureCatalog = [
    "Email/password auth + magic links + password reset",
    "Email verification and secure session management",
    "Organization workspaces with invite flows",
    "Role-based authorization patterns",
    "Billing settings surfaces ready for provider wiring",
    "Plan and account-control UI foundations",
    "Convex realtime queries and live sync",
    "In-app realtime notifications",
    "Brevo transactional email pipelines",
    "Analytics wiring for growth decisions",
    "Sentry monitoring and issue visibility",
    "Upstash rate limiting for critical routes",
    "Dashboard architecture and account settings",
    "Tasks and calendar product modules",
    "Landing and blog growth surfaces",
    "Type-safe end-to-end TypeScript baseline",
    "Responsive UI with theme support",
    "Production-ready SaaS deployment patterns",
];

export function FeatureCatalog() {
  return (
    <Section id="features">
      <Container>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <Badge variant="outline" className="mb-4 px-3 py-1.5">
              Feature depth
            </Badge>
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
              Complete feature coverage, ready to ship
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-sm leading-6">
            No placeholder promises. This section maps directly to shipped
            capabilities in the source app.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {featureCatalog.map((feature, index) => (
            <Card
              key={feature}
              className="group border-border/70 bg-card/50 hover:border-brand/50 hover:bg-card transition-colors"
            >
              <CardHeader className="pb-3">
                <div className="bg-brand/10 text-brand flex size-10 items-center justify-center rounded-full border border-brand/20">
                  <CheckIcon className="size-4" />
                </div>
                <CardTitle className="text-base leading-6">{feature}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-6">
                  Capability {String(index + 1).padStart(2, "0")} in the
                  production baseline, ready to be adapted instead of rebuilt.
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  );
}
