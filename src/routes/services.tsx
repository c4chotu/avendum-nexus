import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Palette, Code2, Gauge, Users, Kanban, Lightbulb,
  Brain, Terminal, RefreshCw, Check, ArrowRight,
  ShieldCheck, Server, AlertTriangle, Monitor, Play, Cpu,
  Database, Zap, Clock, Globe, ArrowUpRight, Sparkles, X, ChevronRight,
  Layout
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What We Build — Avendum Technologies" },
      { name: "description", content: "Platform engineering, custom dashboards, API integrations, and telecom AI automation capabilities." },
    ],
  }),
  component: ServicesPage,
});

import * as LucideIcons from "lucide-react";
import servicesData from "../data/services.json";

interface Service {
  id: string;
  icon: any;
  title: string;
  pitch: string;
  details: string;
  bullets: string[];
  tech: string[];
  theme: "emerald" | "indigo" | "violet" | "amber" | "cyan" | "pink" | "rose" | string;
  gridClass: string;
  accentColor: string;
  glowColor: string;
}

const getIcon = (iconName: string) => {
  return (LucideIcons as any)[iconName] || LucideIcons.HelpCircle;
};

const services: Service[] = (servicesData as any[]).map((s) => ({
  ...s,
  icon: getIcon(s.icon),
}));

