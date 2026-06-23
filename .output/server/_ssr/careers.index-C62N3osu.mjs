import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { b as Route$6, B as BrandButton } from "./router-BUFV2UJb.mjs";
import { j as jobsData } from "./jobs-8tSJDgFA.mjs";
import { k as ArrowRight, j as Check, a as MapPin, U as Users, d as Sparkles, F as Target, Y as Rocket, H as Handshake, h as Brain, _ as ChartLine, o as Globe, $ as Briefcase, t as Search, a0 as HeartPulse, a1 as IndianRupee, a2 as GraduationCap, a3 as Laptop, a4 as CircleCheck, p as Clock, a5 as CodeXml, a6 as UserCheck, m as CircleQuestionMark } from "../_libs/lucide-react.mjs";
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
const jobs = jobsData;
const categories = [{
  id: "all",
  label: "All Roles"
}, {
  id: "engineering",
  label: "Engineering"
}, {
  id: "product",
  label: "Product"
}, {
  id: "telecom",
  label: "Telecom Domain"
}, {
  id: "support",
  label: "Support & Delivery"
}];
const culture = [{
  icon: Target,
  title: "Domain-Deep Work",
  desc: "You'll understand the telecom domain deeply. Our engineers know what a dismantle workflow is, what a CM dump contains, and why data quality in NMS systems matters for everything downstream.",
  glowColor: "rgba(16, 185, 129, 0.12)"
}, {
  icon: Rocket,
  title: "Production Impact, Fast",
  desc: "Our products run live in production. You'll see your work matter in a system managing 150,000+ live microwave plans across PAN India - not in a sandbox or a mockup environment.",
  glowColor: "rgba(139, 92, 246, 0.12)"
}, {
  icon: Handshake,
  title: "Real Code Ownership",
  desc: "We operate in highly focused, autonomous squads. Everyone who joins owns their area - you shape the product direction and have a direct voice in our architecture.",
  glowColor: "rgba(245, 158, 11, 0.12)"
}, {
  icon: Brain,
  title: "Hard Software Problems",
  desc: "Stitching configuration management (CM) dumps from multiple vendors into a unified audit schema. Automating zero-touch 5G provisioning across 6 systems. These are hard scale problems.",
  glowColor: "rgba(6, 182, 212, 0.12)"
}, {
  icon: ChartLine,
  title: "Scale Your Career",
  desc: "As NETRA, NEXUS, and NETIQ expand globally, early members scale into engineering leadership, architectural ownership, and critical product roles.",
  glowColor: "rgba(236, 72, 153, 0.12)"
}, {
  icon: Globe,
  title: "Gurgaon Core Hub",
  desc: "Collaborate together in-person from our Gurgaon office. We are a tightly knit team that designs together on whiteboards, eats together, and ships code daily.",
  glowColor: "rgba(244, 63, 94, 0.12)"
}];
const perks = [{
  icon: IndianRupee,
  title: "Competitive Compensation",
  desc: "Market-aligned base pay with performance bonuses.",
  glowColor: "rgba(16, 185, 129, 0.15)"
}, {
  icon: GraduationCap,
  title: "Learning & Growth",
  desc: "Annual personal budget for courses, certifications, and conferences.",
  glowColor: "rgba(99, 102, 241, 0.15)"
}, {
  icon: HeartPulse,
  title: "Medical Coverage",
  desc: "Comprehensive health insurance covering you and your dependents.",
  glowColor: "rgba(236, 72, 153, 0.15)"
}, {
  icon: Laptop,
  title: "Premium Hardware",
  desc: "Latest Apple MacBook Pro hardware, high-end monitors, and ergonomic setup.",
  glowColor: "rgba(6, 182, 212, 0.15)"
}];
const steps = [{
  step: "01",
  title: "Profile Review",
  desc: "A senior engineering lead reviews your experience. We do not use automated keyword filters - every application is carefully reviewed by a human.",
  details: ["We evaluate your engineering foundation", "Review your Github profile or previous projects", "Takes 3-5 business days"],
  icon: Briefcase
}, {
  step: "02",
  title: "Introductory Call",
  desc: "A quick 30-minute introductory conversation to understand your expectations, alignment, and goals, and answer questions about Avendum.",
  details: ["Discuss role parameters", "Evaluate cultural alignment", "Answer questions about team and company culture"],
  icon: Clock
}, {
  step: "03",
  title: "Practical Session",
  desc: "A hands-on technical session or system design review tailored directly to the systems you'll build and manage on the job.",
  details: ["Collaborative coding task", "System design matching telecom complexity", "Practical review with senior developers"],
  icon: CodeXml
}, {
  step: "04",
  title: "Leadership & Offer",
  desc: "Conversations with leadership to discuss team integration. We aim to roll out feedback and finalized offers within 3 business days.",
  details: ["Meet the founders", "Understand long-term company vision", "Formal offer and benefits walkthrough"],
  icon: UserCheck
}];
function HeroAnimation() {
  reactExports.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-[380px] flex items-center justify-center overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-primary/20 rounded-full blur-[65px] pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 w-[240px] h-[12px] bg-black/10 dark:bg-black/40 rounded-full blur-md pointer-events-none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full max-w-[340px] max-h-[340px] flex items-center justify-center relative z-10 filter drop-shadow-[0_0_35px_rgba(255,107,0,0.25)] drop-shadow-[0_15px_15px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_15px_15px_rgba(0,0,0,0.3)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("lottie-player", { src: "/careers-anim.json", background: "transparent", speed: "1", loop: true, autoplay: true, style: {
      width: "100%",
      height: "100%"
    } }) })
  ] });
}
function CareersPage() {
  const [searchQuery, setSearchQuery] = reactExports.useState("");
  const [filterDept, setFilterDept] = reactExports.useState("all");
  const [activeStep, setActiveStep] = reactExports.useState(0);
  const search = Route$6.useSearch();
  const selectedJobId = search.job;
  const selectedJob = reactExports.useMemo(() => {
    return jobs.find((j) => j.id === selectedJobId) || null;
  }, [selectedJobId]);
  const filteredJobs = reactExports.useMemo(() => {
    return jobs.filter((j) => {
      const matchesSearch = j.title.toLowerCase().includes(searchQuery.toLowerCase()) || j.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesDept = filterDept === "all" || j.category === filterDept;
      return matchesSearch && matchesDept;
    });
  }, [searchQuery, filterDept]);
  if (selectedJob) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen pt-4 pb-24 overflow-hidden bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0 pointer-events-none", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] animate-pulse", style: {
          animationDuration: "10s"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] animate-pulse", style: {
          animationDuration: "15s"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pt-6 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/careers", search: {
          job: void 0
        }, className: "inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group cursor-pointer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1 text-primary" }),
          "Back to Open Positions"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 space-y-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2.5 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-wider font-semibold text-primary border-primary/20 bg-primary/5", children: selectedJob.categoryLabel }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground font-mono", children: "Gurgaon, India · Full-Time" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight", children: selectedJob.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-8 border border-border/40 bg-card/25 rounded-3xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground mb-4", children: "About the Role" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed font-light", children: selectedJob.description })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-8 border border-border/40 bg-card/25 rounded-3xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground mb-4", children: "Key Responsibilities" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: selectedJob.responsibilities.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3.5 text-sm text-muted-foreground leading-relaxed font-light", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: r })
              ] }, i)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-8 border border-border/40 bg-card/25 rounded-3xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-semibold text-foreground mb-4", children: "What We Look For" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-4", children: selectedJob.requirements.map((req, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3.5 text-sm text-muted-foreground leading-relaxed font-light", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: req })
              ] }, i)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 lg:sticky lg:top-24 space-y-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "p-8 bg-card/30 backdrop-blur-md rounded-3xl border border-border/50 shadow-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-bold text-foreground mb-6", children: "Position Summary" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 font-light text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Location" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground flex items-center gap-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-primary" }),
                    " ",
                    selectedJob.location
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Experience Required" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: selectedJob.experience })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center border-b border-border/30 pb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Commitment" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: "Full-Time" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-center pb-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Department" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: selectedJob.categoryLabel })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-wider text-primary font-semibold mb-3", children: "Tech Stack & Tools" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: selectedJob.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-lg border border-border bg-foreground/[0.02] px-2.5 py-1 text-[10px] font-mono text-muted-foreground", children: t }, t)) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers/apply", search: {
                  role: selectedJob.id
                }, className: "block w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "w-full py-3 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/10", children: [
                  "Apply for this Position ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers", search: {
                  job: void 0
                }, className: "block w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "w-full py-3 px-6 rounded-full border border-border bg-transparent hover:bg-secondary text-muted-foreground hover:text-foreground transition-all text-xs font-semibold cursor-pointer", children: "Cancel & Return" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { className: "p-6 border border-border/30 bg-card/10 rounded-2xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }),
                " Need assistance?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] text-muted-foreground leading-relaxed", children: [
                "Have questions about this role or the interview process? Drop us an email at ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hr@avendumtech.com", className: "text-primary hover:underline font-medium", children: "hr@avendumtech.com" }),
                "."
              ] })
            ] })
          ] })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen pt-4 pb-24 overflow-hidden bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0 pointer-events-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] animate-pulse", style: {
        animationDuration: "10s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] animate-pulse", style: {
        animationDuration: "15s"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-7xl px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-4 lg:py-4 border-b border-border/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: -10
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.5
          }, className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
            " Join Our Gurgaon Engineering Squad"
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
          }, className: "font-display text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-foreground", children: [
            "Build the future of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient font-bold", children: "Enterprise Automation." })
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
          }, className: "mt-6 text-muted-foreground leading-relaxed text-base lg:text-lg max-w-2xl font-light", children: "We engineer high-performance platforms, real-time data pipelines, and sophisticated user interfaces at scale. Join our elite engineering team in Gurgaon to solve complex system design challenges with clean code, autonomy, and real production impact." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 15
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            duration: 0.5,
            delay: 0.3
          }, className: "pt-6 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#open-positions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { className: "cursor-pointer px-6", children: "Explore Open Roles" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers/apply", search: {
              role: "open-application"
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { variant: "secondary", className: "cursor-pointer", children: [
              "Submit Open Application ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          scale: 0.95
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 0.6,
          delay: 0.2
        }, className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroAnimation, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display text-2xl sm:text-3xl font-semibold tracking-tight text-foreground flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4" }) }),
          "What it means to build with us."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: culture.map((c) => {
          const Icon = c.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "col-span-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { hoverGlow: true, className: "h-full flex flex-col justify-between border border-border/40 bg-card/35 backdrop-blur-md rounded-2xl p-5 hover:bg-card/55 hover:border-foreground/15 transition-all duration-300 relative overflow-hidden", style: {
            "--glow": c.glowColor
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-8 w-8 items-center justify-center rounded-lg bg-foreground/[0.02] border border-border/30 text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm font-semibold text-foreground", children: c.title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground leading-relaxed font-light", children: c.desc })
          ] }) }) }, c.title);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "open-positions", className: "mt-28 scroll-mt-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-xl mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3.5 w-3.5" }),
            " Opportunities"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground", children: "Explore open opportunities." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass bg-card/20 border border-border/50 rounded-3xl p-4 flex flex-col md:flex-row items-center gap-4 justify-between w-full mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full md:w-96", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), placeholder: "Search skills, tags, or keywords...", className: "w-full rounded-2xl border border-border/50 bg-background/50 pl-11 pr-4 py-2.5 text-xs outline-none focus:border-primary transition-all" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1 bg-foreground/[0.02] p-1 rounded-2xl border border-border/30 overflow-x-auto w-full md:w-auto shrink-0 justify-start", children: categories.map((c) => {
            const isActive = filterDept === c.id;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setFilterDept(c.id), className: "relative px-3 py-2 text-[10px] font-semibold rounded-xl cursor-pointer transition-all text-muted-foreground hover:text-foreground shrink-0 focus:outline-none", children: [
              isActive && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { layoutId: "activeCategoryPill", className: "absolute inset-0 bg-primary rounded-xl shadow z-0", transition: {
                type: "spring",
                stiffness: 380,
                damping: 30
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `relative z-10 transition-colors duration-200 ${isActive ? "text-primary-foreground font-bold" : ""}`, children: c.label })
            ] }, c.id);
          }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "popLayout", children: filteredJobs.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0
        }, animate: {
          opacity: 1
        }, exit: {
          opacity: 0
        }, className: "text-center py-16 glass rounded-3xl border border-border/40 bg-card/25", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-8 w-8 text-muted-foreground/50 mx-auto mb-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm font-light", children: "No positions match your filters currently." })
        ] }) : filteredJobs.map((j) => {
          let categoryColors = "text-primary border-primary/20 bg-primary/5";
          if (j.category === "engineering") categoryColors = "text-blue-400 border-blue-500/20 bg-blue-500/5";
          if (j.category === "telecom") categoryColors = "text-emerald-400 border-emerald-500/20 bg-emerald-500/5";
          if (j.category === "product") categoryColors = "text-violet-400 border-violet-500/20 bg-violet-500/5";
          if (j.category === "support") categoryColors = "text-amber-400 border-amber-500/20 bg-amber-500/5";
          return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { layout: true, initial: {
            opacity: 0,
            y: 10
          }, animate: {
            opacity: 1,
            y: 0
          }, exit: {
            opacity: 0,
            scale: 0.98
          }, transition: {
            type: "spring",
            stiffness: 300,
            damping: 25
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers", search: {
            job: j.id
          }, className: "w-full text-left cursor-pointer focus:outline-none block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass bg-card/15 hover:bg-card/45 border border-border/40 hover:border-foreground/15 rounded-2xl p-6 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `px-2.5 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-wider font-semibold ${categoryColors}`, children: j.categoryLabel }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground group-hover:text-primary transition-colors font-display", children: j.title })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-xs text-muted-foreground font-light", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-primary/70" }),
                  " ",
                  j.location
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "·" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Briefcase, { className: "h-3.5 w-3.5 text-primary/70" }),
                  " ",
                  j.experience
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: j.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-lg border border-border/40 bg-foreground/[0.01] px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground", children: t }, t)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 self-end md:self-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex h-10 px-5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 text-xs items-center justify-center gap-1.5", children: [
              "View Details & Apply ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })
            ] }) })
          ] }) }) }, j.id);
        }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-xl mb-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(HeartPulse, { className: "h-3.5 w-3.5" }),
            " Perks & Benefits"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground", children: "Engineered for growth." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: perks.map((p) => {
          const Icon = p.icon;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { hoverGlow: true, className: "flex flex-col justify-between items-center text-center p-8 border border-border/40 bg-card/25 rounded-3xl hover:bg-card/45 transition-all duration-300 relative overflow-hidden", style: {
            "--glow": p.glowColor
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.02] border border-border/30 text-primary mb-5 relative", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-2xl bg-primary/5 blur-sm" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold text-foreground", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground leading-relaxed font-light", children: p.desc })
          ] }) }, p.title);
        }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-28", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-xl mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-3.5 w-3.5" }),
            " Interview Process"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground", children: "Transparent, fast, and fair." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass bg-card/10 border border-border/40 rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex justify-between items-center w-full max-w-4xl mx-auto mb-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[20px] left-[5%] right-[5%] h-[2px] bg-border/40 z-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[20px] left-[5%] h-[2px] bg-primary z-0 transition-all duration-500", style: {
              width: `${activeStep / (steps.length - 1) * 90}%`
            } }),
            steps.map((s, index) => {
              const isActive = activeStep === index;
              const isCompleted = index < activeStep;
              return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveStep(index), className: "relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border ${isActive ? "bg-primary text-primary-foreground border-primary scale-110 shadow-lg shadow-primary/20" : isCompleted ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/40" : "bg-card border-border text-muted-foreground hover:border-primary/40"}`, children: isCompleted ? "✓" : s.step }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-mono mt-2 transition-colors ${isActive ? "text-primary font-bold" : "text-muted-foreground group-hover:text-foreground"}`, children: s.title.split(" ")[0] })
              ] }, s.step);
            })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 15
          }, animate: {
            opacity: 1,
            y: 0
          }, exit: {
            opacity: 0,
            y: -15
          }, transition: {
            duration: 0.3
          }, className: "grid grid-cols-1 md:grid-cols-5 gap-8 items-start border-t border-border/30 pt-8 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3 space-y-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono tracking-widest text-primary uppercase", children: [
                "STEP 0",
                activeStep + 1,
                " // ",
                steps[activeStep].title
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-semibold text-foreground", children: steps[activeStep].title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed font-light", children: steps[activeStep].desc })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2 glass border border-border/30 bg-foreground/[0.01] rounded-2xl p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4", children: "What to Expect" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3 font-light text-xs text-foreground/90", children: steps[activeStep].details.map((detail, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-emerald-400 shrink-0 mt-0.5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: detail })
              ] }, idx)) })
            ] })
          ] }, activeStep) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { hoverGlow: true, className: "p-10 text-center max-w-4xl mx-auto border border-border bg-card/35 backdrop-blur-md rounded-[32px] relative overflow-hidden", style: {
        "--glow": "rgba(99, 102, 241, 0.15)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.02] border border-border text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleQuestionMark, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight", children: "Don't see the right position?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed font-light", children: "We are always seeking exceptional engineers and telecom domain specialists. If you have a strong background in **Java, Python, Spring Boot, React, Vaadin, or Telecom OSS**, send an open application. We review profiles on a rolling basis." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers/apply", search: {
              role: "open-application"
            }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { className: "cursor-pointer px-8", children: "Submit Open Application" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "mailto:hr@avendumtech.com", className: "text-xs text-muted-foreground hover:text-foreground font-semibold flex items-center gap-1 transition-colors", children: [
              "Or email hr@avendumtech.com ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  CareersPage as component
};
