import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { Counter } from "@/components/Counter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TowerControl as Tower, BarChart3, Upload, Activity, RotateCcw, 
  Sparkles, CheckCircle2, Users, ArrowRight, ShieldCheck, Database, Layout,
  FileText, ClipboardList, Camera, RefreshCw, XCircle, PauseCircle, PlayCircle,
  Warehouse, ArrowLeftRight, HelpCircle, HardDrive, Cpu, ChevronRight, Check, Play, Pause, AlertTriangle,
  Download, Table as TableIcon
} from "lucide-react";

export const Route = createFileRoute("/products/netra")({
  head: () => ({
    meta: [
      { title: "NETRA - Network Planning & Deployment Automation | Avendum" },
      {
        name: "description",
        content:
          "NETRA replaces fragmented Excel-based microwave planning with a centralized, role-aware platform - tracking every plan across its complete lifecycle.",
      },
    ],
  }),
  component: NetraPage,
});

const capabilities = [
  {
    icon: Upload,
    title: "Multi-Rule Plan Validation",
    desc: "Planners upload microwave designs directly. NETRA runs multi-rule check engines - verifying Pop IDs, nominal quarter coordinates, hop distance bounds, and link-type classifications instantly.",
    tags: ["Nominal Validation", "Pop Presence Check", "Coordinate Bounds"]
  },
  {
    icon: BarChart3,
    title: "Ageing & Bottleneck Analytics",
    desc: "Automated age-bucket categorization helps managers identify pending tasks. Views are scoped dynamically: region leads see bottlenecks on a larger scale, while partner teams see only active assignments.",
    tags: ["Ageing Buckets", "Team SLA Alerting", "Ops Bottlenecks"]
  },
  {
    icon: RotateCcw,
    title: "Coordinated Dual-Site Dismantling",
    desc: "Manages simultaneous dismantling for near-end and far-end microwave sites. Enforces pre-dismantle surveys, safety sign-offs, safe de-installation, and warehouse inventory logging.",
    tags: ["Near-End / Far-End Coordination", "Survey Readiness", "Warehouse Listing"]
  },
  {
    icon: Activity,
    title: "Traffic Shift Gatekeepers",
    desc: "Enforces strict technical validation (IP ping readiness, subnet checking, technology compatibility) before live traffic is redirected, minimizing link activation fallouts.",
    tags: ["IP Verification", "Tech Checking", "Rollback Gates"]
  }
];

const roles = [
  { name: "MW Planner", desc: "Uploads design plans, runs coordinate checks, signs off designs, manages holds and cancellations." },
  { name: "Region Deployment", desc: "Coordinates material gathering, surveys site readiness, assigns installations to local partners." },
  { name: "I&C Partner", desc: "Performs site installation or dismantling, uploads physical deployment proof and system inputs." },
  { name: "AT Desk (MS Partner)", desc: "Validates physical and software acceptance test stages, reviewing logs and checklist images." },
  { name: "Region Operations", desc: "Gatekeeper for traffic shifting. Runs BGP/IP validation and handles final service activation." },
  { name: "Warehouse Manager", desc: "Performs intake audits for dismantled hardware, verifying serials against the decommissioning sheet." }
];

const deploymentSteps = [
  {
    step: "01",
    role: "MW Planner",
    title: "Upload & Verify",
    desc: "MW plan uploaded via Excel. System verifies coordinate math, nominal Pop ID matches, and hop distances.",
    icon: Upload,
    badge: "Rules Check"
  },
  {
    step: "02",
    role: "Deployment Team",
    title: "Material & Prep",
    desc: "Deployment team gathers technical specifications, audits material lists, and assigns task to an Installation partner.",
    icon: ClipboardList,
    badge: "Material Prep"
  },
  {
    step: "03",
    role: "I&C Partner",
    title: "Install & Configure",
    desc: "I&C team conducts tower installation, configures IP interfaces, and uploads on-site installation proof.",
    icon: Tower,
    badge: "Commissioning"
  },
  {
    step: "04",
    role: "MS Partner (AT)",
    title: "Acceptance Test",
    desc: "AT desk validates physical installations (checking uploaded site images) and soft validations (ping tests, interface state logs).",
    icon: ShieldCheck,
    badge: "AT Sign-Off"
  },
  {
    step: "05",
    role: "Region Ops",
    title: "Traffic Shifting Gate",
    desc: "Operations team checks IP routes and technology configuration. If verified, traffic shifts to new link. Otherwise, returned to Planner.",
    icon: ArrowLeftRight,
    badge: "Operations"
  }
];

const shiftSteps = [
  {
    step: "01",
    role: "Region Operations",
    title: "Configuration Check",
    desc: "Ingests the configured plan details, verifying IP allocations and target technology bindings.",
    icon: ShieldCheck
  },
  {
    step: "02",
    role: "Validation Gate",
    title: "Decision Loop",
    desc: "If checks pass, approved for Traffic Shift. If checks fail, plan is automatically returned to the MW Planner with logs.",
    icon: CheckCircle2
  },
  {
    step: "03",
    role: "Region Operations",
    title: "Traffic Shift / Hold / Cancel",
    desc: "Ops triggers live traffic cutover. If issues arise, Ops can place the plan on Hold or execute complete Plan Cancellation.",
    icon: Activity
  }
];

const mwKPIs = {
  slaRate: 99.5,
  validationRate: 100.0,
  ageing: [
    { label: "0–30 Days", val: 42, color: "var(--primary)" },
    { label: "31–90 Days", val: 41, color: "#0F9F6E" },
    { label: " >180 Days", val: 17, color: "#EF4444" },
  ],
  status: [
    { label: "Active Commissioned", val: 74, color: "var(--primary)" },
    { label: "Optimized Upgrade", val: 10, color: "#0F9F6E" },
    { label: "Active In Progress", val: 39, color: "var(--accent)" },
  ],
  regions: [
    { name: "Metropolitan Region", val: 91 },
    { name: "Central Region", val: 89 },
    { name: "Coastal Zone", val: 76 },
  ]
};

const ubrKPIs = {
  slaRate: 98.8,
  validationRate: 100.0,
  ageing: [
    { label: "0–30 Days", val: 55, color: "var(--primary)" },
    { label: "31–90 Days", val: 33, color: "#0F9F6E" },
    { label: " >180 Days", val: 12, color: "#EF4444" },
  ],
  status: [
    { label: "Active Commissioned", val: 68, color: "var(--primary)" },
    { label: "Optimized Upgrade", val: 18, color: "#0F9F6E" },
    { label: "Active In Progress", val: 24, color: "var(--accent)" },
  ],
  regions: [
    { name: "Metropolitan Region", val: 87 },
    { name: "Central Region", val: 82 },
    { name: "Coastal Zone", val: 65 },
  ]
};

