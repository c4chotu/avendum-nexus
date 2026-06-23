import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { B as BrandButton } from "./router-BUFV2UJb.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { ar as Building2, r as TowerControl, as as Wrench, j as Check, k as ArrowRight, F as Target, H as Handshake, v as TrendingUp, g as Cpu } from "../_libs/lucide-react.mjs";
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
const partnerTypes = [{
  icon: Building2,
  type: "System Integrator Partner",
  desc: "For SIs and telecom IT vendors who deliver and implement network operations platforms for operators. Become a certified Avendum delivery partner and expand your managed services portfolio with live production-grade products.",
  points: ["Full product delivery & implementation training", "Technical certification for your engineers", "Co-bid support for operator RFPs", "Shared delivery resources for complex programmes", "Revenue share model on sold licences"]
}, {
  icon: TowerControl,
  type: "OEM / Vendor Partner",
  desc: "For equipment vendors within multi-vendor ecosystems looking to bundle network intelligence and audit tools alongside their hardware and managed service offerings.",
  points: ["Technology integration & API access", "Joint go-to-market with operator accounts", "Co-development for vendor-specific modules", "NETIQ integration for your NMS / OSS ecosystem", "White-label option for branded deployments"]
}, {
  icon: Wrench,
  type: "Managed Service Partner",
  desc: "For managed service providers running day-to-day network operations. Use Avendum's platform as your operations backbone with full support coverage.",
  points: ["Partner support program", "Dedicated partner helpdesk escalation path", "Role-based access configured for your team", "Monthly reporting & audit logs", "Early access to new releases"]
}];
const whyPartner = [{
  icon: Target,
  title: "Proven products",
  desc: "NETRA and NETiQ are live in production. You're partnering on real, deployed software."
}, {
  icon: Handshake,
  title: "Joint delivery support",
  desc: "We support you through deployment — from initial setup and configuration to user training and go-live. You're not on your own."
}, {
  icon: TrendingUp,
  title: "Growing product family",
  desc: "Multiple products today, more on the roadmap. As Avendum's platform expands, so does the opportunity for our partners."
}, {
  icon: Cpu,
  title: "Deep network domain",
  desc: "Our products are built natively for network operations. Your clients will recognise software built by people who understand their workflows."
}];
function PartnerPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden py-12 lg:py-20 rounded-3xl bg-[var(--surface)]/20 border border-border/40 px-8 lg:px-12 mt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "relative z-10 max-w-3xl", initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold text-primary bg-primary/10 mb-6", children: "Partner Programme" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight", children: [
          "Partner with Avendum.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Build together." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed text-base lg:text-lg max-w-2xl font-light", children: "We work with system integrators, OEM, Network deployment vendor and managed service providers to extend the reach of our platforms across the enterprise ecosystem. There is a partnership model built for your organisation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", search: {
            interest: "partner"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { children: "Apply to Partner Programme" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#partner-types", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", children: "See Partner Types" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "partner-types", className: "mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Partner Types" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: "Three ways to partner." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed max-w-xl", children: "Choose the model that fits your organisation - or combine multiple for a broader engagement." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid lg:grid-cols-3 gap-6", children: partnerTypes.map((p, i) => {
        const Icon = p.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.5,
          delay: i * 0.1
        }, whileHover: {
          scale: 1.02,
          translateY: -4
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, className: "flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(242,101,34,0.08)] transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5.5 w-5.5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: p.type }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground leading-relaxed", children: p.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3", children: p.points.map((pt, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-xs text-muted-foreground animate-fade-in", style: {
            animationDelay: `${j * 0.05}s`
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-2.5 w-2.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: pt })
          ] }, j)) })
        ] }) }) }, p.type);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.98
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { hoverGlow: false, className: "p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[0_0_25px_rgba(242,101,34,0.06)] transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold", children: "Ready to become an Avendum partner?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Tell us about your organisation and we'll connect you with the right programme. Our partner team responds within 2 business days." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 shrink-0 flex-wrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", search: {
            interest: "alliance"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", children: "Download Partner Deck" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", search: {
            interest: "partner"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { children: [
            "Apply Now ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Why Partner with Avendum" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: "Built for long-term partnership." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: whyPartner.map((w, i) => {
        const Icon = w.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.95
        }, whileInView: {
          opacity: 1,
          scale: 1
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.4,
          delay: i * 0.1
        }, whileHover: {
          scale: 1.02,
          translateY: -4
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, className: "flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(242,101,34,0.08)] transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-bold", children: w.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: w.desc })
        ] }) }) }, w.title);
      }) })
    ] })
  ] });
}
export {
  PartnerPage as component
};
