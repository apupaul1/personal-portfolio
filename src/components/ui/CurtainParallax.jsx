import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import codingImage from "../../assets/coding-parallax.jpg";

const clamp01 = (value) => Math.min(1, Math.max(0, value));
const easeInOutCubic = (t) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const Copy = ({ hintOpacity, showHint = true }) => (
  <div className="relative z-30 flex h-full flex-col items-center justify-center px-6 text-center">
    <span className="font-mono text-[0.7rem] uppercase tracking-[0.28em] text-teal-200/80 [text-shadow:0_1px_16px_rgba(0,0,0,0.55)]">
      The way I build
    </span>

    <p className="mt-6 max-w-3xl text-balance font-display text-2xl font-medium leading-[1.18] text-white [text-shadow:0_1px_24px_rgba(0,0,0,0.45)] sm:text-4xl lg:text-[2.9rem]">
      Engineering with intent, designing with{" "}
      <span className="text-gradient">taste.</span>
    </p>

    <div className="mt-8 flex items-center gap-3">
      <span className="h-px w-8 bg-white/30" />
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-white/65">
        Apu Paul · Full Stack Developer
      </span>
      <span className="h-px w-8 bg-white/30" />
    </div>

    {showHint && (
      <motion.span
        style={{ opacity: hintOpacity }}
        className="mt-10 font-mono text-[0.58rem] uppercase tracking-[0.3em] text-white/40"
      >
        Scroll to reveal
      </motion.span>
    )}
  </div>
);

/**
 * Curtain parallax / uncover band.
 *
 * The section is taller than the viewport and its stage is sticky, so the
 * scene pins while a full stage curtain lifts to uncover the image. The
 * image itself drifts and slowly zooms behind it for a second parallax
 * layer. Reduced-motion users get a static image panel instead.
 */
export default function CurtainParallax() {
  const track = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start start", "end end"],
  });

  // Curtain lift, eased across the first two thirds of the pinned track.
  const lift = useTransform(scrollYProgress, (p) =>
    easeInOutCubic(clamp01((p - 0.06) / 0.6)),
  );
  const curtainY = useTransform(lift, (v) => `${-v * 100}%`);
  const hintOpacity = useTransform(lift, [0, 0.18], [1, 0]);

  // Image layer: counter-drift plus a gentle zoom-out as it is uncovered.
  const imageY = useTransform(scrollYProgress, [0, 1], ["-9%", "9%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.16, 1.05]);

  if (reduce) {
    return (
      <section
        ref={track}
        aria-label="Design philosophy"
        className="relative isolate overflow-hidden border-y border-white/10"
      >
        <img
          src={codingImage}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_48%_at_50%_50%,rgba(3,7,15,0.66),transparent_78%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(45,212,191,0.14),transparent_70%)]" />
        <div className="noise absolute inset-0" />

        <div className="relative mx-auto flex min-h-[24rem] max-w-5xl flex-col items-center justify-center px-6 py-24 sm:min-h-[30rem]">
          <Copy showHint={false} />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={track}
      aria-label="Design philosophy"
      className="relative isolate h-[160vh]"
    >
      <div className="sticky top-0 isolate h-[100svh] overflow-hidden border-y border-white/10">
        {/* ---------- Coding image (parallax + zoom) ---------- */}
        <motion.div
          aria-hidden="true"
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-x-0 -top-[10%] h-[120%] will-change-transform"
        >
          <img
            src={codingImage}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>

        {/* ---------- Scrims ---------- */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-black/85" />
        {/* Vignette keeps the copy legible without flattening the whole image. */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_48%_at_50%_50%,rgba(3,7,15,0.66),transparent_78%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(45,212,191,0.14),transparent_70%)]" />
        <div className="noise absolute inset-0" />

        {/* ---------- Rising curtain ---------- */}
        <motion.div
          aria-hidden="true"
          style={{ y: curtainY }}
          className="absolute inset-0 z-20 bg-[#05070d] will-change-transform"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_100%,rgba(45,212,191,0.16),transparent_72%)]" />
          <div className="noise absolute inset-0" />
          {/* Light leaking from under the leading edge. */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-teal-300/12 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal-200/60 to-transparent" />
        </motion.div>

        {/* ---------- Copy ---------- */}
        <Copy hintOpacity={hintOpacity} />
      </div>
    </section>
  );
}
