import project1 from "@/assets/site/project-1.jpg";
import project2 from "@/assets/site/project-2.jpg";
import project3 from "@/assets/site/project-3.jpg";
import project4 from "@/assets/site/project-4.jpg";

export interface Project {
  slug: string;
  title: string;
  category: string;
  client: string;
  year: string;
  duration: string;
  image: string;
  summary: string;
  challenge: string;
  approach: string[];
  outcome: { label: string; value: string }[];
  stack: string[];
}

import projectsData from "../data/projects.json";

const imageMap: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
  "project-4": project4,
};

export const projects: Project[] = (projectsData as any[]).map((p) => ({
  ...p,
  image: imageMap[p.image] || project1,
}));

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
