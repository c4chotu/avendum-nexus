import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
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

const platforms = [
  {
    icon: Search,
    tag: "Network Intelligence Platform",
    name: "NETiQ",
    desc: "A multi-vendor configuration audit and anomaly detection suite. Ingests raw NMS dumps, performs golden configuration compliance checks, detects parameter clashing, and executes automated drift remediation.",
    color: "#7C3AED",
    link: "/products/netiq",
    bullets: [
      "Multi-Vendor Ingestion: Normalizes XML, RAML, and CSV configuration dumps across RAN and Core layers.",
      "NMS Audit Engine: Identifies discrepancies in frequencies, Cell IDs, PCI collisions, and antenna retilts.",
      "Cross-Layer Correlation: Reconciles live physical reality against logical inventory databases.",
      "Operational Insights: Leverages ML classification to predict configuration drifts and suggest rollbacks.",
    ],
    isFlagship: true,
  },
  {
    icon: Tower,
    tag: "Network Planning & Deployment",
    name: "NETRA",
    desc: "Replaces Excel-based deployment planning with a centralised, role-aware platform — tracking every plan from release through deployment and dismantling.",
    color: "#1A6FD4",
    link: "/products/netra",
    bullets: [
      "Nominal Validation Engine: Automates path calculations and coordinate compliance checks.",
      "Transmission Lifecycle Tracking: Manages and reconciles every deployment and decommissioning plan.",
      "Unified Role-Based Workflows: Orchestrates actions across planners, validators, and field engineers.",
      "Multi-Vendor Stencils: Enforces structural schema rules across vendor-specific templates.",
    ],
  },
];

const whyAvendum = [
  {
    step: "01",
    title: "Domain-built, not adapted",
    desc: "Every workflow, validation rule, and dashboard reflects how network planning and NMS audits actually work — built with engineering teams, not adapted from generic templates.",
  },
  {
    step: "02",
    title: "National scale, regional precision",
    desc: "Our platform handles national visibility and regional granularity simultaneously — letting leadership and local teams work from the same data without compromise.",
  },
  {
    step: "03",
    title: "Proven in production",
    desc: "Deployable at national scale for large operators. NETiQ is actively integrated for automated parsing and compliance check loops. Production-tested, enterprise-grade software.",
  },
  {
    step: "04",
    title: "We stay after go-live",
    desc: "Structured AMC, dedicated partner support, and managed operations mean we're a long-term platform partner — not an implementation vendor that disappears at project handover.",
  },
];

const capabilityStack = [
  {
    category: "Network & Radio Planning",
    items: [
      { name: "Nominal validation checks", desc: "Verifies planned release bounds" },
      { name: "Strict validation checks", desc: "Cross-checks coordinates, POP IDs, hop distance, and topology rules" },
      { name: "Dismantle validation engine", desc: "Automates survey readiness, traffic redirection, and decommissioning approvals" },
    ],
  },
  {
    category: "NMS Audit & Intelligence",
    items: [
      { name: "Multi-vendor parser adapters", desc: "Ingests and indexes NMS configuration dumps across network domains" },
      { name: "Audit rule matrix", desc: "Checks parameter conflicts across frequencies, PCI, Cell ID, and near-end/far-end configs" },
      { name: "Ghost node database anomalies", desc: "Auto-flags active NMS items marked decommissioned in DB" },
    ],
  },
];

const techPipeline = [
  {
    num: "01",
    title: "Ingestion & Parsing",
    subtitle: "INGESTION PLANE",
    bullet: "Multi-vendor config extraction",
    desc: "Ingests and indexes multi-vendor configuration files, XML NMS dumps, and CSV/JSON operational parameters. Data is normalized into an unified, queryable database scheme.",
    code: `// Normalizing raw NMS configurations
const parser = new NMSParser({ vendor: "MultiVendor" });
const stream = await parser.ingest("/raw/telemetry/nms_dump.xml");
const normalizedNodes = stream.map(node => ({
  id: node.param("cell_id"),
  carrierFreq: node.param("earfcn"),
  txPower: node.param("configured_max_power"),
}));`
  },
  {
    num: "02",
    title: "Audit & Validation",
    subtitle: "RULES ENGINE",
    bullet: "Golden compliance matrices",
    desc: "Runs strict parameter validations to catch frequency collisions, PCI collisions, configuration drift, and parameter clashing against pre-defined baseline configurations.",
    code: `// Running strict validation rules
const validator = new RulesEngine();
const auditResult = validator.validate(normalizedNodes, {
  checkPciCollision: true,
  maxTxPowerDbm: 46,
  allowedFrequencyRanges: [1805, 1880],
});
if (auditResult.hasDrifts()) {
  console.warn("Drift detected: " + auditResult.summary());
}`
  },
  {
    num: "03",
    title: "Graph Correlation",
    subtitle: "CORRELATION ENGINE",
    bullet: "Topology reconciliation loops",
    desc: "Stitches logical planning stencils and microwave paths with physical reality, detecting topology anomalies and identifying decommissioned nodes still active in database records.",
    code: `// Reconcile live physical network topology
const graphDb = new NetworkTopologyGraph();
const discrepancies = await graphDb.reconcile(
  liveNetworkTopology,
  planningDatabase
);
// Auto-isolate decommissioned nodes active in NMS
const ghostNodes = discrepancies.filter(d => d.type === "GHOST_NODE");`
  },
  {
    num: "04",
    title: "Remediation & API",
    subtitle: "AUTOMATION ENGINE",
    bullet: "Closed-loop execution",
    desc: "Generates CLI configuration patches or REST/GraphQL payloads to remediate drifts. Executes configuration remedies via secure northbound APIs and NMS gateways.",
    code: `// Dispatch automated rollback command
const orchestrator = new AutomationGateways();
for (const drift of discrepancies) {
  const correctionTemplate = drift.generateRemediationTemplate();
  await orchestrator.dispatch(drift.targetNode, {
    payload: correctionTemplate,
    strategy: "ROLLBACK_ON_FAILURE"
  });
}`
  }
];


