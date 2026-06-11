import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  Search, MapPin, Target, Rocket, Handshake, Brain,
  LineChart, Globe, IndianRupee, GraduationCap, HeartPulse, Laptop,
  ArrowRight, Sparkles, Check, ChevronRight, Briefcase, HelpCircle,
  Clock, ShieldCheck, Users, Code, Activity, Server, Database,
  Code2, UserCheck, Play, ArrowUpRight, CheckCircle2, Terminal, X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/GlassCard";
import { BrandButton } from "@/components/BrandButton";
import { z } from "zod";

const careersSearchSchema = z.object({
  job: z.string().optional(),
});

export const Route = createFileRoute("/careers/")({
  validateSearch: (search) => careersSearchSchema.parse(search),
  head: () => ({
    meta: [
      { title: "Careers & Open Roles — Avendum Technologies" },
      {
        name: "description",
        content:
          "Join our elite engineering and product squads in Gurgaon building high-performance enterprise platforms and stream-processing engines.",
      },
    ],
  }),
  component: CareersPage,
});

interface Job {
  id: string;
  title: string;
  category: "engineering" | "product" | "telecom" | "support";
  categoryLabel: string;
  location: string;
  experience: string;
  tags: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: "senior-backend",
    title: "Senior Backend Engineer — Java / Spring Boot",
    category: "engineering",
    categoryLabel: "Engineering",
    location: "Gurgaon, India",
    experience: "3–6 years",
    tags: ["Java", "Spring Boot", "Apache Kafka", "REST APIs"],
    description: "Join our core backend engineering squad building high-concurrency network orchestration and configuration management engines. You will design resilient services that process and audit millions of network telemetry data points daily.",
    responsibilities: [
      "Design and scale high-concurrency Spring Boot microservices and REST APIs.",
      "Implement reliable event-driven messaging pipelines using Apache Kafka.",
      "Optimize complex PostgreSQL queries and database transactions for network audits.",
      "Ensure high test coverage, perform detailed code reviews, and guide junior developers."
    ],
    requirements: [
      "3+ years of professional experience building enterprise Java applications.",
      "Strong expertise in Spring Boot, Spring Data JPA, and Hibernate.",
      "Hands-on experience with Apache Kafka or similar message brokers.",
      "Solid understanding of relational databases (PostgreSQL/MySQL) and caching (Redis)."
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineer — React / Vaadin",
    category: "engineering",
    categoryLabel: "Engineering",
    location: "Gurgaon, India",
    experience: "2–5 years",
    tags: ["React", "Vaadin", "UI/UX", "Data Visualisation"],
    description: "Build intuitive, high-performance dashboards that make dense telecom topologies and configuration audits easy to read for network operations teams.",
    responsibilities: [
      "Develop data-rich network planning and topology interfaces using React and Vaadin.",
      "Implement reusable component libraries and micro-animations with Framer Motion.",
      "Optimize web application loading times and handle large real-time data streams.",
      "Collaborate closely with UI/UX designers to translate Figma frames into functional code."
    ],
    requirements: [
      "2+ years of experience with React, TypeScript, and modern state management.",
      "Experience or strong willingness to work with Vaadin for enterprise consoles.",
      "Proficiency in responsive styling, CSS Grid, and Tailwind CSS.",
      "Knowledge of data visualization libraries (Recharts, D3.js) is a major plus."
    ]
  },
  {
    id: "data-engineer",
    title: "Data Engineer — Python / Kafka Streams",
    category: "engineering",
    categoryLabel: "Engineering",
    location: "Gurgaon, India",
    experience: "2–4 years",
    tags: ["Python", "Apache Kafka", "AI Integration", "ETL"],
    description: "Architect our streaming telemetry ingestion and multi-vendor network configuration parser pipelines.",
    responsibilities: [
      "Design and build Python-based ETL pipelines to parse multi-GB RAN configuration dumps.",
      "Implement real-time streaming pipelines using Apache Kafka and Python.",
      "Integrate machine learning models for telemetry classification and anomaly detection.",
      "Maintain data warehouse schemas and optimize big-data processing performance."
    ],
    requirements: [
      "2+ years of experience in Python engineering with a focus on data pipelines.",
      "Hands-on experience with Apache Kafka, PySpark, or similar streaming tools.",
      "Strong SQL skills and experience with time-series or columnar databases.",
      "Familiarity with data validation schemas (Zod, Pydantic) and parsing libraries."
    ]
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer — Terraform / GitHub Actions",
    category: "engineering",
    categoryLabel: "Engineering",
    location: "Gurgaon, India",
    experience: "2–4 years",
    tags: ["Terraform", "GitHub Actions", "AWS", "CI/CD"],
    description: "Own and scale our cloud and hybrid infrastructure, automate CI/CD pipelines, and ensure high availability of our telecom OSS systems.",
    responsibilities: [
      "Manage and provision AWS/hybrid infrastructure using Terraform.",
      "Build and maintain robust GitHub Actions pipelines for automated testing and deployments.",
      "Orchestrate containerized services using Docker and Kubernetes.",
      "Implement comprehensive system monitoring, logging, and alerts (Prometheus/Grafana)."
    ],
    requirements: [
      "2+ years of experience in SRE, DevOps, or systems engineering.",
      "Strong proficiency with Terraform and infrastructure-as-code.",
      "Deep knowledge of GitHub Actions CI/CD workflows and Docker containerization.",
      "Experience managing AWS cloud services and networking topologies."
    ]
  },
  {
    id: "product-manager",
    title: "Product Manager — Telecom Platforms",
    category: "product",
    categoryLabel: "Product",
    location: "Gurgaon, India",
    experience: "4+ years",
    tags: ["Product Management", "Telecom Domain", "Roadmap"],
    description: "Bridge the gap between telecom planning circle leads and our engineering squads to define next-generation OSS/BSS product roadmaps.",
    responsibilities: [
      "Gather and translate operator-level requirements into clear product specs and wireframes.",
      "Own the product backlog, prioritize features, and define launch roadmaps.",
      "Analyze user feedback, CM audit results, and operational metrics to drive enhancements.",
      "Coordinate with engineering and design to ensure predictable release cycles."
    ],
    requirements: [
      "4+ years of product management experience, preferably in B2B SaaS or telecom.",
      "Deep understanding of telecom operations (RAN, Microwave, Core, or IP network layers).",
      "Strong analytical skills and experience writing detailed technical specifications.",
      "Excellent communication and stakeholder management capabilities."
    ]
  },
  {
    id: "ran-engineer",
    title: "RAN Optimization Engineer — Telecom OSS",
    category: "telecom",
    categoryLabel: "Telecom Domain",
    location: "Gurgaon, India",
    experience: "3–6 years",
    tags: ["RAN", "Telecom OSS", "CM Dumps", "Python"],
    description: "Define compliance auditing rules, isolate configuration anomalies, and guide software developers on multi-vendor RAN settings.",
    responsibilities: [
      "Formulate parameter auditing logic for Ericsson, Nokia, and Huawei RAN configurations.",
      "Analyze network CM dumps and identify configuration discrepancies causing drops.",
      "Collaborate with AI engineers to train telemetry classification and anomaly models.",
      "Verify software platform compliance reports against live operator baselines."
    ],
    requirements: [
      "3+ years of experience in RAN optimization or RF planning (Ericsson/Nokia/Huawei).",
      "Deep knowledge of 3GPP standards, LTE/5G network parameters, and KPI structures.",
      "Familiarity with NMS/EMS settings and configuration management databases.",
      "Basic Python or SQL skills for data analysis is highly preferred."
    ]
  },
  {
    id: "mw-specialist",
    title: "MW Transmission Planning Specialist",
    category: "telecom",
    categoryLabel: "Telecom Domain",
    location: "Gurgaon, India",
    experience: "3–5 years",
    tags: ["Microwave (MW)", "Link Planning", "IP Planning", "Telecom OSS"],
    description: "Define link planning lifecycles, nominal hop validations, and backhaul transmission schemas for our core MIDS microwave planning platform.",
    responsibilities: [
      "Establish nominal hop validations, transmission metrics, and link budget criteria.",
      "Design standard workflows for Microwave link deployments, upgrades, and dismantlings.",
      "Provide expert consulting on microwave path calculations, interference, and alignment.",
      "Guide software engineering teams on transmission database schema designs."
    ],
    requirements: [
      "3+ years of experience in Microwave transmission planning and link engineering.",
      "Proficiency with path calculations, frequency coordination, and link design tools.",
      "Deep understanding of backhaul networking (IP, Ethernet, SDH).",
      "Strong documentation skills and ability to translate network concepts to developers."
    ]
  },
  {
    id: "tech-support",
    title: "Technical Support Engineer — L2 / L3",
    category: "support",
    categoryLabel: "Support",
    location: "Gurgaon, India",
    experience: "2–4 years",
    tags: ["RAN/MW Support", "IP Core", "Spring Boot", "Incident Management"],
    description: "Diagnose platform bugs, investigate database discrepancies, and respond to critical circle SLAs to ensure smooth day-to-day operations.",
    responsibilities: [
      "Troubleshoot platform issues, inspect Spring Boot logs, and trace SQL errors.",
      "Investigate network database discrepancy reports and patch data issues.",
      "Support client teams during software updates and circle onboarding.",
      "Document bugs, track incident tickets, and coordinate hot-fixes with development squads."
    ],
    requirements: [
      "2+ years of experience in technical support, application support, or system admin.",
      "Basic proficiency with Java (reading stack traces) and SQL (running queries).",
      "Familiarity with Linux environments, logs analysis, and shell scripting.",
      "Strong customer communication and incident management skills."
    ]
  }
];

