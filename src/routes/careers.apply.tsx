import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { MapPin, Clock, ArrowRight, ShieldCheck, Mail, Phone, ExternalLink } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { FloatingInput, FloatingTextarea } from "@/components/FloatingField";
import { SlideDrawer } from "@/components/SlideDrawer";
import { validateEmail, validateName, sendEmail } from "@/lib/email";
import { z } from "zod";

const applySearchSchema = z.object({
  role: z.string().optional(),
});

export const Route = createFileRoute("/careers/apply")({
  validateSearch: (search) => applySearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Apply — Careers at Avendum Technologies" },
      { 
        name: "description", 
        content: "Join our team and build the software that automates India's telecom network operations floor." 
      },
    ],
  }),
  component: CareersApplyPage,
});

interface Job {
  id: string;
  title: string;
  category: "engineering" | "product" | "telecom" | "support";
  categoryLabel: string;
  location: string;
  experience: string;
  tags: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
}

import jobsData from "../data/jobs.json";

const jobs: Job[] = jobsData as Job[];


function CareersApplyPage() {
  const search = Route.useSearch();
  const [form, setForm] = useState({ name: "", email: "", phone: "", linkedin: "", resume: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const set = (k: string, v: string) => setForm((s) => ({ ...s, [k]: v }));

  const activeJob = useMemo(() => {
    return jobs.find(j => j.id === search.role);
  }, [search.role]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!validateName(form.name)) e.name = "Please enter your full name.";
    if (!validateEmail(form.email)) e.email = "Please enter a valid email address.";
    if (form.resume.trim() === "") e.resume = "Please share a link to your resume/CV.";
    if (form.message.trim().length < 20) e.message = "Please write a brief note (20+ characters).";
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
        message: `Applied Role: ${activeJob ? activeJob.title : "Open Application"}\nLinkedIn: ${form.linkedin}\nResume Link: ${form.resume}\n\nCover Letter:\n${form.message}`,
        subject: `New Job Application: ${activeJob ? activeJob.title : "Open Application"}`,
      });
      setSuccess(true);
      setForm({ name: "", email: "", phone: "", linkedin: "", resume: "", message: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 animate-fade-up">
      <header className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Job Application</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Apply to join <span className="text-gradient">our team</span>.
        </h1>
        <p className="mt-5 text-muted-foreground text-lg">
          Submit your profile to build mission-critical automation systems for telecom networks.
        </p>
      </header>

      <div className="mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8">
        {/* Left Side: Selected Job Card or General Application details */}
        <div className="space-y-6">
          <GlassCard gradientBorder hoverGlow={false} className="p-6">
            {activeJob ? (
              <div key={activeJob.id} className="animate-fade-up">
                <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-mono text-primary font-semibold">
                  {activeJob.categoryLabel}
                </span>
                <h3 className="mt-3 font-display font-bold text-lg text-foreground">{activeJob.title}</h3>
                <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5" /> {activeJob.location} &middot; Full-time &middot; {activeJob.experience}
                </p>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed font-light">
                  {activeJob.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {activeJob.tags.map(t => (
                    <span key={t} className="rounded border border-border bg-foreground/5 px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="animate-fade-up">
                <span className="rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-mono text-primary font-semibold">
                  All Profiles
                </span>
                <h3 className="mt-3 font-display font-bold text-lg text-foreground">Open Application</h3>
                <p className="text-xs text-muted-foreground mt-1.5">
                  Gurgaon, India &middot; Full-time / Hybrid
                </p>
                <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                  Don&apos;t see the exact fit for your skills? We are constantly on the lookout for talented engineers, multi-vendor parser architects, and telecom planning experts. Share your details and we will review your profile for upcoming roles.
                </p>
              </div>
            )}
          </GlassCard>

          {/* Process Timeline Checklist */}
          <GlassCard gradientBorder hoverGlow={false} className="p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-primary mb-4">Our Application Process</h3>
            <div className="space-y-4 text-xs">
              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/15 text-primary flex items-center justify-center font-mono font-bold">1</div>
                <div>
                  <h4 className="font-semibold text-foreground">5-Day Resume Screening</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">A human reviews your experience. No automated ATS rejection filters.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/15 text-primary flex items-center justify-center font-mono font-bold">2</div>
                <div>
                  <h4 className="font-semibold text-foreground">Domain Screening Call</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">30-minute introductory sync about roles, culture, and projects.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-6 w-6 rounded-full bg-primary/15 text-primary flex items-center justify-center font-mono font-bold">3</div>
                <div>
                  <h4 className="font-semibold text-foreground">Practical Skill Sync</h4>
                  <p className="text-[10px] text-muted-foreground mt-0.5">Focused technical validation of domain skills (ETL, CLI syntax parser, or backend concurrency).</p>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Right Side: Apply Form */}
        <GlassCard gradientBorder hoverGlow={false} className="p-8">
          <form onSubmit={submit} className="space-y-4">
            <FloatingInput label="Full Name" value={form.name} onChange={(e) => set("name", e.target.value)} error={errors.name} onBlur={validate} />
            <FloatingInput label="Email Address" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} error={errors.email} onBlur={validate} />
            <FloatingInput label="Phone Number" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
            
            <div className="grid sm:grid-cols-2 gap-4">
              <FloatingInput label="LinkedIn Profile URL" value={form.linkedin} onChange={(e) => set("linkedin", e.target.value)} />
              <FloatingInput label="Resume Link (Google Drive, Dropbox, etc.)" value={form.resume} onChange={(e) => set("resume", e.target.value)} error={errors.resume} onBlur={validate} />
            </div>

            <FloatingTextarea 
              label="Briefly tell us about your domain experience" 
              value={form.message} 
              onChange={(e) => set("message", e.target.value)} 
              error={errors.message} 
              rows={5} 
              placeholder="Tell us about the telecom projects you have worked on, systems you've integrated, or technical stacks you specialize in..." 
            />
            
            <BrandButton type="submit" variant="submit" disabled={submitting} className="w-full justify-center mt-4">
              {submitting ? "Submitting Application…" : "Submit Application"} <ArrowRight className="ml-1 h-4 w-4" />
            </BrandButton>
          </form>
        </GlassCard>
      </div>

      <SlideDrawer
        open={success}
        onClose={() => setSuccess(false)}
        subtitle="Confirmation"
        title="Application Received"
        width="max-w-md"
      >
        <div className="text-center py-6">
          <div className="mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary flex items-center justify-center font-display text-2xl">✓</div>
          <p className="mt-5 text-sm text-foreground/85 leading-relaxed font-sans">
            Thank you for applying! Your application has been received and our engineering screening team will review it. We will get back to you within 5 business days.
          </p>
          <div className="mt-6">
            <BrandButton variant="secondary" onClick={() => setSuccess(false)}>Close</BrandButton>
          </div>
        </div>
      </SlideDrawer>
    </div>
  );
}
