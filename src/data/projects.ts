import type { Project } from "../types";
import hugoPerezIMS from "../assets/images/IMS_hugoperez.png"
import flowerShop from "../assets/images/Flowershop_mini_ecommerce.png"
import mexibite from "../assets/images/mexibite_hero.png"
import tdmhsi from "../assets/images/TDMHSI.png"
import fitTrack from "../assets/images/FitTrack.png"
export const projects: Project[] = [
  {
    id: "IMS-Hugo-perez",
    name: "IMS For Hugo Perez, Trece Martires City",
    description:
      "A digital Healthcare Information System for Barangay Hugo Perez that streamlines patient records, vaccination tracking, and community healthcare services.",
    image:
      hugoPerezIMS,
    technologies: ["Laravel", "JavaScript", "Tailwind CSS", "HTML/CSS","MYSQL"],
    githubUrl: "https://github.com/Louiexd21/Health-Center-Information-Management-System",
    liveUrl: "https://hugoperezproperbhc.com/",
    featured: true,
  },
  {
    id: "TDMHSI",
    name: "Tecson-Dulalia Medical Health Services Inc.",
    description:
      "A Medical Health Services Content Management System** designed to streamline the management, organization, and updating of healthcare-related content and information for Tecson-Dulalia Medical Health Services Inc.",
    image:
      tdmhsi,
    technologies: ["React", "JavaScript", "Supabase"],
    githubUrl: "https://github.com/Kerbs-IT/TecsonDulaliaHealthCMS",
    liveUrl: "https://example.com/",
    featured: true,
  },
  {
  id: "Flowershop",
  name: "Flower Shop (Mini E-commerce)",
  description:
    "Is an online platform that allows customers tzxo browse, order, and purchase floral products easily, while helping the seller manage orders and inventory efficiently.",
  image:
    flowerShop,
  technologies: ["PHP", "HTML", "CSS", "Bootstrap"],
  githubUrl: "https://github.com/Louiexd21/GROUP_3_PROJECT_BSIT2-6_-FLOWERSHOP2",
  liveUrl: "https://example.com/",
  featured: true,
  }
  ,
  {
    id: "mexibite",
    name: "Mexibite",
    description:
      "A simple and modern website that showcases MexiBite’s chicken wings, menu, and brand for customers online.",
    image:
      mexibite,
    technologies: ["HTML", "CSS", "JavaScript"],
    githubUrl: "https://github.com/",
    liveUrl: "https://example.com/",
  },
  {
    id: "FitTrack",
    name: "FitTrack",
    description:
      "A fitness tracking web design created in Adobe XD, featuring a clean and user-friendly interface for monitoring workouts, fitness progress, and health goals.",
    image:
      fitTrack,
    technologies: ["Adobe Experience Design",],
    githubUrl: "https://github.com/",
  },
];