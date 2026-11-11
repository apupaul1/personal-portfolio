import { motion } from 'framer-motion';
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaBookOpen } from 'react-icons/fa';
import SectionHeading from '../../../components/ui/SectionHeading';
import Reveal from '../../../components/ui/Reveal';
import Parallax from '../../../components/ui/Parallax';

const EDUCATION = [
  {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Daffodil International University',
    year: '2022 — 2026',
    status: 'CGPA 3.70 / 4.00',
    details:
      'Core coursework in data structures, algorithms, artificial intelligence, machine learning and web development — alongside coding contests and tech workshops.',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Govt. Dohar Nawabganj College',
    year: '2019 — 2021',
    status: 'GPA 4.17 / 5.00',
    details:
      'Science stream under the Dhaka Board, building a strong foundation in physics, chemistry and mathematics.',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Nawabganj Pilot High School',
    year: '2017 — 2019',
    status: 'GPA 4.17 / 5.00',
    details:
      'Completed the science curriculum with a focus on analytical thinking and problem solving.',
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-24 sm:py-28">
      <Parallax
        aria-hidden="true"
        from={40}
        to={-40}
        className="pointer-events-none absolute right-0 top-1/3 h-72 w-72"
      >
        <div className="h-full w-full rounded-full bg-accent-2/[0.06] blur-[120px]" />
      </Parallax>

      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Education"
          title={
            <>
              The path <span className="text-gradient">so far.</span>
            </>
          }
          description="A steady progression from fundamentals to full-stack product engineering."
        />

        <div className="relative mt-14">
          {/* animated rail */}
          <motion.span
            aria-hidden="true"
            className="absolute bottom-2 left-4 top-2 w-px origin-top bg-gradient-to-b from-accent via-accent-2/60 to-transparent sm:left-5"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />

          <ol className="space-y-5">
            {EDUCATION.map((edu, index) => (
              <li key={edu.degree} className="relative pl-12 sm:pl-16">
                <Reveal delay={0.08 * index} y={20}>
                  <span className="absolute left-4 top-7 z-10 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full border border-accent/25 bg-elevated text-accent shadow-[0_0_0_4px_var(--bg)] sm:left-5">
                    <FaGraduationCap className="text-sm" />
                  </span>

                  <article className="group relative overflow-hidden rounded-2xl border border-hairline bg-surface p-6 transition-colors duration-500 hover:border-accent/25 hover:bg-surface-hover sm:p-7">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 blur-[50px] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-subtle">
                          <FaCalendarAlt className="text-accent/70" />
                          {edu.year}
                        </div>
                        <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-strong">
                          {edu.degree}
                        </h3>
                        <p className="mt-1.5 flex items-center gap-2 text-[0.82rem] text-muted">
                          <FaUniversity className="text-subtle" />
                          {edu.institution}
                        </p>
                      </div>

                      <span
                        className={`rounded-full border px-3 py-1 text-[0.62rem] font-medium ${
                          index === 0
                            ? 'border-accent/25 bg-accent/10 text-accent-soft'
                            : 'border-hairline bg-surface text-muted'
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>

                    <p className="mt-4 flex items-start gap-2.5 border-t border-hairline pt-4 text-[0.8rem] leading-relaxed text-muted">
                      <FaBookOpen className="mt-1 shrink-0 text-subtle" />
                      {edu.details}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Education;
