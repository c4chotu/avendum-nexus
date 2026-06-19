import { createFileRoute, Link } from "@tanstack/react-router";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { motion } from "framer-motion";
import { Cpu, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export const Route = createFileRoute("/products/nexus")({
  head: () => ({
    meta: [
      { title: "NEXUS - IP Provisioning Automation | Avendum" },
      {
        name: "description",
        content:
          "NEXUS is an enterprise IP provisioning automation platform currently undergoing validation.",
      },
    ],
  }),
  component: NexusPage,
});

function NexusPage() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center overflow-hidden px-6 py-16">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: "12s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-2xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="text-center p-8 sm:p-12 border border-border/40 bg-card/45 backdrop-blur-md rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />
            
            <div className="mx-auto h-16 w-16 rounded-2xl bg-[#0F9F6E]/10 text-[#0F9F6E] flex items-center justify-center mb-8 border border-[#0F9F6E]/20">
              <Cpu className="h-8 w-8 animate-pulse" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4">
              <Sparkles className="h-3 w-3" /> System Validation
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-tight text-foreground">
              NEXUS IP Provisioning
            </h1>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our automated IP provisioning automation module is currently undergoing extensive enterprise security and performance validation. Access to the console is limited to verified sandbox instances.
            </p>

            <div className="mt-8 p-4 rounded-xl border border-border/40 bg-foreground/5 flex items-start gap-3 text-left">
              <ShieldCheck className="h-5 w-5 text-[#0F9F6E] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-semibold text-foreground">Secure Deployment Sandbox</h4>
                <p className="text-[11px] text-muted-foreground mt-0.5 leading-relaxed">
                  During this validation phase, active IP allocation workflows and cygnet-to-order-management integrations are simulated within local, isolated private cloud network testbeds.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/demo" search={{ product: "nexus" }}>
                <BrandButton className="w-full sm:w-auto">
                  Request Sandboxed Demo <ArrowRight className="ml-1 h-4 w-4" />
                </BrandButton>
              </Link>
              <Link to="/">
                <BrandButton variant="secondary" className="w-full sm:w-auto">
                  Return to Home
                </BrandButton>
              </Link>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
