import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { p as Clock, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./router-BUFV2UJb.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/zod.mjs";
const posts = [{
  slug: "closed-loop-noc",
  tag: "AI Operations",
  title: "Closed-loop NOC: the architecture that finally killed our alert fatigue",
  excerpt: "Why correlation alone isn't enough - and how policy-driven remediation reshapes the on-call rotation.",
  read: "8 min read",
  date: "Mar 2026"
}, {
  slug: "multi-vendor-intent",
  tag: "Network Deployment",
  title: "Designing intent models that survive six transport vendors",
  excerpt: "A pragmatic schema for vendor-agnostic intent, with rollback semantics that field teams actually trust.",
  read: "11 min read",
  date: "Feb 2026"
}, {
  slug: "edge-wasm-runtime",
  tag: "Edge & IoT",
  title: "Why we picked a WASM runtime for 9,200 edge nodes",
  excerpt: "Footprint, OTA updates, and the unexpected wins around supply-chain provenance at the network edge.",
  read: "6 min read",
  date: "Jan 2026"
}, {
  slug: "lakehouse-cdc",
  tag: "Data Platforms",
  title: "Streaming CDC into a lakehouse without the 3am pager",
  excerpt: 'Schema-evolution guardrails, watermark management, and the operational tax of "real-time".',
  read: "9 min read",
  date: "Dec 2025"
}, {
  slug: "federated-learning-telco",
  tag: "Privacy & ML",
  title: "Federated learning in telecom: notes from a city-scale rollout",
  excerpt: "Why differential privacy budgets matter more than your model architecture at the edge.",
  read: "7 min read",
  date: "Nov 2025"
}, {
  slug: "platform-team-pods",
  tag: "Engineering Org",
  title: "Embedded pods: the operating model behind our delivery velocity",
  excerpt: "How we structure senior pods that ship production code in week one - and the trade-offs nobody talks about.",
  read: "5 min read",
  date: "Oct 2025"
}];
function InsightsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Insights · Field notes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight", children: [
        "Notes from the wire - ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "telecom AI in production" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "Honest write-ups from our engineering teams: what worked, what we threw away, and what we wish someone had told us before week one." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "group cursor-pointer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-[0.3em] text-primary", children: p.tag }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-xl font-semibold leading-snug group-hover:text-primary transition-colors", children: p.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: p.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
          " ",
          p.read
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.date })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-4 inline-flex items-center gap-1 text-sm text-primary", children: [
        "Request the full essay ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
      ] })
    ] }, p.slug)) })
  ] });
}
export {
  InsightsPage as component
};
