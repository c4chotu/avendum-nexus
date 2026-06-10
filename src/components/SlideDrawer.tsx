import { X } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  open: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  width?: string;
}

export function SlideDrawer({ open, onClose, title, subtitle, children, width = "max-w-xl" }: Props) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-sm animate-fade-up"
        onClick={onClose}
      />
      <aside
        className={cn(
          "absolute right-0 top-0 h-full w-full bg-[var(--surface)] border-l border-border shadow-2xl overflow-y-auto animate-drawer-in",
          width,
        )}
      >
        <div className="sticky top-0 z-10 flex items-start justify-between gap-6 p-6 border-b border-border bg-[var(--surface)]/85 backdrop-blur">
          <div>
            {subtitle && <p className="text-xs uppercase tracking-[0.25em] text-primary mb-2">{subtitle}</p>}
            {title && <h3 className="text-2xl font-semibold">{title}</h3>}
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </aside>
    </div>
  );
}