function ServicesPage() {
  const [activeService, setActiveService] = useState<Service | null>(null);

  return (
    <div className="relative min-h-screen pt-6 pb-6 overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: "12s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <header className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4"
          >
            <Sparkles className="h-3.5 w-3.5" /> Capabilities & Solutions
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-semibold leading-tight tracking-tight"
          >
            Platform Engineering & Solution Development for <span className="text-gradient font-bold">Mission-Critical Networks</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-muted-foreground text-lg sm:text-xl leading-relaxed"
          >
            Built by telecom practitioners. We combine domain-specific artificial intelligence,
            resilient backends, and user-centric design to accelerate operations at scale.
          </motion.p>
        </header>

        {/* Bento Grid */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.08 }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const isWide = service.gridClass.includes("md:col-span-2");
            return (
              <motion.div
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
                }}
                className={service.gridClass}
              >
                <button
                  className="w-full h-full text-left cursor-pointer focus:outline-none group"
                  onClick={() => setActiveService(service)}
                >
                  <GlassCard
                    hoverGlow={true}
                    className="h-full flex flex-col justify-between border border-border/40 bg-card/45 backdrop-blur-md rounded-3xl p-8 hover:border-foreground/20 hover:bg-card/65 transition-all duration-300 relative overflow-hidden"
                    style={{ "--glow": service.glowColor } as React.CSSProperties}
                  >
                    {/* Subtle Grid Flare */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-foreground/5 to-transparent rounded-bl-full pointer-events-none" />

                    {isWide ? (
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start w-full">
                        <div className="lg:col-span-3 flex flex-col justify-between h-full">
                          <div>
                            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${service.accentColor} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                              <service.icon className="h-6 w-6" />
                            </div>

                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                              {service.title}
                            </h3>

                            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                              {service.pitch}
                            </p>
                          </div>
                        </div>

                        {/* Mini visualizer box on the right of the bento card */}
                        <div className="lg:col-span-2 w-full h-full min-h-[110px] flex items-center justify-center bg-foreground/[0.02] border border-border/20 rounded-2xl p-4 overflow-hidden relative">
                          {service.id === "telecom-ai" && <MiniTelemetryVisualizer />}
                          {service.id === "outsourcing" && <MiniSquadVisualizer />}
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${service.accentColor} mb-6 transition-transform group-hover:scale-110 duration-300`}>
                          <service.icon className="h-6 w-6" />
                        </div>

                        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors flex items-center gap-1.5">
                          {service.title}
                        </h3>

                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                          {service.pitch}
                        </p>
                      </div>
                    )}

                    <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-4 w-full">
                      <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                        {service.tech.slice(0, 3).map((t) => (
                          <span key={t} className="rounded-full bg-foreground/[0.03] border border-border/40 px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                            {t}
                          </span>
                        ))}
                        {service.tech.length > 3 && (
                          <span className="text-[10px] text-muted-foreground font-mono self-center px-1">
                            +{service.tech.length - 3}
                          </span>
                        )}
                      </div>
                      <span className="h-8 w-8 rounded-full bg-foreground/[0.04] border border-border/40 flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 shrink-0">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                  </GlassCard>
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Click View Detail Modal Overlay */}
      <AnimatePresence>
        {activeService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-xl"
              onClick={() => setActiveService(null)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-6xl bg-card border border-border/80 rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row"
            >
              {/* Left Panel: Content & Information */}
              <div className="w-full md:w-1/2 p-6 sm:p-10 overflow-y-auto border-r border-border/40 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono border ${activeService.accentColor}`}>
                      <activeService.icon className="h-3.5 w-3.5" /> SERVICE // 0{services.findIndex((s) => s.id === activeService.id) + 1}
                    </span>
                    <button
                      onClick={() => setActiveService(null)}
                      className="md:hidden p-2 rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>

                  <h2 className="font-display text-2xl sm:text-4xl font-semibold tracking-tight text-foreground">
                    {activeService.title}
                  </h2>

                  <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                    {activeService.details}
                  </p>

                  {/* Core Deliverables */}
                  <div className="mt-8">
                    <h4 className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Core Deliverables</h4>
                    <ul className="space-y-3">
                      {activeService.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-foreground/90">
                          <span className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5 text-primary`}>
                            <Check className="h-3 w-3" />
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technical Stack */}
                  <div className="mt-8">
                    <h4 className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">Technologies & Architecture</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeService.tech.map((t) => (
                        <span key={t} className="rounded-xl border border-border/45 bg-foreground/[0.02] px-3.5 py-1 text-xs font-mono text-muted-foreground hover:border-primary/40 transition-colors">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-border/40 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <Link
                    to="/demo"
                    onClick={() => setActiveService(null)}
                    className="w-full sm:w-auto"
                  >
                    <button className="w-full px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm">
                      Request Capability Demo <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>

                  <button
                    onClick={() => setActiveService(null)}
                    className="hidden md:flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    Close Panel <X className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Right Panel: Immersive Live Visualizer Playground */}
              <div className="w-full md:w-1/2 bg-[var(--surface)] p-6 sm:p-10 border-t md:border-t-0 border-border/40 overflow-y-auto flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-border/40 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">Interactive Simulation Sandbox</span>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground">STATUS: ONLINE</span>
                </div>

                <div className="flex-1 flex flex-col justify-center min-h-[300px]">
                  <InteractiveVisualizer serviceId={activeService.id} />
                </div>

                <div className="mt-6 text-center">
                  <p className="text-[11px] text-muted-foreground italic">
                    *Visualizations represent simulated telecom environments executing custom software workflows.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ---------------------------------------------------------
// Mini Card Visualizers
// ---------------------------------------------------------
function MiniTelemetryVisualizer() {
  return (
    <div className="flex items-end gap-1.5 h-16 w-full max-w-[120px] justify-center">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="w-2.5 bg-emerald-500/80 rounded-t-sm animate-pulse"
          style={{
            height: `${[24, 48, 16, 32, 40, 20][i]}px`,
            animationDelay: `${i * 0.15}s`,
            animationDuration: "1s"
          }}
        />
      ))}
    </div>
  );
}

function MiniSquadVisualizer() {
  return (
    <div className="flex flex-col gap-2 w-full max-w-[150px] text-[9px] font-mono justify-center">
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">RAN SQUAD</span>
        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" /> ON
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">MW SQUAD</span>
        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" /> ON
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-muted-foreground">CORE & IP SQUAD</span>
        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" /> ON
        </span>
      </div>
    </div>
  );
}

// ---------------------------------------------------------
// Interactive Visualizers for each Service (Overlay view)
// ---------------------------------------------------------
function InteractiveVisualizer({ serviceId }: { serviceId: string }) {

  if (serviceId === "telecom-ai") {
    return <TelecomAiVisualizer />;
  }

  if (serviceId === "ui-ux") {
    return <UiUxVisualizer />;
  }

  if (serviceId === "software-dev") {
    return <SoftwareDevVisualizer />;
  }

  if (serviceId === "acceleration") {
    return <AccelerationVisualizer />;
  }

  if (serviceId === "outsourcing") {
    return <OutsourcingVisualizer />;
  }

  if (serviceId === "strategy") {
    return <StrategyVisualizer />;
  }

  if (serviceId === "program-mgmt") {
    return <ProgramMgmtVisualizer />;
  }

  return (
    <div className="flex items-center justify-center h-48 bg-card/25 rounded-2xl border border-border/40">
      <Zap className="h-8 w-8 text-primary animate-bounce" />
    </div>
  );
}

// ---------------------------
// 1. Telecom AI Visualizer
// ---------------------------
function TelecomAiVisualizer() {
  const [logs, setLogs] = useState<string[]>([]);
  const [anomalyState, setAnomalyState] = useState<"idle" | "monitoring" | "detected" | "healing" | "resolved">("idle");
  const [siteHealth, setSiteHealth] = useState(100);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const simulateLogs = [
    "[SYSTEM] Ingesting RAN telemetry stream from Apache Kafka topic 'ran.metrics'...",
    "[KAFKA] Ingestion active: 14,200 messages/sec | Cluster: Healthy",
    "[METRIC] RAN Node LTE_RSRP = -96 dBm (Stable)",
    "[ALERT] Sudden signal-to-noise drop detected on Microwave Backhaul Site B!",
    "[AI_CLASSIFIER] Running Python anomaly inference pipeline...",
    "[AI_INTEGRATION] Anomaly Identified: Co-channel Interference (96.4% confidence)",
    "[AI_RECO] Recommendation generated: Retilt remote electrical antenna (RET) Sector B from 4° to 2°",
    "[SPRING_BOOT] Posting remedy instruction to Java agent executor...",
    "[SYSTEM] Configuration updated on Sector B via NMS API. Re-auditing...",
    "[METRIC] Health restored: RSRP -94 dBm | SINR: 19dB. Telemetry Stable.",
    "[RESOLVED] Self-healing loop completed. Alarm state resolved."
  ];

  useEffect(() => {
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

  useEffect(() => {
    runSimulation();
  }, []);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="glass p-4 rounded-2xl border border-border/40 flex flex-col justify-between">
          <span className="text-[10px] font-mono text-muted-foreground uppercase">RAN Site ID</span>
          <span className="text-sm font-semibold text-foreground mt-1">TX-440 (Houston Core)</span>
        </div>
        <div className="glass p-4 rounded-2xl border border-border/40 flex flex-col justify-between relative overflow-hidden">
          <span className="text-[10px] font-mono text-muted-foreground uppercase">Health Status</span>
          <div className="flex items-center gap-2 mt-1">
            <span className={`h-2.5 w-2.5 rounded-full ${anomalyState === "resolved" || anomalyState === "idle" ? "bg-emerald-500 animate-pulse" :
              anomalyState === "detected" ? "bg-red-500 animate-ping" : "bg-amber-500 animate-pulse"
              }`} />
            <span className="text-sm font-semibold">{siteHealth}%</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-border/20">
            <div
              className={`h-full transition-all duration-500 ${siteHealth > 80 ? "bg-emerald-500" : siteHealth > 50 ? "bg-amber-500" : "bg-red-500"}`}
              style={{ width: `${siteHealth}%` }}
            />
          </div>
        </div>
      </div>

      <div className="h-28 glass rounded-2xl border border-border/40 flex flex-col justify-end p-2 relative overflow-hidden bg-background/40">
        <span className="absolute top-2 left-3 text-[9px] font-mono text-muted-foreground uppercase">SINR Signal Telemetry (Kafka Stream)</span>

        <div className="w-full h-16 flex items-end justify-between px-2 gap-[2px]">
          {Array.from({ length: 32 }).map((_, i) => {
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

            return (
              <div
                key={i}
                className={`w-full rounded-t-sm transition-all duration-500 ${height} ${color}`}
              />
            );
          })}
        </div>
      </div>

      <div className="glass border border-border/60 bg-black/60 rounded-2xl p-4 flex flex-col">
        <div className="flex items-center gap-2 border-b border-border/30 pb-2 mb-3">
          <Terminal className="h-4 w-4 text-emerald-400" />
          <span className="text-[10px] font-mono text-emerald-400">AI AGENT EXECUTION CLI</span>
        </div>
        <div
          ref={logContainerRef}
          className="h-32 overflow-y-auto font-mono text-[10px] space-y-1.5 text-foreground/80 scrollbar-thin"
        >
          {logs.length === 0 ? (
            <span className="text-muted-foreground animate-pulse">Initializing engine...</span>
          ) : (
            logs.map((log, index) => {
              let textClass = "text-foreground/80";
              if (log.includes("[ALERT]")) textClass = "text-red-400 font-semibold";
              if (log.includes("[AI_RECO]")) textClass = "text-amber-400 font-semibold";
              if (log.includes("[RESOLVED]")) textClass = "text-emerald-400 font-semibold";
              if (log.includes("[METRIC]")) textClass = "text-muted-foreground";
              return (
                <div key={index} className={textClass}>
                  {log}
                </div>
              );
            })
          )}
        </div>
      </div>

      <button
        onClick={runSimulation}
        disabled={anomalyState === "monitoring" || anomalyState === "healing"}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border/40 hover:border-primary/40 bg-foreground/[0.02] hover:bg-primary/10 transition-all font-mono text-xs text-foreground/85 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RefreshCw className={`h-3.5 w-3.5 ${anomalyState === "monitoring" || anomalyState === "healing" ? "animate-spin text-primary" : ""}`} />
        Trigger Anomaly Simulation
      </button>
    </div>
  );
}

// ---------------------------
// 2. UI / UX Visualizer
// ---------------------------
function UiUxVisualizer() {
  const [theme, setTheme] = useState<"neon" | "plasma" | "dark">("neon");
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between border-b border-border/20 pb-4">
        <div className="flex gap-2">
          <button
            onClick={() => setTheme("neon")}
            className={`px-3 py-1 text-[10px] font-semibold font-mono rounded-full border transition-all cursor-pointer ${theme === "neon" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "border-border/40 hover:bg-secondary"
              }`}
          >
            React Slate
          </button>
          <button
            onClick={() => setTheme("plasma")}
            className={`px-3 py-1 text-[10px] font-semibold font-mono rounded-full border transition-all cursor-pointer ${theme === "plasma" ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/30" : "border-border/40 hover:bg-secondary"
              }`}
          >
            Vaadin Console
          </button>
          <button
            onClick={() => setTheme("dark")}
            className={`px-3 py-1 text-[10px] font-semibold font-mono rounded-full border transition-all cursor-pointer ${theme === "dark" ? "bg-foreground/10 text-foreground border-foreground/30" : "border-border/40 hover:bg-secondary"
              }`}
          >
            Cyber Slate
          </button>
        </div>

        <div className="flex gap-1 border border-border/30 rounded-lg p-0.5">
          <button
            onClick={() => setLayout("grid")}
            className={`p-1.5 rounded transition-all cursor-pointer ${layout === "grid" ? "bg-secondary text-primary" : "text-muted-foreground"}`}
          >
            <Layout className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={`p-1.5 rounded transition-all cursor-pointer ${layout === "list" ? "bg-secondary text-primary" : "text-muted-foreground"}`}
          >
            <Server className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="glass p-6 rounded-2xl border border-border/60 min-h-[220px] flex flex-col justify-between transition-colors bg-background/20 relative overflow-hidden">
        <div className={`absolute -top-16 -right-16 w-32 h-32 rounded-full blur-[40px] transition-colors duration-500 ${theme === "neon" ? "bg-emerald-500/20" : theme === "plasma" ? "bg-indigo-500/20" : "bg-foreground/5"
          }`} />

        <div className="flex items-center justify-between z-10">
          <span className="text-[10px] font-mono text-muted-foreground">OPERATIONS DASHBOARD v2</span>
          <span className={`h-2 w-2 rounded-full ${theme === "neon" ? "bg-emerald-500" : theme === "plasma" ? "bg-indigo-500" : "bg-foreground"}`} />
        </div>

        <div className="my-6 z-10">
          <div className={layout === "grid" ? "grid grid-cols-2 gap-4" : "flex flex-col gap-3"}>
            <div className={`p-4 rounded-xl border transition-all ${theme === "neon" ? "border-emerald-500/10 bg-emerald-500/[0.02] hover:border-emerald-500/20" :
              theme === "plasma" ? "border-indigo-500/10 bg-indigo-500/[0.02] hover:border-indigo-500/20" :
                "border-border/40 hover:bg-secondary/40"
              }`}>
              <div className="text-[9px] font-mono text-muted-foreground uppercase">RAN Site Health</div>
              <div className={`text-xl font-bold font-mono mt-1 ${theme === "neon" ? "text-emerald-400" : theme === "plasma" ? "text-indigo-400" : "text-foreground"
                }`}>98.4%</div>
            </div>
            <div className={`p-4 rounded-xl border transition-all ${theme === "neon" ? "border-emerald-500/10 bg-emerald-500/[0.02] hover:border-emerald-500/20" :
              theme === "plasma" ? "border-indigo-500/10 bg-indigo-500/[0.02] hover:border-indigo-500/20" :
                "border-border/40 hover:bg-secondary/40"
              }`}>
              <div className="text-[9px] font-mono text-muted-foreground uppercase">Power Load</div>
              <div className="text-xl font-bold font-mono mt-1 text-foreground">1.4 kW</div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center z-10">
          <div className="h-1.5 w-16 bg-border/20 rounded-full" />
          <div className={`h-5 w-5 rounded-full flex items-center justify-center border text-[10px] font-semibold transition-all duration-300 ${theme === "neon" ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10" :
            theme === "plasma" ? "border-indigo-500/30 text-indigo-400 bg-indigo-500/10" :
              "border-border/50 text-foreground bg-secondary"
            }`}>
            →
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-xs text-muted-foreground">
          Interactive Design Preview illustrating dark-theme palettes and fluid configurations.
        </p>
      </div>
    </div>
  );
}

// ---------------------------
// 3. Software Dev Visualizer
// ---------------------------
function SoftwareDevVisualizer() {
  const [activeTab, setActiveTab] = useState<"java" | "python">("java");
  const [codeText, setCodeText] = useState("");

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

  useEffect(() => {
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

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between border-b border-border/20 pb-2">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab("java")}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${activeTab === "java" ? "bg-secondary text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
          >
            SpringController.java
          </button>
          <button
            onClick={() => setActiveTab("python")}
            className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-colors cursor-pointer ${activeTab === "python" ? "bg-secondary text-primary font-semibold" : "text-muted-foreground hover:text-foreground"
              }`}
          >
            ai_inference_pipeline.py
          </button>
        </div>
        <span className="text-[10px] font-mono text-muted-foreground">Java 17 / Python 3.10</span>
      </div>

      <div className="glass border border-border/60 bg-black/70 rounded-2xl p-5 min-h-[260px] max-h-[300px] overflow-y-auto flex flex-col justify-between font-mono text-xs">
        <pre className="text-foreground/90 whitespace-pre-wrap leading-relaxed select-none scrollbar-thin">
          <code>{codeText}</code>
          <span className="animate-pulse font-bold text-primary">|</span>
        </pre>
      </div>

      <div className="flex justify-between items-center text-[10px] text-muted-foreground font-mono px-2">
        <span>Lines: {codeText.split("\n").length}</span>
        <span>Encoding: UTF-8</span>
      </div>
    </div>
  );
}

// ---------------------------
// 4. Service Acceleration Visualizer
// ---------------------------
function AccelerationVisualizer() {
  const [latency, setLatency] = useState(1450);
  const [cacheHit, setCacheHit] = useState(12.4);
  const [optimizing, setOptimizing] = useState(false);

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

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="glass p-5 rounded-2xl border border-border/40 flex flex-col justify-between">
          <span className="text-[10px] font-mono text-muted-foreground uppercase">Spring Boot API Latency</span>
          <div className="mt-2 flex items-baseline gap-1">
            <span className={`text-2xl font-bold font-mono transition-colors duration-500 ${latency < 100 ? "text-emerald-400" : latency < 500 ? "text-amber-400" : "text-red-400"
              }`}>
              {latency}
            </span>
            <span className="text-xs text-muted-foreground font-mono">ms</span>
          </div>
        </div>
        <div className="glass p-5 rounded-2xl border border-border/40 flex flex-col justify-between">
          <span className="text-[10px] font-mono text-muted-foreground uppercase">Kafka Message Ingest</span>
          <div className="mt-2 flex items-baseline gap-1">
            <span className={`text-2xl font-bold font-mono transition-colors duration-500 ${cacheHit > 80 ? "text-emerald-400" : "text-amber-400"
              }`}>
              {cacheHit}%
            </span>
          </div>
        </div>
      </div>

      <div className="glass border border-border/40 bg-background/50 rounded-2xl p-4 h-24 flex items-end justify-between relative overflow-hidden">
        <span className="absolute top-2 left-3 text-[9px] font-mono text-muted-foreground uppercase">Telemetry Trend (Spring Boot)</span>

        <div className="w-full h-12 flex items-end justify-between gap-1.5 px-1">
          {Array.from({ length: 16 }).map((_, i) => {
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

            return (
              <div
                key={i}
                className={`w-full rounded-t-sm transition-all duration-300 ${height} ${color}`}
              />
            );
          })}
        </div>
      </div>

      <div className="flex gap-3">
        <button
          onClick={startOptimization}
          disabled={optimizing || latency < 100}
          className="flex-1 py-3 px-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/95 hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-sm disabled:opacity-50"
        >
          {optimizing ? (
            <>
              <RefreshCw className="h-4 w-4 animate-spin" /> Optimizing JVM & Hot Paths...
            </>
          ) : (
            <>
              <Zap className="h-4 w-4 text-amber-300" /> Accelerate Network Pipelines
            </>
          )}
        </button>
        {latency < 100 && (
          <button
            onClick={reset}
            className="px-4 py-3 rounded-xl border border-border/40 hover:bg-secondary text-foreground text-sm cursor-pointer transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}

// ---------------------------
// 5. Platform Co-Engineering & Operations Support Visualizer
// ---------------------------
function OutsourcingVisualizer() {
  const [activeTeam, setActiveTeam] = useState<"ran" | "mw" | "core-ip">("ran");

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
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-2">
        {Object.keys(teams).map((key) => {
          const isActive = activeTeam === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTeam(key as any)}
              className={`p-3 rounded-xl border transition-all text-center cursor-pointer ${isActive ? "bg-primary/10 border-primary text-primary" : "border-border/40 hover:bg-secondary/40 text-muted-foreground"
                }`}
            >
              <span className="block text-xs font-semibold uppercase">{key} Squad</span>
            </button>
          );
        })}
      </div>

      <div className="glass p-5 rounded-2xl border border-border/50 bg-background/20 space-y-4">
        <div className="flex items-center justify-between border-b border-border/20 pb-3">
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold">{teams[activeTeam].name}</span>
          </div>
          <span className="inline-flex items-center gap-1 text-[9px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
            <Clock className="h-2.5 w-2.5" /> {teams[activeTeam].status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs font-mono">
          <div>
            <span className="block text-muted-foreground uppercase text-[8px]">Squad Roster</span>
            <ul className="mt-2 space-y-1 text-foreground/80">
              {teams[activeTeam].engineers.map((eng) => (
                <li key={eng} className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {eng}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <div>
              <span className="block text-muted-foreground uppercase text-[8px]">Focus & Domain</span>
              <span className="block mt-1 font-bold text-foreground">{teams[activeTeam].focus}</span>
            </div>
            <div>
              <span className="block text-muted-foreground uppercase text-[8px]">Telemetry Metric</span>
              <span className="block mt-1 font-bold text-emerald-400">{teams[activeTeam].metric}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-[11px] text-muted-foreground leading-relaxed">
          Select squads above to inspect integration teams. Our squads align to platform extension and operation needs.
        </p>
      </div>
    </div>
  );
}

// ---------------------------
// 6. Strategy Visualizer
// ---------------------------
function StrategyVisualizer() {
  const [nodeScale, setNodeScale] = useState(100);
  const [nocTeamSize, setNocTeamSize] = useState(15);

  const infraCostSavings = Math.floor(nodeScale * 180 + nocTeamSize * 1500);
  const hoursSavedPerWeek = Math.floor(nocTeamSize * 8 + (nodeScale / 5));

  return (
    <div className="space-y-6">
      <h3 className="text-sm font-semibold border-b border-border/20 pb-2 text-foreground">
        Network Planning Automation Calculator
      </h3>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-muted-foreground">RAN Capacity (Nodes)</span>
            <span className="text-foreground font-bold">{nodeScale} nodes</span>
          </div>
          <input
            type="range"
            min="50"
            max="1500"
            step="50"
            value={nodeScale}
            onChange={(e) => setNodeScale(parseInt(e.target.value))}
            className="w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-mono">
            <span className="text-muted-foreground">Planning Engineers (FTE)</span>
            <span className="text-foreground font-bold">{nocTeamSize} FTEs</span>
          </div>
          <input
            type="range"
            min="5"
            max="100"
            step="5"
            value={nocTeamSize}
            onChange={(e) => setNocTeamSize(parseInt(e.target.value))}
            className="w-full h-1.5 bg-border rounded-lg appearance-none cursor-pointer accent-primary"
          />
        </div>
      </div>

      <div className="glass p-5 rounded-2xl border border-border/50 bg-background/30 grid grid-cols-2 gap-4">
        <div className="flex flex-col justify-between">
          <span className="text-[10px] font-mono text-muted-foreground uppercase">Planning Savings</span>
          <span className="text-xl font-bold font-mono text-emerald-400 mt-2">
            ${infraCostSavings.toLocaleString()}/yr
          </span>
        </div>
        <div className="flex flex-col justify-between">
          <span className="text-[10px] font-mono text-muted-foreground uppercase">Auditing Time Saved</span>
          <span className="text-xl font-bold font-mono text-primary mt-2">
            {hoursSavedPerWeek} hrs/wk
          </span>
        </div>
      </div>

      <div className="text-[11px] text-muted-foreground leading-relaxed italic text-center">
        *Based on automated RAN configuration ingestion, Microwave Pathloss calculations, and closed-loop IP audits.
      </div>
    </div>
  );
}

// ---------------------------
// 7. Program Management
// ---------------------------
function ProgramMgmtVisualizer() {
  const [boardStep, setBoardStep] = useState(0);

  const steps = [
    { title: "Sprint Backlog", desc: "User stories & Spring Boot controller structures mapped.", color: "bg-muted" },
    { title: "GitHub Actions Dev", desc: "CI/CD testing pipeline executing docker tasks.", color: "bg-indigo-500/20 text-indigo-400" },
    { title: "Terraform Provision", desc: "Provisioning AWS Core IP and Kafka cluster nodes.", color: "bg-amber-500/20 text-amber-400" },
    { title: "Production Live", desc: "Canary rollout of self-healing software successful.", color: "bg-emerald-500/20 text-emerald-400" }
  ];

  const advanceStep = () => {
    setBoardStep((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center border-b border-border/20 pb-3">
        <span className="text-xs font-semibold text-foreground">GitHub Actions CI/CD Pipeline Simulator</span>
        <span className="text-[10px] font-mono text-muted-foreground">v1.2.0-stable</span>
      </div>

      <div className="flex flex-col gap-3">
        {steps.map((step, index) => {
          const isCurrent = boardStep === index;
          const isDone = index < boardStep;

          return (
            <div
              key={step.title}
              className={`p-3.5 rounded-xl border flex items-center justify-between transition-all duration-300 ${isCurrent ? "bg-primary/10 border-primary shadow-md" :
                isDone ? "border-emerald-500/20 bg-emerald-500/[0.02] opacity-60" : "border-border/40 opacity-40"
                }`}
            >
              <div className="flex items-center gap-3">
                <span className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-mono border ${isCurrent ? "bg-primary text-primary-foreground border-primary" :
                  isDone ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30" : "border-border"
                  }`}>
                  {isDone ? "✓" : index + 1}
                </span>
                <div>
                  <span className="block text-xs font-semibold text-foreground">{step.title}</span>
                  {isCurrent && <span className="block text-[10px] text-muted-foreground mt-0.5">{step.desc}</span>}
                </div>
              </div>

              {isCurrent && (
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              )}
            </div>
          );
        })}
      </div>

      <button
        onClick={advanceStep}
        className="w-full py-2.5 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground font-semibold border border-border/50 hover:border-primary/20 flex items-center justify-center gap-2 cursor-pointer transition-all text-xs font-mono"
      >
        <ChevronRight className="h-4 w-4 text-primary" />
        {boardStep === steps.length - 1 ? "Reset CI/CD Pipeline" : "Progress Deploy Pipeline"}
      </button>
    </div>
  );
}