const categories = [
  { id: "all", label: "All Roles" },
  { id: "engineering", label: "Engineering" },
  { id: "product", label: "Product" },
  { id: "telecom", label: "Telecom Domain" },
  { id: "support", label: "Support & Delivery" }
] as const;

const culture = [
  {
    icon: Target,
    title: "Domain-Deep Work",
    desc: "You'll understand the telecom domain deeply. Our engineers know what a dismantle workflow is, what a CM dump contains, and why data quality in NMS systems matters for everything downstream.",
    glowColor: "rgba(16, 185, 129, 0.12)"
  },
  {
    icon: Rocket,
    title: "Production Impact, Fast",
    desc: "Our products run live in production. You'll see your work matter in a system managing 150,000+ live microwave plans across PAN India — not in a sandbox or a mockup environment.",
    glowColor: "rgba(139, 92, 246, 0.12)"
  },
  {
    icon: Handshake,
    title: "Real Code Ownership",
    desc: "We operate in highly focused, autonomous squads. Everyone who joins owns their area — you shape the product direction and have a direct voice in our architecture.",
    glowColor: "rgba(245, 158, 11, 0.12)"
  },
  {
    icon: Brain,
    title: "Hard Software Problems",
    desc: "Stitching configuration management (CM) dumps from multiple vendors into a unified audit schema. Automating zero-touch 5G provisioning across 6 systems. These are hard scale problems.",
    glowColor: "rgba(6, 182, 212, 0.12)"
  },
  {
    icon: LineChart,
    title: "Scale Your Career",
    desc: "As MIDS, NEXUS, and NETIQ expand globally, early members scale into engineering leadership, architectural ownership, and critical product roles.",
    glowColor: "rgba(236, 72, 153, 0.12)"
  },
  {
    icon: Globe,
    title: "Gurgaon Core Hub",
    desc: "Collaborate together in-person from our Gurgaon office. We are a tightly knit team that designs together on whiteboards, eats together, and ships code daily.",
    glowColor: "rgba(244, 63, 94, 0.12)"
  }
];

