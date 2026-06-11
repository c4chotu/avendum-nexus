import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock } from "lucide-react";
import { GlassCard } from "@/components/GlassCard";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Avendum Technologies" },
      {
        name: "description",
        content:
          "Field notes on telecom AI, autonomous networks, and the engineering patterns behind carrier-grade software.",
      },
      { property: "og:title", content: "Insights — Avendum Technologies" },
      { property: "og:description", content: "Field notes on telecom AI from Avendum." },
      { property: "og:url", content: "/insights" },
    ],
    links: [{ rel: "canonical", href: "/insights" }],
  }),
  component: InsightsPage,
});

const posts = [
  {
    slug: "closed-loop-noc",
    tag: "AI Operations",
    title: "Closed-loop NOC: the architecture that finally killed our alert fatigue",
    excerpt:
      "Why correlation alone isn't enough — and how policy-driven remediation reshapes the on-call rotation.",
    read: "8 min read",
    date: "Mar 2026",
  },
  {
    slug: "multi-vendor-intent",
    tag: "Network Deployment",
    title: "Designing intent models that survive six transport vendors",
    excerpt:
      "A pragmatic schema for vendor-agnostic intent, with rollback semantics that field teams actually trust.",
    read: "11 min read",
    date: "Feb 2026",
  },
  {
    slug: "edge-wasm-runtime",
    tag: "Edge & IoT",
    title: "Why we picked a WASM runtime for 9,200 edge nodes",
    excerpt:
      "Footprint, OTA updates, and the unexpected wins around supply-chain provenance at the network edge.",
    read: "6 min read",
    date: "Jan 2026",
  },
  {
    slug: "lakehouse-cdc",
    tag: "Data Platforms",
    title: "Streaming CDC into a lakehouse without the 3am pager",
    excerpt:
      "Schema-evolution guardrails, watermark management, and the operational tax of \"real-time\".",
    read: "9 min read",
    date: "Dec 2025",
  },
  {
    slug: "federated-learning-telco",
    tag: "Privacy & ML",
    title: "Federated learning in telecom: notes from a city-scale rollout",
    excerpt:
      "Why differential privacy budgets matter more than your model architecture at the edge.",
    read: "7 min read",
    date: "Nov 2025",
  },
  {
    slug: "platform-team-pods",
    tag: "Engineering Org",
    title: "Embedded pods: the operating model behind our delivery velocity",
    excerpt:
      "How we structure senior pods that ship production code in week one — and the trade-offs nobody talks about.",
    read: "5 min read",
    date: "Oct 2025",
  },
];

function InsightsPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Insights · Field notes</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-semibold leading-tight">
          Notes from the wire — <span className="text-gradient">telecom AI in production</span>.
        </h1>
        <p className="mt-5 text-muted-foreground">
          Honest write-ups from our engineering teams: what worked, what we threw away, and what we
          wish someone had told us before week one.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p) => (
          <GlassCard key={p.slug} gradientBorder className="group cursor-pointer">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary">{p.tag}</span>
            <h2 className="mt-3 font-display text-xl font-semibold leading-snug group-hover:text-primary transition-colors">
              {p.title}
            </h2>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
            <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-3 w-3" /> {p.read}
              </span>
              <span>{p.date}</span>
            </div>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center gap-1 text-sm text-primary"
            >
              Request the full essay <ArrowUpRight className="h-4 w-4" />
            </Link>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
