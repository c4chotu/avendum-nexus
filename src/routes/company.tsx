import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { Compass, PenTool, Code2, ShieldCheck, GitMerge, LifeBuoy } from "lucide-react";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company — Avendum Technologies" },
      { name: "description", content: "Mission, vision, values, process, and the people behind Avendum Technologies." },
    ],
  }),
  component: CompanyPage,
});

const philosophy = [
  {
    label: "Mission",
    title: "Automate the network. Free the engineer.",
    body: "Build AI platforms that take the toil out of operating telecom networks — so human teams can focus on the work that compounds.",
  },
  {
    label: "Vision",
    title: "A self-driving network for every operator.",
    body: "Closed-loop, intent-driven networks that observe, decide, and act in real time across RAN, transport, and core.",
  },
  {
    label: "Values",
    title: "Ship outcomes. Earn trust. Stay curious.",
    body: "Senior, honest engineering. We measure ourselves by what our partners ship, not the hours we bill.",
  },
];

const stages = [
  { icon: Compass, name: "Discovery", desc: "Stakeholder interviews, architecture deep-dives, and a quantified problem statement." },
  { icon: PenTool, name: "Design", desc: "Service blueprints, data contracts, and UX prototypes — validated with real operators." },
  { icon: Code2, name: "Development", desc: "Production-grade engineering with continuous demos and integrated CI/CD from day one." },
  { icon: ShieldCheck, name: "QA", desc: "Carrier-grade testing — performance, resilience, security, and conformance to 3GPP/ETSI specs." },
  { icon: GitMerge, name: "Integration", desc: "Multi-vendor integration, OSS/BSS wiring, and staged rollout into your environment." },
  { icon: LifeBuoy, name: "Support", desc: "24/7/365 operations, observability, and continuous improvement against SLAs." },
];

const team = [
  { name: "Dinesh Khanna", role: "Chief Executive Officer", bio: "20+ years scaling telecom and platform businesses across India and EMEA." },
  { name: "Vivek Kumar", role: "Chief Operating Officer", bio: "Operations leader translating delivery rigor into measurable customer outcomes." },
  { name: "Tomas Rodjers", role: "Lead AI Engineer", bio: "Architect of our automation platforms — graph topology, RL, and closed-loop control." },
  { name: "Sandrah Rich", role: "Lead UX Designer", bio: "Designs the human surface of dense operator tooling — clarity over chrome." },
];

function CompanyPage() {
  const [stage, setStage] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 animate-fade-up">
      {/* About */}
      <header className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">About</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
            Eleven years building the <span className="text-gradient">automation backbone</span> for telecom.
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Avendum Technologies Private Limited was founded in 2012 as a focused
          telecom engineering studio. Today we ship AI-native platforms that run
          inside the world's most demanding networks.
        </p>
      </header>

      {/* Philosophy flip cards */}
      <section className="mt-16">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Philosophy</p>
        <div className="mt-6 grid md:grid-cols-3 gap-5">
          {philosophy.map((p) => (
            <div key={p.label} className="group [perspective:1200px] h-72">
              <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* front */}
                <GlassCard
                  gradientBorder
                  hoverGlow={false}
                  className="absolute inset-0 [backface-visibility:hidden] flex flex-col justify-between"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{p.label}</p>
                  <h3 className="font-display text-2xl leading-snug">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">Hover to reveal →</p>
                </GlassCard>
                {/* back */}
                <GlassCard
                  hoverGlow={false}
                  className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col justify-center bg-gradient-to-br from-primary/15 to-accent/10"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-primary">{p.label}</p>
                  <p className="mt-4 text-base text-foreground/90 leading-relaxed">{p.body}</p>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Process</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          A six-stage lifecycle. <span className="text-gradient">Zero handoff loss</span>.
        </h2>

        <div className="mt-10 grid lg:grid-cols-[1fr_1.4fr] gap-10">
          <ol className="relative space-y-2 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-border">
            {stages.map((s, i) => {
              const active = stage === i;
              return (
                <li key={s.name}>
                  <button
                    onClick={() => setStage(i)}
                    className={`relative w-full flex items-center gap-4 rounded-2xl px-3 py-3 text-left transition-all ${
                      active ? "bg-[var(--surface-2)]" : "hover:bg-[var(--surface-2)]/60"
                    }`}
                  >
                    <span
                      className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                        active
                          ? "border-primary bg-primary text-primary-foreground shadow-[0_0_24px_var(--glow)]"
                          : "border-border bg-[var(--background)] text-foreground/70"
                      }`}
                    >
                      <s.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground">Stage 0{i + 1}</p>
                      <p className={`font-medium ${active ? "text-primary" : ""}`}>{s.name}</p>
                    </div>
                  </button>
                </li>
              );
            })}
          </ol>

          <GlassCard gradientBorder hoverGlow={false} className="min-h-[260px]">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Stage 0{stage + 1}</p>
            <h3 className="mt-3 font-display text-2xl">{stages[stage].name}</h3>
            <p className="mt-4 text-foreground/85 leading-relaxed">{stages[stage].desc}</p>
            <div className="mt-6 h-1.5 w-full rounded-full bg-border overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500"
                style={{ width: `${((stage + 1) / stages.length) * 100}%` }}
              />
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Team */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Leadership</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          The team behind every <span className="text-gradient">deployment</span>.
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((p) => (
            <GlassCard key={p.name} gradientBorder>
              <div className="relative mb-5 aspect-square rounded-2xl bg-gradient-to-br from-primary/30 via-accent/15 to-transparent flex items-center justify-center">
                <span className="font-display text-5xl font-semibold text-foreground/85">
                  {p.name.split(" ").map((s) => s[0]).join("")}
                </span>
                <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
              </div>
              <h3 className="font-display text-lg">{p.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-primary mt-1">{p.role}</p>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
