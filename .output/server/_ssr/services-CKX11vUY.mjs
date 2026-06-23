import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as Sparkles, A as ArrowUpRight, e as ShieldCheck, f as Server, G as Gauge, g as Cpu, Z as Zap, K as Kanban, D as Database, h as Brain, i as Palette, X, j as Check, k as ArrowRight, l as LucideIcons, m as CircleQuestionMark, T as Terminal, R as RefreshCw, n as PanelsTopLeft, o as Globe, p as Clock, q as ChevronRight } from "../_libs/lucide-react.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
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
import "./router-BUFV2UJb.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const servicesData = [
  {
    id: "telecom-ai",
    icon: "Brain",
    title: "Telecom AI & Anomaly Detection",
    pitch: "Automated network health monitoring, root cause isolation, and closed-loop recommendations.",
    details: "Deploy streaming intelligence pipelines to monitor multi-vendor networks. We integrate Python-based machine learning classifiers alongside Apache Kafka streams and Java/Spring Boot microservices to classify anomalies, isolate root causes, and recommend auto-healing parameter updates.",
    bullets: [
      "Real-time streaming anomaly classification & alerts",
      "LLM-assisted Root Cause Analysis (RCA)",
      "Closed-loop automatic remediation triggers",
      "NOC diagnostic suggestion playbooks"
    ],
    tech: [
      "Python",
      "Apache Kafka",
      "AI Integration",
      "Spring Boot",
      "PyTorch"
    ],
    theme: "emerald",
    gridClass: "md:col-span-2",
    accentColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    glowColor: "rgba(16, 185, 129, 0.15)"
  },
  {
    id: "ui-ux",
    icon: "Palette",
    title: "Platform Customization & Dashboard Engineering",
    pitch: "Human-centered interfaces tailored for dense network topologies and planning stencils.",
    details: "We customize and extend the frontends of NETRA and NETiQ. We design and build responsive network dashboards, multi-vendor topology viewers, and custom operations design systems to render complex network datasets into clean, actionable dashboards.",
    bullets: [
      "Tailored operations portals and map-based topology viewers",
      "High-fidelity interactive workflows & planning stencils",
      "Custom enterprise dashboard styling and dark-theme configurations",
      "Usability testing for network planning and SRE engineers"
    ],
    tech: [
      "React",
      "Vaadin",
      "UI/UX",
      "Figma",
      "Tailwind CSS"
    ],
    theme: "indigo",
    gridClass: "md:col-span-1",
    accentColor: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
    glowColor: "rgba(99, 102, 241, 0.15)"
  },
  {
    id: "software-dev",
    icon: "Code2",
    title: "Enterprise Integration & API Development",
    pitch: "Robust backend integrations, custom northbound/southbound APIs, and database sync pipelines.",
    details: "We engineer robust microservices and connectors to integrate NETRA and NETiQ with existing BSS/OSS architectures, planning databases, and NMS platforms. We specialize in Java, Spring Boot, Python, and Kafka, ensuring secure data synchronization and high availability.",
    bullets: [
      "Custom REST/GraphQL APIs and webhook integrations",
      "Northbound and southbound connectors to legacy OSS/BSS",
      "Secure enterprise authentication (SSO, SAML) and fine-grained RBAC",
      "High-performance data synchronization & database mapping"
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Python",
      "Vaadin",
      "React"
    ],
    theme: "violet",
    gridClass: "md:col-span-1",
    accentColor: "text-violet-400 border-violet-500/20 bg-violet-500/10",
    glowColor: "rgba(139, 92, 246, 0.15)"
  },
  {
    id: "acceleration",
    icon: "Gauge",
    title: "High-Throughput Ingestion & Scale Engineering",
    pitch: "Hot-path optimizations, caching networks, and performance tuning for telemetry feeds.",
    details: "We optimize heavy telemetric and network data pipelines to handle millions of node events. By fine-tuning Spring Boot JVM settings, configuring Redis caches, and structuring Apache Kafka partitions, we eliminate processing bottlenecks for real-time operations.",
    bullets: [
      "Multi-layer caching architectures (Redis/Varnish)",
      "Heavy file ingestion and parsing performance tuning",
      "Database index tuning & query plan optimization",
      "Auto-scaling infrastructure & queue management"
    ],
    tech: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "Redis",
      "PostgreSQL"
    ],
    theme: "amber",
    gridClass: "md:col-span-1",
    accentColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    glowColor: "rgba(245, 158, 11, 0.15)"
  },
  {
    id: "strategy",
    icon: "Lightbulb",
    title: "Network Automation Architecture Consulting",
    pitch: "Consulting on modern network architectures, link planning parameters, and transition pathways.",
    details: "We assist enterprise networks in designing modern architectures and planning transitions to autonomous, automated networking. We design Microwave link stencils, frequency allocation plans, and migration blueprints.",
    bullets: [
      "Network migration path & automation blueprint design",
      "Microwave path calculations & nominal stencil definitions",
      "Capacity auditing and multi-vendor interoperability strategy",
      "Operational readiness and compliance framework planning"
    ],
    tech: [
      "RAN Planning",
      "MW Planning",
      "IP Core Routing",
      "OSS Design"
    ],
    theme: "rose",
    gridClass: "md:col-span-1",
    accentColor: "text-rose-400 border-rose-500/20 bg-rose-500/10",
    glowColor: "rgba(244, 63, 94, 0.15)"
  },
  {
    id: "outsourcing",
    icon: "Users",
    title: "Platform Co-Engineering & Operations Support",
    pitch: "Dedicated solution engineering and operations support to run and extend the platform.",
    details: "To ensure maximum value from our platforms, we offer dedicated solution engineering teams and operations support. We provide platform optimization, custom script development, and 24/7 support for continuous operations.",
    bullets: [
      "Dedicated platform reliability and configuration engineers",
      "Automated platform deployment (Terraform and GitHub Actions)",
      "24/7/365 operational support and platform SLA compliance",
      "Custom CLI translator and parser rule updates"
    ],
    tech: [
      "Terraform",
      "GitHub Actions",
      "Java",
      "Python",
      "Telecom OSS"
    ],
    theme: "cyan",
    gridClass: "md:col-span-2",
    accentColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
    glowColor: "rgba(6, 182, 212, 0.15)"
  },
  {
    id: "program-mgmt",
    icon: "Kanban",
    title: "Rollout Management & Release Orchestration",
    pitch: "Risk profiling and predictability across complex, multi-vendor network rollouts.",
    details: "Delivery leadership for large-scale network migrations and software integrations. We manage dependencies across multi-vendor equipment, orchestrate testing, and ensure predictable releases using automated CI/CD pipelines.",
    bullets: [
      "Release dependency mapping & critical path orchestration",
      "Cross-vendor integration risk profiling & change control",
      "CI/CD automated testing and rollout validation",
      "Post-deployment operational audits and transition logs"
    ],
    tech: [
      "Jira Software",
      "Confluence",
      "GitHub Actions",
      "Miro"
    ],
    theme: "pink",
    gridClass: "md:col-span-1",
    accentColor: "text-pink-400 border-pink-500/20 bg-pink-500/10",
    glowColor: "rgba(236, 72, 153, 0.15)"
  }
];
const getIcon = (iconName) => {
  return LucideIcons[iconName] || CircleQuestionMark;
};
const services = servicesData.map((s) => ({
  ...s,
  icon: getIcon(s.icon)
}));
function ServicesPage() {
  const [activeService, setActiveService] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@lottiefiles/dotlottie-wc@latest/dist/dotlottie-wc.js";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen pt-6 pb-6 overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse", style: {
        animationDuration: "8s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[130px] animate-pulse", style: {
        animationDuration: "12s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1.3fr_0.7fr] gap-12 items-center mb-16 w-full max-w-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-3xl mb-0 animate-fade-in", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: -10
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.5
          }, className: "inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Capabilities & Solutions"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
            opacity: 0,
            y: 15
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.5,
            delay: 0.1
          }, className: "font-display text-4xl sm:text-6xl font-semibold leading-tight tracking-tight", children: [
            "Platform Engineering & Solution Development for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient font-bold", children: "Mission-Critical Networks" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
            opacity: 0,
            y: 15
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.5,
            delay: 0.2
          }, className: "mt-6 text-muted-foreground text-lg sm:text-xl leading-relaxed", children: "Built by telecom practitioners. We combine domain-specific artificial intelligence, resilient backends, and user-centric design to accelerate operations at scale." })
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
        }, className: "flex items-center justify-center relative w-full h-[320px] lg:h-[380px] filter drop-shadow-[0_0_35px_rgba(255,107,0,0.25)]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-[200px] h-[200px] bg-primary/15 rounded-full blur-[45px] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dotlottie-wc", { src: "/company-assistant.lottie", autoplay: true, loop: true, style: {
            width: "290px",
            height: "290px",
            position: "relative",
            zIndex: 10
          } })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: "hidden", animate: "show", variants: {
        hidden: {
          opacity: 0
        },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.08
          }
        }
      }, className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: services.map((service) => {
        const isWide = service.gridClass.includes("md:col-span-2");
        return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: {
          hidden: {
            opacity: 0,
            y: 20
          },
          show: {
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100
            }
          }
        }, className: service.gridClass, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full h-full text-left cursor-pointer focus:outline-none group", onClick: () => setActiveService(service), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { hoverGlow: true, className: "h-full flex flex-col justify-between border border-border/40 bg-card/45 backdrop-blur-md rounded-3xl p-8 hover:border-foreground/20 hover:bg-card/65 transition-all duration-300 relative overflow-hidden", style: {
          "--glow": service.glowColor
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-foreground/5 to-transparent rounded-bl-full pointer-events-none" }),
          isWide ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6 items-start w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3 flex flex-col justify-between h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-12 w-12 items-center justify-center rounded-2xl border ${service.accentColor} mb-6 transition-transform group-hover:scale-110 duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(service.icon, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", children: service.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: service.pitch })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 w-full h-full min-h-[110px] flex items-center justify-center bg-foreground/[0.02] border border-border/20 rounded-2xl p-4 overflow-hidden relative", children: [
              service.id === "telecom-ai" && /* @__PURE__ */ jsxRuntimeExports.jsx(MiniTelemetryVisualizer, {}),
              service.id === "outsourcing" && /* @__PURE__ */ jsxRuntimeExports.jsx(MiniSquadVisualizer, {})
            ] })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-12 w-12 items-center justify-center rounded-2xl border ${service.accentColor} mb-6 transition-transform group-hover:scale-110 duration-300`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(service.icon, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5", children: service.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: service.pitch })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between border-t border-border/40 pt-4 w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-1.5 max-w-[80%]", children: [
              service.tech.slice(0, 3).map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-foreground/[0.03] border border-border/40 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground", children: t }, t)),
              service.tech.length > 3 && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-muted-foreground font-mono self-center px-1", children: [
                "+",
                service.tech.length - 3
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-full bg-foreground/[0.04] border border-border/40 flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) })
          ] })
        ] }) }) }, service.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-28 border-t border-border/30 pt-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5" }),
            " Quality Assurance"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground", children: "Telecom-Grade Engineering Standards" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed font-light", children: "We design and construct software under strict architectural guardrails required for mission-critical core networks, ensuring zero-trust isolation and sub-100ms real-time stream ingestion." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-6 border border-border/40 bg-card/10 rounded-2xl hover:bg-card/25 transition-all duration-300 relative overflow-hidden flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.02] border border-border/30 text-primary mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold text-foreground", children: "Zero-Trust Isolation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed font-light", children: "Strict schema isolation and secure multi-tenant boundaries for complex multi-vendor network topology audits." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-6 border border-border/40 bg-card/10 rounded-2xl hover:bg-card/25 transition-all duration-300 relative overflow-hidden flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.02] border border-border/30 text-primary mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Gauge, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold text-foreground", children: "High-Throughput SLAs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed font-light", children: "Kafka stream processing and JVM performance tuning configured for real-time operations without bottlenecks." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-6 border border-border/40 bg-card/10 rounded-2xl hover:bg-card/25 transition-all duration-300 relative overflow-hidden flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.02] border border-border/30 text-primary mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold text-foreground", children: "3GPP Compliance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed font-light", children: "Aligning all configurations, command parsing, and self-healing automation engines with global telecom standards." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-6 border border-border/40 bg-card/10 rounded-2xl hover:bg-card/25 transition-all duration-300 relative overflow-hidden flex flex-col justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-16 h-16 bg-primary/5 rounded-bl-full pointer-events-none" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-foreground/[0.02] border border-border/30 text-primary mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold text-foreground", children: "Multi-Vendor Translators" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed font-light", children: "Native parsing connectors built for Ericsson, Nokia, Huawei, and custom proprietary config dump formats." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-28 border-t border-border/30 pt-20 pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Kanban, { className: "h-3.5 w-3.5" }),
            " Delivery Framework"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground leading-tight", children: "Embedded Co-Engineering & Solution Handover" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed font-light", children: "We don't just consult - we ship production-grade code. Our delivery models are designed to align seamlessly with operator engineering teams, providing immediate telemetry extensions and long-term capability transfer." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-mono font-bold mt-0.5", children: "01" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Co-Engineering Squads" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Embedded telecom and frontend engineers working inside your deployment pipeline." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-mono font-bold mt-0.5", children: "02" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "AI Integration Squads" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Specialized MLops and data science squads to embed custom anomaly classifiers and closed-loop healing into operations." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-mono font-bold mt-0.5", children: "03" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Managed Platform Extensions" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Turnkey delivery of custom dashboard stencils, API adapters, and RCA scripts." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-mono font-bold mt-0.5", children: "04" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Architecture Consultations" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: "Telecom systems architecture audits and strategic scaling reviews before launch." })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-8 border border-border/40 bg-card/20 backdrop-blur-md rounded-3xl relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display text-base font-semibold text-foreground mb-6 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-primary" }),
            " Core Integration Architecture Pipeline"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-4 rounded-xl border border-border/30 bg-background/30 hover:border-primary/20 transition-all flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Database, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-semibold text-foreground", children: "1. Multi-Vendor Configuration Ingestion" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] text-muted-foreground mt-0.5", children: "Ericsson, Nokia, Huawei RAW dumps & Kafka streams" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20", children: "ACTIVE" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-full bg-gradient-to-b from-emerald-500 to-indigo-500" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-4 rounded-xl border border-border/30 bg-background/30 hover:border-primary/20 transition-all flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-semibold text-foreground", children: "2. Translation & Stitching Engine" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] text-muted-foreground mt-0.5", children: "Normalized JSON schemas & closed-loop rule matching" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono text-indigo-400 font-semibold px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/20", children: "PROCESSING" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center h-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-0.5 h-full bg-gradient-to-b from-indigo-500 to-primary" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-4 rounded-xl border border-border/30 bg-background/30 hover:border-primary/20 transition-all flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Palette, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-semibold text-foreground", children: "3. High-Fidelity Topology Dashboard" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] text-muted-foreground mt-0.5", children: "Interactive map overlays, planning stencils & audits" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono text-primary font-semibold px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20", children: "READY" })
            ] })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: activeService && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, className: "fixed inset-0 bg-background/80 backdrop-blur-xl", onClick: () => setActiveService(null) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        scale: 0.95,
        y: 20
      }, animate: {
        opacity: 1,
        scale: 1,
        y: 0
      }, exit: {
        opacity: 0,
        scale: 0.95,
        y: 20
      }, transition: {
        type: "spring",
        duration: 0.5
      }, className: "relative w-full max-w-6xl bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2 p-6 sm:p-10 overflow-y-auto border-r border-border/40 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border ${activeService.accentColor}`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(activeService.icon, { className: "h-3.5 w-3.5" }),
                " SERVICE // 0",
                services.findIndex((s) => s.id === activeService.id) + 1
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveService(null), className: "md:hidden p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-4xl font-semibold tracking-tight text-foreground", children: activeService.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-base text-muted-foreground leading-relaxed", children: activeService.details }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4", children: "Core Deliverables" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: activeService.bullets.map((bullet) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground/90", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: bullet })
              ] }, bullet)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3", children: "Technologies & Architecture" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: activeService.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-xl border border-border/45 bg-foreground/[0.02] px-3.5 py-1 text-xs font-mono text-muted-foreground hover:border-primary/40 transition-colors", children: t }, t)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row gap-4 items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/demo", onClick: () => setActiveService(null), className: "w-full sm:w-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm", children: [
              "Request Capability Demo ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveService(null), className: "hidden md:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer", children: [
              "Close Panel ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full md:w-1/2 bg-[var(--surface)] p-6 sm:p-10 border-t md:border-t-0 border-border/40 overflow-y-auto flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/40 pb-4 mb-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono tracking-widest text-muted-foreground uppercase", children: "Interactive Simulation Sandbox" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground", children: "STATUS: ONLINE" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col justify-center min-h-[300px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(InteractiveVisualizer, { serviceId: activeService.id }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground italic", children: "*Visualizations represent simulated telecom environments executing custom software workflows." }) })
        ] })
      ] })
    ] }) })
  ] });
}
function MiniTelemetryVisualizer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end gap-1.5 h-16 w-full max-w-[120px] justify-center", children: Array.from({
    length: 6
  }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2.5 bg-emerald-500/80 rounded-t-sm animate-pulse", style: {
    height: `${[24, 48, 16, 32, 40, 20][i]}px`,
    animationDelay: `${i * 0.15}s`,
    animationDuration: "1s"
  } }, i)) });
}
function MiniSquadVisualizer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 w-full max-w-[150px] text-[9px] font-mono justify-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "RAN SQUAD" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-emerald-400 font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" }),
        " ON"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "MW SQUAD" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-emerald-400 font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" }),
        " ON"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "CORE & IP SQUAD" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 text-emerald-400 font-semibold", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" }),
        " ON"
      ] })
    ] })
  ] });
}
function InteractiveVisualizer({
  serviceId
}) {
  if (serviceId === "telecom-ai") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(TelecomAiVisualizer, {});
  }
  if (serviceId === "ui-ux") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(UiUxVisualizer, {});
  }
  if (serviceId === "software-dev") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SoftwareDevVisualizer, {});
  }
  if (serviceId === "acceleration") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(AccelerationVisualizer, {});
  }
  if (serviceId === "outsourcing") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(OutsourcingVisualizer, {});
  }
  if (serviceId === "strategy") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(StrategyVisualizer, {});
  }
  if (serviceId === "program-mgmt") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgramMgmtVisualizer, {});
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-48 bg-card/25 rounded-2xl border border-border/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-8 w-8 text-primary animate-bounce" }) });
}
function TelecomAiVisualizer() {
  const [logs, setLogs] = reactExports.useState([]);
  const [anomalyState, setAnomalyState] = reactExports.useState("idle");
  const [siteHealth, setSiteHealth] = reactExports.useState(100);
  const logContainerRef = reactExports.useRef(null);
  const simulateLogs = ["[SYSTEM] Ingesting RAN telemetry stream from Apache Kafka topic 'ran.metrics'...", "[KAFKA] Ingestion active: 14,200 messages/sec | Cluster: Healthy", "[METRIC] RAN Node LTE_RSRP = -96 dBm (Stable)", "[ALERT] Sudden signal-to-noise drop detected on Microwave Backhaul Site B!", "[AI_CLASSIFIER] Running Python anomaly inference pipeline...", "[AI_INTEGRATION] Anomaly Identified: Co-channel Interference (96.4% confidence)", "[AI_RECO] Recommendation generated: Retilt remote electrical antenna (RET) Sector B from 4° to 2°", "[SPRING_BOOT] Posting remedy instruction to Java agent executor...", "[SYSTEM] Configuration updated on Sector B via NMS API. Re-auditing...", "[METRIC] Health restored: RSRP -94 dBm | SINR: 19dB. Telemetry Stable.", "[RESOLVED] Self-healing loop completed. Alarm state resolved."];
  reactExports.useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);
  const runSimulation = () => {
    setLogs([]);
    setAnomalyState("monitoring");
    setSiteHealth(100);
    let currentLogIndex = 0;
    const interval = setInterval(() => {
      if (currentLogIndex < simulateLogs.length) {
        const nextLog = simulateLogs[currentLogIndex];
        setLogs((prev) => [...prev, nextLog]);
        if (currentLogIndex === 3) {
          setAnomalyState("detected");
          setSiteHealth(42);
        } else if (currentLogIndex === 6) {
          setAnomalyState("healing");
        } else if (currentLogIndex === 9) {
          setAnomalyState("resolved");
          setSiteHealth(98);
        }
        currentLogIndex++;
      } else {
        clearInterval(interval);
      }
    }, 1200);
    return () => clearInterval(interval);
  };
  reactExports.useEffect(() => {
    runSimulation();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-4 rounded-2xl border border-border/40 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground uppercase", children: "RAN Site ID" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground mt-1", children: "TX-440 (Houston Core)" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-4 rounded-2xl border border-border/40 flex flex-col justify-between relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground uppercase", children: "Health Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2.5 w-2.5 rounded-full ${anomalyState === "resolved" || anomalyState === "idle" ? "bg-emerald-500 animate-pulse" : anomalyState === "detected" ? "bg-red-500 animate-ping" : "bg-amber-500 animate-pulse"}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-sm font-semibold", children: [
            siteHealth,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-border/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-full transition-all duration-500 ${siteHealth > 80 ? "bg-emerald-500" : siteHealth > 50 ? "bg-amber-500" : "bg-red-500"}`, style: {
          width: `${siteHealth}%`
        } }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-28 glass rounded-2xl border border-border/40 flex flex-col justify-end p-2 relative overflow-hidden bg-background/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-3 text-[9px] font-mono text-muted-foreground uppercase", children: "SINR Signal Telemetry (Kafka Stream)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-16 flex items-end justify-between px-2 gap-[2px]", children: Array.from({
        length: 32
      }).map((_, i) => {
        let height = "h-10";
        let color = "bg-primary/40";
        if (anomalyState === "detected" && i > 12 && i < 24) {
          height = "h-3";
          color = "bg-red-500/80";
        } else if (anomalyState === "healing" && i > 12 && i < 24) {
          height = "h-6";
          color = "bg-amber-500/80";
        } else if (anomalyState === "resolved") {
          height = i % 2 === 0 ? "h-12" : "h-14";
          color = "bg-emerald-500/70";
        } else {
          height = i % 3 === 0 ? "h-12" : i % 2 === 0 ? "h-8" : "h-10";
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full rounded-t-sm transition-all duration-500 ${height} ${color}` }, i);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass border border-border/60 bg-black/60 rounded-2xl p-4 flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border/30 pb-2 mb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Terminal, { className: "h-4 w-4 text-emerald-400" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-emerald-400", children: "AI AGENT EXECUTION CLI" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: logContainerRef, className: "h-32 overflow-y-auto font-mono text-[10px] space-y-1.5 text-foreground/80 scrollbar-thin", children: logs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground animate-pulse", children: "Initializing engine..." }) : logs.map((log, index) => {
        let textClass = "text-foreground/80";
        if (log.includes("[ALERT]")) textClass = "text-red-400 font-semibold";
        if (log.includes("[AI_RECO]")) textClass = "text-amber-400 font-semibold";
        if (log.includes("[RESOLVED]")) textClass = "text-emerald-400 font-semibold";
        if (log.includes("[METRIC]")) textClass = "text-muted-foreground";
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: textClass, children: log }, index);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: runSimulation, disabled: anomalyState === "monitoring" || anomalyState === "healing", className: "w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border/40 hover:border-primary/40 bg-foreground/[0.02] hover:bg-primary/10 transition-all font-mono text-xs text-foreground/85 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: `h-3.5 w-3.5 ${anomalyState === "monitoring" || anomalyState === "healing" ? "animate-spin text-primary" : ""}` }),
      "Trigger Anomaly Simulation"
    ] })
  ] });
}
function UiUxVisualizer() {
  const [theme, setTheme] = reactExports.useState("neon");
  const [layout, setLayout] = reactExports.useState("grid");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 items-center justify-between border-b border-border/20 pb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTheme("neon"), className: `px-3 py-1 text-[10px] font-semibold font-mono rounded-full border transition-all cursor-pointer ${theme === "neon" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "border-border/40 hover:bg-secondary"}`, children: "React Slate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTheme("plasma"), className: `px-3 py-1 text-[10px] font-semibold font-mono rounded-full border transition-all cursor-pointer ${theme === "plasma" ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/30" : "border-border/40 hover:bg-secondary"}`, children: "Vaadin Console" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTheme("dark"), className: `px-3 py-1 text-[10px] font-semibold font-mono rounded-full border transition-all cursor-pointer ${theme === "dark" ? "bg-foreground/10 text-foreground border-foreground/30" : "border-border/40 hover:bg-secondary"}`, children: "Cyber Slate" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1 border border-border/30 rounded-lg p-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLayout("grid"), className: `p-1.5 rounded transition-all cursor-pointer ${layout === "grid" ? "bg-secondary text-primary" : "text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PanelsTopLeft, { className: "h-3.5 w-3.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setLayout("list"), className: `p-1.5 rounded transition-all cursor-pointer ${layout === "list" ? "bg-secondary text-primary" : "text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Server, { className: "h-3.5 w-3.5" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-6 rounded-2xl border border-border/60 min-h-[220px] flex flex-col justify-between transition-colors bg-background/20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[40px] transition-colors duration-500 ${theme === "neon" ? "bg-emerald-500/20" : theme === "plasma" ? "bg-indigo-500/20" : "bg-foreground/5"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground", children: "OPERATIONS DASHBOARD v2" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${theme === "neon" ? "bg-emerald-500" : theme === "plasma" ? "bg-indigo-500" : "bg-foreground"}` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-6 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: layout === "grid" ? "grid grid-cols-2 gap-4" : "flex flex-col gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl border transition-all ${theme === "neon" ? "border-emerald-500/10 bg-emerald-500/[0.02] hover:border-emerald-500/20" : theme === "plasma" ? "border-indigo-500/10 bg-indigo-500/[0.02] hover:border-indigo-500/20" : "border-border/40 hover:bg-secondary/40"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-mono text-muted-foreground uppercase", children: "RAN Site Health" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `text-xl font-bold font-mono mt-1 ${theme === "neon" ? "text-emerald-400" : theme === "plasma" ? "text-indigo-400" : "text-foreground"}`, children: "98.4%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-4 rounded-xl border transition-all ${theme === "neon" ? "border-emerald-500/10 bg-emerald-500/[0.02] hover:border-emerald-500/20" : theme === "plasma" ? "border-indigo-500/10 bg-indigo-500/[0.02] hover:border-indigo-500/20" : "border-border/40 hover:bg-secondary/40"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-mono text-muted-foreground uppercase", children: "Power Load" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold font-mono mt-1 text-foreground", children: "1.4 kW" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center z-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-16 bg-border/20 rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-5 w-5 rounded-full flex items-center justify-center border text-[10px] font-semibold transition-all duration-300 ${theme === "neon" ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" : theme === "plasma" ? "border-indigo-500/30 text-indigo-400 bg-indigo-500/10" : "border-border/50 text-foreground bg-secondary"}`, children: "→" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Interactive Design Preview illustrating dark-theme palettes and fluid configurations." }) })
  ] });
}
function SoftwareDevVisualizer() {
  const [activeTab, setActiveTab] = reactExports.useState("java");
  const [codeText, setCodeText] = reactExports.useState("");
  const javaCode = `@RestController
