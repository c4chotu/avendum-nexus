import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as cn } from "./router-BUFV2UJb.mjs";
import { X } from "../_libs/lucide-react.mjs";
const FloatingInput = reactExports.forwardRef(({ label, error, className, id, onBlur, onFocus, ...rest }, ref) => {
  const autoId = reactExports.useId();
  const inputId = id ?? autoId;
  const [focus, setFocus] = reactExports.useState(false);
  const filled = rest.value?.length > 0 || focus;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id: inputId,
        ref,
        ...rest,
        onFocus: (e) => {
          setFocus(true);
          onFocus?.(e);
        },
        onBlur: (e) => {
          setFocus(false);
          onBlur?.(e);
        },
        placeholder: " ",
        className: cn(
          "peer w-full bg-transparent border rounded-xl px-4 pt-5 pb-2 text-sm text-foreground outline-none transition-all",
          "border-border focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_18%,transparent)]",
          error && "border-destructive focus:border-destructive focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--destructive)_22%,transparent)]"
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        htmlFor: inputId,
        className: cn(
          "pointer-events-none absolute left-4 top-3.5 text-sm text-muted-foreground transition-all",
          filled && "top-1.5 text-[10px] tracking-wider uppercase text-primary",
          error && "text-destructive"
        ),
        children: label
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive pl-1", children: error })
  ] });
});
FloatingInput.displayName = "FloatingInput";
const FloatingTextarea = reactExports.forwardRef(({ label, error, className, id, onBlur, onFocus, ...rest }, ref) => {
  const autoId = reactExports.useId();
  const inputId = id ?? autoId;
  const [focus, setFocus] = reactExports.useState(false);
  const filled = rest.value?.length > 0 || focus;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: cn("relative", className), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        id: inputId,
        ref,
        ...rest,
        onFocus: (e) => {
          setFocus(true);
          onFocus?.(e);
        },
        onBlur: (e) => {
          setFocus(false);
          onBlur?.(e);
        },
        placeholder: " ",
        rows: rest.rows ?? 5,
        className: cn(
          "peer w-full bg-transparent border rounded-xl px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-all resize-none",
          "border-border focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_18%,transparent)]",
          error && "border-destructive focus:border-destructive"
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        htmlFor: inputId,
        className: cn(
          "pointer-events-none absolute left-4 top-3.5 text-sm text-muted-foreground transition-all",
          filled && "top-1.5 text-[10px] tracking-wider uppercase text-primary",
          error && "text-destructive"
        ),
        children: label
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-destructive pl-1", children: error })
  ] });
});
FloatingTextarea.displayName = "FloatingTextarea";
function SlideDrawer({ open, onClose, title, subtitle, children, width = "max-w-xl" }) {
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  if (!open) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 bg-background/70 backdrop-blur-sm animate-fade-up",
        onClick: onClose
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        className: cn(
          "absolute right-0 top-0 h-full w-full bg-[var(--surface)] border-l border-border shadow-2xl overflow-y-auto animate-drawer-in",
          width
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sticky top-0 z-10 flex items-start justify-between gap-6 p-6 border-b border-border bg-[var(--surface)]/85 backdrop-blur", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-primary mb-2", children: subtitle }),
              title && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-semibold", children: title })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: onClose,
                className: "rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors",
                "aria-label": "Close",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6", children })
        ]
      }
    )
  ] });
}
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const validateEmail = (v) => EMAIL_RE.test(v.trim());
const validateName = (v) => v.trim().length >= 2;
async function sendEmail(payload) {
  await new Promise((r) => setTimeout(r, 900));
  console.info("[Avendum] EmailJS env not configured — simulated submission:", payload);
  return { ok: true };
}
export {
  FloatingInput as F,
  SlideDrawer as S,
  FloatingTextarea as a,
  validateEmail as b,
  sendEmail as s,
  validateName as v
};
