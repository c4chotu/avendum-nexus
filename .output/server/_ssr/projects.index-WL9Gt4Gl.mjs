import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { p as projects } from "./router-BUFV2UJb.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { A as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/zod.mjs";
function ProjectsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Featured projects" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight", children: [
        "Eleven years of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "shipping outcomes" }),
        " for operators, neutral hosts, and smart cities."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground", children: "A small sample of platforms we've built in production - from autonomous NOCs to edge-native city twins." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 space-y-10", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects/$slug", params: {
      slug: p.slug
    }, className: "group block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { className: "overflow-hidden p-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `grid lg:grid-cols-2 ${i % 2 ? "lg:[direction:rtl]" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden lg:[direction:ltr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em]", children: p.category })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 sm:p-10 flex flex-col justify-center lg:[direction:ltr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.year })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-2xl sm:text-3xl font-semibold group-hover:text-primary transition-colors", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: p.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-4", children: p.outcome.slice(0, 2).map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border/60 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-semibold text-gradient", children: o.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: o.label })
        ] }, o.label)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-6 inline-flex items-center gap-2 text-sm text-primary", children: [
          "View case study ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }) }, p.slug)) })
  ] });
}
export {
  ProjectsPage as component
};
