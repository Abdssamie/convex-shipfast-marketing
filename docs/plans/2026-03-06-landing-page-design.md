# FluxKit Marketing Landing Page Design

Date: 2026-03-06
Project: `convex-shipfast-marketing`
Status: Approved

## Context

This design updates the marketing site landing page for FluxKit to drive commercial conversion while preserving the existing strong hero section exactly as-is. The landing page should attract developers, present complete product capability coverage, and communicate business value clearly.

Reference sources used:

- Product source app: `../convex-shipfast`
- Existing landing inspiration in source app: `src/app/(landing)`
- Competitive inspiration: `https://makerkit.dev/`

## Goals

1. Position FluxKit as a commercial product first.
2. Keep current hero section unchanged.
3. Showcase all core product features from the source app in a structured way.
4. Improve conversion with trust, differentiation, pricing clarity, and final CTA flow.
5. Apply FluxKit brand icon (`fluxkit.png`) consistently.

## Non-Goals

- Redesigning or editing the current hero section content, visuals, or behavior.
- Changing core framework or design system foundations.
- Introducing heavy visual experimentation that breaks current design language.

## Information Architecture

Page order after this update:

1. Navbar
2. Hero (unchanged)
3. Trust strip (proof + stack credibility)
4. Commercial value section (3 outcomes)
5. Product tour (clustered capabilities)
6. Full feature coverage matrix
7. Build vs Buy comparison
8. Testimonials / built-with proof section
9. Pricing (commercial-first CTA hierarchy)
10. FAQ
11. Final CTA
12. Footer

## Section Design

### 1) Hero (Locked)

- Keep exactly as implemented currently.
- No copy, structure, or style edits.

### 2) Trust Strip

Purpose:

- Immediate credibility after hero.

Content:

- Production-ready claim.
- Core stack indicators (Next.js, Convex, TypeScript, Tailwind, etc.).
- Short outcome-oriented proof points.

Branding:

- Include `fluxkit.png` subtly as brand anchor.

### 3) Commercial Value Section

Purpose:

- Frame purchase value in business terms.

Content model (3 cards):

- Launch faster.
- Reduce implementation risk.
- Monetize sooner with billing-ready foundation.

Style:

- Concise copy, direct outcomes, developer-friendly language.

### 4) Product Tour (Clustered)

Purpose:

- Show practical depth without overwhelming users.

Clusters:

- Auth and user lifecycle.
- Billing and subscription lifecycle.
- Multi-tenancy and team workflows.
- Real-time backend and notifications.
- Reliability and operations (Sentry, rate limiting, analytics).
- Marketing surfaces (landing/blog/changelog where applicable).

### 5) Full Feature Matrix

Purpose:

- Explicitly cover every major included capability.

Source of truth:

- Feature inventory from `../convex-shipfast/README.md` and existing landing-related modules.

Requirement:

- No major capability omitted from the matrix.

### 6) Build vs Buy

Purpose:

- Support commercial decision with concrete trade-offs.

Content:

- Time/cost/risk comparison between building from scratch and using FluxKit.
- Keep claims realistic and credible.

### 7) Testimonials / Proof

Purpose:

- Increase trust through external or usage-based credibility.

Approach:

- Professional, concise testimonials/project proof cards.
- Avoid inflated claims.

### 8) Pricing

Purpose:

- Convert with clear offer framing.

Rules:

- Commercial-first hierarchy.
- Primary CTA: Buy FluxKit.
- Secondary CTA: demo/docs/GitHub as lower-friction option.

### 9) FAQ + Final CTA

Purpose:

- Resolve objections then prompt purchase decision.

FAQ themes:

- License/use terms.
- Updates/support.
- Tech stack flexibility/customization.

Final CTA:

- Strong but not aggressive; confidence and execution speed focus.

## Brand and Visual Direction

- Preserve current visual language and quality level.
- Keep presentation premium and developer-oriented.
- Use `public/fluxkit.png` as canonical icon in navbar/footer and trust contexts.
- Maintain responsive behavior across desktop and mobile.
- Keep motion restrained and purposeful.

## Implementation Mapping

Primary files:

- `app/page.tsx` (section composition/order)
- `components/sections/navbar/default.tsx` (brand icon usage)
- `components/sections/footer/default.tsx` (brand icon usage)
- `components/sections/items/default.tsx` (feature completeness and clarity)
- `components/sections/comparison/build-vs-buy.tsx` (commercial framing)
- `components/sections/testimonials/default.tsx` (proof framing)
- `components/sections/pricing/default.tsx` (CTA hierarchy)

New section candidates:

- `components/sections/trust/default.tsx`
- `components/sections/value/default.tsx`
- `components/sections/product-tour/default.tsx`

Asset sync:

- Copy `../convex-shipfast/public/fluxkit.png` to `public/fluxkit.png`.

## Quality and Validation

Acceptance criteria:

- Hero remains unchanged.
- FluxKit brand icon appears in intended locations.
- Landing page includes complete feature coverage.
- Commercial-first narrative is clear from top to bottom.
- Page is responsive and visually consistent.

Verification commands:

- `bun lint`
- `bun build`

## Risks and Mitigations

Risk: Feature overload makes page dense.
Mitigation: Use clustered tour + concise matrix descriptions.

Risk: Commercial tone feels generic.
Mitigation: Tie every claim to concrete shipped capability.

Risk: Inconsistent brand application.
Mitigation: Limit `fluxkit.png` usage to intentional anchors.

## Decision Log

- Positioning chosen: commercial product first.
- Hero edit request: explicitly rejected by user; hero remains untouched.
- Competitor inspiration used for structure and conversion flow, not copy.
