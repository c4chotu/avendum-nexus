import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { Counter } from "@/components/Counter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TowerControl as Tower, BarChart3, Upload, Activity, RotateCcw, 
  Sparkles, CheckCircle2, ChevronRight, Users, ShieldAlert, ArrowRight, BookOpen
} from "lucide-react";

export const Route = createFileRoute("/products/mids")({
  head: () => ({
    meta: [
      { title: "MIDS — Microwave Planning & Deployment Automation | Avendum" },
      {
        name: "description",
        content:
          "MIDS replaces fragmented Excel-based MW and UBR planning with a centralised, role-aware platform — tracking every plan from LB release through deployment and dismantling across all circles.",
      },
    ],
  }),
  component: MidsPage,
});

const mwKPIs = {
  total: 151795,
  newDeploy: 122892,
  upgrades: 28903,
  deployed: 103127,
  softUpgrade: 24982,
  hardUpgrade: 3921,
  ageing: [
    { label: "0–30 Days", val: 42, color: "var(--primary)" },
    { label: "31–90 Days", val: 41, color: "#0F9F6E" },
    { label: " >180 Days", val: 17, color: "#EF4444" },
  ],
  status: [
    { label: "Deployed New", val: 74, count: "90,210", color: "var(--primary)" },
    { label: "Deployed Upgrade", val: 10, count: "12,782", color: "#0F9F6E" },
    { label: "In Progress", val: 39, count: "48,668", color: "var(--accent)" },
  ],
  circles: [
    { name: "Delhi NCR", val: 91 },
    { name: "Maharashtra", val: 89 },
    { name: "Karnataka", val: 76 },
  ]
};

const ubrKPIs = {
  total: 48290,
  newDeploy: 32840,
  upgrades: 15450,
  deployed: 31840,
  softUpgrade: 10220,
  hardUpgrade: 5230,
  ageing: [
    { label: "0–30 Days", val: 55, color: "var(--primary)" },
    { label: "31–90 Days", val: 33, color: "#0F9F6E" },
    { label: " >180 Days", val: 12, color: "#EF4444" },
  ],
  status: [
    { label: "Deployed New", val: 68, count: "22,330", color: "var(--primary)" },
    { label: "Deployed Upgrade", val: 18, count: "9,510", color: "#0F9F6E" },
    { label: "In Progress", val: 24, count: "16,450", color: "var(--accent)" },
  ],
  circles: [
    { name: "Delhi NCR", val: 87 },
    { name: "Maharashtra", val: 82 },
    { name: "Karnataka", val: 65 },
  ]
};

const capabilities = [
  {
    icon: Upload,
    title: "Plan Upload with Validation",
    desc: "MW and UBR plans uploaded via structured templates. MIDS enforces 25+ VI validation rules — circle data checks, nominal quarter validation (VI 2), hop type mapping (VI 18), POP existence in ATOM (VI 6) — before any plan is accepted. Errors flagged with rule IDs. No invalid plan enters the workflow.",
    tags: ["VI 2 — Quarter Validation", "VI 18 — Hop Type", "VI 6 — POP Check"]
  },
  {
    icon: BarChart3,
    title: "Ageing Intelligence Dashboard",
    desc: "Plans auto-classified into 0–30, 31–60, 61–90, 91–180, and 180+ day buckets — across Pan India, Operations team, and Deployment team views. Circle heads see national picture; team leads see only their assigned plans. Department Status View shows distribution across all teams.",
    tags: ["Pan India Ageing", "Ops Team View", "Deployment Ageing"]
  },
  {
    icon: RotateCcw,
    title: "Dismantle Plan Lifecycle",
    desc: "Full lifecycle tracking — Circle Ops receives the request, I&C partner confirms survey readiness and material (SRN/CAM), Deployment team enters TOCO details, Ops team manages traffic shifting hold and resume with FTTH and CSR readiness gates, and NMS deletion confirmed.",
    tags: ["Survey Status", "TOCO / SRN", "NMS Deletion"]
  },
  {
    icon: Activity,
    title: "Bulk Operations",
    desc: "Bulk AT status updates, bulk plan cancellation, bulk SOFT upgrade processing, bulk TS release, and bulk dismantle assignment — all with full audit logging. Handles large-scale circle operations without one-by-one processing. Excel export available for all table views.",
    tags: ["Bulk AT Update", "Bulk Cancel", "Bulk TS Release"]
  }
];

