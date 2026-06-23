import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { B as BrandButton } from "./router-BUFV2UJb.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { g as Cpu, d as Sparkles, e as ShieldCheck, k as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function NexusPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse", style: {
        animationDuration: "8s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[130px] animate-pulse", style: {
        animationDuration: "12s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 max-w-2xl w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, animate: {
      opacity: 1,
      y: 0
    }, transition: {
      duration: 0.6
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "text-center p-8 sm:p-12 border border-border/40 bg-card/45 backdrop-blur-md rounded-3xl relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-16 w-16 rounded-2xl bg-[#0F9F6E]/10 text-[#0F9F6E] flex items-center justify-center mb-8 border border-[#0F9F6E]/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-8 w-8 animate-pulse" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3" }),
        " System Validation"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-4xl font-semibold leading-tight text-foreground", children: "NEXUS IP Provisioning" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed", children: "Our automated IP provisioning automation module is currently undergoing extensive enterprise security and performance validation. Access to the console is limited to verified sandbox instances." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 p-4 rounded-xl border border-border/40 bg-foreground/5 flex items-start gap-3 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-[#0F9F6E] shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold text-foreground", children: "Secure Deployment Sandbox" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-0.5 leading-relaxed", children: "During this validation phase, active IP allocation workflows and cygnet-to-order-management integrations are simulated within local, isolated private cloud network testbeds." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/demo", search: {
          product: "nexus"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { className: "w-full sm:w-auto", children: [
          "Request Sandboxed Demo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", className: "w-full sm:w-auto", children: "Return to Home" }) })
      ] })
    ] }) }) })
  ] });
}
export {
  NexusPage as component
};
