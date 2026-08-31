import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";
import logo from '../assets/images/louie_logo.png'

const socials = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/Louiexd21" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "linkedin.com/in/jan-louie-salimbago-895290313" },
  { icon: Mail, label: "Email", href: "mailto:salimbagojanlouie02@gmail.com" },
];

const Footer = () => {
  return (
    <footer className="bg-navy text-white/70 border-t border-white/10">
      <div className="container-page py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <a href="#home" className="flex items-center gap-2 font-display font-bold text-white text-lg">
            <span className="flex  items-center justify-center rounded-sm bg-white text-white">
              <img src={logo} className="h-7 w-10" alt="" />
            </span>
            Jan Louie Salimbago
          </a>
          <p className="text-sm mt-2.5 text-white/50">
            Information Technology Fresh Graduate &amp; Web Developer
          </p>
        </div>

        <div className="flex items-center gap-3">
          {socials.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
            >
              <Icon size={16} strokeWidth={1.75} />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 text-xs text-white/40 font-mono">
          © 2026 Jan Louie Salimbago. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;