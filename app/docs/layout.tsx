import Link from "next/link";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";

const docsLinks = [
  { href: "/docs", label: "Overview" },
  { href: "/docs/getting-started", label: "Getting Started" },
  { href: "/docs/features", label: "Features" },
  { href: "/docs/features/billing", label: "Billing" },
  { href: "/docs/deployment", label: "Deployment" },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto mt-20 flex w-full max-w-7xl flex-1 flex-col gap-10 px-4 py-12 lg:flex-row lg:px-6">
        <aside className="lg:w-64 lg:shrink-0">
          <div className="sticky top-28 rounded-2xl border bg-card/60 p-5">
            <p className="text-brand mb-4 text-xs font-semibold tracking-[0.16em] uppercase">
              Documentation
            </p>
            <nav className="flex flex-col gap-2">
              {docsLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground rounded-md px-2 py-1.5 text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
