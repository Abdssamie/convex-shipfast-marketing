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
  title = "Loved by Developers Building SaaS",
  testimonials = [
    {
      name: "Alex Chen",
      role: "Founder at TechStartup",
      quote:
        "This saved me months of development time. I was able to launch my SaaS in weeks instead of months. The real-time features work flawlessly out of the box.",
      initials: "AC",
    },
    {
      name: "Sarah Johnson",
      role: "Developer at SaaSCo",
      quote:
        "Best investment for launching my SaaS. The Convex integration is brilliant and the documentation is excellent and comprehensive. I can't recommend this enough.",
      initials: "SJ",
    },
    {
      name: "Michael Rodriguez",
      role: "Indie Hacker",
      quote:
        "Perfect for indie hackers like me. Stripe billing just works without any headaches. I was up and running with payments in less than an hour.",
      initials: "MR",
    },
    {
      name: "Emily Watson",
      role: "CTO at StartupLabs",
      quote:
        "The real-time features work flawlessly out of the box. Our team was impressed with how easy it was to implement complex functionality without reinventing the wheel.",
      initials: "EW",
    },
    {
      name: "David Kim",
      role: "Full-stack Developer",
      quote:
        "Support is incredibly responsive and helpful. Every question I had was answered within hours. The community around this is fantastic.",
      initials: "DK",
    },
    {
      name: "Jessica Martinez",
      role: "Founder at CloudApp",
      quote:
        "Saved months of development time and thousands in development costs. The authentication and billing systems alone are worth the investment.",
      initials: "JM",
    },
    {
      name: "Ryan Thompson",
      role: "Software Engineer",
      quote:
        "Documentation is excellent and comprehensive. I was able to customize everything to fit my needs without getting stuck. This is how all boilerplates should be built.",
      initials: "RT",
    },
    {
      name: "Lisa Park",
      role: "Product Manager at InnovateCo",
      quote:
        "Best investment for launching my SaaS quickly. The Convex integration is brilliant and makes building real-time features a breeze.",
      initials: "LP",
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