const roles = [
  { name: "MW Planner", desc: "Plan upload (MW / UBR / TS / Dismantle), cancellation, deletion. Full Pan India & circle dashboard access." },
  { name: "Circle Operations", desc: "Traffic shifting, hold / resume controls, dismantle doable marking, NMS deletion confirmation." },
  { name: "Circle Deployment", desc: "Dismantle SR / TOCO details management, plan rejection, access issue removal and tracking." },
  { name: "I&C Partner", desc: "PHY / SOFT Acceptance Tests, dismantle survey & material confirmation, SRN / CAM inputs." },
  { name: "AT Desk (MS Partner)", desc: "Acceptance test accept / reject for both PHY & SOFT AT — with logged reason and full audit trail." },
  { name: "FTTH Team", desc: "FTTH readiness status confirmation — gate for TS plan progression where fibre is involved." },
  { name: "CSR Owner", desc: "CSR readiness confirmation — critical dependency for traffic shifting plan release." },
  { name: "B2B Team", desc: "IWAN TS status update — ensures enterprise services are protected during MW traffic shifts." }
];

const steps = [
  { step: "01", role: "MW Planner", title: "Upload & Validate", desc: "Plan uploaded and validated against 25+ VI rules. Circle data, nominal quarter, hop type and POP checks enforced." },
  { step: "02", role: "Deployment Team", title: "Assign & Track", desc: "Plans assigned to I&C partners. Progress tracked with stage timestamps and ageing alerts that surface bottlenecks." },
  { step: "03", role: "I&C / AT Desk", title: "Acceptance Test", desc: "Physical and Software ATs completed by I&C partner. AT Desk accepts or rejects with logged reason. Bulk AT supported." },
  { step: "04", role: "Circle Operations", title: "Traffic Shift", desc: "FTTH and CSR readiness confirmed. B2B IWAN status updated. Traffic shifted to new MW link with hold/resume management." },
  { step: "05", role: "Ops / Deployment", title: "Dismantle & Close", desc: "Old links dismantled — survey, material, TOCO/SRN confirmed. NMS deletion confirmed. Plan closed with audit trail." }
];

