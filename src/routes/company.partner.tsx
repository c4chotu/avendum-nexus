import { createFileRoute, Link } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { motion } from "framer-motion";
import { 
  Building2, TowerControl as Tower, Wrench, Check, ArrowRight,
  Target, Handshake, TrendingUp, Cpu
} from "lucide-react";

export const Route = createFileRoute("/company/partner")({
  head: () => ({
    meta: [
      { title: "Partner with Us — Avendum Technologies" },
      {
        name: "description",
        content:
          "Partner with Avendum to extend the reach of MIDS, NEXUS, and NETIQ across the telecom ecosystem. Models for SIs, OEMs, and Managed Service partners.",
      },
    ],
  }),
  component: PartnerPage,
});

const partnerTypes = [
  {
    icon: Building2,
    type: "System Integrator Partner",
    desc: "For SIs and telecom IT vendors who deliver and implement network operations platforms for operators. Become a certified Avendum delivery partner and expand your managed services portfolio with live production-grade products.",
    points: [
      "Full product delivery & implementation training",
      "Technical certification for your engineers",
      "Co-bid support for operator RFPs",
      "Shared delivery resources for complex programmes",
      "Revenue share model on sold licences"
    ]
  },
  {
    icon: Tower,
    type: "OEM / Vendor Partner",
    desc: "For equipment vendors within the Ericsson, Nokia, Huawei and Samsung ecosystems looking to bundle network intelligence and audit tools alongside their hardware and managed service offerings.",
    points: [
      "Technology integration & API access",
      "Joint go-to-market with operator accounts",
      "Co-development for vendor-specific modules",
      "NETIQ integration for your NMS / OSS ecosystem",
      "White-label option for branded deployments"
    ]
  },
  {
    icon: Wrench,
    type: "Managed Service Partner",
    desc: "For managed service providers running day-to-day network operations for telecom operators. Use Avendum's platform as your operations backbone with full AMC and Alliance Support coverage.",
    points: [
      "Alliance Partner AMC & L2/L3 support",
      "Dedicated partner helpdesk escalation path",
      "Role-based access configured for your team",
      "Monthly SLA reporting & audit logs",
      "Early access to new releases"
    ]
  }
];

const whyPartner = [
  {
    icon: Target,
    title: "Proven products",
    desc: "MIDS, NEXUS and NETIQ are live in production. You're partnering on real, deployed software with 150K+ plans tracked."
  },
  {
    icon: Handshake,
    title: "Joint delivery support",
    desc: "We support you through deployment — from initial setup and configuration to user training and go-live. You're not on your own."
  },
  {
    icon: TrendingUp,
    title: "Growing product family",
    desc: "Three products today, more on the roadmap. As Avendum's platform expands, so does the opportunity for our partners."
  },
  {
    icon: Cpu,
    title: "Deep telecom domain",
    desc: "Our products are built natively for telecom. Your clients will recognise software built by people who understand their workflows."
  }
];

function PartnerPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-16">
      {/* Hero */}
      <section className="relative overflow-hidden py-12 lg:py-20 rounded-3xl bg-[var(--surface)]/20 border border-border/40 px-8 lg:px-12 mt-6">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <motion.div 
          className="relative z-10 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs font-semibold text-primary bg-primary/10 mb-6">
            Partner Programme
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Partner with Avendum.<br /><span className="text-gradient">Build together.</span>
          </h1>
          <p className="mt-5 text-muted-foreground leading-relaxed text-base lg:text-lg max-w-2xl">
            We work with system integrators, telecom vendors and managed service providers to extend the reach of MIDS, NEXUS and NETIQ across the telecom ecosystem. There is a partnership model built for your organisation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" search={{ interest: "partner" }}><BrandButton>Apply to Partner Programme</BrandButton></Link>
            <a href="#partner-types"><BrandButton variant="secondary">See Partner Types</BrandButton></a>
          </div>
        </motion.div>
      </section>

      {/* Partner Types Grid */}
      <section id="partner-types" className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Partner Types</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Three ways to partner.
        </h2>
        <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
          Choose the model that fits your organisation — or combine multiple for a broader engagement.
        </p>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {partnerTypes.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, translateY: -4 }}
              >
                <GlassCard gradientBorder className="flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(242,101,34,0.08)] transition-all">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                      <Icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className="font-display text-lg font-bold">{p.type}</h3>
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                    
                    <ul className="mt-6 space-y-3">
                      {p.points.map((pt, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: `${j * 0.05}s` }}>
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Apply Strip */}
        <div className="mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard hoverGlow={false} className="p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-[0_0_25px_rgba(242,101,34,0.06)] transition-all">
              <div>
                <h3 className="font-display text-lg font-bold">Ready to become an Avendum partner?</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Tell us about your organisation and we'll connect you with the right programme. Our partner team responds within 2 business days.
                </p>
              </div>
              <div className="flex gap-3 shrink-0 flex-wrap">
                <Link to="/contact" search={{ interest: "alliance" }}><BrandButton variant="secondary">Download Partner Deck</BrandButton></Link>
                <Link to="/contact" search={{ interest: "partner" }}><BrandButton>Apply Now <ArrowRight className="h-4 w-4" /></BrandButton></Link>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Why Partner Grid */}
      <section className="mt-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Why Partner with Avendum</p>
        <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold">
          Built for long-term partnership.
        </h2>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {whyPartner.map((w, i) => {
            const Icon = w.icon;
            return (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, translateY: -4 }}
              >
                <GlassCard gradientBorder className="flex flex-col justify-between h-full hover:shadow-[0_0_20px_rgba(242,101,34,0.08)] transition-all">
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-sm font-bold">{w.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{w.desc}</p>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
