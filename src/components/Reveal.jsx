import useScrollReveal from "../hooks/useScrollReveal";

/**
 * Reveal
 * ----------------------------------------------------------
 * Reusable wrapper that fades + slides its children into view
 * as the user scrolls down the page. Keep animation subtle by
 * design — this is the ONLY animation pattern used site-wide.
 * ----------------------------------------------------------
 * Props:
 *  - delay: optional transition-delay in ms (for staggering)
 *  - as: optional element/tag to render (default: div)
 */
const Reveal = ({ children, delay = 0, className = "", as: Tag = "div" }) => {
  const [ref, isVisible] = useScrollReveal();

  return (
    <Tag
      ref={ref}
      className={`fade-in-up ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
