import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, TowerControl as Tower, Signal, Search, Building, Handshake } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { BrandButton } from "./BrandButton";
import logo from "@/assets/site/logo.svg";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const productsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const companyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled ? "py-2" : "py-4"
        }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-3 transition-all duration-300 ${scrolled ? "glass-nav shadow-lg" : "bg-transparent"
            }`}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src={logo} alt="Avendum Technologies" className="h-8 w-auto  transition-transform group-hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors cursor-pointer">
                Products <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180 text-primary" : ""}`} />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 glass rounded-2xl p-2 shadow-xl border border-border animate-fade-up">
                  <span className="block px-3 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Our Platforms</span>
                  <Link
                    to="/products/netiq"
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-foreground/5 transition-colors text-left"
                    onClick={() => setProductsOpen(false)}
                  >
                    <span className="h-2 w-2 rounded-full bg-[#7C3AED] shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">NETIQ</div>
                      <div className="text-[11px] text-muted-foreground">Network Intelligence Platform</div>
                    </div>
                  </Link>
                  <Link
                    to="/products/netra"
                    className="flex items-center gap-3 p-2 rounded-xl hover:bg-foreground/5 transition-colors text-left"
                    onClick={() => setProductsOpen(false)}
                  >
                    <span className="h-2 w-2 rounded-full bg-[#1A6FD4] shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">NETRA</div>
                      <div className="text-[11px] text-muted-foreground">Network Planning & Deployment</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Services Link */}
            <Link
              to="/services"
              className="px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors"
              activeProps={{ className: "!text-primary font-medium" }}
            >
              What We Build
            </Link>

            {/* Scroll Anchors */}
            {/* <Link
              to="/"
              hash="usecases"
              className="px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors"
            >
              Use Cases
            </Link> */}
            <Link
              to="/"
              hash="amc"
              className="px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors"
            >
              AMC & Support
            </Link>

            {/* Company Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleCompanyMouseEnter}
              onMouseLeave={handleCompanyMouseLeave}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors cursor-pointer">
                About <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${companyOpen ? "rotate-180 text-primary" : ""}`} />
              </button>
              {companyOpen && (
                <div className="absolute top-full left-0 mt-1 w-60 glass rounded-2xl p-2 shadow-xl border border-border animate-fade-up">
                  <Link
                    to="/company"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-foreground/5 transition-colors text-left"
                    onClick={() => setCompanyOpen(false)}
                  >
                    <Building className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">About Us</div>
                      <div className="text-[11px] text-muted-foreground">Our story & philosophy</div>
                    </div>
                  </Link>
                  <Link
                    to="/company/partner"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-foreground/5 transition-colors text-left"
                    onClick={() => setCompanyOpen(false)}
                  >
                    <Handshake className="h-4 w-4 text-muted-foreground shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">Partner with Us</div>
                      <div className="text-[11px] text-muted-foreground">SI, OEM & MS programmes</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/careers"
              className="px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors"
              activeProps={{ className: "!text-primary" }}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-sm text-foreground/75 hover:text-foreground transition-colors"
              activeProps={{ className: "!text-primary" }}
            >
              Contact
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link to="/demo" className="hidden sm:block">
              <BrandButton size="sm">Request Demo</BrandButton>
            </Link>
            <button
              onClick={() => setOpen((s) => !s)}
              className="md:hidden rounded-full border border-border p-2 cursor-pointer"
              aria-label="Menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl p-4 animate-fade-up max-h-[80vh] overflow-y-auto">
            <nav className="flex flex-col gap-1">
              <span className="px-3 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Products</span>
              <Link
                to="/products/netiq"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-foreground/5 rounded-xl"
              >
                <span className="h-2 w-2 rounded-full bg-[#7C3AED]" />
                <span>NETIQ (Network Intelligence)</span>
              </Link>
              <Link
                to="/products/netra"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-foreground/5 rounded-xl"
              >
                <span className="h-2 w-2 rounded-full bg-[#1A6FD4]" />
                <span>NETRA (Network Planning)</span>
              </Link>

              <div className="my-2 border-t border-border/40" />
              <span className="px-3 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">Navigation</span>
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl"
                activeProps={{ className: "!text-primary" }}
              >
                What We Build
              </Link>
              {/* <Link
                to="/"
                hash="usecases"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl"
              >
                Use Cases
              </Link> */}
              <Link
                to="/"
                hash="amc"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl"
              >
                AMC & Support
              </Link>

              <div className="my-2 border-t border-border/40" />
              <span className="px-3 py-1.5 text-[10px] font-semibold text-muted-foreground uppercase tracking-widest">About</span>
              <Link
                to="/company"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl"
                activeProps={{ className: "!text-primary" }}
              >
                About Us
              </Link>
              <Link
                to="/company/partner"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl"
              >
                Partner with Us
              </Link>
              <Link
                to="/careers"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl"
              >
                Careers
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-foreground/80 hover:text-primary rounded-xl"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

