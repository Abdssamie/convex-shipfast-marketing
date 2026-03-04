import { cn } from "@/lib/utils";

import { Card, CardContent } from "../../ui/card";
import { Section } from "../../ui/section";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  initials: string;
}

interface TestimonialsProps {
  title?: string | false;
  testimonials?: Testimonial[] | false;
  className?: string;
}

export default function Testimonials({
  title = "Why Teams Choose Convex ShipFast",
  testimonials = [
    {
      name: "Startup Founders",
      role: "Early-stage teams",
      quote:
        "We can launch faster because auth, billing, and infrastructure are already solved in a stack we trust.",
      initials: "SF",
    },
    {
      name: "Full-stack Developers",
      role: "Product engineering teams",
      quote:
        "Convex ShipFast gives us a clean TypeScript baseline and removes repetitive setup work across projects.",
      initials: "FD",
    },
    {
      name: "SaaS Builders",
      role: "Indie and small teams",
      quote:
        "The free tier is enough to validate quickly, and upgrading to business unlocks teams and polished product surfaces.",
      initials: "SB",
    },
    {
      name: "Technical Leads",
      role: "Scaling startups",
      quote:
        "We keep velocity high because realtime data, monitoring, analytics, and dashboard modules are already integrated.",
      initials: "TL",
    },
    {
      name: "Product Teams",
      role: "B2B SaaS products",
      quote:
        "The architecture makes it easy to adapt flows for our domain instead of fighting opinionated black boxes.",
      initials: "PT",
    },
    {
      name: "Engineers",
      role: "Implementation-focused teams",
      quote:
        "It feels professional out of the box, and that matters when shipping for paying customers.",
      initials: "EN",
    },
  ],
  className = "",
}: TestimonialsProps) {
  return (
    <Section className={cn(className)}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {title && (
          <div className="flex flex-col items-center gap-4 px-4 text-center">
            <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
              {title}
            </h2>
          </div>
        )}
        {testimonials !== false && testimonials.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="flex flex-col">
                <CardContent className="flex flex-col gap-4 p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary text-primary-foreground flex h-12 w-12 items-center justify-center rounded-full font-semibold">
                      {testimonial.initials}
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-muted-foreground text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
