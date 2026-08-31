import { GraduationCap, Award, BookOpen } from "lucide-react";
import { education } from "../data/education";

const Education = () => {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="container-page">
        <p className="section-eyebrow">05 · Education</p>
        <h2 className="section-heading">Education</h2>

        <div className="mt-14 space-y-6">
          {education.map((entry) => (
            <div
              key={entry.degree}
              className="card p-7 sm:p-9 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-sm bg-navy text-white shrink-0">
                <GraduationCap size={26} strokeWidth={1.75} />
              </span>

              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display font-bold  text-xl">
                    {entry.degree}
                  </h3>
                  <span className="font-mono text-sm text-accent">
                    {entry.graduationYear}
                  </span>
                </div>
                <p className=" mt-1.5 font-medium">
                  {entry.institution}
                </p>
                <p className="text-sm  mt-0.5">{entry.location}</p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase  mb-3">
                      <Award size={14} className="text-accent" />
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {entry.achievements.map((a) => (
                        <li key={a} className="text-sm text-text-secondary flex gap-2.5">
                          <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="flex items-center gap-2 font-mono text-xs tracking-[0.1em] uppercase  mb-3">
                      <BookOpen size={14} className="text-accent" />
                      Relevant Coursework
                    </h4>
                    <ul className="space-y-2">
                      {entry.coursework.map((c) => (
                        <li key={c} className="text-sm text-text-secondary flex gap-2.5">
                          <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;