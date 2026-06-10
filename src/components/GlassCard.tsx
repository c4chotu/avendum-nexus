import { cn } from "@/lib/utils";
import type { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverGlow?: boolean;
  gradientBorder?: boolean;
}

export function GlassCard({ className, children, hoverGlow = true, gradientBorder = false, ...rest }: Props) {
  return (
    <div
      className={cn(
        "relative glass p-6 transition-all duration-300",
        hoverGlow &&
          "hover:-translate-y-1 hover:[box-shadow:0_24px_60px_-20px_var(--glow)] hover:border-primary/40",
        gradientBorder &&
          "before:absolute before:inset-x-6 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-primary before:to-transparent",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
