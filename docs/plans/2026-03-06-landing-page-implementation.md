# FluxKit Commercial Landing Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Deliver a commercial-first landing page that preserves the current hero unchanged, applies FluxKit branding with `fluxkit.png`, and showcases complete product capability coverage from the source app.

**Architecture:** Keep the existing section-based composition in `app/page.tsx` and add a few focused section components (`trust`, `value`, `product-tour`) that slot below the hero. Reuse and refine existing sections (`items`, `build-vs-buy`, `pricing`, `testimonials`, `faq`, `cta`) to tighten conversion flow and feature completeness while preserving current design language.

**Tech Stack:** Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, shadcn/ui components, lucide-react.

---

### Task 1: Add FluxKit brand asset

**Files:**

- Create: `public/fluxkit.png` (copied from sibling repo)

**Step 1: Verify source asset exists**

Run: `ls /home/abdssamie/Projects/convex-shipfast/public`
Expected: includes `fluxkit.png`

**Step 2: Copy the asset into marketing project**

Run: `cp "/home/abdssamie/Projects/convex-shipfast/public/fluxkit.png" "/home/abdssamie/Projects/convex-shipfast-marketing/public/fluxkit.png"`
Expected: command exits successfully

**Step 3: Verify copied asset exists**

Run: `ls /home/abdssamie/Projects/convex-shipfast-marketing/public`
Expected: includes `fluxkit.png`

**Step 4: Commit**

```bash
git add public/fluxkit.png
git commit -m "chore(brand): add fluxkit icon asset"
```

### Task 2: Create reusable FluxKit logo mark component

**Files:**

- Create: `components/ui/fluxkit-logo.tsx`
- Test: visual verification in navbar/footer after integration

**Step 1: Write minimal component file**

```tsx
import Image from "next/image";

type FluxkitLogoProps = {
  className?: string;
  size?: number;
};

export default function FluxkitLogo({
  className,
  size = 28,
}: FluxkitLogoProps) {
  return (
    <Image
      src="/fluxkit.png"
      alt="FluxKit logo"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
```

**Step 2: Run lint for the new file**

Run: `bun lint`
Expected: no lint errors in new component

**Step 3: Commit**

```bash
git add components/ui/fluxkit-logo.tsx
git commit -m "feat(brand): add reusable fluxkit logo component"
```

### Task 3: Apply brand icon in navbar and footer

**Files:**

- Modify: `components/sections/navbar/default.tsx`
- Modify: `components/sections/footer/default.tsx`

**Step 1: Replace placeholder logo defaults with FluxKit logo**

```tsx
import FluxkitLogo from "../../ui/fluxkit-logo";

// navbar default
logo = <FluxkitLogo size={24} />;

// footer default
logo = <FluxkitLogo size={28} />;
```

**Step 2: Ensure mobile sheet header also shows icon**

```tsx
<a href={homeUrl} className="flex items-center gap-2 text-xl font-bold">
  <FluxkitLogo size={22} />
  <span>{name}</span>
</a>
```

**Step 3: Run lint**

Run: `bun lint`
Expected: no import/order/unused errors

**Step 4: Commit**

```bash
git add components/sections/navbar/default.tsx components/sections/footer/default.tsx
git commit -m "feat(brand): use fluxkit icon in navigation and footer"
```

### Task 4: Add trust strip section under hero

**Files:**

- Create: `components/sections/trust/default.tsx`
- Modify: `app/page.tsx`

**Step 1: Create trust strip component**

```tsx
import { BadgeCheckIcon } from "lucide-react";
import FluxkitLogo from "../../ui/fluxkit-logo";
import { Section } from "../../ui/section";

export default function Trust() {
  return (
    <Section className="pt-8 sm:pt-12">
      <div className="max-w-container mx-auto grid gap-4 rounded-2xl border p-4 sm:grid-cols-3 sm:p-6">
        <div className="flex items-center gap-3">
          <FluxkitLogo size={26} />
          <p className="text-sm font-medium">
            Production-ready SaaS foundation
          </p>
        </div>
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <BadgeCheckIcon className="size-4" />
          Next.js 16 + React 19 + Convex
        </div>
        <div className="text-muted-foreground flex items-center gap-2 text-sm">
          <BadgeCheckIcon className="size-4" />
          Auth, billing, teams, realtime, and ops
        </div>
      </div>
    </Section>
  );
}
```

