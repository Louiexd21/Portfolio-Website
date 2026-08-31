import { Briefcase, MapPin, Calendar } from "lucide-react";
import { experience } from "../data/experience";

const Experience = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-surface border-y border-border">
      <div className="container-page">
        <p className="section-eyebrow">04 · Experience</p>
        <h2 className="section-heading">Experience</h2>
        <p className="section-sub">
          Internship that shaped how I build.
        </p>

        <div className="mt-14 relative">
          <div
            aria-hidden="true"
            className="absolute left-[15px] sm:left-[19px] top-2 bottom-2 w-px bg-border"
          />

          <ol className="space-y-12">
            {experience.map((entry) => (
              <li key={entry.id} className="relative pl-10 sm:pl-14">
                <span className="absolute left-0 top-1 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-navy text-white border-4 border-bg">
                  <Briefcase size={15} strokeWidth={2} />
                </span>

                <div className="card p-6 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display font-bold text-navy text-lg">
                        {entry.role}
                      </h3>
                      <p className="text-accent font-medium text-sm mt-1">
                        {entry.organization}
                      </p>
                    </div>
                    <span className="font-mono text-[0.68rem] tracking-wide uppercase px-2.5 py-1 rounded-sm bg-bg border border-border text-slate shrink-0">
                      {entry.type}
                    </span>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-text-secondary font-mono">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={13} /> {entry.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} /> {entry.location}
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-text-secondary leading-relaxed">
                    {entry.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {entry.responsibilities.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-text-secondary"
                      >
                        <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {entry.technologies.map((tech) => (
                      <span key={tech} className="badge py-1! px-2.5! text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;