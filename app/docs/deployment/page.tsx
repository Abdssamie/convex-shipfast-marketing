export default function DocsDeploymentPage() {
  return (
    <article className="rounded-2xl border bg-card/40 p-8 shadow-sm sm:p-10">
      <h1 className="text-3xl font-semibold tracking-tight">Deployment</h1>
      <p className="text-muted-foreground mt-4 text-base leading-7">
        Production deployment covers the marketing site, the docs route, the
        Convex backend, and the Polar webhook path. Verify all four before you
        consider billing ready for customers.
      </p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold">Checklist</h2>
          <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            <li>Set the canonical site URL for `flux-kut.dev`.</li>
            <li>Deploy Convex and run codegen with `bunx convex dev`.</li>
            <li>Configure Polar tokens and webhook secret in Convex.</li>
            <li>Verify `/polar/events` is reachable from Polar.</li>
            <li>Test checkout, cancellation, and customer portal redirects end to end.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Verification</h2>
          <p className="text-muted-foreground mt-3 text-sm leading-6">
            The app should pass `bun run lint`, `bunx tsc --noEmit`, and the
            production webpack build before you promote a release. After that,
            validate Convex and Polar in a real deployed environment because
            webhook and auth flows cannot be fully proven by static builds
            alone.
          </p>
        </section>
      </div>
    </article>
  );
}
