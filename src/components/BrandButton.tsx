import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

const styles = cva(
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98] whitespace-nowrap",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground hover:scale-[1.03] hover:shadow-[0_18px_50px_-12px_var(--glow)]",
        secondary:
          "bg-transparent text-foreground border border-border hover:border-primary hover:text-primary hover:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_15%,transparent)]",
        ghost: "text-foreground/80 hover:text-foreground hover:bg-secondary",
        submit:
          "bg-gradient-to-r from-primary to-[color-mix(in_oklab,var(--primary)_60%,var(--accent))] text-primary-foreground hover:scale-[1.02] hover:shadow-[0_18px_50px_-12px_var(--glow)]",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

interface Props extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof styles> {
  children: ReactNode;
}

export function BrandButton({ className, variant, size, children, ...rest }: Props) {
  return (
    <button className={cn(styles({ variant, size }), className)} {...rest}>
      {children}
    </button>
  );
}