**Step 2: Mount trust strip after hero**

```tsx
import Trust from "../components/sections/trust/default";

<Hero />
<Trust />
```

**Step 3: Run build smoke check**

Run: `bun build`
Expected: successful production build

**Step 4: Commit**

```bash
git add components/sections/trust/default.tsx app/page.tsx
git commit -m "feat(landing): add trust strip below hero"
```

### Task 5: Add commercial value section

**Files:**

- Create: `components/sections/value/default.tsx`
- Modify: `app/page.tsx`

**Step 1: Create 3-card value section**

```tsx
import { Clock3Icon, ShieldCheckIcon, WalletCardsIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Section } from "../../ui/section";

const cards = [
  {
    title: "Launch in days",
    icon: Clock3Icon,
    body: "Start from a complete baseline and ship product features immediately.",
  },
  {
    title: "Lower engineering risk",
    icon: ShieldCheckIcon,
    body: "Use proven auth, billing, and operational defaults from day one.",
  },
  {
    title: "Monetize sooner",
    icon: WalletCardsIcon,
    body: "Deploy with subscription-ready flows instead of building billing from scratch.",
  },
];
```

**Step 2: Mount section after trust strip**

```tsx
<Trust />
<Value />
```

**Step 3: Run lint**

Run: `bun lint`
Expected: no lint errors

**Step 4: Commit**

```bash
git add components/sections/value/default.tsx app/page.tsx
git commit -m "feat(landing): add commercial value section"
```

### Task 6: Add product tour section (clustered capabilities)

**Files:**

- Create: `components/sections/product-tour/default.tsx`
- Modify: `app/page.tsx`

**Step 1: Create product tour with feature clusters**

```tsx
const clusters = [
  {
    title: "Authentication",
    points: [
      "Email/password + magic links",
      "Verification + reset flows",
      "Session management",
    ],
  },
  {
    title: "Billing",
    points: ["Polar integration", "Subscription lifecycle", "Usage tracking"],
  },
  {
    title: "Teams",
    points: ["Organizations", "Invitations", "Role-based access"],
  },
  {
    title: "Realtime",
    points: ["Convex reactive queries", "Instant sync", "Live notifications"],
  },
  {
    title: "Operations",
    points: ["Sentry", "Upstash rate limits", "Analytics providers"],
  },
  {
    title: "Growth",
    points: ["Landing surfaces", "Blog/changelog", "SEO-ready structure"],
  },
];
```

**Step 2: Mount after value section**

```tsx
<Value />
<ProductTour />
```

**Step 3: Run build**

Run: `bun build`
Expected: build succeeds

**Step 4: Commit**

```bash
git add components/sections/product-tour/default.tsx app/page.tsx
git commit -m "feat(landing): add product tour section"
```

### Task 7: Expand full feature matrix for complete coverage

**Files:**

- Modify: `components/sections/items/default.tsx`

**Step 1: Align item list to source app feature inventory**

```tsx
// Keep concise one-line value statements and ensure coverage for:
// auth, billing, teams, dashboard, tasks/calendar, realtime,
// notifications, email, sentry, rate limiting, analytics,
// content surfaces, type-safe DX, theme/responsive UI.
```

**Step 2: Tighten section heading for commercial framing**

```tsx
title = "Everything You Need to Ship and Scale a Commercial SaaS";
```

**Step 3: Run lint**

Run: `bun lint`
Expected: no lint errors

**Step 4: Commit**

```bash
git add components/sections/items/default.tsx
git commit -m "feat(landing): refine complete feature coverage matrix"
```

### Task 8: Update build-vs-buy section for commercial decision support

**Files:**

- Modify: `components/sections/comparison/build-vs-buy.tsx`

