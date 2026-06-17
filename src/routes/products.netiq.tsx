import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, ShieldAlert, CheckCircle2, ArrowRight,
  FileText, ShieldCheck, Link2, Database,
  Cpu, AlertTriangle, Play, RefreshCw, Sparkles,
  Layers, BarChart3, Settings, Eye, Radio, Wifi,
  Router, Waypoints, Cable, Server, Network, GitBranch,
  Activity, Zap, ChevronRight
} from "lucide-react";

export const Route = createFileRoute("/products/netiq")({
  head: () => ({
    meta: [
      { title: "NETIQ — Network Intelligence Platform | Avendum" },
      {
        name: "description",
        content:
          "NETIQ is an enterprise-wide network intelligence platform. It provides deep visibility, audit, inventory validation, and automation across multi-vendor networks.",
      },
    ],
  }),
  component: NetiqPage,
});

const problems = [
  {
    title: "Multi-Vendor Complexity",
    desc: "Networks run on a mix of different hardware vendors, each with its own NMS, schema, and reporting tools. This makes cross-vendor coordination and validation nearly impossible."
  },
  {
    title: "Inventory & Configuration Drift",
    desc: "Decommissioned hardware or changes made in the field often fail to sync back to planning systems, causing data drift that leads to failed provisioning and waste."
  },
  {
    title: "Hidden Topology Linkage Errors",
    desc: "Parent-child controller mappings and cell links frequently fail or drift, breaking network visibility, path tracing, and fault isolation."
  },
  {
    title: "Lack of Independent Auditing",
    desc: "NMS platforms are designed for active operations, not independent data validation. Configuration errors pass through unnoticed without an external audit loop."
  }
];

const capabilities = [
  {
    id: "visibility",
    icon: Eye,
    title: "Network Visibility",
    subtitle: "Topology Mapping",
    desc: "Interactive visual mapping of transmission path relationships, connecting logical parent elements to physical sites.",
    details: [
      "Dynamic Path Tracing across network segments",
      "Controller-to-Node association bridging",
      "Physical layout and interface relationship visualization"
    ]
  },
  {
    id: "audit",
    icon: ShieldCheck,
    title: "Network Audit & Compliance",
    subtitle: "Golden Configuration Scans",
    desc: "Checks parameters daily against standard operational baselines to flag misalignment, duplicates, or invalid settings.",
    details: [
      "Automated compliance checking and golden template matching",
      "Parameter validation (frequencies, nomenclature, values)",
      "Daily discrepancy report generation with rule mapping"
    ]
  },
  {
    id: "inventory",
    icon: Database,
    title: "Inventory Validation",
    subtitle: "Reality Alignment",
    desc: "Compares live network configuration dumps against master asset registries to find ghost nodes, orphaned controllers, and inactive elements.",
    details: [
      "Logical-to-physical inventory reconciliation",
      "Identification of decommissioned elements still active in systems",
      "Synchronization triggers to clean master asset lists"
    ]
  },
  {
    id: "correlation",
    icon: Link2,
    title: "Service Correlation",
    subtitle: "Cross-Domain Stitching",
    desc: "Stitches together microwave links, physical routers, and logical interfaces to build an end-to-end service relationship map.",
    details: [
      "Cross-domain transmission path tracing",
      "Automatic correlation of logical tunnels to physical hops",
      "System linkage error detection and auto-resolution"
    ]
  },
  {
    id: "intelligence",
    icon: Cpu,
    title: "Multi-Vendor Data Intelligence",
    subtitle: "Normalized Data Ingestion",
    desc: "Translates proprietary config dialects from various hardware vendors into a single normalized data ledger.",
    details: [
      "Multi-vendor configuration file parsing (XML, RAML, CSV)",
      "Universal schema translation into a canonical format",
      "Vendor-agnostic interface mappings"
    ]
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "Analytics & Reporting",
    subtitle: "Operational Dashboards",
    desc: "Delivers queryable databases, compliance matrices, and historical trend reports of overall network configuration quality.",
    details: [
      "Custom query interfaces for network analysts",
      "Trend analysis showing overall network configuration score changes",
      "Exportable discrepancy sheets and verification summaries"
    ]
  },
  {
    id: "automation",
    icon: Settings,
    title: "Automation & Operational Insights",
    subtitle: "AI-Powered Detection",
    desc: "Flags exact anomalies with system IDs and delivers structured intelligence payloads - equipping operations teams with precision data for remediation decisions.",
    details: [
      "API-ready structured outputs for orchestration and ticketing systems",
      "Anomaly event streams with full context (vendor, domain, parameter)",
      "SLA and access validation gate reviews with exportable evidence"
    ]
  }
];

const domainParsers = [
  {
    id: "ran",
    icon: Radio,
    label: "RAN",
    title: "Radio Access Network",
    vendors: ["Ericsson ENM", "Huawei U2000", "Nokia NetAct", "ZTE NetNumen"],
    elements: ["eNodeB", "gNodeB", "BTS", "Cell Sites", "Sectors"],
    color: "#7C3AED",
    desc: "Parses RAN configuration exports - cell parameters, PCI allocations, neighbour relations, antenna tilts, and frequency plans across all vendors."
  },
  {
    id: "mw",
    icon: Wifi,
    label: "MW",
    title: "Microwave",
    vendors: ["Ericsson MINI-LINK", "Huawei OptiX", "Nokia Wavence", "Cambium"],
    elements: ["Near-End", "Far-End", "Hops", "Modulation", "ACM Profiles"],
    color: "#2563EB",
    desc: "Ingests microwave link planning data - hop lengths, link IDs, frequency allocations, ACM profiles, and near/far-end parameter validations."
  },
  {
    id: "ubr",
    icon: Waypoints,
    label: "UBR",
    title: "Urban Backhaul Ring",
    vendors: ["Multi-vendor IP/MPLS"],
    elements: ["Ring Segments", "Node IDs", "Port Configs", "VLAN Maps"],
    color: "#0891B2",
    desc: "Resolves UBR topology segments, ring node assignments, VLAN and port configurations, and validates coherence between planned and live ring states."
  },
  {
    id: "wireline",
    icon: Cable,
    label: "Wireline",
    title: "Wireline / Fiber",
    vendors: ["Openreach", "OLT Vendors", "SDH/OTN"],
    elements: ["OLT/ONU", "Fiber Paths", "SDH STM", "WDM Channels"],
    color: "#059669",
    desc: "Parses wireline and fiber infrastructure data - OLT/ONU configs, SDH/OTN tributary maps, wavelength assignments, and fiber route coherence checks."
  },
  {
    id: "router",
    icon: Router,
    label: "Router",
    title: "IP/MPLS Routers",
    vendors: ["Cisco IOS-XR", "Juniper JUNOS", "Nokia SR-OS", "Huawei VRP"],
    elements: ["PE/P Routers", "BGP Sessions", "MPLS LSPs", "Interface IPs"],
    color: "#D97706",
    desc: "Extracts IP/MPLS router configs - interface assignments, BGP session states, MPLS label-switched paths, and VRF definitions for cross-domain correlation."
  },
  {
    id: "core",
    icon: Server,
    label: "Core",
    title: "Core Network",
    vendors: ["Ericsson EPC", "Huawei EPC", "Nokia PCRF", "Generic CN5G"],
    elements: ["MME/AMF", "SGW/UPF", "PGW/SMF", "HSS/UDM"],
    color: "#BE185D",
    desc: "Ingests core network element configurations - MME/AMF, SGW/UPF, PGW/SMF identifiers, and validates logical linkages from RAN to core."
  }
];

