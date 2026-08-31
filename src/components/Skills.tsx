import { Layers, Server, Database, Wrench, Webhook } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiPostgresql,
  SiSupabase,
  SiMysql,
  SiGit,
  SiGithub,
  SiVite,
  SiFigma,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { skillCategories } from "../data/skills";

const categoryIcons: Record<string, LucideIcon> = {
  frontend: Layers,
  backend: Server,
  database: Database,
  tools: Wrench,
};

const skillIcons: Record<string, IconType> = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html5: SiHtml5,
  css3: DiCss3,
  tailwindcss: SiTailwindcss,
  php: SiPhp,
  laravel: SiLaravel,
  postgresql: SiPostgresql,
  supabase: SiSupabase,
  mysql: SiMysql,
  git: SiGit,
  github: SiGithub,
  vscode: VscVscode,
  vite: SiVite,
  figma: SiFigma,
};

// Official brand colors, used to render each logo in its true color.
const skillColors: Record<string, string> = {
  react: "#61DAFB",
  typescript: "#3178C6",
  javascript: "#F7DF1E",
  html5: "#E34F26",
  css3: "#1572B6",
  tailwindcss: "#06B6D4",
  php: "#777BB4",
  laravel: "#FF2D20",
  postgresql: "#4169E1",
  supabase: "#3ECF8E",
  mysql: "#4479A1",
  git: "#F05032",
  github: "#181717",
  vscode: "#007ACC",
  vite: "#646CFF",
  figma: "#F24E1E",
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-28 bg-surface border-y border-border">
      <div className="container-page">
        <p className="section-eyebrow">02 · Skills</p>
        <h2 className="section-heading">Technical skills</h2>
        <p className="section-sub">
          Tools and technologies I use to design, build, and ship complete
          web applications.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillCategories.map((category) => {
            const CategoryIcon = categoryIcons[category.id] ?? Layers;
            return (
              <div key={category.id} className="card card-hover p-2 sm:p-3">
                <div className="flex items-center gap-3 mb-5">
                  <span className="flex h-15 w-15 items-center justify-center rounded-sm bg-bg border border-border">
                    <CategoryIcon size={20} strokeWidth={2} />
                  </span>
                  <h3 className="font-display font-bold  text-base">
                    {category.title}
                  </h3>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {category.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill.iconKey] ?? Webhook;
                    const color = skillColors[skill.iconKey];
                    return (
                      <span key={skill.name} className="flex gap-2 card p-2 items-center justify-between text-lg hover">
                        <SkillIcon
                          size={30}
                          className="shrink-0"
                          style={color ? { color } : undefined}
                          aria-hidden="true"
                        />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;