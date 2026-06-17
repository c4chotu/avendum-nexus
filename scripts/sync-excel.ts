import * as path from "path";
import * as fs from "fs";
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const XLSX = require("xlsx");

interface RawService {
  id: string;
  icon: string;
  title: string;
  pitch: string;
  details: string;
  bullets: string;
  tech: string;
  theme: string;
  gridClass: string;
  accentColor: string;
  glowColor: string;
}

interface RawProject {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string | number;
  duration: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string;
}

interface RawJob {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  location: string;
  experience: string;
  tags: string;
  description: string;
  responsibilities: string;
  requirements: string;
}

function parseList(str: string | undefined): string[] {
  if (!str) return [];
  return str
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter(Boolean);
}

function parseCommaList(str: string | undefined): string[] {
  if (!str) return [];
  return str
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function sync() {
  const excelPath = path.resolve(process.cwd(), "database.xlsx");
  if (!fs.existsSync(excelPath)) {
    console.error(`Error: database.xlsx not found at ${excelPath}`);
    process.exit(1);
  }

  const workbook = XLSX.readFile(excelPath);
  const dataDir = path.resolve(process.cwd(), "src/data");

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // 1. Parse Services
  const servicesSheet = workbook.Sheets["Services"];
  if (servicesSheet) {
    const rawServices = XLSX.utils.sheet_to_json<RawService>(servicesSheet);
    const services = rawServices.map((row) => ({
      id: row.id,
      icon: row.icon,
      title: row.title,
      pitch: row.pitch,
      details: row.details,
      bullets: parseList(row.bullets),
      tech: parseCommaList(row.tech),
      theme: row.theme,
      gridClass: row.gridClass,
      accentColor: row.accentColor,
      glowColor: row.glowColor,
    }));
    fs.writeFileSync(
      path.join(dataDir, "services.json"),
      JSON.stringify(services, null, 2)
    );
    console.log(`Synced ${services.length} services to src/data/services.json`);
  } else {
    console.warn("Warning: 'Services' sheet not found in database.xlsx");
  }

  // 2. Parse Projects
  const projectsSheet = workbook.Sheets["Projects"];
  if (projectsSheet) {
    const rawProjects = XLSX.utils.sheet_to_json<RawProject>(projectsSheet);
    const projects = rawProjects.map((row) => {
      const outcomeLines = parseList(row.outcome);
      const outcome = outcomeLines.map((line) => {
        const parts = line.split(":");
        return {
          label: parts[0]?.trim() || "",
          value: parts.slice(1).join(":").trim() || "",
        };
      });

      return {
        slug: row.slug,
        title: row.title,
        category: row.category,
        client: row.client,
        year: String(row.year),
        duration: row.duration,
        image: row.image,
        summary: row.summary,
        challenge: row.challenge,
        approach: parseList(row.approach),
        outcome: outcome,
        stack: parseCommaList(row.stack),
      };
    });
    fs.writeFileSync(
      path.join(dataDir, "projects.json"),
      JSON.stringify(projects, null, 2)
    );
    console.log(`Synced ${projects.length} projects to src/data/projects.json`);
  } else {
    console.warn("Warning: 'Projects' sheet not found in database.xlsx");
  }

  // 3. Parse Jobs
  const jobsSheet = workbook.Sheets["Jobs"];
  if (jobsSheet) {
    const rawJobs = XLSX.utils.sheet_to_json<RawJob>(jobsSheet);
    const jobs = rawJobs.map((row) => ({
      id: row.id,
      title: row.title,
      category: row.category,
      categoryLabel: row.categoryLabel,
      location: row.location,
      experience: row.experience,
      tags: parseCommaList(row.tags),
      description: row.description,
      responsibilities: parseList(row.responsibilities),
      requirements: parseList(row.requirements),
    }));
    fs.writeFileSync(
      path.join(dataDir, "jobs.json"),
      JSON.stringify(jobs, null, 2)
    );
    console.log(`Synced ${jobs.length} jobs to src/data/jobs.json`);
  } else {
    console.warn("Warning: 'Jobs' sheet not found in database.xlsx");
  }
}

// Execute sync
sync();
