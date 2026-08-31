import { ArrowDown, Download, User } from "lucide-react";

import profileImage from "../assets/images/profile.jpg"


const Hero = () => {
  return (
    <section
      id="home"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="container-page grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div className="fade-up">
          <p className="section-eyebrow">Available for opportunities</p>

          <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.08]">
            Hi, I'm Jan Louie Salimbago
          </h1>

          <p className="mt-3 font-mono text-sm sm:text-base text-accent">
            Information Technology Fresh Gradute &amp; Web Developer
          </p>

          <p className="section-sub">
            I build modern, reliable, and user-focused digital experiences
            using React, TypeScript, and modern web technologies — with a
            focus on clean architecture, performance, and thoughtful detail
            from first line of code to final deploy.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
              <ArrowDown size={16} />
            </a>
            <a href="/SALIMBAGO_RESUME_FINAL.pdf" download className="btn-secondary">
              Download Resume
              <Download size={16} />
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm ">
            <span className="font-mono text-xs tracking-wide uppercase">
              Working with
            </span>
            {["React", "TypeScript", "Node.js", "Tailwind CSS"].map((t) => (
              <span key={t} className="font-medium">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="relative fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 border border-border rounded-md -z-10" />
            <div className="aspect-[4/5] w-full rounded-md border border-border bg-surface overflow-hidden flex items-center justify-center shadow-[0_20px_50px_-24px_rgba(15,23,42,0.25)]">
              <div className="flex flex-col items-center gap-3 text-slate/40">
                <User size={64} strokeWidth={1} />
                <span className="font-mono text-xs tracking-wide">
                 <img src={profileImage} alt="profile-photo.jpg" />
                </span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2 rounded-sm border border-border bg-surface px-4 py-2.5 shadow-[0_12px_28px_-16px_rgba(15,23,42,0.3)]">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-mono text-xs ">
                status: open_to_work
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;