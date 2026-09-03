import { MapPin, GraduationCap, Target, Compass } from "lucide-react";

const infoItems = [
  { icon: MapPin, label: "Location", value: "Trece Martires City, Cavite, PH" },
  {
    icon: GraduationCap,
    label: "Education",
    value: "BS Information Technology, 2026",
  },
  { icon: Target, label: "Specialization", value: "Frontend & Full-Stack Web Dev" },
  { icon: Compass, label: "Current Focus", value: "React, TypeScript, System Design" },
];

const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="container-page">
        <p className="section-eyebrow">01 · About</p>
        <h2 className="section-heading">A little about my approach</h2>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16">
          <div className="space-y-5 text-text-secondary text-base sm:text-[1.05rem] leading-relaxed">
            <p>
              I'm an Information Technology student and developer based in
              Trece Martires City, Cavite, focused on building web
              applications that are as reliable under the hood as they are
              pleasant to use. My work sits at the intersection of frontend
              craft and backend logic. I care about how an interface feels,
              and equally about whether the data behind it is modeled
              correctly.
            </p>
            <p>
              My interest in software started with small class projects and
              grew into a habit of building things end-to-end: designing the
              interface, wiring up the API, and shaping the database that
              supports it. That full-picture curiosity still drives how I
              approach every project.
            </p>
            <p>
              I try to write code the way I'd want to inherit it. typed,
              organized, and easy to reason about. Given a choice between a
              clever shortcut and a clear structure, I'll take the clear
              structure almost every time.
            </p>
            <p>
              Outside of coursework, I enjoy building small tools that solve
              real, local problems like a civic information site for my
              community and contributing to student-led tech initiatives on
              campus.
            </p>
          </div>

          <div className="card p-6 sm:p-8 h-fit">
            <h3 className="font-display font-bold text-lg mb-6">
              At a glance
            </h3>
            <ul className="space-y-5">
              {infoItems.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-bg border border-border text-accent">
                    <Icon size={15} strokeWidth={2} />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-mono text-[0.68rem] tracking-[0.1em] uppercase ">
                      {label}
                    </span>
                    <span className="text-sm font-medium  mt-0.5">
                      {value}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;