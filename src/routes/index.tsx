import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  TowerControl as Tower,
  Signal,
  Search,
  Shield,
  Clock,
  CheckCircle2,
  ChevronRight,
  AlertCircle,
  Sparkles,
  Network,
  Layers,
  TrendingUp,
  ShieldCheck,
  Database,
  Sliders,
  Cpu,
  RefreshCw,
  FileText,
  Check,
  ExternalLink,
  Laptop,
  CheckCircle,
  Zap,
  Activity,
  Users,
  Calendar,
  Compass,
  MapPin,
  Mail,
  Phone,
  Lock,
  EyeOff,
  ServerCrash,
  CheckSquare,
  Binary,
  Radio,
  Flame,
  Workflow
} from "lucide-react";
import { BrandButton } from "@/components/BrandButton";
import { GlassCard } from "@/components/GlassCard";
import { Counter } from "@/components/Counter";
import { HeroCarousel } from "@/components/HeroCarousel";
import { MarqueeRow } from "@/components/MarqueeRow";
import aboutTeam from "@/assets/site/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avendum Technologies — AI Platforms for Telecom Network Automation" },
      {
        name: "description",
        content:
          "Purpose-built AI platforms that automate microwave deployment planning, 5G IP provisioning, and RAN network auditing — engineered for the scale and complexity of India's telecom operators.",
      },
      { property: "og:title", content: "Avendum Technologies — AI Platforms for Telecom Network Automation" },
      {
        property: "og:description",
        content:
          "Purpose-built AI platforms that automate microwave deployment planning, 5G IP provisioning, and RAN network auditing.",
      },
      { property: "og:url", content: "/" },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 151, suffix: "K+", label: "MW Plans Tracked" },
  { value: 3, suffix: "", label: "Products in Production" },
  { value: 99, suffix: ".5%", label: "Uptime Commitment" },
  { value: 4, suffix: " Hrs", label: "Critical Response SLA" },
];

const platforms = [
  {
    icon: Tower,
    tag: "MW Planning & Deployment",
    name: "MIDS",
    desc: "Replaces Excel-based MW planning with a centralised, role-aware platform — tracking every plan from LB release through deployment and dismantling.",
    color: "#1A6FD4",
    link: "/products/mids",
    bullets: [
      "Pan India & circle dashboards (MW & UBR)",
      "8 role-based workflow engine",
      "25+ VI validation rules on every upload",
      "Full dismantle lifecycle tracking",
    ],
  },
  {
    icon: Signal,
    tag: "5G IP Provisioning",
    name: "NEXUS",
    desc: "Centralised 4G/5G rollout management — zero-touch Fiber POP RA automation, IPv4/IPv6 provisioning and B2B order management.",
    color: "#0F9F6E",
    link: "/products/nexus",
    bullets: [
      "5G stencil dashboard — dual-stack tracking",
      "Zero-touch RA automation (Cygnet → ATOM)",
      "6 native system integrations",
      "B2B & Telemedia order management",
    ],
  },
  {
    icon: Search,
    tag: "RAN & MW Audit",
    name: "NETIQ",
    desc: "Intelligent audit platform — CM dump parsing across 4 vendors, 50+ audit rules, ghost node detection and AI/ML anomaly detection.",
    color: "#7C3AED",
    link: "/products/netiq",
    bullets: [
      "4-vendor CM dump parsing",
      "50+ audit rules across RAN & MW",
      "Ghost node detection engine",
      "AI/ML anomaly detection layer",
    ],
  },
];

const partners = [
  "Bharti Airtel",
  "Alliance Partners",
  "Ericsson Ecosystem",
  "Nokia Ecosystem",
  "Huawei Partners",
  "Samsung Ecosystem",
];

