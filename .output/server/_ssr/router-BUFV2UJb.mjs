import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { Q as notFound } from "../_libs/tanstack__router-core.mjs";
import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { C as ChevronDown, B as Building, H as Handshake, X, M as Menu, a as MapPin, P as Phone, b as Mail, L as Linkedin, I as Instagram, S as Sun, c as Moon } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
const appCss = "/assets/styles-DQV5jEpD.css";
function reportLovableError(error, context = {}) {
  if (typeof window === "undefined") return;
  window.__lovableEvents?.captureException?.(
    error,
    {
      source: "react_error_boundary",
      route: window.location.pathname,
      ...context
    },
    {
      mechanism: "react_error_boundary",
      handled: false,
      severity: "error"
    }
  );
}
function ParticleNetwork() {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let pts = [];
    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.floor(w * h / 18e3);
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      }));
    };
    const tick = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const a = pts[i], b = pts[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 140 * 140) {
            const o = 1 - Math.sqrt(d2) / 140;
            ctx.strokeStyle = `rgba(255,90,40,${o * 0.18})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = "rgba(0,200,235,0.55)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    resize();
    tick();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref,
      "aria-hidden": true,
      className: "fixed inset-0 -z-10 h-full w-full pointer-events-none opacity-60"
    }
  );
}
function ThemeToggle() {
  const [theme, setTheme] = reactExports.useState("light");
  reactExports.useEffect(() => {
    const saved = localStorage.getItem("avendum-theme") ?? "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
    document.documentElement.classList.toggle("light", saved === "light");
  }, []);
  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("avendum-theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.classList.toggle("light", next === "light");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggle,
      "aria-label": "Toggle theme",
      className: "rounded-full border border-border p-2 text-foreground/80 hover:text-primary hover:border-primary transition-all",
      children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
    }
  );
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const styles = cva(
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98] whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:scale-[1.03] hover:shadow-[0_18px_50px_-12px_var(--glow)]",
        secondary: "bg-transparent text-foreground border border-border hover:border-primary hover:text-primary hover:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_15%,transparent)]",
        ghost: "text-foreground/80 hover:text-foreground hover:bg-secondary",
        submit: "bg-gradient-to-r from-primary to-[color-mix(in_oklab,var(--primary)_60%,var(--accent))] text-primary-foreground hover:scale-[1.02] hover:shadow-[0_18px_50px_-12px_var(--glow)]"
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base"
      }
    },
    defaultVariants: { variant: "primary", size: "md" }
  }
);
function BrandButton({ className, variant, size, children, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: cn(styles({ variant, size }), className), ...rest, children });
}
const logo = "/assets/logo-DDV238NI.svg";
function SiteNav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [productsOpen, setProductsOpen] = reactExports.useState(false);
  const [companyOpen, setCompanyOpen] = reactExports.useState(false);
  const productsTimeoutRef = reactExports.useRef(null);
  const companyTimeoutRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const handleProductsMouseEnter = () => {
    if (productsTimeoutRef.current) clearTimeout(productsTimeoutRef.current);
    setProductsOpen(true);
  };
  const handleProductsMouseLeave = () => {
    productsTimeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 150);
  };
  const handleCompanyMouseEnter = () => {
    if (companyTimeoutRef.current) clearTimeout(companyTimeoutRef.current);
    setCompanyOpen(true);
  };
  const handleCompanyMouseLeave = () => {
    companyTimeoutRef.current = setTimeout(() => {
      setCompanyOpen(false);
    }, 150);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${scrolled ? "glass-nav shadow-lg" : "bg-transparent"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center group", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Avendum Technologies", className: "h-8 w-auto  transition-transform group-hover:scale-105" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "relative",
                    onMouseEnter: handleProductsMouseEnter,
                    onMouseLeave: handleProductsMouseLeave,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1 px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors cursor-pointer", children: [
                        "Products ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-3.5 w-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180 text-primary" : ""}` })
                      ] }),
                      productsOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-full left-0 mt-1 w-64 glass rounded-2xl p-2 shadow-xl border border-border animate-fade-up", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block px-3 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest", children: "Our Platforms" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Link,
                          {
                            to: "/products/netiq",
                            className: "flex items-center gap-3 p-2 rounded-xl hover:bg-foreground/5 transition-colors text-left",
                            onClick: () => setProductsOpen(false),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#7C3AED] shrink-0" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "NETIQ" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Network Intelligence Platform" })
                              ] })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Link,
                          {
                            to: "/products/netra",
                            className: "flex items-center gap-3 p-2 rounded-xl hover:bg-foreground/5 transition-colors text-left",
                            onClick: () => setProductsOpen(false),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#1A6FD4] shrink-0" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "NETRA" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Network Planning & Deployment" })
                              ] })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/services",
                    className: "px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors",
                    activeProps: { className: "!text-primary font-medium" },
                    children: "What We Build"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/",
                    hash: "amc",
                    className: "px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors",
                    children: "AMC & Support"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "relative",
                    onMouseEnter: handleCompanyMouseEnter,
                    onMouseLeave: handleCompanyMouseLeave,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "flex items-center gap-1 px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors cursor-pointer", children: [
                        "About ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `h-3.5 w-3.5 transition-transform duration-200 ${companyOpen ? "rotate-180 text-primary" : ""}` })
                      ] }),
                      companyOpen && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute top-full left-0 mt-1 w-60 glass rounded-2xl p-2 shadow-xl border border-border animate-fade-up", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Link,
                          {
                            to: "/company",
                            className: "flex items-center gap-3 p-2.5 rounded-xl hover:bg-foreground/5 transition-colors text-left",
                            onClick: () => setCompanyOpen(false),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Building, { className: "h-4 w-4 text-muted-foreground shrink-0" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "About Us" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Our story & philosophy" })
                              ] })
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          Link,
                          {
                            to: "/company/partner",
                            className: "flex items-center gap-3 p-2.5 rounded-xl hover:bg-foreground/5 transition-colors text-left",
                            onClick: () => setCompanyOpen(false),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(Handshake, { className: "h-4 w-4 text-muted-foreground shrink-0" }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: "Partner with Us" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "SI, OEM & MS programmes" })
                              ] })
                            ]
                          }
                        )
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/careers",
                    className: "px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors",
                    activeProps: { className: "!text-primary" },
                    children: "Careers"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Link,
                  {
                    to: "/contact",
                    className: "px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors",
                    activeProps: { className: "!text-primary" },
                    children: "Contact"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/demo", className: "hidden sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BrandButton, { size: "sm", children: "Request Demo" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: () => setOpen((s) => !s),
                    className: "md:hidden rounded-full border border-border p-2 cursor-pointer",
                    "aria-label": "Menu",
                    children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-4 w-4" })
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden mt-2 glass rounded-2xl p-4 animate-fade-up max-h-[80vh] overflow-y-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest", children: "Products" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/products/netiq",
              onClick: () => setOpen(false),
              className: "flex items-center gap-3 px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-foreground/5 rounded-xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#7C3AED]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "NETIQ (Network Intelligence)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/products/netra",
              onClick: () => setOpen(false),
              className: "flex items-center gap-3 px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-foreground/5 rounded-xl",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-[#1A6FD4]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "NETRA (Network Planning)" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 border-t border-border/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest", children: "Navigation" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/services",
              onClick: () => setOpen(false),
              className: "px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl",
              activeProps: { className: "!text-primary" },
              children: "What We Build"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              hash: "amc",
              onClick: () => setOpen(false),
              className: "px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl",
              children: "AMC & Support"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-2 border-t border-border/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest", children: "About" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/company",
              onClick: () => setOpen(false),
              className: "px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl",
              activeProps: { className: "!text-primary" },
              children: "About Us"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/company/partner",
              onClick: () => setOpen(false),
              className: "px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl",
              children: "Partner with Us"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/careers",
              onClick: () => setOpen(false),
              className: "px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl",
              children: "Careers"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              onClick: () => setOpen(false),
              className: "px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl",
              children: "Contact"
            }
          )
        ] }) })
      ] })
    }
  );
}
function SiteFooter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-5 border-t border-border", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "avendum.", className: "h-8 w-auto" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-sm text-muted-foreground leading-relaxed", children: [
          "NETRA — Enterprise telecom intelligence platforms  ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          " NETIQ — automating network planning, provisioning and NMS audit at scale."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 space-y-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Unit No. 205, Tower B, Unitech Cyber Park,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Sector 39, Gurgaon – 122 002, India"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-4 w-4 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+919899810118", className: "hover:text-primary transition-colors", children: "+91 98998 10118" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-primary shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@avendumtech.com", className: "hover:text-primary transition-colors", children: "info@avendumtech.com" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://www.linkedin.com/company/avendumtech/posts/?feedView=all",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "rounded-full border border-border p-2 text-foreground/70 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all",
              title: "LinkedIn",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#",
              className: "rounded-full border border-border p-2 text-foreground/70 hover:text-[#E1306C] hover:border-[#E1306C] transition-all",
              title: "Instagram",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "mailto:info@avendumtech.com",
              className: "rounded-full border border-border p-2 text-foreground/70 hover:text-primary hover:border-primary transition-all",
              title: "Email",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm tracking-widest uppercase text-foreground/60 mb-4", children: "Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/netra", className: "hover:text-primary transition-colors", children: "NETRA" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/products/netiq", className: "hover:text-primary transition-colors", children: "NETIQ" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm tracking-widest uppercase text-foreground/60 mb-4", children: "Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "amc", className: "hover:text-primary transition-colors", children: "AMC Programmes" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "amc", className: "hover:text-primary transition-colors", children: "Alliance Support" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "amc", className: "hover:text-primary transition-colors", children: "Managed Operations" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "font-display text-sm tracking-widest uppercase text-foreground/60 mb-4", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "space-y-2.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company", className: "hover:text-primary transition-colors", children: "About Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company", hash: "philosophy", className: "hover:text-primary transition-colors", children: "Our Philosophy" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/company/partner", className: "hover:text-primary transition-colors", children: "Partner with Us" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/careers", className: "hover:text-primary transition-colors", children: "Careers" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Avendum Technologies Private Limited. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-foreground/5 border border-border/40 px-2 py-0.5 text-[10px] font-semibold", children: "Enterprise Grade" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-foreground/5 border border-border/40 px-2 py-0.5 text-[10px] font-semibold", children: "India Built" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded bg-foreground/5 border border-border/40 px-2 py-0.5 text-[10px] font-semibold", children: "Telecom Specialized" })
      ] })
    ] }) })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  reactExports.useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$f = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Avendum – A Technology Company" },
      { name: "description", content: "Avendum Technologies builds enterprise-grade AI platforms that automate telecom network deployment, operations, and lifecycle. Engineered in Gurgaon, deployed across India, EMEA, and North America." },
      { name: "author", content: "Avendum Technologies" },
      { name: "keywords", content: "Avendum, telecom AI, network automation, AI operations, NOC automation, 5G, RAN, edge intelligence, software development, UX UI design, product consulting" },
      { property: "og:title", content: "Avendum – A Technology Company" },
      { property: "og:description", content: "Enterprise-grade AI platforms automating telecom networks end-to-end." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Avendum Technologies" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "shortcut icon", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$f.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ParticleNetwork, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteNav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-24 min-h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
const $$splitComponentImporter$e = () => import("./services-CKX11vUY.mjs");
const Route$e = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "What We Build - Avendum Technologies"
    }, {
      name: "description",
      content: "Platform engineering, custom dashboards, API integrations, and telecom AI automation capabilities."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./insights-hb6pvHHP.mjs");
const Route$d = createFileRoute("/insights")({
  head: () => ({
    meta: [{
      title: "Insights - Avendum Technologies"
    }, {
      name: "description",
      content: "Field notes on telecom AI, autonomous networks, and the engineering patterns behind carrier-grade software."
    }, {
      property: "og:title",
      content: "Insights - Avendum Technologies"
    }, {
      property: "og:description",
      content: "Field notes on telecom AI from Avendum."
    }, {
      property: "og:url",
      content: "/insights"
    }],
    links: [{
      rel: "canonical",
      href: "/insights"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./demo-C5TT_MGq.mjs");
const demoSearchSchema = objectType({
  product: stringType().optional()
});
const Route$c = createFileRoute("/demo")({
  validateSearch: (search) => demoSearchSchema.parse(search),
  head: () => ({
    meta: [{
      title: "Book a Demo - Avendum Technologies"
    }, {
      name: "description",
      content: "Schedule an interactive walk-through of NETRA, NEXUS, or NETIQ, mapped directly to your network's operational challenges."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./contact-CMQOlRg3.mjs");
const contactSearchSchema = objectType({
  role: stringType().optional(),
  interest: stringType().optional(),
  demo: stringType().optional()
});
const Route$b = createFileRoute("/contact")({
  validateSearch: (search) => contactSearchSchema.parse(search),
  head: () => ({
    meta: [{
      title: "Contact & Request Demo - Avendum Technologies"
    }, {
      name: "description",
      content: "Let's talk about your network. Request a demo, ask about AMC, or just reach out - our team responds within 2 business days."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./careers-dqlnb2Ei.mjs");
const Route$a = createFileRoute("/careers")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./index--mO-yV9T.mjs");
const Route$9 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Avendum Technologies — AI Platforms for Telecom Network Automation"
    }, {
      name: "description",
      content: "Purpose-built AI platforms that automate microwave deployment planning, 5G IP provisioning, and RAN network auditing — engineered for the scale and complexity of India's telecom operators."
    }, {
      property: "og:title",
      content: "Avendum Technologies — AI Platforms for Telecom Network Automation"
    }, {
      property: "og:description",
      content: "Purpose-built AI platforms that automate microwave deployment planning, 5G IP provisioning, and RAN network auditing."
    }, {
      property: "og:url",
      content: "/"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./projects.index-WL9Gt4Gl.mjs");
const Route$8 = createFileRoute("/projects/")({
  head: () => ({
    meta: [{
      title: "Projects - Avendum Technologies"
    }, {
      name: "description",
      content: "Selected work: autonomous NOC, multi-vendor transport orchestration, smart-city edge intelligence, and carrier-grade data platforms."
    }, {
      property: "og:title",
      content: "Projects - Avendum Technologies"
    }, {
      property: "og:description",
      content: "Selected telecom AI work from Avendum Technologies."
    }, {
      property: "og:url",
      content: "/projects"
    }],
    links: [{
      rel: "canonical",
      href: "/projects"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./company.index-YXb3uPoF.mjs");
const Route$7 = createFileRoute("/company/")({
  head: () => ({
    meta: [{
      title: "About Us - Avendum Technologies"
    }, {
      name: "description",
      content: "Built by telecom practitioners, for telecom teams. Avendum Technologies develops mission-critical enterprise platforms for the telecommunications industry."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./careers.index-C62N3osu.mjs");
const careersSearchSchema = objectType({
  job: stringType().optional()
});
const Route$6 = createFileRoute("/careers/")({
  validateSearch: (search) => careersSearchSchema.parse(search),
  head: () => ({
    meta: [{
      title: "Careers & Open Roles - Avendum Technologies"
    }, {
      name: "description",
      content: "Join our elite engineering and product squads in Gurgaon building high-performance enterprise platforms and stream-processing engines."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const project1 = "/assets/project-1-DvQesRJk.jpg";
const project2 = "/assets/project-2-sDuyGLt_.jpg";
const project3 = "/assets/project-3-MXJEPBPd.jpg";
const project4 = "/assets/project-4-CXq_w1I1.jpg";
const projectsData = [
  {
    slug: "sentinel-noc",
    title: "Sentinel — Autonomous NOC for a Tier-1 Operator",
    category: "AI Operations",
    client: "Tier-1 South Asia Operator",
    year: "2024",
    duration: "9 months",
    image: "project-1",
    summary: "An AI-driven Network Operations Center that reduced mean-time-to-resolution from hours to seconds across 42,000 sites.",
    challenge: "Manual triage was buckling under 4M+ daily alarms. The operator needed an autonomous loop that could correlate, diagnose, and remediate without human bottleneck — while keeping carrier-grade auditability.",
    approach: [
      "Streamed multi-vendor telemetry through a Kafka + Flink pipeline normalized into a topology-aware graph.",
      "Trained anomaly-detection ensembles on 18 months of historic events with explainable scoring.",
      "Closed the loop via policy-driven runbooks executed through a secure orchestration plane.",
      "Shipped a live operations canvas with NL query, replay timeline, and SRE-grade audit trail."
    ],
    outcome: [
      {
        label: "MTTR reduction",
        value: "96%"
      },
      {
        label: "Auto-remediated incidents",
        value: "73%"
      },
      {
        label: "Alarm noise cut",
        value: "11×"
      },
      {
        label: "Sites onboarded",
        value: "42K"
      }
    ],
    stack: [
      "Kafka",
      "Flink",
      "PyTorch",
      "Neo4j",
      "Kubernetes",
      "Grafana"
    ]
  },
  {
    slug: "fiberpath-orchestrator",
    title: "FiberPath — Multi-vendor Transport Orchestrator",
    category: "Network Deployment",
    client: "European Neutral Host",
    year: "2024",
    duration: "12 months",
    image: "project-2",
    summary: "Zero-touch provisioning across 6 transport vendors, collapsing 14-day deployments into 38-minute rollouts.",
    challenge: "Each vendor shipped its own EMS, CLI, and YANG dialects. Field teams stitched configs by hand — slow, error-prone, and impossible to audit at scale.",
    approach: [
      "Built a vendor-agnostic intent model that compiles down to per-device NETCONF / gNMI payloads.",
      "Introduced declarative golden configs with drift detection and self-healing reconciliation.",
      "Wove a change-management workflow tied to CAB approvals, blast-radius checks, and instant rollback."
    ],
    outcome: [
      {
        label: "Deployment time",
        value: "38 min"
      },
      {
        label: "Config errors",
        value: "−98%"
      },
      {
        label: "Vendors unified",
        value: "6"
      },
      {
        label: "Sites/quarter",
        value: "3,400"
      }
    ],
    stack: [
      "Go",
      "NETCONF",
      "gNMI",
      "Temporal",
      "Terraform",
      "Postgres"
    ]
  },
  {
    slug: "atlas-edge",
    title: "Atlas — Smart City Edge Intelligence",
    category: "Edge & IoT",
    client: "Metro Smart-City Authority",
    year: "2023",
    duration: "7 months",
    image: "project-3",
    summary: "A real-time edge mesh ingesting 150M+ sensor events daily across traffic, energy, and public safety.",
    challenge: "Pilot dashboards collapsed at city scale. The authority needed a federated edge runtime that worked under intermittent connectivity, with privacy guarantees baked in.",
    approach: [
      "Deployed a lightweight WASM runtime on 9,200 edge nodes with over-the-air policy updates.",
      "Federated learning kept raw PII local while sharing model gradients with the central control plane.",
      "Built a live ‘city twin’ canvas with replay, what-if simulation, and incident-grade alerts."
    ],
    outcome: [
      {
        label: "Events/day",
        value: "150M+"
      },
      {
        label: "Edge nodes",
        value: "9,200"
      },
      {
        label: "P95 latency",
        value: "180ms"
      },
      {
        label: "Energy saved",
        value: "22%"
      }
    ],
    stack: [
      "Rust",
      "WASM",
      "MQTT",
      "TimescaleDB",
      "TensorFlow Lite"
    ]
  },
  {
    slug: "vault-core",
    title: "VaultCore — Carrier-grade Data Platform",
    category: "Data & Infrastructure",
    client: "North American MSO",
    year: "2023",
    duration: "10 months",
    image: "project-4",
    summary: "Replaced a 7-year-old data warehouse with a lakehouse that powers billing, churn, and capacity planning in real-time.",
    challenge: "Nightly batch jobs ran 9 hours, blocking finance, capacity, and customer-experience teams from same-day insight.",
    approach: [
      "Migrated to an open lakehouse on object storage with Iceberg tables and column-level lineage.",
      "Introduced streaming CDC from 38 source systems with schema-evolution guardrails.",
      "Rolled out a semantic layer so analysts query in business language, not SQL ceremony."
    ],
    outcome: [
      {
        label: "Data freshness",
        value: "<2 min"
      },
      {
        label: "Compute cost",
        value: "−61%"
      },
      {
        label: "Source systems",
        value: "38"
      },
      {
        label: "Queries/day",
        value: "1.2M"
      }
    ],
    stack: [
      "Iceberg",
      "Spark",
      "dbt",
      "Trino",
      "Airflow",
      "S3"
    ]
  }
];
const imageMap = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
  "project-4": project4
};
const projects = projectsData.map((p) => ({
  ...p,
  image: imageMap[p.image] || project1
}));
const getProject = (slug) => projects.find((p) => p.slug === slug);
const $$splitComponentImporter$5 = () => import("./projects._slug-CI2pbuMs.mjs");
const $$splitNotFoundComponentImporter = () => import("./projects._slug-CBWzB-Ma.mjs");
const Route$5 = createFileRoute("/projects/$slug")({
  loader: ({
    params
  }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return {
      project
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.project.title ?? "Project"} - Avendum`
    }, {
      name: "description",
      content: loaderData?.project.summary ?? ""
    }, {
      property: "og:title",
      content: loaderData?.project.title ?? ""
    }, {
      property: "og:description",
      content: loaderData?.project.summary ?? ""
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:image",
      content: loaderData?.project.image ?? ""
    }],
    links: loaderData ? [{
      rel: "canonical",
      href: `/projects/${loaderData.project.slug}`
    }] : []
  }),
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./products.nexus-Bk-cRl10.mjs");
const Route$4 = createFileRoute("/products/nexus")({
  head: () => ({
    meta: [{
      title: "NEXUS - IP Provisioning Automation | Avendum"
    }, {
      name: "description",
      content: "NEXUS is an enterprise IP provisioning automation platform currently undergoing validation."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./products.netra-BVnM6hQ-.mjs");
const Route$3 = createFileRoute("/products/netra")({
  head: () => ({
    meta: [{
      title: "NETRA - Network Planning & Deployment Automation | Avendum"
    }, {
      name: "description",
      content: "NETRA replaces fragmented Excel-based microwave planning with a centralized, role-aware platform - tracking every plan across its complete lifecycle."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./products.netiq-DsZFMnlS.mjs");
const Route$2 = createFileRoute("/products/netiq")({
  head: () => ({
    meta: [{
      title: "NETIQ - Network Intelligence Platform | Avendum"
    }, {
      name: "description",
      content: "NETIQ is an enterprise-wide network intelligence platform. It provides deep visibility, audit, inventory validation, and automation across multi-vendor networks."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./company.partner-XkOvaoUX.mjs");
const Route$1 = createFileRoute("/company/partner")({
  head: () => ({
    meta: [{
      title: "Partner with Us - Avendum Technologies"
    }, {
      name: "description",
      content: "Partner with Avendum to extend the reach of our platforms across the network operations ecosystem. Models for SIs, OEMs, and Managed Service partners."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./careers.apply-Bx8pKvl7.mjs");
const applySearchSchema = objectType({
  role: stringType().optional()
});
const Route = createFileRoute("/careers/apply")({
  validateSearch: (search) => applySearchSchema.parse(search),
  head: () => ({
    meta: [{
      title: "Apply - Careers at Avendum Technologies"
    }, {
      name: "description",
      content: "Join our team and build the software that automates India's telecom network operations floor."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$e.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$f
});
const InsightsRoute = Route$d.update({
  id: "/insights",
  path: "/insights",
  getParentRoute: () => Route$f
});
const DemoRoute = Route$c.update({
  id: "/demo",
  path: "/demo",
  getParentRoute: () => Route$f
});
const ContactRoute = Route$b.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$f
});
const CareersRoute = Route$a.update({
  id: "/careers",
  path: "/careers",
  getParentRoute: () => Route$f
});
const IndexRoute = Route$9.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const ProjectsIndexRoute = Route$8.update({
  id: "/projects/",
  path: "/projects/",
  getParentRoute: () => Route$f
});
const CompanyIndexRoute = Route$7.update({
  id: "/company/",
  path: "/company/",
  getParentRoute: () => Route$f
});
const CareersIndexRoute = Route$6.update({
  id: "/",
  path: "/",
  getParentRoute: () => CareersRoute
});
const ProjectsSlugRoute = Route$5.update({
  id: "/projects/$slug",
  path: "/projects/$slug",
  getParentRoute: () => Route$f
});
const ProductsNexusRoute = Route$4.update({
  id: "/products/nexus",
  path: "/products/nexus",
  getParentRoute: () => Route$f
});
const ProductsNetraRoute = Route$3.update({
  id: "/products/netra",
  path: "/products/netra",
  getParentRoute: () => Route$f
});
const ProductsNetiqRoute = Route$2.update({
  id: "/products/netiq",
  path: "/products/netiq",
  getParentRoute: () => Route$f
});
const CompanyPartnerRoute = Route$1.update({
  id: "/company/partner",
  path: "/company/partner",
  getParentRoute: () => Route$f
});
const CareersApplyRoute = Route.update({
  id: "/apply",
  path: "/apply",
  getParentRoute: () => CareersRoute
});
const CareersRouteChildren = {
  CareersApplyRoute,
  CareersIndexRoute
};
const CareersRouteWithChildren = CareersRoute._addFileChildren(CareersRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  CareersRoute: CareersRouteWithChildren,
  ContactRoute,
  DemoRoute,
  InsightsRoute,
  ServicesRoute,
  CompanyPartnerRoute,
  ProductsNetiqRoute,
  ProductsNetraRoute,
  ProductsNexusRoute,
  ProjectsSlugRoute,
  CompanyIndexRoute,
  ProjectsIndexRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  BrandButton as B,
  Route$c as R,
  Route$b as a,
  Route$6 as b,
  Route$5 as c,
  Route as d,
  cn as e,
  projects as p,
  router as r
};
