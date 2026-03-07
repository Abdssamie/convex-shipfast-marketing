import Link from "next/link";

import { siteConfig } from "@/config/site";

import FluxkitLogo from "../ui/fluxkit-logo";
import { Container } from "./container";

export function LandingFooter() {
    const columns = [
        {
            title: "Product",
            links: [
                { label: "Features", href: "#features" },
                { label: "Pricing", href: "#pricing" },
                { label: "FAQ", href: "#faq" },
            ],
        },
        {
            title: "Resources",
            links: [
                { label: "Documentation", href: siteConfig.docsUrl },
                { label: "GitHub", href: siteConfig.links.github },
            ],
        },
        {
            title: "Company",
            links: [
                { label: "Contact", href: siteConfig.links.email },
            ],
        },
    ];

    return (
        <footer className="border-border/70 border-t px-4 py-10">
            <Container>
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <Link
                            href="/"
                            className="mb-3 inline-flex items-center gap-2 text-lg font-semibold"
                        >
                            <FluxkitLogo size={24} className="rounded-md" />
                            FluxKit
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Commercial SaaS starter for teams building with Next.js and
                            Convex.
                        </p>
                    </div>
                    {columns.map((column) => (
                        <div key={column.title} className="space-y-3">
                            <p className="text-sm font-semibold">{column.title}</p>
                            <div className="flex flex-col gap-2">
                                {column.links.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-muted-foreground hover:text-foreground text-sm"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-muted-foreground border-border/70 mt-8 border-t pt-4 text-sm">
                    © {new Date().getFullYear()} FluxKit. All rights reserved.
                </div>
            </Container>
        </footer>
    );
}
