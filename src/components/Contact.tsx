import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../icons/BrandIcons";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = { name: "", email: "", subject: "", message: "" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactLinks = [
  { icon: Mail, label: "Email", value: "salimbagojanlouie02@gmail.com", href: "mailto:salimbagojanlouie02@gmail.com" },
  { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/jan-louie-salimbago-895290313", href: "https://linkedin.com/in/jan-louie-salimbago-895290313" },
  { icon: GithubIcon, label: "GitHub", value: "github.com/Louiexd21", href: "https://github.com/Louiexd21" },
  { icon: MapPin, label: "Location", value: "Trece Martires City, Cavite, PH", href: undefined },
];

const Contact = () => {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!emailPattern.test(values.email)) next.email = "Enter a valid email address.";
    if (!values.subject.trim()) next.subject = "Please add a subject.";
    if (!values.message.trim()) next.message = "Please write a message.";
    else if (values.message.trim().length < 10)
      next.message = "Message should be at least 10 characters.";
    return next;
  };

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-navy text-white">
      <div className="container-page">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent inline-flex items-center gap-2">
          <span className="inline-block w-[18px] h-px bg-accent" />
          08 · Contact
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
          Let's build something meaningful
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed">
          I'm currently open to internships, freelance projects, and
          full-time opportunities. Whether you're a recruiter, a company, or
          a fellow builder with an idea — I'd love to hear from you.
        </p>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12">
          <ul className="space-y-5">
            {contactLinks.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-white/15 text-accent">
                    <Icon size={17} strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block font-mono text-[0.68rem] tracking-[0.1em] uppercase text-white/45">
                      {label}
                    </span>
                    <span className="block text-sm font-medium mt-0.5">{value}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-4 rounded-sm border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent/50 hover:bg-white/[0.06]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-sm border border-white/10 bg-white/[0.03] p-4">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <form
            noValidate
            onSubmit={handleSubmit}
            className="rounded-md border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >
            {submitted && (
              <div className="mb-6 flex items-center gap-2.5 rounded-sm border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-white">
                <CheckCircle2 size={16} className="text-accent shrink-0" />
                Message sent. I'll get back to you soon.
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-mono tracking-wide uppercase text-white/60 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange("name")}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full rounded-sm border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent outline-none transition-colors"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-red-300">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono tracking-wide uppercase text-white/60 mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full rounded-sm border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent outline-none transition-colors"
                  placeholder="you@email.com"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-red-300">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="block text-xs font-mono tracking-wide uppercase text-white/60 mb-2">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={handleChange("subject")}
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                className="w-full rounded-sm border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent outline-none transition-colors"
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1.5 text-xs text-red-300">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="block text-xs font-mono tracking-wide uppercase text-white/60 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange("message")}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className="w-full resize-none rounded-sm border border-white/15 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-accent outline-none transition-colors"
                placeholder="Tell me a bit about the opportunity or project..."
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-red-300">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-sm bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover w-full sm:w-auto"
            >
              Send Message
              <Send size={15} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;