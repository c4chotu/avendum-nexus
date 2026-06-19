import * as XLSX from "xlsx";
import * as path from "path";
import * as fs from "fs";

const jobs = [
  {
    id: "senior-backend",
    title: "Senior Backend Engineer — Java / Spring Boot",
    category: "engineering",
    categoryLabel: "Engineering",
    location: "Gurgaon, India",
    experience: "3–6 years",
    tags: "Java, Spring Boot, Apache Kafka, REST APIs",
    description: "Join our core backend engineering squad building high-concurrency network orchestration and configuration management engines. You will design resilient services that process and audit millions of network telemetry data points daily.",
    responsibilities: [
      "Design and scale high-concurrency Spring Boot microservices and REST APIs.",
      "Implement reliable event-driven messaging pipelines using Apache Kafka.",
      "Optimize complex PostgreSQL queries and database transactions for network audits.",
      "Ensure high test coverage, perform detailed code reviews, and guide junior developers."
    ].join("\n"),
    requirements: [
      "3+ years of professional experience building enterprise Java applications.",
      "Strong expertise in Spring Boot, Spring Data JPA, and Hibernate.",
      "Hands-on experience with Apache Kafka or similar message brokers.",
      "Solid understanding of relational databases (PostgreSQL/MySQL) and caching (Redis)."
    ].join("\n")
  },
  {
    id: "frontend",
    title: "Frontend Engineer — React / Vaadin",
    category: "engineering",
    categoryLabel: "Engineering",
    location: "Gurgaon, India",
    experience: "2–5 years",
    tags: "React, Vaadin, UI/UX, Data Visualisation",
    description: "Build intuitive, high-performance dashboards that make dense telecom topologies and configuration audits easy to read for network operations teams.",
    responsibilities: [
      "Develop data-rich network planning and topology interfaces using React and Vaadin.",
      "Implement reusable component libraries and micro-animations with Framer Motion.",
      "Optimize web application loading times and handle large real-time data streams.",
      "Collaborate closely with UI/UX designers to translate Figma frames into functional code."
    ].join("\n"),
    requirements: [
      "2+ years of experience with React, TypeScript, and modern state management.",
      "Experience or strong willingness to work with Vaadin for enterprise consoles.",
      "Proficiency in responsive styling, CSS Grid, and Tailwind CSS.",
      "Knowledge of data visualization libraries (Recharts, D3.js) is a major plus."
    ].join("\n")
  },
  {
    id: "data-engineer",
    title: "Data Engineer — Python / Kafka Streams",
    category: "engineering",
    categoryLabel: "Engineering",
    location: "Gurgaon, India",
    experience: "2–4 years",
    tags: "Python, Apache Kafka, AI Integration, ETL",
    description: "Architect our streaming telemetry ingestion and multi-vendor network configuration parser pipelines.",
    responsibilities: [
      "Design and build Python-based ETL pipelines to parse multi-GB RAN configuration dumps.",
      "Implement real-time streaming pipelines using Apache Kafka and Python.",
      "Integrate machine learning models for telemetry classification and anomaly detection.",
      "Maintain data warehouse schemas and optimize big-data processing performance."
    ].join("\n"),
    requirements: [
      "2+ years of experience in Python engineering with a focus on data pipelines.",
      "Hands-on experience with Apache Kafka, PySpark, or similar streaming tools.",
      "Strong SQL skills and experience with time-series or columnar databases.",
      "Familiarity with data validation schemas (Zod, Pydantic) and parsing libraries."
    ].join("\n")
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer — Terraform / GitHub Actions",
    category: "engineering",
    categoryLabel: "Engineering",
    location: "Gurgaon, India",
    experience: "2–4 years",
    tags: "Terraform, GitHub Actions, AWS, CI/CD",
    description: "Own and scale our cloud and hybrid infrastructure, automate CI/CD pipelines, and ensure high availability of our telecom OSS systems.",
    responsibilities: [
      "Manage and provision AWS/hybrid infrastructure using Terraform.",
      "Build and maintain robust GitHub Actions pipelines for automated testing and deployments.",
      "Orchestrate containerized services using Docker and Kubernetes.",
      "Implement comprehensive system monitoring, logging, and alerts (Prometheus/Grafana)."
    ].join("\n"),
    requirements: [
      "2+ years of experience in SRE, DevOps, or systems engineering.",
      "Strong proficiency with Terraform and infrastructure-as-code.",
      "Deep knowledge of GitHub Actions CI/CD workflows and Docker containerization.",
      "Experience managing AWS cloud services and networking topologies."
    ].join("\n")
  },
  {
    id: "product-manager",
    title: "Product Manager — Network Platforms",
    category: "product",
    categoryLabel: "Product",
    location: "Gurgaon, India",
    experience: "4+ years",
    tags: "Product Management, Network Domain, Roadmap",
    description: "Bridge the gap between telecom planning leads and our engineering squads to define next-generation OSS product roadmaps.",
    responsibilities: [
      "Gather and translate network-level requirements into clear product specs and wireframes.",
      "Own the product backlog, prioritize features, and define launch roadmaps.",
      "Analyze user feedback, audit results, and operational metrics to drive enhancements.",
      "Coordinate with engineering and design to ensure predictable release cycles."
    ].join("\n"),
    requirements: [
      "4+ years of product management experience, preferably in B2B SaaS or enterprise software.",
      "Deep understanding of telecom operations (RAN, Microwave, Core, or IP network layers).",
      "Strong analytical skills and experience writing detailed technical specifications.",
      "Excellent communication and stakeholder management capabilities."
    ].join("\n")
  },
  {
    id: "ran-engineer",
    title: "RAN Optimization Engineer — Network OSS",
    category: "telecom",
    categoryLabel: "Network Domain",
    location: "Gurgaon, India",
    experience: "3–6 years",
    tags: "RAN, Telecom OSS, CM Dumps, Python",
    description: "Define compliance auditing rules, isolate configuration anomalies, and guide software developers on multi-vendor RAN settings.",
    responsibilities: [
      "Formulate parameter auditing logic for multi-vendor RAN configurations.",
      "Analyze network CM dumps and identify configuration discrepancies causing drops.",
      "Collaborate with AI engineers to train telemetry classification and anomaly models.",
      "Verify software platform compliance reports against network baselines."
    ].join("\n"),
    requirements: [
      "3+ years of experience in RAN optimization or RF planning in multi-vendor environments.",
      "Deep knowledge of 3GPP standards, LTE/5G network parameters, and KPI structures.",
      "Familiarity with NMS/EMS settings and configuration management databases.",
      "Basic Python or SQL skills for data analysis is highly preferred."
    ].join("\n")
  },
  {
    id: "mw-specialist",
    title: "MW Transmission Planning Specialist",
    category: "telecom",
    categoryLabel: "Network Domain",
    location: "Gurgaon, India",
    experience: "3–5 years",
    tags: "Microwave (MW), Link Planning, IP Planning, Telecom OSS",
    description: "Define link planning lifecycles, nominal hop validations, and backhaul transmission schemas for our core NETRA planning platform.",
    responsibilities: [
      "Establish nominal hop validations, transmission metrics, and link budget criteria.",
      "Design standard workflows for Microwave link deployments, upgrades, and dismantlings.",
      "Provide expert consulting on microwave path calculations, interference, and alignment.",
      "Guide software engineering teams on transmission database schema designs."
    ].join("\n"),
    requirements: [
      "3+ years of experience in Microwave transmission planning and link engineering.",
      "Proficiency with path calculations, frequency coordination, and link design tools.",
      "Deep understanding of backhaul networking (IP, Ethernet, SDH).",
      "Strong documentation skills and ability to translate network concepts to developers."
    ].join("\n")
  },
  {
    id: "tech-support",
    title: "Technical Support Engineer — L2 / L3",
    category: "support",
    categoryLabel: "Support",
    location: "Gurgaon, India",
    experience: "2–4 years",
    tags: "RAN/MW Support, IP Core, Spring Boot, Incident Management",
    description: "Diagnose platform bugs, investigate database discrepancies, and respond to critical network SLAs to ensure smooth day-to-day operations.",
    responsibilities: [
      "Troubleshoot platform issues, inspect Spring Boot logs, and trace SQL errors.",
      "Investigate network database discrepancy reports and patch data issues.",
      "Support client teams during software updates and operations onboarding.",
      "Document bugs, track incident tickets, and coordinate hot-fixes with development squads."
    ].join("\n"),
    requirements: [
      "2+ years of experience in technical support, application support, or system admin.",
      "Basic proficiency with Java (reading stack traces) and SQL (running queries).",
      "Familiarity with Linux environments, logs analysis, and shell scripting.",
      "Strong customer communication and incident management skills."
    ].join("\n")
  }
];

