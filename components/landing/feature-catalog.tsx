import {
  BlocksIcon,
  Building2Icon,
  CheckIcon,
  Code2Icon,
  ShieldCheckIcon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";

import { Container } from "./container";

const valueCards = [
  {
    title: "Auth & Security",
    icon: <ShieldCheckIcon className="size-5" />,
    points: [
      "Email/password + magic links",
      "Google OAuth sign-in",
      "Password reset + email verification",
      "Secure Better Auth sessions",
      "Upstash rate-limiting patterns",
    ],
  },
  {
    title: "B2B Foundations",
    icon: <Building2Icon className="size-5" />,
    points: [
      "Organization workspaces",
      "Team invitations + role controls",
      "Role-based permissions",
      "Billing + account settings surfaces",
      "Polar checkout + portal wiring",
    ],
  },
  {
    title: "Product Modules",
    icon: <BlocksIcon className="size-5" />,
    points: [
      "Dashboard + analytics surfaces",
      "Tasks, calendar, mail, and chat",
      "User directory + settings screens",
      "Realtime notifications",
      "Reusable shadcn UI system",
    ],
  },
];

const developerExperience = [
  "Next.js 16 + React 19 + TypeScript",
  "Convex type-safe realtime backend",
  "Better Auth + Polar integration points",
  "Brevo or Resend transactional email",
  "Sentry + analytics integration plumbing",
];

export function FeatureCatalog() {
  return (
    <Section id="features" className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <Badge
            variant="outline"
            className="text-brand mb-3 border-0 bg-transparent px-0 py-0 text-xs font-semibold tracking-[0.16em] uppercase"
          >
            What You Get
          </Badge>
          <h2 className="text-3xl leading-tight font-semibold sm:text-5xl">
            Complete B2B SaaS starter with 160+ hours already done
          </h2>
        </div>

        <div className="glass-1 dark:glass-3 relative mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border/50 shadow-xl">
          <hr className="via-foreground/60 absolute top-0 left-[10%] h-[1px] w-[80%] border-0 bg-linear-to-r from-transparent to-transparent" />
          <div className="grid md:grid-cols-3">
            {valueCards.map((card) => (
              <Card
                key={card.title}
                className="rounded-none border-0 border-b border-border/40 bg-transparent shadow-none md:border-r md:border-b-0 last:border-r-0"
              >
                <CardHeader className="space-y-3 pb-3">
                  <div className="text-brand">{card.icon}</div>
                  <CardTitle className="text-xl font-semibold tracking-tight">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2.5">
                    {card.points.map((point) => (
                      <li
                        key={point}
                        className="text-muted-foreground flex items-start gap-2 text-sm sm:text-base"
                      >
                        <CheckIcon className="text-brand mt-0.5 size-4 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-none border-0 border-t border-border/40 bg-transparent shadow-none">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                <Code2Icon className="text-brand size-5" />
                Developer Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {developerExperience.map((item) => (
                  <div
                    key={item}
                    className="text-muted-foreground flex items-center gap-2 text-sm sm:text-base"
                  >
                    <CheckIcon className="text-brand size-4 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
