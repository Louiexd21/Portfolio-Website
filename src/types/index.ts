export interface Project {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  iconKey: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}

export interface ExperienceEntry {
  id: string;
  role: string;
  organization: string;
  type: "Internship" | "Freelance" | "Academic Project" | "Leadership" | "Work";
  date: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  location: string;
  graduationYear: string;
  achievements: string[];
  coursework: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: "Certification" | "Award" | "Hackathon" | "Achievement";
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionsResponse {
  total: Record<string, number>;
  contributions: ContributionDay[];
}