import { Polar } from "@convex-dev/polar";

import { components } from "./_generated/api";
import type { DataModel } from "./_generated/dataModel";
import { action, query } from "./_generated/server";

const polarComponent = (components as { polar?: unknown }).polar;
const getAuth = (ctx: unknown) =>
  (ctx as {
    auth: {
      getUserIdentity: () => Promise<
        | {
            subject?: string | null;
            email?: string | null;
          }
        | null
      >;
    };
  }).auth;

if (!polarComponent) {
  console.warn(
    "Polar component reference is not generated yet. Run `npx convex dev` to finalize the Convex billing bindings.",
  );
}

export const polar = new Polar<DataModel>(polarComponent as never, {
  getUserInfo: async (ctx) => {
    const identity = await getAuth(ctx).getUserIdentity();

    if (!identity?.subject) {
      throw new Error("Authenticated user required for Polar billing.");
    }

    if (!identity.email) {
      throw new Error(
        "Authenticated user must expose an email claim before Polar checkout can be used.",
      );
    }

    return {
      userId: identity.subject,
      email: identity.email,
    };
  },
  server: process.env.POLAR_SERVER === "production" ? "production" : "sandbox",
});

export const {
  cancelCurrentSubscription,
  changeCurrentSubscription,
  generateCheckoutLink,
  generateCustomerPortalUrl,
  listAllProducts,
  listAllSubscriptions,
} = polar.api();

export const getViewerSubscription = query({
  args: {},
  handler: async (ctx) => {
    const identity = await getAuth(ctx).getUserIdentity();

    if (!identity?.subject) {
      return null;
    }

    return polar.getCurrentSubscription(ctx, {
      userId: identity.subject,
    });
  },
});

export const syncPolarProducts = action({
  args: {},
  handler: async (ctx) => {
    await polar.syncProducts(ctx);
    return null;
  },
});
