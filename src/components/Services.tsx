import { Code2, LayoutTemplate, ShoppingCart, Database } from "lucide-react";
import { services } from "../data/education";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  LayoutTemplate,
  ShoppingCart,
  Database,
};

const Services = () => {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-page">
        <p className="section-eyebrow">07 · Services</p>
        <h2 className="section-heading">What I can do</h2>
        <p className="section-sub">
          A focused set of services centered on building and shipping
          complete web products.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Code2;
            return (
              <div key={service.id} className="card card-hover p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-sm bg-navy text-white mb-5">
                  <Icon size={19} strokeWidth={1.75} />
                </span>
                <h3 className="font-display font-bold text-navy text-base">
                  {service.title}
                </h3>
                <p className="text-sm text-text-secondary mt-2.5 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;