/**
 * Infinite, pause-on-hover marquee. Children are duplicated so the
 * loop is seamless regardless of their width.
 */
export default function Marquee({
  children,
  duration = 34,
  reverse = false,
  className = "",
}) {
  return (
    <div className={`marquee ${className}`}>
      <div
        className={`marquee-track ${reverse ? "is-reverse" : ""}`}
        style={{ "--duration": `${duration}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
