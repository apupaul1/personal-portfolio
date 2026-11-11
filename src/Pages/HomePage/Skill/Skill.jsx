import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
  FaCode,
  FaGitAlt,
  FaVial,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiJsonwebtokens,
  SiPostman,
  SiVite,
  SiVercel,
  SiTypescript,
  SiNextdotjs,
  SiBetterstack,
} from "react-icons/si";
import SectionHeading from "../../../components/ui/SectionHeading";
import Reveal from "../../../components/ui/Reveal";
import TiltCard from "../../../components/ui/TiltCard";
import Marquee from "../../../components/ui/Marquee";
import Parallax from "../../../components/ui/Parallax";

const CATEGORIES = [
  {
    title: "Frontend",
    description: "Interfaces that feel fast, fluid and intentional.",
    tone: "cat-frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs, level: 85 },
      { name: "React.js", icon: FaReact, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 88 },
      { name: "TypeScript", icon: SiTypescript, level: 75 },
      { name: "HTML5", icon: FaHtml5, level: 95 },
      { name: "CSS3", icon: FaCss3Alt, level: 92 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "Vite", icon: SiVite, level: 85 },
    ],
  },
  {
    title: "Backend",
    description: "APIs, data models and auth flows built to scale.",
    tone: "cat-backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, level: 86 },
      { name: "Express.js", icon: SiExpress, level: 80 },
      { name: "MongoDB", icon: SiMongodb, level: 76 },
      { name: "Better Auth", icon: SiBetterstack, level: 76 },
      { name: "Firebase", icon: SiFirebase, level: 82 },
      { name: "JWT", icon: SiJsonwebtokens, level: 70 },
      { name: "REST APIs", icon: FaCode, level: 84 },
    ],
  },
  {
    title: "Tools & Craft",
    description: "The workflow that turns ideas into shipped products.",
    tone: "cat-tools",
    skills: [
      { name: "GitHub", icon: FaGithub, level: 90 },
      { name: "VS Code", icon: FaCode, level: 95 },
      { name: "Figma", icon: FaFigma, level: 78 },
      { name: "Postman", icon: SiPostman, level: 86 },
      { name: "Playwright", icon: FaVial, level: 86 },
      { name: "Vercel", icon: SiVercel, level: 84 },
      { name: "Git", icon: FaGitAlt, level: 88 },
    ],
  },
];

const RING_RADIUS = 30;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const EASE = [0.22, 1, 0.36, 1];

const SkillRing = ({ skill, index }) => {
  const Icon = skill.icon;
  const gradientId = `ring-${skill.name.replace(/[^a-z0-9]/gi, "")}`;

  return (
    <div className="group/skill flex flex-col items-center gap-2.5">
      <div className="relative h-[78px] w-[78px]">
        <div
          className="absolute inset-1 rounded-full opacity-0 blur-md transition-opacity duration-500 group-hover/skill:opacity-60"
          style={{
            background:
              "radial-gradient(circle, var(--cat-from), transparent 70%)",
          }}
        />
        <svg viewBox="0 0 78 78" className="h-full w-full -rotate-90">
          <circle
            cx="39"
            cy="39"
            r={RING_RADIUS}
            stroke="var(--hairline-strong)"
            strokeWidth="5"
            fill="none"
          />
          <motion.circle
            cx="39"
            cy="39"
            r={RING_RADIUS}
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={RING_CIRCUMFERENCE}
            initial={{ strokeDashoffset: RING_CIRCUMFERENCE }}
            whileInView={{
              strokeDashoffset: RING_CIRCUMFERENCE * (1 - skill.level / 100),
            }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{
              duration: 1.5,
              delay: 0.15 + index * 0.08,
              ease: EASE,
            }}
          />
          <defs>
            <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--cat-from)" />
              <stop offset="100%" stopColor="var(--cat-to)" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-display text-[0.72rem] font-semibold text-strong">
            {skill.level}%
          </span>
        </div>
      </div>

      <span className="flex items-center gap-1.5 text-center text-[0.7rem] font-medium text-muted transition-colors duration-300 group-hover/skill:text-strong">
        <Icon className="shrink-0 text-[0.85rem] opacity-80" />
        {skill.name}
      </span>
    </div>
  );
};

