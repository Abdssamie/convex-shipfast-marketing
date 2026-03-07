import polarComponent from "@convex-dev/polar/convex.config.js";
import { defineApp } from "convex/server";

const app = defineApp();

app.use(polarComponent);

export default app;