const whyAvendum = [
  {
    step: "01",
    title: "Domain-built, not adapted",
    desc: "Every workflow, validation rule and dashboard reflects how MW planning, 5G rollout and RAN auditing actually work — built with the teams who do it, not adapted from a generic enterprise template.",
  },
  {
    step: "02",
    title: "National scale, circle precision",
    desc: "Our platform handles national visibility and circle-level granularity simultaneously — letting leadership and circle teams work from the same data without compromise on either view.",
  },
  {
    step: "03",
    title: "Proven in production",
    desc: "Over 151,000 live MW plans tracked. 5G rollout backbone for one of India's largest operators. NETIQ in active POC with live CM dump parsing. Not a demo. Not a pilot. Production.",
  },
  {
    step: "04",
    title: "We stay after go-live",
    desc: "Structured AMC, dedicated partner support and managed operations mean we're a long-term platform partner — not an implementation vendor that disappears at project handover.",
  },
];

const capabilityStack = [
  {
    category: "MW & Radio Planning",
    items: [
      { name: "Nominal quarter checks", desc: "Verifies planned release quarter bounds" },
      { name: "25+ strict validation checks", desc: "Cross-checks circles, POP IDs, hop distance, nominal coordinates, and topology rules" },
      { name: "Dismantle validation engine", desc: "Automates survey readiness, traffic redirection validation, and CAM-SRN confirmations" },
    ],
  },
  {
    category: "IP Provisioning",
    items: [
      { name: "Fiber POP auto-detection", desc: "Hooks into Cygnet Tx Planning to monitor RFS state changes" },
      { name: "Dual-stack IPv4/IPv6 allocation", desc: "Resolves IAMS profile bindings and maps EPT/NPT domain logic" },
      { name: "Secure ATOM tunnels", desc: "Zero-touch push of configuration parameters to routers" },
    ],
  },
  {
    category: "RAN & MW Audit",
    items: [
      { name: "Multi-vendor parser adapters", desc: "Ingests and indexes daily CM dumps from Ericsson, Nokia, and Huawei NMS" },
      { name: "50+ audit rule matrix", desc: "Checks parameter conflicts across frequencies, PCI, Cell ID, and near-end/far-end configs" },
      { name: "Ghost node database anomalies", desc: "Auto-flags active NMS items marked decommissioned in DB" },
    ],
  },
];

const techPipeline = [
  {
    num: "01",
    title: "Ingestion & Parsing",
    subtitle: "Heterogeneous Data Pipelines",
    icon: Database,
    desc: "Avendum's ingestion layer handles multi-vendor NMS configuration dumps, planning stencils, coordinates, and VLAN layouts without format preprocessing. Adaptable parser routines ingest multi-GB inputs daily.",
    bullet: "Ericsson, Nokia & Huawei dump support",
  },
  {
    num: "02",
    title: "Rules & Validations",
    subtitle: "Automated Rules Engines",
    icon: Sliders,
    desc: "Inputs are instantly routed through circle-aware logic engines. MIDS verifies quarterly plan boundaries and site configurations, while NETIQ scans parameters against a matrix of 50+ integrity constraints.",
    bullet: "25+ planning & 50+ audit validations",
  },
  {
    num: "03",
    title: "Zero-Touch Action",
    subtitle: "Orchestration & Provisioning",
    icon: Cpu,
    desc: "Validated templates are translated into configuration commands and dispatched via secure API tunnels. System connects Cygnet and ATOM to automate Fiber POP setups without planner oversight.",
    bullet: "Zero-touch provisioning & router configs",
  },
  {
    num: "04",
    title: "Remediation & Loop",
    subtitle: "Closed-loop Continuous Audit",
    icon: RefreshCw,
    desc: "NETIQ monitors NMS states daily, cross-referencing configurations against planning golden records. Any divergence triggers automated corrections or raises circle lead alerts to restore network compliance.",
    bullet: "Auto delta reports & error correction",
  },
];

const companyMilestones = [
  {
    stage: "2021",
    title: "NEXUS Core Launch",
    desc: "Engineered first-generation IP allocation automation and Fiber POP provisioning modules. Deployed to optimize circle fiber provisioning networks.",
  },
  {
    stage: "2023",
    title: "MIDS National Rollout",
    desc: "Successfully launched the Microwave Planning & Deployment platform (MIDS) at operator scale in India, tracking hop approvals across all circles.",
  },
  {
    stage: "2025",
    title: "5G Stencils & IAMS integration",
    desc: "Expanded NEXUS to automate 5G dual-stack IPv4/IPv6 stencils and zero-touch router RA pushes through ATOM tunnels.",
  },
  {
    stage: "2026",
    title: "NETIQ Audit Platform",
    desc: "Launched NETIQ configuration dump parsing and ghost cell detection loops, establishing the industry's first closed-loop telecom planning audit layer.",
  },
];