const teamMembers = [
  {
    initials: "AK",
    name: "Ankit Bhardwaj",
    role: "Co-Founder & Product Lead",
    bio: "Architect of network automation and planning platforms. Deep expertise in network planning and operator-scale deployment workflows.",
  },
  {
    initials: "PK",
    name: "Pradeep Kumar",
    role: "Co-Founder & Technical Lead",
    bio: "Lead architect of NETiQ. Network domain expert with extensive hands-on experience designing NMS configuration dump parsing and multi-vendor parameters.",
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
    desc: "A localized, secure LLM engine fine-tuned on multi-vendor syntax libraries. Planners type high-level deployment intents, and the copilot auto-generates syntax-accurate router CLI and XML scripts, removing manual translation slips.",
    tech: "Fine-tuned Parameter Models, Local Parser Syntaxes, Closed-loop Verification",
    target: "Zero syntax slips during multi-vendor CLI template creation."
  },
  {
    id: "ai_activation",
    title: "AI Order Activation Orchestrator",
    focus: "Intelligent BSS/OSS Billing & Provisioning Link",
    status: "ACTIVE RESEARCH",
    color: "#1A6FD4",
    icon: Workflow,
    desc: "Machine learning models designed to bridge BSS order management and OSS network provisioning. By analyzing historical circuit delays, fiber cut trends, and POP capacities, the engine predicts order activation lags.",
    tech: "Predictive Provisioning Pipelines, POP Capacity Estimators, Real-time Queue Tuning",
    target: "Drastically reduce B2B order-to-activation fallout rates."
  },
  {
    id: "predictive_assurance",
    title: "Predictive OSS Configuration Assurance",
    focus: "Drift Prevention & Self-Healing Network Configuration",
    status: "FIELD TESTING",
    color: "#0F9F6E",
    icon: Sliders,
    desc: "Autonomous anomaly detection engines that process NMS configuration dumps. By analyzing parameter changes across multi-vendor nodes, the ML model predicts configuration drifts and ghost cells, recommending rollback scripts.",
    tech: "NMS Configuration Drift Analyzers, Predictive Node Clashing Engines",
    target: "Rapidly identify and isolate parameter clashing post NMS dump parsing."
  }
];

const netiqFeatures = [
  {
    num: "01",
    title: "Multi-Vendor Config Ingestion",
    desc: "Normalises XML, RAML, and CSV NMS dumps from every vendor architecture into a unified, queryable intelligence schema without manual mapping.",
    icon: Database,
  },
  {
    num: "02",
    title: "NMS Audit & Compliance Engine",
    desc: "Validates Cell IDs, PCI allocations, frequency configs, and near/far-end parameters against golden configuration matrices — at full network scale.",
    icon: ShieldCheck,
  },
  {
    num: "03",
    title: "Topology Correlation & Ghost Detection",
    desc: "Stitches physical radio links with logical DB records to surface orphan cells, ghost nodes, and broken controller associations automatically.",
    icon: Network,
  },
  {
    num: "04",
    title: "Closed-Loop AI Remediation",
    desc: "ML drift-prediction engine auto-generates CLI patches and dispatches closed-loop corrections through secure Northbound API gateways — zero manual intervention.",
    icon: Cpu,
  },
];

const techTags = [
  "Multi-Vendor NMS Parsing", "PCI Collision Detection", "XML & RAML Ingestion",
  "Parameter Drift Analysis", "Closed-Loop Remediation", "NMS Audit Engine",
  "Topology Reconciliation", "OSS/BSS Integration", "Ghost Cell Detection",
  "AI Configuration Assurance", "CLI Patch Generation", "Northbound API Dispatch",
  "Golden Config Baseline", "Cross-Layer Correlation", "Predictive Anomaly Detection",
];

