import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { Counter } from "@/components/Counter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Signal, Zap, CheckCircle2, GitMerge, Layers, Database, 
  Activity, ArrowRight, Server, Link2, Sliders, Check
} from "lucide-react";

export const Route = createFileRoute("/products/nexus")({
  head: () => ({
    meta: [
      { title: "NEXUS — 5G IP Provisioning & Network Rollout Platform | Avendum" },
      {
        name: "description",
        content:
          "NEXUS is a centralised telecom planning and deployment management platform that tracks, validates and manages the complete lifecycle of 4G and 5G network rollout.",
      },
    ],
  }),
  component: NexusPage,
});

const siteStatus = [
  { label: "Total Scope", val: 48290, color: "var(--foreground)" },
  { label: "On-Air", val: 31840, color: "#0F9F6E" },
  { label: "J2 Ready", val: 9220, color: "#1A6FD4" },
  { label: "J2 WIP", val: 4180, color: "#F59E0B" },
  { label: "Plan Released", val: 3050, color: "#7C3AED" },
];

const ip6Status = [
  { label: "Completed", val: 78, color: "#0F9F6E" },
  { label: "Pending", val: 14, color: "#F59E0B" },
  { label: "NOC Constraint", val: 5, color: "#EF4444" },
  { label: "Not Found", val: 3, color: "var(--muted-foreground)" },
];

const techDist = [
  { label: "5G Sites", val: 18430, percent: 72, color: "#1A6FD4" },
  { label: "4G Sites", val: 22810, percent: 89, color: "#7C3AED" },
  { label: "Anchor Only", val: 7050, percent: 28, color: "#0F9F6E" },
];

const capabilities = [
  {
    icon: Database,
    title: "IPv6 Address Assignment & Tracking",
    desc: "End-to-end tracking of IPv6 address allocation and provisioning across network nodes. Validates IP format and subnet compliance, tracks provisioning status (Pending / Completed / NOC Constraint / Not Found), and provides visibility into IPv4 and IPv6 dual-stack deployment scenarios circle-wise and Pan India.",
    tags: ["IPv4 Tracking", "IPv6 Provisioning", "Dual-Stack"]
  },
  {
    icon: Zap,
    title: "Zero-Touch Fiber POP RA Automation",
    desc: "Monitors new RFS POPs via Cygnet Tx Planning through UIG integration. Notifies the MW planner automatically, auto-fills IP Pool and VLAN from IAMS applying EPT/NPT domain VLAN logic, and raises the RA request to ATOM with minimal or zero user input. Provisioned RA config is synced back and visible to the planner in NEXUS.",
    tags: ["Cygnet → UIG → NEXUS", "IAMS Auto-fill", "ATOM RA Raise"]
  },
  {
    icon: CheckCircle2,
    title: "Pre-Requisite Validation Engine",
    desc: "Before any site is marked ready for deployment, NEXUS validates J2 readiness status, transmission feasibility (MW / Fiber / FTTH / Colo), POP connectivity, and availability of required network elements. Only technically feasible and fully prepared sites move forward in the deployment lifecycle — eliminating false starts downstream.",
    tags: ["J2 Readiness", "Transmission Check", "POP Validation"]
  },
  {
    icon: Layers,
    title: "B2B & Telemedia Order Management",
    desc: "Full order lifecycle management for BALW and BALTM customer codes through POINT XML queue integration. Supports New, Change, Cancel, Disconnect, Bandwidth Change (upgrade and downgrade), and Location Change order types across Mobility, Telemedia, and Internal media. Unique Circuit ID created per order; duplicate detection in same media type enforced automatically.",
    tags: ["BALW / BALTM", "POINT Queue", "Circuit ID"]
  }
];

const integrations = [
  { name: "IAMS", desc: "IP Address Management System — IP Pool fetch, VLAN assignment, technology-specific IP provisioning, Node Name sync, and VLAN Group creation for RA requests." },
  { name: "ATOM", desc: "Backend RA request and provisioning — source of truth for RA config data, VLAN ID mapping, and status sync back to NEXUS." },
  { name: "POINT", desc: "Network configuration provisioning system — Change / Cancel / New RA order processing via XML message queues; status callbacks to NEXUS." },
  { name: "UIG", desc: "Fiber POP inventory information — new RFS POP details pushed from UIG trigger the zero-touch NEXUS automation workflow." },
  { name: "NEP", desc: "Network Configuration Info — fetches and validates existing site details and Node Name information for IP allocation to existing RAN sites." },
  { name: "Cygnet Tx Planning", desc: "Transmission planning tool — new RFS POP detail push from Cygnet initiates the zero-touch Fiber POP RA workflow in NEXUS." }
];