const services = [
  {
    id: "telecom-ai",
    icon: "Brain",
    title: "Telecom AI & Anomaly Detection",
    pitch: "Automated network health monitoring, root cause isolation, and closed-loop recommendations.",
    details: "Deploy streaming intelligence pipelines to monitor multi-vendor networks. We integrate Python-based machine learning classifiers alongside Apache Kafka streams and Java/Spring Boot microservices to classify anomalies, isolate root causes, and recommend auto-healing parameter updates.",
    bullets: [
      "Real-time streaming anomaly classification & alerts",
      "LLM-assisted Root Cause Analysis (RCA)",
      "Closed-loop automatic remediation triggers",
      "NOC diagnostic suggestion playbooks"
    ].join("\n"),
    tech: "Python, Apache Kafka, AI Integration, Spring Boot, PyTorch",
    theme: "emerald",
    gridClass: "md:col-span-2",
    accentColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    glowColor: "rgba(16, 185, 129, 0.15)"
  },
  {
    id: "ui-ux",
    icon: "Palette",
    title: "Platform Customization & Dashboard Engineering",
    pitch: "Human-centered interfaces tailored for dense network topologies and planning stencils.",
    details: "We customize and extend the frontends of NETRA and NETiQ. We design and build responsive network dashboards, multi-vendor topology viewers, and custom operations design systems to render complex network datasets into clean, actionable dashboards.",
    bullets: [
      "Tailored operations portals and map-based topology viewers",
      "High-fidelity interactive workflows & planning stencils",
      "Custom enterprise dashboard styling and dark-theme configurations",
      "Usability testing for network planning and SRE engineers"
    ].join("\n"),
    tech: "React, Vaadin, UI/UX, Figma, Tailwind CSS",
    theme: "indigo",
    gridClass: "md:col-span-1",
    accentColor: "text-indigo-400 border-indigo-500/20 bg-indigo-500/10",
    glowColor: "rgba(99, 102, 241, 0.15)"
  },
  {
    id: "software-dev",
    icon: "Code2",
    title: "Enterprise Integration & API Development",
    pitch: "Robust backend integrations, custom northbound/southbound APIs, and database sync pipelines.",
    details: "We engineer robust microservices and connectors to integrate NETRA and NETiQ with existing OSS architectures, planning databases, and NMS platforms. We specialize in Java, Spring Boot, Python, and Kafka, ensuring secure data synchronization and high availability.",
    bullets: [
      "Custom REST/GraphQL APIs and webhook integrations",
      "Northbound and southbound connectors to legacy OSS",
      "Secure enterprise authentication (SSO, SAML) and fine-grained RBAC",
      "High-performance data synchronization & database mapping"
    ].join("\n"),
    tech: "Java, Spring Boot, Python, Vaadin, React",
    theme: "violet",
    gridClass: "md:col-span-1",
    accentColor: "text-violet-400 border-violet-500/20 bg-violet-500/10",
    glowColor: "rgba(139, 92, 246, 0.15)"
  },
  {
    id: "acceleration",
    icon: "Gauge",
    title: "High-Throughput Ingestion & Scale Engineering",
    pitch: "Hot-path optimizations, caching networks, and performance tuning for telemetry feeds.",
    details: "We optimize heavy telemetric and network data pipelines to handle millions of node events. By fine-tuning Spring Boot JVM settings, configuring Redis caches, and structuring Apache Kafka partitions, we eliminate processing bottlenecks for real-time operations.",
    bullets: [
      "Multi-layer caching architectures (Redis/Varnish)",
      "Heavy file ingestion and parsing performance tuning",
      "Database index tuning & query plan optimization",
      "Auto-scaling infrastructure & queue management"
    ].join("\n"),
    tech: "Java, Spring Boot, Apache Kafka, Redis, PostgreSQL",
    theme: "amber",
    gridClass: "md:col-span-1",
    accentColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    glowColor: "rgba(245, 158, 11, 0.15)"
  },
  {
    id: "strategy",
    icon: "Lightbulb",
    title: "Network Automation Architecture Consulting",
    pitch: "Consulting on modern network architectures, link planning parameters, and transition pathways.",
    details: "We assist enterprise networks in designing modern architectures and planning transitions to autonomous, automated networking. We design Microwave link stencils, frequency allocation plans, and migration blueprints.",
    bullets: [
      "Network migration path & automation blueprint design",
      "Microwave path calculations & nominal stencil definitions",
      "Capacity auditing and multi-vendor interoperability strategy",
      "Operational readiness and compliance framework planning"
    ].join("\n"),
    tech: "RAN Planning, MW Planning, IP Core Routing, OSS Design",
    theme: "rose",
    gridClass: "md:col-span-1",
    accentColor: "text-rose-400 border-rose-500/20 bg-rose-500/10",
    glowColor: "rgba(244, 63, 94, 0.15)"
  },
  {
    id: "outsourcing",
    icon: "Users",
    title: "Platform Co-Engineering & Operations Support",
    pitch: "Dedicated solution engineering and operations support to run and extend the platform.",
    details: "To ensure maximum value from our platforms, we offer dedicated solution engineering teams and operations support. We provide platform optimization, custom script development, and 24/7 support for continuous operations.",
    bullets: [
      "Dedicated platform reliability and configuration engineers",
      "Automated platform deployment (Terraform and GitHub Actions)",
      "24/7/365 operational support and platform SLA compliance",
      "Custom CLI translator and parser rule updates"
    ].join("\n"),
    tech: "Terraform, GitHub Actions, Java, Python, Telecom OSS",
    theme: "cyan",
    gridClass: "md:col-span-2",
    accentColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
    glowColor: "rgba(6, 182, 212, 0.15)"
  },
  {
    id: "program-mgmt",
    icon: "Kanban",
    title: "Rollout Management & Release Orchestration",
    pitch: "Risk profiling and predictability across complex, multi-vendor network rollouts.",
    details: "Delivery leadership for large-scale network migrations and software integrations. We manage dependencies across multi-vendor equipment, orchestrate testing, and ensure predictable releases using automated CI/CD pipelines.",
    bullets: [
      "Release dependency mapping & critical path orchestration",
      "Cross-vendor integration risk profiling & change control",
      "CI/CD automated testing and rollout validation",
      "Post-deployment operational audits and transition logs"
    ].join("\n"),
    tech: "Jira Software, Confluence, GitHub Actions, Miro",
    theme: "pink",
    gridClass: "md:col-span-1",
    accentColor: "text-pink-400 border-pink-500/20 bg-pink-500/10",
    glowColor: "rgba(236, 72, 153, 0.15)"
  }
];

