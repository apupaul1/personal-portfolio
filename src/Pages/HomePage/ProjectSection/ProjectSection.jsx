import { Link } from "react-router";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../../../components/ui/SectionHeading";
import Reveal from "../../../components/ui/Reveal";
import TiltCard from "../../../components/ui/TiltCard";
import Parallax from "../../../components/ui/Parallax";
import ParallaxMedia from "../../../components/ui/ParallaxMedia";

const PROJECTS = [
  {
    id: "dailymart",
    name: "DailyMart",
    tagline:
      "A live marketplace where vendors publish daily prices and shoppers compare in real time.",
    year: "2025",
    tags: [
      "React",
      "Tailwind",
      "Javascript",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Stripe",
    ],
    image:
      "https://iad.microlink.io/d797-5mRL3DQUNnC66_qWs7YtPnfHpphPiSmZPM8Cg7ANh-e6-L_l5iTfrcZ3YN-9R-C4NupX5lkXzueTYZEJw.png",
    tone: "feat-teal",
  },
  {
    id: "krishilink",
    name: "KrishiLink",
    tagline:
      "A modern agricultural marketplace that connects farmers directly with customers for a transparent and efficient buying experience",
    year: "2026",
    tags: ["React", "Typescript", "Express.js", "MongoDB", "Stripe"],
    image:
      "https://iad.microlink.io/R5ZxKw4LiXXp9dytXkXyLmhDKLTS3dd9uzqdo6psuQ45W18kGjVIoPbjUjdplxG0LOOX_FwOdaZ-SSo2g3iyig.png",
    tone: "feat-teal",
  },
  {
    id: "booknook",
    name: "BookNook",
    tagline:
      "A book borrowing platform where readers discover new titles, share books their own books, and can borrow books.",
    year: "2026",
    tags: [
      "Next.js",
      "Typescript",
      "BetterAuth",
      "Express.js",
      "MongoDB",
      "Framer Motion",
    ],
    image:
      "https://iad.microlink.io/CdXqEWysoS0JJLtP9D3Yoruev5y5HrC3_NkF4cXzrtmmLflOQW_DFpRoBDP7qzSBKIuJs6qickbBKgJkxgdMvw.png",
    tone: "feat-indigo",
  },
  {
    id: "aurelle",
    name: "Aurelle",
    tagline:
      "Animation-Rich beauty product landing page for modern interactive brand promotion",
    year: "2026",
    tags: ["Next.js", "Tailwind", "React Three", "GSAP", "Framer Motion"],
    image:
      "https://i.ibb.co.com/yBBXtZF0/screencapture-aurelle-ruddy-three-vercel-app-2026-11-11-11-03-47-edit.png",
    tone: "feat-indigo",
  },
  {
    id: "bazardor",
    name: "BazarDor",
    tagline:
      "A web application that helps users explore daily prices of essential products in Bangladesh.",
    year: "2026",
    tags: ["Next.js", "Tailwind", "HeroUI", "MongoDB", "BetterAuth"],
    image:
      "https://iad.microlink.io/6HqFVHaTTYfjbsqP3ZljYQQmN0NPqa63oB7j47G6fgSHWpZehwDY3DloT3x37ldGLaYLuVofx9Rj6EWGL6Ljbg.png",
    tone: "feat-amber",
  },
  {
    id: "medical",
    name: "Phudu",
    tagline:
      "A healthcare booking experience that connects patients with the right doctor, fast.",
    year: "2024",
    tags: ["React", "Tailwind", "Javascript", "Recharts", "React Router"],
    image: "https://i.ibb.co.com/0psnDLbF/Phudu.jpg",
    tone: "feat-amber",
  },
];

const ProjectSection = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-28 lg:py-32">
      <Parallax
        aria-hidden="true"
        from={50}
        to={-50}
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80"
      >
        <div className="h-full w-full rounded-full bg-accent-3/[0.07] blur-[120px]" />
      </Parallax>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Selected work"
            title={
              <>
                Projects built to solve{" "}
                <span className="text-gradient">real problems.</span>
              </>
            }
            description="Three end-to-end products spanning commerce, community and healthcare — each shipped with auth, data and a considered interface."
          />
          <Reveal delay={0.2} className="shrink-0">
            <span className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-subtle">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              06 case studies
            </span>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={0.09 * index} y={30}>
              <TiltCard className="h-full" max={6}>
                <article
                  className={`group relative h-full overflow-hidden rounded-[1.6rem] border border-hairline bg-surface p-2.5 transition-colors duration-500 hover:border-accent/25 hover:bg-surface-hover ${project.tone}`}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[1.2rem] bg-elevated">
                    <ParallaxMedia
                      src={project.image}
                      alt={`${project.name} preview`}
                      amount={8}
                      imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-page via-page/10 to-transparent opacity-90" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-hairline-strong" />

                    <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[0.58rem] uppercase tracking-[0.18em] text-white/80 backdrop-blur-md">
                      0{index + 1}
                    </span>
                    <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 font-mono text-[0.58rem] text-white/70 backdrop-blur-md">
                      {project.year}
                    </span>

                    <div className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between gap-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.68rem] font-medium text-white backdrop-blur-md">
                        View case study
                      </span>
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-fg">
                        <FiArrowUpRight />
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-4 pb-3">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-display text-xl font-semibold text-strong transition-colors duration-300 group-hover:text-accent-soft">
                        {project.name}
                      </h3>
                      <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-hairline text-muted transition-all duration-500 group-hover:rotate-45 group-hover:border-accent/30 group-hover:text-accent">
                        <HiOutlineArrowUpRight className="text-sm" />
                      </span>
                    </div>

                    <p className="mt-2 line-clamp-2 text-[0.8rem] leading-relaxed text-muted">
                      {project.tagline}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-hairline bg-surface px-2.5 py-1 text-[0.62rem] font-medium text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-[var(--feat-from)] to-[var(--feat-to)] opacity-0 transition-opacity duration-500 group-hover:opacity-60" />

                  <Link
                    to={`/project/${project.id}`}
                    aria-label={`View ${project.name} case study`}
                    className="absolute inset-0 z-30 rounded-[1.6rem]"
                  />
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
