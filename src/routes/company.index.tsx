import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Rocket, TowerControl as Tower, Signal, Search, Building, Phone, 
  Mail, MapPin, Globe, Database, Activity, ArrowRight 
} from "lucide-react";

export const Route = createFileRoute("/company/")({
  head: () => ({
    meta: [
      { title: "About Us — Avendum Technologies" },
      { 
        name: "description", 
        content: "Built by telecom practitioners, for telecom teams. Avendum Technologies develops mission-critical enterprise platforms for the telecommunications industry." 
      },
    ],
  }),
  component: CompanyPage,
});

const milestones = [
  {
    icon: Rocket,
    title: "NEXUS — First Version",
    desc: "Built the first version of NEXUS for IP tracking and rollout management in large-scale telecom environments.",
  },
  {
    icon: Tower,
    title: "MIDS — Live in Production",
    desc: "MIDS deployed for MW planning at PAN India scale with role-based workflows and circle-wise dashboards.",
  },
  {
    icon: Signal,
    title: "NEXUS 5G Stencil & IAMS",
    desc: "NEXUS expanded to cover full 5G stencil lifecycle, IPv6 provisioning and zero-touch RA automation.",
  },
  {
    icon: Search,
    title: "NETIQ POC & Platform Launch",
    desc: "NETIQ launched as RAN & MW audit intelligence platform. All three products live and growing.",
  },
];

const philosophy = [
  {
    label: "Domain Focus",
    title: "Domain-built, not adapted",
    body: "Every workflow, validation rule and dashboard reflects how MW planning, 5G rollout and RAN auditing actually work — built with the teams who do it, not from a generic enterprise template.",
  },
  {
    label: "Pragmatism",
    title: "Pragmatic over theoretical",
    body: "We look realistically at business challenges and define fit-for-purpose solutions. We build what solves the actual problem, and expand from proven value rather than overselling a platform vision.",
  },
  {
    label: "Trust",
    title: "Deliver on every commitment",
    body: "If it's in the AMC, it's in the AMC. If we say go-live is a date, that's the date. Our clients return because we keep our word — no surprises at handover, no scope creep after contract sign.",
  },
  {
    label: "User Centric",
    title: "Customer team at the centre",
    body: "Our vision is to put customer teams at the epicentre of enterprise software — enabling and easing the work for the people who actually use these systems, not just the executives who procure them.",
  },
];

const team = [
  {
    name: "Ankit Bhardwaj",
    role: "Co-Founder & Product Lead",
    bio: "Architect of NEXUS & MIDS. Deep expertise in telecom network planning, IP provisioning and large-scale deployment automation.",
  },
  {
    name: "Pradeep Kumar",
    role: "Co-Founder & Technical Lead",
    bio: "Lead architect of NETIQ. RAN and MW domain expert with hands-on experience across Ericsson, Nokia and multi-vendor network environments.",
  },
  {
    name: "Ankit Singhal",
    role: "Product Manager — NEXUS",
    bio: "Drives NEXUS Phase 1 and 5G stencil product strategy. Expert in 4G/5G rollout coordination and IP provisioning workflows for large telecom operators.",
  },
];

function CompanyPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16">
      {/* Hero with Stats Column */}
      <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center py-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-primary">About Avendum</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Built by telecom<br />practitioners,<br /><span className="text-gradient">for telecom teams.</span>
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base max-w-xl">
            Avendum Technologies develops mission-critical enterprise platforms for the telecommunications industry — software built natively for MW planning, 5G rollout and RAN auditing, not adapted from generic tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/careers"><BrandButton>Join Our Team</BrandButton></Link>
            <Link to="/contact"><BrandButton variant="secondary">Get in Touch</BrandButton></Link>
          </div>
        </motion.div>

        {/* Stats Column */}
        <motion.div 
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div whileHover={{ scale: 1.03, translateY: -3 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="text-center p-6 flex flex-col items-center justify-center hover:shadow-[0_0_20px_rgba(242,101,34,0.1)] transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <Database className="h-5 w-5" />
              </div>
              <div className="font-display text-2xl font-bold text-gradient">3</div>
              <p className="text-xs text-muted-foreground mt-1">Products live in production</p>
            </GlassCard>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, translateY: -3 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="text-center p-6 flex flex-col items-center justify-center hover:shadow-[0_0_20px_rgba(242,101,34,0.1)] transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <Activity className="h-5 w-5" />
              </div>
              <div className="font-display text-2xl font-bold text-gradient">151K+</div>
              <p className="text-xs text-muted-foreground mt-1">MW plans tracked in MIDS</p>
            </GlassCard>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, translateY: -3 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="text-center p-6 flex flex-col items-center justify-center hover:shadow-[0_0_20px_rgba(242,101,34,0.1)] transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <Globe className="h-5 w-5" />
              </div>
              <div className="font-display text-2xl font-bold text-gradient">PAN India</div>
              <p className="text-xs text-muted-foreground mt-1">Deployment scale</p>
            </GlassCard>
          </motion.div>
          <motion.div whileHover={{ scale: 1.03, translateY: -3 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="text-center p-6 flex flex-col items-center justify-center hover:shadow-[0_0_20px_rgba(242,101,34,0.1)] transition-all">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <Building className="h-5 w-5" />
              </div>
              <div className="font-display text-2xl font-bold text-gradient">2 Offices</div>
              <p className="text-xs text-muted-foreground mt-1">India &amp; Canada</p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </section>

      {/* Story */}
      <section className="mt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Story</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
              Built from the <span className="text-gradient">inside out</span>.
            </h2>
            <div className="mt-6 relative aspect-[1.8/1] overflow-hidden rounded-2xl border border-border">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&fit=crop" alt="Team collaboration" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Avendum Technologies was founded with a simple observation: the tools telecom operators use to plan and deploy their networks are decades behind the complexity of those networks. MW planners were managing hundreds of thousands of plans in Excel. 5G rollout teams were reconciling data across six systems manually. RAN audit teams had no way to cross-validate NMS data against reality.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              We decided to build the software those teams actually needed — not adapted from generic enterprise platforms, but built ground-up for the telecom domain, with workflows that reflect how the work is actually done.
            </p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Today, MIDS, NEXUS and NETIQ are live in production for one of India's largest operators — tracking 150,000+ MW plans, automating 5G rollout provisioning, and providing RAN audit intelligence across all circles.
            </p>
          </motion.div>

          {/* Milestones timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-xl font-bold">Key Milestones</h3>
            <ol className="relative mt-8 space-y-2 before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {milestones.map((m, i) => {
                const active = activeMilestone === i;
                const Icon = m.icon;
                return (
                  <li key={m.title}>
                    <button
                      onClick={() => setActiveMilestone(i)}
                      className={`relative w-full flex items-center gap-4 rounded-2xl px-3 py-3 text-left transition-all ${
                        active ? "bg-foreground/5 shadow-inner" : "hover:bg-foreground/5"
                      }`}
                    >
                      <span
                        className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                          active
                            ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_rgba(242,101,34,0.4)]"
                            : "border-border bg-[var(--background)] text-foreground/70"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div>
                        <p className="text-xs font-mono text-muted-foreground">Milestone 0{i + 1}</p>
                        <p className={`font-medium ${active ? "text-primary" : ""}`}>{m.title}</p>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMilestone}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.2 }}
                >
                  <GlassCard gradientBorder hoverGlow={false} className="min-h-[160px] flex flex-col justify-between hover:shadow-[0_0_20px_rgba(242,101,34,0.06)] transition-all">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-primary">Milestone 0{activeMilestone + 1}</p>
                      <h3 className="mt-2 font-display text-lg font-bold">{milestones[activeMilestone].title}</h3>
                      <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{milestones[activeMilestone].desc}</p>
                    </div>
                    <div className="mt-6 h-1 w-full rounded-full bg-border overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-accent"
                        initial={{ width: 0 }}
                        animate={{ width: `${((activeMilestone + 1) / milestones.length) * 100}%` }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Leadership</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          The team behind <span className="text-gradient">the platforms</span>.
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, translateY: -4 }}
            >
              <GlassCard gradientBorder className="flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(242,101,34,0.08)] transition-all">
                <div>
                  <div className="relative mb-5 aspect-square rounded-2xl bg-gradient-to-br from-primary/30 via-accent/15 to-transparent flex items-center justify-center">
                    <span className="font-display text-5xl font-semibold text-foreground/85">
                      {p.name.split(" ").map((s) => s[0]).join("")}
                    </span>
                    <span className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_var(--accent)]" />
                  </div>
                  <h3 className="font-display text-lg font-bold">{p.name}</h3>
                  <p className="text-xs uppercase tracking-[0.2em] text-primary mt-1">{p.role}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.bio}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}

          {/* Join Our Team Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.02, translateY: -4 }}
          >
            <GlassCard gradientBorder className="flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(242,101,34,0.08)] transition-all">
              <div>
                <div className="relative mb-5 aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent flex items-center justify-center">
                  <span className="font-display text-5xl font-semibold text-foreground/50">
                    +
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold">Join Our Team</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-primary mt-1">Open Positions</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  We're building our team of telecom domain experts, engineers and product thinkers. See open roles and apply.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/40">
                <Link to="/careers" className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all">
                  View Roles <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Offices Section */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Locations</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Where we <span className="text-gradient">work</span>.
        </h2>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Gurgaon Office */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard gradientBorder className="flex flex-col justify-between h-full p-0 overflow-hidden hover:shadow-[0_0_25px_rgba(242,101,34,0.06)] transition-all">
              <div className="h-[220px] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=Unitech+Cyber+Park+Tower+B+Sector+39+Gurgaon&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-none"
                  loading="lazy"
                  title="Avendum India HQ"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇮🇳</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Headquarters</span>
                </div>
                <h3 className="font-display text-lg font-bold mt-2">Gurgaon, India</h3>
                <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Unit No. 205, Tower B, Unitech Cyber Park, Sector 39, Gurgaon – 122 002, Haryana</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <a href="tel:+919899810118" className="hover:text-primary transition-colors">+91 98998 10118</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <a href="mailto:info@avendumtech.com" className="hover:text-primary transition-colors">info@avendumtech.com</a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Canada Office */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard gradientBorder className="flex flex-col justify-between h-full p-0 overflow-hidden hover:shadow-[0_0_25px_rgba(242,101,34,0.06)] transition-all">
              <div className="h-[220px] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=Toronto+Ontario+Canada&t=&z=11&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-none"
                  loading="lazy"
                  title="Avendum Canada Office"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🇨🇦</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary">Sales Office — North America</span>
                </div>
                <h3 className="font-display text-lg font-bold mt-2">Canada</h3>
                <div className="mt-3 space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>Toronto, Ontario, Canada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary shrink-0" />
                    <a href="mailto:info@avendumtech.com" className="hover:text-primary transition-colors">info@avendumtech.com</a>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
