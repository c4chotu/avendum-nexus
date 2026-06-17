import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket, TowerControl as Tower, Signal, Search, Building, Phone,
  Mail, MapPin, Globe, Database, Activity, ArrowRight,
  Network, Shield, Cpu, Layers, Zap, Radio, CheckCircle2,
  Server, GitBranch, ChevronRight, BarChart3, Wifi, Cable,
  ShieldCheck, Lock, Binary, Workflow, Target, Users, TrendingUp,
  Hexagon, CircuitBoard, Antenna
} from "lucide-react";

export const Route = createFileRoute("/company/")({
  head: () => ({
    meta: [
      { title: "About Us — Avendum Technologies" },
      {
        name: "description",
        content: "Built by telecom practitioners, for telecom teams. Avendum Technologies develops mission-critical enterprise platforms for the telecommunications industry."
      },
    ],
  }),
  component: CompanyPage,
});

const milestones = [
  {
    year: "2020",
    icon: Rocket,
    title: "Company Founded",
    desc: "Avendum Technologies incorporated in Gurgaon, India. Core team assembled from operators and network engineering backgrounds.",
    domain: "Foundation",
  },
  {
    year: "2021",
    icon: Tower,
    title: "NETRA Planning Platform — Live",
    desc: "NETRA (Network Planning & Deployment Automation) deployed at national scale. Replaced Excel-based planning with role-aware, validation-driven workflows.",
    domain: "MW / RAN",
  },
  {
    year: "2022",
    icon: Signal,
    title: "IP & VLAN Automation Module",
    desc: "Expanded into full IP provisioning lifecycle — dual-stack IPv4/IPv6 allocation, ATOM tunnel automation, and Cygnet Tx integration for POP detection.",
    domain: "IP / Core",
  },
  {
    year: "2023",
    icon: Search,
    title: "NETiQ — Network Intelligence Platform",
    desc: "NETiQ launched: a multi-domain configuration audit engine spanning RAN, MW, UBR, Wireline, Router, and Core. First platform to stitch cross-domain topology from raw NMS dumps.",
    domain: "All Domains",
  },
  {
    year: "2024",
    icon: Cpu,
    title: "AI & ML Integration — Labs",
    desc: "Avendum Labs initiated. ML drift-prediction, GenAI CLI translator prototypes, and predictive OSS configuration assurance research programmes begin.",
    domain: "AI / OSS",
  },
  {
    year: "2025",
    icon: Globe,
    title: "North America Expansion",
    desc: "Toronto sales office opened. International client pipeline established across EMEA and North America for NETiQ and NETRA platform licensing.",
    domain: "Global",
  },
];

const philosophy = [
  {
    icon: Target,
    label: "Domain Focus",
    title: "Domain-built, not adapted",
    body: "Every workflow, validation rule, and dashboard reflects how network planning and NMS auditing actually work — built with the teams who do it, not from a generic enterprise template. We speak the language of CM dumps, PCI allocations, and NMS parameter matrices.",
  },
  {
    icon: TrendingUp,
    label: "Pragmatism",
    title: "Pragmatic over theoretical",
    body: "We look realistically at business challenges and define fit-for-purpose solutions. We build what solves the actual problem, and expand from proven value rather than overselling a platform vision. No feature bloat. No shelf-ware.",
  },
  {
    icon: ShieldCheck,
    label: "Trust",
    title: "Deliver on every commitment",
    body: "If it's in the support program, it's in the program. If we say go-live is a date, that's the date. Our clients return because we keep our word — no surprises at handover, no scope creep after contract sign.",
  },
  {
    icon: Users,
    label: "User Centric",
    title: "Customer team at the centre",
    body: "Our vision is to put customer teams at the epicentre of enterprise software — enabling and easing the work for the people who actually use these systems. Every UI decision is reviewed by network engineers, not just designers.",
  },
];

