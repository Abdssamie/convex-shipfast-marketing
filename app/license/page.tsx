import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";
import { legalConfig, legalLastUpdated } from "@/config/legal";
import { siteConfig } from "@/config/site";

export default function LicensePage() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Navbar />
      <main className="mt-20 flex-1">
        <div className="container mx-auto max-w-4xl px-4 py-16 sm:py-24">
          <div className="rounded-xl border bg-card p-8 shadow-sm sm:p-12">
            <div className="mb-10 text-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                License
              </h1>
              <p className="text-muted-foreground">
                Last updated: {legalLastUpdated}
              </p>
            </div>

            <div className="space-y-6 text-sm leading-7 sm:text-base">
              <p>
                {siteConfig.name} is provided under a commercial license. Your
                purchase grants a non-exclusive, non-transferable right to use
                the codebase for your own products under the plan you selected.
              </p>
              <p className="text-muted-foreground">
                Client projects require a separate license purchased for that
                client. Redistribution, reselling, or creating a competing
                boilerplate is prohibited. For licensing questions, contact{" "}
                {legalConfig.company.email}.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
