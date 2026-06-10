import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-[color-mix(in_oklab,var(--primary)_50%,var(--accent))]">
              <span className="font-display text-sm font-bold text-white">A</span>
            </span>
            <span className="font-display text-lg font-semibold">avendum<span className="text-primary">.</span></span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            AI-native platforms that automate telecom network deployment, operations,
            and lifecycle — engineered in Gurgaon, deployed globally.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="rounded-full border border-border p-2 text-foreground/70 hover:text-primary hover:border-primary transition-all"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-foreground/60 mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/company" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/careers" className="hover:text-primary">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-foreground/60 mb-4">Offices</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Gurgaon · India HQ</li>
            <li>Toronto · Canada</li>
            <li>London · United Kingdom</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Avendum Technologies Private Limited. All rights reserved.</p>
          <p>Engineering telecom intelligence since 2012.</p>
        </div>
      </div>
    </footer>
  );
}