const workflowSteps = {
  deployment: [
    {
      id: "planning",
      label: "Planning",
      role: "MW Planner",
      badge: "Validate & Release",
      badgeColor: "#1A6FD4",
      title: "Excel Plan Validation",
      desc: "Planners upload planning sheets. NETRA checks Coordinate limits (VI-2), POP ID matching (VI-6), and Link distance math (VI-25).",
      checkpoints: ["Coordinate Bounds check", "Pop existence check", "Hop distance math"],
      logs: [
        { cls: "text-muted-foreground", txt: "Initializing NETRA Validation Engine v4.8..." },
        { cls: "text-cyan-400", txt: "Reading file: mw_plan_release.xlsx" },
        { cls: "text-purple-400", txt: "Running VI-2 Coordinate bounds check... PASS" },
        { cls: "text-purple-400", txt: "Running VI-6 POP ID registry check... MATCHED" },
        { cls: "text-emerald-400", txt: "✓ Hop distance math: 4.21 km validated" }
      ]
    },
    {
      id: "deployment",
      label: "Deployment",
      role: "Region Deployment Team",
      badge: "Material Prep",
      badgeColor: "#F59E0B",
      title: "Task Allocation & Materials",
      desc: "Deployment team reviews material requirements, maps inventory assets, and allocates installation tasks to partners.",
      checkpoints: ["Material availability check", "Partner Allocation", "Survey scheduling"],
      logs: [
        { cls: "text-muted-foreground", txt: "Loading material allocation scheduler..." },
        { cls: "text-cyan-400", txt: "ODU Microwave unit allocated: SN-88429B" },
        { cls: "text-purple-400", txt: "Mounting hardware allocated: PO-33104" },
        { cls: "text-emerald-400", txt: "✓ Field installation dispatched to MS Partner Ltd." }
      ]
    },
    {
      id: "ic_partner",
      label: "I&C Partner",
      role: "Installation Partner",
      badge: "Commissioning",
      badgeColor: "#10B981",
      title: "On-Site Installation",
      desc: "Partner engineers complete hardware mountings, antenna alignments, and link grounding on the tower site.",
      checkpoints: ["Antenna mount securement", "Link grounding strap tightness", "ODU/IDU configurations"],
      logs: [
        { cls: "text-muted-foreground", txt: "Establishing connection with tower site..." },
        { cls: "text-cyan-400", txt: "Antenna securement brackets bolted... OK" },
        { cls: "text-purple-400", txt: "Aligning link azimuth... 98.8% accuracy" },
        { cls: "text-emerald-400", txt: "✓ Link locked at 7.2 GHz. Carrier active." }
      ]
    },
    {
      id: "at_desk",
      label: "AT Desk",
      role: "MS Partner Team",
      badge: "Acceptance Test",
      badgeColor: "#7C3AED",
      title: "Verification & Sign-off",
      desc: "AT desk conducts Physical AT (auditing site photos) and Soft AT (verifying loopback interface configuration ping traces).",
      checkpoints: ["Physical photo alignment audit", "Soft loopback ping checks", "Subnet state validation"],
      logs: [
        { cls: "text-muted-foreground", txt: "Auditing site installation proof images..." },
        { cls: "text-cyan-400", txt: "Mount & grounding photos... APPROVED" },
        { cls: "text-purple-400", txt: "Pinging loopback interface 10.42.12.89..." },
        { cls: "text-emerald-400", txt: "✓ Pings successful: 0% loss, 12ms avg. SIGNED OFF" }
      ]
    },
    {
      id: "operations",
      label: "Operations",
      role: "Region Operations",
      badge: "Traffic Shift Gate",
      badgeColor: "#BE185D",
      title: "Live Circuit Cutover",
      desc: "Operations verify BGP routing states, CSR port states, and release traffic shifts, with active Hold / Cancellation controls.",
      checkpoints: ["BGP Peer Status verified", "CSR Gate readiness", "Live Traffic redirected"],
      logs: [
        { cls: "text-muted-foreground", txt: "Releasing traffic shifting gate locks..." },
        { cls: "text-cyan-400", txt: "Injecting BGP peer routes to Router-PE9..." },
        { cls: "text-purple-400", txt: "Shutting down old hop interface... DONE" },
        { cls: "text-emerald-400", txt: "✓ Link cutover complete. Active Traffic: 74% Load" }
      ]
    }
  ],
  shifting: [
    {
      id: "config_check",
      label: "Config Check",
      role: "Region Operations",
      badge: "IP Verify",
      badgeColor: "#1A6FD4",
      title: "IP & Interface Verification",
      desc: "Region Operations ingests configured plan parameters, checks IP address bindings, port allocation, and technology compatibility.",
      checkpoints: ["IP allocation check", "Port mapping validation", "Tech compatibility check"],
      logs: [
        { cls: "text-muted-foreground", txt: "Ingesting router interface profiles..." },
        { cls: "text-cyan-400", txt: "VLAN Tag verified: VLAN 102 active" },
        { cls: "text-purple-400", txt: "IP interface check: 10.42.12.89/30 OK" },
        { cls: "text-emerald-400", txt: "✓ Port mode check: 9000 Jumbo frames verified" }
      ]
    },
    {
      id: "validation_gate",
      label: "Validation Gate",
      role: "Validation Engine",
      badge: "Decision Loop",
      badgeColor: "#7C3AED",
      title: "BGP Peering & Performance Gate",
      desc: "Audits network latency baselines, BGP neighbor rules, and VLAN tags to ensure safe traffic cutover.",
      checkpoints: ["BGP Neighbor status", "VLAN tag matching", "Latency baseline verification"],
      logs: [
        { cls: "text-muted-foreground", txt: "Pinging BGP peering nodes..." },
        { cls: "text-cyan-400", txt: "BGP Neighbor state: ESTABLISHED" },
        { cls: "text-purple-400", txt: "Latency baseline check: 12ms (<15ms limit)" },
        { cls: "text-emerald-400", txt: "✓ Peering rules check complete. Decision: PASS" }
      ]
    },
    {
      id: "shift_gate",
      label: "Shift Gate",
      role: "Region Operations",
      badge: "Live Cutover",
      badgeColor: "#BE185D",
      title: "Traffic Redirection & Shift",
      desc: "Triggers the live traffic shift. Enables operators to redirect active data packets, monitor load, or trigger Hold / Cancel rollbacks.",
      checkpoints: ["BGP route injection", "Traffic redirection active", "Old hop de-activation"],
      logs: [
        { cls: "text-muted-foreground", txt: "Executing BGP route injection..." },
        { cls: "text-cyan-400", txt: "Data packet diversion in progress..." },
        { cls: "text-purple-400", txt: "Old backhaul link decommissioned." },
        { cls: "text-emerald-400", txt: "✓ Traffic successfully shifted. Live cutover OK." }
      ]
    }
  ],
  dismantle: [
    {
      id: "dismantle_upload",
      label: "Dismantle Upload",
      role: "MW Planner",
      badge: "Excel Upload",
      badgeColor: "#1A6FD4",
      title: "Dual-Site Plan Ingest",
      desc: "MW Planner uploads decommissioning plan. System maps coordinate geometry for near-end and far-end tower hops.",
      checkpoints: ["Near-end site matching", "Far-end site matching", "Dismantle stencils check"],
      logs: [
        { cls: "text-muted-foreground", txt: "Parsing dismantle_hop_q3.xlsx..." },
        { cls: "text-cyan-400", txt: "Near-end site matched: Site-DL-RAN-901" },
        { cls: "text-purple-400", txt: "Far-end site matched: Site-DL-RAN-902" },
        { cls: "text-emerald-400", txt: "✓ Dismantling stencils validated against registry" }
      ]
    },
    {
      id: "site_surveys",
      label: "Site Surveys",
      role: "Deployment Team",
      badge: "Safety Survey",
      badgeColor: "#F59E0B",
      title: "Safety Audits & Dispatch",
      desc: "Field engineers audit safety readiness at both locations, verify power shutdowns, and authorize I&C dismantling.",
      checkpoints: ["Structural safety audit", "Power shutdown verify", "Field partner dispatch"],
      logs: [
        { cls: "text-muted-foreground", txt: "Running dual-site safety checklist audits..." },
        { cls: "text-cyan-400", txt: "Tower structural safety check... PASSED" },
        { cls: "text-purple-400", txt: "Power grid shutdown confirmed... READY" },
        { cls: "text-emerald-400", txt: "✓ Dispatch order released to decommissioning crew" }
      ]
    },
    {
      id: "dismantling_action",
      label: "Dismantling",
      role: "I&C Partner",
      badge: "De-installation",
      badgeColor: "#10B981",
      title: "On-Site Hardware Removal",
      desc: "I&C partner de-installs antennas, radio units (ODU/IDU), and grounding straps from both towers, recording serial tags.",
      checkpoints: ["ODU de-mounting", "Grounding kit removal", "Serial tag scanning"],
      logs: [
        { cls: "text-muted-foreground", txt: "De-installation active on tower sites..." },
        { cls: "text-cyan-400", txt: "Tower A ODU microwave unit unmounted." },
        { cls: "text-purple-400", txt: "Tower B ODU microwave unit unmounted." },
        { cls: "text-emerald-400", txt: "✓ Serial numbers logged: SN-88429B & SN-88430B" }
      ]
    },
    {
      id: "warehouse_intake",
      label: "Warehouse Audit",
      role: "Warehouse Manager",
      badge: "Inventory Audit",
      badgeColor: "#7C3AED",
      title: "Serial Reconciliation",
      desc: "Decommissioned hardware arrives at the central warehouse where serial numbers are scanned and reconciled against plan records.",
      checkpoints: ["Serials verification", "Master ledger updates", "Decommissioning sign-off"],
      logs: [
        { cls: "text-muted-foreground", txt: "Awaiting hardware transit delivery..." },
        { cls: "text-cyan-400", txt: "Scanning hardware serial SN-88429B... MATCHED" },
        { cls: "text-purple-400", txt: "Scanning hardware serial SN-88430B... MATCHED" },
        { cls: "text-emerald-400", txt: "✓ Inventory reconciliation complete. Ledger updated." }
      ]
    }
  ]
};

const scannerConfigs = {
  deployment: {
    title: "File Ingestion Scan",
    file: "mw_plan_release.xlsx",
    rules: ["VI-2 Coordinate limits check", "VI-6 POP ID database match", "VI-25 Hop distance limit"]
  },
  shifting: {
    title: "Router Config Ingest",
    file: "csr_config_parameters.xml",
    rules: ["IP allocation check", "Port mapping validation", "Tech compatibility check"]
  },
  dismantle: {
    title: "Decom Hop List Scan",
    file: "dismantle_hop_q3.xlsx",
    rules: ["Near-end site matching", "Far-end site matching", "Dismantle stencils check"]
  }
};