const projects = [
  {
    slug: "sentinel-noc",
    title: "Sentinel — Autonomous NOC for a Tier-1 Operator",
    category: "AI Operations",
    client: "Tier-1 South Asia Operator",
    year: "2024",
    duration: "9 months",
    image: "project-1",
    summary: "An AI-driven Network Operations Center that reduced mean-time-to-resolution from hours to seconds across 42,000 sites.",
    challenge: "Manual triage was buckling under 4M+ daily alarms. The operator needed an autonomous loop that could correlate, diagnose, and remediate without human bottleneck — while keeping carrier-grade auditability.",
    approach: [
      "Streamed multi-vendor telemetry through a Kafka + Flink pipeline normalized into a topology-aware graph.",
      "Trained anomaly-detection ensembles on 18 months of historic events with explainable scoring.",
      "Closed the loop via policy-driven runbooks executed through a secure orchestration plane.",
      "Shipped a live operations canvas with NL query, replay timeline, and SRE-grade audit trail."
    ].join("\n"),
    outcome: [
      "MTTR reduction: 96%",
      "Auto-remediated incidents: 73%",
      "Alarm noise cut: 11×",
      "Sites onboarded: 42K"
    ].join("\n"),
    stack: "Kafka, Flink, PyTorch, Neo4j, Kubernetes, Grafana"
  },
  {
    slug: "fiberpath-orchestrator",
    title: "FiberPath — Multi-vendor Transport Orchestrator",
    category: "Network Deployment",
    client: "European Neutral Host",
    year: "2024",
    duration: "12 months",
    image: "project-2",
    summary: "Zero-touch provisioning across 6 transport vendors, collapsing 14-day deployments into 38-minute rollouts.",
    challenge: "Each vendor shipped its own EMS, CLI, and YANG dialects. Field teams stitched configs by hand — slow, error-prone, and impossible to audit at scale.",
    approach: [
      "Built a vendor-agnostic intent model that compiles down to per-device NETCONF / gNMI payloads.",
      "Introduced declarative golden configs with drift detection and self-healing reconciliation.",
      "Wove a change-management workflow tied to CAB approvals, blast-radius checks, and instant rollback."
    ].join("\n"),
    outcome: [
      "Deployment time: 38 min",
      "Config errors: −98%",
      "Vendors unified: 6",
      "Sites/quarter: 3,400"
    ].join("\n"),
    stack: "Go, NETCONF, gNMI, Temporal, Terraform, Postgres"
  },
  {
    slug: "atlas-edge",
    title: "Atlas — Smart City Edge Intelligence",
    category: "Edge & IoT",
    client: "Metro Smart-City Authority",
    year: "2023",
    duration: "7 months",
    image: "project-3",
    summary: "A real-time edge mesh ingesting 150M+ sensor events daily across traffic, energy, and public safety.",
    challenge: "Pilot dashboards collapsed at city scale. The authority needed a federated edge runtime that worked under intermittent connectivity, with privacy guarantees baked in.",
    approach: [
      "Deployed a lightweight WASM runtime on 9,200 edge nodes with over-the-air policy updates.",
      "Federated learning kept raw PII local while sharing model gradients with the central control plane.",
      "Built a live ‘city twin’ canvas with replay, what-if simulation, and incident-grade alerts."
    ].join("\n"),
    outcome: [
      "Events/day: 150M+",
      "Edge nodes: 9,200",
      "P95 latency: 180ms",
      "Energy saved: 22%"
    ].join("\n"),
    stack: "Rust, WASM, MQTT, TimescaleDB, TensorFlow Lite"
  },
  {
    slug: "vault-core",
    title: "VaultCore — Carrier-grade Data Platform",
    category: "Data & Infrastructure",
    client: "North American MSO",
    year: "2023",
    duration: "10 months",
    image: "project-4",
    summary: "Replaced a 7-year-old data warehouse with a lakehouse that powers billing, churn, and capacity planning in real-time.",
    challenge: "Nightly batch jobs ran 9 hours, blocking finance, capacity, and customer-experience teams from same-day insight.",
    approach: [
      "Migrated to an open lakehouse on object storage with Iceberg tables and column-level lineage.",
      "Introduced streaming CDC from 38 source systems with schema-evolution guardrails.",
      "Rolled out a semantic layer so analysts query in business language, not SQL ceremony."
    ].join("\n"),
    outcome: [
      "Data freshness: <2 min",
      "Compute cost: −61%",
      "Source systems: 38",
      "Queries/day: 1.2M"
    ].join("\n"),
    stack: "Iceberg, Spark, dbt, Trino, Airflow, S3"
  }
];

// Create output directory scripts if it doesn't exist
const wb = XLSX.utils.book_new();

const wsServices = XLSX.utils.json_to_sheet(services);
XLSX.utils.book_append_sheet(wb, wsServices, "Services");

const wsProjects = XLSX.utils.json_to_sheet(projects);
XLSX.utils.book_append_sheet(wb, wsProjects, "Projects");

const wsJobs = XLSX.utils.json_to_sheet(jobs);
XLSX.utils.book_append_sheet(wb, wsJobs, "Jobs");

const excelPath = path.resolve(process.cwd(), "database.xlsx");
XLSX.writeFile(wb, excelPath);
console.log(`Successfully seeded database.xlsx at ${excelPath}`);