const teamMembers = [
  {
    initials: "AK",
    name: "Ankit Bhardwaj",
    role: "Co-Founder & Product Lead",
    bio: "Architect of NEXUS and MIDS. Deep expertise in telecom network planning, IP provisioning systems, and operator-scale deployment workflows.",
  },
  {
    initials: "PK",
    name: "Pradeep Kumar",
    role: "Co-Founder & Technical Lead",
    bio: "Lead architect of NETIQ. RAN and Microwave domain expert with extensive hands-on experience debugging NMS configuration dumps and multi-vendor telecom parameters.",
  },
];

const labsInitiatives = [
  {
    id: "genai_oss_trans",
    title: "Generative OSS CLI Translators",
    focus: "Multi-Vendor CLI Script Automation",
    status: "PROTOTYPE",
    color: "#7C3AED",
    icon: Binary,
    desc: "A localized, secure LLM engine fine-tuned on multi-vendor syntax libraries (Ericsson, Nokia, Cisco CLI). Planners type high-level deployment intents (e.g. 'provision 5G UBR link in Haryana with VLAN 3410'), and the copilot auto-generates syntax-accurate router CLI and XML scripts, removing manual translation slips.",
    tech: "Fine-tuned 8B Parameter Models, Local Parser Syntaxes, Closed-loop Verification",
    target: "Zero syntax slips during multi-vendor CLI template creation."
  },
  {
    id: "ai_activation",
    title: "AI Order Activation Orchestrator",
    focus: "Intelligent BSS/OSS Billing & Provisioning Link",
    status: "ACTIVE RESEARCH",
    color: "#1A6FD4",
    icon: Workflow,
    desc: "Machine learning models designed to bridge BSS order management and OSS network provisioning. By analyzing historical circuit delays, fiber cut trends, and IP POP capacities, the engine predicts order activation lags and dynamically pre-allocates VLAN bounds to prevent activation fallouts.",
    tech: "Predictive Provisioning Pipelines, POP Capacity Estimators, Real-time Queue Tuning",
    target: "Reduce B2B order-to-activation fallout rates by 85%."
  },
  {
    id: "predictive_assurance",
    title: "Predictive OSS Configuration Assurance",
    focus: "Drift Prevention & Self-Healing RAN Configuration",
    status: "FIELD TESTING",
    color: "#0F9F6E",
    icon: Sliders,
    desc: "Autonomous anomaly detection engines that process daily multi-vendor CM dumps. By analyzing parameter changes across Nokia/Ericsson nodes, the ML model predicts configuration drifts and ghost cells before they affect client SLA metrics, automatically recommending rollback scripts.",
    tech: "NMS Configuration Drift Analyzers, Predictive Node Clashing Engines",
    target: "Identify and isolate parameter clashing within 15 minutes of dump parsing."
  }
];