const serviceFlowNodes = [
  { id: "ran", label: "RAN Layer", sub: "eNB/gNB Cells", x: 10, y: 50, color: "#7C3AED" },
  { id: "mw", label: "MW Backhaul", sub: "Microwave Links", x: 28, y: 22, color: "#2563EB" },
  { id: "ubr", label: "UBR Ring", sub: "IP Aggregation", x: 28, y: 76, color: "#0891B2" },
  { id: "router", label: "IP Router", sub: "PE/P Nodes", x: 55, y: 50, color: "#D97706" },
  { id: "core", label: "Core Network", sub: "MME/AMF/UPF", x: 80, y: 50, color: "#BE185D" },
  { id: "wire", label: "Wireline", sub: "OTN/SDH Fiber", x: 55, y: 85, color: "#059669" },
];

const serviceFlowEdges = [
  { from: "ran", to: "mw", label: "Radio â†’ Backhaul" },
  { from: "ran", to: "ubr", label: "Radio â†’ UBR" },
  { from: "mw", to: "router", label: "MW â†’ Router" },
  { from: "ubr", to: "router", label: "UBR â†’ Router" },
  { from: "router", to: "core", label: "Router â†’ Core" },
  { from: "wire", to: "router", label: "Fiber â†’ Router" },
];

const outcomes = [
  {
    title: "Eliminate Data Quality Drift",
    desc: "Sync logical configuration records directly with live parsed physical reality, correcting planning discrepancies before provisioning starts."
  },
  {
    title: "Fast-Track Root Cause Analysis",
    desc: "Reconstruct topology linkages instantly so operations teams trace backhaul path faults and isolate issues within minutes."
  },
  {
    title: "Vendor-Agnostic Operations",
    desc: "Operate with a unified network ledger, eliminating the need for vendor-specific NMS interfaces or specialized training."
  },
  {
    title: "Orchestration Readiness",
    desc: "Establish a high-fidelity, validated configuration base that enables reliable zero-touch automation and scheduling."
  }
];

const NETIQ_PHASES = [
  {
    id: "scanning",
    label: "PHASE 1 — NETWORK SCAN & EXTRACTION",
    badge: "SCANNING",
    badgeColor: "#7C3AED",
    title: "Scanning dump & extracting node IPs, cells, and sites",
    lines: [
      { t: 0, cls: "text-muted-foreground", txt: "> Initializing NETiQ Scanning Engine v5.2 ..." },
      { t: 250, cls: "text-cyan-400", txt: "> Connected to NMS daily dump (Ericsson ENM XML / Huawei U2000)" },
      { t: 500, cls: "text-muted-foreground", txt: "> Extracting physical network topology entities..." },
      { t: 750, cls: "text-purple-400", txt: "> [NODES] Found 12,847 active hardware nodes (BBU5900, ATN950B)" },
      { t: 1000, cls: "text-purple-400", txt: "> [CELLS] Mapped 4,921 cell configurations with PCI mappings" },
      { t: 1250, cls: "text-cyan-400", txt: "> [IPS] Extracted 4,921 management and signaling IP routes" },
      { t: 1500, cls: "text-emerald-400", txt: "> [SITES] Mapped 1,208 physical cell towers & fiber hub coordinates" },
      { t: 1750, cls: "text-emerald-400", txt: "> ✓ Scan complete — 23,897 entities cached in system state" },
    ],
  },
  {
    id: "reports",
    label: "PHASE 2 — REPORT GENERATION",
    badge: "REPORTS",
    badgeColor: "#0891B2",
    title: "Compiling configuration summaries and generating reports",
    lines: [
      { t: 0, cls: "text-muted-foreground", txt: "> Initializing Report Generation Engine..." },
      { t: 300, cls: "text-cyan-400", txt: "> Formulating configuration database integrity check..." },
      { t: 600, cls: "text-muted-foreground", txt: "> Organizing schema records for 107 baseline rules..." },
      { t: 900, cls: "text-purple-400", txt: "> Compiling: netiq_report_daily_20250615.pdf" },
      { t: 1200, cls: "text-emerald-400", txt: "> Exporting: cmdb_inventory_delta.json (3 changes detected)" },
      { t: 1500, cls: "text-emerald-400", txt: "> ✓ Compliance report successfully built — rating: 94.8%" },
    ],
  },
  {
    id: "auditing",
    label: "PHASE 3 — PARAMETER AUDITING",
    badge: "AUDITING",
    badgeColor: "#D97706",
    title: "Auditing domain configurations against golden baseline",
    lines: [
      { t: 0, cls: "text-muted-foreground", txt: "> Invoking multi-domain Golden Config Audits..." },
      { t: 250, cls: "text-cyan-400", txt: "> [RAN] Auditing 4,921 sectors: verifying PCI uniqueness & tilts..." },
      { t: 500, cls: "text-red-400", txt: "  [FAIL] PCI Collision: Cell-421 & Cell-422 share PCI 88 on EARFCN 3050" },
      { t: 750, cls: "text-cyan-400", txt: "> [MW] Auditing 3,291 links: validating ATPC & frequency plans..." },
      { t: 1000, cls: "text-amber-400", txt: "  [WARN] Path Tx power drift on Hop-77A exceeds plan threshold (+1.5 dB)" },
      { t: 1250, cls: "text-cyan-400", txt: "> [WIRELINE] Auditing VLAN routes & port state bindings..." },
      { t: 1500, cls: "text-emerald-400", txt: "  [OK] All wireline fiber circuits conform to design templates" },
      { t: 1750, cls: "text-red-400", txt: "> ✗ Auditing complete: 1 PCI collision fail | 1 MW power warning" },
    ],
  },
  {
    id: "stitching",
    label: "PHASE 4 — TOPOLOGY STITCHING & AI",
    badge: "STITCHING",
    badgeColor: "#059669",
    title: "Stitching service paths and executing AI auto-remediation",
    lines: [
      { t: 0, cls: "text-muted-foreground", txt: "> Starting Cross-Domain Topology Stitching Engine..." },
      { t: 250, cls: "text-cyan-400", txt: "> Correlating Cell-1042 (RAN) → Link-77A (MW) → Circuit-C4 (WL) → Core UPF" },
      { t: 500, cls: "text-red-400", txt: "  [FAIL] Broken Stitch: UBR-23 (Backhaul) → Router-PE9 (No IP mapping)" },
      { t: 750, cls: "text-purple-400", txt: "> Invoking Closed-Loop AI Remediation agent..." },
      { t: 1000, cls: "text-cyan-400", txt: "> Generating interface config CLI script for Router-PE9" },
      { t: 1300, cls: "text-muted-foreground", txt: "> Dispatching configuration patch via Northbound SSH API..." },
      { t: 1600, cls: "text-emerald-400", txt: "  [SUCCESS] CLI patch deployed. Re-checking routing tables..." },
      { t: 1900, cls: "text-emerald-400", txt: "> ✓ End-to-end stitch verified — all service hops active!" },
    ],
  },
];

