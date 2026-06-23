import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { B as BrandButton } from "./router-BUFV2UJb.mjs";
import { k as ArrowRight, a8 as Upload, a9 as ClipboardList, r as TowerControl, e as ShieldCheck, aa as ArrowLeftRight, ab as Camera, a4 as CircleCheck, y as Activity, ac as CircleX, ad as FileText, ae as RotateCcw, af as Warehouse, j as Check, ag as Download, U as Users, ah as ChartColumn } from "../_libs/lucide-react.mjs";
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
function Counter({ to, suffix = "", duration = 1800 }) {
  const [val, setVal] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, className: "tabular-nums", children: [
    val.toLocaleString(),
    suffix
  ] });
}
const capabilities = [{
  icon: Upload,
  title: "Multi-Rule Plan Validation",
  desc: "Planners upload microwave designs directly. NETRA runs multi-rule check engines - verifying Pop IDs, nominal quarter coordinates, hop distance bounds, and link-type classifications instantly.",
  tags: ["Nominal Validation", "Pop Presence Check", "Coordinate Bounds"]
}, {
  icon: ChartColumn,
  title: "Ageing & Bottleneck Analytics",
  desc: "Automated age-bucket categorization helps managers identify pending tasks. Views are scoped dynamically: region leads see bottlenecks on a larger scale, while partner teams see only active assignments.",
  tags: ["Ageing Buckets", "Team SLA Alerting", "Ops Bottlenecks"]
}, {
  icon: RotateCcw,
  title: "Coordinated Dual-Site Dismantling",
  desc: "Manages simultaneous dismantling for near-end and far-end microwave sites. Enforces pre-dismantle surveys, safety sign-offs, safe de-installation, and warehouse inventory logging.",
  tags: ["Near-End / Far-End Coordination", "Survey Readiness", "Warehouse Listing"]
}, {
  icon: Activity,
  title: "Traffic Shift Gatekeepers",
  desc: "Enforces strict technical validation (IP ping readiness, subnet checking, technology compatibility) before live traffic is redirected, minimizing link activation fallouts.",
  tags: ["IP Verification", "Tech Checking", "Rollback Gates"]
}];
const roles = [{
  name: "MW Planner",
  desc: "Uploads design plans, runs coordinate checks, signs off designs, manages holds and cancellations."
}, {
  name: "Region Deployment",
  desc: "Coordinates material gathering, surveys site readiness, assigns installations to local partners."
}, {
  name: "I&C Partner",
  desc: "Performs site installation or dismantling, uploads physical deployment proof and system inputs."
}, {
  name: "AT Desk (MS Partner)",
  desc: "Validates physical and software acceptance test stages, reviewing logs and checklist images."
}, {
  name: "Region Operations",
  desc: "Gatekeeper for traffic shifting. Runs BGP/IP validation and handles final service activation."
}, {
  name: "Warehouse Manager",
  desc: "Performs intake audits for dismantled hardware, verifying serials against the decommissioning sheet."
}];
const deploymentSteps = [{
  step: "01",
  role: "MW Planner",
  title: "Upload & Verify",
  desc: "MW plan uploaded via Excel. System verifies coordinate math, nominal Pop ID matches, and hop distances.",
  icon: Upload,
  badge: "Rules Check"
}, {
  step: "02",
  role: "Deployment Team",
  title: "Material & Prep",
  desc: "Deployment team gathers technical specifications, audits material lists, and assigns task to an Installation partner.",
  icon: ClipboardList,
  badge: "Material Prep"
}, {
  step: "03",
  role: "I&C Partner",
  title: "Install & Configure",
  desc: "I&C team conducts tower installation, configures IP interfaces, and uploads on-site installation proof.",
  icon: TowerControl,
  badge: "Commissioning"
}, {
  step: "04",
  role: "MS Partner (AT)",
  title: "Acceptance Test",
  desc: "AT desk validates physical installations (checking uploaded site images) and soft validations (ping tests, interface state logs).",
  icon: ShieldCheck,
  badge: "AT Sign-Off"
}, {
  step: "05",
  role: "Region Ops",
  title: "Traffic Shifting Gate",
  desc: "Operations team checks IP routes and technology configuration. If verified, traffic shifts to new link. Otherwise, returned to Planner.",
  icon: ArrowLeftRight,
  badge: "Operations"
}];
const shiftSteps = [{
  step: "01",
  role: "Region Operations",
  title: "Configuration Check",
  desc: "Ingests the configured plan details, verifying IP allocations and target technology bindings.",
  icon: ShieldCheck
}, {
  step: "02",
  role: "Validation Gate",
  title: "Decision Loop",
  desc: "If checks pass, approved for Traffic Shift. If checks fail, plan is automatically returned to the MW Planner with logs.",
  icon: CircleCheck
}, {
  step: "03",
  role: "Region Operations",
  title: "Traffic Shift / Hold / Cancel",
  desc: "Ops triggers live traffic cutover. If issues arise, Ops can place the plan on Hold or execute complete Plan Cancellation.",
  icon: Activity
}];
const mwKPIs = {
  slaRate: 99.5,
  validationRate: 100,
  ageing: [{
    label: "0–30 Days",
    val: 42,
    color: "var(--primary)"
  }, {
    label: "31–90 Days",
    val: 41,
    color: "#0F9F6E"
  }, {
    label: " >180 Days",
    val: 17,
    color: "#EF4444"
  }],
  regions: [{
    name: "Metropolitan Region",
    val: 91
  }, {
    name: "Central Region",
    val: 89
  }, {
    name: "Coastal Zone",
    val: 76
  }]
};
const ubrKPIs = {
  slaRate: 98.8,
  validationRate: 100,
  ageing: [{
    label: "0–30 Days",
    val: 55,
    color: "var(--primary)"
  }, {
    label: "31–90 Days",
    val: 33,
    color: "#0F9F6E"
  }, {
    label: " >180 Days",
    val: 12,
    color: "#EF4444"
  }],
  regions: [{
    name: "Metropolitan Region",
    val: 87
  }, {
    name: "Central Region",
    val: 82
  }, {
    name: "Coastal Zone",
    val: 65
  }]
};
const workflowSteps = {
  deployment: [{
    id: "planning",
    label: "Planning",
    role: "MW Planner",
    badge: "Validate & Release",
    badgeColor: "#1A6FD4",
    title: "Excel Plan Validation",
    desc: "Planners upload planning sheets. NETRA checks Coordinate limits (VI-2), POP ID matching (VI-6), and Link distance math (VI-25).",
    checkpoints: ["Coordinate Bounds check", "Pop existence check", "Hop distance math"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "Initializing NETRA Validation Engine v4.8..."
    }, {
      cls: "text-cyan-400",
      txt: "Reading file: mw_plan_release.xlsx"
    }, {
      cls: "text-purple-400",
      txt: "Running VI-2 Coordinate bounds check... PASS"
    }, {
      cls: "text-purple-400",
      txt: "Running VI-6 POP ID registry check... MATCHED"
    }, {
      cls: "text-emerald-400",
      txt: "✓ Hop distance math: 4.21 km validated"
    }]
  }, {
    id: "deployment",
    label: "Deployment",
    role: "Region Deployment Team",
    badge: "Material Prep",
    badgeColor: "#F59E0B",
    title: "Task Allocation & Materials",
    desc: "Deployment team reviews material requirements, maps inventory assets, and allocates installation tasks to partners.",
    checkpoints: ["Material availability check", "Partner Allocation", "Survey scheduling"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "Loading material allocation scheduler..."
    }, {
      cls: "text-cyan-400",
      txt: "ODU Microwave unit allocated: SN-88429B"
    }, {
      cls: "text-purple-400",
      txt: "Mounting hardware allocated: PO-33104"
    }, {
      cls: "text-emerald-400",
      txt: "✓ Field installation dispatched to MS Partner Ltd."
    }]
  }, {
    id: "ic_partner",
    label: "I&C Partner",
    role: "Installation Partner",
    badge: "Commissioning",
    badgeColor: "#10B981",
    title: "On-Site Installation",
    desc: "Partner engineers complete hardware mountings, antenna alignments, and link grounding on the tower site.",
    checkpoints: ["Antenna mount securement", "Link grounding strap tightness", "ODU/IDU configurations"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "Establishing connection with tower site..."
    }, {
      cls: "text-cyan-400",
      txt: "Antenna securement brackets bolted... OK"
    }, {
      cls: "text-purple-400",
      txt: "Aligning link azimuth... 98.8% accuracy"
    }, {
      cls: "text-emerald-400",
      txt: "✓ Link locked at 7.2 GHz. Carrier active."
    }]
  }, {
    id: "at_desk",
    label: "AT Desk",
    role: "MS Partner Team",
    badge: "Acceptance Test",
    badgeColor: "#7C3AED",
    title: "Verification & Sign-off",
    desc: "AT desk conducts Physical AT (auditing site photos) and Soft AT (verifying loopback interface configuration ping traces).",
    checkpoints: ["Physical photo alignment audit", "Soft loopback ping checks", "Subnet state validation"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "Auditing site installation proof images..."
    }, {
      cls: "text-cyan-400",
      txt: "Mount & grounding photos... APPROVED"
    }, {
      cls: "text-purple-400",
      txt: "Pinging loopback interface 10.42.12.89..."
    }, {
      cls: "text-emerald-400",
      txt: "✓ Pings successful: 0% loss, 12ms avg. SIGNED OFF"
    }]
  }, {
    id: "operations",
    label: "Operations",
    role: "Region Operations",
    badge: "Traffic Shift Gate",
    badgeColor: "#BE185D",
    title: "Live Circuit Cutover",
    desc: "Operations verify BGP routing states, CSR port states, and release traffic shifts, with active Hold / Cancellation controls.",
    checkpoints: ["BGP Peer Status verified", "CSR Gate readiness", "Live Traffic redirected"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "Releasing traffic shifting gate locks..."
    }, {
      cls: "text-cyan-400",
      txt: "Injecting BGP peer routes to Router-PE9..."
    }, {
      cls: "text-purple-400",
      txt: "Shutting down old hop interface... DONE"
    }, {
      cls: "text-emerald-400",
      txt: "✓ Link cutover complete. Active Traffic: 74% Load"
    }]
  }],
  shifting: [{
    id: "config_check",
    label: "Config Check",
    role: "Region Operations",
    badge: "IP Verify",
    badgeColor: "#1A6FD4",
    title: "IP & Interface Verification",
    desc: "Region Operations ingests configured plan parameters, checks IP address bindings, port allocation, and technology compatibility.",
    checkpoints: ["IP allocation check", "Port mapping validation", "Tech compatibility check"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "Ingesting router interface profiles..."
    }, {
      cls: "text-cyan-400",
      txt: "VLAN Tag verified: VLAN 102 active"
    }, {
      cls: "text-purple-400",
      txt: "IP interface check: 10.42.12.89/30 OK"
    }, {
      cls: "text-emerald-400",
      txt: "✓ Port mode check: 9000 Jumbo frames verified"
    }]
  }, {
    id: "validation_gate",
    label: "Validation Gate",
    role: "Validation Engine",
    badge: "Decision Loop",
    badgeColor: "#7C3AED",
    title: "BGP Peering & Performance Gate",
    desc: "Audits network latency baselines, BGP neighbor rules, and VLAN tags to ensure safe traffic cutover.",
    checkpoints: ["BGP Neighbor status", "VLAN tag matching", "Latency baseline verification"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "Pinging BGP peering nodes..."
    }, {
      cls: "text-cyan-400",
      txt: "BGP Neighbor state: ESTABLISHED"
    }, {
      cls: "text-purple-400",
      txt: "Latency baseline check: 12ms (<15ms limit)"
    }, {
      cls: "text-emerald-400",
      txt: "✓ Peering rules check complete. Decision: PASS"
    }]
  }, {
    id: "shift_gate",
    label: "Shift Gate",
    role: "Region Operations",
    badge: "Live Cutover",
    badgeColor: "#BE185D",
    title: "Traffic Redirection & Shift",
    desc: "Triggers the live traffic shift. Enables operators to redirect active data packets, monitor load, or trigger Hold / Cancel rollbacks.",
    checkpoints: ["BGP route injection", "Traffic redirection active", "Old hop de-activation"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "Executing BGP route injection..."
    }, {
      cls: "text-cyan-400",
      txt: "Data packet diversion in progress..."
    }, {
      cls: "text-purple-400",
      txt: "Old backhaul link decommissioned."
    }, {
      cls: "text-emerald-400",
      txt: "✓ Traffic successfully shifted. Live cutover OK."
    }]
  }],
  dismantle: [{
    id: "dismantle_upload",
    label: "Dismantle Upload",
    role: "MW Planner",
    badge: "Excel Upload",
    badgeColor: "#1A6FD4",
    title: "Dual-Site Plan Ingest",
    desc: "MW Planner uploads decommissioning plan. System maps coordinate geometry for near-end and far-end tower hops.",
    checkpoints: ["Near-end site matching", "Far-end site matching", "Dismantle stencils check"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "Parsing dismantle_hop_q3.xlsx..."
    }, {
      cls: "text-cyan-400",
      txt: "Near-end site matched: Site-DL-RAN-901"
    }, {
      cls: "text-purple-400",
      txt: "Far-end site matched: Site-DL-RAN-902"
    }, {
      cls: "text-emerald-400",
      txt: "✓ Dismantling stencils validated against registry"
    }]
  }, {
    id: "site_surveys",
    label: "Site Surveys",
    role: "Deployment Team",
    badge: "Safety Survey",
    badgeColor: "#F59E0B",
    title: "Safety Audits & Dispatch",
    desc: "Field engineers audit safety readiness at both locations, verify power shutdowns, and authorize I&C dismantling.",
    checkpoints: ["Structural safety audit", "Power shutdown verify", "Field partner dispatch"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "Running dual-site safety checklist audits..."
    }, {
      cls: "text-cyan-400",
      txt: "Tower structural safety check... PASSED"
    }, {
      cls: "text-purple-400",
      txt: "Power grid shutdown confirmed... READY"
    }, {
      cls: "text-emerald-400",
      txt: "✓ Dispatch order released to decommissioning crew"
    }]
  }, {
    id: "dismantling_action",
    label: "Dismantling",
    role: "I&C Partner",
    badge: "De-installation",
    badgeColor: "#10B981",
    title: "On-Site Hardware Removal",
    desc: "I&C partner de-installs antennas, radio units (ODU/IDU), and grounding straps from both towers, recording serial tags.",
    checkpoints: ["ODU de-mounting", "Grounding kit removal", "Serial tag scanning"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "De-installation active on tower sites..."
    }, {
      cls: "text-cyan-400",
      txt: "Tower A ODU microwave unit unmounted."
    }, {
      cls: "text-purple-400",
      txt: "Tower B ODU microwave unit unmounted."
    }, {
      cls: "text-emerald-400",
      txt: "✓ Serial numbers logged: SN-88429B & SN-88430B"
    }]
  }, {
    id: "warehouse_intake",
    label: "Warehouse Audit",
    role: "Warehouse Manager",
    badge: "Inventory Audit",
    badgeColor: "#7C3AED",
    title: "Serial Reconciliation",
    desc: "Decommissioned hardware arrives at the central warehouse where serial numbers are scanned and reconciled against plan records.",
    checkpoints: ["Serials verification", "Master ledger updates", "Decommissioning sign-off"],
    logs: [{
      cls: "text-muted-foreground",
      txt: "Awaiting hardware transit delivery..."
    }, {
      cls: "text-cyan-400",
      txt: "Scanning hardware serial SN-88429B... MATCHED"
    }, {
      cls: "text-purple-400",
      txt: "Scanning hardware serial SN-88430B... MATCHED"
    }, {
      cls: "text-emerald-400",
      txt: "✓ Inventory reconciliation complete. Ledger updated."
    }]
  }]
};
const excelData = {
  deployment: {
    sheet1: {
      title: "MW Link Status",
      headers: ["POP ID", "Nominal Lat", "Nominal Long", "Hop Dist", "I&C Team", "AT Audit", "Status"],
      rows: [["DL-RAN-901", "28.5241", "77.2684", "4.21 km", "Partner_A", "PASS", "Commissioned"], ["DL-RAN-902", "28.5249", "77.2690", "3.85 km", "Partner_A", "PASS", "Commissioned"], ["DL-RAN-903", "28.5262", "77.2710", "5.10 km", "Partner_B", "PASS", "Commissioned"], ["DL-RAN-904", "28.5270", "77.2725", "4.05 km", "Partner_B", "PASS", "Commissioned"], ["DL-RAN-905", "28.5285", "77.2750", "4.92 km", "Partner_C", "PASS", "ACTIVE"]]
    },
    sheet2: {
      title: "Checklist Audits",
      headers: ["Checklist Item", "Assigned Role", "SLA Threshold", "Status"],
      rows: [["Pop Existence Check", "MW Planner", "Instant", "VERIFIED"], ["Nominal Coord Check", "MW Planner", "Instant", "VERIFIED"], ["Material Allocation", "Deployment Lead", "24 Hours", "COMPLETED"], ["On-Site Install Proof", "I&C Partner", "48 Hours", "SUBMITTED"], ["Physical AT Checklist", "AT Desk", "12 Hours", "AUDITED"], ["Soft Loopback Pings", "AT Desk", "12 Hours", "AUDITED"]]
    }
  },
  shifting: {
    sheet1: {
      title: "Cutover Ledger",
      headers: ["Interface", "Target VLAN", "Allocated IP", "Peer Router", "Latency", "Gate Status"],
      rows: [["TenGigE0/0/0/1", "VLAN-102", "10.42.12.89/30", "Router-PE9", "12ms", "ACTIVE"], ["TenGigE0/0/0/2", "VLAN-104", "10.42.12.93/30", "Router-PE10", "11ms", "ACTIVE"], ["TenGigE0/0/0/3", "VLAN-108", "10.42.12.97/30", "Router-PE12", "13ms", "ACTIVE"]]
    },
    sheet2: {
      title: "BGP Routing",
      headers: ["Routing Parameter", "Config Value", "BGP Peer State", "Check Time"],
      rows: [["BGP Neighbor Group", "IBGP-PEER", "ESTABLISHED", "14:15:22"], ["VLAN Tag Matching", "VLAN-102/104", "COMPLIANT", "14:15:23"], ["MTU Frame size", "9000 (Jumbo)", "VERIFIED", "14:15:23"], ["IP Route Cost", "Metric 10", "OPTIMIZED", "14:15:24"]]
    }
  },
  dismantle: {
    sheet1: {
      title: "Decom Assets",
      headers: ["Hop ID", "Near-End Site", "Far-End Site", "Serial No", "Intake Audit", "Ledger Status"],
      rows: [["MW-HOP-442", "Site-DL-901", "Site-DL-902", "SN-88429B", "RECONCILED", "UPDATED"], ["MW-HOP-443", "Site-DL-902", "Site-DL-903", "SN-88430B", "RECONCILED", "UPDATED"], ["MW-HOP-445", "Site-DL-905", "Site-DL-906", "SN-88435B", "RECONCILED", "UPDATED"], ["MW-HOP-448", "Site-DL-910", "Site-DL-911", "SN-88442B", "RECONCILED", "UPDATED"]]
    },
    sheet2: {
      title: "Whse Reconciled",
      headers: ["Reconciliation Audit", "Item Scanned", "Storage Section", "Verified By"],
      rows: [["Antenna Mount A", "Bracket-2.4m", "Rack-A3-Shelve2", "WhseManager"], ["Outdoor Unit A", "ODU-E-Band", "Rack-B1-Box12", "WhseManager"], ["Antenna Mount B", "Bracket-2.4m", "Rack-A3-Shelve3", "WhseManager"], ["Outdoor Unit B", "ODU-E-Band", "Rack-B1-Box13", "WhseManager"]]
    }
  }
};
function NetraPage() {
  const [dbType, setDbType] = reactExports.useState("MW");
  const [activeWorkflow, setActiveWorkflow] = reactExports.useState("deployment");
  const [netraPhase, setNetraPhase] = reactExports.useState(0);
  const [subStep, setSubStep] = reactExports.useState(0);
  const [isPlayingSandbox, setIsPlayingSandbox] = reactExports.useState(true);
  const [animationSpeed, setAnimationSpeed] = reactExports.useState(1);
  const [opsStatus, setOpsStatus] = reactExports.useState("SHIFTED");
  const [rightPanelTab, setRightPanelTab] = reactExports.useState("hud");
  const [excelSheet, setExcelSheet] = reactExports.useState("sheet1");
  const [activeCell, setActiveCell] = reactExports.useState(null);
  const [isExporting, setIsExporting] = reactExports.useState(false);
  const [exportProgress, setExportProgress] = reactExports.useState(0);
  const [toastMsg, setToastMsg] = reactExports.useState(null);
  const kpiData = dbType === "MW" ? mwKPIs : ubrKPIs;
  const activeSteps = workflowSteps[activeWorkflow];
  const currentStep = activeSteps[netraPhase] || activeSteps[0];
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
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
  reactExports.useEffect(() => {
    const isFinalStep = netraPhase === activeSteps.length - 1;
    if (isFinalStep) {
      setRightPanelTab("excel");
    } else {
      setRightPanelTab("hud");
    }
  }, [netraPhase, activeSteps.length]);
  reactExports.useEffect(() => {
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
  const getCellVal = (val, colIndex, rowIndex) => {
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
  const handleOpsAction = (status) => {
    setOpsStatus(status);
    if (status === "SHIFTED") {
      setIsPlayingSandbox(true);
    } else {
      setIsPlayingSandbox(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pb-16 animate-fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold text-primary bg-primary/10 border border-primary/25 mb-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" }),
          "Active in Production - Network Wide"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "NETRA Platform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight", children: [
          "Network Planning & ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Deployment Automation" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground leading-relaxed text-base max-w-2xl font-light", children: "NETRA replaces fragmented, spreadsheet-based deployment planning with a centralized, role-aware platform. It tracks every transmission plan across its complete lifecycle - from design upload and validation to multi-partner acceptance testing, regional traffic shifting, and coordinated dual-site dismantling." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/demo", search: {
            product: "mids"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { children: [
            "Request NETRA Demo ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#workflows", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", children: "See Interactive Workflows" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        x: 30
      }, animate: {
        opacity: 1,
        x: 0
      }, transition: {
        duration: 0.6,
        delay: 0.2
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "p-5 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border/20 pb-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono font-bold tracking-widest text-primary uppercase", children: "Region Databases" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-sm font-bold font-display text-foreground mt-0.5", children: "Active Telemetry" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex bg-foreground/5 rounded-lg p-0.5 border border-border/30", children: ["MW", "UBR"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setDbType(t), className: `px-2.5 py-0.5 text-[10px] font-mono font-bold rounded transition-all cursor-pointer ${dbType === t ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`, children: t }, t)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3 mb-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-foreground/5 border border-border/20 rounded-xl p-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground uppercase font-mono tracking-wider", children: "Target SLA Rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-mono font-bold text-foreground mt-0.5 flex items-baseline gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: kpiData.slaRate, suffix: "%" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-foreground/5 border border-border/20 rounded-xl p-3.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] text-muted-foreground uppercase font-mono tracking-wider", children: "Planning Success Rate" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-mono font-bold text-foreground mt-0.5 flex items-baseline gap-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: kpiData.validationRate, suffix: "%" }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-foreground/5 border border-border/20 rounded-xl p-3 hover:shadow-[0_0_15px_rgba(var(--primary),0.05)] transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground mb-3", children: "Ageing Buckets" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: kpiData.ageing.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px] text-muted-foreground mb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                  item.val,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-foreground/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full rounded-full", initial: {
                width: 0
              }, animate: {
                width: `${item.val}%`
              }, transition: {
                duration: 0.8,
                ease: "easeOut"
              }, style: {
                backgroundColor: item.color
              } }) })
            ] }, item.label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-foreground/5 border border-border/20 rounded-xl p-3 hover:shadow-[0_0_15px_rgba(var(--primary),0.05)] transition-all", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground mb-3", children: "Region Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2.5", children: kpiData.regions.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-[9px] text-muted-foreground mb-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.name }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold text-foreground", children: [
                  item.val,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 bg-foreground/10 rounded-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full rounded-full bg-primary", initial: {
                width: 0
              }, animate: {
                width: `${item.val}%`
              }, transition: {
                duration: 0.8,
                ease: "easeOut"
              } }) })
            ] }, item.name)) })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8", children: [{
      title: "Centralized Rule Checks",
      desc: "Validates coordinate offsets, near/far-end bindings, and Pop overlaps automatically on plan upload."
    }, {
      title: "Role-Scoped Lifecycles",
      desc: "Orchestrates task assignments across MW Planners, Region Deployment, I&C Partners, and region operations."
    }, {
      title: "Acceptance Test Verification",
      desc: "Integrates physical photo proof audits with soft validation ping logs into a single sign-off desk."
    }, {
      title: "Traffic Shift Gatekeepers",
      desc: "Ensures no traffic shifts are executed without active technology, configuration, and routing checks."
    }].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { whileHover: {
      scale: 1.02,
      translateY: -2
    }, transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-sm font-bold text-primary", children: item.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5 leading-relaxed font-light", children: item.desc })
    ] }) }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "workflows", className: "mt-24 scroll-mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Interactive Walkthrough" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
        "Explore the lifecycle of ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "network plans" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-sm leading-relaxed max-w-3xl", children: "NETRA orchestrates three critical lifecycles inside the region operations floor. Select a flow below to trace the steps, assignees, and decision loops." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap gap-2 border-b border-border/20 pb-3", children: [{
        id: "deployment",
        label: "1. Deployment Lifecycle Flow",
        desc: "From MW plan upload to Region Operations"
      }, {
        id: "shifting",
        label: "2. Traffic Shifting Flow",
        desc: "IP verification & rollback controls"
      }, {
        id: "dismantle",
        label: "3. Dual-Site Decommissioning",
        desc: "Coordinated dismantle tracking"
      }].map((flow) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveWorkflow(flow.id), className: `flex-1 min-w-[200px] text-left p-4 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${activeWorkflow === flow.id ? "bg-primary/10 border-primary text-foreground shadow-sm" : "border-border/40 text-muted-foreground hover:text-foreground hover:bg-foreground/5"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-xs uppercase tracking-wider", children: flow.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground mt-1 font-light", children: flow.desc }),
        activeWorkflow === flow.id && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary" })
      ] }, flow.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
        activeWorkflow === "deployment" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 15
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -15
        }, transition: {
          duration: 0.35
        }, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-5 gap-4", children: deploymentSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "relative flex flex-col justify-between p-5 hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all", children: [
              idx < deploymentSteps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -translate-y-1/2 -right-3 z-10 hidden lg:flex items-center justify-center w-5 h-5 rounded-full bg-background border border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-primary bg-primary/10 rounded-full px-2 py-0.5 font-bold", children: step.step }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono font-bold uppercase tracking-widest text-[#059669] bg-[#059669]/10 px-1.5 py-0.5 rounded border border-[#059669]/20", children: step.badge })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60 mt-4", children: step.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-semibold font-display text-foreground mt-1 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StepIcon, { className: "h-3.5 w-3.5 text-primary shrink-0" }),
                  step.title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-2 leading-relaxed font-light", children: step.desc })
              ] })
            ] }, idx);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, className: "p-6 border-[#7C3AED]/20 bg-[#7C3AED]/2 mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[auto_1fr] gap-4 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-[#7C3AED]/15 text-[#C084FC] flex items-center justify-center border border-[#7C3AED]/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-6 w-6 animate-pulse" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground flex items-center gap-2", children: "Acceptance Testing (AT) Desk Verification Details" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed font-light", children: [
                "Once commissioned, the MS Partner team triggers two validation stages: ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Physical AT" }),
                " (matching multi-angle photos of antenna mount stability, grounding, and serial tags) and ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Soft AT" }),
                " (capturing automated CLI trace logs, latency, and interface alignment data). All checklists and logs are linked directly to the plan record for audit trails."
              ] })
            ] })
          ] }) })
        ] }, "deployment"),
        activeWorkflow === "shifting" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 15
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -15
        }, transition: {
          duration: 0.35
        }, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: shiftSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "relative flex flex-col justify-between p-6 hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all", children: [
              idx < shiftSteps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -translate-y-1/2 -right-4 z-10 hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-background border border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-primary bg-primary/10 rounded-full px-2.5 py-0.5 font-bold", children: [
                  "STAGE ",
                  step.step
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60 mt-4", children: step.role || "Circle Ops Control" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-semibold font-display text-foreground mt-1 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StepIcon, { className: "h-4 w-4 text-primary shrink-0" }),
                  step.title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 leading-relaxed font-light", children: step.desc })
              ] })
            ] }, idx);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, className: "p-5 border-emerald-500/20 bg-emerald-500/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold text-foreground", children: "Traffic Shift Approval Loop" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-1 leading-relaxed font-light", children: "Prior to cutover, circle operations run IP validation. If route pings, interface config checks, and technology rules match standard templates, Circle Ops releases the traffic shift, redirecting traffic to the new MW link." })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, className: "p-5 border-red-500/20 bg-red-500/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-lg bg-red-500/15 text-red-400 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4.5 w-4.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold text-foreground", children: "Plan Reject, Hold, & Cancel Gates" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-1 leading-relaxed font-light", children: "If configuration verify tests fail, operations routes the plan back to the **MW Planner** for rectification. Ops also maintains controls to place active plans on **Hold** or **Cancel** them entirely to prevent conflicts." })
              ] })
            ] }) })
          ] })
        ] }, "shifting"),
        activeWorkflow === "dismantle" && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 15
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -15
        }, transition: {
          duration: 0.35
        }, className: "space-y-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-4 gap-4", children: [{
            step: "01",
            role: "MW Planner",
            title: "Dual-Site Excel Upload",
            desc: "Planner uploads Excel defining the near-end and far-end microwave hops to decommission simultaneously.",
            icon: FileText
          }, {
            step: "02",
            role: "Deployment Team",
            title: "Site Survey Assignment",
            desc: "Tasks are assigned to the deployment team to survey both sites, checking safety bounds and material logs.",
            icon: ClipboardList
          }, {
            step: "03",
            role: "I&C Partner",
            title: "Dismantling Action",
            desc: "I&C partner de-installs antennas, mounts, and indoor units from both sites, documenting de-installation proof.",
            icon: RotateCcw
          }, {
            step: "04",
            role: "Circle Operations",
            title: "Warehouse Shift & Listing",
            desc: "Operations team coordinates shifting de-commissioned hardware to the warehouse, performing serial-matching audits.",
            icon: Warehouse
          }].map((step, idx, arr) => {
            const StepIcon = step.icon;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "relative flex flex-col justify-between p-5 hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all", children: [
              idx < arr.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 -translate-y-1/2 -right-3 z-10 hidden lg:flex items-center justify-center w-5 h-5 rounded-full bg-background border border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 text-primary" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-primary bg-primary/10 rounded-full px-2 py-0.5 font-bold", children: [
                  "STEP ",
                  step.step
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-mono font-bold uppercase tracking-widest text-muted-foreground/60 mt-4", children: step.role }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "text-sm font-semibold font-display text-foreground mt-1 flex items-center gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(StepIcon, { className: "h-3.5 w-3.5 text-primary shrink-0" }),
                  step.title
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-2 leading-relaxed font-light", children: step.desc })
              ] })
            ] }, idx);
          }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, className: "p-6 border-[#0891B2]/20 bg-[#0891B2]/2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-[auto_1fr] gap-4 items-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-[#0891B2]/15 text-[#22D3EE] flex items-center justify-center border border-[#0891B2]/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Warehouse, { className: "h-6 w-6 animate-pulse" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Coordinated Dual-Site Dismantling & Reconciliation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1 leading-relaxed font-light", children: "Microwave hops always link two sites (near-end and far-end). NETRA tracks dismantling on both tower sites simultaneously. On-site engineers document hardware removals, which circle operations reconcile against the master inventory before updates are pushed to the central warehouse ledger." })
            ] })
          ] }) })
        ] }, "dismantle")
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "simulator", className: "mt-24 scroll-mt-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Live Operations Sandbox" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
            "The NETRA ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Operations Simulator" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground leading-relaxed max-w-2xl font-light text-sm", children: "Interact with the visualizer steps below to see how NETRA parses design sheets, runs coordinate validation, conducts acceptance testing audits, and compiles circle-level reports." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setIsPlayingSandbox(!isPlayingSandbox), className: "flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-full border border-border/60 hover:border-primary hover:text-primary transition-all self-start md:self-auto cursor-pointer bg-foreground/[0.02]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full ${isPlayingSandbox ? "bg-primary animate-pulse" : "bg-muted-foreground/30"}` }),
          isPlayingSandbox ? "Pause Simulation" : "Resume Simulation"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 mb-6 flex bg-foreground/5 rounded-xl p-1 border border-border/20 max-w-xl", children: [{
        id: "deployment",
        label: "Deployment Flow",
        icon: Upload
      }, {
        id: "shifting",
        label: "Traffic Shifting",
        icon: ArrowLeftRight
      }, {
        id: "dismantle",
        label: "Dismantling Flow",
        icon: RotateCcw
      }].map((flow) => {
        const FlowIcon = flow.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveWorkflow(flow.id), className: `flex-1 flex items-center justify-center gap-2 py-2 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${activeWorkflow === flow.id ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FlowIcon, { className: "h-3.5 w-3.5" }),
          flow.label
        ] }, flow.id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-[1fr_1.3fr] gap-8 items-stretch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: activeSteps.map((step, idx) => {
          const isActive = netraPhase === idx;
          const isCompleted = netraPhase > idx;
          const StepIcon = step.id === "planning" || step.id === "dismantle_upload" ? Upload : step.id === "deployment" || step.id === "site_surveys" ? ClipboardList : step.id === "ic_partner" || step.id === "dismantling_action" ? TowerControl : step.id === "at_desk" || step.id === "warehouse_intake" || step.id === "config_check" ? ShieldCheck : ArrowLeftRight;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => {
            setNetraPhase(idx);
            setSubStep(0);
            if (step.id !== "operations" && step.id !== "shift_gate") setOpsStatus("SHIFTED");
          }, className: `w-full flex items-start gap-4 p-5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${isActive ? "bg-primary/5 border-primary shadow-[0_0_24px_rgba(var(--primary),0.08)]" : "border-border/40 hover:border-primary/20 bg-surface/10 text-muted-foreground hover:text-foreground"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 border ${isActive ? "bg-primary border-primary text-white shadow-[0_0_15px_rgba(var(--primary),0.3)]" : isCompleted ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400" : "bg-surface border-border/20 text-muted-foreground"}`, children: isCompleted ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(StepIcon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold uppercase tracking-wider block", style: {
                color: isActive ? "var(--primary)" : isCompleted ? "#10b981" : "inherit"
              }, children: step.role }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "font-display font-bold text-sm mt-0.5 text-foreground", children: [
                idx + 1,
                ". ",
                step.label
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: isActive && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
                height: 0,
                opacity: 0
              }, animate: {
                height: "auto",
                opacity: 1
              }, exit: {
                height: 0,
                opacity: 0
              }, transition: {
                duration: 0.3
              }, className: "overflow-hidden", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 leading-relaxed font-light", children: step.desc }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 pt-2 border-t border-border/10 flex flex-wrap gap-1.5", children: step.checkpoints.map((cp, cpIdx) => {
                  const checked = subStep >= cpIdx + 1;
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex items-center gap-1 px-1.5 py-0.5 rounded text-[8.5px] font-mono border ${checked ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-bold" : "bg-foreground/5 text-muted-foreground/30 border-border/10"}`, children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-1 w-1 rounded-full shrink-0 ${checked ? "bg-emerald-400 animate-pulse" : "bg-muted-foreground/20"}` }),
                    cp
                  ] }, cpIdx);
                }) })
              ] }) })
            ] })
          ] }, step.id);
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "p-6 relative flex flex-col justify-between overflow-hidden bg-surface-2/10 shadow-2xl min-h-[300px]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/20 pb-3 mb-4 flex justify-between items-center select-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] font-mono font-bold tracking-widest text-primary uppercase", children: [
                  "Stage ",
                  netraPhase + 1,
                  " Visualization"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold font-display text-foreground mt-0.5", children: rightPanelTab === "hud" ? currentStep.title : "Report Ledger Table" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex bg-foreground/5 rounded-lg p-0.5 border border-border/30", children: ["hud", "excel"].map((view) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setRightPanelTab(view), className: `px-2 py-0.5 text-[9px] font-mono font-bold rounded cursor-pointer transition-colors ${rightPanelTab === view ? "bg-primary text-white shadow-sm" : "text-muted-foreground hover:text-foreground"}`, children: view === "hud" ? "Visual HUD" : "Excel Report 📊" }, view)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 flex flex-col justify-center items-center relative overflow-hidden bg-black/40 rounded-2xl border border-border/10 p-4 min-h-[220px]", children: rightPanelTab === "hud" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full", children: [
              (currentStep.id === "planning" || currentStep.id === "dismantle_upload") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-grid-pattern opacity-10" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full border border-primary/20 flex items-center justify-center", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "w-24 h-24 rounded-full border border-primary/40 flex items-center justify-center", animate: {
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.7, 0.3]
                  }, transition: {
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut"
                  } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute w-full h-[1px] bg-primary/20" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute h-full w-[1px] bg-primary/20" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start z-10 select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono text-primary font-bold", children: "GRID CALIBRATION: ACTIVE" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono text-muted-foreground/80", children: "LAT/LONG PLOT" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center items-center h-28 z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-20", viewBox: "0 0 100 40", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 0 10 L 100 10 M 0 20 L 100 20 M 0 30 L 100 30", stroke: "rgba(26,111,212,0.15)", strokeWidth: "0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(motion.path, { d: "M 10 30 L 35 15 L 70 25 L 90 10", fill: "none", stroke: "var(--primary)", strokeWidth: "1.5", initial: {
                    pathLength: 0
                  }, animate: {
                    pathLength: subStep / 3
                  }, transition: {
                    duration: 0.5
                  } }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10", cy: "30", r: "2.5", fill: subStep >= 1 ? "var(--primary)" : "rgba(255,255,255,0.2)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "35", cy: "15", r: "2.5", fill: subStep >= 2 ? "var(--primary)" : "rgba(255,255,255,0.2)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "70", cy: "25", r: "2.5", fill: subStep >= 3 ? "var(--primary)" : "rgba(255,255,255,0.2)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "90", cy: "10", r: "2.5", fill: subStep >= 3 ? "var(--accent)" : "rgba(255,255,255,0.2)" })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-background/60 border border-border/20 rounded-xl p-2 z-10 select-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 text-center text-[8.5px] font-mono", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "HOP DIST" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-emerald-400", children: "4.21 km" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "NOMINAL QTR" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-emerald-400", children: "VALID" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "POP BINDINGS" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-emerald-400", children: "MATCH" })
                  ] })
                ] }) })
              ] }),
              (currentStep.id === "deployment" || currentStep.id === "site_surveys") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono text-[#F59E0B] font-bold", children: "RESOURCE & SURVEY DISPATCH" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono text-muted-foreground/80", children: "ALLOCATION MATRIX" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2 my-2 w-full z-10 select-none", children: [{
                  name: currentStep.id === "site_surveys" ? "Tower Structural Audit" : "ODU Microwave Unit",
                  key: currentStep.id === "site_surveys" ? "DOC-SA-204" : "SN-88429B",
                  allocated: subStep >= 1
                }, {
                  name: currentStep.id === "site_surveys" ? "Power Grid Isolation" : "Antenna Mount Brackets",
                  key: currentStep.id === "site_surveys" ? "DOC-PI-205" : "PO-33104",
                  allocated: subStep >= 2
                }, {
                  name: currentStep.id === "site_surveys" ? "Field Safety Sign-off" : "Grounding Kits & Strips",
                  key: currentStep.id === "site_surveys" ? "DOC-SS-208" : "PO-33105",
                  allocated: subStep >= 3
                }, {
                  name: currentStep.id === "site_surveys" ? "Field Riggers Dispatched" : "Cat6 Outdoor Cables",
                  key: currentStep.id === "site_surveys" ? "CREW-D-09" : "PO-33109",
                  allocated: subStep >= 3
                }].map((item, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/40 border border-border/20 rounded-lg p-2 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-semibold text-foreground truncate max-w-[100px]", children: item.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[7.5px] font-mono text-muted-foreground/75 mt-0.5", children: item.key })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8px] font-mono px-1.5 py-0.5 rounded font-bold ${item.allocated ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-foreground/5 text-muted-foreground/30"}`, children: item.allocated ? "READY" : "QUEUED" })
                ] }, idx)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/60 border border-border/20 rounded-xl p-2.5 flex items-center justify-between z-10 select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Warehouse, { className: "h-5 w-5 text-[#F59E0B]" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8.5px] font-semibold text-foreground", children: "Partner Assigned" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[7.5px] font-mono text-muted-foreground mt-0.5", children: "MS Installation Partner Ltd." })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8.5px] font-mono font-bold px-2 py-0.5 rounded ${subStep >= 3 ? "text-emerald-400 bg-emerald-500/10" : "text-muted-foreground/30 animate-pulse"}`, children: subStep >= 3 ? "DISPATCHED" : "PREPARING" })
                ] })
              ] }),
              (currentStep.id === "ic_partner" || currentStep.id === "dismantling_action") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono text-[#10B981] font-bold", children: "ON-SITE RIGGING OPERATIONS" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono text-muted-foreground/80", children: "COMMISSIONING STENCIL" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_1.2fr] gap-4 items-center my-1 z-10 w-full select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-center relative py-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TowerControl, { className: `h-24 w-24 ${subStep >= 3 ? "text-emerald-400" : "text-muted-foreground/40"} transition-colors` }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 w-3 h-3 bg-red-500 rounded-full animate-ping", style: {
                      animationDuration: "2s"
                    } }),
                    subStep >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-4 left-1/2 -translate-x-1/2 flex gap-1 items-center", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-4 w-4 rounded-full border border-emerald-400/40 animate-ping absolute" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-8 w-8 rounded-full border border-emerald-400/20 animate-ping absolute", style: {
                        animationDelay: "0.5s"
                      } })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/40 border border-border/20 rounded-lg p-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7.5px] text-muted-foreground uppercase font-mono", children: currentStep.id === "dismantling_action" ? "Near-End De-installation" : "Antenna Alignment" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[11px] font-mono font-bold ${subStep >= 2 ? "text-emerald-400" : "text-[#10B981] animate-pulse"}`, children: currentStep.id === "dismantling_action" ? subStep >= 1 ? "REMOVED" : "DE-MOUNTING..." : subStep >= 2 ? "98.8% Aligned" : "Aligning..." }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-muted-foreground font-mono", children: currentStep.id === "dismantling_action" ? "Tower A" : "+/- 0.2°" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/40 border border-border/20 rounded-lg p-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7.5px] text-muted-foreground uppercase font-mono", children: currentStep.id === "dismantling_action" ? "Far-End De-installation" : "ODU Frequency Bind" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[10px] font-mono font-bold ${subStep >= 3 ? "text-emerald-400" : "text-foreground"}`, children: currentStep.id === "dismantling_action" ? subStep >= 2 ? "REMOVED" : "DE-MOUNTING..." : subStep >= 3 ? "7.2 GHz (LOCKED)" : "Configuring..." }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-muted-foreground font-mono", children: currentStep.id === "dismantling_action" ? "Tower B" : "H-Pol" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/60 border border-border/20 rounded-xl p-1.5 text-center text-[8.5px] font-mono text-muted-foreground z-10 select-none", children: [
                  "Status: ",
                  subStep >= 3 ? "Operations complete, serial tags registered" : "Rigging in progress..."
                ] })
              ] }),
              (currentStep.id === "at_desk" || currentStep.id === "warehouse_intake" || currentStep.id === "config_check" || currentStep.id === "validation_gate") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono text-[#7C3AED] font-bold", children: "COMPLIANCE & VALIDATION DESK" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono text-muted-foreground/80", children: "AUDIT DASHBOARD" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-2 my-2 w-full z-10 select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/40 border border-border/20 rounded-lg p-2 flex flex-col justify-center items-center text-center relative overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7.5px] text-muted-foreground uppercase font-mono", children: currentStep.id === "warehouse_intake" ? "Serial SN-88429B" : currentStep.id === "config_check" ? "VLAN Configuration" : "Physical AT / Peering" }),
                    subStep >= 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] font-bold text-emerald-400 flex items-center gap-0.5 mt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
                      " ",
                      currentStep.id === "warehouse_intake" ? "Reconciled" : currentStep.id === "config_check" ? "VLAN 102 (OK)" : "Approved"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold text-[#7C3AED] animate-pulse mt-1", children: "Checking..." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-background/40 border border-border/20 rounded-lg p-2 flex flex-col justify-center items-center text-center relative overflow-hidden", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[7.5px] text-muted-foreground uppercase font-mono", children: currentStep.id === "warehouse_intake" ? "Serial SN-88430B" : currentStep.id === "config_check" ? "IP Subnet check" : "Soft AT / Latency" }),
                    subStep >= 2 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[9px] font-bold text-emerald-400 flex items-center gap-0.5 mt-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3" }),
                      " ",
                      currentStep.id === "warehouse_intake" ? "Reconciled" : currentStep.id === "config_check" ? "10.42.12.89 (OK)" : "Latency: 12ms"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[9px] font-bold text-muted-foreground/30 mt-1", children: "Awaiting..." })
                  ] })
                ] }),
                currentStep.id === "validation_gate" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-black/60 border border-border/20 rounded-xl p-1.5 h-16 w-full z-10 select-none flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-12", viewBox: "0 0 100 30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 10 15 L 40 15 M 40 15 L 60 5 M 40 15 L 60 25", stroke: "rgba(255,255,255,0.15)", strokeWidth: "0.8" }),
                  subStep >= 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 10 15 L 40 15", stroke: "#7C3AED", strokeWidth: "1.2" }),
                  subStep >= 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 40 15 L 60 5", stroke: "#10B981", strokeWidth: "1.2" }),
                  subStep >= 3 && /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 40 15 L 60 25", stroke: "#EF4444", strokeWidth: "0.8", strokeDasharray: "2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10", cy: "15", r: "2.5", fill: subStep >= 1 ? "#7C3AED" : "rgba(255,255,255,0.2)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "40", cy: "15", r: "2.5", fill: subStep >= 2 ? "#7C3AED" : "rgba(255,255,255,0.2)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "5", r: "2.5", fill: subStep >= 2 ? "#10B981" : "rgba(255,255,255,0.2)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "25", r: "2.5", fill: subStep >= 3 ? "rgba(239,68,68,0.4)" : "rgba(255,255,255,0.2)" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "4", fill: "#10B981", fontSize: "4", fontFamily: "monospace", children: "PASS" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "28", fill: "#EF4444", fontSize: "4", fontFamily: "monospace", children: "REJECT" })
                ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-black/60 border border-border/20 rounded-xl p-2 h-16 overflow-hidden font-mono text-[8.5px] text-muted-foreground z-10 w-full", children: subStep >= 2 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-emerald-400", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> ping 10.42.12.89 -c 5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> 64 bytes from 10.42.12.89: seq=0 time=12ms" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold", children: "> Ping verification Success. Audit PASS." })
                ] }) : subStep >= 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-purple-400 animate-pulse", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> ping 10.42.12.89 -c 5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "> Awaiting loopback interface ping log..." })
                ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground/30 text-center py-2", children: "Awaiting configuration audit logs..." }) })
              ] }),
              (currentStep.id === "operations" || currentStep.id === "shift_gate") && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between items-start select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-mono text-[#BE185D] font-bold", children: "LIVE ROUTE CUTOVER GATE" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[8px] font-mono px-1.5 py-0.5 rounded font-bold ${opsStatus === "SHIFTED" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : opsStatus === "HELD" ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`, children: opsStatus })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative py-2 px-3 bg-background/50 border border-border/20 rounded-xl my-2 flex items-center justify-between w-full z-10 select-none", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-1.5 py-0.5 bg-foreground/10 border border-border rounded text-[8px] font-mono text-foreground font-bold", children: "CSR" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1 relative", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[7px] w-12 border-t border-dashed block relative ${opsStatus === "SHIFTED" ? "border-red-500/20" : "border-red-500/50"}`, children: opsStatus !== "SHIFTED" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1/2 -translate-y-1/2 left-0 h-1.5 w-1.5 rounded-full bg-red-400 animate-ping" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[7px] ml-1 font-mono transition-colors ${opsStatus === "SHIFTED" ? "text-muted-foreground/30" : "text-red-400"}`, children: "Old Hops" })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[7px] w-12 border-t block relative ${opsStatus === "SHIFTED" ? "border-emerald-400" : "border-muted-foreground/20"}`, children: opsStatus === "SHIFTED" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-1/2 -translate-y-1/2 left-full -translate-x-full h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[7px] ml-1 font-mono transition-colors ${opsStatus === "SHIFTED" ? "text-emerald-400 font-bold" : "text-muted-foreground/30"}`, children: "New MW" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[8px] font-mono bg-black/45 p-1.5 rounded border border-border/10 shrink-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-muted-foreground", children: "Load State:" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-bold mt-0.5 ${opsStatus === "SHIFTED" ? "text-emerald-400" : "text-muted-foreground/40"}`, children: opsStatus === "SHIFTED" ? "74% Active" : "0% Offline" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-3 gap-2 mt-1 text-[9px] font-mono text-center w-full z-10", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleOpsAction("SHIFTED"), className: `py-1 rounded-lg border transition-all cursor-pointer font-bold ${opsStatus === "SHIFTED" ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.2)]" : "border-border/30 text-muted-foreground hover:text-foreground hover:bg-foreground/5"}`, children: "SHIFT" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleOpsAction("HELD"), className: `py-1 rounded-lg border transition-all cursor-pointer font-bold ${opsStatus === "HELD" ? "bg-amber-500/20 border-amber-500/40 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.2)]" : "border-border/30 text-muted-foreground hover:text-foreground hover:bg-foreground/5"}`, children: "HOLD" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => handleOpsAction("CANCELLED"), className: `py-1 rounded-lg border transition-all cursor-pointer font-bold ${opsStatus === "CANCELLED" ? "bg-red-500/20 border-red-500/40 text-red-400 shadow-[0_0_10px_rgba(239,68,68,0.2)]" : "border-border/30 text-muted-foreground hover:text-foreground hover:bg-foreground/5"}`, children: "CANCEL" })
                ] })
              ] })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between h-full w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#107c41] text-white p-2 rounded-t-xl text-[10px] font-mono flex items-center justify-between shadow-md w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3.5 w-3.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "NETRA_",
                    activeWorkflow,
                    "_report.xlsx"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8.5px] bg-white/10 px-1.5 py-0.5 rounded border border-white/20", children: "Excel Online" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#f3f2f1] dark:bg-[#201f1e] border-x border-b border-border/20 p-1.5 text-[9px] font-mono flex items-center justify-between text-muted-foreground select-none w-full text-left", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cursor-pointer hover:text-foreground hover:font-bold", children: "File" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cursor-pointer hover:text-foreground hover:font-bold", children: "Home" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "cursor-pointer hover:text-foreground hover:font-bold font-bold text-foreground border-b-2 border-[#107c41] pb-0.5", children: "Data" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: triggerExport, disabled: isExporting, className: "flex items-center gap-1 px-2 py-0.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 rounded cursor-pointer text-[8px] font-bold", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-2.5 w-2.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Export CSV" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-auto bg-white dark:bg-[#1b1a19] text-[#323130] dark:text-[#f3f2f1] font-mono text-[9px] min-h-[140px] w-full border-x border-border/20 relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full border-collapse", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-[#f3f2f1] dark:bg-[#201f1e]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "w-6 border border-border/20 p-1 text-center font-bold text-muted-foreground" }),
                    excelData[activeWorkflow][excelSheet].headers.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "border border-border/20 p-1 text-center font-bold text-muted-foreground uppercase", children: String.fromCharCode(65 + i) }, i))
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-[#fcfbfb] dark:bg-[#292827] font-bold", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-border/20 p-1 text-center text-muted-foreground", children: "1" }),
                      excelData[activeWorkflow][excelSheet].headers.map((h, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "border border-border/20 p-1 text-center font-semibold text-primary truncate max-w-[80px]", children: h }, i))
                    ] }),
                    excelData[activeWorkflow][excelSheet].rows.map((row, rIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-foreground/5 transition-colors", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "bg-[#f3f2f1] dark:bg-[#201f1e] border border-border/20 p-1 text-center font-bold text-muted-foreground", children: rIdx + 2 }),
                      row.map((cell, cIdx) => {
                        const isCellActive = activeCell?.r === rIdx && activeCell?.c === cIdx;
                        const cellVal = getCellVal(cell, cIdx, rIdx);
                        const isStatusCell = activeWorkflow === "deployment" && excelSheet === "sheet1" && rIdx === 4 && cIdx === 6 || activeWorkflow === "shifting" && excelSheet === "sheet1" && cIdx === 5;
                        let textStyle = "";
                        if (isStatusCell) {
                          if (cellVal === "Commissioned" || cellVal === "SHIFTED" || cellVal === "ACTIVE") textStyle = "text-emerald-500 font-bold";
                          else if (cellVal === "HELD") textStyle = "text-amber-500 font-bold";
                          else if (cellVal === "CANCELLED") textStyle = "text-red-500 font-bold";
                        }
                        return /* @__PURE__ */ jsxRuntimeExports.jsx("td", { onClick: () => setActiveCell({
                          r: rIdx,
                          c: cIdx
                        }), className: `border border-border/20 p-1 text-center cursor-pointer select-text truncate max-w-[80px] transition-all ${isCellActive ? "outline outline-1 outline-offset-[-1px] outline-[#107c41] bg-[#107c41]/5" : ""} ${textStyle}`, children: cellVal }, cIdx);
                      })
                    ] }, rIdx))
                  ] })
                ] }),
                isExporting && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 bg-black/75 backdrop-blur-[1px] flex flex-col items-center justify-center text-white p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 bg-foreground/10 rounded-full h-1 overflow-hidden mb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-emerald-500 rounded-full transition-all duration-300", style: {
                    width: `${exportProgress}%`
                  } }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[9px] font-mono font-bold animate-pulse", children: [
                    "Exporting spreadsheet... ",
                    exportProgress,
                    "%"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-[#f3f2f1] dark:bg-[#201f1e] border-x border-b border-border/20 rounded-b-xl p-1 text-[8.5px] font-mono flex items-center gap-1.5 select-none w-full", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex bg-foreground/10 rounded border border-border/20 p-0.5", children: ["sheet1", "sheet2"].map((sheet) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                  setExcelSheet(sheet);
                  setActiveCell(null);
                }, className: `px-2 py-0.5 rounded transition-all cursor-pointer font-bold ${excelSheet === sheet ? "bg-white dark:bg-[#1b1a19] text-[#107c41] shadow-sm border border-border/10" : "text-muted-foreground hover:text-foreground"}`, children: excelData[activeWorkflow][sheet].title }, sheet)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/30 font-light", children: "| Ready" })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 pt-3 border-t border-border/20 flex justify-between items-center text-[8.5px] text-muted-foreground select-none font-mono", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                "Workflow: ",
                activeWorkflow === "deployment" ? "Deployment" : activeWorkflow === "shifting" ? "Shifting" : "Dismantling"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5 font-bold text-emerald-400", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" }),
                "SYSTEM LIVE"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: toastMsg && /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
              opacity: 0,
              y: 15
            }, animate: {
              opacity: 1,
              y: 0
            }, exit: {
              opacity: 0,
              y: 15
            }, className: "absolute bottom-4 left-4 right-4 z-30 bg-emerald-950/95 border border-emerald-500/40 text-emerald-300 rounded-xl p-2.5 flex items-center gap-2 shadow-xl backdrop-blur-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-emerald-400 shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-mono font-bold", children: toastMsg })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/40 bg-slate-950 p-4 font-mono text-[9px] text-slate-400 h-32 overflow-hidden flex flex-col justify-end text-left relative shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2.5 right-4 text-[8.5px] uppercase tracking-wider text-muted-foreground font-semibold", children: "Live Console Logs" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1 overflow-y-auto max-h-[90px] pr-2", children: [
              currentStep.logs.slice(0, subStep + 2).map((log, logIdx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${log.cls} truncate`, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary mr-1.5", children: ">" }),
                " ",
                log.txt
              ] }, logIdx)),
              subStep < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block h-3 w-1.5 bg-primary animate-pulse rounded-sm ml-0.5" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Role-Based Access" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
        "Unified coordination, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "scoped permissions" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground leading-relaxed max-w-3xl font-light text-sm", children: "NETRA coordinates actions across internal planning teams, region deployment engineers, third-party installation partners, and region operations leads." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4", children: roles.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.95
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.4,
        delay: i % 3 * 0.05
      }, whileHover: {
        scale: 1.02,
        translateY: -4
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "p-5 h-full hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4.5 w-4.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold font-display text-foreground", children: r.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2 leading-relaxed font-light", children: r.desc })
      ] }) }, r.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary font-bold", children: "Core Capabilities" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-3xl sm:text-4xl font-semibold", children: [
        "Designed for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "region operations floor" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid md:grid-cols-2 gap-6", children: capabilities.map((c, i) => {
        const Icon = c.icon;
        return /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          duration: 0.5,
          delay: i * 0.1
        }, whileHover: {
          scale: 1.01,
          translateY: -2
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, className: "flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(var(--primary),0.08)] transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg font-bold text-foreground", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground leading-relaxed font-light", children: c.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2 pt-4 border-t border-border/40", children: c.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-foreground/5 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground", children: t }, t)) })
        ] }) }, c.title);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
      opacity: 0,
      scale: 0.95
    }, whileInView: {
      opacity: 1,
      scale: 1
    }, viewport: {
      once: true
    }, transition: {
      duration: 0.6
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { hoverGlow: false, className: "relative overflow-hidden p-10 text-center hover:shadow-[0_0_30px_rgba(var(--primary),0.12)] transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold", children: "Stop tracking MW deployments in Excel." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground max-w-xl mx-auto font-light", children: "Talk to our team about deploying NETRA for your regional networks - we'll walk through automated template setup, partner provisioning, and operations configuration." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/demo", search: {
          product: "mids"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { children: "Request NETRA Demo" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "amc", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", children: "Ask About AMC" }) })
      ] })
    ] }) }) }) })
  ] });
}
export {
  NetraPage as component
};
