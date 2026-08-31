import { ExternalLink } from "lucide-react";
import { GithubIcon } from "../icons/BrandIcons";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="container-page">
        <p className="section-eyebrow">03 · Projects</p>
        <h2 className="section-heading">Featured projects</h2>
        <p className="section-sub">
          A selection of projects that reflect how I approach building for
          the web — from e-commerce to civic tech.
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="card card-hover overflow-hidden flex flex-col"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-bg border-b border-border">
                <img
                  src={project.image}
                  alt={`Preview of ${project.name}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
              </div>

              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="font-display font-bold text-lg">
                  {project.name}
                </h3>
                <p className="mt-2.5 text-sm text-text-secondary leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[0.68rem] tracking-wide uppercase px-2.5 py-1 rounded-sm bg-bg border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex-1 py-2.5! text-sm"
                    >
                      <GithubIcon size={15} />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 py-2.5! text-sm"
                    >
                       Live Demo
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;