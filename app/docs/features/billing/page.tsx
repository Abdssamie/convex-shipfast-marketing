export default function DocsBillingPage() {
  return (
    <article className="rounded-2xl border bg-card/40 p-8 shadow-sm sm:p-10">
      <h1 className="text-3xl font-semibold tracking-tight">Billing</h1>
      <p className="text-muted-foreground mt-4 text-base leading-7">
        Polar is mounted through Convex, not through a separate webhook server.
        Product data, subscription state, and entitlement checks stay in one
        backend path so your pricing UI and account state are driven by the
        same source of truth.
      </p>

      <div className="mt-8 space-y-8">
        <section>
          <h2 className="text-xl font-semibold">Files</h2>
          <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            <li>`convex/convex.config.ts` installs `@convex-dev/polar`.</li>
            <li>`convex/http.ts` registers the Polar webhook route.</li>
            <li>`convex/polar.ts` exports checkout, customer portal, and sync helpers.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Required env vars</h2>
          <ul className="text-muted-foreground mt-3 list-disc space-y-2 pl-5 text-sm leading-6">
            <li>`POLAR_ORGANIZATION_TOKEN`</li>
            <li>`POLAR_WEBHOOK_SECRET`</li>
            <li>`POLAR_SERVER` set to `sandbox` or `production`</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Launch steps</h2>
          <ol className="text-muted-foreground mt-3 list-decimal space-y-2 pl-5 text-sm leading-6">
            <li>Create your products in Polar.</li>
            <li>Point webhooks to `https://YOUR-CONVEX-SITE/polar/events`.</li>
            <li>Run the `syncPolarProducts` action to pull product data into Convex.</li>
            <li>Use `getViewerSubscription` to gate premium UI and dashboard access.</li>
          </ol>
        </section>
      </div>
    </article>
  );
}
