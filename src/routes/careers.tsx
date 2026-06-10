import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronDown, MapPin, Search } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { SlideDrawer } from "@/components/SlideDrawer";
import { FloatingInput, FloatingTextarea } from "@/components/FloatingField";
import { validateEmail, validateName, validatePhone, sendEmail } from "@/lib/email";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Avendum Technologies" },
      { name: "description", content: "Open roles across engineering, design, and program management. Build telecom AI at Avendum." },
    ],
  }),
  component: CareersPage,
});

interface Job {
  id: string;
  title: string;
  category: "Engineering" | "Design" | "Management";
  location: string;
  type: string;
  summary: string;
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: "ai-network-engineer",
    title: "Senior AI Network Engineer",
    category: "Engineering",
    location: "Gurgaon | Hybrid",
    type: "Full-time",
    summary: "Own AI services that detect, predict, and automate remediation across multi-vendor RAN and core domains.",
    requirements: [
      "6+ years building production ML systems",
      "Telecom or large-scale streaming-data background",
      "Python, PyTorch, time-series modeling, MLOps",
    ],
  },
  {
    id: "fullstack-dev",
    title: "Senior Full-Stack Developer",
    category: "Engineering",
    location: "Gurgaon | Hybrid",
    type: "Full-time",
    summary: "Build operator-facing platforms end-to-end — React/TypeScript on the front, Node/Python services and event pipelines on the back.",
    requirements: [
      "5+ years TypeScript/React in production",
      "Strong Node.js or Python backend experience",
      "Comfort with PostgreSQL, Redis, and containerized deployments",
    ],
  },
  {
    id: "lead-ux",
    title: "Lead UI/UX Designer",
    category: "Design",
    location: "Remote",
    type: "Full-time",
    summary: "Shape the design system and product surfaces of our AI operations platforms — from data-dense consoles to onboarding flows.",
    requirements: [
      "7+ years in product design, B2B or platform tooling",
      "Track record leading design across multi-team programs",
      "Fluent in Figma, prototyping, and design QA in modern stacks",
    ],
  },
  {
    id: "tpm-telecom",
    title: "Telecom Technical Program Manager",
    category: "Management",
    location: "Gurgaon | UK",
    type: "Full-time",
    summary: "Drive multi-vendor delivery programs for Tier-1 operators — sequencing risk, dependencies, and release cadence.",
    requirements: [
      "8+ years TPM experience in telecom or large enterprise platforms",
      "Hands-on Agile, dependency mapping, and stakeholder leadership",
      "Comfortable working across time zones with senior engineering pods",
    ],
  },
];

const categories = ["All", "Engineering", "Design", "Management"] as const;

function CareersPage() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [openId, setOpenId] = useState<string | null>(null);
  const [applyJob, setApplyJob] = useState<Job | null>(null);

  const filtered = useMemo(
    () =>
      jobs.filter(
        (j) =>
          (cat === "All" || j.category === cat) &&
          (q.length === 0 ||
            j.title.toLowerCase().includes(q.toLowerCase()) ||
            j.location.toLowerCase().includes(q.toLowerCase())),
      ),
    [q, cat],
  );

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 animate-fade-up">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Careers</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Build the systems that <span className="text-gradient">run the network</span>.
        </h1>
        <p className="mt-5 text-muted-foreground text-lg">
          Senior, mission-led teams. Real telecom workloads. Open roles below.
        </p>
      </header>

      <div className="mt-10 grid lg:grid-cols-[1fr_auto] gap-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search roles, locations…"
            className="w-full rounded-full border border-border bg-[var(--surface)]/60 pl-11 pr-4 py-3 text-sm outline-none focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_18%,transparent)]"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm border transition-all ${
                cat === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-foreground/80 hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {filtered.length === 0 && (
          <p className="text-muted-foreground text-sm">No roles match your filters yet.</p>
        )}
        {filtered.map((j) => {
          const open = openId === j.id;
          return (
            <GlassCard key={j.id} gradientBorder hoverGlow={false} className="!p-0 overflow-hidden">
              <button
                onClick={() => setOpenId(open ? null : j.id)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold">{j.title}</h3>
                    <span className="rounded-full bg-primary/15 text-primary px-2.5 py-0.5 text-xs font-mono">{j.category}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {j.location} · {j.type}
                  </p>
                </div>
                <ChevronDown className={`h-5 w-5 text-foreground/60 shrink-0 transition-transform ${open ? "rotate-180 text-primary" : ""}`} />
              </button>
              {open && (
                <div className="px-6 pb-6 border-t border-border animate-fade-up">
                  <p className="mt-5 text-foreground/85 leading-relaxed">{j.summary}</p>
                  <h4 className="mt-5 text-xs uppercase tracking-[0.25em] text-primary mb-3">What you'll bring</h4>
                  <ul className="space-y-2">
                    {j.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-3 text-sm">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <BrandButton onClick={() => setApplyJob(j)}>Apply Now</BrandButton>
                  </div>
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>

      <div className="mt-12 flex items-center gap-2 text-xs text-muted-foreground">
        <MapPin className="h-3.5 w-3.5" />
        Hiring across Gurgaon, Toronto, and London.
      </div>

      <SlideDrawer
        open={!!applyJob}
        onClose={() => setApplyJob(null)}
        subtitle="Application"
        title={applyJob ? `Apply: ${applyJob.title}` : ""}
      >
        {applyJob && <ApplyForm job={applyJob} onDone={() => setApplyJob(null)} />}
      </SlideDrawer>
    </div>
  );
}

function ApplyForm({ job, onDone }: { job: Job; onDone: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", coverLetter: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const validate = () => {
    const e: Record<string, string> = {};
    if (!validateName(form.name)) e.name = "Please enter your full name (2+ characters).";
    if (!validateEmail(form.email)) e.email = "Please enter a valid email address.";
    if (!validatePhone(form.phone)) e.phone = "Please enter a valid phone number.";
    if (form.coverLetter.trim().length < 30) e.coverLetter = "Please share a few sentences about your fit (30+ chars).";
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
        subject: `Application: ${job.title}`,
        message: form.coverLetter,
      });
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-10">
        <div className="mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary flex items-center justify-center font-display text-2xl">✓</div>
        <h3 className="mt-5 font-display text-xl">Application received</h3>
        <p className="mt-2 text-sm text-muted-foreground">Thanks for applying to {job.title}. Our team will be in touch within 5 business days.</p>
        <div className="mt-6">
          <BrandButton variant="secondary" onClick={onDone}>Close</BrandButton>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <FloatingInput label="Full name" value={form.name} onChange={(e) => set("name", e.target.value)} error={errors.name} onBlur={validate} />
      <FloatingInput label="Email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} error={errors.email} onBlur={validate} />
      <FloatingInput label="Phone" value={form.phone} onChange={(e) => set("phone", e.target.value)} error={errors.phone} onBlur={validate} />
      <FloatingTextarea label="Tell us about yourself" value={form.coverLetter} onChange={(e) => set("coverLetter", e.target.value)} error={errors.coverLetter} rows={6} />
      <BrandButton type="submit" variant="submit" disabled={submitting} className="w-full">
        {submitting ? "Submitting…" : "Submit Application"}
      </BrandButton>
      <p className="text-xs text-muted-foreground text-center">By submitting you agree to be contacted about this role.</p>
    </form>
  );
}
