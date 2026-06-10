import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { FloatingInput, FloatingTextarea } from "@/components/FloatingField";
import { SlideDrawer } from "@/components/SlideDrawer";
import { validateEmail, validateName, validatePhone, sendEmail } from "@/lib/email";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Avendum Technologies" },
      { name: "description", content: "Talk to the Avendum engineering team. Offices in Gurgaon, Toronto, and London." },
    ],
  }),
  component: ContactPage,
});

const offices = [
  {
    city: "Gurgaon",
    country: "India · HQ",
    address: "Cyber City, Gurgaon, Haryana 122002",
    phone: "+91 124 000 0000",
    hours: "Mon–Fri · 09:30–19:00 IST",
    // Coordinates are stylized onto a simulated SVG world map
    x: 70, y: 46,
  },
  {
    city: "Toronto",
    country: "Canada",
    address: "MaRS Discovery District, Toronto, ON",
    phone: "+1 800 966 4564",
    hours: "Mon–Fri · 09:00–18:00 EST",
    x: 26, y: 38,
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "Shoreditch, London EC2A",
    phone: "+44 20 0000 0000",
    hours: "Mon–Fri · 09:00–18:00 GMT",
    x: 49, y: 34,
  },
];

function ContactPage() {
  const [office, setOffice] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!validateName(form.name)) e.name = "Please enter your full name.";
    if (!validateEmail(form.email)) e.email = "Please enter a valid email address.";
    if (!validatePhone(form.phone)) e.phone = "Please enter a valid phone number.";
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
        message: form.message,
        subject: "New website inquiry",
      });
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  const active = offices[office];

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 animate-fade-up">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Let's <span className="text-gradient">build the next platform</span> together.
        </h1>
        <p className="mt-5 text-muted-foreground text-lg">
          Tell us about your network, your roadmap, or the problem you're stuck on.
          We typically respond within one business day.
        </p>
      </header>

      <div className="mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-8">
        {/* Form */}
        <GlassCard gradientBorder hoverGlow={false} className="p-8">
          <form onSubmit={submit} className="space-y-4">
            <FloatingInput label="Full name" value={form.name} onChange={(e) => set("name", e.target.value)} error={errors.name} onBlur={validate} />
            <div className="grid sm:grid-cols-2 gap-4">
              <FloatingInput label="Email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} error={errors.email} onBlur={validate} />
              <FloatingInput label="Phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} error={errors.phone} onBlur={validate} />
            </div>
            <FloatingTextarea label="How can we help?" value={form.message} onChange={(e) => set("message", e.target.value)} error={errors.message} />
            <BrandButton type="submit" variant="submit" disabled={submitting} className="w-full">
              {submitting ? "Sending…" : "Send Message"}
            </BrandButton>
          </form>
        </GlassCard>

        {/* Offices + map */}
        <div className="space-y-5">
          <div className="flex gap-2 flex-wrap">
            {offices.map((o, i) => (
              <button
                key={o.city}
                onClick={() => setOffice(i)}
                className={`rounded-full px-4 py-2 text-sm border transition-all ${
                  office === i
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border hover:border-primary hover:text-primary"
                }`}
              >
                {o.city}
              </button>
            ))}
          </div>

          <GlassCard gradientBorder hoverGlow={false}>
            <div className="relative aspect-[2/1] overflow-hidden rounded-xl border border-border bg-[var(--surface-2)]">
              <WorldMap />
              <div
                className="absolute -translate-x-1/2 -translate-y-full transition-all duration-500"
                style={{ left: `${active.x}%`, top: `${active.y}%` }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-full bg-primary/30 blur-md animate-pulse" />
                  <div className="relative h-5 w-5 rounded-full bg-primary border-2 border-background shadow-[0_0_18px_var(--glow)]" />
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-start gap-3"><MapPin className="h-4 w-4 text-primary mt-0.5" /><span><strong>{active.city}</strong> · {active.country}<br /><span className="text-muted-foreground">{active.address}</span></span></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4 text-primary" /><span>{active.phone}</span></div>
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-primary" /><span className="text-muted-foreground">{active.hours}</span></div>
              <div className="flex items-center gap-3"><Mail className="h-4 w-4 text-primary" /><a href="mailto:hello@avendumtech.com" className="hover:text-primary">hello@avendumtech.com</a></div>
            </div>
          </GlassCard>
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
          <p className="mt-5 text-foreground/85">Thanks for reaching out. Our team will reply within one business day.</p>
          <div className="mt-6">
            <BrandButton variant="secondary" onClick={() => setSuccess(false)}>Close</BrandButton>
          </div>
        </div>
      </SlideDrawer>
    </div>
  );
}

function WorldMap() {
  // Stylized continents — simple shapes for visual reference, not geographic accuracy.
  return (
    <svg viewBox="0 0 100 50" className="absolute inset-0 h-full w-full">
      <defs>
        <pattern id="dots" width="2" height="2" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.4" fill="oklch(0.76 0.16 215)" opacity="0.25" />
        </pattern>
      </defs>
      <rect width="100" height="50" fill="url(#dots)" />
      <g fill="oklch(0.66 0.23 32)" opacity="0.18">
        <path d="M14 18 Q20 14 28 16 T40 22 Q36 32 26 34 T12 28 Z" />
        <path d="M44 12 Q52 10 58 14 T68 18 Q66 26 56 26 T46 22 Z" />
        <path d="M48 30 Q56 28 62 32 T62 42 Q54 44 50 40 Z" />
        <path d="M66 22 Q78 20 86 26 T84 38 Q74 42 68 38 T64 30 Z" />
        <path d="M80 40 Q86 40 90 42 T86 46 Q82 46 80 44 Z" />
      </g>
    </svg>
  );
}
