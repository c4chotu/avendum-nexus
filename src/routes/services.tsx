import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Palette, Code2, Gauge, Users, Kanban, Lightbulb,
  TrendingUp, Search, Sparkles, ArrowUpRight,
} from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { SlideDrawer } from "@/components/SlideDrawer";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Avendum Technologies" },
      { name: "description", content: "Nine capabilities spanning AI engineering, software, design, and program delivery for telecom operators." },
    ],
  }),
  component: ServicesPage,
});

interface Service {
  icon: typeof Palette;
  title: string;
  pitch: string;
  details: string;
  bullets: string[];
  tech: string[];
}

const services: Service[] = [
  {
    icon: Palette,
    title: "Visual UI & UX Design",
    pitch: "Human-centered interfaces for operator-grade complexity.",
    details: "We translate dense telecom data, multi-vendor workflows, and operations consoles into clear, accessible interfaces that engineers actually want to use.",
    bullets: ["User research & persona mapping", "Wireframing and IA modeling", "High-fidelity prototypes and design QA"],
    tech: ["Figma", "Adobe XD", "HTML5/CSS3"],
  },
  {
    icon: Code2,
    title: "Software Development",
    pitch: "Custom backends, microservices, and data platforms.",
    details: "From streaming ingestion to graph topology stores, we build the connective tissue that makes AI products viable in production.",
    bullets: ["Custom backend APIs", "Microservices & event-driven systems", "Relational, time-series, and graph data stores"],
    tech: ["React", "Node.js", "Python", "PostgreSQL", "Docker"],
  },
  {
    icon: Gauge,
    title: "Service Acceleration",
    pitch: "Latency, throughput, and reliability as a feature.",
    details: "Performance engineering for telecom-scale workloads — caching tiers, hot-path optimization, and observability that surfaces the right signals.",
    bullets: ["Load balancing & autoscaling", "Latency budgeting and tracing", "Multi-layer caching strategy"],
    tech: ["Redis", "Nginx", "AWS/GCP", "Prometheus"],
  },
  {
    icon: Users,
    title: "Outsourcing Solutions",
    pitch: "Dedicated squads that ship with you, not for you.",
    details: "Offshore engineering pods aligned to your delivery rituals, with 24/7/365 operations coverage when you need follow-the-sun support.",
    bullets: ["Dedicated offshore squads", "24/7/365 operations cover", "L1/L2 NOC & support engineering"],
    tech: ["DevOps support", "L1/L2 teams"],
  },
  {
    icon: Kanban,
    title: "Program Management",
    pitch: "Predictable releases for unpredictable telecom programs.",
    details: "Hands-on program leadership across multi-vendor releases — risk surfacing, dependency mapping, and ceremony design that scales beyond a single team.",
    bullets: ["Agile sprint delivery", "Risk and dependency logs", "Release & change management"],
    tech: ["Jira", "Confluence", "Scrum"],
  },
  {
    icon: Lightbulb,
    title: "Product Consulting",
    pitch: "Feasibility, scoping, and stack audits before you commit.",
    details: "Independent technical due diligence and product blueprints — for new platforms, modernization plays, or acquisition targets.",
    bullets: ["Feasibility reviews", "Architecture & stack audits", "Scoping and roadmap blueprints"],
    tech: ["Feasibility reports", "Architecture blueprints"],
  },
  {
    icon: TrendingUp,
    title: "Business Strategy",
    pitch: "Modernization plans tied to ROI, not slideware.",
    details: "Joint strategy work with CIOs and CTOs on automation, cloud cost, and operating-model redesign — quantified, sequenced, and owned.",
    bullets: ["IT modernization roadmaps", "Process automation strategy", "Cloud cost & FinOps optimization"],
    tech: ["ROI models", "Maturity assessments"],
  },
  {
    icon: Search,
    title: "Research & Discovery",
    pitch: "Evidence over intuition for product bets.",
    details: "Mixed-methods research — qualitative interviews, behavior profiling, and algorithm feasibility studies — to de-risk the next investment.",
    bullets: ["Market research", "User behavior profiling", "Algorithm feasibility studies"],
    tech: ["User interviews", "UX audits"],
  },
  {
    icon: Sparkles,
    title: "Design Studio",
    pitch: "Bespoke illustration and motion for product surfaces.",
    details: "An in-house studio for the moments your product earns delight — onboarding animations, brand systems, and reusable component libraries.",
    bullets: ["Vector illustration sets", "UI micro-animations", "Reusable design libraries"],
    tech: ["Lottie", "CSS keyframes"],
  },
];

function ServicesPage() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 animate-fade-up">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Capabilities</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Nine disciplines, <span className="text-gradient">one delivery engine</span>.
        </h1>
        <p className="mt-5 text-muted-foreground text-lg">
          Tap any capability to open a detailed brief — what we ship, how we work,
          and the stack we bring with us.
        </p>
      </header>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <button key={s.title} className="text-left group" onClick={() => setActive(s)}>
            <GlassCard gradientBorder className="h-full">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.pitch}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Open details <ArrowUpRight className="h-4 w-4" />
              </span>
            </GlassCard>
          </button>
        ))}
      </div>

      <SlideDrawer
        open={!!active}
        onClose={() => setActive(null)}
        title={active?.title}
        subtitle="Capability"
      >
        {active && (
          <div className="space-y-6">
            <p className="text-base text-foreground/90 leading-relaxed">{active.details}</p>

            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-3">What you get</h4>
              <ul className="space-y-2">
                {active.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-3">Stack</h4>
              <div className="flex flex-wrap gap-2">
                {active.tech.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-[var(--surface-2)] px-3 py-1 text-xs font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </SlideDrawer>
    </div>
  );
}
