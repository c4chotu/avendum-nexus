import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { d as Route, B as BrandButton } from "./router-BUFV2UJb.mjs";
import { F as FloatingInput, a as FloatingTextarea, S as SlideDrawer, s as sendEmail, v as validateName, b as validateEmail } from "./email-CPn0yfDw.mjs";
import { j as jobsData } from "./jobs-8tSJDgFA.mjs";
import { a as MapPin, k as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/zod.mjs";
const jobs = jobsData;
function CareersApplyPage() {
  const search = Route.useSearch();
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    resume: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [success, setSuccess] = reactExports.useState(false);
  const set = (k, v) => setForm((s) => ({
    ...s,
    [k]: v
  }));
  const activeJob = reactExports.useMemo(() => {
    return jobs.find((j) => j.id === search.role);
  }, [search.role]);
  const validate = () => {
    const e = {};
    if (!validateName(form.name)) e.name = "Please enter your full name.";
    if (!validateEmail(form.email)) e.email = "Please enter a valid email address.";
    if (form.resume.trim() === "") e.resume = "Please share a link to your resume/CV.";
    if (form.message.trim().length < 20) e.message = "Please write a brief note (20+ characters).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const submit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    try {
      await sendEmail({
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        message: `Applied Role: ${activeJob ? activeJob.title : "Open Application"}
LinkedIn: ${form.linkedin}
Resume Link: ${form.resume}

Cover Letter:
${form.message}`,
        subject: `New Job Application: ${activeJob ? activeJob.title : "Open Application"}`
      });
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        linkedin: "",
        resume: "",
        message: ""
      });
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pb-16 animate-fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Job Application" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight", children: [
        "Apply to join ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "our team" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg", children: "Submit your profile to build mission-critical automation systems for telecom networks." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid lg:grid-cols-[1fr_1.2fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-6", children: activeJob ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-mono text-primary font-semibold", children: activeJob.categoryLabel }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display font-bold text-lg text-foreground", children: activeJob.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1.5 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }),
            " ",
            activeJob.location,
            " · Full-time · ",
            activeJob.experience
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4 leading-relaxed font-light", children: activeJob.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5 mt-5", children: activeJob.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded border border-border bg-foreground/5 px-2 py-0.5 text-[10px] font-mono text-muted-foreground", children: t }, t)) })
        ] }, activeJob.id) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-up", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[10px] font-mono text-primary font-semibold", children: "All Profiles" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display font-bold text-lg text-foreground", children: "Open Application" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1.5", children: "Gurgaon, India · Full-time / Hybrid" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-4 leading-relaxed", children: "Don't see the exact fit for your skills? We are constantly on the lookout for talented engineers, multi-vendor parser architects, and telecom planning experts. Share your details and we will review your profile for upcoming roles." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-primary mb-4", children: "Our Application Process" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-primary/15 text-primary flex items-center justify-center font-mono font-bold", children: "1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "5-Day Resume Screening" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: "A human reviews your experience. No automated ATS rejection filters." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-primary/15 text-primary flex items-center justify-center font-mono font-bold", children: "2" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "Domain Screening Call" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: "30-minute introductory sync about roles, culture, and projects." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-6 w-6 rounded-full bg-primary/15 text-primary flex items-center justify-center font-mono font-bold", children: "3" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-semibold text-foreground", children: "Practical Skill Sync" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5", children: "Focused technical validation of domain skills (ETL, CLI syntax parser, or backend concurrency)." })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Full Name", value: form.name, onChange: (e) => set("name", e.target.value), error: errors.name, onBlur: validate }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Email Address", type: "email", value: form.email, onChange: (e) => set("email", e.target.value), error: errors.email, onBlur: validate }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Phone Number", value: form.phone, onChange: (e) => set("phone", e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "LinkedIn Profile URL", value: form.linkedin, onChange: (e) => set("linkedin", e.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Resume Link (Google Drive, Dropbox, etc.)", value: form.resume, onChange: (e) => set("resume", e.target.value), error: errors.resume, onBlur: validate })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingTextarea, { label: "Briefly tell us about your domain experience", value: form.message, onChange: (e) => set("message", e.target.value), error: errors.message, rows: 5, placeholder: "Tell us about the telecom projects you have worked on, systems you've integrated, or technical stacks you specialize in..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { type: "submit", variant: "submit", disabled: submitting, className: "w-full justify-center mt-4", children: [
          submitting ? "Submitting Application…" : "Submit Application",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideDrawer, { open: success, onClose: () => setSuccess(false), subtitle: "Confirmation", title: "Application Received", width: "max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary flex items-center justify-center font-display text-2xl", children: "✓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-foreground/85 leading-relaxed font-sans", children: "Thank you for applying! Your application has been received and our engineering screening team will review it. We will get back to you within 5 business days." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", onClick: () => setSuccess(false), children: "Close" }) })
    ] }) })
  ] });
}
export {
  CareersApplyPage as component
};
