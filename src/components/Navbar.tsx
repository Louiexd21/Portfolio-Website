import { useEffect, useState } from "react";
import { Menu, X, Terminal } from "lucide-react";
import { navItems } from "../data/education";
import { useTheme } from "../hooks/useTheme";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/images/louie_logo.png"

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-sm border-b border-border shadow-[0_1px_0_0_rgba(15,23,42,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="container-page flex items-center justify-between h-16 sm:h-18" aria-label="Primary">
        <a
          href="#home"
          className="flex items-center gap-2 font-display font-bold text-heading text-lg tracking-tight"
        >
          <span className="flex h-15 w-15 items-center justify-center rounded-sm text-white">
            <img src={logo} alt="" />
          </span>
          Jan Louie Salimbago
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary">
          Let's Connect
        </a>

        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} onToggle={toggleTheme} className="hidden md:inline-flex" />

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-heading"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-surface">
          <ul className="container-page flex flex-col py-4 gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-text-secondary border-b border-border/60 last:border-none"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-3 flex items-center gap-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn-primary flex-1"
              >
                Let's Connect
              </a>
              <ThemeToggle theme={theme} onToggle={toggleTheme} />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;