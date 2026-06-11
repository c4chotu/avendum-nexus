import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Bot, Network, Radio, Shield, Sparkles, Workflow, Quote, MapPin } from "lucide-react";
import { BrandButton } from "@/components/BrandButton";
import { GlassCard } from "@/components/GlassCard";
import { Counter } from "@/components/Counter";
import { HeroCarousel } from "@/components/HeroCarousel";
import { MarqueeRow } from "@/components/MarqueeRow";
import { projects } from "@/lib/projects";
import aboutTeam from "@/assets/site/about-team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Avendum – A Technology Company" },
      { name: "description", content: "AI platforms for telecom network automation. Eleven years deep, forty+ platforms in production, embedded engineering pods that ship in week one." },
      { property: "og:title", content: "Avendum – A Technology Company" },
      { property: "og:description", content: "AI platforms for telecom network automation." },
      { property: "og:url", content: "/" },
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

const partners = [
  "AT&T", "Vodafone", "Reliance Jio", "Bell Canada", "BT Group", "Orange",
  "Telefónica", "Deutsche Telekom", "Singtel", "Telstra", "Rogers", "Airtel",
];

const verticals = [
  "Telecom · Tier-1 Carriers",
  "Neutral Host Networks",
  "Smart Cities & IoT",
  "Private 5G / Enterprise",
  "Cable & MSO",
  "Satellite & NTN",
];

const lifecycle = [
  { step: "01", title: "Discover", desc: "Senior architects map outcomes, constraints, and the shortest path to production." },
  { step: "02", title: "Design", desc: "Reference architecture, intent model, and integration plan — reviewed inside one week." },
  { step: "03", title: "Build", desc: "Embedded pods land production code in week one, integrated with your sprint cadence." },
  { step: "04", title: "Operate", desc: "Carrier-grade SLOs, runbooks, and 24×7 ops — handed over without a knowledge cliff." },
];

const testimonials = [
  {
    quote: "Avendum's team moved our deployment lead time from weeks to under an hour. The engineering depth is the real product.",
    author: "VP, Network Engineering",
    org: "Tier-1 Operator · APAC",
  },
  {
    quote: "We replaced two consultancies with one Avendum pod. Shipped more in a quarter than we had in the previous year.",
    author: "Head of Platforms",
    org: "European Neutral Host",
  },
  {
    quote: "Their NOC automation is the only AI project we've seen actually reduce on-call pages. It paid for itself in four months.",
    author: "Director of SRE",
    org: "North American MSO",
  },
];

const offices = [
  { city: "Gurgaon", country: "India · HQ", address: "Unit 205, Tower B, Unitech Cyberpark, Sector 39, Gurgaon, Haryana 122001" },
  { city: "Toronto", country: "Canada", address: "2476 Windsor Park Road, Regina, SK, S4V 0N2" },
  { city: "London", country: "United Kingdom", address: "48, Alnesbourn Crescent, IP3 9GD, Ipswich" },
];

function Home() {
  return (
    <div className="relative">
      {/* HERO CAROUSEL */}
      <HeroCarousel />

      {/* MARQUEE — TRUSTED BY */}
      <section className="relative border-y border-border/60 bg-[var(--surface)]/30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-2">
          <p className="text-center text-[10px] uppercase tracking-[0.4em] text-muted-foreground pt-3">
            Trusted by operators and neutral hosts across 24 markets
          </p>
          <MarqueeRow items={partners} />
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-7xl px-6 mt-20">
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

      {/* ABOUT BAND */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border">
              <img src={aboutTeam} alt="Avendum engineering team" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden md:block">
              <GlassCard gradientBorder hoverGlow={false} className="w-56">
                <p className="text-xs uppercase tracking-[0.25em] text-primary">Since 2012</p>
                <p className="mt-2 font-display text-2xl font-semibold">Built in Gurgaon</p>
                <p className="text-sm text-muted-foreground">Deployed across India, EMEA & NA.</p>
              </GlassCard>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">About Avendum</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
              When you partner with us, you get an all-star team with the depth to{" "}
              <span className="text-gradient">move your roadmap forward — fast</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              We work with a wide range of clients across numerous verticals, from innovative
              start-ups to global enterprises. Whether it&apos;s a technology solution that needs to
              be revamped or a hot new product launch, we like getting our hands dirty with clients
              that know what results they want and trust us to lead the way.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/company"><BrandButton>More about us</BrandButton></Link>
              <Link to="/projects"><BrandButton variant="secondary">See our work</BrandButton></Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">What we ship</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            Platforms that turn network complexity into{" "}
            <span className="text-gradient">measurable advantage</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Six core domains, one cohesive runtime — purpose-built for Tier-1 operators, neutral
            hosts, and enterprise private networks.
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

      {/* FEATURED PROJECTS — HORIZONTAL SLIDER FEEL */}
      <section className="mt-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Featured projects</p>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
                Our work draws on more than <span className="text-gradient">11 years</span> of experience.
              </h2>
            </div>
            <Link to="/projects">
              <BrandButton variant="secondary">View all projects <ArrowRight className="h-4 w-4" /></BrandButton>
            </Link>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto no-scrollbar">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex gap-6 min-w-max pb-4">
              {projects.map((p) => (
                <Link
                  key={p.slug}
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="group block w-[340px] sm:w-[380px] shrink-0"
                >
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                    <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em]">{p.category}</span>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{p.client}</p>
                      <h3 className="mt-1 font-display text-xl font-semibold leading-tight group-hover:text-primary transition-colors">{p.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIFECYCLE */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">How we engage</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            A delivery model designed for <span className="text-gradient">production code in week one</span>.
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {lifecycle.map((l) => (
            <GlassCard key={l.step} gradientBorder>
              <p className="font-mono text-xs text-primary">{l.step}</p>
              <h3 className="mt-4 font-display text-xl font-semibold">{l.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* VERTICALS MARQUEE */}
      <section className="mt-28 relative">
        <MarqueeRow items={verticals} reverse />
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 mt-20">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">In their words</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
            What teams say after <span className="text-gradient">shipping with us</span>.
          </h2>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <GlassCard key={i} gradientBorder className="flex flex-col">
              <Quote className="h-6 w-6 text-primary" />
              <p className="mt-4 text-sm leading-relaxed">{t.quote}</p>
              <div className="mt-6 pt-4 border-t border-border/60">
                <p className="text-sm font-semibold">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.org}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* OFFICES */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our locations</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold leading-tight">
              Three offices,<br /> <span className="text-gradient">one delivery cadence</span>.
            </h2>
            <p className="mt-5 text-muted-foreground">
              Engineering teams aligned across India, the UK, and Canada — follow-the-sun delivery,
              one source of truth.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {offices.map((o) => (
              <GlassCard key={o.city} gradientBorder>
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-display text-lg font-semibold">{o.city}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{o.country}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.address}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <GlassCard hoverGlow={false} className="relative overflow-hidden p-10 sm:p-14 text-center">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Work together</p>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl font-semibold leading-tight max-w-3xl mx-auto">
              Have a project? <span className="text-gradient">Let&apos;s work together.</span>
            </h2>
            <p className="mt-5 text-muted-foreground max-w-xl mx-auto">
              Tell us about your goals, and we&apos;ll get back to you right away — usually within a
              business day.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 justify-center">
              <Link to="/contact"><BrandButton size="lg">Start a Project <ArrowRight className="h-4 w-4" /></BrandButton></Link>
              <Link to="/insights"><BrandButton variant="secondary" size="lg">Read our notes</BrandButton></Link>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