const perks = [
  {
    icon: IndianRupee,
    title: "Competitive Compensation",
    desc: "Market-aligned base pay with performance bonuses.",
    glowColor: "rgba(16, 185, 129, 0.15)"
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    desc: "Annual personal budget for courses, certifications, and conferences.",
    glowColor: "rgba(99, 102, 241, 0.15)"
  },
  {
    icon: HeartPulse,
    title: "Medical Coverage",
    desc: "Comprehensive health insurance covering you and your dependents.",
    glowColor: "rgba(236, 72, 153, 0.15)"
  },
  {
    icon: Laptop,
    title: "Premium Hardware",
    desc: "Latest Apple MacBook Pro hardware, high-end monitors, and ergonomic setup.",
    glowColor: "rgba(6, 182, 212, 0.15)"
  }
];

const steps = [
  {
    step: "01",
    title: "Profile Review",
    desc: "A senior engineering lead reviews your experience. We do not use automated keyword filters — every application is carefully reviewed by a human.",
    details: ["We evaluate your engineering foundation", "Review your Github profile or previous projects", "Takes 3-5 business days"],
    icon: Briefcase
  },
  {
    step: "02",
    title: "Introductory Call",
    desc: "A quick 30-minute introductory conversation to understand your expectations, alignment, and goals, and answer questions about Avendum.",
    details: ["Discuss role parameters", "Evaluate cultural alignment", "Answer questions about team and company culture"],
    icon: Clock
  },
  {
    step: "03",
    title: "Practical Session",
    desc: "A hands-on technical session or system design review tailored directly to the systems you'll build and manage on the job.",
    details: ["Collaborative coding task", "System design matching telecom complexity", "Practical review with senior developers"],
    icon: Code2
  },
  {
    step: "04",
    title: "Leadership & Offer",
    desc: "Conversations with leadership to discuss team integration. We aim to roll out feedback and finalized offers within 3 business days.",
    details: ["Meet the founders", "Understand long-term company vision", "Formal offer and benefits walkthrough"],
    icon: UserCheck
  }
];

function CareersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDept, setFilterDept] = useState<string>("all");
  const [activeStep, setActiveStep] = useState(0);

  const search = Route.useSearch();
  const selectedJobId = search.job;

  const selectedJob = useMemo(() => {
    return jobs.find((j) => j.id === selectedJobId) || null;
  }, [selectedJobId]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((j) => {
      const matchesSearch =
        j.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        j.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesDept = filterDept === "all" || j.category === filterDept;
      return matchesSearch && matchesDept;
    });
  }, [searchQuery, filterDept]);

  if (selectedJob) {
    return (
      <div className="relative min-h-screen pt-4 pb-24 overflow-hidden bg-background">
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: "10s" }} />
          <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "15s" }} />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
          {/* Back button link */}
          <div className="pt-6 pb-8">
            <Link
              to="/careers"
              search={{ job: undefined }}
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors group cursor-pointer"
            >
              <ArrowRight className="h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1 text-primary" />
              Back to Open Positions
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fade-up"
          >
            {/* Left Column: Job Description and Rich Specs */}
            <div className="lg:col-span-8 space-y-8">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-wider font-semibold text-primary border-primary/20 bg-primary/5">
                    {selectedJob.categoryLabel}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">Gurgaon, India &middot; Full-Time</span>
                </div>
                <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-foreground leading-tight">
                  {selectedJob.title}
                </h1>
              </div>

              {/* Description */}
              <GlassCard className="p-8 border border-border/40 bg-card/25 rounded-3xl">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">About the Role</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">
                  {selectedJob.description}
                </p>
              </GlassCard>

              {/* Key Responsibilities */}
              <GlassCard className="p-8 border border-border/40 bg-card/25 rounded-3xl">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Key Responsibilities</h3>
                <ul className="space-y-4">
                  {selectedJob.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-sm text-muted-foreground leading-relaxed font-light">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              {/* Key Requirements */}
              <GlassCard className="p-8 border border-border/40 bg-card/25 rounded-3xl">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">What We Look For</h3>
                <ul className="space-y-4">
                  {selectedJob.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3.5 text-sm text-muted-foreground leading-relaxed font-light">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>

            {/* Right Column: Sidebar Action & Details Panel */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <GlassCard gradientBorder className="p-8 bg-card/30 backdrop-blur-md rounded-3xl border border-border/50 shadow-xl">
                <h3 className="font-display text-base font-bold text-foreground mb-6">Position Summary</h3>

                <div className="space-y-4 font-light text-xs text-muted-foreground">
                  <div className="flex justify-between items-center border-b border-border/30 pb-3">
                    <span>Location</span>
                    <span className="font-semibold text-foreground flex items-center gap-1"><MapPin className="h-3.5 w-3.5 text-primary" /> {selectedJob.location}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/30 pb-3">
                    <span>Experience Required</span>
                    <span className="font-semibold text-foreground">{selectedJob.experience}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-border/30 pb-3">
                    <span>Commitment</span>
                    <span className="font-semibold text-foreground">Full-Time</span>
                  </div>
                  <div className="flex justify-between items-center pb-3">
                    <span>Department</span>
                    <span className="font-semibold text-foreground">{selectedJob.categoryLabel}</span>
                  </div>
                </div>

                {/* Tech Stack in sidebar */}
                <div className="mt-6 pt-6 border-t border-border/30">
                  <h4 className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">Tech Stack & Tools</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedJob.tags.map(t => (
                      <span key={t} className="rounded-lg border border-border bg-foreground/[0.02] px-2.5 py-1 text-[10px] font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  <Link
                    to="/careers/apply"
                    search={{ role: selectedJob.id }}
                    className="block w-full"
                  >
                    <button className="w-full py-3 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/95 transition-all text-xs flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-primary/10">
                      Apply for this Position <ArrowRight className="h-4 w-4" />
                    </button>
                  </Link>
                  <Link
                    to="/careers"
                    search={{ job: undefined }}
                    className="block w-full"
                  >
                    <button className="w-full py-3 px-6 rounded-full border border-border bg-transparent hover:bg-secondary text-muted-foreground hover:text-foreground transition-all text-xs font-semibold cursor-pointer">
                      Cancel & Return
                    </button>
                  </Link>
                </div>
              </GlassCard>

              {/* Small FAQ Card in Sidebar */}
              <GlassCard className="p-6 border border-border/30 bg-card/10 rounded-2xl">
                <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2 flex items-center gap-1.5">
                  <Users className="h-4 w-4" /> Need assistance?
                </h4>
                <p className="text-[11px] text-muted-foreground leading-relaxed">
                  Have questions about this role or the interview process? Drop us an email at <a href="mailto:hr@avendumtech.com" className="text-primary hover:underline font-medium">hr@avendumtech.com</a>.
                </p>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen pt-4 pb-24 overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: "10s" }} />
        <div className="absolute bottom-[20%] left-[5%] w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: "15s" }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Full-bleed Hero Section */}
        <section className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 lg:py-24 border-b border-border/40">
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-semibold text-primary"
            >
              <Sparkles className="h-3.5 w-3.5" /> Join Our Gurgaon Engineering Squad
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-foreground"
            >
              Build the future of <br />
              <span className="text-gradient font-bold">Enterprise Automation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-muted-foreground leading-relaxed text-base lg:text-lg max-w-2xl font-light"
            >
              We engineer high-performance platforms, real-time data pipelines, and sophisticated user interfaces at scale. Join our elite engineering team in Gurgaon to solve complex system design challenges with clean code, autonomy, and real production impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-6 flex flex-wrap gap-4"
            >
              <a href="#open-positions">
                <BrandButton className="cursor-pointer px-6">Explore Open Roles</BrandButton>
              </a>
              <Link to="/careers/apply" search={{ role: "open-application" }}>
                <BrandButton variant="secondary" className="cursor-pointer">
                  Submit Open Application <ArrowRight className="h-4 w-4" />
                </BrandButton>
              </Link>
            </motion.div>
          </div>

          {/* Right Side: Engineering Disciplines & Tech Stack Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 glass border border-border bg-card/40 rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between space-y-4"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-xl pointer-events-none animate-pulse" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none animate-pulse" />

            <div className="flex items-center justify-between border-b border-border/40 pb-3 z-10">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">ENGINEERING_DISCIPLINES</span>
              </div>
              <span className="text-[9px] font-mono text-emerald-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> SQUADS_ACTIVE
              </span>
            </div>

            <div className="space-y-3.5 z-10 font-sans">
              {/* Platform Eng */}
              <div className="flex items-start gap-3 bg-foreground/[0.02] border border-border/20 p-3 rounded-2xl hover:border-primary/30 transition-all group">
                <div className="h-8 w-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Server className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-xs font-semibold text-foreground">Platform Engineering</h4>
                    <span className="text-[9px] font-mono text-muted-foreground">Java / Spring Boot</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-light leading-relaxed">High-concurrency network orchestration & robust databases.</p>
                </div>
              </div>

              {/* Frontend Eng */}
              <div className="flex items-start gap-3 bg-foreground/[0.02] border border-border/20 p-3 rounded-2xl hover:border-primary/30 transition-all group">
                <div className="h-8 w-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                  <Code2 className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-xs font-semibold text-foreground">Frontend & UI/UX</h4>
                    <span className="text-[9px] font-mono text-indigo-400">React / Vaadin</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-light leading-relaxed">Interactive topologies, data visuals, and micro-animations.</p>
                </div>
              </div>

              {/* Data Eng */}
              <div className="flex items-start gap-3 bg-foreground/[0.02] border border-border/20 p-3 rounded-2xl hover:border-primary/30 transition-all group">
                <div className="h-8 w-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Database className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-xs font-semibold text-foreground">Streaming & Data</h4>
                    <span className="text-[9px] font-mono text-emerald-400">Python / Kafka</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-light leading-relaxed">Real-time parser engines & telemetry anomaly detection.</p>
                </div>
              </div>

              {/* DevOps Eng */}
              <div className="flex items-start gap-3 bg-foreground/[0.02] border border-border/20 p-3 rounded-2xl hover:border-primary/30 transition-all group">
                <div className="h-8 w-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Activity className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between w-full">
                    <h4 className="text-xs font-semibold text-foreground">Infrastructure & SRE</h4>
                    <span className="text-[9px] font-mono text-amber-400">Terraform / CI/CD</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground font-light leading-relaxed">Zero-touch deployments & high availability automation.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Culture & Bento Grid Section */}
        <section className="mt-24">
          <header className="max-w-xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4">
              <Users className="h-3.5 w-3.5" /> Team Culture
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              What it means to build with us.
            </h2>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {culture.map((c, idx) => {
              const Icon = c.icon;
              const isLarge = idx === 0 || idx === 3;
              return (
                <div
                  key={c.title}
                  className={isLarge ? "md:col-span-2" : "md:col-span-1"}
                >
                  <GlassCard
                    hoverGlow={true}
                    className="h-full flex flex-col justify-between border border-border/40 bg-card/35 backdrop-blur-md rounded-3xl p-8 hover:bg-card/55 hover:border-foreground/15 transition-all duration-300 relative overflow-hidden"
                    style={{ "--glow": c.glowColor } as React.CSSProperties}
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.02] border border-border/30 text-primary mb-6">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground">{c.title}</h3>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed font-light">{c.desc}</p>
                    </div>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </section>

        {/* Unified Open Positions Panel */}
        <section id="open-positions" className="mt-28 scroll-mt-24">
          <header className="max-w-xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4">
              <Briefcase className="h-3.5 w-3.5" /> Opportunities
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Explore open opportunities.
            </h2>
          </header>

          {/* Clean Glass Control Panel for Search/Filters */}
          <div className="glass bg-card/20 border border-border/50 rounded-3xl p-4 flex flex-col md:flex-row items-center gap-4 justify-between w-full mb-8">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills, tags, or keywords..."
                className="w-full rounded-2xl border border-border/50 bg-background/50 pl-11 pr-4 py-2.5 text-xs outline-none focus:border-primary transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-1 bg-foreground/[0.02] p-1 rounded-2xl border border-border/30 overflow-x-auto w-full md:w-auto shrink-0 justify-start">
              {categories.map((c) => {
                const isActive = filterDept === c.id;
                return (
                  <button
                    key={c.id}
                    onClick={() => setFilterDept(c.id)}
                    className="relative px-3 py-2 text-[10px] font-semibold rounded-xl cursor-pointer transition-all text-muted-foreground hover:text-foreground shrink-0 focus:outline-none"
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-primary rounded-xl shadow z-0"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-200 ${isActive ? "text-primary-foreground font-bold" : ""}`}>
                      {c.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clean Job List Rows */}
          <div className="space-y-4">
            <AnimatePresence mode="popLayout">
              {filteredJobs.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 glass rounded-3xl border border-border/40 bg-card/25"
                >
                  <Briefcase className="h-8 w-8 text-muted-foreground/50 mx-auto mb-3" />
                  <p className="text-muted-foreground text-sm font-light">No positions match your filters currently.</p>
                </motion.div>
              ) : (
                filteredJobs.map((j) => {
                  let categoryColors = "text-primary border-primary/20 bg-primary/5";
                  if (j.category === "engineering") categoryColors = "text-blue-400 border-blue-500/20 bg-blue-500/5";
                  if (j.category === "telecom") categoryColors = "text-emerald-400 border-emerald-500/20 bg-emerald-500/5";
                  if (j.category === "product") categoryColors = "text-violet-400 border-violet-500/20 bg-violet-500/5";
                  if (j.category === "support") categoryColors = "text-amber-400 border-amber-500/20 bg-amber-500/5";

                  return (
                    <motion.div
                      key={j.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    >
                      <Link
                        to="/careers"
                        search={{ job: j.id }}
                        className="w-full text-left cursor-pointer focus:outline-none block"
                      >
                        <div className="glass bg-card/15 hover:bg-card/45 border border-border/40 hover:border-foreground/15 rounded-2xl p-6 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
                          <div className="space-y-3">
                            <div className="flex flex-wrap items-center gap-3">
                              <span className={`px-2.5 py-0.5 rounded-full border text-[9px] font-mono uppercase tracking-wider font-semibold ${categoryColors}`}>
                                {j.categoryLabel}
                              </span>
                              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors font-display">
                                {j.title}
                              </h3>
                            </div>

                            <div className="flex items-center gap-4 text-xs text-muted-foreground font-light">
                              <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-primary/70" /> {j.location}</span>
                              <span>&middot;</span>
                              <span className="flex items-center gap-1.5"><Briefcase className="h-3.5 w-3.5 text-primary/70" /> {j.experience}</span>
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                              {j.tags.map(t => (
                                <span key={t} className="rounded-lg border border-border/40 bg-foreground/[0.01] px-2.5 py-0.5 text-[10px] font-mono text-muted-foreground">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="shrink-0 self-end md:self-auto">
                            <span className="inline-flex h-10 px-5 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 text-xs items-center justify-center gap-1.5">
                              View Details & Apply <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Benefits & Perks Grid */}
        <section className="mt-28">
          <header className="max-w-xl mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4">
              <HeartPulse className="h-3.5 w-3.5" /> Perks & Benefits
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Engineered for growth.
            </h2>
          </header>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <GlassCard
                  key={p.title}
                  hoverGlow={true}
                  className="flex flex-col justify-between items-center text-center p-8 border border-border/40 bg-card/25 rounded-3xl hover:bg-card/45 transition-all duration-300 relative overflow-hidden"
                  style={{ "--glow": p.glowColor } as React.CSSProperties}
                >
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.02] border border-border/30 text-primary mb-5 relative">
                      <Icon className="h-5 w-5" />
                      <div className="absolute inset-0 rounded-2xl bg-primary/5 blur-sm" />
                    </div>
                    <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                    <p className="mt-3 text-xs text-muted-foreground leading-relaxed font-light">{p.desc}</p>
                  </div>
                </GlassCard>
              );
            })}
          </div>
        </section>

        {/* Interactive Stepper Interview Timeline */}
        <section className="mt-28">
          <header className="max-w-xl mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs uppercase tracking-[0.2em] mb-4">
              <CheckCircle2 className="h-3.5 w-3.5" /> Interview Process
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Transparent, fast, and fair.
            </h2>
          </header>

          {/* Clickable Horizontal Stepper Timeline */}
          <div className="glass bg-card/10 border border-border/40 rounded-3xl p-6 sm:p-8 max-w-5xl mx-auto">
            {/* Step Nodes Row */}
            <div className="relative flex justify-between items-center w-full max-w-4xl mx-auto mb-10">
              {/* Stepper Progress bar background */}
              <div className="absolute top-[20px] left-[5%] right-[5%] h-[2px] bg-border/40 z-0" />
              {/* Active filled line */}
              <div
                className="absolute top-[20px] left-[5%] h-[2px] bg-primary z-0 transition-all duration-500"
                style={{ width: `${(activeStep / (steps.length - 1)) * 90}%` }}
              />

              {steps.map((s, index) => {
                const isActive = activeStep === index;
                const isCompleted = index < activeStep;

                return (
                  <button
                    key={s.step}
                    onClick={() => setActiveStep(index)}
                    className="relative z-10 flex flex-col items-center group cursor-pointer focus:outline-none"
                  >
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 border ${isActive ? "bg-primary text-primary-foreground border-primary scale-110 shadow-lg shadow-primary/20" :
                      isCompleted ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/40" : "bg-card border-border text-muted-foreground hover:border-primary/40"
                      }`}>
                      {isCompleted ? "✓" : s.step}
                    </div>
                    <span className={`text-[10px] font-mono mt-2 transition-colors ${isActive ? "text-primary font-bold" : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                      {s.title.split(" ")[0]}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Step Details Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start border-t border-border/30 pt-8 mt-4"
              >
                <div className="md:col-span-3 space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase">STEP 0{activeStep + 1} // {steps[activeStep].title}</span>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed font-light">
                    {steps[activeStep].desc}
                  </p>
                </div>

                <div className="md:col-span-2 glass border border-border/30 bg-foreground/[0.01] rounded-2xl p-6">
                  <h4 className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-4">What to Expect</h4>
                  <ul className="space-y-3 font-light text-xs text-foreground/90">
                    {steps[activeStep].details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Bottom Call to Action Card */}
        <section className="mt-28">
          <GlassCard
            hoverGlow={true}
            className="p-10 text-center max-w-4xl mx-auto border border-border bg-card/35 backdrop-blur-md rounded-[32px] relative overflow-hidden"
            style={{ "--glow": "rgba(99, 102, 241, 0.15)" } as React.CSSProperties}
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/[0.02] border border-border text-primary">
                <HelpCircle className="h-6 w-6" />
              </span>

              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight">
                Don&apos;t see the right position?
              </h2>

              <p className="text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed font-light">
                We are always seeking exceptional engineers and telecom domain specialists.
                If you have a strong background in **Java, Python, Spring Boot, React, Vaadin, or Telecom OSS**,
                send an open application. We review profiles on a rolling basis.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/careers/apply" search={{ role: "open-application" }}>
                  <BrandButton className="cursor-pointer px-8">Submit Open Application</BrandButton>
                </Link>
                <a
                  href="mailto:hr@avendumtech.com"
                  className="text-xs text-muted-foreground hover:text-foreground font-semibold flex items-center gap-1 transition-colors"
                >
                  Or email hr@avendumtech.com <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
}