const flowSteps = [
  { step: "01", title: "POP Goes RFS", desc: "Cygnet Tx Planning marks new Fiber POP as Ready For Service and pushes details to NEXUS via the UIG integration." },
  { step: "02", title: "NEXUS Auto-Detects", desc: "NEXUS detects the new RFS POP, notifies the MW planner, and surfaces RA input options with fields pre-filled from system data." },
  { step: "03", title: "IP & VLAN Auto-Fill", desc: "IP Pool and VLAN fetched from IAMS automatically. EPT / NPT domain VLAN logic applied to determine the correct VLAN group." },
  { step: "04", title: "RA Raised to ATOM", desc: "RA request auto-raised to ATOM with all required parameters. Status synced back to NEXUS in real time via ATOM/POINT callback." },
  { step: "05", title: "Config Visible", desc: "Provisioned RA configuration surfaced to the planner in NEXUS. Network ready. Zero manual input at any step." }
];

function NexusPage() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16">
      {/* Hero */}
      <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold text-[#0F9F6E] bg-[#0F9F6E]/10 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            Active in Production — 5G Rollout
          </span>
          <p className="text-xs uppercase tracking-[0.3em] text-[#0F9F6E]">NEXUS Product</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            5G IP Provisioning & <br /><span className="text-gradient">Network Rollout Orchestration</span>
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base max-w-2xl">
            NEXUS is a centralised telecom planning and deployment management platform that tracks, validates and manages the complete lifecycle of 4G and 5G network rollout — integrating with IAMS, ATOM, POINT, NEP, UIG and Cygnet Tx Planning to eliminate manual Excel operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/demo" search={{ product: "nexus" }}><BrandButton>Request NEXUS Demo <ArrowRight className="h-4 w-4" /></BrandButton></Link>
            <a href="#capabilities"><BrandButton variant="secondary">See Capabilities</BrandButton></a>
          </div>
        </motion.div>

        {/* Stats Column */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div whileHover={{ scale: 1.02, translateY: -4 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="hover:shadow-[0_0_20px_rgba(15,159,110,0.15)] transition-all">
              <div className="font-display text-2xl font-bold text-[#0F9F6E]">Zero-Touch</div>
              <p className="text-xs text-muted-foreground mt-1">Fiber POP RA provisioning — Cygnet trigger to ATOM provisioned with zero planner input</p>
            </GlassCard>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, translateY: -4 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="hover:shadow-[0_0_20px_rgba(15,159,110,0.15)] transition-all">
              <div className="font-display text-2xl font-bold text-[#0F9F6E]">6 Integrations</div>
              <p className="text-xs text-muted-foreground mt-1">IAMS · ATOM · POINT · UIG · NEP · Cygnet Tx Planning native system connectivity</p>
            </GlassCard>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, translateY: -4 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="hover:shadow-[0_0_20px_rgba(15,159,110,0.15)] transition-all">
              <div className="font-display text-2xl font-bold text-[#0F9F6E]">IPv4 + IPv6</div>
              <p className="text-xs text-muted-foreground mt-1">Dual-stack provisioning tracking for 4G, 5G and Anchor-only sites across all circles</p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </section>

      {/* 5G Stencil Dashboard Preview */}
      <section className="mt-24" id="capabilities">
        <p className="text-xs uppercase tracking-[0.3em] text-[#0F9F6E]">5G Stencil Dashboard</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Real-time 5G <span className="text-gradient">rollout visibility</span>.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
          NEXUS dashboard provides a consolidated, real-time view of 5G nominal site status, IP provisioning progress, and technology distribution — circle-wise and Pan India — updated continuously.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {/* Site Status */}
          <motion.div whileHover={{ translateY: -4 }} transition={{ duration: 0.3 }}>
            <GlassCard gradientBorder p-6 className="hover:shadow-[0_0_20px_rgba(15,159,110,0.1)] transition-all h-full">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#0F9F6E] mb-4">Site Status Tracking</h3>
              <div className="space-y-3">
                {siteStatus.map((item) => (
                  <div key={item.label} className="flex justify-between items-center text-xs pb-2 border-b border-border/20 last:border-b-0 last:pb-0">
                    <span className="text-muted-foreground">{item.label}</span>
                    <span className="font-semibold font-mono" style={{ color: item.color }}><Counter to={item.val} /></span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* IPv6 Status */}
          <motion.div whileHover={{ translateY: -4 }} transition={{ duration: 0.3 }}>
            <GlassCard gradientBorder p-6 className="hover:shadow-[0_0_20px_rgba(15,159,110,0.1)] transition-all h-full">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#0F9F6E] mb-4">IPv6 Provisioning Status</h3>
              <div className="space-y-4">
                {ip6Status.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>{item.label}</span>
                      <span className="font-semibold text-foreground">{item.val}%</span>
                    </div>
                    <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full transition-all duration-500" 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.val}%` }}
                        transition={{ duration: 0.8 }}
                        style={{ backgroundColor: item.color }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Tech Distribution */}
          <motion.div whileHover={{ translateY: -4 }} transition={{ duration: 0.3 }}>
            <GlassCard gradientBorder p-6 className="hover:shadow-[0_0_20px_rgba(15,159,110,0.1)] transition-all h-full">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-[#0F9F6E] mb-4">Technology Distribution</h3>
              <div className="space-y-4">
                {techDist.map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-muted-foreground mb-1">
                      <span>{item.label}</span>
                      <span className="font-semibold text-foreground"><Counter to={item.val} /></span>
                    </div>
                    <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full rounded-full transition-all duration-500" 
                        initial={{ width: 0 }}
                        animate={{ width: `${item.percent}%` }}
                        transition={{ duration: 0.8 }}
                        style={{ backgroundColor: item.color }} 
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#0F9F6E]">Core Capabilities</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          End-to-end IP lifecycle <span className="text-gradient">management</span>.
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {capabilities.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.01, translateY: -2 }}
              >
                <GlassCard gradientBorder className="flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(15,159,110,0.08)] transition-all">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0F9F6E]/10 text-[#0F9F6E] mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold">{c.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2 pt-4 border-t border-border/40">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-foreground/5 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* System Integrations */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#0F9F6E]">System Integrations</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Connected to your <span className="text-gradient">entire network stack</span>.
        </h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {integrations.map((i, idx) => (
            <motion.div
              key={i.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 3) * 0.05 }}
              whileHover={{ scale: 1.02, translateY: -4 }}
            >
              <GlassCard gradientBorder className="p-5 flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(15,159,110,0.08)] transition-all">
                <div>
                  <h3 className="text-base font-bold font-display text-[#0F9F6E]">{i.name}</h3>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{i.desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive Zero Touch Flow Chart */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#0F9F6E]">Zero-Touch Flow</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          From POP goes RFS to <span className="text-gradient">RA provisioned — automatically</span>.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
          Click on any step below to explore how the automated cygnet-to-atom provisioning chain handles data flows without manual operations.
        </p>

        {/* Step Toggles */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-5 gap-2 bg-foreground/5 p-1 rounded-2xl border border-border/40">
          {flowSteps.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-xl text-left transition-all cursor-pointer border border-transparent ${
                activeStep === idx ? "bg-[#0F9F6E] text-white shadow-lg" : "hover:bg-foreground/5 text-foreground/80"
              }`}
            >
              <div className="font-mono text-xs font-bold">Step {step.step}</div>
              <div className="text-xs font-semibold mt-1 truncate">{step.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Step Detail Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <GlassCard className="mt-4 p-6 hover:shadow-[0_0_20px_rgba(15,159,110,0.08)] transition-all" gradientBorder hoverGlow={false}>
              <p className="text-xs uppercase tracking-[0.25em] text-[#0F9F6E]">Flow Step {flowSteps[activeStep].step} Details</p>
              <h3 className="mt-2 font-display text-xl font-bold">{flowSteps[activeStep].title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{flowSteps[activeStep].desc}</p>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard hoverGlow={false} className="relative overflow-hidden p-10 text-center hover:shadow-[0_0_30px_rgba(15,159,110,0.12)] transition-all">
            <div className="relative">
              <h2 className="font-display text-3xl font-bold">Automate your 5G rollout.</h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
                Talk to our team about deploying NEXUS for your network provisioning — we&apos;ll assess your current stack and map out the integration approach.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Link to="/demo" search={{ product: "nexus" }}><BrandButton>Request NEXUS Demo</BrandButton></Link>
                <Link to="/" hash="amc"><BrandButton variant="secondary">Ask About AMC</BrandButton></Link>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
}
