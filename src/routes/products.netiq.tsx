import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useEffect } from "react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { Counter } from "@/components/Counter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, ShieldAlert, CheckCircle2, ArrowRight, 
  FileText, ShieldCheck, Link2, Globe, MapPin, Database,
  Cpu, AlertTriangle, Play, RefreshCw, Layers
} from "lucide-react";

export const Route = createFileRoute("/products/netiq")({
  head: () => ({
    meta: [
      { title: "NETIQ — RAN & MW Audit Intelligence Platform | Avendum" },
      {
        name: "description",
        content:
          "NETIQ is an intelligent audit and automation platform for the RAN and MW domains. It parses daily CM dumps Ericsson/Nokia to find data quality issues.",
      },
    ],
  }),
  component: NetiqPage,
});

const problems = [
  {
    title: "Legacy / Ghost Elements",
    desc: "Decommissioned RAN nodes remain active in the NMS, inflating resource counts and introducing errors into audit processes. NETIQ identifies inactive elements through their absence in CM dumps — no manual cross-check required."
  },
  {
    title: "Incorrect Site / Node Linkages",
    desc: "Incorrect parent/child mapping and erroneous cell links break network visibility and fault isolation. NETIQ's stitching engine resolves linkage errors using CM dump data as the authoritative source."
  },
  {
    title: "Conflicting Data Sources",
    desc: "Multiple Excel sheets and vendor-specific files introduce inconsistencies. NETIQ consolidates all CM dump data into a single validated inventory — one source of truth across Ericsson, Nokia, Huawei and Samsung."
  },
  {
    title: "Lack of Deep Audit",
    desc: "NMS tools are built for operations — not cross-validation. NETIQ provides a dedicated RAN audit engine with stitching logic and 50+ validation rules that the NMS cannot perform on its own data."
  }
];

const rules = [
  { id: "INV-01", name: "NMS Discovery Status", scope: "RAN & MW" },
  { id: "INV-02", name: "NMS Element Counts Validation", scope: "RAN & MW" },
  { id: "INV-03", name: "Inventory Audit — Node Type Classification", scope: "RAN & MW" },
  { id: "INV-04", name: "Parameter Consistency — PCI, TAC, EARFCN, Cell ID, Node ID", scope: "RAN" },
  { id: "INV-05", name: "MW Link-Level Parameters & Anomaly Detection", scope: "MW" },
  { id: "AUD-01", name: "Duplicate Node / Cell Data Detection", scope: "RAN & MW" },
  { id: "AUD-02", name: "Missing Class / Attribute Report", scope: "RAN" },
  { id: "AUD-03", name: "Nomenclature Validation — Node, Cell, Site naming conventions", scope: "RAN & MW" },
  { id: "AUD-04", name: "Hardware & Cabinet Information Validation", scope: "RAN & MW" },
  { id: "AUD-05", name: "GPS Coordinate Validation Report", scope: "RAN" },
  { id: "AUD-06", name: "Cell-to-RU Mapping & SRAN / 2G BTS Compliance", scope: "RAN" },
  { id: "AUD-07", name: "Planned vs. Configured MW / UBR Link Report", scope: "MW" }
];

const vendors = [
  { name: "Ericsson", desc: "RAN & MW CM dump parsing — node, cell, hardware, IP and link data for 2G / 4G / 5G." },
  { name: "Nokia", desc: "Full CM dump parsing with Nokia-specific parameter mapping into unified audit schema." },
  { name: "Huawei", desc: "Huawei RAN CM data parsing — all parameters mapped to the unified cross-vendor inventory." },
  { name: "Samsung", desc: "Samsung CM dump support — four vendors, one unified audit and report view." }
];

const reports = [
  { title: "RAN Node Report", desc: "Node ID, Site ID, Vendor, Hardware, IP, GPS, Discovery Status, Anomaly Flags." },
  { title: "RAN Cell Report (4G / 5G / 2G)", desc: "Cell ID, PCI, TAC, EARFCN, Band, Power, Cell-to-RU mapping, Compliance flags." },
  { title: "RAN Hardware Report", desc: "Cabinet type, BBU / RRU mapping, Hardware version, Installation date, Anomalies." },
  { title: "MW Site Report", desc: "Site name, Location, GPS, Associated nodes, Link count, Validation status." },
  { title: "MW / UBR Link Report", desc: "Link ID, Near / Far-end nodes, Frequency, Capacity, Parameters, Planned vs. Configured delta." },
  { title: "IP / VLAN Report", desc: "IP address, VLAN ID, Node assignment, Duplicate detection, Allocation status." }
];