// ── NETiQ animation phases ──────────────────────────────────────────────────
function Home() {
  const [activePipelineStep, setActivePipelineStep] = useState<number>(0);
  const [activeLabStep, setActiveLabStep] = useState<number>(0);

  // Scroll-reveal via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("in-view");
      }),
      { threshold: 0.07 }
    );
    document.querySelectorAll(".section-reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* ── HERO ── */}
      <HeroCarousel />
      {/* ── CAPABILITY TICKER ── */}
      <div className="relative py-4  border-y border-border/30 overflow-hidden bg-surface/20 backdrop-blur-sm">
        <div className="flex animate-ticker gap-10 whitespace-nowrap w-max">
          {[...techTags, ...techTags].map((tag, i) => (
            <span key={i} className="inline-flex items-center gap-2 text-[11px] font-mono text-muted-foreground">
              <span className="h-1 w-1 rounded-full bg-primary/60 shrink-0" />
              {tag}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
      </div>

      {/* ── COMPANY ABOUT ── */}
      <section className="section-reveal mx-auto max-w-7xl px-6 mt-20">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-center">
          {/* Left: image */}
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border/50">
              <img src={aboutTeam} alt="Avendum engineering team" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 hidden md:block">
              <GlassCard gradientBorder hoverGlow={false} className="w-52 bg-surface/90 backdrop-blur px-4 py-3">
                <p className="text-[10px] uppercase tracking-[0.25em] text-primary font-bold">Built by Practitioners</p>
                <p className="mt-1 font-display text-xl font-semibold text-gradient">Domain Deep</p>
                <p className="text-[10px] text-muted-foreground mt-1 leading-relaxed">Founders with hands-on network operations experience.</p>
              </GlassCard>
            </div>
          </div>

          {/* Right: copy */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Who We Are</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
              We build the <span className="text-gradient">intelligence layer</span> for network operations.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm font-light">
              Avendum Technologies develops mission-critical enterprise platforms for network operations. We replace manual spreadsheets, disconnected dashboards, and opaque parameter databases with automated, AI-powered workflows built natively for multi-vendor, multi-domain networks.
            </p>

            <div className="mt-6 space-y-3">
              {[
                { icon: Layers, title: "Built from the inside out", desc: "Practitioners building software for network engineers — matching the real scale and complexity of the operations floor." },
                { icon: TrendingUp, title: "Proven scale & reliability", desc: "Automating network planning and NMS audit workflows at national scale. Deployed in active production environments." },
                { icon: ShieldCheck, title: "Multi-vendor, multi-domain", desc: "A single intelligence layer that normalises data across RAN, MW, UBR, Wireline, Router, and Core — vendor-agnostic." },
              ].map((item, i) => {
                const IIcon = item.icon;
                return (
                  <div key={i} className="flex gap-3 items-start p-3 rounded-lg border border-border/40 bg-foreground/5">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <IIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/company"><BrandButton>Our Story <ArrowRight className="h-4 w-4" /></BrandButton></Link>
              <Link to="/company/partner"><BrandButton variant="secondary">Partner Program</BrandButton></Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPACT PLATFORM CARDS ── */}
      <section className="section-reveal delay-100 mx-auto max-w-7xl px-6 mt-20">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Our Platforms</p>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold">
              Network Automation & <span className="text-gradient">Intelligence Suite</span>
            </h2>
          </div>
          <Link to="/products/netiq" className="hidden md:flex items-center gap-1 text-xs text-primary font-semibold hover:gap-2 transition-all">
            All products <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {platforms.map((p) => {
            const Icon = p.icon;
            const isFlagship = 'isFlagship' in p && p.isFlagship;
            return (
              <GlassCard
                key={p.name}
                gradientBorder
                className={`relative transition-all duration-300 hover:-translate-y-1 ${isFlagship
                  ? "border-[#7C3AED]/40 bg-gradient-to-b from-[#7C3AED]/8 to-transparent shadow-[0_0_30px_rgba(124,58,237,0.14)]"
                  : "border-border/40"
                  }`}
              >
                {isFlagship && (
                  <div className="absolute -top-3 right-5 bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-[9px] font-bold tracking-widest px-2.5 py-0.5 rounded-full flex items-center gap-1 z-10">
                    <Sparkles className="h-2.5 w-2.5" /> Flagship
                  </div>
                )}
                <div className="flex items-start gap-4">
                  <div
                    className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${p.color}15`, color: p.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-bold text-lg" style={{ color: p.color }}>{p.name}</h3>
                      <span className="text-[9px] font-mono px-2 py-0.5 rounded border border-border/50 text-muted-foreground shrink-0">{p.tag}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">{p.desc}</p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-1.5">
                  {p.bullets.slice(0, 4).map((b, j) => (
                    <div key={j} className="flex items-start gap-1.5 text-[10px] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full mt-1 shrink-0" style={{ backgroundColor: p.color }} />
                      <span className="leading-relaxed">{b.split(":")[0]}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-border/30">
                  <Link to={p.link} className="inline-flex items-center gap-1.5 text-xs font-semibold hover:gap-2.5 transition-all" style={{ color: p.color }}>
                    View platform <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>



      {/* ── NETiQ HOMEPAGE SHOWCASE ── */}
      <section className="section-reveal delay-100 relative mt-24 pb-20 pt-16 overflow-hidden">
        {/* BG accents */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7C3AED]/8 via-transparent to-[#1A6FD4]/5" />
        <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/50 to-transparent" />
        <div className="pointer-events-none absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent" />

        <div className="mx-auto max-w-7xl px-6">
          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-[#C084FC] bg-[#7C3AED]/12 border border-[#7C3AED]/30 mb-4">
                <Sparkles className="h-3 w-3 animate-pulse" /> Network Configuration Assurance
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#A855F7] font-bold">NETiQ Network Intelligence Platform</p>
              <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold leading-[1.15]">
                Independent audit & correlation<br />
                <span className="text-gradient">for multi-vendor telecom networks.</span>
              </h2>
            </div>
            <Link to="/products/netiq" className="shrink-0">
              <BrandButton>Explore NETiQ <ArrowRight className="h-4 w-4" /></BrandButton>
            </Link>
          </div>


          {/* Significance and Need Showcase Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
            {/* Column 1: Significance */}
            <div className="space-y-6">
              <div className="border-l-2 border-[#7C3AED] pl-4">
                <h3 className="font-display text-lg font-bold text-[#C084FC] tracking-wide">
                  The Significance of NETiQ
                </h3>
                <p className="text-xs text-muted-foreground mt-1 font-light">
                  How NETiQ redefines network operations support by acting as an external, independent intelligence layer.
                </p>
              </div>

              <div className="space-y-4">
                <GlassCard gradientBorder={true} hoverGlow={false} className="p-5 border-[#7C3AED]/20 bg-[#7C3AED]/5">
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center text-[#C084FC] shrink-0">
                      <ShieldCheck className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">AI-Powered Golden Configuration Audits</h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-light">
                        Leverages machine learning models to run golden baseline audits at national scale. NETiQ automatically identifies parameter drift, neighbour relation clashing, PCI conflicts, and frequency mismatches before they can degrade cell performance and impact subscribers.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard gradientBorder={true} hoverGlow={false} className="p-5 border-[#7C3AED]/20 bg-[#7C3AED]/5">
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center text-[#C084FC] shrink-0">
                      <Network className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">End-to-End Service Path Stitching</h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-light">
                        Telecom systems operate in silos. NETiQ correlates configuration data from RAN cells, microwave links, IP backhaul rings, and core gateways into a single unified topology graph. This traces logical routes and surfaces hidden transmission mismatches.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard gradientBorder={true} hoverGlow={false} className="p-5 border-[#7C3AED]/20 bg-[#7C3AED]/5">
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-[#7C3AED]/10 flex items-center justify-center text-[#C084FC] shrink-0">
                      <Cpu className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Closed-Loop AI Self-Healing</h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-light">
                        Instead of just logging issues for human review, NETiQ's machine learning engine generates syntax-accurate, vendor-specific CLI correction scripts. These patches can be automatically dispatched through northbound APIs to resolve drifts in minutes.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Column 2: Why Operators Need It */}
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-display text-lg font-bold text-primary tracking-wide">
                  Why Every Telecom Operator Needs It
                </h3>
                <p className="text-xs text-muted-foreground mt-1 font-light">
                  The business and operational imperatives of implementing continuous configuration assurance.
                </p>
              </div>

              <div className="space-y-4">
                <GlassCard gradientBorder={true} hoverGlow={false} className="p-5 border-primary/20 bg-primary/5">
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Zap className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Eliminating Order Provisioning Failures</h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-light">
                        When planning databases do not match active physical network states, B2B lease line and 5G network slice provisioning fail. NETiQ maintains high-fidelity configuration records, reducing BSS/OSS activation fallouts.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard gradientBorder={true} hoverGlow={false} className="p-5 border-primary/20 bg-primary/5">
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Database className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Exposing Ghost Nodes & Capacity Leaks</h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-light">
                        Operators frequently pay vendor licensing and energy costs for decommissioned hardware elements that remain active in NMS configurations. NETiQ reconciles active configuration dumps against assets to clean up ghost nodes.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard gradientBorder={true} hoverGlow={false} className="p-5 border-primary/20 bg-primary/5">
                  <div className="flex gap-4 items-start">
                    <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                      <Layers className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">Consolidating Multi-Vendor Dialects</h4>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-light">
                        Telecom networks are highly fragmented. NETiQ parses and maps proprietary configuration formats from Ericsson, Nokia, Huawei, and Juniper into a single canonical ledger, breaking vendor lock-in for operations.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>

          {/* Feature strip below */}
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { icon: Database, color: "#7C3AED", title: "Domain-wide Ingestion", desc: "Parses XML, RAML & CSV from all vendors across RAN, MW, UBR, Wireline, Router & Core." },
              { icon: ShieldCheck, color: "#2563EB", title: "Multi-Domain Audit Engine", desc: "47 RAN rules · 29 MW rules · 31 Wireline rules — run automatically on every dump." },
              { icon: Network, color: "#059669", title: "Cross-Domain Stitching", desc: "Maps Cell→MW Link→Circuit→Core UPF as a full service path graph — exposing broken hops." },
              { icon: Cpu, color: "#BE185D", title: "AI Anomaly Scoring", desc: "ML model ranks anomalies by P1/P2 impact, predicts drift trends, generates remediation patches." },
            ].map((item, i) => {
              const IIcon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl border transition-all hover:-translate-y-0.5"
                  style={{ borderColor: `${item.color}20`, backgroundColor: `${item.color}06` }}
                >
                  <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: `${item.color}15`, color: item.color }}>
                    <IIcon className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground">{item.title}</h4>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SERVICE STITCHING & AI PATH SCORING ── */}
      <section className="section-reveal delay-100 mx-auto max-w-7xl px-6 mt-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Left Column: Info & Details */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-[#34D399] bg-[#059669]/10 border border-[#059669]/25 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
              Real-Time Cross-Domain Stitching
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#059669] font-bold">Topology Intelligence</p>
            <h2 className="mt-2 font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Service path stitching with<br />
              <span className="text-gradient">AI-optimized scoring and predictions.</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-sm font-light">
              NETiQ bridges logical OSS databases and live physical network elements. By parsing configuration stencils, Microwave path records, and router configuration files, the correlation engine stitches end-to-end paths (RAN → Backhaul → IP Router → Core Network) and scores transmission reliability.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-lg bg-[#059669]/10 flex items-center justify-center text-[#34D399] shrink-0 mt-0.5">
                  <Network className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Cross-Domain Graph Stitching</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Stitches multi-vendor RAN cells to microwave links, fiber backhaul segments, and logical core routers to build an end-to-end service relationship map.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-lg bg-[#059669]/10 flex items-center justify-center text-[#34D399] shrink-0 mt-0.5">
                  <Sliders className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">AI Path Health & Routing Scoring</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Calculates an optimized connectivity health score for each transmission channel. It detects route redundancy gaps, modulation rate downgrades, and interface config conflicts.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-lg bg-[#059669]/10 flex items-center justify-center text-[#34D399] shrink-0 mt-0.5">
                  <Cpu className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Predictive Outage & Drift Forecasting</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Machine learning models analyze historical telemetry and parameter changes to forecast configuration drift trends, warning operations teams of potential outages 48 hours in advance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual AI Path Optimizer Card */}
          <div className="relative">
            <GlassCard gradientBorder className="p-6 border-[#059669]/20 bg-[#059669]/2 shadow-[0_0_30px_rgba(5,150,105,0.08)] animate-fade-in">
              <div className="flex items-center justify-between border-b border-border/20 pb-3 mb-4 select-none">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[#34D399] uppercase">Path Optimizer</span>
                  <h3 className="text-sm font-bold font-display text-foreground mt-0.5">AI Routing Health</h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                  OPTIMIZED
                </span>
              </div>

              {/* KPI metrics */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-background/40 border border-border/20 rounded-xl p-3 flex flex-col justify-center select-none">
                  <span className="text-[8.5px] text-muted-foreground uppercase font-mono">Connection Score</span>
                  <span className="text-2xl font-mono font-bold text-emerald-400 mt-0.5">98.6%</span>
                </div>
                <div className="bg-background/40 border border-border/20 rounded-xl p-3 flex flex-col justify-center select-none">
                  <span className="text-[8.5px] text-muted-foreground uppercase font-mono">Prediction Accuracy</span>
                  <span className="text-2xl font-mono font-bold text-emerald-400 mt-0.5">99.2%</span>
                </div>
              </div>

              {/* Topology Map visualization */}
              <div className="bg-background/60 border border-border/20 rounded-xl p-4 mb-4 select-none">
                <span className="text-[8.5px] text-muted-foreground uppercase font-mono tracking-wider block mb-3">Service Hops</span>
                <div className="flex items-center justify-between text-[8px] font-mono text-center gap-1">
                  <div className="px-1.5 py-1 bg-[#7C3AED]/12 border border-[#7C3AED]/35 rounded text-[#C084FC] font-semibold w-12 shrink-0">RAN Cell</div>
                  <span className="text-emerald-400">→</span>
                  <div className="px-1.5 py-1 bg-[#2563EB]/12 border border-[#2563EB]/35 rounded text-[#60A5FA] font-semibold w-12 shrink-0">MW Hop</div>
                  <span className="text-emerald-400">→</span>
                  <div className="px-1.5 py-1 bg-[#0891B2]/12 border border-[#0891B2]/35 rounded text-[#22D3EE] font-semibold w-12 shrink-0">UBR Ring</div>
                  <span className="text-emerald-400">→</span>
                  <div className="px-1.5 py-1 bg-[#BE185D]/12 border border-[#BE185D]/35 rounded text-[#F472B6] font-semibold w-12 shrink-0">Core UPF</div>
                </div>
              </div>

              {/* AI Predictions / Alert Box */}
              <div className="bg-black/55 border border-border/25 rounded-lg p-3 select-none">
                <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-[#34D399]">
                  <Cpu className="h-3.5 w-3.5 animate-pulse" />
                  <span>AI PREDICTION AGENT</span>
                </div>
                <div className="text-[9.5px] text-muted-foreground font-mono mt-1.5 leading-relaxed font-light">
                  <div>&gt; Analyzing NMS parameter delta...</div>
                  <div>&gt; Neighbor relations & frequencies stable.</div>
                  <div className="text-emerald-400 font-bold">&gt; Outage probability &lt;0.05% for next 48 hours.</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ── INTEGRATION STACK ── */}
      <section className="section-reveal mx-auto max-w-7xl px-6 mt-28">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Integration Stack</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Broad capabilities. <span className="text-gradient">Deep integrations.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-2xl mx-auto">
            Avendum is built to live on the real-world operational network, coordinating with operators, stencils, NMS systems, and database pipelines.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* MW & Radio Planning */}
          <GlassCard
            gradientBorder
            className="relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40 flex flex-col"
          >
            <h3 className="font-display font-semibold text-lg border-b border-border/40 pb-3 text-primary flex items-center gap-2">
              <Radio className="h-5 w-5 shrink-0" /> MW & Radio Planning
            </h3>
            <div className="mt-5 space-y-4 flex-grow">
              <div className="group">
                <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Nominal quarter checks
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed pl-3">
                  Verifies planned release quarter bounds.
                </p>
              </div>
              <div className="group">
                <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  25+ strict validation checks
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed pl-3">
                  Cross-checks circles, POP IDs, hop distance, nominal coordinates, and topology rules.
                </p>
              </div>
              <div className="group">
                <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Dismantle validation engine
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed pl-3">
                  Automates survey readiness, traffic redirection validation, and CAM-SRN confirmations.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* IP Provisioning */}
          <GlassCard
            gradientBorder
            className="relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40 flex flex-col"
          >
            <h3 className="font-display font-semibold text-lg border-b border-border/40 pb-3 text-primary flex items-center gap-2">
              <Zap className="h-5 w-5 shrink-0" /> IP Provisioning
            </h3>
            <div className="mt-5 space-y-4 flex-grow">
              <div className="group">
                <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Fiber POP auto-detection
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed pl-3">
                  Hooks into Cygnet Tx Planning to monitor RFS state changes.
                </p>
              </div>
              <div className="group">
                <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Dual-stack IPv4/IPv6 allocation
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed pl-3">
                  Resolves IAMS profile bindings and maps EPT/NPT domain logic.
                </p>
              </div>
              <div className="group">
                <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Secure ATOM tunnels
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed pl-3">
                  Zero-touch push of configuration parameters to routers.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* RAN & MW Audit */}
          <GlassCard
            gradientBorder
            className="relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40 flex flex-col"
          >
            <h3 className="font-display font-semibold text-lg border-b border-border/40 pb-3 text-primary flex items-center gap-2">
              <Activity className="h-5 w-5 shrink-0" /> RAN & MW Audit
            </h3>
            <div className="mt-5 space-y-4 flex-grow">
              <div className="group">
                <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Multi-vendor parser adapters
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed pl-3">
                  Ingests and indexes daily CM dumps from Ericsson, Nokia, and Huawei NMS.
                </p>
              </div>
              <div className="group">
                <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  50+ audit rule matrix
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed pl-3">
                  Checks parameter conflicts across frequencies, PCI, Cell ID, and near-end/far-end configs.
                </p>
              </div>
              <div className="group">
                <h4 className="text-xs font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                  Ghost node database anomalies
                </h4>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed pl-3">
                  Auto-flags active NMS items marked decommissioned in DB.
                </p>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ── PLATFORM PIPELINE ── */}
      {/* <section className="section-reveal delay-200 mx-auto max-w-7xl px-6 mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Platform Architecture</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            How data flows through<br />
            <span className="text-gradient">the intelligence engine</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
          {techPipeline.map((step, idx) => {
            const isActive = activePipelineStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActivePipelineStep(idx)}
                className={`relative p-5 rounded-xl border text-left cursor-pointer transition-all duration-300 ${isActive
                  ? "bg-primary/10 border-primary shadow-lg shadow-primary/10 -translate-y-1"
                  : "bg-surface/40 border-border/40 hover:bg-foreground/5 hover:border-border"
                  }`}
              >
                {idx < techPipeline.length - 1 && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-background border border-border/60">
                    <ChevronRight className="h-3 w-3 text-muted-foreground" />
                  </div>
                )}
                <span className={`font-mono text-[9px] font-bold uppercase tracking-widest ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                  Stage {step.num}
                </span>
                <h3 className="mt-2 font-display font-bold text-sm text-foreground">{step.title}</h3>
                <p className="mt-1 text-[10px] text-muted-foreground font-mono">{step.subtitle}</p>
                <div className={`mt-3 h-0.5 rounded-full transition-all ${isActive ? "bg-primary" : "bg-border/30"}`} />
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <GlassCard gradientBorder className="p-6 md:p-8 bg-surface-2/25">
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-8 items-stretch">
              <div className="flex flex-col justify-between">
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
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Core pipeline integration stack ready
                </div>
              </div>
              <div className="bg-background/80 rounded-xl border border-border p-4 font-mono text-xs text-muted-foreground shadow-inner min-h-[180px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-border/30 pb-2 mb-3 text-[10px]">
                    <span className="text-primary font-bold">avendum_engine.ts</span>
                    <span className="text-emerald-400 text-[9px] font-bold">● ONLINE</span>
                  </div>
                  <pre className="text-[9px] leading-relaxed text-emerald-400 overflow-x-auto whitespace-pre max-h-[160px]">
                    {techPipeline[activePipelineStep].code}
                  </pre>
                </div>
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground/50 border-t border-border/20 pt-2 flex justify-between mt-4">
                  <span>AVENDUM CORE ENGINE</span><span>v5.2.0-prod</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section> */}

      {/* ── AVENDUM LABS ── */}
      <section className="section-reveal delay-100 mx-auto max-w-7xl px-6 mt-28">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Avendum Labs</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Next-generation <span className="text-gradient">AI in OSS/BSS Integration</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
            Avendum Labs researches the application of machine learning and large language models within Operations Support Systems to move networks closer to zero-touch automation.
          </p>
        </div>

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
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center border border-border" style={{ color: item.color, backgroundColor: `${item.color}12` }}>
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
                  View Initiative <ArrowRight className="h-3 w-3" />
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-5">
          <GlassCard gradientBorder className="p-6 md:p-8 bg-surface-2/25">
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-8 items-start">
              <div>
                <span className="text-xs font-mono tracking-widest uppercase" style={{ color: labsInitiatives[activeLabStep].color }}>
                  INITIATIVE — {labsInitiatives[activeLabStep].focus}
                </span>
                <h3 className="mt-2 font-display text-2xl font-bold text-foreground">{labsInitiatives[activeLabStep].title}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{labsInitiatives[activeLabStep].desc}</p>
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
              <div className="bg-background/80 rounded-xl border border-border p-5 flex flex-col justify-between min-h-[200px] font-mono text-xs text-muted-foreground">
                <div className="flex items-center justify-between border-b border-border/30 pb-2 mb-2 text-[9px]">
                  <span>LABS TELEMETRY</span>
                  <span className="animate-pulse flex items-center gap-1 text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" /> SIM_RUNNING
                  </span>
                </div>
                <div className="space-y-1.5 text-[10px] leading-relaxed">
                  <div className="text-emerald-400">&gt; Initializing local LLM parser...</div>
                  <div>&gt; Loading multi-vendor syntax libraries</div>
                  <div>&gt; Generating CLI configuration scripts</div>
                  <div className="text-primary">&gt; Verification loop complete: SUCCESS</div>
                </div>
                <div className="text-[9px] uppercase tracking-wider text-muted-foreground/60 border-t border-border/20 pt-2 flex justify-between mt-4">
                  <span>AVENDUM LABS</span><span>ACTIVE</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ── DATA STEWARDSHIP ── */}
      <section className="section-reveal mx-auto max-w-7xl px-6 mt-28">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Data Stewardship</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Telecom data governance & <span className="text-gradient">infrastructure security</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed font-light">
              Operating at telecommunication operator scale requires rigid data integrity and strict privacy walls. Because configurations map sensitive physical assets, Avendum is engineered from the ground up for zero-leak local processing.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                  <Lock className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Air-Gapped Deployment & Privacy</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Deployable entirely within the operator's private cloud (air-gapped environments). Configuration stencils, proprietary IP blocks, and NMS data streams never leave your secure perimeter.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                  <EyeOff className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Automatic Data Masking & Anonymization</h4>
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

          <div className="p-6 rounded-2xl border border-border bg-surface-2/40 relative overflow-hidden backdrop-blur shadow-xl">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
            <h3 className="font-display font-bold text-base text-foreground flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" /> Security & Privacy Audit
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
                  <div className="text-[10px] text-muted-foreground mt-0.5 font-mono">CYGNET → ATOM SSL CORRIDOR</div>
                </div>
                <span className="text-[10px] font-semibold text-emerald-400 font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  TLS_1.3_AES256
                </span>
              </div>
            </div>

            <div className="mt-6 p-3 rounded-lg bg-background/50 border border-border/60 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <p className="text-[10px] text-muted-foreground font-mono leading-none">
                Compliance scan passed: ISO 27001 & SOC2 mappings verified.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY AVENDUM ── */}
      <section className="section-reveal delay-200 mx-auto max-w-7xl px-6 mt-28">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Why Avendum</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Built for operators. <span className="text-gradient">Domain-specialized.</span>
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

      {/* ── AMC & SUPPORT ── */}
      <section id="amc" className="section-reveal mx-auto max-w-7xl px-6 mt-28">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">AMC & Support</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
              We don't disappear <span className="text-gradient">after go-live</span>.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed text-sm font-light">
              Structured AMC and support programmes for deployed products — including dedicated support for alliance partners who operate our platform for end clients.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-border/40 bg-surface/20">
                <div className="font-display text-2xl font-bold text-primary">4 Hours</div>
                <div className="text-xs text-muted-foreground mt-1">Critical issue response SLA</div>
              </div>
              <div className="p-4 rounded-xl border border-border/40 bg-surface/20">
                <div className="font-display text-2xl font-bold text-primary">99.5%</div>
                <div className="text-xs text-muted-foreground mt-1">Platform uptime commitment</div>
              </div>
              <div className="p-4 rounded-xl border border-border/40 bg-surface/20">
                <div className="font-display text-2xl font-bold text-primary">24/7</div>
                <div className="text-xs text-muted-foreground mt-1">Managed operations coverage</div>
              </div>
              <div className="p-4 rounded-xl border border-border/40 bg-surface/20">
                <div className="font-display text-2xl font-bold text-primary">Quarterly</div>
                <div className="text-xs text-muted-foreground mt-1">Platform release cadence</div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <GlassCard
              gradientBorder
              className="relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40"
            >
              <h3 className="font-display text-lg font-semibold text-primary">Product AMC</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Bug fixes, quarterly patch cycles, DB tuning, and minor feature enhancements.
              </p>
            </GlassCard>

            <GlassCard
              gradientBorder
              className="relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40"
            >
              <h3 className="font-display text-lg font-semibold text-primary">Alliance Partner Support</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                Dedicated partner managers, onboarding runs, L2/L3 helpdesks, and certified trainings.
              </p>
            </GlassCard>

            <GlassCard
              gradientBorder
              className="relative p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-20px_var(--glow)] hover:border-primary/40"
            >
              <h3 className="font-display text-lg font-semibold text-primary">Managed Operations</h3>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                24/7 NOC engineers, dedicated operators, and on-site stubs to guarantee continuous run.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-reveal relative mt-28 mb-8 mx-6 lg:mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-surface/40 backdrop-blur-md p-12 sm:p-16">
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#7C3AED]/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-primary/15 blur-3xl" />
          <div className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7C3AED]/60 to-transparent" />

          <div className="relative grid md:grid-cols-[1.3fr_1fr] gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Get Started</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold leading-[1.1]">
                Ready to automate your<br />
                <span className="text-gradient">network operations?</span>
              </h2>
              <p className="mt-5 text-muted-foreground text-sm leading-relaxed max-w-xl">
                Talk to our team about how NETiQ or NETRA maps to your network infrastructure and automation challenges.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/demo"><BrandButton size="lg">Book a Demo <ArrowRight className="h-4 w-4" /></BrandButton></Link>
                <Link to="/company/partner"><BrandButton variant="secondary" size="lg">Become a Partner</BrandButton></Link>
              </div>
            </div>

            <div className="space-y-4 bg-background/50 p-6 rounded-2xl border border-border/50 backdrop-blur-sm">
              {[
                { icon: Check, title: "30-minute walkthrough", desc: "Custom tool analysis — no aggressive sales pitch." },
                { icon: Sliders, title: "Custom workflow mapping", desc: "We review how your specific NMS dumps parse." },
                { icon: Clock, title: "Dedicated support hotline", desc: "Direct access to sales engineers: +91 98998 10118." },
              ].map((item, i) => {
                const IIcon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-3">
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${i % 2 === 0 ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"}`}>
                      <IIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-foreground">{item.title}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
