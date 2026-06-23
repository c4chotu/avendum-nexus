import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { B as BrandButton } from "./router-BUFV2UJb.mjs";
import { F as Target, v as TrendingUp, e as ShieldCheck, U as Users, J as Hexagon, O as GitBranch, k as ArrowRight, Q as Shield, V as Lock, D as Database, a as MapPin, P as Phone, b as Mail } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
const philosophy = [{
  icon: Target,
  label: "Domain Focus",
  title: "Domain-built, not adapted",
  body: "Every workflow, validation rule, and dashboard reflects how network planning and NMS auditing actually work - built with the teams who do it, not from a generic enterprise template. We speak the language of CM dumps, PCI allocations, and NMS parameter matrices."
}, {
  icon: TrendingUp,
  label: "Pragmatism",
  title: "Pragmatic over theoretical",
  body: "We look realistically at business challenges and define fit-for-purpose solutions. We build what solves the actual problem, and expand from proven value rather than overselling a platform vision. No feature bloat. No shelf-ware."
}, {
  icon: ShieldCheck,
  label: "Trust",
  title: "Deliver on every commitment",
  body: "If it's in the support program, it's in the program. If we say go-live is a date, that's the date. Our clients return because we keep our word - no surprises at handover, no scope creep after contract sign."
}, {
  icon: Users,
  label: "User Centric",
  title: "Customer team at the centre",
  body: "Our vision is to put customer teams at the epicentre of enterprise software - enabling and easing the work for the people who actually use these systems. Every UI decision is reviewed by network engineers, not just designers."
}];
const techStack = [{
  layer: "Ingestion Layer",
  items: ["XML / RAML / CSV Parser", "Multi-Vendor Adapters", "NMS Export Connectors", "REST / SFTP Fetch"],
  color: "#7C3AED"
}, {
  layer: "Intelligence Core",
  items: ["Audit Rules Engine", "Graph Correlation DB", "ML Drift Predictor", "Topology Stitching"],
  color: "#2563EB"
}, {
  layer: "Integration Bus",
  items: ["Multivendor integration", "minimal integration", "NMS Bidirectional"],
  color: "#059669"
}, {
  layer: "Presentation",
  items: ["react SP", "executive dashboard", "Report Generator", "API Gateway"],
  color: "#D97706"
}];
const standards = [{
  name: "3GPP TS 32.xxx",
  desc: "NMS Configuration Management Protocols"
}, {
  name: "TM Forum GB921",
  desc: "Business Process Framework (eTOM)"
}, {
  name: "ETSI ENM API",
  desc: "Ericsson Network Manager Integration"
}, {
  name: "ONAP (partial)",
  desc: "Open Network Automation Platform Adapters"
}, {
  name: "TR-069",
  desc: "CPE WAN Management Protocol (Wireline)"
}, {
  name: "YANG / NETCONF",
  desc: "Network Configuration Protocol Support"
}, {
  name: "FCAPS Model",
  desc: "Fault, Config, Accounting, Perf., Security"
}, {
  name: "MEF 3.0",
  desc: "Carrier Ethernet Standards (MW/Wireline)"
}];
function CompanyPage() {
  const [activePhilo, setActivePhilo] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  reactExports.useEffect(() => {
    const id = setInterval(() => setActivePhilo((p) => (p + 1) % philosophy.length), 4500);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pb-20 animate-fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center py-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: -30
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.7
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/25 mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Hexagon, { className: "h-3 w-3" }),
          "Telecom-Native Enterprise Software"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight", children: [
          "Built by telecom",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "practitioners,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "for telecom teams." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed text-base max-w-xl font-light", children: "Avendum Technologies develops mission-critical enterprise platforms for the telecommunications industry - software built natively for network planning, provisioning, and NMS auditing across every domain layer." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { children: "Join Our Team" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", children: "Get in Touch" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, animate: {
        opacity: 1,
        scale: 1
      }, transition: {
        duration: 0.7,
        delay: 0.15
      }, className: "relative w-full h-[380px] flex items-center justify-center overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-primary/20 rounded-full blur-[65px] pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full max-w-[360px] max-h-[360px] flex items-center justify-center relative z-10 filter drop-shadow-[0_0_35px_rgba(255,107,0,0.25)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("lottie-player", { src: "/analytics-performance.json", background: "transparent", speed: "1", loop: true, autoplay: true, style: {
          width: "100%",
          height: "100%"
        } }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Deep Dive" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
          "Who we are & ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "what we do." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed font-light", children: "We are network engineering practitioners building software to solve the real complexity of modern, multi-vendor telecommunications systems." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-3 gap-6 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "p-6 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground", children: "Who We Are" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 leading-relaxed font-light", children: "Avendum is founded and staffed by telecom practitioners - engineers who spent decades designing radio networks, resolving BGP routing mismatches, and configuring microwave hops for India's largest tier-1 operators. We saw first-hand the limits of using legacy spreadsheets and generic SaaS tools to manage networks on a larger scale. We translate real field expertise into enterprise-grade automation." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border/25 flex items-center gap-1.5 text-xs text-primary font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
            "Practitioner-led engineering"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "p-6 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-[#0F9F6E]/10 text-[#0F9F6E] flex items-center justify-center mb-5 border border-[#0F9F6E]/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground", children: "What We Do" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 leading-relaxed font-light", children: "We develop purpose-built OSS integration software that acts as an independent network intelligence layer. Our flagship platforms - NETiQ and NETRA - normalize raw, multi-vendor NMS configuration dumps, run comprehensive validation checks, and automatically stitch complex topologies. We bridge the gap between logical design databases, live physical realities, and OSS engines." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border/25 flex items-center gap-1.5 text-xs text-[#0F9F6E] font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#0F9F6E] animate-pulse" }),
            "Network intelligence & automation"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "p-6 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-[#0891B2]/10 text-[#0891B2] flex items-center justify-center mb-5 border border-[#0891B2]/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GitBranch, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground", children: "Our Story" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-3 leading-relaxed font-light", children: "Our journey is defined by delivering specialized platforms and advisory services. From our signature products, NETiQ, NETRA, Program management and Telecom Consultancy, to our comprehensive program management and telecom consultancy, we help operators navigate complex network evolutions and deployment lifecycles with absolute precision." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-4 border-t border-border/25 flex items-center gap-1.5 text-xs text-[#0891B2] font-semibold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#0891B2] animate-pulse" }),
            "NETiQ, NETRA, Program managmennt , Telecom Consultancy"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-28 relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-br from-surface/40 via-background to-surface/20 p-8 md:p-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 via-transparent to-[#2563EB]/5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#7C3AED]/8 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Platform Architecture" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
          "OSS integration ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "from end to end" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed max-w-2xl", children: "Avendum's layered architecture connects raw NMS exports to actionable business intelligence - spanning every layer from physical ingestion to executive reporting." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: techStack.map((layer, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.1
        }, whileHover: {
          translateY: -4,
          scale: 1.02
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-full rounded-xl border p-5 flex flex-col gap-3 transition-all", style: {
          borderColor: `${layer.color}25`,
          backgroundColor: `${layer.color}06`
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pb-3 border-b", style: {
            borderColor: `${layer.color}20`
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 w-2 rounded-full", style: {
              backgroundColor: layer.color
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono font-bold uppercase tracking-wider", style: {
              color: layer.color
            }, children: [
              "Layer ",
              i + 1
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display font-semibold text-sm text-foreground", children: layer.layer }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1.5 mt-1", children: layer.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full shrink-0", style: {
              backgroundColor: layer.color
            } }),
            item
          ] }, item)) }),
          i < techStack.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex h-8 w-8 items-center justify-center rounded-full bg-background border border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-muted-foreground" }) })
        ] }) }, layer.layer)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Standards & Compliance" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
          "Built on ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "telecom standards" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: "Our platforms implement industry-standard interfaces and data models - ensuring compatibility with existing operator toolchains, OSS systems, and multi-vendor NMS environments with minimal integration." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-3", children: [{
          icon: Shield,
          title: "Air-Gapped Ready",
          desc: "Deployable in fully isolated operator private clouds - no data egress."
        }, {
          icon: Lock,
          title: "Role-Based Access",
          desc: "Granular RBAC across planner, validator, auditor, and executive roles."
        }, {
          icon: Database,
          title: "Audit Trail",
          desc: "Full immutable audit log for every configuration change and approval."
        }].map((item, i) => {
          const Icon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start p-3.5 rounded-xl border border-border/30 bg-surface/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: item.desc })
            ] })
          ] }, i);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        delay: 0.1
      }, className: "grid grid-cols-2 gap-3", children: standards.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.06
      }, whileHover: {
        scale: 1.03
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full p-4 rounded-xl border border-border/30 bg-surface/20 hover:border-primary/30 hover:bg-primary/4 transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-mono font-bold text-primary mb-1.5", children: s.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed", children: s.desc })
      ] }) }, s.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.3fr] gap-14 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Our Philosophy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
          "Principles that ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "guide every decision" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: "These aren't poster values. They're the actual operating principles that determine how we design features, run support programs, and engage with customers." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-2", children: philosophy.map((p, i) => {
          const Icon = p.icon;
          const isActive = activePhilo === i;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActivePhilo(i), className: `w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${isActive ? "border-primary/40 bg-primary/8" : "border-border/30 hover:bg-foreground/5"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-primary text-white" : "bg-surface text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-mono uppercase tracking-widest text-muted-foreground", children: p.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-sm font-semibold ${isActive ? "text-primary" : "text-foreground"}`, children: p.title })
            ] })
          ] }, p.label);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0,
        y: -20
      }, transition: {
        duration: 0.3
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-8 min-h-[280px] flex flex-col justify-center", children: [
        (() => {
          const Icon = philosophy[activePhilo].icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-14 w-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7" }) });
        })(),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-mono uppercase tracking-widest text-primary", children: philosophy[activePhilo].label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-bold", children: philosophy[activePhilo].title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed", children: philosophy[activePhilo].body })
      ] }) }, activePhilo) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Our Locations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
        "Where we ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "work" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          x: -20
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "flex flex-col h-full p-0 overflow-hidden hover:shadow-[0_0_25px_rgba(124,58,237,0.06)] transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[220px] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://maps.google.com/maps?q=Unitech+Cyber+Park+Tower+B+Sector+39+Gurgaon&t=&z=15&ie=UTF8&iwloc=&output=embed", className: "w-full h-full border-none", loading: "lazy", title: "Avendum India HQ" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🇮🇳" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "Headquarters" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold mt-2", children: "Gurgaon, India" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Unit No. 205, Tower B, Unitech Cyber Park, Sector 39, Gurgaon – 122 002, Haryana" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919899810118", className: "hover:text-primary transition-colors", children: "+91 98998 10118" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@avendumtech.com", className: "hover:text-primary transition-colors", children: "info@avendumtech.com" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          x: 20
        }, whileInView: {
          opacity: 1,
          x: 0
        }, viewport: {
          once: true
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "flex flex-col h-full p-0 overflow-hidden hover:shadow-[0_0_25px_rgba(124,58,237,0.06)] transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-[220px] w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: "https://maps.google.com/maps?q=Toronto+Ontario+Canada&t=&z=11&ie=UTF8&iwloc=&output=embed", className: "w-full h-full border-none", loading: "lazy", title: "Avendum Canada Office" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xl", children: "🇨🇦" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-widest text-primary", children: "Sales Office - North America" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold mt-2", children: "Toronto, Canada" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-2 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Toronto, Ontario, Canada" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@avendumtech.com", className: "hover:text-primary transition-colors", children: "info@avendumtech.com" })
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-border/30 overflow-hidden p-10 md:p-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Get Started" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
          "Ready to modernise your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "network operations?" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed", children: "Talk to our team about how NETiQ and NETRA can transform how you plan, provision, and audit your network." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3 justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { children: [
            "Request a Demo ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/netiq", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", children: "Explore NETiQ" }) })
        ] })
      ] })
    ] }) })
  ] });
}
export {
  CompanyPage as component
};
