import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, MapPin, Phone, Instagram } from "lucide-react";
import logo from "@/assets/site/logo.svg";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-5">
        {/* Info Column */}
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img src={logo} alt="avendum." className="h-8 w-auto dark:invert" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Enterprise telecom intelligence platforms — MIDS · NEXUS · NETIQ — automating network planning, provisioning and audit at scale.
          </p>
          <div className="mt-5 space-y-2 text-xs text-muted-foreground">
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
              <span>Unit No. 205, Tower B, Unitech Cyber Park,<br />Sector 39, Gurgaon – 122 002, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary shrink-0" />
              <a href="tel:+919899810118" className="hover:text-primary transition-colors">+91 98998 10118</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <a href="mailto:info@avendumtech.com" className="hover:text-primary transition-colors">info@avendumtech.com</a>
            </div>
          </div>
          <div className="mt-5 flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/avendumtech/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border p-2 text-foreground/70 hover:text-[#0A66C2] hover:border-[#0A66C2] transition-all"
              title="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="rounded-full border border-border p-2 text-foreground/70 hover:text-[#E1306C] hover:border-[#E1306C] transition-all"
              title="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="mailto:info@avendumtech.com"
              className="rounded-full border border-border p-2 text-foreground/70 hover:text-primary hover:border-primary transition-all"
              title="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Products */}
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-foreground/60 mb-4">Products</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/products/mids" className="hover:text-primary transition-colors">MIDS</Link></li>
            <li><Link to="/products/nexus" className="hover:text-primary transition-colors">NEXUS</Link></li>
            <li><Link to="/products/netiq" className="hover:text-primary transition-colors">NETIQ</Link></li>
            <li><Link to="/" hash="usecases" className="hover:text-primary transition-colors">Use Cases</Link></li>
          </ul>
        </div>

        {/* Column 3: Support */}
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-foreground/60 mb-4">Support</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/" hash="amc" className="hover:text-primary transition-colors">AMC Programmes</Link></li>
            <li><Link to="/" hash="amc" className="hover:text-primary transition-colors">Alliance Support</Link></li>
            <li><Link to="/" hash="amc" className="hover:text-primary transition-colors">Managed Operations</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Raise a Ticket</Link></li>
          </ul>
        </div>

        {/* Column 4: Company */}
        <div>
          <h4 className="font-display text-sm tracking-widest uppercase text-foreground/60 mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/company" className="hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/company" hash="philosophy" className="hover:text-primary transition-colors">Our Philosophy</Link></li>
            <li><Link to="/company/partner" className="hover:text-primary transition-colors">Partner with Us</Link></li>
            <li><Link to="/careers" className="hover:text-primary transition-colors">Careers</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Avendum Technologies Private Limited. All rights reserved.</p>
          <div className="flex gap-2">
            <span className="rounded bg-foreground/5 border border-border/40 px-2 py-0.5 text-[10px] font-semibold">Enterprise Grade</span>
            <span className="rounded bg-foreground/5 border border-border/40 px-2 py-0.5 text-[10px] font-semibold">India Built</span>
            <span className="rounded bg-foreground/5 border border-border/40 px-2 py-0.5 text-[10px] font-semibold">Telecom Specialized</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
