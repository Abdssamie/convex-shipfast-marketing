# Marketing Repo Engineering Docs Design

Date: 2026-03-09
Repo: `convex-shipfast-marketing`
Scope: In-depth technical documentation for this repository only.

## Context

The current `/docs` content is positioned like buyer-facing guidance. The requested direction is the opposite: deep, codebase-grounded technical documentation of the marketing repository itself.

Constraints:

- No cross-repo assumptions from `convex-shipfast`.
- No feature claims that cannot be traced to files in this repo.
- Keep docs served via Nextra at `/docs`.

## Goals

1. Provide complete architecture and module-level understanding for engineers working in this repo.
2. Make data/config/rendering flows explicit and verifiable.
3. Add operational runbooks for common failures.
4. Establish contribution standards that keep docs synchronized with code.

## Non-Goals

- Product onboarding content for buyers.
- Backend behavior documentation not represented in this repo.
- Any claim without direct file evidence.

## Approach Options

### Option A (Recommended): Architecture-first with cross-linked references

- Start with a system map and runtime flows.
- Follow with folder/module deep dives.
- Add runbooks and contribution standards.

Why recommended:

- Supports both orientation and deep maintenance work.
- Reduces fragmentation while preserving full depth.

### Option B: Filesystem-first reference mirror

- Organize docs by directory tree only.

Trade-off:

- Highly complete but harder to understand runtime behavior end-to-end.

### Option C: Runtime-flow-first narrative

- Organize by route execution paths and user journeys only.

Trade-off:

- Strong behavioral explanation but weaker long-term reference structure.

## Approved Information Architecture

Top-level `/docs` sections:

- Overview
- System Architecture
- Codebase Map
- Routing and Rendering
- UI Component Architecture
- Content and MDX/Nextra Pipeline
- Configuration and Environment
- Data Layer (Convex usage in this repo)
- SEO, Metadata, and Performance
- Styling and Design Tokens
- Build, Lint, and Deployment
- Troubleshooting and Runbooks
- Contributing to Docs

Each page includes:

- Scope/ownership
- Key files and symbols
- Flow diagrams in prose
- Extension points
- Constraints and pitfalls

## Quality Bar

- Every meaningful claim references concrete repo files.
- Keep language technical and precise.
- Avoid buyer/value framing.
- Verify route integrity and build/lint before completion.

## Risks and Mitigations

1. **Drift from code**
   - Mitigation: add docs contribution checklist requiring file references and verification commands.
2. **Over-documenting generated or irrelevant files**
   - Mitigation: prioritize source files and explicitly mark generated artifacts.
3. **Nextra nav/content mismatch**
   - Mitigation: centralize nav in `content/_meta.js` and validate all links.

## Success Criteria

- `/docs` is fully technical and repo-accurate.
- Engineers can trace major route/render/config paths without reading every source file first.
- Runbooks cover common failure modes with concrete fixes.
- `bun run lint` and `bun run build` pass after docs rewrite.
