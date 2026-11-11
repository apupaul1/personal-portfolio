import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "framer-motion";
import {
  FaGlobe,
  FaGithub,
  FaTools,
  FaInfoCircle,
  FaExclamationTriangle,
  FaLightbulb,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import AuroraBackground from "../../../components/ui/AuroraBackground";
import ScrollProgress from "../../../components/ui/ScrollProgress";
import CursorGlow from "../../../components/ui/CursorGlow";
import Reveal from "../../../components/ui/Reveal";
import MagneticButton from "../../../components/ui/MagneticButton";
import ParallaxMedia from "../../../components/ui/ParallaxMedia";
import ThemeToggle from "../../../components/ui/ThemeToggle";

const PROJECT_DETAILS = {
  dailymart: {
    name: "DailyMart",
    tagline: "Real-time local market prices, one transparent marketplace.",
    year: "2025",
    role: "Full-stack · Solo build",
    status: "Live",
    image:
      "https://iad.microlink.io/d797-5mRL3DQUNnC66_qWs7YtPnfHpphPiSmZPM8Cg7ANh-e6-L_l5iTfrcZ3YN-9R-C4NupX5lkXzueTYZEJw.png",
    stack: [
      "React",
      "Firebase Auth",
      "MongoDB",
      "Express",
      "Tailwind",
      "JWT",
      "Stripe",
    ],
    description:
      "DailyMart is a dynamic marketplace web application aimed at providing users with real-time price updates for essential products across local markets. Vendors submit daily price data, which users can browse, track, and compare to make informed purchasing decisions. The platform offers product listings with detailed market and vendor information, price trend visualizations using interactive charts, user reviews, watchlists for favourite products, and seamless purchase integration via Stripe. Role-based dashboards empower vendors to manage product entries and advertisements, while admins oversee user roles and approvals with enhanced control features. The app incorporates JWT-based authentication, responsive design with Tailwind CSS, and smooth animations with Framer Motion, ensuring an engaging user experience on all devices. It serves as a transparent and efficient tool bridging vendors and consumers in local markets.",
    live: "https://dailymart-c81a5.web.app/",
    github: "https://github.com/apupaul1/daily-mart",
    challenges:
      "Managing dynamic routes and keeping the UI in sync with changing backend data was the hardest part — solved with cache-aware queries and defensive loading states.",
    future:
      "Add in-app notifications, real-time chat between buyers and vendors, and a mobile app for price scanning.",
  },

  krishilink: {
    name: "KrishiLink",
    tagline: "A marketplace that connects farmers directly with customers.",
    year: "2026",
    role: "Full-stack · Solo build",
    status: "Live",
    image:
      "https://iad.microlink.io/R5ZxKw4LiXXp9dytXkXyLmhDKLTS3dd9uzqdo6psuQ45W18kGjVIoPbjUjdplxG0LOOX_FwOdaZ-SSo2g3iyig.png",
    stack: [
      "React",
      "TailwindCSS",
      "Typescript",
      "Firebase Auth",
      "MongoDB",
      "Express",
      "Tailwind",
      "JWT",
      "Stripe",
    ],
    description:
      "KrishiLink is a MERN stack-based agricultural marketplace that connects farmers directly with customers, supermarkets, and local buyers, eliminating unnecessary middlemen. Farmers can list and sell their agricultural products, while customers can browse products, place orders, and make payments online. The platform also integrates rider-based delivery to ensure smooth product transportation. With role-based dashboards and district-wise service management, KrishiLink aims to make agricultural trading more accessible, transparent, and efficient.",
    live: "https://krishilink-ten.vercel.app/",
    github: "https://github.com/apupaul1/krishilink-client",
    challenges:
      "Managing multiple user roles (Farmers, Customers, and Riders), controlling district-wise service availability, and designing a complete Cart → Checkout → Order → Payment workflow were the key challenges. I addressed these by implementing role-based access control, initially limiting operations to Dhaka District, and breaking the purchasing process into manageable steps to ensure smooth and consistent transactions",
    future:
      "Connect more district, real-time chat between famrers and sellers, and a video chat support system.",
  },

  booknook: {
    name: "BookNook",
    tagline: "A small library for borrowing peoples books.",
    year: "2026",
    role: "Full-stack · Solo build",
    status: "Live",
    image:
      "https://iad.microlink.io/CdXqEWysoS0JJLtP9D3Yoruev5y5HrC3_NkF4cXzrtmmLflOQW_DFpRoBDP7qzSBKIuJs6qickbBKgJkxgdMvw.png",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind",
      "BetterAuth",
      "Express.js",
      "MongoDB",
      "JWT",
    ],
    description:
      "BookNook is a community-driven book borrowing platform where readers can discover books, share their personal collections, and borrow books from others. Users can explore books by category, request to borrow available titles, manage borrowing history, and share their own books with the community. With secure authentication and a personalized library dashboard, BookNook makes book sharing more accessible and encourages a connected reading community.",
    live: "https://booknook-hazel-nine.vercel.app/",
    github: "https://github.com/apupaul1/booknook-client",
    challenges:
      "Managing book availability across multiple users, handling borrow and return workflows, and keeping book quantities synchronized were key challenges. I addressed these by implementing automated availability updates, authenticated user-specific dashboards, and protected routes to ensure secure and consistent book management",
    future:
      "Integrate advanced search, personalised recommendations and reading streaks.",
  },

  aurelle: {
    name: "Aurelle",
    tagline:
      "A luxury botanical skincare website built to turn a product into a brand",
    year: "2026",
    role: "Full-stack · Solo build",
    status: "Live",
    image:
      "https://i.ibb.co.com/yBBXtZF0/screencapture-aurelle-ruddy-three-vercel-app-2026-11-11-11-03-47-edit.png",
    stack: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "OpenAI",
      "React Three",
      "Framer Motion",
      "GSAP",
    ],
    description:
      "AURELLE is a complete, single-page brand experience for a small-batch skincare house. Instead of dropping visitors into a plain product grid, it tells a story: the philosophy behind the formulas, the plants inside them, the ritual of using them, and the people who love them. Along the way, visitors can explore products in 3D, filter the collection, add items to a bag, and join the mailing list.The site is built with modern web technology, but it is designed to be rebranded and reused — for skincare, cosmetics, fragrance, candles, wellness products, tea, ceramics, or any product that benefits from being presented with care rather than clutter.",
    live: "https://aurelle-ruddy-three.vercel.app/",
    github: "https://github.com/apupaul1/Aurella",
    challenges:
      "Building the website with OpenAI was a different experience. Getting the desired design and functionality from prompts wasn't always easy, so I had to refine my prompts, experiment with different approaches, and manually adjust the generated code to match my vision.",
    future:
      "Improve the shopping experience by adding secure payment integration, user authentication, product management, order tracking",
  },

  bazardor: {
    name: "BookNook",
    tagline: "Essential Commodity Prices in Bangladesh, All at a Glance.",
    year: "2026",
    role: "Frontend · Solo build",
    status: "Live",
    image:
      "https://iad.microlink.io/6HqFVHaTTYfjbsqP3ZljYQQmN0NPqa63oB7j47G6fgSHWpZehwDY3DloT3x37ldGLaYLuVofx9Rj6EWGL6Ljbg.png",
    stack: [
      "Next.js",
      "HeroUI",
      "TypeScript",
      "TailwindCSS",
      "BetterAuth",
      "MongoDB",
    ],
    description:
      "BazarDor is a responsive web application designed to help people in Bangladesh stay informed about the daily prices of essential commodities. Users can explore product-wise price summaries, compare prices across different markets, track daily price fluctuations, and browse products by category. With an intuitive interface, sorting options, and personalized profile management, BazarDor aims to make market price information more accessible and transparent.",
    live: "https://bazar-dor-mu-sable.vercel.app/",
    github: "https://github.com/apupaul1/Bazar-Dor",
    challenges:
      "Presenting daily market prices in a clear and meaningful way, managing price comparisons, and handling dynamic filtering and sorting were key challenges. I addressed these by developing reusable UI components, structured product data handling, and responsive loading states to ensure a smooth user experience.",
    future:
      "Integrate server-side data management, role-based access control, real-time market price updates, and historical price analytics for better market insights.",
  },

  medical: {
    name: "Phudu",
    tagline: "Healthcare booking that puts the right doctor one tap away.",
    year: "2024",
    role: "Frontend · Solo build",
    status: "Live",
    image: "https://i.ibb.co.com/0psnDLbF/Phudu.jpg",
    stack: ["React", "Tailwind", "React Router", "JavaScript"],
    description:
      "Phudu is a responsive and cleanly designed appointment booking web application tailored for healthcare services. It enables patients to easily browse detailed profiles of doctors — including their name, hospital affiliation, location, consultation hours, fees and registration number — and book appointments seamlessly through the portal. Users can also view and manage their own bookings in a user-friendly interface. Phudu combines portfolio showcasing with practical booking functionality, providing a comprehensive platform that connects patients with healthcare professionals efficiently and transparently.",
    live: "https://doctors-service-care.netlify.app",
    github: "https://github.com/apupaul1/Phudu-App",
    challenges:
      "Maintaining a responsive layout and reusable components while keeping every booking state easy to reason about.",
    future:
      "Add richer animations, a dark mode toggle and a health blog section.",
  },
};