const excelData = {
  deployment: {
    sheet1: {
      title: "MW Link Status",
      headers: ["POP ID", "Nominal Lat", "Nominal Long", "Hop Dist", "I&C Team", "AT Audit", "Status"],
      rows: [
        ["DL-RAN-901", "28.5241", "77.2684", "4.21 km", "Partner_A", "PASS", "Commissioned"],
        ["DL-RAN-902", "28.5249", "77.2690", "3.85 km", "Partner_A", "PASS", "Commissioned"],
        ["DL-RAN-903", "28.5262", "77.2710", "5.10 km", "Partner_B", "PASS", "Commissioned"],
        ["DL-RAN-904", "28.5270", "77.2725", "4.05 km", "Partner_B", "PASS", "Commissioned"],
        ["DL-RAN-905", "28.5285", "77.2750", "4.92 km", "Partner_C", "PASS", "ACTIVE"]
      ]
    },
    sheet2: {
      title: "Checklist Audits",
      headers: ["Checklist Item", "Assigned Role", "SLA Threshold", "Status"],
      rows: [
        ["Pop Existence Check", "MW Planner", "Instant", "VERIFIED"],
        ["Nominal Coord Check", "MW Planner", "Instant", "VERIFIED"],
        ["Material Allocation", "Deployment Lead", "24 Hours", "COMPLETED"],
        ["On-Site Install Proof", "I&C Partner", "48 Hours", "SUBMITTED"],
        ["Physical AT Checklist", "AT Desk", "12 Hours", "AUDITED"],
        ["Soft Loopback Pings", "AT Desk", "12 Hours", "AUDITED"]
      ]
    }
  },
  shifting: {
    sheet1: {
      title: "Cutover Ledger",
      headers: ["Interface", "Target VLAN", "Allocated IP", "Peer Router", "Latency", "Gate Status"],
      rows: [
        ["TenGigE0/0/0/1", "VLAN-102", "10.42.12.89/30", "Router-PE9", "12ms", "ACTIVE"],
        ["TenGigE0/0/0/2", "VLAN-104", "10.42.12.93/30", "Router-PE10", "11ms", "ACTIVE"],
        ["TenGigE0/0/0/3", "VLAN-108", "10.42.12.97/30", "Router-PE12", "13ms", "ACTIVE"]
      ]
    },
    sheet2: {
      title: "BGP Routing",
      headers: ["Routing Parameter", "Config Value", "BGP Peer State", "Check Time"],
      rows: [
        ["BGP Neighbor Group", "IBGP-PEER", "ESTABLISHED", "14:15:22"],
        ["VLAN Tag Matching", "VLAN-102/104", "COMPLIANT", "14:15:23"],
        ["MTU Frame size", "9000 (Jumbo)", "VERIFIED", "14:15:23"],
        ["IP Route Cost", "Metric 10", "OPTIMIZED", "14:15:24"]
      ]
    }
  },
  dismantle: {
    sheet1: {
      title: "Decom Assets",
      headers: ["Hop ID", "Near-End Site", "Far-End Site", "Serial No", "Intake Audit", "Ledger Status"],
      rows: [
        ["MW-HOP-442", "Site-DL-901", "Site-DL-902", "SN-88429B", "RECONCILED", "UPDATED"],
        ["MW-HOP-443", "Site-DL-902", "Site-DL-903", "SN-88430B", "RECONCILED", "UPDATED"],
        ["MW-HOP-445", "Site-DL-905", "Site-DL-906", "SN-88435B", "RECONCILED", "UPDATED"],
        ["MW-HOP-448", "Site-DL-910", "Site-DL-911", "SN-88442B", "RECONCILED", "UPDATED"]
      ]
    },
    sheet2: {
      title: "Whse Reconciled",
      headers: ["Reconciliation Audit", "Item Scanned", "Storage Section", "Verified By"],
      rows: [
        ["Antenna Mount A", "Bracket-2.4m", "Rack-A3-Shelve2", "WhseManager"],
        ["Outdoor Unit A", "ODU-E-Band", "Rack-B1-Box12", "WhseManager"],
        ["Antenna Mount B", "Bracket-2.4m", "Rack-A3-Shelve3", "WhseManager"],
        ["Outdoor Unit B", "ODU-E-Band", "Rack-B1-Box13", "WhseManager"]
      ]
    }
  }
};

