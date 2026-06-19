import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Mail, MapPin, Phone, Clock, TowerControl as Tower, Signal, Search, ArrowRight, Check } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { FloatingInput, FloatingTextarea } from "@/components/FloatingField";
import { SlideDrawer } from "@/components/SlideDrawer";
import { validateEmail, validateName, validatePhone, sendEmail } from "@/lib/email";
import { z } from "zod";

const contactSearchSchema = z.object({
  role: z.string().optional(),
  interest: z.string().optional(),
  demo: z.string().optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: (search) => contactSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Contact & Request Demo - Avendum Technologies" },
      { 
        name: "description", 
        content: "Let's talk about your network. Request a demo, ask about AMC, or just reach out - our team responds within 2 business days." 
      },
    ],
  }),
  component: ContactPage,
});

const offices = [
  {
    city: "Gurgaon",
    country: "India · HQ",
    address: "Unit No. 205, Tower B, Unitech Cyber Park, Sector 39, Gurgaon – 122 002, Haryana",
    phone: "+91 98998 10118",
    email: "info@avendumtech.com",
    hours: "Mon–Fri · 09:30–19:00 IST",
    mapQuery: "Unitech+Cyber+Park+Tower+B+Sector+39+Gurgaon",
    x: 70, y: 46,
  },
  {
    city: "Canada",
    country: "Sales Office - North America",
    address: "Toronto, Ontario, Canada",
    phone: "",
    email: "info@avendumtech.com",
    hours: "Mon–Fri · 09:00–18:00 EST",
    mapQuery: "Toronto+Ontario+Canada",
    x: 26, y: 38,
  },
];