const visualizerSteps = [
  {
    title: "1. Raw Ingestion",
    subtitle: "Vendor Parsing",
    desc: "NETIQ ingests daily configuration management (CM) dumps in multi-vendor dialects (Ericsson XML, Nokia RAML, Huawei GExport, Samsung CSV) directly, bypassing standard NMS assumptions.",
    icon: Database,
    color: "#a855f7", // purple
  },
  {
    title: "2. Linkage Stitching",
    subtitle: "Topology Resolution",
    desc: "The stitching engine automatically correlates parent BSC/RNC controllers to child BTS/NodeB cell sites, reconstructing the physical network topology from raw parameters.",
    icon: Link2,
    color: "#3b82f6", // blue
  },
  {
    title: "3. Rules Auditing",
    subtitle: "Anomalies Scan",
    desc: "Runs 50+ check validations to verify cell identifiers, neighbor parameters, frequency offsets, and coordinates, flagging rule failures with exact system IDs.",
    icon: AlertTriangle,
    color: "#f59e0b", // amber
  },
  {
    title: "4. Unified Output",
    subtitle: "Authoritative Source",
    desc: "Aggregates the audited multi-vendor elements into a clean, normalized network ledger — serving as the single source of truth for planning and automation.",
    icon: ShieldCheck,
    color: "#10b981", // green
  }
];

const stepLogs: Record<number, string[]> = {
  0: [
    "[SYSTEM] Initiating daily ingestion cycle...",
    "[INGEST] Ericsson dump parsed: Bulk CM XML schema verified.",
    "[INGEST] Nokia dump parsed: RAML format v2.0 mapped.",
    "[PARSER] Translating node schemas to canonical model...",
    "[STATUS] Ingestion complete: 142,504 records parsed."
  ],
  1: [
    "[STITCH] Scanning parent-child linkage descriptors...",
    "[TOPOLOGY] Bridging RNC controller with NodeB sites...",
    "[TOPOLOGY] Resolving UBR link parameters from CM...",
    "[STATUS] Link resolved: GUR-BTS-104 parent-link resolved."
  ],
  2: [
    "[AUDIT] Running validation suite on unified cache...",
    "[WARNING] INV-04: PCI conflict cell 412 & neighbor 415.",
    "[WARNING] AUD-03: Nomenclature mismatch on node GUR-5G-10.",
    "[STATUS] Scan complete: 54 anomalies flagged for action."
  ],
  3: [
    "[LEDGER] Compiling unified network inventory ledger...",
    "[EXPORTER] Generating normalized CSV & JSON matrices...",
    "[SYNC] Pushing audit updates to planning database...",
    "[SUCCESS] Single source of truth is active."
  ]
};

function NetiqPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterScope, setFilterScope] = useState<"All" | "RAN" | "MW">("All");

  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Auto play visualizer steps
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const filteredRules = useMemo(() => {
    return rules.filter((r) => {
      const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) || r.id.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesScope = 
        filterScope === "All" ||
        (filterScope === "RAN" && r.scope.includes("RAN")) ||
        (filterScope === "MW" && r.scope.includes("MW"));
      return matchesSearch && matchesScope;
    });
  }, [searchQuery, filterScope]);

  const ActiveIcon = visualizerSteps[activeStep].icon;

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 animate-fade-up">
      {/* Hero */}
      <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold text-[#7C3AED] bg-[#7C3AED]/10 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            POC Live — RAN & MW Domain
          </span>
          <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">NETIQ Product</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            RAN & MW Audit<br /><span className="text-gradient">Intelligence Platform</span>
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base max-w-2xl font-light">
            NETIQ is an intelligent audit and automation platform for the RAN and MW domains. It parses daily CM dumps from Ericsson, Nokia, Huawei and Samsung — running 50+ audit rules to find data quality issues your NMS cannot detect on its own.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/demo" search={{ product: "netiq" }}><BrandButton>Request NETIQ POC <ArrowRight className="h-4 w-4" /></BrandButton></Link>
            <a href="#stitching-visualizer"><BrandButton variant="secondary">Stitching Visualizer</BrandButton></a>
          </div>
        </div>

        {/* Stats Column */}
        <div className="space-y-4">
          <GlassCard gradientBorder>
            <div className="font-display text-2xl font-bold text-[#7C3AED]">4 Vendors</div>
            <p className="text-xs text-muted-foreground mt-1">Ericsson, Nokia, Huawei, Samsung CM dump parsing — unified cross-vendor audit view</p>
          </GlassCard>
          <GlassCard gradientBorder>
            <div className="font-display text-2xl font-bold text-[#7C3AED]">50+ Rules</div>
            <p className="text-xs text-muted-foreground mt-1">Audit rules across node, cell, hardware, GPS, nomenclature, IP data and MW links</p>
          </GlassCard>
          <GlassCard gradientBorder>
            <div className="font-display text-2xl font-bold text-[#7C3AED]">AI / ML</div>
            <p className="text-xs text-muted-foreground mt-1">ML inference layer — proactive anomaly detection surfacing PCI conflicts and SRAN compliance</p>
          </GlassCard>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">The Problem NETIQ Solves</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Your NMS is confident. <span className="text-gradient">It shouldn&apos;t be</span>.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
          NMS environments consume OSS data without verification loops — creating false confidence in data that drives capacity decisions, automation workflows, and field operations.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {problems.map((p) => (
            <GlassCard key={p.title} gradientBorder className="p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] mb-4">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Stitching Engine Interactive Visualizer */}
      <section id="stitching-visualizer" className="mt-24 scroll-mt-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">Core Technology</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              The Stitching Engine <span className="text-gradient">Visualizer</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              Interact with the visualizer steps below to see how NETIQ aggregates daily CM dumps, matches topology links, detects cell conflicts, and builds the unified authoritative ledger.
            </p>
          </div>
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-border/60 hover:border-primary hover:text-primary transition-all self-start md:self-auto cursor-pointer"
          >
            {isPlaying ? (
              <>
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Pause Simulation
              </>
            ) : (
              <>
                <Play className="h-3 w-3" />
                Auto Play
              </>
            )}
          </button>
        </div>

        {/* Visualizer Layout */}
        <div className="mt-10 grid lg:grid-cols-[1fr_1.3fr] gap-8 items-stretch">
          {/* Steps Left Panel */}
          <div className="space-y-4">
            {visualizerSteps.map((step, idx) => {
              const Icon = step.icon;
              const active = activeStep === idx;
              return (
                <button
                  key={step.title}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    active 
                      ? "border-primary bg-primary/5 shadow-[0_0_24px_var(--glow)]" 
                      : "border-border/40 hover:border-primary/20 bg-[var(--surface)]/10"
                  }`}
                >
                  <span 
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      active ? "text-white" : "text-muted-foreground"
                    }`}
                    style={{ backgroundColor: active ? step.color : "transparent" }}
                  >
                    <Icon className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: active ? step.color : "var(--color-muted-foreground)" }}>
                      {step.subtitle}
                    </span>
                    <h3 className="font-display font-bold text-base mt-1">{step.title}</h3>
                    <AnimatePresence initial={false}>
                      {active && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="text-xs text-muted-foreground mt-2 leading-relaxed"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Simulation Display */}
          <div className="flex flex-col gap-4">
            <GlassCard hoverGlow={false} className="relative flex-1 min-h-[300px] flex items-center justify-center overflow-hidden p-8">
              {/* Outer floating grid lines */}
              <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

              {/* Animated Canvas Areas based on Active Step */}
              <AnimatePresence mode="wait">
                {activeStep === 0 && (
                  <motion.div 
                    key="ingest"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full flex items-center justify-center"
                  >
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                      {["Ericsson XML", "Nokia RAML", "Huawei GExport", "Samsung CSV"].map((vendorName, i) => (
                        <motion.div
                          key={vendorName}
                          initial={{ x: -20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="rounded-lg bg-primary/10 border border-border px-3 py-1.5 text-[10px] font-mono flex items-center gap-2"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                          {vendorName}
                        </motion.div>
                      ))}
                    </div>

                    <div className="relative">
                      {/* Central collector */}
                      <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[color-mix(in_oklab,var(--primary)_50%,var(--accent))] shadow-[0_8px_30px_-8px_var(--glow)] text-white">
                        <Database className="h-10 w-10 animate-pulse" />
                      </div>
                      
                      {/* Floating particles */}
                      {[0, 1, 2, 3].map((particleId) => (
                        <motion.div
                          key={particleId}
                          animate={{ 
                            x: [ -80, 0 ], 
                            y: [ particleId * 20 - 30, 0 ], 
                            opacity: [ 0, 1, 0 ] 
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2, 
                            delay: particleId * 0.5, 
                            ease: "easeInOut" 
                          }}
                          className="absolute h-2 w-2 rounded-full bg-[#7C3AED] filter blur-[1px]"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeStep === 1 && (
                  <motion.div 
                    key="stitch"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full flex flex-col items-center justify-center"
                  >
                    {/* Node network visualization */}
                    <div className="flex gap-16 items-center">
                      <div className="flex flex-col items-center">
                        <div className="h-12 w-12 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono text-[10px] font-bold shadow-[0_0_12px_rgba(59,130,246,0.2)]">
                          BSC
                        </div>
                        <span className="text-[10px] font-mono mt-1 text-muted-foreground">Controller</span>
                      </div>

                      <div className="relative flex items-center justify-center">
                        <motion.div 
                          animate={{ width: [0, 64], opacity: [0.3, 1, 0.3] }}
                          transition={{ repeat: Infinity, duration: 1.5 }}
                          className="h-0.5 bg-gradient-to-r from-blue-500 to-green-500"
                        />
                        <span className="absolute -top-3.5 text-[8px] font-mono text-green-400 bg-green-500/10 px-1 rounded">Stitched</span>
                      </div>

                      <div className="flex flex-col items-center">
                        <motion.div 
                          animate={{ borderColor: ["rgba(239,68,68,0.4)", "rgba(16,185,129,0.8)", "rgba(239,68,68,0.4)"] }}
                          transition={{ repeat: Infinity, duration: 3 }}
                          className="h-12 w-12 rounded-full border flex items-center justify-center text-foreground font-mono text-[10px] font-bold"
                        >
                          BTS
                        </motion.div>
                        <span className="text-[10px] font-mono mt-1 text-muted-foreground">Cell Site</span>
                      </div>
                    </div>

                    <div className="mt-8 text-center bg-foreground/5 border border-border/40 rounded-xl px-4 py-2">
                      <p className="text-[10px] font-mono text-muted-foreground"> Authoritative correlation resolved dynamically via hop coordinates.</p>
                    </div>
                  </motion.div>
                )}

                {activeStep === 2 && (
                  <motion.div 
                    key="audit"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full flex flex-col items-center justify-center"
                  >
                    {/* Scanner interface */}
                    <div className="relative w-64 h-32 border border-border bg-[var(--surface-2)]/40 rounded-2xl overflow-hidden flex flex-col justify-center px-4">
                      {/* Scanner Beam */}
                      <motion.div 
                        animate={{ top: ["0%", "100%", "0%"] }}
                        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                        className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent shadow-[0_0_12px_#f59e0b]"
                      />

                      <div className="space-y-2 text-left">
                        <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground">
                          <span>PCI conflict check</span>
                          <span className="text-amber-500 font-bold">Scanning...</span>
                        </div>
                        <div className="flex items-center gap-2 border border-amber-500/20 bg-amber-500/5 rounded p-2">
                          <AlertTriangle className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                          <div className="text-[9px] font-mono text-slate-300">
                            <strong>Conflict:</strong> Cell 412 shares PCI with GUR-BTS-105.
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeStep === 3 && (
                  <motion.div 
                    key="output"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="relative w-full h-full flex flex-col justify-center"
                  >
                    <div className="w-full border border-border/60 bg-[var(--surface-2)]/60 rounded-xl overflow-hidden font-mono text-[9px] text-left">
                      <div className="bg-foreground/5 px-3 py-2 border-b border-border font-bold text-muted-foreground grid grid-cols-4">
                        <span>Node ID</span>
                        <span>Vendor</span>
                        <span>Links</span>
                        <span>Audit Status</span>
                      </div>
                      <div className="divide-y divide-border/30">
                        {[
                          { id: "GUR-BTS-104", v: "Ericsson", l: "Stitched (1)", s: "Valid" },
                          { id: "GUR-BTS-105", v: "Nokia", l: "Stitched (2)", s: "Conflict" },
                          { id: "GUR-5G-10", v: "Ericsson", l: "Stitched (3)", s: "Valid" },
                        ].map((row, i) => (
                          <motion.div 
                            key={row.id}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-3 py-2 grid grid-cols-4 items-center"
                          >
                            <span>{row.id}</span>
                            <span>{row.v}</span>
                            <span>{row.l}</span>
                            <span className={row.s === "Valid" ? "text-green-400 font-bold" : "text-amber-500 font-bold"}>{row.s}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>

            {/* Console Log Terminal */}
            <div className="rounded-2xl border border-border/40 bg-slate-950 p-4 font-mono text-[10px] text-slate-400 h-32 overflow-hidden flex flex-col justify-end text-left relative">
              <span className="absolute top-2.5 right-4 text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">Live Console Logs</span>
              <div className="space-y-1">
                <AnimatePresence mode="popLayout">
                  {stepLogs[activeStep].map((log, index) => (
                    <motion.div 
                      key={log}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="truncate"
                    >
                      <span className="text-primary mr-1.5">&gt;</span> {log}
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Rules Library */}
      <section id="audit-rules" className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">Audit Rules Library</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Every layer of the network. <span className="text-gradient">Validated daily</span>.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
          Structured audit checks across RAN nodes, cells, hardware, GPS, nomenclature, IP data, and MW links — automatically parsed from CM dumps every day.
        </p>

        {/* Filter Controls */}
        <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-4">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search audit rules by ID or name..."
            className="w-full rounded-full border border-border bg-[var(--surface)]/60 px-6 py-3 text-sm outline-none focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_18%,transparent)]"
          />
          <div className="flex flex-wrap gap-1.5 bg-foreground/5 p-1 rounded-full border border-border/40">
            {(["All", "RAN", "MW"] as const).map((scope) => (
              <button
                key={scope}
                onClick={() => setFilterScope(scope)}
                className={`px-4 py-2 text-xs font-semibold rounded-full cursor-pointer transition-all ${
                  filterScope === scope ? "bg-[#7C3AED] text-white" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {scope}
              </button>
            ))}
          </div>
        </div>

        {/* Rules List */}
        <div className="mt-6 space-y-2 max-h-[400px] overflow-y-auto pr-2">
          {filteredRules.length === 0 && (
            <p className="text-muted-foreground text-sm text-center py-6">No audit rules match your search.</p>
          )}
          {filteredRules.map((rule) => (
            <div key={rule.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl border border-border/40 bg-[var(--surface)]/20 hover:border-[#7C3AED]/40 transition-colors">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-[#7C3AED] bg-[#7C3AED]/10 rounded-lg px-2.5 py-1 min-w-[70px] text-center">{rule.id}</span>
                <span className="text-sm font-semibold">{rule.name}</span>
              </div>
              <span className="rounded-full bg-foreground/5 border border-border/40 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground self-start sm:self-auto">{rule.scope}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Multi-Vendor Coverage */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">Multi-Vendor Coverage</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Parse any vendor. <span className="text-gradient">Unify everything</span>.
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {vendors.map((v) => (
            <GlassCard key={v.name} gradientBorder className="p-5 text-center flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold font-display text-[#7C3AED]">{v.name}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{v.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Audit Reports */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">Audit Reports</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Structured. Exportable. <span className="text-gradient">Actionable</span>.
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reports.map((rep) => (
            <GlassCard key={rep.title} gradientBorder className="flex flex-col justify-between h-full">
              <div>
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#7C3AED]/10 text-[#7C3AED] mb-4">
                  <FileText className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-display text-sm font-bold">{rep.title}</h3>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{rep.desc}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mt-24">
        <GlassCard hoverGlow={false} className="relative overflow-hidden p-10 text-center">
          <div className="relative">
            <h2 className="font-display text-3xl font-bold">Find what your NMS is hiding.</h2>
            <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
              Talk to our team about running a NETIQ POC on your RAN or MW data — we&apos;ll show you the anomalies your current tools are missing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/demo" search={{ product: "netiq" }}><BrandButton>Request NETIQ POC</BrandButton></Link>
              <Link to="/" hash="amc"><BrandButton variant="secondary">Ask About AMC</BrandButton></Link>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
