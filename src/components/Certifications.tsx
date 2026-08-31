import { useState } from "react";
import { Award, Trophy, Medal, BadgeCheck, Maximize2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { certifications } from "../data/education";
import Lightbox from "./LightBox";


const typeIcons: Record<string, LucideIcon> = {
  Certification: BadgeCheck,
  Award: Award,
  Hackathon: Trophy,
  Achievement: Medal,
};

const Certifications = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const activeCert = certifications.find((c) => c.id === activeId) ?? null;

  return (
    <section className="py-20 sm:py-28 bg-surface border-y border-border">
      <div className="container-page">
        <p className="section-eyebrow">06 · Recognition</p>
        <h2 className="section-heading">Certifications &amp; achievements</h2>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => {
            const Icon = typeIcons[cert.type] ?? Award;
            const hasImage = Boolean(cert.image) && !brokenImages[cert.id];

            return (
              <div key={cert.id} className="card card-hover overflow-hidden flex flex-col">
                {hasImage ? (
                  <button
                    type="button"
                    onClick={() => setActiveId(cert.id)}
                    aria-label={`View full certificate: ${cert.title}`}
                    className="group relative aspect-[4/3] w-full overflow-hidden border-b border-border bg-bg cursor-pointer"
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      loading="lazy"
                      onError={() =>
                        setBrokenImages((prev) => ({ ...prev, [cert.id]: true }))
                      }
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-navy/0 transition-colors duration-200 group-hover:bg-navy/50">
                      <span className="flex items-center gap-1.5 rounded-sm bg-white/95 px-3 py-1.5 text-xs font-semibold text-navy opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <Maximize2 size={13} />
                        View certificate
                      </span>
                    </span>
                  </button>
                ) : null}

                <div className="p-6 flex-1">
                  <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-bg border border-border text-accent mb-4">
                    <Icon size={18} strokeWidth={1.75} />
                  </span>
                  <p className="font-mono text-[0.65rem] tracking-[0.1em] uppercase text-text-secondary/60">
                    {cert.type}
                  </p>
                  <h3 className="font-display font-bold text-heading text-base mt-1.5 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-text-secondary mt-2">{cert.issuer}</p>
                  <p className="font-mono text-xs text-text-secondary/60 mt-1">{cert.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeCert && activeCert.image && (
        <Lightbox
          src={activeCert.image}
          alt={`${activeCert.title} certificate`}
          caption={`${activeCert.title} — ${activeCert.issuer}`}
          onClose={() => setActiveId(null)}
        />
      )}
    </section>
  );
};

export default Certifications;