function ContactPage() {
  const search = Route.useSearch();
  const [office, setOffice] = useState(0);
  const [form, setForm] = useState({ 
    name: "", 
    email: "", 
    company: "", 
    phone: "", 
    interest: "", 
    message: "" 
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  useEffect(() => {
    if (search.demo !== undefined) {
      set("interest", "demo-all");
    } else if (search.role !== undefined) {
      set("interest", "career");
    } else if (search.interest !== undefined) {
      set("interest", search.interest);
    }
  }, [search]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!validateName(form.name)) e.name = "Please enter your full name.";
    if (!validateEmail(form.email)) e.email = "Please enter a valid work email.";
    if (form.interest === "") e.interest = "Please select a topic of interest.";
    if (form.message.trim().length < 20) e.message = "A few more details would help (20+ characters).";
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
        message: `Company: ${form.company}\nInterest: ${form.interest}\n\n${form.message}`,
        subject: `New website inquiry: ${form.interest}`,
      });
      setSuccess(true);
      setForm({ name: "", email: "", company: "", phone: "", interest: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  const active = offices[office];

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 animate-fade-up">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Contact & Request Demo</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Let&apos;s talk about <span className="text-gradient">your network</span>.
        </h1>
        <p className="mt-5 text-muted-foreground text-lg">
          Request a demo, ask about AMC, or just reach out - our team responds within 2 business days.
        </p>
      </header>

      <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-8">
        {/* Form */}
        <GlassCard gradientBorder hoverGlow={false} className="p-8">
          <form onSubmit={submit} className="space-y-4">
            <FloatingInput label="Full name" value={form.name} onChange={(e) => set("name", e.target.value)} error={errors.name} onBlur={validate} />
            <FloatingInput label="Work Email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} error={errors.email} onBlur={validate} />
            
            <div className="grid sm:grid-cols-2 gap-4">
              <FloatingInput label="Company" value={form.company} onChange={(e) => set("company", e.target.value)} />
              <FloatingInput label="Phone (Optional)" value={form.phone} onChange={(e) => set("phone", e.target.value)} error={errors.phone} onBlur={validate} />
            </div>

            {/* Interest Select */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">I&apos;m interested in</label>
              <select 
                value={form.interest} 
                onChange={(e) => set("interest", e.target.value)}
                className="w-full rounded-xl border border-border bg-[var(--surface)]/60 px-4 py-3 text-sm outline-none focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_18%,transparent)]"
              >
                <option value="">Select a topic</option>
                <option value="general">General Corporate Inquiry</option>
                <option value="amc">AMC / Support Contract</option>
                <option value="alliance">Alliance Partner Support</option>
                <option value="partner">Partner Programme</option>
                <option value="pricing">Pricing Inquiry</option>
                <option value="other">Other</option>
              </select>
              {errors.interest && <p className="text-[10px] text-red-500 mt-1">{errors.interest}</p>}
            </div>

            <FloatingTextarea label="Message" value={form.message} onChange={(e) => set("message", e.target.value)} error={errors.message} rows={4} placeholder="Tell us about your network operations context, current challenges, or what you'd like to explore..." />
            
            <BrandButton type="submit" variant="submit" disabled={submitting} className="w-full justify-center">
              {submitting ? "Sending…" : "Send Message"} <ArrowRight className="ml-1 h-4 w-4" />
            </BrandButton>
          </form>
        </GlassCard>

        {/* Info + Quick Selectors */}
        <div className="space-y-6">
          {/* Quick Selectors */}
          <GlassCard gradientBorder hoverGlow={false} className="p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">Quick Inquiries</h3>
            <div className="space-y-2">
              <button 
                type="button"
                onClick={() => set("interest", "partner")}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left cursor-pointer ${
                  form.interest === "partner" 
                    ? "border-primary bg-primary/10 shadow-[0_0_12px_var(--glow)]" 
                    : "border-border/40 hover:border-primary/40 bg-[var(--surface)]/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Tower className="h-4.5 w-4.5 text-[#1A6FD4]" />
                  <span className="text-sm font-semibold">Partner Program</span>
                </div>
                <span className="text-xs text-muted-foreground">SI / Managed Services</span>
              </button>

              <button 
                type="button"
                onClick={() => set("interest", "amc")}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left cursor-pointer ${
                  form.interest === "amc" 
                    ? "border-primary bg-primary/10 shadow-[0_0_12px_var(--glow)]" 
                    : "border-border/40 hover:border-primary/40 bg-[var(--surface)]/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Signal className="h-4.5 w-4.5 text-[#0F9F6E]" />
                  <span className="text-sm font-semibold">AMC &amp; SLAs</span>
                </div>
                <span className="text-xs text-muted-foreground">Operations Support</span>
              </button>

              <button 
                type="button"
                onClick={() => set("interest", "general")}
                className={`w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left cursor-pointer ${
                  form.interest === "general" 
                    ? "border-primary bg-primary/10 shadow-[0_0_12px_var(--glow)]" 
                    : "border-border/40 hover:border-primary/40 bg-[var(--surface)]/20"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Search className="h-4.5 w-4.5 text-[#7C3AED]" />
                  <span className="text-sm font-semibold">General Inquiry</span>
                </div>
                <span className="text-xs text-muted-foreground">Corporate Questions</span>
              </button>
            </div>
          </GlassCard>

          {/* Offices List */}
          <div className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              {offices.map((o, i) => (
                <button
                  key={o.city}
                  type="button"
                  onClick={() => setOffice(i)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition-all cursor-pointer ${
                    office === i
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border hover:border-primary hover:text-primary text-muted-foreground"
                  }`}
                >
                  {o.city}
                </button>
              ))}
            </div>

            <GlassCard gradientBorder hoverGlow={false}>
              <div className="relative aspect-[2/1] overflow-hidden rounded-xl border border-border">
                <iframe
                  src={`https://maps.google.com/maps?q=${active.mapQuery}&t=&z=${office === 0 ? 15 : 11}&ie=UTF8&iwloc=&output=embed`}
                  className="w-full h-full border-none"
                  loading="lazy"
                  title={`Avendum ${active.city} Office`}
                />
              </div>

              <div className="mt-5 space-y-3 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <span>
                    <strong>{active.city} Office</strong> · {active.country}
                    <br />
                    <span className="text-muted-foreground">{active.address}</span>
                  </span>
                </div>
                {active.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <span><a href={`tel:${active.phone.replace(/\s+/g, "")}`} className="hover:text-primary transition-colors">{active.phone}</a></span>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary shrink-0" />
                  <span><a href={`mailto:${active.email}`} className="hover:text-primary transition-colors">{active.email}</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-muted-foreground">{active.hours}</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>

      <SlideDrawer
        open={success}
        onClose={() => setSuccess(false)}
        subtitle="Confirmation"
        title="Message received"
        width="max-w-md"
      >
        <div className="text-center py-6">
          <div className="mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary flex items-center justify-center font-display text-2xl">✓</div>
          <p className="mt-5 text-sm text-foreground/85 leading-relaxed">
            Message received. Our team will get back to you within 2 business days. For urgent matters, email us directly at info@avendumtech.com or call +91 98998 10118.
          </p>
          <div className="mt-6">
            <BrandButton variant="secondary" onClick={() => setSuccess(false)}>Close</BrandButton>
          </div>
        </div>
      </SlideDrawer>
    </div>
  );
}
