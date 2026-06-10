import { cn } from "@/lib/utils";
import { forwardRef, useId, useState, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";

interface FieldProps {
  label: string;
  error?: string;
  className?: string;
}

export const FloatingInput = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & FieldProps
>(({ label, error, className, id, onBlur, onFocus, ...rest }, ref) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [focus, setFocus] = useState(false);
  const filled = (rest.value as string | undefined)?.length! > 0 || focus;

  return (
    <div className={cn("relative", className)}>
      <input
        id={inputId}
        ref={ref}
        {...rest}
        onFocus={(e) => { setFocus(true); onFocus?.(e); }}
        onBlur={(e) => { setFocus(false); onBlur?.(e); }}
        placeholder=" "
        className={cn(
          "peer w-full bg-transparent border rounded-xl px-4 pt-5 pb-2 text-sm text-foreground outline-none transition-all",
          "border-border focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_18%,transparent)]",
          error && "border-destructive focus:border-destructive focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--destructive)_22%,transparent)]",
        )}
      />
      <label
        htmlFor={inputId}
        className={cn(
          "pointer-events-none absolute left-4 top-3.5 text-sm text-muted-foreground transition-all",
          (filled) && "top-1.5 text-[10px] tracking-wider uppercase text-primary",
          error && "text-destructive",
        )}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-destructive pl-1">{error}</p>}
    </div>
  );
});
FloatingInput.displayName = "FloatingInput";

export const FloatingTextarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & FieldProps
>(({ label, error, className, id, onBlur, onFocus, ...rest }, ref) => {
  const autoId = useId();
  const inputId = id ?? autoId;
  const [focus, setFocus] = useState(false);
  const filled = (rest.value as string | undefined)?.length! > 0 || focus;
  return (
    <div className={cn("relative", className)}>
      <textarea
        id={inputId}
        ref={ref}
        {...rest}
        onFocus={(e) => { setFocus(true); onFocus?.(e); }}
        onBlur={(e) => { setFocus(false); onBlur?.(e); }}
        placeholder=" "
        rows={rest.rows ?? 5}
        className={cn(
          "peer w-full bg-transparent border rounded-xl px-4 pt-6 pb-2 text-sm text-foreground outline-none transition-all resize-none",
          "border-border focus:border-primary focus:shadow-[0_0_0_3px_color-mix(in_oklab,var(--primary)_18%,transparent)]",
          error && "border-destructive focus:border-destructive",
        )}
      />
      <label
        htmlFor={inputId}
        className={cn(
          "pointer-events-none absolute left-4 top-3.5 text-sm text-muted-foreground transition-all",
          filled && "top-1.5 text-[10px] tracking-wider uppercase text-primary",
          error && "text-destructive",
        )}
      >
        {label}
      </label>
      {error && <p className="mt-1 text-xs text-destructive pl-1">{error}</p>}
    </div>
  );
});
FloatingTextarea.displayName = "FloatingTextarea";
