# Marketing Repo Engineering Docs Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace buyer-oriented `/docs` content with deep, codebase-accurate engineering documentation for `convex-shipfast-marketing` only.

**Architecture:** Keep the existing Nextra App Router setup and rewrite content in `content/*.mdx` plus navigation in `content/_meta.js`. Structure docs architecture-first, then module references and runbooks, with each claim grounded in concrete file paths inside this repository.

**Tech Stack:** Next.js App Router, Nextra (`nextra-theme-docs`), MDX content, Bun scripts, ESLint.

---

### Task 1: Baseline current docs and source of truth files

**Files:**

- Read: `content/_meta.js`
- Read: `content/*.mdx`
- Read: `app/page.tsx`
- Read: `app/layout.tsx`
- Read: `app/docs/layout.tsx`
- Read: `app/docs/[[...mdxPath]]/page.tsx`
- Read: `config/site.ts`
- Read: `lib/blog-posts.ts`
- Read: `app/blog/page.tsx`
- Read: `app/blog/[slug]/page.tsx`
- Read: `app/sitemap.ts`
- Read: `app/robots.ts`
- Read: `convex/*.ts`

**Step 1: Capture documentation inventory**

List all existing docs pages and intended sections from `content/_meta.js`.

**Step 2: Capture architecture evidence map**

Create notes mapping runtime topics to concrete files (routing, rendering, config, styling, convex, SEO).

**Step 3: Validate gaps versus requested IA**

Identify which of the approved sections do not exist yet and which existing pages must be replaced.

**Step 4: Commit planning notes (optional if tracked)**

```bash
git add docs/plans/2026-03-09-marketing-repo-engineering-docs-implementation.md
git commit -m "docs: add engineering docs implementation plan"
```

### Task 2: Replace docs navigation with engineering IA

**Files:**

- Modify: `content/_meta.js`

**Step 1: Write failing navigation expectation (manual check)**

Define expected nav entries matching approved sections and verify current `_meta.js` does not match.

**Step 2: Update `_meta.js` for new sections**

Set top-level order to:

- `index`
- `system-architecture`
- `codebase-map`
- `routing-rendering`
- `ui-component-architecture`
- `content-mdx-pipeline`
- `configuration-environment`
- `data-layer-convex`
- `seo-metadata-performance`
- `styling-design-tokens`
- `build-lint-deployment`
- `troubleshooting-runbooks`
- `contributing-docs`

**Step 3: Verify navigation compiles**

Run: `bun run build`
Expected: build succeeds; no Nextra metadata errors.

**Step 4: Commit nav update**

```bash
git add content/_meta.js
git commit -m "docs: restructure docs navigation for engineering reference"
```

### Task 3: Author overview and system architecture pages

**Files:**

- Create/Modify: `content/index.mdx`
- Create: `content/system-architecture.mdx`

**Step 1: Write failing content checklist**

Checklist requires architecture scope, repo boundaries, and links to all deep sections; current docs fail checklist.

**Step 2: Implement `index.mdx` as technical portal home**

Include:

- what this repo is responsible for,
- how docs are organized,
- quick links to major technical areas,
- explicit boundary note: marketing repo only.

**Step 3: Implement `system-architecture.mdx`**

Include:

- high-level module graph,
- route/layout boundaries,
- docs pipeline boundaries,
- where Convex code exists in this repo,
- static asset and config ownership.

**Step 4: Verify docs routes**

Run: `bun run build`
Expected: `/docs` and `/docs/system-architecture` static generation succeeds.

**Step 5: Commit**

```bash
git add content/index.mdx content/system-architecture.mdx
git commit -m "docs: add technical overview and system architecture"
```

### Task 4: Author codebase map and routing/rendering deep dives

**Files:**

- Create: `content/codebase-map.mdx`
- Create: `content/routing-rendering.mdx`

**Step 1: Write failing checklist**

Checklist requires explicit directory ownership table and route execution path from request to rendered UI.

**Step 2: Implement `codebase-map.mdx`**

Document directories:

- `app/`
- `components/`
- `config/`
- `content/`
- `convex/`
- `lib/`
- `styles/`
- `public/`

Include generated artifacts note for `convex/_generated`.

**Step 3: Implement `routing-rendering.mdx`**

Document:

- App Router patterns,
- route-specific file references,
- layout nesting,
- docs catch-all route behavior,
- metadata generation touchpoints.

**Step 4: Verify**

Run: `bun run lint`
Expected: pass with no new lint issues.

**Step 5: Commit**

```bash
git add content/codebase-map.mdx content/routing-rendering.mdx
git commit -m "docs: document repository map and rendering flow"
```

### Task 5: Author UI architecture and content pipeline pages

**Files:**

- Create: `content/ui-component-architecture.mdx`
- Create: `content/content-mdx-pipeline.mdx`

**Step 1: Write failing checklist**

Checklist requires component layering, section composition patterns, and docs content resolution path.

**Step 2: Implement `ui-component-architecture.mdx`**

Cover:

- `components/sections/*` composition patterns,
- `components/landing/*` specialization,
- `components/ui/*` primitives,
- shared providers/contexts.

**Step 3: Implement `content-mdx-pipeline.mdx`**

Cover:

- `content/*.mdx`, `_meta.js` navigation,
- `app/docs/[[...mdxPath]]/page.tsx` import/generate metadata/static params,
- `app/docs/layout.tsx` + `getPageMap("/docs")`.

**Step 4: Verify**

Run: `bun run build`
Expected: docs routes compile and static params generation succeeds.

**Step 5: Commit**

```bash
git add content/ui-component-architecture.mdx content/content-mdx-pipeline.mdx
git commit -m "docs: add component architecture and mdx pipeline references"
```

### Task 6: Author configuration, environment, and Convex data layer docs

**Files:**

- Create: `content/configuration-environment.mdx`
- Create: `content/data-layer-convex.mdx`
- Read: `.env.example`

**Step 1: Write failing checklist**

Checklist requires env var documentation tied to consumers and boundaries on Convex behavior in this repo.

**Step 2: Implement `configuration-environment.mdx`**

Document:

- site/legal config modules,
- env variables from `.env.example`,
- where env/config values are consumed.

**Step 3: Implement `data-layer-convex.mdx`**

Document:

- what exists in `convex/`,
- generated files vs authored files,
- auth/polar/http entry points present,
- current limitations/scope in marketing repo.

**Step 4: Verify**

Run: `bun run lint`
Expected: pass.

**Step 5: Commit**

```bash
git add content/configuration-environment.mdx content/data-layer-convex.mdx
git commit -m "docs: document configuration surfaces and convex integration"
```

### Task 7: Author SEO/performance and styling docs

**Files:**

- Create: `content/seo-metadata-performance.mdx`
- Create: `content/styling-design-tokens.mdx`

**Step 1: Write failing checklist**

Checklist requires metadata/robots/sitemap coverage and CSS/token/font ownership mapping.

**Step 2: Implement `seo-metadata-performance.mdx`**

Document:

- metadata definitions in layouts/pages,
- sitemap/robots generation,
- static rendering/performance-relevant choices visible in code.

**Step 3: Implement `styling-design-tokens.mdx`**

Document:

- globals and utility styles,
- Tailwind and class composition conventions,
- font loading via `lib/fonts.ts`.

**Step 4: Verify**

Run: `bun run build`
Expected: pass.

**Step 5: Commit**

```bash
git add content/seo-metadata-performance.mdx content/styling-design-tokens.mdx
git commit -m "docs: add seo/performance and styling architecture docs"
```

### Task 8: Author operations and contribution pages

**Files:**

- Create: `content/build-lint-deployment.mdx`
- Create: `content/troubleshooting-runbooks.mdx`
- Create: `content/contributing-docs.mdx`
- Read: `package.json`

**Step 1: Write failing checklist**

Checklist requires executable command docs and concrete runbook symptom->cause->fix entries.

**Step 2: Implement `build-lint-deployment.mdx`**

Document:

- available scripts and expected outputs,
- local verification sequence,
- deployment notes supported by repo config.

**Step 3: Implement `troubleshooting-runbooks.mdx`**

Include scenarios:

- missing docs route,
- mdxPath/static params mismatch,
- `_meta.js` navigation errors,
- lint/build regression patterns,
- stale generated artifacts issues.

**Step 4: Implement `contributing-docs.mdx`**

Add standards:

- all claims require file references,
- prefer architecture-first updates,
- required verification commands before merge.

**Step 5: Verify**

Run: `bun run lint && bun run build`
Expected: both pass.

**Step 6: Commit**

```bash
git add content/build-lint-deployment.mdx content/troubleshooting-runbooks.mdx content/contributing-docs.mdx
git commit -m "docs: add operations runbooks and docs contribution guide"
```

### Task 9: Remove or rewrite legacy buyer-oriented pages

**Files:**

- Modify/Delete: `content/overview.mdx`
- Modify/Delete: `content/feature-tour.mdx`
- Modify/Delete: `content/getting-started.mdx`
- Modify/Delete: `content/customization.mdx`
- Modify/Delete: `content/deployment.mdx`
- Modify/Delete: `content/licensing.mdx`
- Modify/Delete: `content/build-vs-buy.mdx`
- Modify/Delete: `content/faq.mdx`

**Step 1: Define keep/remove matrix**

If a page title conflicts with engineering IA, remove it and its nav entry; otherwise rewrite into technical content.

**Step 2: Apply changes minimally**

Prefer deleting obsolete buyer-guide pages to avoid mixed messaging.

**Step 3: Verify nav integrity**

Run: `bun run build`
Expected: no broken nav links or unresolved docs routes.

**Step 4: Commit**

```bash
git add content
git commit -m "docs: remove buyer-oriented docs and align to engineering reference"
```

### Task 10: Final verification and handoff summary

**Files:**

- Modify (if needed): `README.md` (optional docs pointer)

**Step 1: Run full verification**

Run: `bun run lint && bun run build`
Expected: all commands pass.

**Step 2: Manual route verification**

Run dev server and check:

- `/docs`
- each new docs route from `_meta.js`
- no 404s; sidebar order matches IA.

**Step 3: Prepare handoff notes**

Document:

- pages added/removed,
- key technical coverage delivered,
- verification outputs.

**Step 4: Final commit**

```bash
git add content/_meta.js content/*.mdx README.md
git commit -m "docs: deliver in-depth engineering documentation for marketing repo"
```
