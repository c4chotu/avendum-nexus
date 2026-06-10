import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Network, Radio, Shield, Sparkles, Workflow } from "lucide-react";
import { BrandButton } from "@/components/BrandButton";
import { GlassCard } from "@/components/GlassCard";
import { NodeSphere } from "@/components/NodeSphere";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avendum — AI Platforms for Telecom Network Automation" },
      { name: "description", content: "Enterprise-grade AI platforms that automate telecom network deployment, operations, and lifecycle." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 11, suffix: "+", label: "Years of Innovation" },
  { value: 40, suffix: "+", label: "AI Platforms Deployed" },
  { value: 98, suffix: "%", label: "Automation Rate" },
  { value: 150, suffix: "M+", label: "Connected Edge Nodes" },
];

const capabilities = [
  { icon: Network, title: "Network Deployment Automation", desc: "Zero-touch provisioning across multi-vendor RAN, transport, and core domains." },
  { icon: Bot, title: "AI-Driven Operations", desc: "Self-healing networks with predictive anomaly detection and closed-loop remediation." },
  { icon: Radio, title: "Real-time Edge Analytics", desc: "Streaming telemetry pipelines processing 150M+ nodes with sub-second decisioning." },
  { icon: Workflow, title: "Intelligent Workflows", desc: "Composable orchestration that maps SLAs to action — from change request to rollout." },
  { icon: Shield, title: "Carrier-grade Security", desc: "Zero-trust, secure-by-design pipelines aligned with 3GPP, NIST, and ETSI standards." },
  { icon: Sparkles, title: "Continuous Optimization", desc: "ML models that learn topology and traffic — tuning capacity, energy, and QoE 24/7." },
];

function Home() {
  return (
    <div className="relative">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 grid lg:grid-cols-2 gap-12 items-center relative">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-foreground/80">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              Building telecom intelligence since 2012
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
              AI Platforms for{" "}
              <span className="text-gradient">Telecom Network</span>{" "}
              Automation
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              We build enterprise-grade platforms that automate deployment,
              operations, and network lifecycle using AI and intelligent workflows.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact"><BrandButton size="lg">Start a Project <ArrowRight className="h-4 w-4" /></BrandButton></Link>
              <Link to="/services"><BrandButton variant="secondary" size="lg">Explore Capabilities</BrandButton></Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Network Deployment</span>
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-accent" /> AI-Driven Operations</span>
              <span className="flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-primary" /> Real-time Analytics</span>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <NodeSphere />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 -mt-6">
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

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">What we ship</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Platforms that turn network complexity into <span className="text-gradient">measurable advantage</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six core domains, one cohesive runtime — purpose-built for Tier-1 operators,
            neutral hosts, and enterprise private networks.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c) => (
            <GlassCard key={c.title} gradientBorder>
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* PARTNERSHIP BANNER */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <GlassCard hoverGlow={false} className="relative overflow-hidden p-10 sm:p-14">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Why operators choose us</p>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold leading-tight">
                When you partner with Avendum, you get an all-star team with the
                domain depth to <span className="text-gradient">move your roadmap forward — fast</span>.
              </h2>
              <p className="mt-5 text-muted-foreground max-w-2xl">
                Eleven years deep in telecom. Forty+ AI platforms in production.
                Engineering pods that integrate with your delivery cadence — not the
                other way around. Agile alignment, transparent SLAs, and a relentless
                bias toward shipping outcomes.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/company"><BrandButton>About Avendum</BrandButton></Link>
                <Link to="/contact"><BrandButton variant="secondary">Talk to engineering</BrandButton></Link>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                ["Technical acceleration", "Senior pods skip the ramp — production code in week one."],
                ["Agile alignment", "We embed in your sprint cadence, ceremonies, and tooling."],
                ["Carrier trust", "Tier-1 references across India, EMEA, and North America."],
              ].map(([k, v]) => (
                <li key={k} className="flex items-start gap-4 rounded-2xl border border-border/60 bg-[var(--surface)]/40 p-4">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--glow)]" />
                  <div>
                    <p className="font-medium">{k}</p>
                    <p className="text-sm text-muted-foreground">{v}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