const Skill = () => {
  const allSkills = CATEGORIES.flatMap((category) =>
    category.skills.map((skill) => ({ ...skill, tone: category.tone })),
  );

  return (
    <section id="skills" className="relative py-24 sm:py-28 lg:py-18">
      {/* subtle section glow */}
      <Parallax
        aria-hidden="true"
        from={50}
        to={-50}
        className="pointer-events-none absolute left-[calc(50%-18rem)] top-24 h-72 w-[36rem]"
      >
        <div className="h-full w-full rounded-full bg-accent-2/[0.08] blur-[120px]" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <SectionHeading
          eyebrow="Skills"
          title={
            <>
              A toolkit tuned for building{" "}
              <span className="text-gradient">end-to-end products.</span>
            </>
          }
          description="From the first pixel to the final API response — these are the tools I reach for most, and how comfortable I am with each."
        />

        {/* Tech marquee */}
        <Reveal delay={0.15} className="mt-12">
          <Marquee duration={42} className="border-y border-hairline py-5">
            {allSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <span
                  key={skill.name}
                  className={`mx-5 flex items-center gap-2.5 font-mono text-[0.68rem] uppercase tracking-[0.18em] text-subtle transition-colors hover:text-strong ${skill.tone}`}
                >
                  <Icon
                    className="text-lg"
                    style={{ color: "var(--cat-from)" }}
                  />
                  {skill.name}
                  <span className="ml-5 h-1 w-1 rounded-full bg-hairline-strong" />
                </span>
              );
            })}
          </Marquee>
        </Reveal>

        {/* Category cards */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {CATEGORIES.map((category, categoryIndex) => (
            <Reveal key={category.title} delay={0.08 * categoryIndex} y={26}>
              <TiltCard className="h-full" max={5}>
                <article
                  className={`group surface-card relative h-full overflow-hidden rounded-[1.75rem] p-6 transition-colors duration-500 hover:border-hairline-strong sm:p-7 ${category.tone}`}
                >
                  <div
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-[70px]"
                    style={{ background: "var(--cat-from)" }}
                  />
                  <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-hairline-strong to-transparent" />

                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[var(--cat-from)] to-[var(--cat-to)]" />
                        <h3 className="cat-text font-display text-xl font-semibold">
                          {category.title}
                        </h3>
                      </div>
                      <p className="mt-2 max-w-[16rem] text-[0.8rem] leading-relaxed text-muted">
                        {category.description}
                      </p>
                    </div>
                    <span className="rounded-full border border-hairline bg-surface px-2.5 py-1 font-mono text-[0.6rem] text-muted">
                      {String(category.skills.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mt-7 grid grid-cols-2 gap-x-2 gap-y-6 sm:grid-cols-3">
                    {category.skills.map((skill, index) => (
                      <SkillRing key={skill.name} skill={skill} index={index} />
                    ))}
                  </div>
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* Also comfortable with */}
        <Reveal delay={0.1} className="mt-8">
          <div className="flex flex-col gap-4 rounded-2xl border border-hairline bg-surface p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent">
                <FaCode />
              </span>
              <p className="text-sm text-fg">
                Also comfortable with{" "}
                <span className="text-subtle">modern full-stack tooling</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "HeroUI",
                "AntD",
                "TanStack Query",
                "Mongoose",
                "Stripe",
                "Playwright",
                "SSLCOMMERZ",
              ].map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-hairline bg-surface px-3 py-1.5 text-[0.68rem] font-medium text-muted transition-colors duration-300 hover:border-accent/30 hover:text-accent"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Skill;
