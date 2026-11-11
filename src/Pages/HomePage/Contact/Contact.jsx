import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaRegCopy,
  FaCheck,
} from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineClock } from "react-icons/hi";
import SectionHeading from "../../../components/ui/SectionHeading";
import Reveal from "../../../components/ui/Reveal";
import MagneticButton from "../../../components/ui/MagneticButton";
import Parallax from "../../../components/ui/Parallax";

const EMAIL = "apupaul.dev@gmail.com";

const CHANNELS = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: FaEnvelope,
    accent: "text-accent",
    ring: "group-hover:border-accent/30",
    note: "Best for detailed briefs",
  },
  {
    label: "Call",
    value: "+880 1645 743205",
    href: "tel:+8801645743205",
    icon: FaPhoneAlt,
    accent: "text-warning",
    ring: "group-hover:border-warning/30",
    note: "Weekdays, 10am – 6pm",
  },
  {
    label: "WhatsApp",
    value: "+880 1645 743205",
    href: "https://wa.me/8801645743205",
    icon: FaWhatsapp,
    accent: "text-positive",
    ring: "group-hover:border-positive/30",
    note: "Quick questions welcome",
  },
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

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28 lg:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Have an idea? Let&apos;s make it{" "}
              <span className="text-gradient">real.</span>
            </>
          }
          description="Whether it's a product to build, a team to join, or just a good conversation about interfaces — my inbox is open."
        />

        <Reveal delay={0.12} className="mt-14">
          <div className="border-gradient relative overflow-hidden rounded-[2rem]">
            <div className="relative overflow-hidden rounded-[2rem] bg-panel p-6 backdrop-blur-2xl sm:p-9 lg:p-11">
              {/* internal glow + grid */}
              <Parallax
                aria-hidden="true"
                from={-30}
                to={30}
                className="pointer-events-none absolute -left-24 -top-24 h-72 w-72"
              >
                <div className="h-full w-full rounded-full bg-accent/15 blur-[100px]" />
              </Parallax>
              <Parallax
                aria-hidden="true"
                from={30}
                to={-30}
                className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72"
              >
                <div className="h-full w-full rounded-full bg-accent-2/15 blur-[100px]" />
              </Parallax>
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)",
                  backgroundSize: "56px 56px",
                  maskImage:
                    "radial-gradient(ellipse 70% 70% at 50% 50%, #000, transparent 85%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 70% 70% at 50% 50%, #000, transparent 85%)",
                }}
              />

              <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
                {/* Left */}
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-positive/25 bg-positive/10 px-3 py-1.5 text-[0.68rem] font-medium text-positive">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-positive opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-positive" />
                    </span>
                    Available for new work
                  </span>

                  <h3 className="mt-6 font-display text-3xl font-semibold leading-[1.12] text-strong sm:text-[2.4rem]">
                    Let&apos;s build something people{" "}
                    <span className="text-gradient-soft">remember.</span>
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
                    Share a little about what you&apos;re making. I usually
                    reply within a day, and I&apos;m happy to talk scope,
                    timelines or just trade ideas.
                  </p>

                  {/* Email + copy */}
                  <div className="mt-7 flex flex-wrap items-center gap-3">
                    <a
                      href={`mailto:${EMAIL}`}
                      className="group inline-flex items-center gap-3 rounded-2xl border border-hairline bg-surface px-4 py-3 transition-colors duration-300 hover:border-accent/30 hover:bg-surface-hover"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/10 text-accent">
                        <FaEnvelope className="text-sm" />
                      </span>
                      <span>
                        <span className="block font-mono text-[0.55rem] uppercase tracking-[0.2em] text-subtle">
                          Email me
                        </span>
                        <span className="block text-sm font-medium text-fg">
                          {EMAIL}
                        </span>
                      </span>
                    </a>

                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copy email address"
                      className="inline-flex h-[58px] items-center gap-2 rounded-2xl border border-hairline bg-surface px-4 text-[0.72rem] font-medium text-muted transition-colors duration-300 hover:border-hairline-strong hover:text-strong"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                          key={copied ? "done" : "copy"}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.18 }}
                          className="grid place-items-center"
                        >
                          {copied ? (
                            <FaCheck className="text-positive" />
                          ) : (
                            <FaRegCopy className="text-muted" />
                          )}
                        </motion.span>
                      </AnimatePresence>
                      <span aria-live="polite">
                        {copied ? "Copied" : "Copy"}
                      </span>
                    </button>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.72rem] text-subtle">
                    <span className="inline-flex items-center gap-1.5">
                      <HiOutlineLocationMarker className="text-accent/70" />
                      Dhaka, Bangladesh
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <HiOutlineClock className="text-accent/70" />
                      Replies within 24h
                    </span>
                  </div>

                  <div className="mt-7 flex items-center gap-2">
                    {SOCIALS.map(({ label, href, icon: Icon }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        whileHover={{ y: -3 }}
                        className="grid h-9 w-9 place-items-center rounded-full border border-hairline bg-surface text-muted transition-colors hover:border-accent/35 hover:text-accent"
                      >
                        <Icon className="text-xs" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Right — channels */}
                <div className="flex flex-col gap-3">
                  {CHANNELS.map((channel) => {
                    const Icon = channel.icon;
                    return (
                      <a
                        key={channel.label}
                        href={channel.href}
                        target={
                          channel.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          channel.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`group flex items-center gap-4 rounded-2xl border border-hairline bg-surface p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-surface-hover ${channel.ring}`}
                      >
                        <span
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hairline bg-surface text-lg ${channel.accent} transition-transform duration-500 group-hover:scale-105`}
                        >
                          <Icon />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-subtle">
                            {channel.label}
                          </span>
                          <span className="mt-0.5 block truncate text-sm font-medium text-fg">
                            {channel.value}
                          </span>
                          <span className="mt-0.5 block text-[0.66rem] text-subtle">
                            {channel.note}
                          </span>
                        </span>
                        <FaArrowRight className="text-xs text-subtle transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                      </a>
                    );
                  })}

                  <div className="mt-1 rounded-2xl border border-dashed border-hairline-strong p-4">
                    <p className="text-[0.72rem] leading-relaxed text-subtle">
                      Prefer a quick intro? Send a short message and I&apos;ll
                      come back with questions, a rough plan and next steps.
                    </p>
                    <MagneticButton
                      href={`mailto:${EMAIL}`}
                      variant="primary"
                      className="mt-4 w-full"
                    >
                      Start a conversation
                      <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
