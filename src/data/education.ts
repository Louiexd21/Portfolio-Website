import type { EducationEntry, Certification, Service, NavItem } from "../types";
import webDevCert from "../assets/images/DICT_WEB_DEV1_CERTIFICATE.png"
import certInternship from "../assets/images/Certificate of completion.jpg"
import certOfRecognition from "../assets/images/cert_of_recognition.png"
import certOfReact from "../assets/images/reactCert.png"
import certPromptLikeEngineer from "../assets/images/prompt_like_an_engineer.png"

export const education: EducationEntry[] = [
  {
    id: "bsit-cvsu",
    degree: "Bachelor of Science in Information Technology",
    institution: "Cavite State University – Trece Martires City Campus",
    location: "Trece Martires City, Cavite, Philippines",
    graduationYear: "2026",
    achievements: [
      "Graduated with Latin Honors",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Web Systems & Technologies",
      "Database Management Systems",
      "Software Engineering",
      "Human-Computer Interaction",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Web Development 1",
    issuer: "DICT",
    date: "February 2024",
    type: "Certification",
    image: webDevCert,
  },
  {
    id: "cert-2",
    title: "Certificate of Intern Completion",
    issuer: "Tecson-Dulalia Medical Services Inc.",
    date: "May 2026",
    type: "Certification",
    image: certInternship,
  },
  {
    id: "cert-3",
    title: "React JS for Beginners",
    issuer: "Simplilarn",
    date: "September 2026",
    type: "Certification",
    image: certOfReact,
  },
  {
    id: "cert-4",
    title: "Prompt Like an Engineer Certificate",
    issuer: "DICT-ITU DTC Initiative through the Cisco Networking Academy program",
    date: "September 2026",
    type: "Certification",
    image: certPromptLikeEngineer,
  },
  {
    id: "cert-5",
    title: "President's List Recognition",
    issuer: "Cavite State University – Trece Martires City Campus",
    date: "2024 — 2025",
    type: "Achievement",
    image: certOfRecognition,
  },
];

export const services: Service[] = [
  {
    id: "web-dev",
    title: "Web Development",
    description: "Building responsive and modern websites using React and TypeScript.",
    icon: "Code2",
  },
  {
    id: "ui-dev",
    title: "UI Development",
    description: "Creating clean, accessible, and responsive user interfaces.",
    icon: "LayoutTemplate",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Development",
    description:
      "Developing modern online stores with product management, cart systems, checkout flows, and authentication.",
    icon: "ShoppingCart",
  },
  {
    id: "backend",
    title: "Database & Backend Integration",
    description: "Connecting frontend applications to APIs and databases.",
    icon: "Database",
  },
];

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];