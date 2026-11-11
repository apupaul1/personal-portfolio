import {
  FaUserGraduate,
  FaLightbulb,
  FaHandshake,
  FaArrowRight,
  FaCode,
} from 'react-icons/fa';
import { MdOutlineComputer } from 'react-icons/md';
import { HiOutlineLocationMarker, HiOutlineStatusOnline } from 'react-icons/hi';
import { TbRoute } from 'react-icons/tb';
import SectionHeading from '../../../components/ui/SectionHeading';
import Reveal from '../../../components/ui/Reveal';
import TiltCard from '../../../components/ui/TiltCard';
import MagneticButton from '../../../components/ui/MagneticButton';
import Parallax from '../../../components/ui/Parallax';

const FEATURES = [
  {
    icon: MdOutlineComputer,
    title: 'Full-stack craft',
    description: 'Engaging React interfaces backed by robust Node & Express APIs.',
    tone: 'feat-teal',
  },
  {
    icon: FaLightbulb,
    title: 'Problem solver',
    description: 'I chase the root cause and ship clean, efficient, optimised code.',
    tone: 'feat-amber',
  },
  {
    icon: FaUserGraduate,
    title: 'Always learning',
    description: 'Exploring machine learning, system design and better UX patterns.',
    tone: 'feat-indigo',
  },
  {
    icon: FaHandshake,
    title: 'Team player',
    description: 'Comfortable in collaborative rooms where feedback makes work sharper.',
    tone: 'feat-pink',
  },
];

const FACTS = [
  {
    icon: HiOutlineLocationMarker,
    label: 'Based in',
    value: 'Dhaka, Bangladesh',
  },
  {
    icon: FaCode,
    label: 'Core focus',
    value: 'Next.js · Typescript · Express.js',
  },
  {
    icon: TbRoute,
    label: 'Exploring',
    value: 'ML & System design',
  },
  {
    icon: HiOutlineStatusOnline,
    label: 'Availability',
    value: 'Open to work',
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="relative py-24 sm:py-28 lg:py-32">
      <Parallax
        aria-hidden="true"
        from={60}
        to={-60}
        className="pointer-events-none absolute -left-24 top-24 h-80 w-80"
      >
        <div className="h-full w-full rounded-full bg-accent/[0.07] blur-[130px]" />
      </Parallax>
      <Parallax
        aria-hidden="true"
        from={-40}
        to={40}
        className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72"
      >
        <div className="h-full w-full rounded-full bg-accent-2/[0.07] blur-[120px]" />
      </Parallax>

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          {/* Left — heading + facts */}
          <div>
            <SectionHeading
              align="left"
              eyebrow="About me"
              title={
                <>
                  Engineering with intent, designing with{' '}
                  <span className="text-gradient">taste.</span>
                </>
              }
              description="A developer's job is more than writing code — it's understanding the people who will use it, then removing every point of friction."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {FACTS.map((fact, index) => {
                const Icon = fact.icon;
                return (
                  <Reveal key={fact.label} delay={0.08 * index} y={18}>
                    <div className="group h-full rounded-2xl border border-hairline bg-surface p-4 transition-colors duration-300 hover:border-accent/25 hover:bg-surface-hover">
                      <div className="flex items-center gap-2 text-subtle">
                        <Icon className="text-base text-accent/80" />
                        <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em]">
                          {fact.label}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-medium text-fg transition-colors group-hover:text-strong">
                        {fact.value}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.2}>
              <MagneticButton to="/#contact" variant="secondary" className="mt-8">
                Let&apos;s build together
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticButton>
            </Reveal>
          </div>

          {/* Right — narrative */}
          <Reveal delay={0.1} className="relative">
            <div className="border-gradient relative overflow-hidden rounded-[2rem] p-7 sm:p-9">
              <Parallax
                aria-hidden="true"
                from={-30}
                to={30}
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56"
              >
                <div className="h-full w-full rounded-full bg-accent/10 blur-[90px]" />
              </Parallax>
              <Parallax
                aria-hidden="true"
                from={30}
                to={-30}
                className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56"
              >
                <div className="h-full w-full rounded-full bg-accent-2/10 blur-[90px]" />
              </Parallax>

              <Parallax
                aria-hidden="true"
                from={26}
                to={-26}
                className="pointer-events-none absolute right-8 top-4"
              >
                <span className="block font-display text-[7rem] leading-none text-strong/[0.05]">
                  &ldquo;
                </span>
              </Parallax>

              <p className="relative font-mono text-[0.62rem] uppercase tracking-[0.24em] text-accent-soft">
                The short version
              </p>

              <div className="relative mt-5 space-y-4 text-[0.94rem] leading-[1.8] text-fg">
                <p>
                  Hello! I&apos;m <span className="font-semibold text-strong">Apu Paul</span>, a
                  full-stack developer whose love for programming began with{' '}
                  <span className="font-medium text-accent-soft">C</span> and{' '}
                  <span className="font-medium text-accent-soft">Python</span>, then grew into building
                  complete products with{' '}
                  <span className="font-medium text-accent-soft">React</span>,{' '}
                  <span className="font-medium text-accent-soft">Next.js</span> and the{' '}
                  <span className="font-medium text-accent-2">MERN stack</span>.
                </p>
                <p>
                  I enjoy the full arc of a build — shaping the interface, modelling the data,
                  securing the auth flow and wiring the payments. My favourite projects solve
                  everyday problems: marketplaces, booking platforms and tools people return to.
                </p>
                <p>
                  Outside the editor you&apos;ll find me reading about innovation, exploring AI,
                  sketching interfaces, or planning the next trip. That curiosity keeps finding its
                  way back into the work.
                </p>
              </div>

              <div className="relative mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-5">
                <div>
                  <p className="font-display text-lg italic text-strong">Apu Paul</p>
                  <p className="mt-0.5 font-mono text-[0.58rem] uppercase tracking-[0.2em] text-subtle">
                    Full Stack Developer
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-positive" />
                  <span className="text-[0.65rem] text-fg">Building since 2021</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Reveal key={feature.title} delay={0.07 * index} y={22}>
                <TiltCard className="h-full" max={6}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-hairline bg-surface p-6 transition-colors duration-500 hover:border-hairline-strong">
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-hairline-strong to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="flex items-start justify-between">
                      <span
                        className={`feat-tile grid h-12 w-12 place-items-center rounded-2xl shadow-lg shadow-black/10 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg] ${feature.tone}`}
                      >
                        <Icon className="text-xl" />
                      </span>
                      <span className="font-mono text-[0.62rem] text-subtle/70">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-[1.02rem] font-semibold text-strong">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-[0.82rem] leading-relaxed text-muted">
                      {feature.description}
                    </p>

                    <div
                      className={`mt-5 h-px w-0 bg-gradient-to-r from-[var(--feat-from)] to-[var(--feat-to)] transition-all duration-500 group-hover:w-full ${feature.tone}`}
                    />
                  </article>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
