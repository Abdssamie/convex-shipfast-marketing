import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import FluxkitLogo from "../../ui/fluxkit-logo";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";
import { ModeToggle } from "../../ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  _policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export default function FooterSection({
  logo = <FluxkitLogo size={28} />,
  name = "FluxKit",
  columns = [
    {
      title: "Product",
      links: [
        { text: "Home", href: "/" },
        { text: "Features", href: "/#features" },
        { text: "Pricing", href: "/#pricing" },
      ],
    },
    {
      title: "Legal",
      links: [
        { text: "Privacy Policy", href: "/privacy" },
        { text: "Terms of Service", href: "/terms" },
        { text: "License", href: "/license" },
      ],
    },
  ],
  copyright = "© 2026 FluxKit. All rights reserved.",
  _policies = [],
  showModeToggle = true,
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        "bg-background relative w-full border-t border-border/40 px-4 py-8 sm:py-10",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-linear-to-b from-brand/6 to-transparent" />
      <div className="max-w-container mx-auto">
        <Footer className="glass-1 dark:glass-3 rounded-2xl border border-border/40 px-6 pt-8 pb-4 shadow-xl sm:px-8 sm:pt-10">
          <FooterContent className="gap-10">
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                {logo}
                <h3 className="text-2xl font-bold tracking-tight">{name}</h3>
              </div>
              <p className="text-muted-foreground max-w-xs text-sm leading-6">
                Premium SaaS starter with polished product surfaces and production-ready foundations.
              </p>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="pt-1 text-sm font-semibold tracking-wide uppercase">
                  {column.title}
                </h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground inline-flex w-fit text-base transition-colors"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom className="text-sm">
            <div className="text-muted-foreground/90">{copyright}</div>
            <div className="flex items-center gap-4">
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
