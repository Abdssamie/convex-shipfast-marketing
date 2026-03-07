export default function DocsGettingStartedPage() {
  return (
    <article className="rounded-2xl border bg-card/40 p-8 shadow-sm sm:p-10">
      <h1 className="text-3xl font-semibold tracking-tight">Getting Started</h1>
      <p className="text-muted-foreground mt-4 text-base leading-7">
        FluxKit uses Bun for the Next.js app and Convex for backend services.
        The public site and the docs live in the same Next app, while billing
        and subscription state are handled from the `convex/` directory.
      </p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold">Local setup</h2>
          <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            <li>Run `bun install` to install the web app and Convex dependencies.</li>
            <li>Run `bun run dev` to start the Next.js app locally.</li>
            <li>Run `bunx convex dev` once your Convex project is configured.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Project map</h2>
          <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            <li>`app/`: landing page, blog, legal pages, and docs routes.</li>
            <li>`components/`: marketing sections and shared UI primitives.</li>
            <li>`convex/convex.config.ts`: installs the Polar component.</li>
            <li>`convex/http.ts`: exposes the `/polar/events` webhook handler.</li>
            <li>`convex/polar.ts`: billing queries, actions, and sync helpers.</li>
          </ul>
        </section>
      </div>
    </article>
  );
}
