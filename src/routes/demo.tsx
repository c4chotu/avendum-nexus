import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { TowerControl as Tower, Signal, Search, ArrowRight, ShieldCheck, Check, Clock, Laptop } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { FloatingInput, FloatingTextarea } from "@/components/FloatingField";
import { SlideDrawer } from "@/components/SlideDrawer";
import { validateEmail, validateName, sendEmail } from "@/lib/email";
import { z } from "zod";

const demoSearchSchema = z.object({
  product: z.string().optional(),
});

export const Route = createFileRoute("/demo")({
  validateSearch: (search) => demoSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Book a Demo — Avendum Technologies" },
      { 
        name: "description", 
        content: "Schedule a 30-minute interactive walk-through of MIDS, NEXUS, or NETIQ, mapped directly to your circle's operational challenges." 
      },
    ],
  }),
  component: DemoPage,
});

const demoScopes = {
  mids: {
    title: "MIDS Demo Scope",
    color: "#1A6FD4",
    bullets: [
      "Role-aware planning lifecycles (8 workflow roles)",
      "25+ VI coordinate and quarter validations live scan",
      "End-to-end dismantle workflow tracking",
      "Circle-wide UBR and MW dashboards",
    ]
  },
  nexus: {
    title: "NEXUS Demo Scope",
    color: "#0F9F6E",
    bullets: [
      "5G stencil dual-stack IPv4/IPv6 tracking",
      "Zero-touch Fiber POP RA automation (Cygnet to ATOM)",
      "VLAN allocation and subnet auto-assignment",
      "B2B order activation tracking",
    ]
  },
  netiq: {
    title: "NETIQ Demo Scope",
    color: "#7C3AED",
    bullets: [
      "Daily multi-vendor CM dump parsing (Ericsson & Nokia)",
      "50+ automated RAN parameter validation scans",
      "Ghost node identification and decommissioning logic",
      "Closed-loop planned vs. configured delta reports",
    ]
  },
  all: {
    title: "Full Platform Demo Scope",
    color: "#F26522",
    bullets: [
      "Overview of MIDS, NEXUS, and NETIQ integrations",
      "Trace a complete path from MW Planning to live RAN Audit",
      "Private cloud air-gapped deployment architecture review",
      "Escalation SLAs and managed operations models",
    ]
  }
};

function DemoPage() {
  const search = Route.useSearch();
  const [activeTab, setActiveTab] = useState<"mids" | "nexus" | "netiq" | "all">("all");
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", circle: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  useEffect(() => {
    if (search.product === "mids") setActiveTab("mids");
    else if (search.product === "nexus") setActiveTab("nexus");
    else if (search.product === "netiq") setActiveTab("netiq");
    else setActiveTab("all");
  }, [search]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!validateName(form.name)) e.name = "Please enter your full name.";
    if (!validateEmail(form.email)) e.email = "Please enter a valid work email.";
    if (form.message.trim().length < 15) e.message = "Please share a brief note about your interest (15+ chars).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await sendEmail({
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: `Company: ${form.company}\nCircle/Region: ${form.circle}\nDemo Product: ${activeTab.toUpperCase()}\n\n${form.message}`,
        subject: `Avendum Platform Demo Request: ${activeTab.toUpperCase()}`,
      });
      setSuccess(true);
      setForm({ name: "", email: "", company: "", phone: "", circle: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 animate-fade-up">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Demo Request</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Request a customized <span className="text-gradient">platform demo</span>.
        </h1>
        <p className="mt-5 text-muted-foreground text-lg">
          See how our AI platforms automate microwave deployment planning, 5G IP provisioning, and RAN network auditing.
        </p>
      </header>

      <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-8">
        {/* Left Side: Scope details & Selectors */}
        <div className="space-y-6">
          <GlassCard gradientBorder hoverGlow={false} className="p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">Select Platform to Explore</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(["all", "mids", "nexus", "netiq"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-2 text-xs font-semibold rounded-lg uppercase tracking-wider transition-all cursor-pointer border ${
                    activeTab === tab 
                      ? "bg-primary border-primary text-white shadow-md" 
                      : "border-border/40 text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Scope Bullets */}
            <div className="mt-6 border-t border-border/40 pt-6 animate-fade-up" key={activeTab}>
              <h4 className="font-display font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: demoScopes[activeTab].color }} />
                {demoScopes[activeTab].title}
              </h4>
              <ul className="space-y-2.5">
                {demoScopes[activeTab].bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-muted-foreground">
                    <Check className="h-4 w-4 shrink-0 mt-0.5" style={{ color: demoScopes[activeTab].color }} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>

          {/* Trust Guarantees */}
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-border/40 bg-foreground/5 flex items-start gap-3">
              <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-foreground">Secure Air-Gapped Sandboxing</h4>
                <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">
                  We deploy demo environments in local private sandbox structures, ensuring zero corporate data or configuration detail leakage.
                </p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-border/40 bg-foreground/5 flex items-start gap-3">
              <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-foreground">30-Minute Custom Review</h4>
                <p className="text-[10px] text-muted-foreground mt-0.5 leading-relaxed">
                  Fast, high-fidelity walk-through structured entirely around your circle&apos;s specific vendor files and stencils. No sales pressure.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Demo Request Form */}
        <GlassCard gradientBorder hoverGlow={false} className="p-8">
          <form onSubmit={submit} className="space-y-4">
            <FloatingInput label="Full name" value={form.name} onChange={(e) => set("name", e.target.value)} error={errors.name} onBlur={validate} />
            <FloatingInput label="Work Email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} error={errors.email} onBlur={validate} />
            
            <div className="grid sm:grid-cols-2 gap-4">
              <FloatingInput label="Company" value={form.company} onChange={(e) => set("company", e.target.value)} />
              <FloatingInput label="Telecom Circle / Region" value={form.circle} onChange={(e) => set("circle", e.target.value)} />
            </div>

            <FloatingInput label="Phone Number (Optional)" value={form.phone} onChange={(e) => set("phone", e.target.value)} />

            <FloatingTextarea 
              label="Operational Context / Challenges" 
              value={form.message} 
              onChange={(e) => set("message", e.target.value)} 
              error={errors.message} 
              rows={4} 
              placeholder="Tell us about the vendors you use (Ericsson, Nokia, Cisco), your circle scale, or what specific automation challenges you'd like to address..." 
            />
            
            <BrandButton type="submit" variant="submit" disabled={submitting} className="w-full justify-center mt-4">
              {submitting ? "Booking Demo…" : "Schedule Demo Walkthrough"} <ArrowRight className="ml-1 h-4 w-4" />
            </BrandButton>
          </form>
        </GlassCard>
      </div>

      <SlideDrawer
        open={success}
        onClose={() => setSuccess(false)}
        subtitle="Confirmation"
        title="Demo Request Received"
        width="max-w-md"
      >
        <div className="text-center py-6">
          <div className="mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary flex items-center justify-center font-display text-2xl">✓</div>
          <p className="mt-5 text-sm text-foreground/85 leading-relaxed font-sans">
            Thank you! Your demo request has been received. A telecom domain engineer from our team will reach out within 24 hours to coordinate scheduling and gather any custom templates or stencils you would like us to highlight.
          </p>
          <div className="mt-6">
            <BrandButton variant="secondary" onClick={() => setSuccess(false)}>Close</BrandButton>
          </div>
        </div>
      </SlideDrawer>
    </div>
  );
}