**Step 1: Tune copy for founder and dev team ROI framing**

```tsx
title = "Buy Back Months of Engineering Time";
summary = {
  buildLabel: "Build from scratch",
  buildValue: "3-5 months",
  shipfastLabel: "With FluxKit",
  shipfastValue: "Day 1",
  savingsLabel: "Estimated savings",
  savingsValue: "300+ hours",
};
```

**Step 2: Verify terminology consistency (FluxKit naming)**

```tsx
// Replace any lingering "Convex ShipFast" product-name usage in headings and labels where appropriate.
```

**Step 3: Run lint**

Run: `bun lint`
Expected: no lint errors

**Step 4: Commit**

```bash
git add components/sections/comparison/build-vs-buy.tsx
git commit -m "feat(landing): strengthen build-vs-buy commercial positioning"
```

### Task 9: Update testimonials and pricing for conversion

**Files:**

- Modify: `components/sections/testimonials/default.tsx`
- Modify: `components/sections/pricing/default.tsx`

**Step 1: Improve testimonials for credible proof framing**

```tsx
title = "Trusted by Teams Shipping Revenue-Producing SaaS";
// Keep concise, practical quotes and avoid inflated claims.
```

**Step 2: Make pricing commercial-first CTA hierarchy**

```tsx
// Business plan receives primary visual emphasis and purchase CTA.
cta: { label: "Buy FluxKit", ... }
// Keep free tier as secondary path.
```

**Step 3: Run build to validate table and card layout**

Run: `bun build`
Expected: build passes and static generation completes

**Step 4: Commit**

```bash
git add components/sections/testimonials/default.tsx components/sections/pricing/default.tsx
git commit -m "feat(landing): optimize social proof and pricing conversion"
```

### Task 10: Update FAQ and final CTA for objection handling + close

**Files:**

- Modify: `components/sections/faq/default.tsx`
- Modify: `components/sections/cta/default.tsx`

**Step 1: Update FAQ topics for buyer objections**

```tsx
// Include license clarity, updates, support expectations,
// customization flexibility, and time-to-first-shipment.
```

**Step 2: Make final CTA purchase-forward**

```tsx
title = "Ship Your SaaS Faster With FluxKit";
buttons = [
  { text: "Buy FluxKit", variant: "default", href: siteConfig.pricing.pro },
  { text: "View Docs", variant: "outline", href: siteConfig.docsUrl },
];
```

**Step 3: Run lint**

Run: `bun lint`
Expected: no lint errors

**Step 4: Commit**

```bash
git add components/sections/faq/default.tsx components/sections/cta/default.tsx
git commit -m "feat(landing): align faq and final cta with commercial journey"
```

### Task 11: Re-compose page flow while preserving hero unchanged

**Files:**

- Modify: `app/page.tsx`

**Step 1: Import and order all sections in final approved sequence**

```tsx
<Navbar />
<Hero />
<Trust />
<Value />
<ProductTour />
<Items />
<BuildVsBuy />
<Testimonials />
<Pricing />
<FAQ />
<CTA />
<Footer />
```

**Step 2: Verify hero import and usage are untouched**

Run: `git diff -- app/page.tsx components/sections/hero/default.tsx`
Expected: no changes in `components/sections/hero/default.tsx`

**Step 3: Run build**

Run: `bun build`
Expected: successful build with all sections rendered

**Step 4: Commit**

```bash
git add app/page.tsx
git commit -m "feat(landing): compose commercial-first section flow"
```

### Task 12: Final verification and polish

**Files:**

- Verify: all modified landing files

**Step 1: Run full lint/build verification**

Run: `bun lint && bun build`
Expected: both commands pass

**Step 2: Manual responsive smoke check**

Run: `bun dev`
Expected: confirm desktop/mobile for navbar, trust strip, pricing table, CTA, footer branding

**Step 3: Check no accidental hero edits**

Run: `git diff -- components/sections/hero/default.tsx`
Expected: empty diff

**Step 4: Commit final polish**

```bash
git add .
git commit -m "chore(landing): finalize commercial-first landing page polish"
```
