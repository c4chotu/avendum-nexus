import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Check } from "lucide-react";
import { getProject, projects, type Project } from "@/lib/projects";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.project.title ?? "Project"} - Avendum` },
      { name: "description", content: loaderData?.project.summary ?? "" },
      { property: "og:title", content: loaderData?.project.title ?? "" },
      { property: "og:description", content: loaderData?.project.summary ?? "" },
      { property: "og:type", content: "article" },
      { property: "og:image", content: loaderData?.project.image ?? "" },
    ],
    links: loaderData ? [{ rel: "canonical", href: `/projects/${loaderData.project.slug}` }] : [],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl py-32 text-center px-6">
      <h1 className="font-display text-3xl">Project not found</h1>
      <Link to="/projects" className="mt-6 inline-block text-primary hover:underline">
        ← Back to projects
      </Link>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <article>
      {/* HERO */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[420px] w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        </div>
        <div className="mx-auto max-w-5xl px-6 -mt-40 relative">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> All projects
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em]">
            <span className="rounded-full glass px-3 py-1 text-primary">{project.category}</span>
            <span className="text-muted-foreground">{project.client}</span>
            <span className="text-muted-foreground">· {project.year}</span>
            <span className="text-muted-foreground">· {project.duration}</span>
          </div>
          <h1 className="mt-5 font-display text-4xl sm:text-5xl font-semibold leading-tight">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl">{project.summary}</p>
        </div>
      </section>

      {/* OUTCOMES */}
      <section className="mx-auto max-w-7xl px-6 mt-16">
        <GlassCard gradientBorder hoverGlow={false} className="grid grid-cols-2 md:grid-cols-4 gap-y-6 p-8">
          {project.outcome.map((o) => (
            <div key={o.label}>
              <div className="font-display text-3xl sm:text-4xl font-semibold text-gradient">
                {o.value}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{o.label}</p>
            </div>
          ))}
        </GlassCard>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-5xl px-6 mt-20 grid lg:grid-cols-[1fr_280px] gap-12">
        <div className="space-y-12">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">The challenge</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">
              Where it started
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{project.challenge}</p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our approach</p>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-semibold">
              What we built
            </h2>
            <ul className="mt-5 space-y-3">
              {project.approach.map((a, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-border/60 bg-[var(--surface)]/40 p-4"
                >
                  <Check className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">{a}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 self-start">
          <GlassCard>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-[var(--surface-2)] px-3 py-1 text-xs"
                >
                  {s}
                </span>
              ))}
            </div>
          </GlassCard>
          <GlassCard>
            <p className="font-display text-lg font-semibold">Have a similar project?</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Talk to one of our engineering leads - usually within a business day.
            </p>
            <Link to="/contact" className="mt-4 inline-block">
              <BrandButton size="sm">Start a conversation</BrandButton>
            </Link>
          </GlassCard>
        </aside>
      </section>

      {/* NEXT */}
      <section className="mx-auto max-w-7xl px-6 mt-28">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">More work</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {others.map((p) => (
            <Link
              key={p.slug}
              to="/projects/$slug"
              params={{ slug: p.slug }}
              className="group block"
            >
              <GlassCard className="overflow-hidden p-0">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {p.category}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
                    Read <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