const ORDER = [
  "dailymart",
  "krishilink",
  "booknook",
  "aurelle",
  "bazardor",
  "medical",
];

const InfoBlock = ({ icon: Icon, title, content }) => {
  const [open, setOpen] = useState(false);
  const expandable = content.length > 220;

  return (
    <Reveal y={20}>
      <article className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface p-6 transition-colors duration-500 hover:border-hairline-strong sm:p-7">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-sm text-accent">
            <Icon />
          </span>
          <h2 className="font-display text-lg font-semibold text-strong">
            {title}
          </h2>
        </div>

        <motion.div
          layout
          initial={false}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className={`mt-4 text-[0.9rem] leading-[1.8] text-muted ${
              expandable && !open ? "line-clamp-3" : ""
            }`}
          >
            {content}
          </p>
        </motion.div>

        {expandable && (
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-muted transition-colors duration-300 hover:border-accent/30 hover:text-accent"
          >
            {open ? <BsChevronUp /> : <BsChevronDown />}
            {open ? "Show less" : "Read full overview"}
          </button>
        )}
      </article>
    </Reveal>
  );
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = PROJECT_DETAILS[id];

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [id]);

  const nextId = project ? ORDER[(ORDER.indexOf(id) + 1) % ORDER.length] : null;
  const nextProject = nextId ? PROJECT_DETAILS[nextId] : null;

  return (
    <main className="relative min-h-screen text-fg">
      <AuroraBackground />
      <ScrollProgress />
      <CursorGlow />

      <div className="relative z-10">
        {/* Minimal header (this route sits outside the root layout) */}
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-6 sm:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-accent-soft via-accent-4 to-accent-2 text-[0.78rem] font-bold text-accent-fg shadow-lg shadow-accent/20 transition-transform duration-500 group-hover:rotate-[-6deg]">
              AP
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-display text-sm font-semibold text-strong">
                Apu Paul
              </span>
              <span className="mt-1 font-mono text-[0.55rem] uppercase tracking-[0.22em] text-subtle">
                Case study
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-4 py-2 text-[0.72rem] font-medium text-fg transition-colors duration-300 hover:border-accent/30 hover:text-strong"
            >
              <FaArrowLeft className="text-[0.6rem]" />
              All projects
            </Link>
          </div>
        </header>

        {!project ? (
          <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.24em] text-accent">
              404
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold text-strong">
              This case study doesn&apos;t exist.
            </h1>
            <p className="mt-3 max-w-md text-sm text-muted">
              The link may be outdated. Head back to the portfolio to browse the
              selected work.
            </p>
            <MagneticButton to="/#projects" variant="primary" className="mt-8">
              Back to projects
              <FaArrowRight className="text-xs" />
            </MagneticButton>
          </section>
        ) : (
          <div className="mx-auto w-full max-w-6xl px-6 pb-20 sm:px-8">
            {/* Hero */}
            <section className="pt-8 sm:pt-12">
              <Reveal>
                <div className="flex flex-wrap items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-subtle">
                  <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-accent-soft">
                    {project.status}
                  </span>
                  <span>{project.year}</span>
                  <span className="h-1 w-1 rounded-full bg-hairline-strong" />
                  <span>{project.role}</span>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h1 className="mt-5 max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] text-strong sm:text-5xl lg:text-[2.2rem]">
                  {project.name}
                  <span className="text-gradient"> —</span>{" "}
                  <span className="text-gradient-soft">{project.tagline}</span>
                </h1>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <MagneticButton href={project.live} variant="primary">
                    <FaGlobe className="text-xs" />
                    Visit live site
                  </MagneticButton>
                  <MagneticButton href={project.github} variant="secondary">
                    <FaGithub className="text-sm" />
                    Source code
                  </MagneticButton>
                </div>
              </Reveal>

              <Reveal delay={0.16} className="mt-10">
                <div className="group relative overflow-hidden rounded-[1.75rem] border border-hairline bg-surface p-2">
                  <div className="relative aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-[1.4rem] bg-elevated ">
                    <ParallaxMedia
                      src={project.image}
                      alt={`${project.name} interface preview`}
                      amount={8}
                      imgClassName="transition-transform duration-[1100ms] ease-out group-hover:scale-[1.03]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-page/70 via-transparent to-transparent" />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-hairline-strong" />
                  </div>
                </div>
              </Reveal>
            </section>

            {/* Body */}
            <section className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-8">
              <div className="space-y-4">
                <InfoBlock
                  icon={FaInfoCircle}
                  title="Overview"
                  content={project.description}
                />
                <InfoBlock
                  icon={FaExclamationTriangle}
                  title="Challenges faced"
                  content={project.challenges}
                />
                <InfoBlock
                  icon={FaLightbulb}
                  title="What's next"
                  content={project.future}
                />
              </div>

              {/* Sidebar */}
              <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
                <Reveal y={20}>
                  <div className="rounded-2xl border border-hairline bg-surface p-6">
                    <h2 className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-subtle">
                      <FaTools className="text-accent/70" />
                      Tech stack
                    </h2>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-hairline bg-surface px-2.5 py-1 text-[0.68rem] font-medium text-fg transition-colors hover:border-accent/30 hover:text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <dl className="mt-6 space-y-3 border-t border-hairline pt-5 text-sm">
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-[0.68rem] uppercase tracking-[0.14em] text-subtle">
                          Role
                        </dt>
                        <dd className="text-right text-[0.78rem] text-fg">
                          {project.role}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-[0.68rem] uppercase tracking-[0.14em] text-subtle">
                          Year
                        </dt>
                        <dd className="text-[0.78rem] text-fg">
                          {project.year}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-[0.68rem] uppercase tracking-[0.14em] text-subtle">
                          Status
                        </dt>
                        <dd className="inline-flex items-center gap-1.5 text-[0.78rem] text-positive">
                          <span className="h-1.5 w-1.5 rounded-full bg-positive" />
                          {project.status}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </Reveal>

                <Reveal delay={0.06} y={20}>
                  <div className="border-gradient overflow-hidden rounded-2xl p-6">
                    <p className="font-display text-lg font-medium leading-snug text-strong">
                      Want to build something similar?
                    </p>
                    <p className="mt-2 text-[0.78rem] leading-relaxed text-muted">
                      I&apos;m available for new projects and happy to talk
                      through scope.
                    </p>
                    <MagneticButton
                      to="/#contact"
                      variant="primary"
                      className="mt-4 w-full"
                    >
                      Get in touch
                      <FaArrowRight className="text-xs" />
                    </MagneticButton>
                  </div>
                </Reveal>
              </aside>
            </section>

            {/* Next project */}
            {nextProject && (
              <Reveal delay={0.05} className="mt-14">
                <Link
                  to={`/project/${nextId}`}
                  className="group flex flex-col gap-4 rounded-[1.6rem] border border-hairline bg-surface p-6 transition-colors duration-500 hover:border-accent/25 hover:bg-surface-hover sm:flex-row sm:items-center sm:justify-between sm:p-8"
                >
                  <div className="flex items-center gap-5">
                    <div className="hidden h-20 w-28 shrink-0 overflow-hidden rounded-xl border border-hairline sm:block">
                      <img
                        src={nextProject.image}
                        alt=""
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-subtle">
                        Next case study
                      </p>
                      <p className="mt-2 font-display text-xl font-semibold text-strong">
                        {nextProject.name}
                      </p>
                      <p className="mt-1 max-w-sm text-[0.8rem] text-muted">
                        {nextProject.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-hairline bg-surface text-fg transition-all duration-500 group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent">
                    <HiOutlineArrowUpRight className="text-lg" />
                  </span>
                </Link>
              </Reveal>
            )}

            <div className="mt-12 flex items-center justify-between gap-4 border-t border-hairline pt-6">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-[0.72rem] font-medium text-subtle transition-colors hover:text-accent"
              >
                <FaArrowLeft className="text-[0.6rem]" />
                Back to all projects
              </Link>
              <span className="font-mono text-[0.58rem] uppercase tracking-[0.18em] text-subtle/70">
                © {new Date().getFullYear()} Apu Paul
              </span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProjectDetails;