const team = [
  {
    name: "Ankit Bhardwaj",
    role: "Co-Founder & Product Lead",
    bio: "Architect of our planning platforms. Deep expertise in network planning, configuration management, and large-scale deployment automation across RAN and Microwave domains.",
    domains: ["MW Planning", "RAN", "IP Provisioning"],
  },
  {
    name: "Pradeep Kumar",
    role: "Co-Founder & Technical Lead",
    bio: "Lead architect of NETiQ. Network domain expert with hands-on experience across multi-vendor NMS environments, configuration audit, and cross-domain stitching.",
    domains: ["NMS Audit", "RAN/Core", "OSS"],
  },
  {
    name: "Ankit Singhal",
    role: "Product Manager",
    bio: "Drives planning product strategy. Expert in rollout coordination, provisioning workflows, and network lifecycle management — from design to decommission.",
    domains: ["NETRA", "Lifecycle Mgmt", "IP"],
  },
];



const techStack = [
  { layer: "Ingestion Layer", items: ["XML / RAML / CSV Parser", "Multi-Vendor Adapters", "NMS Export Connectors", "REST / SFTP Fetch"], color: "#7C3AED" },
  { layer: "Intelligence Core", items: ["Audit Rules Engine", "Graph Correlation DB", "ML Drift Predictor", "Topology Stitching"], color: "#2563EB" },
  { layer: "Integration Bus", items: ["OSS Northbound APIs", "BSS Order Feeds", "CMDB Sync", "NMS Bidirectional"], color: "#059669" },
  { layer: "Presentation", items: ["React SPA Dashboard", "Role-Based Access", "Report Generator", "API Gateway"], color: "#D97706" },
];

const standards = [
  { name: "3GPP TS 32.xxx", desc: "NMS Configuration Management Protocols" },
  { name: "TM Forum GB921", desc: "Business Process Framework (eTOM)" },
  { name: "ETSI ENM API", desc: "Ericsson Network Manager Integration" },
  { name: "ONAP (partial)", desc: "Open Network Automation Platform Adapters" },
  { name: "TR-069", desc: "CPE WAN Management Protocol (Wireline)" },
  { name: "YANG / NETCONF", desc: "Network Configuration Protocol Support" },
  { name: "FCAPS Model", desc: "Fault, Config, Accounting, Perf., Security" },
  { name: "MEF 3.0", desc: "Carrier Ethernet Standards (MW/Wireline)" },
];

