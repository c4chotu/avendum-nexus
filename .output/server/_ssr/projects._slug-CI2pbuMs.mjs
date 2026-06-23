import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { c as Route$5, p as projects, B as BrandButton } from "./router-BUFV2UJb.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { a7 as ArrowLeft, j as Check, A as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
function ProjectDetail() {
  const {
    project
  } = Route$5.useLoaderData();
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[60vh] min-h-[420px] w-full overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: project.image, alt: project.title, className: "absolute inset-0 h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-6 -mt-40 relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          " All projects"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full glass px-3 py-1 text-primary", children: project.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: project.client }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "· ",
            project.year
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground", children: [
            "· ",
            project.duration
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-4xl sm:text-5xl font-semibold leading-tight", children: project.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground max-w-3xl", children: project.summary })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, hoverGlow: false, className: "grid grid-cols-2 md:grid-cols-4 gap-y-6 p-8", children: project.outcome.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-3xl sm:text-4xl font-semibold text-gradient", children: o.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: o.label })
    ] }, o.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-6 mt-20 grid lg:grid-cols-[1fr_280px] gap-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "The challenge" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-2xl sm:text-3xl font-semibold", children: "Where it started" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: project.challenge })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Our approach" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-2xl sm:text-3xl font-semibold", children: "What we built" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: project.approach.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 rounded-xl border border-border/60 bg-[var(--surface)]/40 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5 text-primary mt-0.5 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm leading-relaxed", children: a })
          ] }, i)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "space-y-6 lg:sticky lg:top-28 self-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: "Stack" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: project.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-[var(--surface-2)] px-3 py-1 text-xs", children: s }, s)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg font-semibold", children: "Have a similar project?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Talk to one of our engineering leads - usually within a business day." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "mt-4 inline-block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { size: "sm", children: "Start a conversation" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "More work" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid md:grid-cols-2 gap-6", children: others.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects/$slug", params: {
        slug: p.slug
      }, className: "group block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "overflow-hidden p-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/9] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-muted-foreground", children: p.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-xl font-semibold group-hover:text-primary transition-colors", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-sm text-primary", children: [
            "Read ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }) }, p.slug)) })
    ] })
  ] });
}
export {
  ProjectDetail as component
};