@RequestMapping("/api/v1/network")
public class NetworkRemedyController {
    
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;

    @PostMapping("/heal")
    public ResponseEntity<HealResponse> triggerHeal(@RequestBody HealRequest request) {
        log.info("Alert triggered for RAN: {}", request.getSiteId());
        
        // Dispatch heal command payload via Apache Kafka
        kafkaTemplate.send("ran.heal.commands", request.getSiteId(), request.getPayload());
        
        return ResponseEntity.ok(new HealResponse("success", "applied"));
    }
}`;
  const pythonCode = `import kafka
import pytorch_lightning as pl

class TelecomAiEngine:
    def __init__(self, kafka_broker):
        self.consumer = kafka.KafkaConsumer('ran.metrics', bootstrap_servers=kafka_broker)
        self.model = load_pretrained_pytorch_model()

    def start_inference_loop(self):
        for message in self.consumer:
            telemetry = parse_metrics(message.value)
            # Run anomaly classification inference
            prediction = self.model.predict(telemetry)
            if prediction['anomaly_detected']:
                self.trigger_alert(prediction['site_id'], prediction['type'])`;
  reactExports.useEffect(() => {
    setCodeText("");
    const targetCode = activeTab === "java" ? javaCode : pythonCode;
    let index = 0;
    const interval = setInterval(() => {
      if (index < targetCode.length) {
        setCodeText(targetCode.slice(0, index + 3));
        index += 3;
      } else {
        clearInterval(interval);
      }
    }, 15);
    return () => clearInterval(interval);
  }, [activeTab]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/20 pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("java"), className: `px-3 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${activeTab === "java" ? "bg-secondary text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`, children: "SpringController.java" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTab("python"), className: `px-3 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${activeTab === "python" ? "bg-secondary text-primary font-semibold" : "text-muted-foreground hover:text-foreground"}`, children: "ai_inference_pipeline.py" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground", children: "Java 17 / Python 3.10" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass border border-border/60 bg-black/70 rounded-2xl p-5 min-h-[260px] max-h-[300px] overflow-y-auto flex flex-col justify-between font-mono text-xs", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("pre", { className: "text-foreground/90 whitespace-pre-wrap leading-relaxed select-none scrollbar-thin", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: codeText }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-pulse font-bold text-primary", children: "|" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center text-[10px] text-muted-foreground font-mono px-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Lines: ",
        codeText.split("\n").length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Encoding: UTF-8" })
    ] })
  ] });
}
function AccelerationVisualizer() {
  const [latency, setLatency] = reactExports.useState(1450);
  const [cacheHit, setCacheHit] = reactExports.useState(12.4);
  const [optimizing, setOptimizing] = reactExports.useState(false);
  const startOptimization = () => {
    if (optimizing) return;
    setOptimizing(true);
    let step = 0;
    const interval = setInterval(() => {
      if (step < 20) {
        setLatency((prev) => Math.max(14, Math.floor(prev - (1450 - 14) / 20)));
        setCacheHit((prev) => Math.min(99.2, parseFloat((prev + (99.2 - 12.4) / 20).toFixed(1))));
        step++;
      } else {
        clearInterval(interval);
        setOptimizing(false);
      }
    }, 80);
  };
  const reset = () => {
    setLatency(1450);
    setCacheHit(12.4);
    setOptimizing(false);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-5 rounded-2xl border border-border/40 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground uppercase", children: "Spring Boot API Latency" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-baseline gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-2xl font-bold font-mono transition-colors duration-500 ${latency < 100 ? "text-emerald-400" : latency < 500 ? "text-amber-400" : "text-red-400"}`, children: latency }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono", children: "ms" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-5 rounded-2xl border border-border/40 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground uppercase", children: "Kafka Message Ingest" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 flex items-baseline gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `text-2xl font-bold font-mono transition-colors duration-500 ${cacheHit > 80 ? "text-emerald-400" : "text-amber-400"}`, children: [
          cacheHit,
          "%"
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass border border-border/40 bg-background/50 rounded-2xl p-4 h-24 flex items-end justify-between relative overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 left-3 text-[9px] font-mono text-muted-foreground uppercase", children: "Telemetry Trend (Spring Boot)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-12 flex items-end justify-between gap-1.5 px-1", children: Array.from({
        length: 16
      }).map((_, i) => {
        let height = "h-10";
        let color = "bg-red-500/60";
        if (latency < 100) {
          height = i % 3 === 0 ? "h-2" : i % 2 === 0 ? "h-3" : "h-1";
          color = "bg-emerald-500/60";
        } else if (latency < 800) {
          height = i % 2 === 0 ? "h-6" : "h-4";
          color = "bg-amber-500/60";
        } else {
          height = i % 2 === 0 ? "h-12" : "h-10";
        }
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `w-full rounded-t-sm transition-all duration-300 ${height} ${color}` }, i);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: startOptimization, disabled: optimizing || latency < 100, className: "flex-1 py-3 px-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/95 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm disabled:opacity-50", children: optimizing ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCw, { className: "h-4 w-4 animate-spin" }),
        " Optimizing JVM & Hot Paths..."
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-amber-300" }),
        " Accelerate Network Pipelines"
      ] }) }),
      latency < 100 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: reset, className: "px-4 py-3 rounded-xl border border-border/40 hover:bg-secondary text-foreground text-sm cursor-pointer transition-colors", children: "Reset" })
    ] })
  ] });
}
function OutsourcingVisualizer() {
  const [activeTeam, setActiveTeam] = reactExports.useState("ran");
  const teams = {
    ran: {
      name: "Platform RAN Integration Squad",
      focus: "Radio Access Networks Integration",
      status: "Active Optimization",
      engineers: ["Priya M. (RAN Lead)", "Anil K. (RF Auditor)", "Siddharth S. (Python Analyst)"],
      metric: "CM Dumps Audited: 24,000/day",
      uptime: "99.9%"
    },
    mw: {
      name: "Platform Microwave Integration Squad",
      focus: "MW Transport / Backhaul Integration",
      status: "Active Link Planning",
      engineers: ["Sarah J. (MW Lead)", "James L. (Pathloss Specialist)"],
      metric: "Active microwave plans: 150,000+",
      uptime: "100%"
    },
    "core-ip": {
      name: "Platform Packet Core & IP Integration Squad",
      focus: "5G IP Provisioning",
      status: "Active Provisioning",
      engineers: ["Daniel V. (IP Lead)", "Chloe P. (Spring Boot / Java)", "Arjun S. (Kafka DevOps)"],
      metric: "IP Configurations pushed: 8,200/wk",
      uptime: "99.99%"
    },
    ai: {
      name: "AI Integration & Analytics Squad",
      focus: "Predictive Models & Closed-Loop AI",
      status: "Active Training",
      engineers: ["Dr. Evelyn R. (AI Principal)", "Kabir D. (MLops Engineer)", "Rohan G. (Data Pipeline Lead)"],
      metric: "Inference Latency: 12ms | Accuracy: 98.6%",
      uptime: "99.95%"
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 gap-2", children: Object.keys(teams).map((key) => {
      const isActive = activeTeam === key;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setActiveTeam(key), className: `p-2 rounded-lg border transition-all text-center cursor-pointer ${isActive ? "bg-primary/10 border-primary text-primary" : "border-border/40 hover:bg-secondary/40 text-muted-foreground"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block text-[9px] font-semibold uppercase", children: [
        key === "core-ip" ? "IP" : key.toUpperCase(),
        " Squad"
      ] }) }, key);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-5 rounded-2xl border border-border/50 bg-background/20 space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/20 pb-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: teams[activeTeam].name })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[9px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-2.5 w-2.5" }),
          " ",
          teams[activeTeam].status
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-4 text-xs font-mono", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-muted-foreground uppercase text-[8px]", children: "Squad Roster" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2 space-y-1 text-foreground/80", children: teams[activeTeam].engineers.map((eng) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary" }),
            " ",
            eng
          ] }, eng)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-muted-foreground uppercase text-[8px]", children: "Focus & Domain" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-1 font-bold text-foreground", children: teams[activeTeam].focus })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-muted-foreground uppercase text-[8px]", children: "Telemetry Metric" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block mt-1 font-bold text-emerald-400", children: teams[activeTeam].metric })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground leading-relaxed", children: "Select squads above to inspect integration teams. Our squads align to platform extension and operation needs." }) })
  ] });
}
function StrategyVisualizer() {
  const [nodeScale, setNodeScale] = reactExports.useState(100);
  const [nocTeamSize, setNocTeamSize] = reactExports.useState(15);
  const infraCostSavings = Math.floor(nodeScale * 180 + nocTeamSize * 1500);
  const hoursSavedPerWeek = Math.floor(nocTeamSize * 8 + nodeScale / 5);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold border-b border-border/20 pb-2 text-foreground", children: "Network Planning Automation Calculator" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "RAN Capacity (Nodes)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-bold", children: [
            nodeScale,
            " nodes"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "50", max: "1500", step: "50", value: nodeScale, onChange: (e) => setNodeScale(parseInt(e.target.value)), className: "w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-primary" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs font-mono", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Planning Engineers (FTE)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-foreground font-bold", children: [
            nocTeamSize,
            " FTEs"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "range", min: "5", max: "100", step: "5", value: nocTeamSize, onChange: (e) => setNocTeamSize(parseInt(e.target.value)), className: "w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-primary" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass p-5 rounded-2xl border border-border/50 bg-background/30 grid grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground uppercase", children: "Planning Savings" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-bold font-mono text-emerald-400 mt-2", children: [
          "$",
          infraCostSavings.toLocaleString(),
          "/yr"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground uppercase", children: "Auditing Time Saved" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xl font-bold font-mono text-primary mt-2", children: [
          hoursSavedPerWeek,
          " hrs/wk"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground leading-relaxed italic text-center", children: "*Based on automated RAN configuration ingestion, Microwave Pathloss calculations, and closed-loop IP audits." })
  ] });
}
function ProgramMgmtVisualizer() {
  const [boardStep, setBoardStep] = reactExports.useState(0);
  const steps = [{
    title: "Sprint Backlog",
    desc: "User stories & Spring Boot controller structures mapped.",
    color: "bg-muted"
  }, {
    title: "GitHub Actions Dev",
    desc: "CI/CD testing pipeline executing docker tasks.",
    color: "bg-indigo-500/20 text-indigo-400"
  }, {
    title: "Terraform Provision",
    desc: "Provisioning AWS Core IP and Kafka cluster nodes.",
    color: "bg-amber-500/20 text-amber-400"
  }, {
    title: "Production Live",
    desc: "Canary rollout of self-healing software successful.",
    color: "bg-emerald-500/20 text-emerald-400"
  }];
  const advanceStep = () => {
    setBoardStep((prev) => prev === steps.length - 1 ? 0 : prev + 1);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/20 pb-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "GitHub Actions CI/CD Pipeline Simulator" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono text-muted-foreground", children: "v1.2.0-stable" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-3", children: steps.map((step, index) => {
      const isCurrent = boardStep === index;
      const isDone = index < boardStep;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `p-3.5 rounded-xl border flex items-center justify-between transition-all duration-300 ${isCurrent ? "bg-primary/10 border-primary shadow-md" : isDone ? "border-emerald-500/20 bg-emerald-500/[0.02] opacity-60" : "border-border/40 opacity-40"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-mono border ${isCurrent ? "bg-primary text-primary-foreground border-primary" : isDone ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "border-border"}`, children: isDone ? "✓" : index + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-semibold text-foreground", children: step.title }),
            isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[10px] text-muted-foreground mt-0.5", children: step.desc })
          ] })
        ] }),
        isCurrent && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" })
      ] }, step.title);
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: advanceStep, className: "w-full py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-semibold border border-border/50 hover:border-primary/20 flex items-center justify-center gap-2 cursor-pointer transition-all text-xs font-mono", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 text-primary" }),
      boardStep === steps.length - 1 ? "Reset CI/CD Pipeline" : "Progress Deploy Pipeline"
    ] })
  ] });
}
export {
  ServicesPage as component
};
