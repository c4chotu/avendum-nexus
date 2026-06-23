import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as cn } from "./router-BUFV2UJb.mjs";
function GlassCard({ className, children, hoverGlow = true, gradientBorder = false, ...rest }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "relative glass p-6 transition-all duration-300",
        hoverGlow && "hover:-translate-y-1 hover:[box-shadow:0_24px_60px_-20px_var(--glow)] hover:border-primary/40",
        gradientBorder && "before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent",
        className
      ),
      ...rest,
      children
    }
  );
}
export {
  GlassCard as G
};
