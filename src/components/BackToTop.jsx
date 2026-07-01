import { useEffect, useState } from "react";

/**
 * BackToTop
 * ----------------------------------------------------------
 * Small floating button that appears after scrolling down
 * and smoothly scrolls the page back to the top on click.
 * ----------------------------------------------------------
 */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="social-icon-link position-fixed"
      style={{
        bottom: "1.5rem",
        right: "1.5rem",
        backgroundColor: "var(--color-accent)",
        color: "#fff",
        border: "none",
        zIndex: 999,
      }}
      aria-label="Back to top"
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default BackToTop;
