import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedinIn,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import { HiOutlineMenuAlt4, HiOutlineX } from "react-icons/hi";
import ThemeToggle from "../../components/ui/ThemeToggle";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/apupaul1", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/apupaul1/",
    icon: FaLinkedinIn,
  },
];

const EASE = [0.22, 1, 0.36, 1];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }

    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id),
    ).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const goToSection = (event, id) => {
    event.preventDefault();
    setOpen(false);

    if (pathname !== "/") {
      navigate("/");
      window.setTimeout(() => {
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 140);
      return;
    }

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <>
      <header className="site-header sticky top-0 z-50 w-full">
        <div
          className={`mx-auto flex items-center justify-between gap-3 px-4 transition-all duration-500 sm:px-6 ${
            scrolled ? "mt-3 max-w-6xl" : "mt-0 max-w-7xl"
          }`}
        >
          <div
            className={`flex w-full items-center justify-between gap-3 rounded-full px-3 py-2.5 transition-all duration-500 sm:px-4 ${
              scrolled
                ? "glass-strong shadow-[0_20px_60px_-30px_rgba(2,6,23,0.45)]"
                : "border border-transparent bg-transparent"
            }`}
          >
            {/* Brand */}
            <Link
              to="/"
              className="group flex items-center gap-3 rounded-full pr-2"
              aria-label="Apu Paul — home"
            >
              <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-soft via-accent-4 to-accent-2 text-[0.78rem] font-bold text-accent-fg shadow-lg shadow-accent/25 transition-transform duration-500 group-hover:rotate-[-6deg]">
                AP
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full border-2 border-page bg-positive" />
              </span>
              <span className="flex flex-col leading-none">
                <span className="font-display text-[0.95rem] font-semibold tracking-tight text-strong">
                  Apu Paul
                </span>
                <span className="mt-1 font-mono text-[0.58rem] uppercase tracking-[0.22em] text-muted">
                  Full Stack Dev
                </span>
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:block" aria-label="Primary">
              <ul className="flex items-center gap-1 rounded-full border border-hairline bg-surface p-1">
                {NAV_ITEMS.map((item) => {
                  const isActive = active === item.id && pathname === "/";
                  return (
                    <li key={item.id} className="relative">
                      <a
                        href={`#${item.id}`}
                        onClick={(event) => goToSection(event, item.id)}
                        className={`relative isolate inline-flex items-center rounded-full px-4 py-2 text-[0.82rem] font-medium transition-colors duration-300 ${
                          isActive
                            ? "text-strong"
                            : "text-muted hover:text-strong"
                        }`}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="nav-active-pill"
                            className="absolute inset-0 -z-10 rounded-full border border-accent/20 bg-gradient-to-r from-accent/15 to-accent-2/15"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 32,
                            }}
                          />
                        )}
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <ThemeToggle className="hidden sm:grid" />

              <div className="hidden items-center gap-1 md:flex">
                {SOCIALS.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group grid h-9 w-9 place-items-center rounded-full border border-hairline bg-surface text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/35 hover:text-accent"
                  >
                    <Icon className="text-[0.85rem]" />
                  </a>
                ))}
              </div>

              <Link
                to="https://drive.google.com/file/d/1e2xC7Nv_tIqHx5_XG_SF1R_O9y39Ffx1/view?usp=sharing"
                target="_blank"
                className="shine group hidden items-center gap-2 rounded-full bg-gradient-to-r from-accent-soft via-accent to-accent-4 px-4 py-2.5 text-[0.78rem] font-bold text-accent-fg shadow-lg shadow-accent/25 transition-shadow duration-300 hover:shadow-xl hover:shadow-accent/30 sm:inline-flex"
              >
                Resume
                <FaArrowUpRightFromSquare className="text-[0.65rem] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface text-fg transition-colors hover:border-accent/35 hover:text-accent lg:hidden"
              >
                {open ? (
                  <HiOutlineX className="text-xl" />
                ) : (
                  <HiOutlineMenuAlt4 className="text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div
              className="absolute inset-0 z-0 bg-overlay backdrop-blur-2xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              aria-label="Mobile"
              className="relative z-10 flex h-full flex-col justify-between gap-6 overflow-y-auto overscroll-contain px-6 pb-8 pt-24"
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <ul className="space-y-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 * index + 0.1,
                      duration: 0.45,
                      ease: EASE,
                    }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(event) => goToSection(event, item.id)}
                      className="group flex items-baseline justify-between border-b border-hairline py-3.5"
                    >
                      <span className="font-display text-2xl font-medium text-strong transition-colors group-hover:text-accent sm:text-3xl">
                        {item.label}
                      </span>
                      <span className="font-mono text-[0.65rem] text-subtle">
                        0{index + 1}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="space-y-4">
                <Link
                  to="https://drive.google.com/file/d/1e2xC7Nv_tIqHx5_XG_SF1R_O9y39Ffx1/view?usp=sharing"
                  target="_blank"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent-soft to-accent-4 py-3.5 text-sm font-bold text-accent-fg"
                >
                  View resume
                  <FaArrowUpRightFromSquare className="text-xs" />
                </Link>

                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-subtle">
                    Dhaka · Bangladesh
                  </span>
                  <div className="flex gap-2">
                    {SOCIALS.map(({ label, href, icon: Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface text-muted transition-colors hover:border-accent/35 hover:text-accent"
                      >
                        <Icon />
                      </a>
                    ))}
                    <ThemeToggle />
                  </div>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
