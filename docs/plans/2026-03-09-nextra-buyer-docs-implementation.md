# Nextra Buyer Docs Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the weak custom docs pages with a detailed, buyer-focused Nextra docs experience served at `/docs`.

**Architecture:** Keep the existing marketing site intact, route all docs through a Nextra App Router catch-all under `app/docs/[[...mdxPath]]`, and source content from `content/*.mdx` with `_meta.js` navigation files. Use a docs-specific Nextra layout in `app/docs/layout.tsx` and remove conflicting custom docs route files.

**Tech Stack:** Next.js 16 App Router, Nextra 4.6.1, nextra-theme-docs 4.6.1, MDX

---

### Task 1: Wire Nextra docs routing at `/docs`

**Files:**

- Modify: `next.config.mjs`
- Modify: `app/docs/layout.tsx`
- Create: `app/docs/[[...mdxPath]]/page.tsx`
- Create: `app/docs/theme-config.tsx`

**Step 1: Write failing route expectation**

Check current route behavior and note that docs are custom pages, not MDX catch-all.

**Step 2: Implement docs catch-all route**

Create `app/docs/[[...mdxPath]]/page.tsx` using Nextra helpers:

- `generateStaticParamsFor("mdxPath")`
- `importPage(params.mdxPath)`
- `generateMetadata`
- Render page through `useMDXComponents().wrapper`

**Step 3: Implement Nextra docs layout**

Update `app/docs/layout.tsx` to use `Layout` from `nextra-theme-docs`, source `pageMap` from `getPageMap("/docs")`, and keep docs scoped to `/docs` routes.

**Step 4: Run docs route verification**

Run: `bun run build`
Expected: docs routes compile with Nextra page import helpers.

### Task 2: Replace custom docs pages with MDX content tree

**Files:**

- Create: `content/_meta.js`
- Create: `content/index.mdx`
- Create: `content/overview.mdx`
- Create: `content/feature-tour.mdx`
- Create: `content/getting-started.mdx`
- Create: `content/customization.mdx`
- Create: `content/deployment.mdx`
- Create: `content/licensing.mdx`
- Create: `content/build-vs-buy.mdx`
- Create: `content/faq.mdx`
- Delete: `app/docs/page.tsx`
- Delete: `app/docs/getting-started/page.tsx`
- Delete: `app/docs/features/page.tsx`
- Delete: `app/docs/features/billing/page.tsx`
- Delete: `app/docs/deployment/page.tsx`

**Step 1: Add docs navigation metadata**

Define sidebar order and readable labels in `content/_meta.js`.

**Step 2: Author buyer-focused docs pages**

Write detailed MDX pages that cover:

- product scope and outcomes
- feature boundaries (production-backed vs UI/demo)
- setup and first-win checklist
- customization and extension limits
- deployment responsibilities
- licensing/commercial usage clarity
- build-vs-buy business case
- objection-handling FAQ

**Step 3: Remove route conflicts**

Delete old custom `app/docs/*` page files so Nextra catch-all controls all `/docs` content.

**Step 4: Run docs compilation check**

Run: `bun run build`
Expected: all MDX pages resolve via Nextra and navigation builds correctly.

### Task 3: Brand and conversion polish for docs

**Files:**

- Modify: `app/docs/theme-config.tsx`
- Modify: `content/index.mdx`
- Modify: `config/site.ts` (if needed for missing links)

**Step 1: Configure docs theme metadata**

Set project link/chat/footer/edit link behavior in docs theme config to real project URLs and support email/contact destination.

**Step 2: Add conversion-safe CTAs**

Add clear call-to-actions in docs index and key pages:

- view live demo
- buy Pro/Teams
- check licensing before purchase

**Step 3: Verify no overclaiming**

Ensure copy reflects real product state (for example, note where modules are demo surfaces versus fully backend-wired features).

**Step 4: Build and lint verification**

Run:

- `bun run lint`
- `bun run build`

Expected: both succeed with no docs integration regressions.

### Task 4: Final QA and handoff

**Files:**

- Modify: `README.md` (optional short docs section)

**Step 1: Manual route QA checklist**

Verify these routes are reachable and render:

- `/docs`
- `/docs/overview`
- `/docs/feature-tour`
- `/docs/getting-started`
- `/docs/customization`
- `/docs/deployment`
- `/docs/licensing`
- `/docs/build-vs-buy`
- `/docs/faq`

**Step 2: Content QA**

Check each page answers pre-purchase and onboarding questions in plain language.

**Step 3: Document final structure**

If helpful, add a short README pointer for where docs content lives (`content/`).

**Step 4: Final status output**

Provide list of changed files and verification command results.