const metrics = [
  { value: 50, suffix: "+", label: "Audit Rules per Domain", icon: ShieldCheck, color: "#7C3AED" },
  { value: 6, suffix: "", label: "Network Domains Covered", icon: Network, color: "#2563EB" },
  { value: 3, suffix: "", label: "Vendors Supported (RAN)", icon: CircuitBoard, color: "#059669" },
  { value: 99, suffix: "%", label: "Config Parse Accuracy", icon: BarChart3, color: "#D97706" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = Math.ceil(value / 40);
        const interval = setInterval(() => {
          start = Math.min(start + step, value);
          setCount(start);
          if (start >= value) clearInterval(interval);
        }, 30);
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <div ref={ref}>{count}{suffix}</div>;
}

function CompanyPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [activePhilo, setActivePhilo] = useState(0);

  // Auto-advance philosophy
  useEffect(() => {
    const id = setInterval(() => setActivePhilo(p => (p + 1) % philosophy.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 animate-fade-up">

      {/* ── HERO ── */}
      <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-14 items-center py-8">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/25 mb-5">
            <Hexagon className="h-3 w-3" />
            Telecom-Native Enterprise Software
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Built by telecom<br />practitioners,<br /><span className="text-gradient">for telecom teams.</span>
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base max-w-xl font-light">
            Avendum Technologies develops mission-critical enterprise platforms for the telecommunications industry — software built natively for network planning, provisioning, and NMS auditing across every domain layer.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/careers"><BrandButton>Join Our Team</BrandButton></Link>
            <Link to="/contact"><BrandButton variant="secondary">Get in Touch</BrandButton></Link>
          </div>
        </motion.div>

        {/* Metrics grid */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          {metrics.map((m, i) => {
            const Icon = m.icon;
            return (
              <motion.div key={i} whileHover={{ scale: 1.03, translateY: -4 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
                <GlassCard gradientBorder className="text-center p-5 flex flex-col items-center justify-center h-full hover:shadow-[0_0_25px_rgba(124,58,237,0.12)] transition-all">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl mb-3" style={{ backgroundColor: `${m.color}15`, color: m.color }}>
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="font-display text-2xl font-bold" style={{ color: m.color }}>
                    <AnimatedCounter value={m.value} suffix={m.suffix} />
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{m.label}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ── ABOUT THE COMPANY & OPERATIONS ── */}
      <section className="mt-28">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Deep Dive</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Who we are & <span className="text-gradient">what we do.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm max-w-2xl mx-auto leading-relaxed font-light">
            We are network engineering practitioners building software to solve the real complexity of modern, multi-vendor telecommunications systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 items-stretch">
          {/* Who We Are Card */}
          <GlassCard gradientBorder className="p-6 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] transition-all">
            <div>
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Who We Are</h3>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed font-light">
                Avendum is founded and staffed by telecom practitioners — engineers who spent decades designing radio networks, resolving BGP routing mismatches, and configuring microwave hops for India’s largest tier-1 operators. We saw first-hand the limits of using legacy spreadsheets and generic SaaS tools to manage national-scale networks. We translate real field expertise into enterprise-grade automation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/25 flex items-center gap-1.5 text-xs text-primary font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Practitioner-led engineering
            </div>
          </GlassCard>

          {/* What We Do Card */}
          <GlassCard gradientBorder className="p-6 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] transition-all">
            <div>
              <div className="h-10 w-10 rounded-xl bg-[#0F9F6E]/10 text-[#0F9F6E] flex items-center justify-center mb-5 border border-[#0F9F6E]/20">
                <Target className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">What We Do</h3>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed font-light">
                We develop purpose-built OSS integration software that acts as an independent network intelligence layer. Our flagship platforms — NETiQ and NETRA — normalize raw, multi-vendor NMS configuration dumps, run comprehensive validation checks, and automatically stitch complex topologies. We bridge the gap between logical design databases, live physical realities, and BSS order engines.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/25 flex items-center gap-1.5 text-xs text-[#0F9F6E] font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0F9F6E] animate-pulse" />
              Network intelligence & automation
            </div>
          </GlassCard>

          {/* How Everything is Handled Card */}
          <GlassCard gradientBorder className="p-6 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] transition-all">
            <div>
              <div className="h-10 w-10 rounded-xl bg-[#0891B2]/10 text-[#0891B2] flex items-center justify-center mb-5 border border-[#0891B2]/20">
                <Workflow className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">How Everything is Handled</h3>
              <p className="text-xs text-muted-foreground mt-3 leading-relaxed font-light">
                We manage the end-to-end integration lifecycle directly. Daily raw dumps are fetched securely via SFTP/REST interfaces. Out-of-box adapters normalize dialects across Ericsson, Nokia, and Huawei. We run nightly compliance check sweeps, generate delta reports, and automatically generate and push corrective CLI patches via secure SSH/NBI gateways, backed by active AMC operator support.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-border/25 flex items-center gap-1.5 text-xs text-[#0891B2] font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0891B2] animate-pulse" />
              Secure, managed operations loops
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ── OSS/BSS ARCHITECTURE ── */}
      <section className="mt-28 relative overflow-hidden rounded-3xl border border-border/30 bg-gradient-to-br from-surface/40 via-background to-surface/20 p-8 md:p-12">
        {/* BG decoration */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#7C3AED]/5 via-transparent to-[#2563EB]/5" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[#7C3AED]/8 blur-3xl" />

        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Platform Architecture</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            OSS/BSS integration <span className="text-gradient">from end to end</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-2xl">
            Avendum's layered architecture connects raw NMS exports to actionable business intelligence — spanning every layer from physical ingestion to executive reporting.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {techStack.map((layer, i) => (
              <motion.div
                key={layer.layer}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ translateY: -4, scale: 1.02 }}
              >
                <div className="relative h-full rounded-xl border p-5 flex flex-col gap-3 transition-all"
                  style={{ borderColor: `${layer.color}25`, backgroundColor: `${layer.color}06` }}>
                  {/* Layer indicator */}
                  <div className="flex items-center gap-2 pb-3 border-b" style={{ borderColor: `${layer.color}20` }}>
                    <div className="h-2 w-2 rounded-full" style={{ backgroundColor: layer.color }} />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider" style={{ color: layer.color }}>Layer {i + 1}</span>
                  </div>
                  <h4 className="font-display font-semibold text-sm text-foreground">{layer.layer}</h4>
                  <div className="space-y-1.5 mt-1">
                    {layer.items.map(item => (
                      <div key={item} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                        <span className="h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: layer.color }} />
                        {item}
                      </div>
                    ))}
                  </div>
                  {i < techStack.length - 1 && (
                    <div className="absolute -right-5 top-1/2 -translate-y-1/2 z-10 hidden lg:flex h-8 w-8 items-center justify-center rounded-full bg-background border border-border/50">
                      <ArrowRight className="h-3 w-3 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STANDARDS & COMPLIANCE ── */}
      <section className="mt-28">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Standards & Compliance</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              Built on <span className="text-gradient">telecom standards</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              Our platforms implement industry-standard interfaces and data models — ensuring compatibility with existing operator toolchains, OSS systems, and multi-vendor NMS environments without custom integration effort.
            </p>
            <div className="mt-8 space-y-3">
              {[
                { icon: Shield, title: "Air-Gapped Ready", desc: "Deployable in fully isolated operator private clouds — no data egress." },
                { icon: Lock, title: "Role-Based Access", desc: "Granular RBAC across planner, validator, auditor, and executive roles." },
                { icon: Database, title: "Audit Trail", desc: "Full immutable audit log for every configuration change and approval." },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex gap-3 items-start p-3.5 rounded-xl border border-border/30 bg-surface/20">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0 mt-0.5">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid grid-cols-2 gap-3"
          >
            {standards.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="h-full p-4 rounded-xl border border-border/30 bg-surface/20 hover:border-primary/30 hover:bg-primary/4 transition-all">
                  <div className="text-[10px] font-mono font-bold text-primary mb-1.5">{s.name}</div>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STORY & TIMELINE ── */}
      <section className="mt-28">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Our Journey</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            From idea to <span className="text-gradient">national-scale production</span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border/50 to-transparent hidden lg:block" />

          <div className="space-y-4">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isActive = activeMilestone === i;
              const isLeft = i % 2 === 0;
              return (
                <motion.button
                  key={m.title}
                  onClick={() => setActiveMilestone(i)}
                  className="w-full"
                  whileHover={{ scale: 1.005 }}
                >
                  <div className={`relative flex gap-0 lg:gap-8 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}>
                    {/* Card */}
                    <div className={`flex-1 p-5 rounded-2xl border text-left transition-all duration-300 ${
                      isActive
                        ? "border-primary/40 bg-primary/8 shadow-lg shadow-primary/10"
                        : "border-border/30 bg-surface/20 hover:bg-foreground/5"
                    }`}>
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border ${isActive ? "border-primary/40 text-primary bg-primary/10" : "border-border/40 text-muted-foreground"}`}>
                          {m.year}
                        </span>
                        <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full border ${isActive ? "border-accent/40 text-accent bg-accent/10" : "border-border/30 text-muted-foreground"}`}>
                          {m.domain}
                        </span>
                      </div>
                      <h3 className={`font-display font-bold text-base ${isActive ? "text-primary" : "text-foreground"}`}>{m.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{m.desc}</p>
                    </div>

                    {/* Center dot — only on lg */}
                    <div className={`relative z-10 hidden lg:flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 transition-all ${
                      isActive ? "border-primary bg-primary text-white shadow-[0_0_20px_rgba(var(--primary),0.5)]" : "border-border/60 bg-background text-muted-foreground"
                    }`}>
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* Empty spacer for alternating layout */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="mt-28">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-14 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Our Philosophy</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              Principles that <span className="text-gradient">guide every decision</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
              These aren't poster values. They're the actual operating principles that determine how we design features, run support programs, and engage with customers.
            </p>

            <div className="mt-8 space-y-2">
              {philosophy.map((p, i) => {
                const Icon = p.icon;
                const isActive = activePhilo === i;
                return (
                  <button
                    key={p.label}
                    onClick={() => setActivePhilo(i)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                      isActive ? "border-primary/40 bg-primary/8" : "border-border/30 hover:bg-foreground/5"
                    }`}
                  >
                    <div className={`h-8 w-8 rounded-lg flex items-center justify-center shrink-0 ${isActive ? "bg-primary text-white" : "bg-surface text-muted-foreground"}`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-muted-foreground">{p.label}</p>
                      <p className={`text-sm font-semibold ${isActive ? "text-primary" : "text-foreground"}`}>{p.title}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activePhilo}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GlassCard gradientBorder hoverGlow={false} className="p-8 min-h-[280px] flex flex-col justify-center">
                {(() => { const Icon = philosophy[activePhilo].icon; return (
                  <div className="h-14 w-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                ); })()}
                <p className="text-[10px] font-mono uppercase tracking-widest text-primary">{philosophy[activePhilo].label}</p>
                <h3 className="mt-2 font-display text-2xl font-bold">{philosophy[activePhilo].title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{philosophy[activePhilo].body}</p>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── LEADERSHIP ── */}
      <section className="mt-28">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Leadership</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          The team behind <span className="text-gradient">the platforms</span>.
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -4 }}
            >
              <GlassCard gradientBorder className="flex flex-col h-full hover:shadow-[0_0_25px_rgba(124,58,237,0.1)] transition-all">
                <div className="relative mb-5 aspect-square rounded-2xl bg-gradient-to-br from-primary/30 via-accent/15 to-transparent flex items-center justify-center">
                  <span className="font-display text-5xl font-semibold text-foreground/85">
                    {p.name.split(" ").map((s) => s[0]).join("")}
                  </span>
                  <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
                </div>
                <h3 className="font-display text-lg font-bold">{p.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-primary mt-1">{p.role}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.bio}</p>
                <div className="mt-4 pt-3 border-t border-border/30 flex flex-wrap gap-1">
                  {p.domains.map(d => (
                    <span key={d} className="text-[9px] font-mono px-1.5 py-0.5 rounded border border-border/50 text-muted-foreground">{d}</span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}

          {/* Join Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02, translateY: -4 }}
          >
            <GlassCard gradientBorder className="flex flex-col h-full hover:shadow-[0_0_25px_rgba(124,58,237,0.1)] transition-all">
              <div className="relative mb-5 aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent flex items-center justify-center">
                <span className="font-display text-5xl font-semibold text-foreground/50">+</span>
              </div>
              <h3 className="font-display text-lg font-bold">Join Our Team</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-primary mt-1">Open Positions</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                We're building our team of domain experts, engineers, and product thinkers. See open roles and apply.
              </p>
              <div className="mt-4 pt-3 border-t border-border/40">
                <Link to="/careers" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all">
                  View Roles <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ── OFFICES ── */}
      <section className="mt-28">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Locations</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Where we <span className="text-gradient">work</span>.
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard gradientBorder className="flex flex-col h-full p-0 overflow-hidden hover:shadow-[0_0_25px_rgba(124,58,237,0.06)] transition-all">
              <div className="h-[220px] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=Unitech+Cyber+Park+Tower+B+Sector+39+Gurgaon&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-none"
                  loading="lazy"
                  title="Avendum India HQ"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇮🇳</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Headquarters</span>
                </div>
                <h3 className="font-display text-lg font-bold mt-2">Gurgaon, India</h3>
                <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Unit No. 205, Tower B, Unitech Cyber Park, Sector 39, Gurgaon – 122 002, Haryana</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <a href="tel:+919899810118" className="hover:text-primary transition-colors">+91 98998 10118</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <a href="mailto:info@avendumtech.com" className="hover:text-primary transition-colors">info@avendumtech.com</a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard gradientBorder className="flex flex-col h-full p-0 overflow-hidden hover:shadow-[0_0_25px_rgba(124,58,237,0.06)] transition-all">
              <div className="h-[220px] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=Toronto+Ontario+Canada&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-none"
                  loading="lazy"
                  title="Avendum Canada Office"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇨🇦</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Sales Office — North America</span>
                </div>
                <h3 className="font-display text-lg font-bold mt-2">Toronto, Canada</h3>
                <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Toronto, Ontario, Canada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <a href="mailto:info@avendumtech.com" className="hover:text-primary transition-colors">info@avendumtech.com</a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="mt-28">
        <div className="relative rounded-3xl border border-border/30 overflow-hidden p-10 md:p-16 text-center">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Get Started</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              Ready to modernise your <span className="text-gradient">network operations?</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm max-w-xl mx-auto leading-relaxed">
              Talk to our team about how NETiQ and NETRA can transform how you plan, provision, and audit your network.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact"><BrandButton>Request a Demo <ArrowRight className="h-4 w-4" /></BrandButton></Link>
              <Link to="/products/netiq"><BrandButton variant="secondary">Explore NETiQ</BrandButton></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
