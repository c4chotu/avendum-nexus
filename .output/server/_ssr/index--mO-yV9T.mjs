import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as BrandButton } from "./router-BUFV2UJb.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { u as Layers, v as TrendingUp, e as ShieldCheck, k as ArrowRight, t as Search, r as TowerControl, d as Sparkles, N as Network, Z as Zap, D as Database, g as Cpu, w as SlidersVertical, x as Radio, y as Activity, z as Binary, W as Workflow, j as Check, p as Clock, E as ChevronLeft, q as ChevronRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
const hero1 = "/assets/hero-1-BKoqH8PV.jpg";
const hero2 = "/assets/hero-2-BDdFOiNn.jpg";
const slides = [
  {
    image: hero1,
    eyebrow: "NETIQ — Flagship AI-Enhanced Network Intelligence Platform",
    title: "Find what your NMS is hiding.",
    subtitle: "Autonomous network intelligence and NMS audit platform parsing daily configuration dumps across multi-vendor networks to resolve parameter conflicts and drifts.",
    cta: { to: "/products/netiq", label: "Explore NETIQ" }
  },
  {
    image: hero1,
    eyebrow: "Enterprise Telecom Automation — Live in Production",
    title: "The intelligence layer your network deserves.",
    subtitle: "Purpose-built AI platforms that automate microwave deployment planning and NMS compliance auditing — engineered for the scale and complexity of telecom operators on a larger scale.",
    cta: { to: "/demo", label: "Request a Demo" }
  },
  {
    image: hero2,
    eyebrow: "NETRA — Network Planning & Deployment Automation",
    title: "Network Planning & Deployment",
    subtitle: "NETRA replaces fragmented spreadsheet-based deployment planning with a centralised, role-aware platform — tracking every plan across its complete lifecycle.",
    cta: { to: "/products/netra", label: "Explore NETRA" }
  }
];
function HeroCarousel() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, duration: 28 });
  const [index, setIndex] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    const id = setInterval(() => embla.scrollNext(), 6e3);
    return () => {
      clearInterval(id);
      embla.off("select", onSelect);
    };
  }, [embla]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative -mt-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: emblaRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex", children: slides.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative min-w-0 shrink-0 grow-0 basis-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[78vh] min-h-[560px] w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: s.image,
          alt: "",
          className: "absolute inset-0 h-full w-full object-cover",
          loading: i === 0 ? "eager" : "lazy"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-50" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-6 h-full flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs uppercase tracking-[0.25em] text-foreground/80", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
          s.eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]", children: s.title.split(" ").map(
          (w, j) => j === 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-gradient", children: [
            " ",
            w,
            " "
          ] }, j) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            w,
            " "
          ] }, j)
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed", children: s.subtitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-7 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: s.cta.to, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { size: "lg", children: [
            s.cta.label,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", size: "lg", children: "What we build" }) })
        ] })
      ] }) })
    ] }) }, i)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => embla?.scrollPrev(),
          className: "rounded-full glass p-2 hover:text-primary",
          "aria-label": "Previous",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5", children: slides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => embla?.scrollTo(i),
          className: `h-1.5 rounded-full transition-all ${index === i ? "w-8 bg-primary" : "w-3 bg-foreground/30"}`,
          "aria-label": `Slide ${i + 1}`
        },
        i
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => embla?.scrollNext(),
          className: "rounded-full glass p-2 hover:text-primary",
          "aria-label": "Next",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
        }
      )
    ] })
  ] });
}
const aboutTeam = "/assets/about-team-BQ6nBTrE.jpg";
const platforms = [{
  icon: Search,
  tag: "Network Intelligence Platform",
  name: "NETiQ",
  desc: "A multi-vendor configuration audit and anomaly detection suite. Ingests raw NMS dumps, performs golden configuration compliance checks, detects parameter clashing, and executes automated drift remediation.",
  color: "#7C3AED",
  link: "/products/netiq",
  bullets: ["Multi-Vendor Ingestion: Normalizes XML, RAML, and CSV configuration dumps across RAN and Core layers.", "NMS Audit Engine: Identifies discrepancies in frequencies, Cell IDs, PCI collisions, and antenna retilts.", "Cross-Layer Correlation: Reconciles live physical reality against logical inventory databases.", "Operational Insights: Leverages ML classification to predict configuration drifts and suggest rollbacks."],
  isFlagship: true
}, {
  icon: TowerControl,
  tag: "Network Planning & Deployment",
  name: "NETRA",
  desc: "Replaces Excel-based deployment planning with a centralised, role-aware platform — tracking every plan from release through deployment and dismantling.",
  color: "#1A6FD4",
  link: "/products/netra",
  bullets: ["Nominal Validation Engine: Automates path calculations and coordinate compliance checks.", "Transmission Lifecycle Tracking: Manages and reconciles every deployment and decommissioning plan.", "Unified Role-Based Workflows: Orchestrates actions across planners, validators, and field engineers.", "Multi-Vendor Stencils: Enforces structural schema rules across vendor-specific templates."]
}];
const whyAvendum = [{
  step: "01",
  title: "Domain-built, not adapted",
  desc: "Every workflow, validation rule, and dashboard reflects how network planning and NMS audits actually work — built with engineering teams, not adapted from generic templates."
}, {
  step: "02",
  title: "National scale, regional precision",
  desc: "Our platform handles national visibility and regional granularity simultaneously — letting leadership and local teams work from the same data without compromise."
}, {
  step: "03",
  title: "Deployment ready",
  desc: "Deployable on larger scale for large operators. NETiQ is actively integrated for automated parsing and compliance check loops. Production-tested, enterprise-grade software."
}, {
  step: "04",
  title: "We stay after go-live",
  desc: "Structured AMC, dedicated partner support, and managed operations mean we're a long-term platform partner — not an implementation vendor that disappears at project handover."
}];
const labsInitiatives = [{
  id: "genai_oss_trans",
  title: "Generative OSS CLI Translators",
  focus: "Multi-Vendor CLI Script Automation",
  status: "PROTOTYPE",
  color: "#7C3AED",
  icon: Binary,
  desc: "A localized, secure LLM engine fine-tuned on multi-vendor syntax libraries. Planners type high-level deployment intents, and the copilot auto-generates syntax-accurate router CLI and XML scripts, removing manual translation slips.",
  tech: "Fine-tuned Parameter Models, Local Parser Syntaxes, Closed-loop Verification",
  target: "Zero syntax slips during multi-vendor CLI template creation."
}, {
  id: "ai_activation",
  title: "AI Order Activation Orchestrator",
  focus: "Intelligent OSS Integration & Provisioning Link",
  status: "ACTIVE RESEARCH",
  color: "#1A6FD4",
  icon: Workflow,
  desc: "Machine learning models designed to streamline OSS network provisioning. By analyzing historical circuit delays, fiber cut trends, and POP capacities, the engine predicts order activation lags.",
  tech: "Predictive Provisioning Pipelines, POP Capacity Estimators,  Queue Tuning",
  target: "Drastically reduce B2B order-to-activation fallout rates."
}, {
  id: "predictive_assurance",
  title: "Predictive OSS Configuration Assurance",
  focus: "Drift Prevention & Self-Healing Network Configuration",
  status: "FIELD TESTING",
  color: "#0F9F6E",
  icon: SlidersVertical,
  desc: "Autonomous anomaly detection engines that process NMS configuration dumps. By analyzing parameter changes across multi-vendor nodes, the ML model predicts configuration drifts and ghost cells, recommending rollback scripts.",
  tech: "NMS Configuration Drift Analyzers, Predictive Node Clashing Engines",
  target: "Rapidly identify and isolate parameter clashing post NMS dump parsing."
}];
const techTags = ["Multi-Vendor NMS Parsing", "PCI Collision Detection", "XML & RAML Ingestion", "Parameter Drift Analysis", "Closed-Loop Remediation", "NMS Audit Engine", "Topology Reconciliation", "OSS Integration", "Ghost Cell Detection", "AI Configuration Assurance", "CLI Patch Generation", "Northbound API Dispatch", "Golden Config Baseline", "Cross-Layer Correlation", "Predictive Anomaly Detection"];
function Home() {
  const [activePipelineStep, setActivePipelineStep] = reactExports.useState(0);
  const [activeLabStep, setActiveLabStep] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("in-view");
    }), {
      threshold: 0.07
    });
    document.querySelectorAll(".section-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCarousel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative py-4  border-y border-border/30 overflow-hidden bg-surface/20 backdrop-blur-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-ticker gap-10 whitespace-nowrap w-max", children: [...techTags, ...techTags].map((tag, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 text-[11px] font-mono text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-primary/60 shrink-0" }),
        tag
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-reveal mx-auto max-w-7xl px-6 mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1fr] gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[5/4] overflow-hidden rounded-2xl border border-border/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: aboutTeam, alt: "Avendum engineering team", loading: "lazy", className: "h-full w-full object-cover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -right-4 hidden md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, hoverGlow: false, className: "w-52 bg-surface/90 backdrop-blur px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.25em] text-primary font-bold", children: "Built by Practitioners" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-xl font-semibold text-gradient", children: "Domain Deep" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-1 leading-relaxed", children: "Founders with hands-on network operations experience." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Who We Are" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight", children: [
          "We build the ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "intelligence layer" }),
          " for network operations."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed text-sm font-light", children: "Avendum Technologies develops mission-critical enterprise platforms for network operations. We replace manual spreadsheets, disconnected dashboards, and opaque parameter databases with automated, AI-powered workflows built natively for multi-vendor, multi-domain networks." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: [{
          icon: Layers,
          title: "Built from the inside out",
          desc: "Practitioners building software for network engineers — matching the real scale and complexity of the operations floor."
        }, {
          icon: TrendingUp,
          title: "Proven scale & reliability",
          desc: "Automating network planning and NMS audit workflows on larger scale. Deployed in active production environments."
        }, {
          icon: ShieldCheck,
          title: "Multi-vendor, multi-domain",
          desc: "A single intelligence layer that normalises data across RAN, MW, UBR, Wireline, Router, and Core — vendor-agnostic."
        }].map((item, i) => {
          const IIcon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start p-3 rounded-lg border border-border/40 bg-foreground/5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IIcon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5 leading-relaxed", children: item.desc })
            ] })
          ] }, i);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { children: [
            "Our Story ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/partner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", children: "Partner Program" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-reveal delay-100 mx-auto max-w-7xl px-6 mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Our Platforms" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-2xl sm:text-3xl font-semibold", children: [
            "Network Automation & ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Intelligence Suite" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/products/netiq", className: "hidden md:flex items-center gap-1 text-xs text-primary font-semibold hover:gap-2 transition-all", children: [
          "All products ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-5", children: platforms.map((p) => {
        const Icon = p.icon;
        const isFlagship = "isFlagship" in p && p.isFlagship;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: `relative transition-all duration-300 hover:-translate-y-1 ${isFlagship ? "border-[#7C3AED]/40 bg-gradient-to-b from-[#7C3AED]/8 to-transparent shadow-[0_0_30px_rgba(124,58,237,0.14)]" : "border-border/40"}`, children: [
          isFlagship && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-3 right-5 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-[9px] font-bold tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1 z-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-2.5 w-2.5" }),
            " Flagship"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl flex items-center justify-center shrink-0", style: {
              backgroundColor: `${p.color}15`,
              color: p.color
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg", style: {
                  color: p.color
                }, children: p.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono px-2 py-0.5 rounded border border-border/50 text-muted-foreground shrink-0", children: p.tag })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2", children: p.desc })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-1.5", children: p.bullets.slice(0, 4).map((b, j) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5 text-[10px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full mt-1 shrink-0", style: {
              backgroundColor: p.color
            } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "leading-relaxed", children: b.split(":")[0] })
          ] }, j)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 pt-3 border-t border-border/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: p.link, className: "inline-flex items-center gap-1.5 text-xs font-semibold hover:gap-2.5 transition-all", style: {
            color: p.color
          }, children: [
            "View platform ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] }) })
        ] }, p.name);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-reveal delay-100 relative mt-24 pb-20 pt-16 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7C3AED]/8 via-transparent to-[#1A6FD4]/5" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-[#C084FC] bg-[#7C3AED]/12 border border-[#7C3AED]/30 mb-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 animate-pulse" }),
              " Network Configuration Assurance"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-[#A855F7] font-bold", children: "NETiQ Network Intelligence Platform" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-3xl sm:text-4xl font-semibold leading-[1.15]", children: [
              "Independent audit & correlation",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "for multi-vendor telecom networks." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/netiq", className: "shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { children: [
            "Explore NETiQ ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-8 items-start mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-[#7C3AED] pl-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-[#C084FC] tracking-wide", children: "The Significance of NETiQ" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 font-light", children: "How NETiQ redefines network operations support by acting as an external, independent intelligence layer." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-5 border-[#7C3AED]/20 bg-[#7C3AED]/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center text-[#C084FC] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "AI-Powered Golden Configuration Audits" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed font-light", children: "Leverages machine learning models to run golden baseline audits on larger scale. NETiQ automatically identifies parameter drift, neighbour relation clashing, PCI conflicts, and frequency mismatches before they can degrade cell performance and impact subscribers." })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-5 border-[#7C3AED]/20 bg-[#7C3AED]/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center text-[#C084FC] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Network, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "End-to-End Service Path Stitching" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed font-light", children: "Telecom systems operate in silos. NETiQ correlates configuration data from RAN cells, microwave links, IP backhaul rings, and core gateways into a single unified topology graph. This traces logical routes and surfaces hidden transmission mismatches." })
                ] })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-primary pl-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-primary tracking-wide", children: "Why Every Telecom Operator Needs It" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 font-light", children: "The business and operational imperatives of implementing continuous configuration assurance." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-5 border-primary/20 bg-primary/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Eliminating Order Provisioning Failures" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed font-light", children: "NETiQ continuously synchronizes planning and operational network records, ensuring accurate inventory data and reducing provisioning failures across B2B and 5G services                      " })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-5 border-primary/20 bg-primary/5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-start", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Exposing Ghost Nodes & Capacity Leaks" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed font-light", children: "Operators frequently pay vendor licensing and energy costs for decommissioned hardware elements that remain active in NMS configurations. NETiQ reconciles active configuration dumps against assets to clean up ghost nodes." })
                ] })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3", children: [{
          icon: Database,
          color: "#7C3AED",
          title: "Domain-wide Ingestion",
          desc: "Parses XML, RAML & CSV from all vendors across RAN, MW, UBR, Wireline, Router & Core."
        }, {
          icon: ShieldCheck,
          color: "#2563EB",
          title: "Multi-Domain Audit Engine",
          desc: "47 RAN rules · 29 MW rules · 31 Wireline rules — run automatically on every dump."
        }, {
          icon: Network,
          color: "#059669",
          title: "Cross-Domain Stitching",
          desc: "Maps Cell→MW Link→Circuit→Core UPF as a full service path graph — exposing broken hops."
        }, {
          icon: Cpu,
          color: "#BE185D",
          title: "AI Anomaly Scoring",
          desc: "ML model ranks anomalies by P1/P2 impact, predicts drift trends, generates remediation patches."
        }].map((item, i) => {
          const IIcon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 p-4 rounded-xl border transition-all hover:-translate-y-0.5", style: {
            borderColor: `${item.color}20`,
            backgroundColor: `${item.color}06`
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5", style: {
              backgroundColor: `${item.color}15`,
              color: item.color
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IIcon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold text-foreground", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5 leading-relaxed", children: item.desc })
            ] })
          ] }, i);
        }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-reveal delay-100 mx-auto max-w-7xl px-6 mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-[#34D399] bg-[#059669]/10 border border-[#059669]/25 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" }),
          "Cross-Domain Stitching"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-[#059669] font-bold", children: "Topology Intelligence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-2 font-display text-3xl sm:text-4xl font-semibold leading-tight", children: [
          "Service path stitching with",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "AI-optimized scoring and predictions." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed text-sm font-light", children: "NETiQ bridges logical OSS databases and live physical network elements. By parsing configuration stencils, Microwave path records, and router configuration files, the correlation engine stitches end-to-end paths (RAN → Backhaul → IP Router → Core Network) and scores transmission reliability." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-[#059669]/10 flex items-center justify-center text-[#34D399] shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Network, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Cross-Domain Graph Stitching" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "Stitches multi-vendor RAN cells to microwave links, fiber backhaul segments, and logical core routers to build an end-to-end service relationship map." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-[#059669]/10 flex items-center justify-center text-[#34D399] shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersVertical, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "AI Path Health & Routing Scoring" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "Calculates an optimized connectivity health score for each transmission channel. It detects route redundancy gaps, modulation rate downgrades, and interface config conflicts." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-[#059669]/10 flex items-center justify-center text-[#34D399] shrink-0 mt-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-4.5 w-4.5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Predictive Outage & Drift Forecasting" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed", children: "Machine learning models analyze historical telemetry and parameter changes to forecast configuration drift trends, warning operations teams of potential outages 48 hours in advance." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "p-6 border-[#059669]/20 bg-[#059669]/2 shadow-[0_0_30px_rgba(5,150,105,0.08)] animate-fade-in", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/20 pb-3 mb-4 select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-bold tracking-widest text-[#34D399] uppercase", children: "Path Optimizer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold font-display text-foreground mt-0.5", children: "AI Routing Health" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20", children: "OPTIMIZED" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/40 border border-border/20 rounded-xl p-3 flex flex-col justify-center select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] text-muted-foreground uppercase font-mono", children: "Connection Score" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-mono font-bold text-emerald-400 mt-0.5", children: "98.6%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/40 border border-border/20 rounded-xl p-3 flex flex-col justify-center select-none", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] text-muted-foreground uppercase font-mono", children: "Prediction Accuracy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-mono font-bold text-emerald-400 mt-0.5", children: "99.2%" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/60 border border-border/20 rounded-xl p-4 mb-4 select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] text-muted-foreground uppercase font-mono tracking-wider block mb-3", children: "Service Hops" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-[8px] font-mono text-center gap-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1.5 py-1 bg-[#7C3AED]/12 border border-[#7C3AED]/35 rounded text-[#C084FC] font-semibold w-12 shrink-0", children: "RAN Cell" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1.5 py-1 bg-[#2563EB]/12 border border-[#2563EB]/35 rounded text-[#60A5FA] font-semibold w-12 shrink-0", children: "MW Hop" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1.5 py-1 bg-[#0891B2]/12 border border-[#0891B2]/35 rounded text-[#22D3EE] font-semibold w-12 shrink-0", children: "UBR Ring" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-emerald-400", children: "→" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1.5 py-1 bg-[#BE185D]/12 border border-[#BE185D]/35 rounded text-[#F472B6] font-semibold w-12 shrink-0", children: "Core UPF" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-black/55 border border-border/25 rounded-lg p-3 select-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-[9px] font-mono font-bold text-[#34D399]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-3.5 w-3.5 animate-pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AI PREDICTION AGENT" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9.5px] text-muted-foreground font-mono mt-1.5 leading-relaxed font-light", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> Analyzing NMS parameter delta..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> Neighbor relations & frequencies stable." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-emerald-400 font-bold", children: "> Outage probability <0.05% for next 48 hours." })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-reveal mx-auto max-w-7xl px-6 mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Integration Stack" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
          "Broad capabilities. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Deep integrations." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto", children: "Avendum is built to live on the real-world operational network, coordinating with operators, stencils, NMS systems, and database pipelines." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-lg border-b border-border/40 pb-3 text-primary flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-5 w-5 shrink-0" }),
            " MW & Radio Planning"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4 flex-grow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" }),
                "Nominal quarter checks"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed pl-3", children: "Verifies planned release quarter bounds." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" }),
                "25+ strict validation checks"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed pl-3", children: "Cross-checks circles, POP IDs, hop distance, nominal coordinates, and topology rules." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" }),
                "Dismantle validation engine"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed pl-3", children: "Automates survey readiness, traffic redirection validation, and CAM-SRN confirmations." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-lg border-b border-border/40 pb-3 text-primary flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 shrink-0" }),
            " IP Provisioning"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4 flex-grow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" }),
                "Fiber POP auto-detection"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed pl-3", children: "Hooks into Cygnet Tx Planning to monitor RFS state changes." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" }),
                "Dual-stack IPv4/IPv6 allocation"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed pl-3", children: "Resolves IAMS profile bindings and maps EPT/NPT domain logic." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" }),
                "Secure ATOM tunnels"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed pl-3", children: "Zero-touch push of configuration parameters to routers." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40 flex flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-semibold text-lg border-b border-border/40 pb-3 text-primary flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-5 w-5 shrink-0" }),
            " RAN & MW Audit"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-4 flex-grow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" }),
                "Multi-vendor parser adapters"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed pl-3", children: "Ingests and indexes daily CM dumps from Ericsson, Nokia, and Huawei NMS." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" }),
                "50+ audit rule matrix"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed pl-3", children: "Checks parameter conflicts across frequencies, PCI, Cell ID, and near-end/far-end configs." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" }),
                "Ghost node database anomalies"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed pl-3", children: "Auto-flags active NMS items marked decommissioned in DB." })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-reveal delay-100 mx-auto max-w-7xl px-6 mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Avendum Labs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
          "Next-generation ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "AI in OSS Integration" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed", children: "Avendum Labs researches the application of machine learning and large language models within Operations Support Systems to move networks closer to zero-touch automation." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-4 mt-10", children: labsInitiatives.map((item, idx) => {
        const Icon = item.icon;
        const isActive = activeLabStep === idx;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveLabStep(idx), className: `text-left p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${isActive ? "bg-surface shadow-xl border-primary shadow-primary/5 -translate-y-1" : "bg-surface-2/20 border-border/40 hover:bg-foreground/5 hover:border-border"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl flex items-center justify-center border border-border", style: {
                color: item.color,
                backgroundColor: `${item.color}12`
              }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border border-border bg-background/50", style: {
                color: item.color
              }, children: item.status })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display font-bold text-base text-foreground", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 font-mono", children: item.focus })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-3 border-t border-border/25 flex items-center gap-1.5 text-xs text-primary font-semibold", children: [
            "View Initiative ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
          ] })
        ] }, item.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, className: "p-6 md:p-8 bg-surface-2/25", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[1.5fr_1fr] gap-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs font-mono tracking-widest uppercase", style: {
            color: labsInitiatives[activeLabStep].color
          }, children: [
            "INITIATIVE — ",
            labsInitiatives[activeLabStep].focus
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-bold text-foreground", children: labsInitiatives[activeLabStep].title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: labsInitiatives[activeLabStep].desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 space-y-2 font-mono text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Tech Stack:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: labsInitiatives[activeLabStep].tech })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Impact Target:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: labsInitiatives[activeLabStep].target })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/80 rounded-xl border border-border p-5 flex flex-col justify-between min-h-[200px] font-mono text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/30 pb-2 mb-2 text-[9px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "LABS TELEMETRY" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "animate-pulse flex items-center gap-1 text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
              " SIM_RUNNING"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 text-[10px] leading-relaxed", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-emerald-400", children: "> Initializing local LLM parser..." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> Loading multi-vendor syntax libraries" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> Generating CLI configuration scripts" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-primary", children: "> Verification loop complete: SUCCESS" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] uppercase tracking-wider text-muted-foreground/60 border-t border-border/20 pt-2 flex justify-between mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "AVENDUM LABS" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "ACTIVE" })
          ] })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "section-reveal delay-200 mx-auto max-w-7xl px-6 mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center max-w-2xl mx-auto mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Why Avendum" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
          "Built for operators. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Domain-specialized." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: whyAvendum.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, className: "flex flex-col justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary", children: item.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-lg font-semibold", children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed", children: item.desc })
      ] }) }, item.step)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "amc", className: "section-reveal mx-auto max-w-7xl px-6 mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "AMC & Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight", children: [
          "We don't disappear ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "after go-live" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed text-sm font-light", children: "Structured AMC and support programmes for deployed products — including dedicated support for alliance partners who operate our platform for end clients." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border/40 bg-surface/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-primary", children: "4 Hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Critical issue response SLA" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border/40 bg-surface/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-primary", children: "99.5%" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Platform uptime commitment" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border/40 bg-surface/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-primary", children: "24/7" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Managed operations coverage" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border/40 bg-surface/20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold text-primary", children: "Quarterly" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: "Platform release cadence" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-primary", children: "Product AMC" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 leading-relaxed", children: "Bug fixes, quarterly patch cycles, DB tuning, and minor feature enhancements." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-primary", children: "Alliance Partner Support" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 leading-relaxed", children: "Dedicated partner managers, onboarding runs, L2/L3 helpdesks, and certified trainings." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-primary", children: "Managed Operations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 leading-relaxed", children: "24/7 NOC engineers, dedicated operators, and on-site stubs to guarantee continuous run." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-reveal relative mt-8 mb-8 mx-6 lg:mx-auto max-w-7xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl border border-border/50 bg-surface/40 backdrop-blur-md p-12 sm:p-16", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#7C3AED]/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/60 to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-[1.3fr_1fr] gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Get Started" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl sm:text-5xl font-semibold leading-[1.1]", children: [
            "Ready to automate your",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "network operations?" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-sm leading-relaxed max-w-xl", children: "Talk to our team about how NETiQ or NETRA maps to your network infrastructure and automation challenges." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/demo", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { size: "lg", children: [
              "Book a Demo ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/partner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", size: "lg", children: "Become a Partner" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 bg-background/50 p-6 rounded-2xl border border-border/50 backdrop-blur-sm", children: [{
          icon: Check,
          title: "30-minute walkthrough",
          desc: "Custom tool analysis — no aggressive sales pitch."
        }, {
          icon: SlidersVertical,
          title: "Custom workflow mapping",
          desc: "We review how your specific NMS dumps parse."
        }, {
          icon: Clock,
          title: "Dedicated support hotline",
          desc: "Dedicated support team"
        }].map((item, i) => {
          const IIcon = item.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${i % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IIcon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold text-foreground", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: item.desc })
            ] })
          ] }, i);
        }) })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
