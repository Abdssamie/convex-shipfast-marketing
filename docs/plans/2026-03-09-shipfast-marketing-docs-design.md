# Shipfast Marketing Docs Redesign (Nextra)

## Context

The current docs in this repository are implemented as custom React pages under `app/docs/*` and do not provide strong buyer onboarding value. The source product repository (`/home/abdssamie/Projects/convex-shipfast`) already contains a Nextra docs app structure in `/docs` that can be used as a reference.

Goal: create a complete, buyer-focused docs experience at `/docs` on this website domain, using Nextra docs conventions and detailed feature documentation to improve purchase confidence.

## Objectives

1. Serve documentation at `websitedomain/docs` and nested routes.
2. Replace low-value docs with deep, conversion-supporting onboarding content.
3. Cover all major product capabilities before purchase decision.
4. Keep landing page and existing marketing routes intact.

## Approach

Recommended approach: integrate Nextra-powered documentation into this repository and migrate docs content to structured MDX pages designed for pre-purchase understanding and early onboarding.

## Information Architecture

- Overview
- Feature Tour
- Getting Started
- Customization
- Deployment
- Licensing and Commercial Use
- Build vs Buy
- FAQ

Each section includes concrete details from the product repository and explicit boundaries for what is included, what is configurable, and what requires user implementation.

## Technical Design

1. Add Nextra docs routing/config compatible with current Next.js setup.
2. Introduce docs content files in MDX for maintainability and navigation.
3. Implement docs theme config with real project links/branding.
4. Ensure `/docs` is canonical entry and nested docs routes resolve.
5. Remove or replace existing low-value custom docs pages without impacting non-doc routes.

## Content Strategy

Docs are written for two moments:

- **Pre-purchase evaluation**: clarify what buyers receive and expected implementation effort.
- **Immediate onboarding**: provide clear first steps post-purchase.

Content priorities:

- Feature completeness and realistic scope
- Integration and environment expectations
- Customization paths and safe extension guidance
- Licensing clarity and team usage scenarios

## Verification Plan

- Confirm `/docs` and nested docs routes render in dev and production build.
- Validate docs navigation and MDX rendering.
- Run `next build` and fix any integration issues.
- Review each key product capability is documented in buyer-readable terms.

## Execution Model

Use subagents in parallel for independent streams:

1. Current-repo docs architecture and Nextra integration updates.
2. Feature extraction from `/home/abdssamie/Projects/convex-shipfast`.
3. Buyer-focused MDX authoring for the complete docs set.

Then merge outputs, run verification, and finalize.