function MidsPage() {
  const [dbType, setDbType] = useState<"MW" | "UBR">("MW");
  const data = dbType === "MW" ? mwKPIs : ubrKPIs;

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16">
      {/* Hero */}
      <section className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center py-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold text-[#1A6FD4] bg-[#1A6FD4]/10 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#059669] animate-pulse" />
            Active in Production — PAN India
          </span>
          <p className="text-xs uppercase tracking-[0.3em] text-[#1A6FD4]">MIDS Platform</p>
          <h1 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Microwave Planning & <br /><span className="text-gradient">Deployment Automation</span>
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base max-w-2xl">
            MIDS replaces fragmented Excel-based MW and UBR planning with a centralised, role-aware platform — tracking every plan from LB release through deployment, acceptance testing, traffic shifting and dismantling across all circles PAN India.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/demo" search={{ product: "mids" }}><BrandButton>Request MIDS Demo <ArrowRight className="h-4 w-4" /></BrandButton></Link>
            <a href="#features"><BrandButton variant="secondary">See Features</BrandButton></a>
          </div>
        </motion.div>

        {/* Stats Column */}
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.div whileHover={{ scale: 1.02, translateY: -4 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="hover:shadow-[0_0_20px_rgba(26,111,212,0.15)] transition-all">
              <div className="font-display text-3xl font-bold text-[#1A6FD4]"><Counter to={151795} /></div>
              <p className="text-xs text-muted-foreground mt-1">Total MW plans tracked across all circles</p>
            </GlassCard>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, translateY: -4 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="hover:shadow-[0_0_20px_rgba(26,111,212,0.15)] transition-all">
              <div className="font-display text-3xl font-bold text-[#1A6FD4]"><Counter to={122892} /></div>
              <p className="text-xs text-muted-foreground mt-1">New deployment plans managed end-to-end</p>
            </GlassCard>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, translateY: -4 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="hover:shadow-[0_0_20px_rgba(26,111,212,0.15)] transition-all">
              <div className="font-display text-3xl font-bold text-[#1A6FD4]"><Counter to={103127} /></div>
              <p className="text-xs text-muted-foreground mt-1">Successfully deployed sites (new + upgrades)</p>
            </GlassCard>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02, translateY: -4 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
            <GlassCard gradientBorder className="hover:shadow-[0_0_20px_rgba(26,111,212,0.15)] transition-all">
              <div className="font-display text-3xl font-bold text-[#1A6FD4]">8 Roles</div>
              <p className="text-xs text-muted-foreground mt-1">Integrated workflow access permissions</p>
            </GlassCard>
          </motion.div>
        </motion.div>
      </section>

      {/* Live Dashboard Section */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#1A6FD4]">Interactive Dashboard</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Pan India visibility. <span className="text-gradient">Circle-level precision</span>.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
          Toggle between MW and UBR planning views. National status view and circle-level statistics are updated dynamically in real-time.
        </p>

        {/* Dashboard Widget */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="mt-8 p-6 hover:shadow-[0_0_30px_rgba(26,111,212,0.1)] transition-all" gradientBorder hoverGlow={false}>
            <div className="flex justify-between items-center border-b border-border/40 pb-4 mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-[#1A6FD4]" /> MIDS — Pan India Dashboard
              </span>
              <div className="flex gap-1 bg-foreground/5 p-0.5 rounded-lg border border-border/60">
                {(["MW", "UBR"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setDbType(type)}
                    className={`px-3 py-1 text-xs font-bold rounded-md cursor-pointer transition-all ${
                      dbType === type ? "bg-[#1A6FD4] text-white shadow-md" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* KPI grid */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3 mb-6">
              <div className="bg-foreground/5 border border-border/40 rounded-xl p-3 text-center hover:bg-foreground/10 transition-colors">
                <div className="font-display text-lg font-bold text-[#1A6FD4]"><Counter to={data.total} /></div>
                <div className="text-[10px] text-muted-foreground mt-1">Total Plans</div>
              </div>
              <div className="bg-foreground/5 border border-border/40 rounded-xl p-3 text-center hover:bg-foreground/10 transition-colors">
                <div className="font-display text-lg font-bold text-foreground"><Counter to={data.newDeploy} /></div>
                <div className="text-[10px] text-muted-foreground mt-1">New Deploy</div>
              </div>
              <div className="bg-foreground/5 border border-border/40 rounded-xl p-3 text-center hover:bg-foreground/10 transition-colors">
                <div className="font-display text-lg font-bold text-foreground"><Counter to={data.upgrades} /></div>
                <div className="text-[10px] text-muted-foreground mt-1">Upgrades</div>
              </div>
              <div className="bg-foreground/5 border border-border/40 rounded-xl p-3 text-center hover:bg-foreground/10 transition-colors">
                <div className="font-display text-lg font-bold text-foreground"><Counter to={data.deployed} /></div>
                <div className="text-[10px] text-muted-foreground mt-1">Deployed</div>
              </div>
              <div className="bg-foreground/5 border border-border/40 rounded-xl p-3 text-center hover:bg-foreground/10 transition-colors">
                <div className="font-display text-lg font-bold text-foreground"><Counter to={data.softUpgrade} /></div>
                <div className="text-[10px] text-muted-foreground mt-1">Soft Upgrade</div>
              </div>
              <div className="bg-foreground/5 border border-border/40 rounded-xl p-3 text-center hover:bg-foreground/10 transition-colors">
                <div className="font-display text-lg font-bold text-foreground"><Counter to={data.hardUpgrade} /></div>
                <div className="text-[10px] text-muted-foreground mt-1">Hard Upgrade</div>
              </div>
            </div>

            {/* Charts preview */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-foreground/5 border border-border/40 rounded-xl p-4 hover:shadow-[0_0_15px_rgba(26,111,212,0.05)] transition-all">
                <div className="text-xs font-semibold text-muted-foreground mb-4">Plan Ageing — Pan India</div>
                <div className="space-y-3">
                  {data.ageing.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                        <span>{item.label}</span>
                        <span className="font-semibold text-foreground">{item.val}%</span>
                      </div>
                      <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
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

              <div className="bg-foreground/5 border border-border/40 rounded-xl p-4 hover:shadow-[0_0_15px_rgba(26,111,212,0.05)] transition-all">
                <div className="text-xs font-semibold text-muted-foreground mb-4">Deployment Status</div>
                <div className="space-y-3">
                  {data.status.map((item) => (
                    <div key={item.label}>
                      <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                        <span>{item.label}</span>
                        <span className="font-semibold text-foreground">{item.count}</span>
                      </div>
                      <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
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

              <div className="bg-foreground/5 border border-border/40 rounded-xl p-4 hover:shadow-[0_0_15px_rgba(26,111,212,0.05)] transition-all">
                <div className="text-xs font-semibold text-muted-foreground mb-4">Circle Progress (Sample)</div>
                <div className="space-y-3">
                  {data.circles.map((item) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-[11px] text-muted-foreground mb-1">
                        <span>{item.name}</span>
                        <span className="font-semibold text-foreground">{item.val}%</span>
                      </div>
                      <div className="h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full rounded-full bg-[#1A6FD4]" 
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

      {/* Features Grid */}
      <section id="features" className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#1A6FD4]">Core Capabilities</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Everything MW operations <span className="text-gradient">needs</span>.
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
                <GlassCard gradientBorder className="flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(26,111,212,0.08)] transition-all">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A6FD4]/10 text-[#1A6FD4] mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold">{c.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
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

      {/* Roles Section */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#1A6FD4]">Role-Based Access</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Every team sees exactly <span className="text-gradient">what they need</span>.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-3xl">
          8 role-specific views and permissions covering the full MW deployment lifecycle.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {roles.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              whileHover={{ scale: 1.02, translateY: -4 }}
            >
              <GlassCard gradientBorder className="p-5 h-full hover:shadow-[0_0_20px_rgba(26,111,212,0.08)] transition-all">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#1A6FD4]/10 text-[#1A6FD4] mb-3">
                  <Users className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold font-display">{r.name}</h3>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{r.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Workflow steps */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-[#1A6FD4]">Deployment Workflow</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          From plan upload to <span className="text-gradient">site deployed</span>.
        </h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <GlassCard gradientBorder className="flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(26,111,212,0.15)] transition-all">
                <div>
                  <span className="font-mono text-xs text-[#1A6FD4] bg-[#1A6FD4]/10 rounded-full px-2 py-0.5">{s.step}</span>
                  <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-widest mt-4">{s.role}</p>
                  <h3 className="text-base font-bold font-display mt-1">{s.title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
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
          <GlassCard hoverGlow={false} className="relative overflow-hidden p-10 text-center hover:shadow-[0_0_30px_rgba(26,111,212,0.12)] transition-all">
            <div className="relative">
              <h2 className="font-display text-3xl font-bold">Stop tracking MW plans in Excel.</h2>
              <p className="mt-3 text-sm text-muted-foreground max-w-xl mx-auto">
                Talk to our team about deploying MIDS for your circles — we&apos;ll walk through setup, role configuration and system integration.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <Link to="/demo" search={{ product: "mids" }}><BrandButton>Request MIDS Demo</BrandButton></Link>
                <Link to="/" hash="amc"><BrandButton variant="secondary">Ask About AMC</BrandButton></Link>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </section>
    </div>
  );
}
