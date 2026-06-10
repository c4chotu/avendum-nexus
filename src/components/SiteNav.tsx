import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { BrandButton } from "./BrandButton";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/company", label: "Company" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-lg" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-[color-mix(in_oklab,var(--primary)_50%,var(--accent))] shadow-[0_8px_30px_-8px_var(--glow)] group-hover:scale-110 transition-transform">
              <span className="absolute inset-0 rounded-lg ring-1 ring-white/20" />
              <span className="font-display text-sm font-bold text-white">A</span>
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">
              avendum<span className="text-primary">.</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors"
                activeProps={{ className: "!text-primary" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/contact" className="hidden sm:block">
              <BrandButton size="sm">Start a Project</BrandButton>
            </Link>
            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden rounded-full border border-border p-2"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 animate-fade-up">
            <nav className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm text-foreground/80 hover:text-primary"
                  activeProps={{ className: "!text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
