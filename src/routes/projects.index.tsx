import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";
import { GlassCard } from "@/components/GlassCard";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects - Avendum Technologies" },
      {
        name: "description",
        content:
          "Selected work: autonomous NOC, multi-vendor transport orchestration, smart-city edge intelligence, and carrier-grade data platforms.",
      },
      { property: "og:title", content: "Projects - Avendum Technologies" },
      { property: "og:description", content: "Selected telecom AI work from Avendum Technologies." },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Featured projects</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Eleven years of <span className="text-gradient">shipping outcomes</span> for operators,
          neutral hosts, and smart cities.
        </h1>
        <p className="mt-5 text-muted-foreground">
          A small sample of platforms we&apos;ve built in production - from autonomous NOCs to
          edge-native city twins.
        </p>
      </div>

      <div className="mt-14 space-y-10">
        {projects.map((p, i) => (
          <Link
            key={p.slug}
            to="/projects/$slug"
            params={{ slug: p.slug }}
            className="group block"
          >
            <GlassCard className="overflow-hidden p-0">
              <div className={`grid lg:grid-cols-2 ${i % 2 ? "lg:[direction:rtl]" : ""}`}>
                <div className="relative aspect-[16/10] overflow-hidden lg:[direction:ltr]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full glass px-3 py-1 text-[10px] uppercase tracking-[0.25em]">
                    {p.category}
                  </span>
                </div>
                <div className="p-8 sm:p-10 flex flex-col justify-center lg:[direction:ltr]">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    <span>{p.client}</span>
                    <span className="h-1 w-1 rounded-full bg-primary" />
                    <span>{p.year}</span>
                  </div>
                  <h2 className="mt-4 font-display text-2xl sm:text-3xl font-semibold group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-muted-foreground">{p.summary}</p>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {p.outcome.slice(0, 2).map((o) => (
                      <div key={o.label} className="rounded-xl border border-border/60 p-3">
                        <div className="font-display text-2xl font-semibold text-gradient">
                          {o.value}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{o.label}</p>
                      </div>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-primary">
                    View case study <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
}