function NetraPage() {
  const [dbType, setDbType] = useState<"MW" | "UBR">("MW");
  const [activeWorkflow, setActiveWorkflow] = useState<"deployment" | "shifting" | "dismantle">("deployment");
  
  // Sandbox simulator states
  const [netraPhase, setNetraPhase] = useState<number>(0);
  const [subStep, setSubStep] = useState<number>(0);
  const [isPlayingSandbox, setIsPlayingSandbox] = useState<boolean>(true);
  const [animationSpeed, setAnimationSpeed] = useState<number>(1);
  const [opsStatus, setOpsStatus] = useState<"SHIFTED" | "HELD" | "CANCELLED">("SHIFTED");

  // Excel Report States
  const [rightPanelTab, setRightPanelTab] = useState<"hud" | "excel">("hud");
  const [excelSheet, setExcelSheet] = useState<"sheet1" | "sheet2">("sheet1");
  const [activeCell, setActiveCell] = useState<{ r: number; c: number } | null>(null);
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportProgress, setExportProgress] = useState<number>(0);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const kpiData = dbType === "MW" ? mwKPIs : ubrKPIs;

  const activeSteps = workflowSteps[activeWorkflow];
  const currentStep = activeSteps[netraPhase] || activeSteps[0];

  // Auto-advance NETRA sandbox animation phases based on active steps
  useEffect(() => {
    if (!isPlayingSandbox) return;

    const intervalTime = 2500 / animationSpeed;
    const interval = setInterval(() => {
      setSubStep((prev) => {
        if (prev < 3) {
          return prev + 1;
        } else {
          setNetraPhase((p) => (p + 1) % activeSteps.length);
          return 0;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isPlayingSandbox, animationSpeed, activeSteps]);

  // Reset phase when workflow selection changes
  useEffect(() => {
    setNetraPhase(0);
    setSubStep(0);
    setOpsStatus("SHIFTED");
    setRightPanelTab("hud");
    setExcelSheet("sheet1");
    setActiveCell(null);
    setIsExporting(false);
    setExportProgress(0);
    setToastMsg(null);
  }, [activeWorkflow]);

  // Auto-switch to Excel tab on the final step of any workflow
  useEffect(() => {
    const isFinalStep = netraPhase === activeSteps.length - 1;
    if (isFinalStep) {
      setRightPanelTab("excel");
    } else {
      setRightPanelTab("hud");
    }
  }, [netraPhase, activeSteps.length]);

  // Handle Toast Notifications Timeout
  useEffect(() => {
    if (toastMsg) {
      const timer = setTimeout(() => {
        setToastMsg(null);
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMsg]);

  const triggerExport = () => {
    setIsExporting(true);
    setExportProgress(0);
    const interval = setInterval(() => {
      setExportProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsExporting(false);
            setToastMsg(`Workbook: NETRA_${activeWorkflow}_report.xlsx exported successfully!`);
          }, 300);
          return 100;
        }
        return prev + 20;
      });
    }, 200);
  };

  const getCellVal = (val: string, colIndex: number, rowIndex: number) => {
    if (activeWorkflow === "deployment" && excelSheet === "sheet1" && rowIndex === 4 && colIndex === 6) {
      if (opsStatus === "SHIFTED") return "Commissioned";
      if (opsStatus === "HELD") return "HELD";
      if (opsStatus === "CANCELLED") return "CANCELLED";
    }
    if (activeWorkflow === "shifting" && excelSheet === "sheet1" && colIndex === 5) {
      return opsStatus;
    }
    return val;
  };

  const handleOpsAction = (status: "SHIFTED" | "HELD" | "CANCELLED") => {
    setOpsStatus(status);
    if (status === "SHIFTED") {
      setIsPlayingSandbox(true);
    } else {
      setIsPlayingSandbox(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 animate-fade-up">
      {/* Hero */}
      <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center py-6">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/25 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            Active in Production - Network Wide
          </span>
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">NETRA Platform</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Network Planning & <br /><span className="text-gradient">Deployment Automation</span>
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base max-w-2xl font-light">
            NETRA replaces fragmented, spreadsheet-based deployment planning with a centralized, role-aware platform. It tracks every transmission plan across its complete lifecycle - from design upload and validation to multi-partner acceptance testing, regional traffic shifting, and coordinated dual-site dismantling.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/demo" search={{ product: "mids" }}><BrandButton>Request NETRA Demo <ArrowRight className="h-4 w-4" /></BrandButton></Link>
            <a href="#workflows"><BrandButton variant="secondary">See Interactive Workflows</BrandButton></a>
          </div>
        </div>

        {/* Switchable KPI Active Telemetry Dashboard */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard gradientBorder className="p-5 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-border/20 pb-3 mb-4">
              <div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">Region Databases</span>
                <h2 className="text-sm font-bold font-display text-foreground mt-0.5">Active Telemetry</h2>
              </div>
              <div className="flex bg-foreground/5 rounded-lg p-0.5 border border-border/30">
                {(["MW", "UBR"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setDbType(t)}
                    className={`px-2.5 py-0.5 text-[10px] font-mono font-bold rounded transition-all cursor-pointer ${
                      dbType === t
                        ? "bg-primary text-white shadow-sm"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-foreground/5 border border-border/20 rounded-xl p-3.5">
                <span className="text-[9px] text-muted-foreground uppercase font-mono tracking-wider">Target SLA Rate</span>
                <div className="text-xl font-mono font-bold text-foreground mt-0.5 flex items-baseline gap-1">
                  <Counter to={kpiData.slaRate} suffix="%" />
                </div>
              </div>
              <div className="bg-foreground/5 border border-border/20 rounded-xl p-3.5">
                <span className="text-[9px] text-muted-foreground uppercase font-mono tracking-wider">Planning Success Rate</span>
                <div className="text-xl font-mono font-bold text-foreground mt-0.5 flex items-baseline gap-1">
                  <Counter to={kpiData.validationRate} suffix="%" />
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-foreground/5 border border-border/20 rounded-xl p-3 hover:shadow-[0_0_15px_rgba(var(--primary),0.05)] transition-all">
                <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Ageing Buckets</div>
                <div className="space-y-2.5">
                  {kpiData.ageing.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-[9px] text-muted-foreground mb-0.5">
                        <span>{item.label}</span>
                        <span className="font-semibold text-foreground">{item.val}%</span>
                      </div>
                      <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full" 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.val}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          style={{ backgroundColor: item.color }} 
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-foreground/5 border border-border/20 rounded-xl p-3 hover:shadow-[0_0_15px_rgba(var(--primary),0.05)] transition-all">
                <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground mb-3">Region Progress</div>
                <div className="space-y-2.5">
                  {kpiData.regions.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-[9px] text-muted-foreground mb-0.5">
                        <span>{item.name}</span>
                        <span className="font-semibold text-foreground">{item.val}%</span>
                      </div>
                      <div className="h-1 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full bg-primary" 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.val}%` }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>

      {/* Value Propositions Highlights Banner */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        {[
          { title: "Centralized Rule Checks", desc: "Validates coordinate offsets, near/far-end bindings, and Pop overlaps automatically on plan upload." },
          { title: "Role-Scoped Lifecycles", desc: "Orchestrates task assignments across MW Planners, Region Deployment, I&C Partners, and region operations." },
          { title: "Acceptance Test Verification", desc: "Integrates physical photo proof audits with soft validation ping logs into a single sign-off desk." },
          { title: "Traffic Shift Gatekeepers", desc: "Ensures no traffic shifts are executed without active technology, configuration, and routing checks." }
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02, translateY: -2 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all h-full">
              <div className="font-display text-sm font-bold text-primary">{item.title}</div>
              <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed font-light">{item.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </section>

      {/* Interactive Workflows Dashboard */}
      <section id="workflows" className="mt-24 scroll-mt-20">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Interactive Walkthrough</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Explore the lifecycle of <span className="text-gradient">network plans</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-3xl">
          NETRA orchestrates three critical lifecycles inside the region operations floor. Select a flow below to trace the steps, assignees, and decision loops.
        </p>

        {/* Workflow Switcher Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-border/20 pb-3">
          {[
            { id: "deployment", label: "1. Deployment Lifecycle Flow", desc: "From MW plan upload to Region Operations" },
            { id: "shifting", label: "2. Traffic Shifting Flow", desc: "IP verification & rollback controls" },
            { id: "dismantle", label: "3. Dual-Site Decommissioning", desc: "Coordinated dismantle tracking" }
          ].map((flow) => (
            <button
              key={flow.id}
              onClick={() => setActiveWorkflow(flow.id as any)}
              className={`flex-1 min-w-[200px] text-left p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                activeWorkflow === flow.id
                  ? "bg-primary/10 border-primary text-foreground shadow-sm"
                  : "border-border/40 text-muted-foreground hover:text-foreground hover:bg-foreground/5"
              }`}
            >
              <div className="font-display font-bold text-xs uppercase tracking-wider">{flow.label}</div>
              <div className="text-[10px] text-muted-foreground mt-1 font-light">{flow.desc}</div>
              {activeWorkflow === flow.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Active Workflow Flowchart Display */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {activeWorkflow === "deployment" && (
              <motion.div
                key="deployment"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-5 gap-4">
                  {deploymentSteps.map((step, idx) => {
                    const StepIcon = step.icon;
                    return (
                      <GlassCard key={idx} gradientBorder className="relative flex flex-col justify-between p-5 hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all">
                        {idx < deploymentSteps.length - 1 && (
                          <div className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 hidden lg:flex items-center justify-center w-5 h-5 rounded-full bg-background border border-border/50">
                            <ArrowRight className="h-3 w-3 text-primary" />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs text-primary bg-primary/10 rounded-full px-2 py-0.5 font-bold">{step.step}</span>
                            <span className="text-[8px] font-mono font-bold uppercase tracking-widest text-[#059669] bg-[#059669]/10 px-1.5 py-0.5 rounded border border-[#059669]/20">{step.badge}</span>
                          </div>
                          <p className="text-[9px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60 mt-4">{step.role}</p>
                          <h4 className="text-sm font-semibold font-display text-foreground mt-1 flex items-center gap-1.5">
                            <StepIcon className="h-3.5 w-3.5 text-primary shrink-0" />
                            {step.title}
                          </h4>
                          <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed font-light">{step.desc}</p>
                        </div>
                      </GlassCard>
                    );
                  })}
                </div>

                {/* Acceptance Testing Callout Box */}
                <GlassCard gradientBorder className="p-6 border-[#7C3AED]/20 bg-[#7C3AED]/2 mt-4">
                  <div className="grid md:grid-cols-[auto_1fr] gap-4 items-center">
                    <div className="h-12 w-12 rounded-xl bg-[#7C3AED]/15 text-[#C084FC] flex items-center justify-center border border-[#7C3AED]/30">
                      <Camera className="h-6 w-6 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                        Acceptance Testing (AT) Desk Verification Details
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed font-light">
                        Once commissioned, the MS Partner team triggers two validation stages: <strong>Physical AT</strong> (matching multi-angle photos of antenna mount stability, grounding, and serial tags) and <strong>Soft AT</strong> (capturing automated CLI trace logs, latency, and interface alignment data). All checklists and logs are linked directly to the plan record for audit trails.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}

            {activeWorkflow === "shifting" && (
              <motion.div
                key="shifting"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-3 gap-6">
                  {shiftSteps.map((step, idx) => {
                    const StepIcon = step.icon;
                    return (
                      <GlassCard key={idx} gradientBorder className="relative flex flex-col justify-between p-6 hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all">
                        {idx < shiftSteps.length - 1 && (
                          <div className="absolute top-1/2 -translate-y-1/2 -right-4 z-10 hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-background border border-border/50">
                            <ArrowRight className="h-3 w-3 text-primary" />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs text-primary bg-primary/10 rounded-full px-2.5 py-0.5 font-bold">STAGE {step.step}</span>
                          </div>
                          <p className="text-[9px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60 mt-4">{step.role || "Circle Ops Control"}</p>
                          <h4 className="text-sm font-semibold font-display text-foreground mt-1 flex items-center gap-1.5">
                            <StepIcon className="h-4 w-4 text-primary shrink-0" />
                            {step.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-light">{step.desc}</p>
                        </div>
                      </GlassCard>
                    );
                  })}
                </div>

                {/* Shifting Loop & Exception Control Details */}
                <div className="grid md:grid-cols-2 gap-4">
                  <GlassCard gradientBorder className="p-5 border-emerald-500/20 bg-emerald-500/2">
                    <div className="flex gap-3 items-start">
                      <div className="h-8 w-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-foreground">Traffic Shift Approval Loop</h4>
                        <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed font-light">
                          Prior to cutover, circle operations run IP validation. If route pings, interface config checks, and technology rules match standard templates, Circle Ops releases the traffic shift, redirecting traffic to the new MW link.
                        </p>
                      </div>
                    </div>
                  </GlassCard>

                  <GlassCard gradientBorder className="p-5 border-red-500/20 bg-red-500/2">
                    <div className="flex gap-3 items-start">
                      <div className="h-8 w-8 rounded-lg bg-red-500/15 text-red-400 flex items-center justify-center shrink-0">
                        <XCircle className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-foreground">Plan Reject, Hold, & Cancel Gates</h4>
                        <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed font-light">
                          If configuration verify tests fail, operations routes the plan back to the **MW Planner** for rectification. Ops also maintains controls to place active plans on **Hold** or **Cancel** them entirely to prevent conflicts.
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            )}

            {activeWorkflow === "dismantle" && (
              <motion.div
                key="dismantle"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { step: "01", role: "MW Planner", title: "Dual-Site Excel Upload", desc: "Planner uploads Excel defining the near-end and far-end microwave hops to decommission simultaneously.", icon: FileText },
                    { step: "02", role: "Deployment Team", title: "Site Survey Assignment", desc: "Tasks are assigned to the deployment team to survey both sites, checking safety bounds and material logs.", icon: ClipboardList },
                    { step: "03", role: "I&C Partner", title: "Dismantling Action", desc: "I&C partner de-installs antennas, mounts, and indoor units from both sites, documenting de-installation proof.", icon: RotateCcw },
                    { step: "04", role: "Circle Operations", title: "Warehouse Shift & Listing", desc: "Operations team coordinates shifting de-commissioned hardware to the warehouse, performing serial-matching audits.", icon: Warehouse }
                  ].map((step, idx, arr) => {
                    const StepIcon = step.icon;
                    return (
                      <GlassCard key={idx} gradientBorder className="relative flex flex-col justify-between p-5 hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all">
                        {idx < arr.length - 1 && (
                          <div className="absolute top-1/2 -translate-y-1/2 -right-3 z-10 hidden lg:flex items-center justify-center w-5 h-5 rounded-full bg-background border border-border/50">
                            <ArrowRight className="h-3 w-3 text-primary" />
                          </div>
                        )}
                        <div>
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs text-primary bg-primary/10 rounded-full px-2 py-0.5 font-bold">STEP {step.step}</span>
                          </div>
                          <p className="text-[9px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60 mt-4">{step.role}</p>
                          <h4 className="text-sm font-semibold font-display text-foreground mt-1 flex items-center gap-1.5">
                            <StepIcon className="h-3.5 w-3.5 text-primary shrink-0" />
                            {step.title}
                          </h4>
                          <p className="text-[11px] text-muted-foreground mt-2 leading-relaxed font-light">{step.desc}</p>
                        </div>
                      </GlassCard>
                    );
                  })}
                </div>

                {/* Coordinated Dual-Site Decommissioning Callout */}
                <GlassCard gradientBorder className="p-6 border-[#0891B2]/20 bg-[#0891B2]/2">
                  <div className="grid md:grid-cols-[auto_1fr] gap-4 items-center">
                    <div className="h-12 w-12 rounded-xl bg-[#0891B2]/15 text-[#22D3EE] flex items-center justify-center border border-[#0891B2]/30">
                      <Warehouse className="h-6 w-6 animate-pulse" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Coordinated Dual-Site Dismantling & Reconciliation
                      </h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed font-light">
                        Microwave hops always link two sites (near-end and far-end). NETRA tracks dismantling on both tower sites simultaneously. On-site engineers document hardware removals, which circle operations reconcile against the master inventory before updates are pushed to the central warehouse ledger.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ── INTERACTIVE INGESTION & AUDIT SIMULATOR ── */}
      <section id="simulator" className="mt-24 scroll-mt-20">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Live Operations Sandbox</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4">
          <div>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              The NETRA <span className="text-gradient">Operations Simulator</span>
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed max-w-2xl font-light text-sm">
              Interact with the visualizer steps below to see how NETRA parses design sheets, runs coordinate validation, conducts acceptance testing audits, and compiles circle-level reports.
            </p>
          </div>
          <button
            onClick={() => setIsPlayingSandbox(!isPlayingSandbox)}
            className="flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-border/60 hover:border-primary hover:text-primary transition-all self-start md:self-auto cursor-pointer bg-foreground/[0.02]"
          >
            <span className={`h-2 w-2 rounded-full ${isPlayingSandbox ? "bg-primary animate-pulse" : "bg-muted-foreground/30"}`} />
            {isPlayingSandbox ? "Pause Simulation" : "Resume Simulation"}
          </button>
        </div>

        {/* Simulator Workflow Selector Tabs */}
        <div className="mt-2 mb-6 flex bg-foreground/5 rounded-xl p-1 border border-border/20 max-w-xl">
          {[
            { id: "deployment", label: "Deployment Flow", icon: Upload },
            { id: "shifting", label: "Traffic Shifting", icon: ArrowLeftRight },
            { id: "dismantle", label: "Dismantling Flow", icon: RotateCcw }
          ].map((flow) => {
            const FlowIcon = flow.icon;
            return (
              <button
                key={flow.id}
                onClick={() => setActiveWorkflow(flow.id as any)}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${
                  activeWorkflow === flow.id
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <FlowIcon className="h-3.5 w-3.5" />
                {flow.label}
              </button>
            );
          })}
        </div>

        {/* Simulator Main Grid */}
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 items-stretch">
          
          {/* LEFT - Steps Accordion (NETiQ Style) */}
          <div className="space-y-3">
            {activeSteps.map((step, idx) => {
              const isActive = netraPhase === idx;
              const isCompleted = netraPhase > idx;
              const StepIcon = step.id === "planning" || step.id === "dismantle_upload"
                ? Upload 
                : step.id === "deployment" || step.id === "site_surveys"
                  ? ClipboardList 
                  : step.id === "ic_partner" || step.id === "dismantling_action"
                    ? Tower 
                    : step.id === "at_desk" || step.id === "warehouse_intake" || step.id === "config_check"
                      ? ShieldCheck 
                      : ArrowLeftRight;

              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setNetraPhase(idx);
                    setSubStep(0);
                    if (step.id !== "operations" && step.id !== "shift_gate") setOpsStatus("SHIFTED");
                  }}
                  className={`w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-primary/5 border-primary shadow-[0_0_24px_rgba(var(--primary),0.08)]"
                      : "border-border/40 hover:border-primary/20 bg-surface/10 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span 
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 border ${
                      isActive
                        ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                        : isCompleted
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                          : "bg-surface border-border/20 text-muted-foreground"
                    }`}
                  >
                    {isCompleted ? <Check className="h-5 w-5" /> : <StepIcon className="h-5 w-5" />}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span 
                      className="text-[9px] font-bold uppercase tracking-wider block"
                      style={{ color: isActive ? "var(--primary)" : isCompleted ? "#10b981" : "inherit" }}
                    >
                      {step.role}
                    </span>
                    <h3 className="font-display font-bold text-sm mt-0.5 text-foreground">{idx + 1}. {step.label}</h3>
                    
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-light">
                            {step.desc}
                          </p>
                          {/* Mini checklists under active step */}
                          <div className="mt-3 pt-2 border-t border-border/10 flex flex-wrap gap-1.5">
                            {step.checkpoints.map((cp, cpIdx) => {
                              const checked = subStep >= cpIdx + 1;
                              return (
                                <div
                                  key={cpIdx}
                                  className={`flex items-center gap-1 px-1.5 py-0.5 rounded text-[8.5px] font-mono border ${
                                    checked
                                      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-bold"
                                      : "bg-foreground/5 text-muted-foreground/30 border-border/10"
                                  }`}
                                >
                                  <span className={`h-1 w-1 rounded-full shrink-0 ${checked ? "bg-emerald-400 animate-pulse" : "bg-muted-foreground/20"}`} />
                                  {cp}
                                </div>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT - Visual HUD / Excel Report + Terminal Logs */}
          <div className="flex flex-col gap-5">
            <GlassCard gradientBorder className="p-6 relative flex flex-col justify-between overflow-hidden bg-surface-2/10 shadow-2xl min-h-[300px]">
              
              {/* Card Header with View Switcher */}
              <div className="border-b border-border/20 pb-3 mb-4 flex justify-between items-center select-none">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-primary uppercase">
                    Stage {netraPhase + 1} Visualization
                  </span>
                  <h3 className="text-sm font-bold font-display text-foreground mt-0.5">
                    {rightPanelTab === "hud" ? currentStep.title : "Report Ledger Table"}
                  </h3>
                </div>
                <div className="flex bg-foreground/5 rounded-lg p-0.5 border border-border/30">
                  {(["hud", "excel"] as const).map((view) => (
                    <button
                      key={view}
                      onClick={() => setRightPanelTab(view)}
                      className={`px-2 py-0.5 text-[9px] font-mono font-bold rounded cursor-pointer transition-colors ${
                        rightPanelTab === view
                          ? "bg-primary text-white shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {view === "hud" ? "Visual HUD" : "Excel Report 📊"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Graphic Stage Canvas / Excel View */}
              <div className="flex-1 flex flex-col justify-center items-center relative overflow-hidden bg-black/40 rounded-2xl border border-border/10 p-4 min-h-[220px]">
                {rightPanelTab === "hud" ? (
                  <div className="w-full h-full">
                    {/* Render visual HUD matching step ID */}
                    
                    {/* STAGE 1: nominal coordinate bounds check */}
                    {(currentStep.id === "planning" || currentStep.id === "dismantle_upload") && (
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                        
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-primary/20 flex items-center justify-center">
                          <motion.div 
                            className="w-24 h-24 rounded-full border border-primary/40 flex items-center justify-center"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.7, 0.3] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                          />
                          <div className="absolute w-full h-[1px] bg-primary/20" />
                          <div className="absolute h-full w-[1px] bg-primary/20" />
                        </div>

                        <div className="flex justify-between items-start z-10 select-none">
                          <span className="text-[8px] font-mono text-primary font-bold">GRID CALIBRATION: ACTIVE</span>
                          <span className="text-[8px] font-mono text-muted-foreground/80">LAT/LONG PLOT</span>
                        </div>

                        <div className="relative flex justify-center items-center h-28 z-10">
                          <svg className="w-full h-20" viewBox="0 0 100 40">
                            <path d="M 0 10 L 100 10 M 0 20 L 100 20 M 0 30 L 100 30" stroke="rgba(26,111,212,0.15)" strokeWidth="0.5" />
                            <motion.path 
                              d="M 10 30 L 35 15 L 70 25 L 90 10" 
                              fill="none" 
                              stroke="var(--primary)" 
                              strokeWidth="1.5"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: subStep / 3 }}
                              transition={{ duration: 0.5 }}
                            />
                            <circle cx="10" cy="30" r="2.5" fill={subStep >= 1 ? "var(--primary)" : "rgba(255,255,255,0.2)"} />
                            <circle cx="35" cy="15" r="2.5" fill={subStep >= 2 ? "var(--primary)" : "rgba(255,255,255,0.2)"} />
                            <circle cx="70" cy="25" r="2.5" fill={subStep >= 3 ? "var(--primary)" : "rgba(255,255,255,0.2)"} />
                            <circle cx="90" cy="10" r="2.5" fill={subStep >= 3 ? "var(--accent)" : "rgba(255,255,255,0.2)"} />
                          </svg>
                        </div>

                        <div className="bg-background/60 border border-border/20 rounded-xl p-2 z-10 select-none">
                          <div className="grid grid-cols-3 gap-2 text-center text-[8.5px] font-mono">
                            <div>
                              <div className="text-muted-foreground">HOP DIST</div>
                              <div className="font-bold text-emerald-400">4.21 km</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">NOMINAL QTR</div>
                              <div className="font-bold text-emerald-400">VALID</div>
                            </div>
                            <div>
                              <div className="text-muted-foreground">POP BINDINGS</div>
                              <div className="font-bold text-emerald-400">MATCH</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STAGE 2: Deployment / site safety surveys */}
                    {(currentStep.id === "deployment" || currentStep.id === "site_surveys") && (
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start select-none">
                          <span className="text-[8px] font-mono text-[#F59E0B] font-bold">RESOURCE & SURVEY DISPATCH</span>
                          <span className="text-[8px] font-mono text-muted-foreground/80">ALLOCATION MATRIX</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 my-2 w-full z-10 select-none">
                          {[
                            { name: currentStep.id === "site_surveys" ? "Tower Structural Audit" : "ODU Microwave Unit", key: currentStep.id === "site_surveys" ? "DOC-SA-204" : "SN-88429B", allocated: subStep >= 1 },
                            { name: currentStep.id === "site_surveys" ? "Power Grid Isolation" : "Antenna Mount Brackets", key: currentStep.id === "site_surveys" ? "DOC-PI-205" : "PO-33104", allocated: subStep >= 2 },
                            { name: currentStep.id === "site_surveys" ? "Field Safety Sign-off" : "Grounding Kits & Strips", key: currentStep.id === "site_surveys" ? "DOC-SS-208" : "PO-33105", allocated: subStep >= 3 },
                            { name: currentStep.id === "site_surveys" ? "Field Riggers Dispatched" : "Cat6 Outdoor Cables", key: currentStep.id === "site_surveys" ? "CREW-D-09" : "PO-33109", allocated: subStep >= 3 }
                          ].map((item, idx) => (
                            <div key={idx} className="bg-background/40 border border-border/20 rounded-lg p-2 flex items-center justify-between">
                              <div>
                                <div className="text-[9px] font-semibold text-foreground truncate max-w-[100px]">{item.name}</div>
                                <div className="text-[7.5px] font-mono text-muted-foreground/75 mt-0.5">{item.key}</div>
                              </div>
                              <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded font-bold ${
                                item.allocated 
                                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                                  : "bg-foreground/5 text-muted-foreground/30"
                              }`}>
                                {item.allocated ? "READY" : "QUEUED"}
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="bg-background/60 border border-border/20 rounded-xl p-2.5 flex items-center justify-between z-10 select-none">
                          <div className="flex items-center gap-2">
                            <Warehouse className="h-5 w-5 text-[#F59E0B]" />
                            <div>
                              <div className="text-[8.5px] font-semibold text-foreground">Partner Assigned</div>
                              <div className="text-[7.5px] font-mono text-muted-foreground mt-0.5">MS Installation Partner Ltd.</div>
                            </div>
                          </div>
                          <span className={`text-[8.5px] font-mono font-bold px-2 py-0.5 rounded ${subStep >= 3 ? "text-emerald-400 bg-emerald-500/10" : "text-muted-foreground/30 animate-pulse"}`}>
                            {subStep >= 3 ? "DISPATCHED" : "PREPARING"}
                          </span>
                        </div>
                      </div>
                    )}

                    {/* STAGE 3: I&C Partner / dismantling tower removals */}
                    {(currentStep.id === "ic_partner" || currentStep.id === "dismantling_action") && (
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start select-none">
                          <span className="text-[8px] font-mono text-[#10B981] font-bold">ON-SITE RIGGING OPERATIONS</span>
                          <span className="text-[8px] font-mono text-muted-foreground/80">COMMISSIONING STENCIL</span>
                        </div>

                        <div className="grid grid-cols-[1fr_1.2fr] gap-4 items-center my-1 z-10 w-full select-none">
                          <div className="flex justify-center relative py-1">
                            <Tower className={`h-24 w-24 ${subStep >= 3 ? "text-emerald-400" : "text-muted-foreground/40"} transition-colors`} />
                            <div className="absolute top-2 w-3 h-3 bg-red-500 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
                            {subStep >= 2 && (
                              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-1 items-center">
                                <span className="h-4 w-4 rounded-full border border-emerald-400/40 animate-ping absolute" />
                                <span className="h-8 w-8 rounded-full border border-emerald-400/20 animate-ping absolute" style={{ animationDelay: '0.5s' }} />
                              </div>
                            )}
                          </div>

                          <div className="space-y-2">
                            <div className="bg-background/40 border border-border/20 rounded-lg p-2">
                              <span className="text-[7.5px] text-muted-foreground uppercase font-mono">
                                {currentStep.id === "dismantling_action" ? "Near-End De-installation" : "Antenna Alignment"}
                              </span>
                              <div className="flex items-center justify-between mt-1">
                                <span className={`text-[11px] font-mono font-bold ${subStep >= 2 ? "text-emerald-400" : "text-[#10B981] animate-pulse"}`}>
                                  {currentStep.id === "dismantling_action" ? (subStep >= 1 ? "REMOVED" : "DE-MOUNTING...") : (subStep >= 2 ? "98.8% Aligned" : "Aligning...")}
                                </span>
                                <span className="text-[8px] text-muted-foreground font-mono">
                                  {currentStep.id === "dismantling_action" ? "Tower A" : "+/- 0.2°"}
                                </span>
                              </div>
                            </div>
                            <div className="bg-background/40 border border-border/20 rounded-lg p-2">
                              <span className="text-[7.5px] text-muted-foreground uppercase font-mono">
                                {currentStep.id === "dismantling_action" ? "Far-End De-installation" : "ODU Frequency Bind"}
                              </span>
                              <div className="flex items-center justify-between mt-1">
                                <span className={`text-[10px] font-mono font-bold ${subStep >= 3 ? "text-emerald-400" : "text-foreground"}`}>
                                  {currentStep.id === "dismantling_action" ? (subStep >= 2 ? "REMOVED" : "DE-MOUNTING...") : (subStep >= 3 ? "7.2 GHz (LOCKED)" : "Configuring...")}
                                </span>
                                <span className="text-[8px] text-muted-foreground font-mono">
                                  {currentStep.id === "dismantling_action" ? "Tower B" : "H-Pol"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-background/60 border border-border/20 rounded-xl p-1.5 text-center text-[8.5px] font-mono text-muted-foreground z-10 select-none">
                          Status: {subStep >= 3 ? "Operations complete, serial tags registered" : "Rigging in progress..."}
                        </div>
                      </div>
                    )}

                    {/* STAGE 4: AT Desk / Warehouse Intake Reconciliation */}
                    {(currentStep.id === "at_desk" || currentStep.id === "warehouse_intake" || currentStep.id === "config_check" || currentStep.id === "validation_gate") && (
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start select-none">
                          <span className="text-[8px] font-mono text-[#7C3AED] font-bold">COMPLIANCE & VALIDATION DESK</span>
                          <span className="text-[8px] font-mono text-muted-foreground/80">AUDIT DASHBOARD</span>
                        </div>

                        <div className="grid grid-cols-2 gap-2 my-2 w-full z-10 select-none">
                          <div className="bg-background/40 border border-border/20 rounded-lg p-2 flex flex-col justify-center items-center text-center relative overflow-hidden">
                            <span className="text-[7.5px] text-muted-foreground uppercase font-mono">
                              {currentStep.id === "warehouse_intake" ? "Serial SN-88429B" : currentStep.id === "config_check" ? "VLAN Configuration" : "Physical AT / Peering"}
                            </span>
                            {subStep >= 1 ? (
                              <div className="text-[9px] font-bold text-emerald-400 flex items-center gap-0.5 mt-1">
                                <Check className="h-3 w-3" /> {currentStep.id === "warehouse_intake" ? "Reconciled" : currentStep.id === "config_check" ? "VLAN 102 (OK)" : "Approved"}
                              </div>
                            ) : (
                              <div className="text-[9px] font-bold text-[#7C3AED] animate-pulse mt-1">Checking...</div>
                            )}
                          </div>
                          <div className="bg-background/40 border border-border/20 rounded-lg p-2 flex flex-col justify-center items-center text-center relative overflow-hidden">
                            <span className="text-[7.5px] text-muted-foreground uppercase font-mono">
                              {currentStep.id === "warehouse_intake" ? "Serial SN-88430B" : currentStep.id === "config_check" ? "IP Subnet check" : "Soft AT / Latency"}
                            </span>
                            {subStep >= 2 ? (
                              <div className="text-[9px] font-bold text-emerald-400 flex items-center gap-0.5 mt-1">
                                <Check className="h-3 w-3" /> {currentStep.id === "warehouse_intake" ? "Reconciled" : currentStep.id === "config_check" ? "10.42.12.89 (OK)" : "Latency: 12ms"}
                              </div>
                            ) : (
                              <div className="text-[9px] font-bold text-muted-foreground/30 mt-1">Awaiting...</div>
                            )}
                          </div>
                        </div>

                        {/* Interactive mini graphical gate check */}
                        {currentStep.id === "validation_gate" ? (
                          <div className="bg-black/60 border border-border/20 rounded-xl p-1.5 h-16 w-full z-10 select-none flex items-center justify-center">
                            <svg className="w-full h-12" viewBox="0 0 100 30">
                              <path d="M 10 15 L 40 15 M 40 15 L 60 5 M 40 15 L 60 25" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
                              {subStep >= 1 && <path d="M 10 15 L 40 15" stroke="#7C3AED" strokeWidth="1.2" />}
                              {subStep >= 2 && <path d="M 40 15 L 60 5" stroke="#10B981" strokeWidth="1.2" />}
                              {subStep >= 3 && <path d="M 40 15 L 60 25" stroke="#EF4444" strokeWidth="0.8" strokeDasharray="2" />}
                              <circle cx="10" cy="15" r="2.5" fill={subStep >= 1 ? "#7C3AED" : "rgba(255,255,255,0.2)"} />
                              <circle cx="40" cy="15" r="2.5" fill={subStep >= 2 ? "#7C3AED" : "rgba(255,255,255,0.2)"} />
                              <circle cx="60" cy="5" r="2.5" fill={subStep >= 2 ? "#10B981" : "rgba(255,255,255,0.2)"} />
                              <circle cx="60" cy="25" r="2.5" fill={subStep >= 3 ? "rgba(239,68,68,0.4)" : "rgba(255,255,255,0.2)"} />
                              <text x="50" y="4" fill="#10B981" fontSize="4" fontFamily="monospace">PASS</text>
                              <text x="50" y="28" fill="#EF4444" fontSize="4" fontFamily="monospace">REJECT</text>
                            </svg>
                          </div>
                        ) : (
                          <div className="bg-black/60 border border-border/20 rounded-xl p-2 h-16 overflow-hidden font-mono text-[8.5px] text-muted-foreground z-10 w-full">
                            {subStep >= 2 ? (
                              <div className="text-emerald-400">
                                <div>&gt; ping 10.42.12.89 -c 5</div>
                                <div>&gt; 64 bytes from 10.42.12.89: seq=0 time=12ms</div>
                                <div className="font-bold">&gt; Ping verification Success. Audit PASS.</div>
                              </div>
                            ) : subStep >= 1 ? (
                              <div className="text-purple-400 animate-pulse">
                                <div>&gt; ping 10.42.12.89 -c 5</div>
                                <div>&gt; Awaiting loopback interface ping log...</div>
                              </div>
                            ) : (
                              <div className="text-muted-foreground/30 text-center py-2">Awaiting configuration audit logs...</div>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* STAGE 5: Operations Route Cutover Gate */}
                    {(currentStep.id === "operations" || currentStep.id === "shift_gate") && (
                      <div className="w-full h-full flex flex-col justify-between">
                        <div className="flex justify-between items-start select-none">
                          <span className="text-[8px] font-mono text-[#BE185D] font-bold">LIVE ROUTE CUTOVER GATE</span>
                          <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded font-bold ${
                            opsStatus === "SHIFTED" 
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                              : opsStatus === "HELD" 
                                ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" 
                                : "bg-red-500/10 text-red-400 border border-red-500/20"
                          }`}>
                            {opsStatus}
                          </span>
                        </div>

                        <div className="relative py-2 px-3 bg-background/50 border border-border/20 rounded-xl my-2 flex items-center justify-between w-full z-10 select-none">
                          <div className="flex items-center gap-1.5">
                            <div className="px-1.5 py-0.5 bg-foreground/10 border border-border rounded text-[8px] font-mono text-foreground font-bold">CSR</div>
                            <div className="flex flex-col gap-1 relative">
                              <div className="flex items-center">
                                <span className={`text-[7px] w-12 border-t border-dashed block relative ${opsStatus === "SHIFTED" ? "border-red-500/20" : "border-red-500/50"}`}>
                                  {opsStatus !== "SHIFTED" && <span className="absolute top-1/2 -translate-y-1/2 left-0 h-1.5 w-1.5 rounded-full bg-red-400 animate-ping" />}
                                </span>
                                <span className={`text-[7px] ml-1 font-mono transition-colors ${opsStatus === "SHIFTED" ? "text-muted-foreground/30" : "text-red-400"}`}>Old Hops</span>
                              </div>
                              <div className="flex items-center">
                                <span className={`text-[7px] w-12 border-t block relative ${opsStatus === "SHIFTED" ? "border-emerald-400" : "border-muted-foreground/20"}`}>
                                  {opsStatus === "SHIFTED" && <span className="absolute top-1/2 -translate-y-1/2 left-full -translate-x-full h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />}
                                </span>
                                <span className={`text-[7px] ml-1 font-mono transition-colors ${opsStatus === "SHIFTED" ? "text-emerald-400 font-bold" : "text-muted-foreground/30"}`}>New MW</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-[8px] font-mono bg-black/45 p-1.5 rounded border border-border/10 shrink-0">
                            <div className="text-muted-foreground">Load State:</div>
                            <div className={`font-bold mt-0.5 ${opsStatus === "SHIFTED" ? "text-emerald-400" : "text-muted-foreground/40"}`}>
                              {opsStatus === "SHIFTED" ? "74% Active" : "0% Offline"}
                            </div>
                          </div>
                        </div>

                        {/* Interactive action buttons */}
                        <div className="grid grid-cols-3 gap-2 mt-1 text-[9px] font-mono text-center w-full z-10">
                          <button 
                            onClick={() => handleOpsAction("SHIFTED")}
                            className={`py-1 rounded-lg border transition-all cursor-pointer font-bold ${
                              opsStatus === "SHIFTED" 
                                ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]" 
                                : "border-border/30 text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                            }`}
                          >
                            SHIFT
                          </button>
                          <button 
                            onClick={() => handleOpsAction("HELD")}
                            className={`py-1 rounded-lg border transition-all cursor-pointer font-bold ${
                              opsStatus === "HELD" 
                                ? "bg-amber-500/20 border-amber-500/40 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]" 
                                : "border-border/30 text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                            }`}
                          >
                            HOLD
                          </button>
                          <button 
                            onClick={() => handleOpsAction("CANCELLED")}
                            className={`py-1 rounded-lg border transition-all cursor-pointer font-bold ${
                              opsStatus === "CANCELLED" 
                                ? "bg-red-500/20 border-red-500/40 text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)]" 
                                : "border-border/30 text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                            }`}
                          >
                            CANCEL
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col justify-between h-full w-full">
                    {/* Excel Title Bar */}
                    <div className="bg-[#107c41] text-white p-2 rounded-t-xl text-[10px] font-mono flex items-center justify-between shadow-md w-full">
                      <div className="flex items-center gap-1.5 font-bold">
                        <FileText className="h-3.5 w-3.5" />
                        <span>NETRA_{activeWorkflow}_report.xlsx</span>
                      </div>
                      <span className="text-[8.5px] bg-white/10 px-1.5 py-0.5 rounded border border-white/20">Excel Online</span>
                    </div>

                    {/* Excel Toolbar */}
                    <div className="bg-[#f3f2f1] dark:bg-[#201f1e] border-x border-b border-border/20 p-1.5 text-[9px] font-mono flex items-center justify-between text-muted-foreground select-none w-full text-left">
                      <div className="flex items-center gap-3">
                        <span className="cursor-pointer hover:text-foreground hover:font-bold">File</span>
                        <span className="cursor-pointer hover:text-foreground hover:font-bold">Home</span>
                        <span className="cursor-pointer hover:text-foreground hover:font-bold font-bold text-foreground border-b-2 border-[#107c41] pb-0.5">Data</span>
                      </div>
                      <button 
                        onClick={triggerExport}
                        disabled={isExporting}
                        className="flex items-center gap-1 px-2 py-0.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded cursor-pointer text-[8px] font-bold"
                      >
                        <Download className="h-2.5 w-2.5" />
                        <span>Export CSV</span>
                      </button>
                    </div>

                    {/* Spreadsheet Grid */}
                    <div className="flex-1 overflow-auto bg-white dark:bg-[#1b1a19] text-[#323130] dark:text-[#f3f2f1] font-mono text-[9px] min-h-[140px] w-full border-x border-border/20 relative">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-[#f3f2f1] dark:bg-[#201f1e]">
                            <th className="w-6 border border-border/20 p-1 text-center font-bold text-muted-foreground"></th>
                            {excelData[activeWorkflow][excelSheet].headers.map((h, i) => (
                              <th key={i} className="border border-border/20 p-1 text-center font-bold text-muted-foreground uppercase">
                                {String.fromCharCode(65 + i)}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-[#fcfbfb] dark:bg-[#292827] font-bold">
                            <td className="border border-border/20 p-1 text-center text-muted-foreground">1</td>
                            {excelData[activeWorkflow][excelSheet].headers.map((h, i) => (
                              <td key={i} className="border border-border/20 p-1 text-center font-semibold text-primary truncate max-w-[80px]">
                                {h}
                              </td>
                            ))}
                          </tr>
                          {excelData[activeWorkflow][excelSheet].rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-foreground/5 transition-colors">
                              <td className="bg-[#f3f2f1] dark:bg-[#201f1e] border border-border/20 p-1 text-center font-bold text-muted-foreground">
                                {rIdx + 2}
                              </td>
                              {row.map((cell, cIdx) => {
                                const isCellActive = activeCell?.r === rIdx && activeCell?.c === cIdx;
                                const cellVal = getCellVal(cell, cIdx, rIdx);
                                const isStatusCell = (activeWorkflow === "deployment" && excelSheet === "sheet1" && rIdx === 4 && cIdx === 6) ||
                                                      (activeWorkflow === "shifting" && excelSheet === "sheet1" && cIdx === 5);
                                let textStyle = "";
                                if (isStatusCell) {
                                  if (cellVal === "Commissioned" || cellVal === "SHIFTED" || cellVal === "ACTIVE") textStyle = "text-emerald-500 font-bold";
                                  else if (cellVal === "HELD") textStyle = "text-amber-500 font-bold";
                                  else if (cellVal === "CANCELLED") textStyle = "text-red-500 font-bold";
                                }
                                return (
                                  <td 
                                    key={cIdx} 
                                    onClick={() => setActiveCell({ r: rIdx, c: cIdx })}
                                    className={`border border-border/20 p-1 text-center cursor-pointer select-text truncate max-w-[80px] transition-all ${
                                      isCellActive ? "outline outline-1 outline-offset-[-1px] outline-[#107c41] bg-[#107c41]/5" : ""
                                    } ${textStyle}`}
                                  >
                                    {cellVal}
                                  </td>
                                );
                              })}
                            </tr>
                          ))}
                        </tbody>
                      </table>

                      {isExporting && (
                        <div className="absolute inset-0 bg-black/75 backdrop-blur-[1px] flex flex-col items-center justify-center text-white p-4">
                          <div className="w-32 bg-foreground/10 rounded-full h-1 overflow-hidden mb-2">
                            <div className="h-full bg-emerald-500 rounded-full transition-all duration-300" style={{ width: `${exportProgress}%` }} />
                          </div>
                          <span className="text-[9px] font-mono font-bold animate-pulse">Exporting spreadsheet... {exportProgress}%</span>
                        </div>
                      )}
                    </div>

                    {/* Excel Sheet Selector Tabs */}
                    <div className="bg-[#f3f2f1] dark:bg-[#201f1e] border-x border-b border-border/20 rounded-b-xl p-1 text-[8.5px] font-mono flex items-center gap-1.5 select-none w-full">
                      <div className="flex bg-foreground/10 rounded border border-border/20 p-0.5">
                        {(["sheet1", "sheet2"] as const).map((sheet) => (
                          <button
                            key={sheet}
                            onClick={() => {
                              setExcelSheet(sheet);
                              setActiveCell(null);
                            }}
                            className={`px-2 py-0.5 rounded transition-all cursor-pointer font-bold ${
                              excelSheet === sheet
                                ? "bg-white dark:bg-[#1b1a19] text-[#107c41] shadow-sm border border-border/10"
                                : "text-muted-foreground hover:text-foreground"
                            }`}
                          >
                            {excelData[activeWorkflow][sheet].title}
                          </button>
                        ))}
                      </div>
                      <span className="text-muted-foreground/30 font-light">| Ready</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom mini status bar */}
              <div className="mt-4 pt-3 border-t border-border/20 flex justify-between items-center text-[8.5px] text-muted-foreground select-none font-mono">
                <span>Workflow: {activeWorkflow === "deployment" ? "Deployment" : activeWorkflow === "shifting" ? "Shifting" : "Dismantling"}</span>
                <span className="flex items-center gap-1.5 font-bold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  SYSTEM LIVE
                </span>
              </div>

              {/* Relative Toast Alert */}
              <AnimatePresence>
                {toastMsg && (
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute bottom-4 left-4 right-4 z-30 bg-emerald-950/95 border border-emerald-500/40 text-emerald-300 rounded-xl p-2.5 flex items-center gap-2 shadow-xl backdrop-blur-sm"
                  >
                    <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span className="text-[9px] font-mono font-bold">{toastMsg}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>

            {/* Live Console Logs terminal */}
            <div className="rounded-2xl border border-border/40 bg-slate-950 p-4 font-mono text-[9px] text-slate-400 h-32 overflow-hidden flex flex-col justify-end text-left relative shadow-2xl">
              <span className="absolute top-2.5 right-4 text-[8.5px] uppercase tracking-wider text-muted-foreground font-semibold">
                Live Console Logs
              </span>
              <div className="space-y-1 overflow-y-auto max-h-[90px] pr-2">
                {currentStep.logs.slice(0, subStep + 2).map((log, logIdx) => (
                  <div key={logIdx} className={`${log.cls} truncate`}>
                    <span className="text-primary mr-1.5">&gt;</span> {log.txt}
                  </div>
                ))}
                {subStep < 2 && (
                  <span className="inline-block h-3 w-1.5 bg-primary animate-pulse rounded-sm ml-0.5" />
                )}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Roles Grid */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Role-Based Access</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Unified coordination, <span className="text-gradient">scoped permissions</span>.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl font-light text-sm">
          NETRA coordinates actions across internal planning teams, region deployment engineers, third-party installation partners, and region operations leads.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {roles.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              whileHover={{ scale: 1.02, translateY: -4 }}
            >
              <GlassCard gradientBorder className="p-5 h-full hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3">
                  <Users className="h-4.5 w-4.5" />
                </div>
                <h3 className="text-sm font-bold font-display text-foreground">{r.name}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-light">{r.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Capabilities Features Grid */}
      <section className="mt-28">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Core Capabilities</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Designed for <span className="text-gradient">region operations floor</span>
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
                <GlassCard gradientBorder className="flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{c.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed font-light">{c.desc}</p>
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

      {/* CTA */}
      <section className="mt-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard hoverGlow={false} className="relative overflow-hidden p-10 text-center hover:shadow-[0_0_30px_rgba(var(--primary),0.12)] transition-all">
            <div className="relative">
              <h2 className="font-display text-3xl font-bold">Stop tracking MW deployments in Excel.</h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto font-light">
                Talk to our team about deploying NETRA for your regional networks - we&apos;ll walk through automated template setup, partner provisioning, and operations configuration.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Link to="/demo" search={{ product: "mids" }}><BrandButton>Request NETRA Demo</BrandButton></Link>
                <Link to="/" hash="amc"><BrandButton variant="secondary">Ask About AMC</BrandButton></Link>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
}
