import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as GlassCard } from "./GlassCard-DJIU6kMx.mjs";
import { R as Route$c, B as BrandButton } from "./router-BUFV2UJb.mjs";
import { F as FloatingInput, a as FloatingTextarea, S as SlideDrawer, s as sendEmail, v as validateName, b as validateEmail } from "./email-CPn0yfDw.mjs";
import { j as Check, e as ShieldCheck, p as Clock, k as ArrowRight } from "../_libs/lucide-react.mjs";
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
const demoScopes = {
  netra: {
    title: "NETRA Demo Scope",
    color: "#1A6FD4",
    bullets: ["Role-aware planning lifecycles (8 workflow roles)", "End-to-End Deployment Tracking", "End-to-end dismantle workflow tracking", "Network-wide UBR and MW dashboards"]
  },
  netiq: {
    title: "NETIQ Demo Scope",
    color: "#7C3AED",
    bullets: ["Daily multi-vendor CM dump parsing and integration", "Automated parameter validation scans", "Ghost node identification and decommissioning logic", "Closed-loop planned vs. configured delta reports"]
  },
  all: {
    title: "Full Platform Demo Scope",
    color: "#F26522",
    bullets: ["Overview of NETRA and NETIQ integrations", "Trace a complete path from Microwave Planning to live NMS Audit", "Private cloud air-gapped deployment architecture review", "Escalation support and managed operations models"]
  }
};
function DemoPage() {
  const search = Route$c.useSearch();
  const [activeTab, setActiveTab] = reactExports.useState("all");
  const [form, setForm] = reactExports.useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    circle: "",
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
    if (search.product === "mids" || search.product === "netra") setActiveTab("netra");
    else if (search.product === "netiq") setActiveTab("netiq");
    else setActiveTab("all");
  }, [search]);
  const validate = () => {
    const e = {};
    if (!validateName(form.name)) e.name = "Please enter your full name.";
    if (!validateEmail(form.email)) e.email = "Please enter a valid work email.";
    if (form.message.trim().length < 15) e.message = "Please share a brief note about your interest (15+ chars).";
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
Circle/Region: ${form.circle}
Demo Product: ${activeTab.toUpperCase()}

${form.message}`,
        subject: `Avendum Platform Demo Request: ${activeTab.toUpperCase()}`
      });
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        company: "",
        phone: "",
        circle: "",
        message: ""
      });
    } finally {
      setSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pb-16 animate-fade-up", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-primary", children: "Demo Request" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight", children: [
        "Request a customized ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "platform demo" }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-muted-foreground text-lg", children: "See how our AI platforms automate microwave deployment planning and network intelligence auditing." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid lg:grid-cols-[1.1fr_1fr] gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xs font-bold uppercase tracking-wider text-primary mb-4", children: "Select Platform to Explore" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-2", children: ["all", "netra", "netiq"].map((tab) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setActiveTab(tab), className: `px-3 py-2 text-xs font-semibold rounded-lg uppercase tracking-wider transition-all cursor-pointer border ${activeTab === tab ? "bg-primary border-primary text-white shadow-md" : "border-border/40 text-muted-foreground hover:text-foreground hover:bg-foreground/5"}`, children: tab }, tab)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-border/40 pt-6 animate-fade-up", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { className: "font-display font-semibold text-sm text-foreground mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: {
                backgroundColor: demoScopes[activeTab].color
              } }),
              demoScopes[activeTab].title
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: demoScopes[activeTab].bullets.map((bullet, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 shrink-0 mt-0.5", style: {
                color: demoScopes[activeTab].color
              } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: bullet })
            ] }, idx)) })
          ] }, activeTab)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border/40 bg-foreground/5 flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold text-foreground", children: "Secure Air-Gapped Sandboxing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5 leading-relaxed", children: "We deploy demo environments in local private sandbox structures, ensuring zero corporate data or configuration detail leakage." })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 rounded-xl border border-border/40 bg-foreground/5 flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-xs font-semibold text-foreground", children: "Custom Review" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground mt-0.5 leading-relaxed", children: "Fast, high-fidelity walk-through structured entirely around your network's specific vendor files and stencils. No sales pressure." })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(GlassCard, { gradientBorder: true, hoverGlow: false, className: "p-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Full name", value: form.name, onChange: (e) => set("name", e.target.value), error: errors.name, onBlur: validate }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Work Email", type: "email", value: form.email, onChange: (e) => set("email", e.target.value), error: errors.email, onBlur: validate }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Company", value: form.company, onChange: (e) => set("company", e.target.value) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Network Region / Location", value: form.circle, onChange: (e) => set("circle", e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInput, { label: "Phone Number (Optional)", value: form.phone, onChange: (e) => set("phone", e.target.value) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingTextarea, { label: "Operational Context / Challenges", value: form.message, onChange: (e) => set("message", e.target.value), error: errors.message, rows: 4, placeholder: "Tell us about the vendors you use, your network scale, or what specific automation challenges you'd like to address..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(BrandButton, { type: "submit", variant: "submit", disabled: submitting, className: "w-full justify-center mt-4", children: [
          submitting ? "Booking Demo…" : "Schedule Demo Walkthrough",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SlideDrawer, { open: success, onClose: () => setSuccess(false), subtitle: "Confirmation", title: "Demo Request Received", width: "max-w-md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-14 w-14 rounded-full bg-primary/15 text-primary flex items-center justify-center font-display text-2xl", children: "✓" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-sm text-foreground/85 leading-relaxed font-sans", children: "Thank you! Your demo request has been received. A network automation engineer from our team will reach out to coordinate scheduling and gather any custom templates or stencils you would like us to highlight." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { variant: "secondary", onClick: () => setSuccess(false), children: "Close" }) })
    ] }) })
  ] });
}
export {
  DemoPage as component
};