function Home() {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);
  const [activeLabStep, setActiveLabStep] = useState<number>(0);

  return (
    <div className="relative">
      {/* HERO CAROUSEL */}
      <HeroCarousel />

      {/* MARQUEE — TRUSTED BY */}
      <section className="relative border-y border-border/60 bg-[var(--surface)]/30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-2">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground pt-3">
            Trusted by operators and ecosystems partners
          </p>
          <MarqueeRow items={partners} />
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 mt-20">
        <GlassCard gradientBorder hoverGlow={false} className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 p-8 sm:p-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <div className="font-display text-4xl sm:text-5xl font-semibold text-gradient">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </GlassCard>
      </section>

      {/* COMPANY STORY BAND */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border">
              <img src={aboutTeam} alt="Avendum engineering team" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <GlassCard gradientBorder hoverGlow={false} className="w-56 bg-surface/90 backdrop-blur">
                <p className="text-xs uppercase tracking-[0.25em] text-primary font-bold">Built by Practitioners</p>
                <p className="mt-2 font-display text-2xl font-semibold text-gradient">Domain Deep</p>
                <p className="text-xs text-muted-foreground mt-1">Founders with hands-on telecom operations experience.</p>
              </GlassCard>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
              We build the <span className="text-gradient">intelligence layer</span> for telecom operations.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
              Avendum Technologies develops mission-critical enterprise platforms for the telecom industry. We replace manual spreadsheets, disconnected dashboards, and opaque parameter databases with automated workflows built natively for the telecom domain.
            </p>

            {/* Core Values Cards */}
            <div className="mt-6 space-y-3">
              <div className="flex gap-3 items-start p-3 rounded-lg border border-border/40 bg-foreground/5">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Layers className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Built from the inside out</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">We are telecom practitioners building software for telecom engineers, matching the real scale and complexity of the operations floor.</p>
                </div>
              </div>
              <div className="flex gap-3 items-start p-3 rounded-lg border border-border/40 bg-foreground/5">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Proven Scale &amp; Reliability</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Automating workflows for India&apos;s leading operators at a national scale. Deployed in active production, not pilots.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/company"><BrandButton>Corporate Story</BrandButton></Link>
              <Link to="/company/partner"><BrandButton variant="secondary">Partner Program</BrandButton></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Key Milestones</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Our journey of <span className="text-gradient">telecom automation</span>
            </h2>
            <p className="mt-5 text-muted-foreground text-sm leading-relaxed">
              We started by automating IP allocations and grew into a nationwide planning and audit partner. Every phase of our milestone roadmap represents another step toward zero-touch operator networks.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/company"><BrandButton variant="secondary">Read Full Story</BrandButton></Link>
            </div>
          </div>

          <div className="relative border-l border-border/60 pl-8 space-y-6">
            {companyMilestones.map((m) => (
              <div key={m.stage} className="relative group">
                {/* Milestone Node Dot */}
                <div className="absolute -left-[37px] top-1.5 h-4 w-4 rounded-full border border-primary bg-background flex items-center justify-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                </div>
                <span className="font-mono text-xs text-primary font-semibold block">{m.stage}</span>
                <h3 className="font-display font-bold text-base text-foreground mt-1">{m.title}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="max-w-2xl text-center md:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Our Platforms</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Three platforms. One <span className="text-gradient">telecom intelligence suite</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Each product is independently deployable and purpose-built — MIDS for MW planning, NEXUS for 5G provisioning, and NETIQ for network auditing.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <GlassCard key={p.name} gradientBorder className="flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary" style={{ color: p.color }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs uppercase tracking-widest px-2 py-0.5 rounded border border-border/40 font-mono text-[10px] text-muted-foreground">{p.tag}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-bold font-display" style={{ color: p.color }}>{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <ul className="mt-5 space-y-2">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1 shrink-0" style={{ backgroundColor: p.color }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4 border-t border-border/40">
                  <Link to={p.link} className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: p.color }}>
                    Full product details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* TECHNICAL CAPABILITIES & INTEGRATION STACK */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Integration Stack</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Broad capabilities. <span className="text-gradient">Deep integrations</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Avendum is built to live on the real-world operational network, coordinating with operators, stencils, NMS systems, and database pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {capabilityStack.map((cat, idx) => (
            <GlassCard key={idx} gradientBorder className="flex flex-col">
              <h3 className="font-display font-semibold text-lg border-b border-border/40 pb-3 text-primary">
                {cat.category}
              </h3>
              <div className="mt-4 space-y-4 grow">
                {cat.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group">
                    <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed pl-3">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CLIENTS & PARTNERS */}
      <section id="clients" className="mx-auto max-w-7xl px-6 mt-28">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Our Clients &amp; Partners</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Deployed for operators who <span className="text-gradient">demand more</span>.
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Our platforms are trusted by India&apos;s leading telecom operators and their alliance ecosystem partners.
          </p>
        </div>

        {/* 4 Client cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <GlassCard gradientBorder className="text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto text-primary">
                <Tower className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-base">Bharti Airtel</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                MIDS, NEXUS &amp; NETIQ deployed at PAN India scale across all circles.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/30 text-[10px] text-emerald-400 font-mono flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Pan-India Production
            </div>
          </GlassCard>

          <GlassCard gradientBorder className="text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto text-accent">
                <Signal className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-base">Ericsson Partners</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                RAN &amp; MW domain integration — CM dump parsing and audit intelligence.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/30 text-[10px] text-emerald-400 font-mono flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Active Adapter
            </div>
          </GlassCard>

          <GlassCard gradientBorder className="text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto text-primary">
                <Network className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-base">Nokia Ecosystem</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Multi-vendor audit coverage and NETIQ integration across network domains.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/30 text-[10px] text-emerald-400 font-mono flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Active Adapter
            </div>
          </GlassCard>

          <GlassCard gradientBorder className="text-center flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto text-accent">
                <CheckCircle className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-display font-semibold text-base">Alliance Partners</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                SI, OEM and managed service partners operating Avendum platforms for end clients.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-border/30 text-[10px] text-primary font-mono flex items-center justify-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Portal Access Live
            </div>
          </GlassCard>
        </div>

        {/* LinkedIn Updates Strip */}
        <a
          href="https://www.linkedin.com/company/avendumtech/posts/?feedView=all"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block p-4 rounded-xl border border-border/40 bg-surface hover:bg-foreground/5 hover:border-border/80 transition-all shadow-sm group"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-[#0A66C2] flex items-center justify-center text-white shrink-0 font-bold text-base">
              in
            </div>
            <div className="grow">
              <h4 className="text-xs font-semibold text-foreground flex items-center gap-1 group-hover:text-primary transition-colors">
                See our latest updates on LinkedIn
                <ExternalLink className="h-3 w-3 opacity-60" />
              </h4>
              <p className="text-[11px] text-muted-foreground mt-0.5">
                Follow Avendum Technologies — client success stories, product announcements and industry insights.
              </p>
            </div>
            <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-1" />
          </div>
        </a>
      </section>

      {/* AMC & SUPPORT BAND */}
      <section id="amc" className="mx-auto max-w-7xl px-6 mt-28">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">AMC &amp; Support</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
              We don&apos;t disappear <span className="text-gradient">after go-live</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-sm">
              Structured AMC and support programmes for deployed products — including dedicated support for alliance partners who operate our platform for end clients.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/40">
                <div className="font-display text-2xl font-bold text-primary">4 Hours</div>
                <div className="text-xs text-muted-foreground mt-1">Critical issue response SLA</div>
              </div>
              <div className="p-4 rounded-xl border border-border/40">
                <div className="font-display text-2xl font-bold text-primary">99.5%</div>
                <div className="text-xs text-muted-foreground mt-1">Platform uptime commitment</div>
              </div>
              <div className="p-4 rounded-xl border border-border/40">
                <div className="font-display text-2xl font-bold text-primary">24×7</div>
                <div className="text-xs text-muted-foreground mt-1">Managed operations coverage</div>
              </div>
              <div className="p-4 rounded-xl border border-border/40">
                <div className="font-display text-2xl font-bold text-primary">Quarterly</div>
                <div className="text-xs text-muted-foreground mt-1">Platform release cadence</div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <GlassCard gradientBorder>
              <h3 className="font-display text-lg font-semibold">Product AMC</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Bug fixes, quarterly patch cycles, DB tuning, and minor feature enhancements.
              </p>
            </GlassCard>
            <GlassCard gradientBorder>
              <h3 className="font-display text-lg font-semibold">Alliance Partner Support</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Dedicated partner managers, onboarding runs, L2/L3 helpdesks, and certified trainings.
              </p>
            </GlassCard>
            <GlassCard gradientBorder>
              <h3 className="font-display text-lg font-semibold">Managed Operations</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                24×7 NOC engineers, dedicated operators, and on-site stubs to guarantee continuous run.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>
      {/* NEW SECTION: DATA GOVERNANCE & PRIVACY COMPLIANCE */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Data Stewardship</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Telecom data governance &amp; <span className="text-gradient">infrastructure security</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Operating at telecommunication operator scale requires rigid data integrity and strict privacy walls. Because configurations map sensitive physical assets, Avendum is engineered from the ground up for zero-leak local processing.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Lock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Air-Gapped Deployment &amp; Privacy</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Deployable entirely within the operator&apos;s private cloud (air-gapped environments). Configuration stencils, proprietary IP blocks, and NMS data streams never leave your secure perimeter.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <EyeOff className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Automatic Data Masking &amp; Anonymization</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Dump files undergo local sanitization before parsing. Sensitive vendor keys, subscriber details, and device configurations are masked dynamically to comply with corporate security standards.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <CheckSquare className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Strict Schema Governance</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Ensures all configuration uploads match verified transmission parameters. Reconciles data conflicts (frequency clashing, mismatched hops, or unaligned POP records) at the entry gate before routing to engineers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Compliance Panel Widget */}
          <div className="p-6 rounded-2xl border border-border bg-surface-2/40 relative overflow-hidden backdrop-blur shadow-xl">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <h3 className="font-display font-bold text-base text-foreground flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              Security &amp; Privacy Audit
            </h3>
            <p className="text-[10px] text-muted-foreground mt-1 font-mono uppercase tracking-wider">
              System Audit compliance status
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border/30 pb-3">
                <div>
                  <div className="text-xs font-semibold text-foreground">Local Deployment</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">ON-PREMISE CONTAINER</div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  COMPLIANT
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border/30 pb-3">
                <div>
                  <div className="text-xs font-semibold text-foreground">CM Dump Scrubbing</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">LOCAL DATA ANONYMIZATION</div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  ACTIVE
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-border/30 pb-3">
                <div>
                  <div className="text-xs font-semibold text-foreground">Role-Based RBAC</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">8 WORKFLOW ROLES ENFORCED</div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  VERIFIED
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-foreground">API Tunnel Encryption</div>
                  <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">CYGNET ➔ ATOM SSL CORRIDOR</div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  TLS_1.3_AES256
                </span>
              </div>
            </div>

            {/* Compliance Badge Watermark */}
            <div className="mt-6 p-3 rounded-lg bg-background/50 border border-border/60 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-[10px] text-muted-foreground font-mono leading-none">
                Compliance scan passed: ISO 27001 &amp; SOC2 mappings verified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* NEW UNIQUE SECTION: AVENDUM LABS & NEXT-GEN R&D IN AUTOMATION */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Avendum Labs</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Next-generation <span className="text-gradient">AI in Telecom OSS/BSS</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            We don&apos;t just build static databases. Avendum Labs researches the application of machine learning and large language models within Operations Support Systems (OSS) and Business Support Systems (BSS) to move networks closer to zero-touch automation.
          </p>
        </div>

        {/* 3 Columns selector */}
        <div className="grid md:grid-cols-3 gap-4 mt-10">
          {labsInitiatives.map((item, idx) => {
            const Icon = item.icon;
            const isActive = activeLabStep === idx;
            return (
              <button
                key={item.id}
                onClick={() => setActiveLabStep(idx)}
                className={`text-left p-6 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${isActive
                  ? "bg-surface shadow-xl border-primary shadow-primary/5 -translate-y-1"
                  : "bg-surface-2/20 border-border/40 hover:bg-foreground/5 hover:border-border"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center border border-border" style={{ color: item.color, backgroundColor: `${item.color}10` }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[9px] font-mono font-bold tracking-widest px-2 py-0.5 rounded border border-border bg-background/50" style={{ color: item.color }}>
                      {item.status}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display font-bold text-base text-foreground">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1 font-mono">{item.focus}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-border/25 flex items-center gap-1.5 text-xs text-primary font-semibold">
                  View Initiative Profile <ArrowRight className="h-3 w-3" />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed active lab initiative card */}
        <div className="mt-5 animate-fade-up">
          <GlassCard gradientBorder className="p-6 md:p-8 bg-surface-2/30">
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-start">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase" style={{ color: labsInitiatives[activeLabStep].color }}>
                  INITIATIVE PROFILE — {labsInitiatives[activeLabStep].focus}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                  {labsInitiatives[activeLabStep].title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {labsInitiatives[activeLabStep].desc}
                </p>

                <div className="mt-6 space-y-2 font-mono text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">Tech Stack:</span>
                    <span className="text-foreground">{labsInitiatives[activeLabStep].tech}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    <span className="text-muted-foreground">Impact Target:</span>
                    <span className="text-foreground">{labsInitiatives[activeLabStep].target}</span>
                  </div>
                </div>
              </div>

              {/* High Tech Activity Dial */}
              <div className="bg-background/80 rounded-xl border border-border p-5 relative overflow-hidden flex flex-col justify-between min-h-[200px]">
                <div className="flex items-center justify-between border-b border-border/30 pb-2 mb-2 text-[9px] font-mono">
                  <span>LABS TELEMETRY</span>
                  <span className="animate-pulse flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    SIM_RUNNING
                  </span>
                </div>

                <div className="grow flex flex-col justify-center items-center py-4 text-center">
                  <span className="font-mono text-3xl font-bold text-gradient leading-none">
                    {activeLabStep === 0 && "94.2%"}
                    {activeLabStep === 1 && "85%"}
                    {activeLabStep === 2 && "< 15m"}
                  </span>
                  <span className="text-[10px] text-muted-foreground mt-2 font-mono uppercase tracking-wider">
                    {activeLabStep === 0 && "Syntax Accuracy Score"}
                    {activeLabStep === 1 && "Fallout Reduction Target"}
                    {activeLabStep === 2 && "Anomaly Detection Latency"}
                  </span>
                </div>

                <div className="text-[9px] uppercase tracking-wider text-muted-foreground/60 border-t border-border/20 pt-2 flex items-center justify-between font-mono">
                  <span>AVENDUM LABS</span>
                  <span>R&amp;D STAGE</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* COMPANY MILESTONES (TIMELINE RESTRENGTHENING) */}


      {/* FOUNDING TEAM SECTION */}
      {/* <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Founding Leadership</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Practitioners who built the <span className="text-gradient">intelligence layer</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm">
            Avendum is built by telecom practitioners who have spent years designing, provisioning, and auditing operational networks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member) => (
            <GlassCard key={member.name} gradientBorder className="flex flex-col justify-between p-6">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary/10 to-accent/10 border border-border flex items-center justify-center text-primary font-display font-bold text-lg">
                  {member.initials}
                </div>
                <h3 className="mt-4 font-display font-bold text-lg text-foreground">{member.name}</h3>
                <span className="text-xs font-semibold text-primary block mt-0.5">{member.role}</span>
                <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                  {member.bio}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-border/30 flex justify-end">
                <a
                  href="https://www.linkedin.com/company/avendumtech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 font-mono"
                >
                  LinkedIn <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </section> */}

      {/* HOW THE TECHNOLOGY WORKS PIPELINE */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Operational Pipelines</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            How our <span className="text-gradient">technology operates</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Avendum automates processes through a systematic ingestion, validation, push-automation, and continuous audit pipeline.
          </p>
        </div>

        {/* Horizontal step selector */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
          {techPipeline.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activePipelineStep === idx;
            return (
              <button
                key={step.num}
                onClick={() => setActivePipelineStep(idx)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${isActive
                  ? "bg-primary/10 border-primary shadow-lg shadow-primary/5"
                  : "bg-surface border-border/40 hover:bg-foreground/5 hover:border-border"
                  }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`font-mono text-xs font-bold ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                    STAGE {step.num}
                  </span>
                  <Icon className={`h-4 w-4 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <h3 className="mt-3 font-display font-bold text-sm text-foreground">{step.title}</h3>
                <span className="text-[10px] text-muted-foreground block mt-1 font-mono">{step.bullet}</span>
              </button>
            );
          })}
        </div>

        {/* Active step details view */}
        <div className="mt-4 animate-fade-up">
          <GlassCard gradientBorder className="p-6 md:p-8 bg-surface-2/30">
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-center">
              <div>
                <span className="text-xs uppercase font-mono tracking-widest text-primary font-bold">
                  {techPipeline[activePipelineStep].subtitle}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground">
                  {techPipeline[activePipelineStep].title}
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {techPipeline[activePipelineStep].desc}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Core pipeline integration stack ready
                </div>
              </div>

              {/* Code display or mini diagram box */}
              <div className="bg-background/80 rounded-xl border border-border p-4 font-mono text-xs text-muted-foreground relative overflow-hidden shadow-inner min-h-[160px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-border/30 pb-2 mb-2 text-[10px]">
                    <span className="text-primary font-bold">avendum_pipeline_adapter.go</span>
                    <span>ACTIVE</span>
                  </div>
                  {activePipelineStep === 0 && (
                    <pre className="text-[10px] leading-relaxed text-emerald-400">
                      {`func IngestNMSDump(reader io.Reader) {
  parser := adapters.NewNokiaCMParser()
  nodes := parser.ExtractNodeTopology(reader)
  log.Infof("Parsed %d nodes successfully", len(nodes))
}`}
                    </pre>
                  )}
                  {activePipelineStep === 1 && (
                    <pre className="text-[10px] leading-relaxed text-amber-400">
                      {`func ValidateRules(hop *mids.Hop) error {
  for _, rule := range circle.ValidationRules {
    if err := rule.Evaluate(hop); err != nil {
      return fmt.Errorf("rule violation: %w", err)
    }
  }
  return nil
}`}
                    </pre>
                  )}
                  {activePipelineStep === 2 && (
                    <pre className="text-[10px] leading-relaxed text-blue-400">
                      {`func AutoProvisionVLAN(pop *nexus.POP) {
  stencil := nexus.BuildStencil(pop)
  tunnel := atom.NewTunnel(stencil.Config)
  tunnel.PushConfig(stencil.VlanID)
}`}
                    </pre>
                  )}
                  {activePipelineStep === 3 && (
                    <pre className="text-[10px] leading-relaxed text-purple-400">
                      {`func AuditLoop() {
  planned := mids.LoadPlannedHops()
  live := nms.ScanLiveHops()
  diff := Compare(planned, live)
  remediate.TriggerFlow(diff)
}`}
                    </pre>
                  )}
                </div>
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground/60 border-t border-border/20 pt-2 flex items-center justify-between mt-4">
                  <span>AVENDUM CORE ENGINE</span>
                  <span>v4.2.1-prod</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>



      {/* WHY AVENDUM */}
      <section id="why" className="mx-auto max-w-7xl px-6 mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Why Avendum</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Built for telecom. <span className="text-gradient">Not for everyone</span>.
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyAvendum.map((item) => (
            <GlassCard key={item.step} gradientBorder className="flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs text-primary">{item.step}</span>
                <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <GlassCard hoverGlow={false} className="relative overflow-hidden p-10 sm:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid md:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Get Started</p>
              <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold leading-tight">
                Ready to automate your <span className="text-gradient">network operations?</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-sm leading-relaxed max-w-xl">
                Talk to our team about how MIDS, NEXUS or NETIQ maps to your telecom infrastructure and challenges.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/demo"><BrandButton size="lg">Book a Demo <ArrowRight className="h-4 w-4" /></BrandButton></Link>
                <Link to="/company/partner"><BrandButton variant="secondary" size="lg">Become a Partner</BrandButton></Link>
              </div>
            </div>

            {/* Checklist elements from the original HTML design */}
            <div className="space-y-4 bg-background/50 p-6 rounded-2xl border border-border/60 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Check className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">30-minute walkthrough</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Custom tool analysis, no aggressive sales pitch.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <Sliders className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">Custom workflow mapping</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">We review how your specific planning files parse.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Clock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-foreground">Support Hotline</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Call our sales engineers directly: +91 98998 10118.</p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
