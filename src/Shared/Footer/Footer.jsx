import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import Parallax from "../../components/ui/Parallax";

const LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Contact", id: "contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/apupaul1", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/apupaul1/",
    icon: FaLinkedinIn,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/apu.paul.334839/",
    icon: FaFacebookF,
  },
];

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="site-footer relative overflow-hidden border-t border-hairline">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <Parallax
        aria-hidden="true"
        from={40}
        to={-40}
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72"
      >
        <div className="h-full w-full rounded-full bg-accent/10 blur-[110px]" />
      </Parallax>
      <Parallax
        aria-hidden="true"
        from={-30}
        to={30}
        className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64"
      >
        <div className="h-full w-full rounded-full bg-accent-2/10 blur-[110px]" />
      </Parallax>

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="group inline-flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-accent-soft via-accent-4 to-accent-2 text-sm font-bold text-accent-fg shadow-lg shadow-accent/20 transition-transform duration-500 group-hover:rotate-[-6deg]">
                AP
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-lg font-semibold text-strong">
                  Apu Paul
                </span>
                <span className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.24em] text-subtle">
                  Full Stack Developer
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              I design and build fast, accessible web products — from polished
              interfaces to the APIs and data models behind them.
            </p>

            <div className="mt-6 flex items-center gap-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3 }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface text-muted transition-colors duration-300 hover:border-accent/35 hover:text-accent"
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-subtle">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <Link
                    to={`/#${link.id}`}
                    className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-strong"
                  >
                    <span className="h-px w-4 bg-hairline-strong transition-all duration-300 group-hover:w-6 group-hover:bg-accent" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/resume"
                  className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-300 hover:text-strong"
                >
                  <span className="h-px w-4 bg-hairline-strong transition-all duration-300 group-hover:w-6 group-hover:bg-accent" />
                  Résumé
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-subtle">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href="mailto:apupaul.dev@gmail.com"
                  className="group inline-flex items-start gap-3 text-muted transition-colors hover:text-strong"
                >
                  <FaEnvelope className="mt-1 text-accent/80" />
                  <span>
                    apupaul.dev@gmail.com
                    <span className="mt-1 flex items-center gap-1 text-[0.7rem] text-subtle transition-colors group-hover:text-accent">
                      Say hello <HiOutlineArrowUpRight />
                    </span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted">
                <FaMapMarkerAlt className="mt-1 text-accent/80" />
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 sm:flex-row">
          <p className="text-center text-xs text-subtle sm:text-left">
            © {new Date().getFullYear()} Apu Paul. Crafted with React, Tailwind
            &amp; Framer Motion.
          </p>

          <motion.button
            type="button"
            onClick={scrollTop}
            whileHover={{ y: -2 }}
            className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted transition-colors duration-300 hover:border-accent/35 hover:text-accent"
          >
            Back to top
            <span className="grid h-6 w-6 place-items-center rounded-full bg-surface-hover transition-colors group-hover:bg-accent/20">
              <FaArrowUp className="text-[0.6rem]" />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
