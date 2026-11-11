import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { HiOutlineLocationMarker, HiOutlineSparkles } from "react-icons/hi";
import { FiArrowDownRight } from "react-icons/fi";
import MagneticButton from "../../../components/ui/MagneticButton";
import AnimatedCounter from "../../../components/ui/AnimatedCounter";
import Parallax from "../../../components/ui/Parallax";

const ROLES = [
  "Full Stack Developer",
  "React Specialist",
  "MERN Engineer",
  "UI Craftsman",
];

const STATS = [
  { value: 13, suffix: "+", label: "Products shipped" },
  { value: 12, suffix: "+", label: "Technologies" },
  { value: 5, suffix: "+", label: "Years coding" },
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

const EASE = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2800);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-10 sm:pt-16 lg:min-h-[calc(100svh-5rem)] lg:pt-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 sm:px-8 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 lg:px-10">
        {/* ---------- Copy ---------- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/10 px-3.5 py-1.5 text-[0.7rem] font-medium tracking-wide text-accent-soft">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-positive" />
              </span>
              Open to opportunities
              <HiOutlineSparkles className="text-accent" />
            </span>
          </motion.div>

          <motion.p variants={item} className="eyebrow mt-8">
            Hi, I&apos;m Apu Paul
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-4 text-balance font-display text-[2.6rem] font-semibold leading-[1.02] tracking-[-0.04em] text-strong sm:text-6xl lg:text-[3.15rem]"
          >
            Full-stack developer crafting{" "}
            <span className="text-gradient">digital experiences</span> that feel
            alive.
          </motion.h1>

          <motion.div variants={item} className="mt-6 flex items-center gap-3">
            <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
            <span className="font-mono text-[0.76rem] uppercase tracking-[0.22em] text-muted">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={ROLES[roleIndex]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="inline-block text-accent-soft"
                >
                  {ROLES[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:text-base"
          >
            I turn complex problems into clean, scalable products — pairing
            thoughtful interface design with solid Express.js APIs, secure auth and
            payment flows.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-7 flex items-center gap-2 text-sm text-subtle"
          >
            <HiOutlineLocationMarker className="text-base text-accent" />
            Dhaka, Bangladesh
            <span className="mx-2 h-1 w-1 rounded-full bg-hairline-strong" />
            Remote friendly
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton to="/#projects" variant="primary">
              Explore my work
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>
            <MagneticButton
              href="/Resume_ApuPaul.pdf"
              download="Resume_ApuPaul.pdf"
              variant="secondary"
            >
              <FaDownload className="text-xs" />
              Download CV
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-9 flex items-center gap-4">
            <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-subtle">
              Find me
            </span>
            <span className="h-px w-6 bg-hairline-strong" />
            <div className="flex items-center gap-2">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -4 }}
                  className="grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface text-muted backdrop-blur transition-colors duration-300 hover:border-accent/40 hover:text-accent"
                >
                  <Icon className="text-sm" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.dl
            variants={item}
            className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-hairline pt-6"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-semibold text-strong sm:text-[1.75rem]">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </dd>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-subtle">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* ---------- Visual ---------- */}
        <Parallax
          from={0}
          to={-130}
          offset={["start start", "end center"]}
          className="relative mx-auto w-full max-w-[26rem] lg:max-w-[30rem]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
            className="relative"
          >
            {/* halo */}
            <div className="hero-halo pointer-events-none absolute inset-[-12%] rounded-full opacity-60 blur-3xl pulse-glow" />

            {/* orbit rings */}
            <div className="pointer-events-none absolute inset-[-6%] rounded-full border border-hairline spin-slow" />
            <div className="pointer-events-none absolute inset-[4%] rounded-full border border-dashed border-accent/20 spin-slow-reverse" />

            {/* portrait */}
            <div className="relative aspect-[4/4.6] overflow-hidden rounded-[2.4rem] border border-hairline-strong bg-gradient-to-b from-surface to-surface/40 p-1.5 shadow-2xl shadow-accent/20">
              <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-elevated">
                <img
                  src="https://i.ibb.co.com/n8bWdKkL/file-00000000a4188211bcf96d20a2d07685.png"
                  alt="Portrait of Apu Paul"
                  loading="eager"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-hairline-strong" />

                {/* name plate */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/15 bg-black/40 px-4 py-3 backdrop-blur-xl">
                  <div>
                    <p className="font-display text-sm font-semibold text-white">
                      Apu Paul
                    </p>
                    <p className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-teal-200/80">
                      MERN · Next.js
                    </p>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-teal-300/15 text-teal-200">
                    <FiArrowDownRight />
                  </span>
                </div>
              </div>
            </div>

            {/* floating tech chips */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 top-[18%] flex items-center gap-2 rounded-2xl border border-hairline bg-popover px-3 py-2.5 shadow-xl shadow-black/10 backdrop-blur-xl sm:-left-8"
            >
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-accent-4/15 text-accent-4">
                <SiNextdotjs className="text-lg" />
              </span>
              <div className="leading-tight">
                <p className="text-[0.72rem] font-semibold text-strong">
                  Next.js
                </p>
                <p className="text-[0.58rem] text-muted">Frontend</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6,
              }}
              className="absolute -right-3 top-[42%] flex items-center gap-2 rounded-2xl border border-hairline bg-popover px-3 py-2.5 shadow-xl shadow-black/10 backdrop-blur-xl sm:-right-7"
            >
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-positive/15 text-positive">
                <FaNodeJs className="text-lg" />
              </span>
              <div className="leading-tight">
                <p className="text-[0.72rem] font-semibold text-strong">
                  Node.js
                </p>
                <p className="text-[0.58rem] text-muted">Backend</p>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.1,
              }}
              className="absolute -bottom-5 left-6 flex items-center gap-2 rounded-2xl border border-hairline bg-popover px-3.5 py-2.5 shadow-xl shadow-black/10 backdrop-blur-xl"
            >
              <div className="flex -space-x-1.5">
                {[SiNextdotjs, SiMongodb, SiTailwindcss].map((Icon, index) => (
                  <span
                    key={index}
                    className="grid h-7 w-7 place-items-center rounded-full border border-hairline bg-elevated text-[0.7rem] text-muted"
                  >
                    <Icon />
                  </span>
                ))}
              </div>
              <p className="text-[0.62rem] font-medium text-fg">
                Full-stack toolkit
              </p>
            </motion.div>
          </motion.div>
        </Parallax>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-subtle transition-colors hover:text-accent lg:flex"
      >
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.3em]">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-hairline-strong">
          <motion.span
            animate={{ y: [-16, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-accent to-transparent"
          />
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
