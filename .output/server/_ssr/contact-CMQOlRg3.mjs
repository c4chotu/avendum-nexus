import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { a as Route$b, B as BrandButton } from "./router-BUFV2UJb.mjs";
import { F as FloatingInput, a as FloatingTextarea, S as SlideDrawer, s as sendEmail, v as validateName, b as validateEmail } from "./email-CPn0yfDw.mjs";
import { k as ArrowRight, r as TowerControl, s as Signal, t as Search, a as MapPin, P as Phone, b as Mail, p as Clock } from "../_libs/lucide-react.mjs";
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
const offices = [{
  city: "Gurgaon",
  country: "India · HQ",
  address: "Unit No. 205, Tower B, Unitech Cyber Park, Sector 39, Gurgaon – 122 002, Haryana",
  phone: "+91 98998 10118",
  email: "info@avendumtech.com",
  hours: "Mon–Fri · 09:30–19:00 IST",
  mapQuery: "Unitech+Cyber+Park+Tower+B+Sector+39+Gurgaon",
  x: 70,
  y: 46
}, {
  city: "Canada",
  country: "Sales Office - North America",
  address: "Toronto, Ontario, Canada",
  phone: "",
  email: "info@avendumtech.com",
  hours: "Mon–Fri · 09:00–18:00 EST",
  mapQuery: "Toronto+Ontario+Canada",
  x: 26,
  y: 38
}];
function ContactPage() {
  const search = Route$b.useSearch();
  const [office, setOffice] = reactExports.useState(0);
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: ""
  });
  const [errors, setErrors] = reactExports.useState({});
  const [submitting, setSubmitting] = reactExports.useState(false);
  const [success, setSuccess] = reactExports.useState(false);
  const set = (k, v) => setForm((s) => ({
    ...s,
    [k]: v
  }));
  reactExports.useEffect(() => {
    if (search.demo !== void 0) {
      set("interest", "demo-all");
    } else if (search.role !== void 0) {
      set("interest", "career");
    } else if (search.interest !== void 0) {
      set("interest", search.interest);
    }
  }, [search]);
  const validate = () => {
    const e = {};
    if (!validateName(form.name)) e.name = "Please enter your full name.";
    if (!validateEmail(form.email)) e.email = "Please enter a valid work email.";
    if (form.interest === "") e.interest = "Please select a topic of interest.";
    if (form.message.trim().length < 20) e.message = "A few more details would help (20+ characters).";
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
        message: `Company: ${form.company}
Interest: ${form.interest}

${form.message}`,
        subject: `New website inquiry: ${form.interest}`
      });
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        interest: "",
        message: ""
      });
    } finally {
      setSubmitting(false);
    }
  };
  const active = offices[office];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pb-16 animate-fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Contact & Request Demo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight", children: [
        "Let's talk about ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "your network" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg", children: "Request a demo, ask about AMC, or just reach out - our team responds within 2 business days." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Full name", value: form.name, onChange: (e) => set("name", e.target.value), error: errors.name, onBlur: validate }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Work Email", type: "email", value: form.email, onChange: (e) => set("email", e.target.value), error: errors.email, onBlur: validate }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Company", value: form.company, onChange: (e) => set("company", e.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Phone (Optional)", value: form.phone, onChange: (e) => set("phone", e.target.value), error: errors.phone, onBlur: validate })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground uppercase tracking-wider", children: "I'm interested in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { value: form.interest, onChange: (e) => set("interest", e.target.value), className: "w-full rounded-xl border border-border bg-[var(--surface)]/60 px-4 py-3 text-sm outline-none focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_18%,transparent)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "", children: "Select a topic" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "general", children: "General Corporate Inquiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "amc", children: "AMC / Support Contract" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "alliance", children: "Alliance Partner Support" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "partner", children: "Partner Programme" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "pricing", children: "Pricing Inquiry" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "other", children: "Other" })
          ] }),
          errors.interest && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-red-500 mt-1", children: errors.interest })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingTextarea, { label: "Message", value: form.message, onChange: (e) => set("message", e.target.value), error: errors.message, rows: 4, placeholder: "Tell us about your network operations context, current challenges, or what you'd like to explore..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { type: "submit", variant: "submit", disabled: submitting, className: "w-full justify-center", children: [
          submitting ? "Sending…" : "Send Message",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-primary mb-4", children: "Quick Inquiries" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => set("interest", "partner"), className: `w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left cursor-pointer ${form.interest === "partner" ? "border-primary bg-primary/10 shadow-[0_0_12px_var(--glow)]" : "border-border/40 hover:border-primary/40 bg-[var(--surface)]/20"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TowerControl, { className: "h-4.5 w-4.5 text-[#1A6FD4]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Partner Program" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "SI / Managed Services" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => set("interest", "amc"), className: `w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left cursor-pointer ${form.interest === "amc" ? "border-primary bg-primary/10 shadow-[0_0_12px_var(--glow)]" : "border-border/40 hover:border-primary/40 bg-[var(--surface)]/20"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Signal, { className: "h-4.5 w-4.5 text-[#0F9F6E]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "AMC & SLAs" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Operations Support" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => set("interest", "general"), className: `w-full flex items-center justify-between p-4 rounded-xl border transition-all text-left cursor-pointer ${form.interest === "general" ? "border-primary bg-primary/10 shadow-[0_0_12px_var(--glow)]" : "border-border/40 hover:border-primary/40 bg-[var(--surface)]/20"}`, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-4.5 w-4.5 text-[#7C3AED]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "General Inquiry" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "Corporate Questions" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: offices.map((o, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setOffice(i), className: `rounded-full px-4 py-1.5 text-xs font-semibold border transition-all cursor-pointer ${office === i ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary hover:text-primary text-muted-foreground"}`, children: o.city }, o.city)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, hoverGlow: false, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[2/1] overflow-hidden rounded-xl border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { src: `https://maps.google.com/maps?q=${active.mapQuery}&t=&z=${office === 0 ? 15 : 11}&ie=UTF8&iwloc=&output=embed`, className: "w-full h-full border-none", loading: "lazy", title: `Avendum ${active.city} Office` }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-3 text-xs", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary mt-0.5 shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
                    active.city,
                    " Office"
                  ] }),
                  " · ",
                  active.country,
                  /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: active.address })
                ] })
              ] }),
              active.phone && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${active.phone.replace(/\s+/g, "")}`, className: "hover:text-primary transition-colors", children: active.phone }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${active.email}`, className: "hover:text-primary transition-colors", children: active.email }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-4 w-4 text-primary shrink-0" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: active.hours })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideDrawer, { open: success, onClose: () => setSuccess(false), subtitle: "Confirmation", title: "Message received", width: "max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary flex items-center justify-center font-display text-2xl", children: "✓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-foreground/85 leading-relaxed", children: "Message received. Our team will get back to you within 2 business days. For urgent matters, email us directly at info@avendumtech.com or call +91 98998 10118." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", onClick: () => setSuccess(false), children: "Close" }) })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
