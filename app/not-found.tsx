import Link from "next/link";

import Footer from "@/components/sections/footer/default";
import Navbar from "@/components/sections/navbar/default";

export default function NotFound() {
  return (
    <div className="bg-background text-foreground flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-24">
        <div className="mx-auto max-w-xl rounded-2xl border bg-card p-10 text-center shadow-sm">
          <p className="text-brand mb-3 text-xs font-semibold tracking-[0.16em] uppercase">
            404
          </p>
          <h1 className="mb-4 text-3xl font-semibold sm:text-4xl">
            This page does not exist
          </h1>
          <p className="text-muted-foreground mb-8 text-base leading-relaxed">
            The link may be outdated, or the page may have moved during the
            latest product update.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="bg-foreground text-background inline-flex items-center justify-center rounded-md px-5 py-3 text-sm font-medium"
            >
              Return home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
