import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-4 ${
        centered ? "items-center text-center" : "items-start text-left"
      } ${className}`}
    >
      {eyebrow && (
        <Reveal delay={0.05}>
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-accent/80" />
            <span className="eyebrow">{eyebrow}</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-accent/80" />
          </span>
        </Reveal>
      )}

      <Reveal delay={0.1}>
        <h2 className="max-w-3xl text-balance text-3xl font-semibold leading-[1.1] text-strong sm:text-4xl lg:text-[2.9rem]">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.16}>
          <p
            className={`max-w-2xl text-sm leading-relaxed text-muted sm:text-base ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