function NetiqPage() {
  const [activeTab, setActiveTab] = useState("visibility");
  const [autoPlayTabs, setAutoPlayTabs] = useState(true);

  // Sandbox scanner states
  const [netiqPhase, setNetiqPhase] = useState<number>(0);
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [isPlayingSandbox, setIsPlayingSandbox] = useState<boolean>(true);
  const [animationSpeed, setAnimationSpeed] = useState<number>(1);
  const netiqTimersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Auto play capabilities tabs
  useEffect(() => {
    if (!autoPlayTabs) return;
    const interval = setInterval(() => {
      setActiveTab((curr) => {
        const index = capabilities.findIndex((c) => c.id === curr);
        const nextIndex = (index + 1) % capabilities.length;
        return capabilities[nextIndex].id;
      });
    }, 7000);
    return () => clearInterval(interval);
  }, [autoPlayTabs]);

  // Auto-advance NETiQ sandbox animation phases
  useEffect(() => {
    netiqTimersRef.current.forEach(t => clearTimeout(t));
    netiqTimersRef.current = [];

    if (!isPlayingSandbox) return;

    setVisibleLines(0);

    const phase = NETIQ_PHASES[netiqPhase];
    phase.lines.forEach((line, i) => {
      const tid = setTimeout(() => {
        setVisibleLines(i + 1);
      }, (line.t + 200) / animationSpeed);
      netiqTimersRef.current.push(tid);
    });

    const lastT = phase.lines[phase.lines.length - 1].t;
    const advTid = setTimeout(() => {
      setNetiqPhase(p => (p + 1) % NETIQ_PHASES.length);
    }, (lastT + 2500) / animationSpeed);
    netiqTimersRef.current.push(advTid);

    return () => netiqTimersRef.current.forEach(t => clearTimeout(t));
  }, [netiqPhase, isPlayingSandbox, animationSpeed]);

  const activeCapability = capabilities.find((c) => c.id === activeTab) || capabilities[0];
  const CapIcon = activeCapability.icon;

  // Domain nodes around a circle — NETiQ sits at center
  const domainNodes = [
    { id: "ran", label: "RAN", sub: "eNB/gNB", cx: 50, cy: 12, color: "#7C3AED" },
    { id: "mw", label: "MW", sub: "Microwave", cx: 84, cy: 32, color: "#2563EB" },
    { id: "router", label: "Router", sub: "IP/MPLS", cx: 84, cy: 68, color: "#D97706" },
    { id: "core", label: "Core", sub: "MME/UPF", cx: 50, cy: 88, color: "#BE185D" },
    { id: "wire", label: "Wireline", sub: "OTN/SDH", cx: 16, cy: 68, color: "#059669" },
    { id: "ubr", label: "UBR", sub: "Backhaul", cx: 16, cy: 32, color: "#0891B2" },
  ];

  const edges = [
    { id: "ran-mw", from: "ran", to: "mw" },
    { id: "ran-ubr", from: "ran", to: "ubr" },
    { id: "mw-router", from: "mw", to: "router" },
    { id: "ubr-router", from: "ubr", to: "router" },
    { id: "router-core", from: "router", to: "core" },
    { id: "wire-router", from: "wire", to: "router" },
  ];

  // Synchronize Radar with active phase and visible lines
  let activeEdges: string[] = [];
  let anomalyEdge = "";
  let anomalyNode = "";
  let currentScanStatus = "";

  if (netiqPhase === 0) {
    currentScanStatus = "▶ SCANNING — Extracting IPs, cells, sites…";
    if (visibleLines >= 3) activeEdges.push("ran-mw");
    if (visibleLines >= 4) activeEdges.push("ran-ubr");
    if (visibleLines >= 5) activeEdges.push("mw-router");
    if (visibleLines >= 6) activeEdges.push("ubr-router");
    if (visibleLines >= 7) {
      activeEdges.push("router-core");
      activeEdges.push("wire-router");
    }
  } else if (netiqPhase === 1) {
    currentScanStatus = "✓ REPORTING — Compiling integrity report";
    activeEdges = ["ran-mw", "ran-ubr", "mw-router", "ubr-router", "router-core", "wire-router"];
  } else if (netiqPhase === 2) {
    currentScanStatus = "▶ AUDITING — Running baseline checks";
    activeEdges = ["ran-mw", "ran-ubr", "mw-router", "ubr-router", "router-core", "wire-router"];
    if (visibleLines >= 2) anomalyNode = "ran";
    if (visibleLines >= 4) anomalyNode = "mw";
  } else if (netiqPhase === 3) {
    activeEdges = ["ran-mw", "ran-ubr", "mw-router", "router-core", "wire-router"];
    if (visibleLines < 4) {
      currentScanStatus = "⚠ ANOMALY — Broken stitch on UBR-Router hop";
      anomalyEdge = "ubr-router";
      anomalyNode = "ubr";
    } else if (visibleLines < 7) {
      currentScanStatus = "⚙ AI ENGINE — Dispatching CLI remediation…";
      anomalyEdge = "ubr-router";
      anomalyNode = "ubr";
    } else {
      currentScanStatus = "✓ REMEDIATED — Stitch active via NBI gateway";
      activeEdges.push("ubr-router");
    }
  }

  const currentPhase = NETIQ_PHASES[netiqPhase];

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 animate-fade-up">
      {/* Hero */}
      <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold text-[#7C3AED] bg-[#7C3AED]/15 mb-6 border border-[#7C3AED]/25 shadow-[0_0_15px_rgba(124,58,237,0.15)]">
            <Sparkles className="h-3.5 w-3.5 animate-pulse text-[#C084FC]" />
            Flagship AI Platform
          </span>
          <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED] font-bold">Premium Enterprise Suite</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            AI-Enhanced Network<br /><span className="text-gradient">Intelligence & Automation</span>
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base max-w-2xl font-light">
            NETiQ is Avendum&apos;s flagship AI-powered Network Intelligence platform. It ingests multi-vendor, multi-domain configuration dumps across RAN, MW, UBR, Wireline, Router, and Core layers - normalising them into a unified intelligence ledger, detecting parameter anomalies, mapping service topologies, and surfacing actionable audit intelligence for operations teams.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/demo" search={{ product: "netiq" }}><BrandButton>Request NETIQ Demo <ArrowRight className="h-4 w-4" /></BrandButton></Link>
            <a href="#capabilities"><BrandButton variant="secondary">Explore Capabilities</BrandButton></a>
          </div>
        </div>

        {/* Highlights Column */}
        <div className="space-y-4">
          <GlassCard gradientBorder className="border-[#7C3AED]/35 shadow-[0_4px_20px_rgba(124,58,237,0.08)]">
            <div className="font-display text-xl font-bold text-[#7C3AED]">AI-Driven Analytics</div>
            <p className="text-xs text-muted-foreground mt-1">Leverages machine learning to predict parameter drifts, identify ghost cells, and classify network anomalies.</p>
          </GlassCard>
          <GlassCard gradientBorder className="border-[#7C3AED]/35 shadow-[0_4px_20px_rgba(124,58,237,0.08)]">
            <div className="font-display text-xl font-bold text-[#7C3AED]">Multi-Domain Parser Engine</div>
            <p className="text-xs text-muted-foreground mt-1">Ingests and normalises configuration exports from six network domains - RAN, MW, UBR, Wireline, Router, and Core - in a single pipeline.</p>
          </GlassCard>
          <GlassCard gradientBorder className="border-[#7C3AED]/35 shadow-[0_4px_20px_rgba(124,58,237,0.08)]">
            <div className="font-display text-xl font-bold text-[#7C3AED]">Service Topology Mapping</div>
            <p className="text-xs text-muted-foreground mt-1">Stitches cross-domain service paths - tracing how data flows from radio cell to core, surfacing broken links and routing mismatches.</p>
          </GlassCard>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">Operational Challenges</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Your NMS is confident. <span className="text-gradient">It shouldn&apos;t be</span>.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
          Modern networks consume configuration data without external validation loops — creating false confidence in inventory records that drive capacity decisions, automation workflows, and field operations.
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

      {/* â”€â”€ DOMAIN INVENTORY PARSERS â”€â”€ */}
      <section className="mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED] font-bold">Multi-Domain Inventory Parser</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              One platform. <span className="text-gradient">Six network domains.</span>
            </h2>
            <p className="mt-3 text-muted-foreground text-sm leading-relaxed max-w-2xl">
              NETiQ's ingestion engine connects natively to every major network domain - parsing vendor-specific configuration exports into a single, normalised intelligence ledger without custom connectors or manual mapping.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground glass px-4 py-2.5 border-[#7C3AED]/20 shrink-0">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
            All 6 domains active
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {domainParsers.map((d) => {
            const DIcon = d.icon;
            return (
              <GlassCard key={d.id} gradientBorder className="flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300" style={{ borderColor: `${d.color}28` }}>
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: `${d.color}15`, color: d.color }}>
                      <DIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest" style={{ color: d.color }}>{d.label}</span>
                      <h3 className="font-display font-bold text-sm text-foreground leading-tight">{d.title}</h3>
                    </div>
                  </div>
                  <span className="text-[8px] font-mono font-bold px-2 py-0.5 rounded-full border" style={{ color: d.color, borderColor: `${d.color}35`, backgroundColor: `${d.color}10` }}>
                    ACTIVE
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>

                {/* Vendors */}
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-muted-foreground/60 font-mono mb-1.5">Supported Vendors</p>
                  <div className="flex flex-wrap gap-1.5">
                    {d.vendors.map((v, i) => (
                      <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded bg-foreground/5 border border-border/30 text-muted-foreground">
                        {v}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Elements */}
                <div className="pt-3 border-t border-border/30">
                  <p className="text-[9px] uppercase tracking-widest text-muted-foreground/60 font-mono mb-1.5">Parsed Elements</p>
                  <div className="flex flex-wrap gap-1.5">
                    {d.elements.map((el, i) => (
                      <span key={i} className="text-[9px] font-mono px-2 py-0.5 rounded-full border flex items-center gap-1" style={{ color: d.color, borderColor: `${d.color}30`, backgroundColor: `${d.color}08` }}>
                        <span className="h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                        {el}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </section>

      {/* â”€â”€ SERVICE & TOPOLOGICAL ROUTING â”€â”€ */}

      <section id="sandbox" className="mt-24 scroll-mt-20">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">Live Operations Sandbox</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              The Ingestion & <span className="text-gradient">Audit Simulator</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
              Interact with the live simulator below to see how NETiQ ingests configuration dumps, normalizes assets, runs audits, and stitches service path topologies in real-time.
            </p>
          </div>
        </div>

        {/* Phase tabs */}
        <div className="flex gap-1.5 flex-wrap mb-5">
          {NETIQ_PHASES.map((ph, i) => (
            <button
              key={ph.id}
              onClick={() => {
                setNetiqPhase(i);
                setVisibleLines(0);
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[9px] font-mono font-bold uppercase tracking-wider border transition-all ${netiqPhase === i
                ? "border-current text-white shadow-md"
                : "border-border/40 text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              style={netiqPhase === i ? { backgroundColor: ph.badgeColor, borderColor: ph.badgeColor } : {}}
            >
              <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${netiqPhase === i ? "bg-white animate-pulse" : "bg-muted-foreground/40"}`} />
              {ph.badge}
            </button>
          ))}
        </div>

        {/* Main demo area — 2 columns on lg */}
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5 items-start">

          {/* LEFT — Animated terminal & Live Status Dashboard */}
          <div className="rounded-2xl border border-border/30 bg-background/80 overflow-hidden shadow-2xl shadow-[#7C3AED]/5">
            {/* Terminal title bar */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/30 bg-surface/40 select-none">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground ml-2">netiq_engine — audit_pipeline.sh</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-[9px] font-mono font-bold px-2 py-0.5 rounded border animate-pulse"
                  style={{ color: currentPhase.badgeColor, borderColor: `${currentPhase.badgeColor}50`, backgroundColor: `${currentPhase.badgeColor}12` }}
                >
                  {currentPhase.badge}
                </span>
                <span className="text-[9px] font-mono text-emerald-400">● LIVE</span>
              </div>
            </div>

            {/* Phase label bar */}
            <div className="px-4 pt-3 pb-1 select-none">
              <span className="text-[9px] font-mono font-bold tracking-widest" style={{ color: currentPhase.badgeColor }}>
                {currentPhase.label}
              </span>
              <p className="text-[10px] text-muted-foreground mt-0.5">{currentPhase.title}</p>
            </div>

            {/* Split Layout inside Terminal Card */}
            <div className="grid md:grid-cols-[1.25fr_1fr] border-t border-border/30 divide-y md:divide-y-0 md:divide-x divide-border/30 bg-background/40">

              {/* Console Log Panel */}
              <div className="p-4 flex flex-col justify-between h-[230px] font-mono text-[10px] leading-[1.7] overflow-hidden bg-black/45">
                <div className="space-y-0.5 overflow-y-auto max-h-[190px] pr-2">
                  {currentPhase.lines.slice(0, visibleLines).map((line, i) => (
                    <div key={i} className={`${line.cls} transition-opacity duration-200`}>
                      {line.txt}
                    </div>
                  ))}
                  {visibleLines < currentPhase.lines.length && (
                    <span className="inline-block h-3 w-1.5 bg-primary animate-pulse rounded-sm ml-0.5" />
                  )}
                </div>

                {/* Status Bar inside console */}
                <div className="pt-2 border-t border-border/20 flex items-center justify-between text-[8px] text-muted-foreground/60 select-none">
                  <span>Logs processed: {visibleLines}/{currentPhase.lines.length}</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1 w-1 rounded-full bg-emerald-500 animate-ping" />
                    SYSTEM_OK
                  </span>
                </div>
              </div>

              {/* Live Graphic Status Panel */}
              <div className="p-4 bg-surface-2/10 flex flex-col justify-between h-[230px] overflow-hidden select-none">
                {netiqPhase === 0 && (
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#7C3AED] uppercase">Entity Extractor</span>
                        <span className="text-[8px] font-mono px-1.5 py-0.5 bg-[#7C3AED]/12 border border-[#7C3AED]/20 text-[#C084FC] rounded animate-pulse">EXTRACTING</span>
                      </div>
                      <p className="text-[9px] text-muted-foreground mt-1">Reading raw XML elements & identifying attributes</p>
                    </div>

                    {/* Counters */}
                    <div className="grid grid-cols-2 gap-2 my-2">
                      <div className="bg-background/40 border border-border/20 rounded-lg p-2 flex flex-col">
                        <span className="text-[8px] text-muted-foreground uppercase font-mono">Nodes Mapped</span>
                        <span className="text-sm font-mono font-bold text-white mt-0.5">
                          {visibleLines >= 4 ? "12,847" : visibleLines >= 1 ? "4,120" : "0"}
                        </span>
                      </div>
                      <div className="bg-background/40 border border-border/20 rounded-lg p-2 flex flex-col">
                        <span className="text-[8px] text-muted-foreground uppercase font-mono">Cells Found</span>
                        <span className="text-sm font-mono font-bold text-[#C084FC] mt-0.5">
                          {visibleLines >= 5 ? "4,921" : visibleLines >= 2 ? "1,884" : "0"}
                        </span>
                      </div>
                      <div className="bg-background/40 border border-border/20 rounded-lg p-2 flex flex-col">
                        <span className="text-[8px] text-muted-foreground uppercase font-mono">Sites Mapped</span>
                        <span className="text-sm font-mono font-bold text-[#0891B2] mt-0.5">
                          {visibleLines >= 7 ? "1,208" : visibleLines >= 3 ? "420" : "0"}
                        </span>
                      </div>
                      <div className="bg-background/40 border border-border/20 rounded-lg p-2 flex flex-col">
                        <span className="text-[8px] text-muted-foreground uppercase font-mono">IPs Extracted</span>
                        <span className="text-sm font-mono font-bold text-[#059669] mt-0.5">
                          {visibleLines >= 6 ? "4,921" : visibleLines >= 4 ? "2,310" : "0"}
                        </span>
                      </div>
                    </div>

                    {/* Micro log stream */}
                    <div className="text-[8px] font-mono text-muted-foreground/80 bg-background/50 border border-border/20 rounded p-1.5 h-10 overflow-hidden relative">
                      <div className="absolute inset-x-0 bottom-0 h-4 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                      <div className="animate-pulse">
                        {visibleLines >= 7 ? (
                          <>
                            <div className="text-emerald-400">✓ Ingested cell IP: 10.10.4.51</div>
                            <div className="text-cyan-400">&gt; Mapped Site: IND-DL-001</div>
                          </>
                        ) : visibleLines >= 3 ? (
                          <>
                            <div>&gt; Reading node metadata...</div>
                            <div>&gt; Fetching Ericsson board structure...</div>
                          </>
                        ) : (
                          <div>Awaiting XML schema stream...</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {netiqPhase === 1 && (
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#0891B2] uppercase">Compliance Report</span>
                        <span className="text-[8px] font-mono px-1.5 py-0.5 bg-[#0891B2]/12 border border-[#0891B2]/20 text-[#22D3EE] rounded">COMPILING</span>
                      </div>
                      <p className="text-[9px] text-muted-foreground mt-1">Generating configuration reports and PDF logs</p>
                    </div>

                    {/* Report card UI */}
                    <div className="my-auto py-2 flex flex-col items-center">
                      {visibleLines < 5 ? (
                        <div className="flex flex-col items-center gap-2 py-2">
                          <div className="h-8 w-8 rounded-full border-2 border-[#0891B2]/30 border-t-[#0891B2] animate-spin" />
                          <span className="text-[9px] font-mono text-muted-foreground">Compiling netiq_report.pdf...</span>
                        </div>
                      ) : (
                        <div className="w-full bg-background/30 border border-border/20 rounded-xl p-3 flex items-center justify-between gap-3 shadow-lg">
                          <div className="relative h-12 w-12 flex-shrink-0 flex items-center justify-center">
                            <svg className="w-full h-full transform -rotate-90">
                              <circle cx="24" cy="24" r="20" className="stroke-muted/10 stroke-2 fill-none" />
                              <circle cx="24" cy="24" r="20" className="stroke-emerald-500 stroke-2 fill-none" strokeDasharray="125" strokeDashoffset="6" />
                            </svg>
                            <span className="absolute text-[9px] font-mono font-bold text-white">94.8%</span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-[10px] font-bold text-white">NMS Audit Summary</h4>
                            <p className="text-[8px] text-muted-foreground mt-0.5">Total rules tested: 107 checks</p>
                            <div className="flex gap-2 mt-1">
                              <span className="text-[8px] text-emerald-400 font-mono">101 Pass</span>
                              <span className="text-[8px] text-red-400 font-mono">1 Fail</span>
                              <span className="text-[8px] text-amber-500 font-mono">1 Warn</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between border-t border-border/20 pt-2 text-[8px] font-mono text-muted-foreground">
                      <span>Report output: 147 KB</span>
                      {visibleLines >= 5 ? (
                        <span className="text-[#0891B2] flex items-center gap-0.5 font-bold cursor-pointer hover:underline">
                          Export Report <ArrowRight className="h-2 w-2" />
                        </span>
                      ) : (
                        <span>Awaiting completion...</span>
                      )}
                    </div>
                  </div>
                )}

                {netiqPhase === 2 && (
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#D97706] uppercase">Rules Engine</span>
                        <span className="text-[8px] font-mono px-1.5 py-0.5 bg-[#D97706]/12 border border-[#D97706]/20 text-[#F59E0B] rounded animate-pulse">AUDITING</span>
                      </div>
                      <p className="text-[9px] text-muted-foreground mt-1">Evaluating daily dump against golden config rules</p>
                    </div>

                    {/* Rule checklist */}
                    <div className="my-1 space-y-1 text-[9px] font-mono">
                      <div className="flex items-center justify-between p-1 bg-background/20 rounded border border-border/10">
                        <span className="text-muted-foreground">1. RAN PCI Unique check</span>
                        {visibleLines >= 3 ? (
                          <span className="text-red-400 font-bold flex items-center gap-0.5">❌ COLLISION</span>
                        ) : (
                          <span className="text-muted-foreground/60 animate-pulse">RUNNING</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between p-1 bg-background/20 rounded border border-border/10">
                        <span className="text-muted-foreground">2. MW ATPC validation</span>
                        {visibleLines >= 5 ? (
                          <span className="text-amber-500 font-bold flex items-center gap-0.5">⚠️ WARN (HOP)</span>
                        ) : visibleLines >= 3 ? (
                          <span className="text-muted-foreground/60 animate-pulse">RUNNING</span>
                        ) : (
                          <span className="text-muted-foreground/30">QUEUED</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between p-1 bg-background/20 rounded border border-border/10">
                        <span className="text-muted-foreground">3. WL VLAN compliance</span>
                        {visibleLines >= 7 ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-0.5">✓ PASSED</span>
                        ) : visibleLines >= 5 ? (
                          <span className="text-muted-foreground/60 animate-pulse">RUNNING</span>
                        ) : (
                          <span className="text-muted-foreground/30">QUEUED</span>
                        )}
                      </div>
                      <div className="flex items-center justify-between p-1 bg-background/20 rounded border border-border/10">
                        <span className="text-muted-foreground">4. CORE Route verification</span>
                        {visibleLines >= 8 ? (
                          <span className="text-emerald-400 font-bold flex items-center gap-0.5">✓ PASSED</span>
                        ) : visibleLines >= 7 ? (
                          <span className="text-muted-foreground/60 animate-pulse">RUNNING</span>
                        ) : (
                          <span className="text-muted-foreground/30">QUEUED</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {netiqPhase === 3 && (
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono font-bold tracking-widest text-[#059669] uppercase">Stitch & Remediate</span>
                        <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded ${visibleLines >= 8
                          ? "bg-emerald-500/12 border border-emerald-500/20 text-emerald-400"
                          : "bg-red-500/12 border border-red-500/20 text-red-400 animate-pulse"
                          }`}>
                          {visibleLines >= 8 ? "RESOLVED" : "BROKEN STITCH"}
                        </span>
                      </div>
                      <p className="text-[9px] text-muted-foreground mt-1">Cross-layer correlation & AI remediation</p>
                    </div>

                    {/* Stitch flow diagram */}
                    <div className="my-1 py-1 px-2 bg-background/40 border border-border/20 rounded-lg">
                      <div className="flex items-center justify-between gap-1 text-[8px] font-mono text-center">
                        <div className="px-1 py-0.5 bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded text-[#C084FC]">RAN</div>
                        <span className="text-emerald-500">→</span>
                        <div className="px-1 py-0.5 bg-[#2563EB]/20 border border-[#2563EB]/30 rounded text-[#60A5FA]">MW</div>
                        <span className="text-emerald-500">→</span>
                        <div className="px-1 py-0.5 bg-[#059669]/20 border border-[#059669]/30 rounded text-[#34D399]">WL</div>
                        <span className={visibleLines >= 8 ? "text-emerald-500 animate-pulse font-bold" : "text-red-500 animate-pulse font-bold"}>
                          {visibleLines >= 8 ? "→" : "↛"}
                        </span>
                        <div className={`px-1 py-0.5 rounded transition-colors ${visibleLines >= 8
                          ? "bg-[#BE185D]/20 border border-[#BE185D]/30 text-[#F472B6]"
                          : "bg-red-500/20 border border-red-500/30 text-red-400"
                          }`}>
                          CORE
                        </div>
                      </div>
                    </div>

                    {/* AI CLI Remediator */}
                    <div className="bg-black/60 border border-border/20 rounded p-1.5 h-16 font-mono text-[8px] text-muted-foreground overflow-y-auto leading-relaxed relative">
                      {visibleLines >= 5 ? (
                        <div className="text-cyan-400">
                          <span className="text-emerald-400"># Generated CLI Patch for Router-PE9:</span>
                          <div className="pl-1 select-text">
                            <div>interface GigabitEthernet0/1/2</div>
                            <div className="text-white"> ip address 10.20.4.51 255.255.255.252</div>
                            <div> no shutdown</div>
                          </div>
                          {visibleLines >= 7 ? (
                            <div className="text-emerald-400 mt-1 font-bold animate-pulse">✓ DISPATCHED & REMEDIATED</div>
                          ) : (
                            <div className="text-amber-500 mt-1 animate-pulse">⚙ DISPATCHING PATCH...</div>
                          )}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center h-full text-muted-foreground/40 gap-1.5">
                          <Cpu className="h-3 w-3 animate-pulse" />
                          <span>Calculating correlation map...</span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

            </div>

            {/* Progress & Control Bar */}
            <div className="px-4 py-2 bg-surface/20 border-t border-border/20 flex flex-col gap-2 select-none">
              <div className="flex items-center gap-3">
                <div className="h-1 flex-1 bg-border/30 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${(visibleLines / currentPhase.lines.length) * 100}%`,
                      backgroundColor: currentPhase.badgeColor,
                    }}
                  />
                </div>
                <span className="text-[8px] font-mono text-muted-foreground shrink-0 font-semibold">
                  PHASE {netiqPhase + 1}/{NETIQ_PHASES.length}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsPlayingSandbox(!isPlayingSandbox)}
                    className="p-1 rounded bg-border/40 hover:bg-border/70 text-foreground cursor-pointer transition-colors text-[9px] font-mono flex items-center gap-1 font-bold"
                  >
                    {isPlayingSandbox ? (
                      <>
                        <span className="h-1.5 w-1.5 bg-amber-400 rounded-sm inline-block" /> Pause
                      </>
                    ) : (
                      <>
                        <span className="h-1.5 w-1.5 bg-emerald-400 rounded-sm inline-block" /> Play
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      netiqTimersRef.current.forEach(t => clearTimeout(t));
                      netiqTimersRef.current = [];
                      setNetiqPhase(0);
                      setVisibleLines(0);
                      setIsPlayingSandbox(true);
                    }}
                    className="p-1 rounded bg-border/40 hover:bg-border/70 text-foreground cursor-pointer transition-colors text-[9px] font-mono flex items-center gap-1 font-bold"
                  >
                    <RefreshCw className="h-2.5 w-2.5" /> Reset
                  </button>

                  <div className="flex items-center bg-border/20 rounded p-0.5 border border-border/30">
                    {[0.5, 1, 2].map(speed => (
                      <button
                        key={speed}
                        onClick={() => setAnimationSpeed(speed)}
                        className={`px-1 py-0.5 rounded text-[8px] font-mono font-bold cursor-pointer transition-colors ${animationSpeed === speed
                          ? "bg-primary text-white"
                          : "text-muted-foreground hover:text-foreground"
                          }`}
                      >
                        {speed}x
                      </button>
                    ))}
                  </div>
                </div>

                <span className="text-[8px] font-mono text-muted-foreground/50">
                  Click tabs above to force jump phases
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — Radar + domain list */}
          <div className="flex flex-col gap-5">
            {/* Radar widget */}
            <div className="rounded-2xl border border-[#7C3AED]/20 bg-surface/20 p-4 flex flex-col items-center gap-4">
              <p className="text-[10px] font-mono font-bold text-[#A855F7] tracking-widest self-start">TOPOLOGY RADAR — SERVICE PATH DISCOVERY</p>

              <div className="relative w-52 h-52">
                {/* Rings */}
                {[0, 1, 2].map(i => (
                  <div key={i} className="absolute rounded-full border border-[#7C3AED]/12" style={{ inset: `${i * 16}%` }} />
                ))}
                {/* Radar sweep */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 rounded-full animate-radar origin-center"
                    style={{ background: "conic-gradient(from 0deg, transparent 0deg, rgba(124,58,237,0.18) 55deg, transparent 55deg)" }}
                  />
                </div>

                {/* SVG edges */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" fill="none">
                  {edges.map(edge => {
                    const from = domainNodes.find(n => n.id === edge.from)!;
                    const to = domainNodes.find(n => n.id === edge.to)!;
                    const isActive = activeEdges.includes(edge.id);
                    const isAnomaly = edge.id === anomalyEdge;
                    return (
                      <line
                        key={edge.id}
                        x1={from.cx} y1={from.cy} x2={to.cx} y2={to.cy}
                        stroke={isAnomaly ? "#ef4444" : isActive ? "#7C3AED" : "rgba(255,255,255,0.06)"}
                        strokeWidth={isActive ? "0.9" : "0.5"}
                        strokeDasharray={isActive ? "3 2" : "2 3"}
                        className={isAnomaly ? "animate-pulse stroke-[1.5px]" : isActive ? "animate-dash" : ""}
                      />
                    );
                  })}
                  {/* Data packets */}
                  {(netiqPhase !== 1) && (netiqPhase >= 2 || (netiqPhase === 0 && visibleLines >= 4)) && edges.filter(e => activeEdges.includes(e.id) && e.id !== anomalyEdge).map((edge, i) => {
                    const from = domainNodes.find(n => n.id === edge.from)!;
                    const to = domainNodes.find(n => n.id === edge.to)!;
                    return (
                      <circle key={`pkt-${i}`} r="1.2" fill="#A855F7" opacity="0.85">
                        <animateMotion dur={`${1.8 + i * 0.3}s`} repeatCount="indefinite" path={`M${from.cx},${from.cy} L${to.cx},${to.cy}`} />
                      </circle>
                    );
                  })}
                </svg>

                {/* NETiQ center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className={`h-5 w-5 rounded-full flex items-center justify-center ${anomalyNode
                      ? "bg-amber-500 animate-pulse shadow-[0_0_18px_rgba(245,158,11,0.8)]"
                      : "bg-[#7C3AED] animate-pulse-ring shadow-[0_0_18px_rgba(124,58,237,0.7)]"
                      }`}>
                      <Network className="h-3 w-3 text-white" />
                    </div>
                    <span className="mt-1 text-[7px] font-mono font-bold text-[#C084FC]">NETiQ</span>
                  </div>
                </div>

                {/* Domain nodes */}
                {domainNodes.map(node => {
                  const isAnomaly = node.id === anomalyNode;
                  const isScanned = activeEdges.some(e => e.startsWith(node.id) || e.endsWith(`-${node.id}`));
                  return (
                    <div
                      key={node.id}
                      className="absolute flex flex-col items-center"
                      style={{ left: `${node.cx}%`, top: `${node.cy}%`, transform: "translate(-50%,-50%)" }}
                    >
                      <div
                        className={`h-4 w-4 rounded-full border-2 transition-all duration-700 ${isAnomaly
                          ? "bg-red-500 border-red-300 shadow-[0_0_14px_rgba(239,68,68,1)] animate-pulse"
                          : isScanned
                            ? "border-[#C084FC] shadow-[0_0_10px_rgba(124,58,237,0.8)]"
                            : "bg-surface-2 border-border/60"
                          }`}
                        style={isScanned && !isAnomaly ? { backgroundColor: `${node.color}cc` } : {}}
                      />
                      <div className="mt-0.5 text-center">
                        <span className="block text-[8px] font-mono font-bold whitespace-nowrap" style={{ color: isAnomaly ? "#ef4444" : node.color }}>{node.label}</span>
                        <span className="block text-[6px] font-mono text-muted-foreground whitespace-nowrap">{node.sub}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Radar status */}
              <div className={`w-full px-3 py-2 rounded-lg text-[9px] font-mono flex items-center gap-2 transition-colors ${anomalyNode ? "bg-red-500/8 border border-red-500/25" : "bg-surface/40 border border-[#7C3AED]/20"
                }`}>
                <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${anomalyNode ? "bg-red-500 animate-pulse" : "bg-emerald-400 animate-pulse"
                  }`} />
                <span className={anomalyNode ? "text-red-400" : "text-[#C084FC]"}>
                  {currentScanStatus}
                </span>
              </div>
            </div>

            {/* What NETiQ extracts — summary cards */}
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Node / Cell IP", detail: "10.10.4.51 → Cell-1042", color: "#7C3AED", icon: Network },
                { label: "Core & MME IP", detail: "10.20.1.1 → UPF-Node2", color: "#BE185D", icon: Cpu },
                { label: "Hardware / Board", detail: "BBU5900 + RRU3959", color: "#2563EB", icon: Database },
                { label: "Stitched Path", detail: "RAN→MW→WL→Core: 4 hops", color: "#059669", icon: Activity },
              ].map((card, i) => {
                const Icon = card.icon;
                return (
                  <div
                    key={i}
                    className="p-3 rounded-xl border transition-all"
                    style={{ borderColor: `${card.color}25`, backgroundColor: `${card.color}07` }}
                  >
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <Icon className="h-3 w-3" style={{ color: card.color }} />
                      <span className="text-[9px] font-mono font-bold" style={{ color: card.color }}>{card.label}</span>
                    </div>
                    <p className="text-[9px] font-mono text-muted-foreground leading-relaxed">{card.detail}</p>
                  </div>
                );
              })}
            </div>

            {/* Domain legend */}
            <div className="grid grid-cols-3 gap-1.5">
              {domainNodes.map(n => (
                <div key={n.id} className="flex items-center gap-1.5 text-[9px] font-mono text-muted-foreground">
                  <span className="h-2 w-2 rounded-full shrink-0" style={{ backgroundColor: n.color }} />
                  {n.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Platform Capabilities Hub */}
      <section id="capabilities" className="mt-24">

        <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">Platform Capabilities</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Assuring network <span className="text-gradient">data integrity</span>.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
          NETIQ aggregates, parses, and validates data across multiple layers of your network to establish a reliable source of truth.
        </p>
        {/* Controls Row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8 pb-3 border-b border-border/20">
          <p className="text-xs text-muted-foreground">Select a capability below or enable auto-cycle to inspect the live audit plane.</p>
          <button
            onClick={() => setAutoPlayTabs(!autoPlayTabs)}
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full border border-border/60 hover:border-primary hover:text-primary transition-all cursor-pointer bg-foreground/[0.02] shadow-sm select-none"
          >
            {autoPlayTabs ? (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED] animate-pulse" />
                Auto-Cycle: Active
              </>
            ) : (
              <>
                <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40" />
                Auto-Cycle: Paused
              </>
            )}
          </button>
        </div>

        {/* Tab Controls */}
        <div className="mt-8 grid lg:grid-cols-[1.1fr_1.9fr] gap-8 items-stretch">
          <div className="flex flex-col gap-2 bg-foreground/5 p-2 rounded-2xl border border-border/40 h-fit">
            {capabilities.map((c) => {
              const isActive = activeTab === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveTab(c.id);
                    setAutoPlayTabs(false); // Pause auto-cycling on manual user selection
                  }}
                  className={`w-full flex flex-col gap-1 p-3 rounded-xl text-left transition-all cursor-pointer border relative overflow-hidden ${isActive
                    ? "bg-[#7C3AED]/10 border-[#7C3AED]/30 text-foreground shadow-sm shadow-[#7C3AED]/5"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${isActive ? "bg-[#7C3AED] text-white" : "bg-foreground/5 text-muted-foreground"
                      }`}>
                      <c.icon className="h-4.5 w-4.5 shrink-0" />
                    </div>
                    <div>
                      <span className="text-[9px] font-bold uppercase tracking-wider block opacity-75">{c.subtitle}</span>
                      <span className="text-xs font-semibold uppercase tracking-wider block mt-0.5 leading-none">{c.title}</span>
                    </div>
                  </div>
                  {/* Progress bar for auto-cycling */}
                  {isActive && autoPlayTabs && (
                    <motion.div
                      key={c.id}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 7, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-0.5 bg-[#7C3AED]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Cap Card */}
          <GlassCard p-8 className="min-h-[420px] flex flex-col justify-between hover:shadow-[0_0_30px_rgba(124,58,237,0.08)] transition-all relative overflow-hidden" gradientBorder hoverGlow={false}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#7C3AED]/10 to-transparent rounded-bl-full pointer-events-none" />

            <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 items-stretch h-full">
              {/* Left Side: Copy and Details */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#7C3AED]/10 text-[#7C3AED] shadow-[0_0_15px_rgba(124,58,237,0.15)]">
                      <CapIcon className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#7C3AED]">{activeCapability.subtitle}</span>
                      <h3 className="font-display text-lg font-bold leading-tight mt-0.5">{activeCapability.title}</h3>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-light">
                    {activeCapability.desc}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-foreground">Capabilities Include:</h4>
                    <ul className="space-y-1.5">
                      {activeCapability.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-[#7C3AED] shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-border/40 flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#7C3AED]/15 text-[#7C3AED] border border-[#7C3AED]/20 px-2.5 py-0.5 text-[10px] font-mono font-semibold">
                    Audit Active
                  </span>
                  <span className="rounded-full bg-foreground/5 border border-border/40 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                    Automatic Run
                  </span>
                </div>
              </div>

              {/* Right Side: Simulated Live Telemetry Sandbox */}
              <div className="bg-background/40 border border-border/50 rounded-2xl p-5 relative overflow-hidden flex flex-col justify-between min-h-[260px] font-mono text-[11px] text-muted-foreground shadow-inner">
                <div className="flex items-center justify-between border-b border-border/20 pb-2 mb-3">
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-[#7C3AED]">Audit Sandbox</span>
                  <span className="animate-pulse flex items-center gap-1 text-emerald-400 font-bold text-[9px]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    RUNNING
                  </span>
                </div>

                <div className="flex-grow flex flex-col justify-center">
                  <CapabilitySandbox capabilityId={activeCapability.id} />
                </div>

                <div className="text-[8px] uppercase tracking-wider text-muted-foreground/50 border-t border-border/10 pt-2 mt-3 flex items-center justify-between">
                  <span>NETIQ Core</span>
                  <span>Simulation</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* ── INTERACTIVE PIPELINE SANDBOX ── */}


      {/* Value Delivered & Outcomes */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#7C3AED]">Business Outcomes</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Value Delivered. <span className="text-gradient">Guaranteed integrity</span>.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
          By deploying an automated external verification loop, NETIQ establishes a validated base for operations and growth.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          {outcomes.map((o) => (
            <GlassCard key={o.title} gradientBorder className="p-6">
              <h3 className="font-display text-base font-bold text-[#7C3AED]">{o.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{o.desc}</p>
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
              Talk to our team about running a NETIQ deployment on your network - we&apos;ll show you the discrepancies your current systems are missing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/demo" search={{ product: "netiq" }}><BrandButton>Request NETIQ Demo</BrandButton></Link>
              <Link to="/" hash="amc"><BrandButton variant="secondary">Ask About AMC</BrandButton></Link>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}

// ---------------------------------------------------------
// Live Audit Sandbox Components for each Capability
// ---------------------------------------------------------
function CapabilitySandbox({ capabilityId }: { capabilityId: string }) {
  if (capabilityId === "visibility") {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-3">
        <div className="px-3 py-1.5 rounded-lg border border-[#7C3AED]/20 bg-[#7C3AED]/5 text-[#7C3AED] text-[10px] font-bold">
          Controller_Node_01
        </div>
        <div className="h-6 w-0.5 bg-gradient-to-b from-[#7C3AED]/80 to-transparent relative">
          <motion.div
            animate={{ y: [0, 24], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-[#7C3AED]"
          />
        </div>
        <div className="flex gap-3">
          {["Cell_Site_A", "Cell_Site_B", "Cell_Site_C"].map((cell, idx) => (
            <motion.div
              key={cell}
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 2, delay: idx * 0.3 }}
              className="px-2 py-1 rounded bg-foreground/5 border border-border/60 text-[9px] text-foreground/80"
            >
              {cell}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (capabilityId === "audit") {
    return (
      <div className="space-y-2 py-1 relative">
        <motion.div
          animate={{ top: ["0%", "100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent shadow-[0_0_8px_#7C3AED] pointer-events-none"
          style={{ zIndex: 10 }}
        />
        {[
          { name: "Nomenclature Compliance", status: "OK", color: "text-emerald-400" },
          { name: "Frequency Grid Alignment", status: "OK", color: "text-emerald-400" },
          { name: "PCI Collision Conflict Check", status: "1 Drift Flagged", color: "text-amber-500 font-bold" },
          { name: "Latitude/Longitude Deviation", status: "OK", color: "text-emerald-400" }
        ].map((check, idx) => (
          <div key={idx} className="flex justify-between items-center text-[10px] border-b border-border/10 pb-1.5">
            <span className="text-muted-foreground">{check.name}</span>
            <span className={check.color}>{check.status}</span>
          </div>
        ))}
      </div>
    );
  }

  if (capabilityId === "inventory") {
    return <InventorySandbox />;
  }

  if (capabilityId === "correlation") {
    return (
      <div className="flex flex-col gap-3 py-3 items-center justify-center">
        <div className="flex gap-2 items-center justify-between w-full max-w-[220px]">
          <div className="px-2 py-1 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded text-[9px] text-[#7C3AED] font-semibold">
            Microwave Hop
          </div>
          <div className="grow border-t border-dashed border-border relative h-0.5">
            <motion.div
              animate={{ left: ["0%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
              className="absolute -top-1 h-2 w-2 rounded-full bg-[#7C3AED] filter blur-[1px]"
            />
          </div>
          <div className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-[9px] text-blue-400 font-semibold">
            VLAN Tunnel
          </div>
        </div>
        <div className="border-l border-dashed border-border h-4 relative w-0.5">
          <motion.div
            animate={{ top: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="absolute -left-1 h-2 w-2 rounded-full bg-blue-400 filter blur-[1px]"
          />
        </div>
        <div className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[9px] text-emerald-400 font-semibold w-full max-w-[220px] text-center">
          Physical Port mapping: OK
        </div>
      </div>
    );
  }

  if (capabilityId === "intelligence") {
    return <IntelligenceSandbox />;
  }

  if (capabilityId === "analytics") {
    return (
      <div className="space-y-3 py-1">
        <div className="flex justify-between items-center text-[10px]">
          <span>Configuration Score</span>
          <span className="text-emerald-400 font-bold">98.4%</span>
        </div>
        <div className="h-16 w-full bg-foreground/[0.02] border border-border/40 rounded-xl p-2 relative flex items-end overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#7C3AED]/5 to-transparent" />
          <div className="flex w-full items-end justify-between h-full gap-1">
            {[34, 48, 42, 60, 55, 78, 70, 94, 88, 98].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className="bg-[#7C3AED]/70 w-full rounded-t-sm"
              />
            ))}
          </div>
        </div>
        <div className="text-[8px] text-muted-foreground flex justify-between">
          <span>30 days ago</span>
          <span>Today</span>
        </div>
      </div>
    );
  }

  if (capabilityId === "automation") {
    return <AutomationSandbox />;
  }

  return (
    <div className="flex items-center justify-center py-6 text-xs text-muted-foreground">
      No diagnostic feed available.
    </div>
  );
}

function InventorySandbox() {
  const [syncState, setSyncState] = useState<"idle" | "syncing" | "done">("idle");

  const triggerSync = () => {
    if (syncState !== "idle") return;
    setSyncState("syncing");
    setTimeout(() => {
      setSyncState("done");
      setTimeout(() => {
        setSyncState("idle");
      }, 3000);
    }, 2000);
  };

  return (
    <div className="space-y-4 py-2">
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="bg-foreground/5 border border-border/40 p-2 rounded">
          <span className="text-[8px] text-muted-foreground uppercase">Live NMS Nodes</span>
          <span className="block font-bold text-foreground mt-0.5">1,524</span>
        </div>
        <div className="bg-foreground/5 border border-border/40 p-2 rounded">
          <span className="text-[8px] text-muted-foreground uppercase">Asset Registry</span>
          <span className="block font-bold mt-0.5 text-amber-500">1,520 (4 Drifts)</span>
        </div>
      </div>
      <button
        onClick={triggerSync}
        disabled={syncState === "syncing"}
        className="w-full py-1.5 px-3 rounded-lg border border-[#7C3AED]/30 bg-[#7C3AED]/10 text-[#7C3AED] hover:bg-[#7C3AED]/20 transition-all font-mono text-[10px] font-semibold flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
      >
        {syncState === "idle" && (
          <>
            <RefreshCw className="h-3 w-3 animate-pulse" /> Reconcile DB Records
          </>
        )}
        {syncState === "syncing" && (
          <>
            <RefreshCw className="h-3 w-3 animate-spin" /> Aligning Database...
          </>
        )}
        {syncState === "done" && (
          <>
            <CheckCircle2 className="h-3 w-3 text-emerald-400" /> Database Synced!
          </>
        )}
      </button>
    </div>
  );
}

function IntelligenceSandbox() {
  const [showJson, setShowJson] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowJson((s) => !s);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-3 font-mono text-[9px] leading-relaxed">
      <div className="flex items-center justify-between text-[10px] border-b border-border/15 pb-1">
        <span>Dialect: {showJson ? "Canonical JSON" : "Nokia Core XML"}</span>
        <span className="text-[#7C3AED] animate-pulse font-bold text-[8px]">â— PARSING</span>
      </div>
      <div className="min-h-[90px] relative">
        <AnimatePresence mode="wait">
          {!showJson ? (
            <motion.pre
              key="xml"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-red-400/80 bg-black/40 p-2 rounded border border-border/20 max-h-[90px] overflow-y-auto w-full absolute"
            >
              {`<cell id="CELL_301">
  <earfcn value="1845"/>
  <pci val="412"/>
</cell>`}
            </motion.pre>
          ) : (
            <motion.pre
              key="json"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className="text-emerald-400/80 bg-black/40 p-2 rounded border border-border/20 max-h-[90px] overflow-y-auto w-full absolute"
            >
              {`{
  "nodeId": "CELL_301",
  "frequencyMhz": 1845.0,
  "physicalCellId": 412
}`}
            </motion.pre>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function AutomationSandbox() {
  const [status, setStatus] = useState<"idle" | "dispatching" | "success">("idle");

  const executePatch = () => {
    if (status !== "idle") return;
    setStatus("dispatching");
    setTimeout(() => {
      setStatus("success");
      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    }, 2000);
  };

  return (
    <div className="space-y-3 py-1 text-[10px]">
      <pre className="bg-black/40 border border-border/20 rounded p-2 text-slate-300 select-all overflow-x-auto text-[8px] leading-relaxed">
        {`POST /api/v1/nms/remediate
{
  "nodeId": "Site-401",
  "pci": 218
}`}
      </pre>
      <button
        onClick={executePatch}
        disabled={status === "dispatching"}
        className="w-full py-1.5 px-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 transition-all font-mono text-[10px] font-semibold flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-50"
      >
        {status === "idle" && (
          <>
            <Play className="h-3 w-3" /> Execute Remediation Patch
          </>
        )}
        {status === "dispatching" && (
          <>
            <RefreshCw className="h-3 w-3 animate-spin" /> Provisioning NMS Update...
          </>
        )}
        {status === "success" && (
          <>
            <CheckCircle2 className="h-3 w-3 text-emerald-400 animate-bounce" /> Remediation Applied!
          </>
        )}
      </button>
    </div>
  );
}


