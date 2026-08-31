import type { SkillCategory } from "../types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React", iconKey: "react" },
      { name: "TypeScript", iconKey: "typescript" },
      { name: "JavaScript", iconKey: "javascript" },
      { name: "HTML5", iconKey: "html5" },
      { name: "CSS3", iconKey: "css3" },
      { name: "Tailwind CSS", iconKey: "tailwindcss" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Php", iconKey: "php" },
      { name: "Laravel", iconKey: "laravel" },
      { name: "REST APIs", iconKey: "restapis" },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "PostgreSQL", iconKey: "postgresql" },
      { name: "Supabase", iconKey: "supabase" },
      { name: "MySQL", iconKey: "mysql" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", iconKey: "git" },
      { name: "GitHub", iconKey: "github" },
      { name: "VS Code", iconKey: "vscode" },
      { name: "Vite", iconKey: "vite" },
      { name: "Figma", iconKey: "figma" },
    ],
  },
];
