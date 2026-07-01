import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal
 * ----------------------------------------------------------
 * A small reusable hook that returns a ref and a boolean.
 * Attach the ref to any element and it will receive the
 * "is-visible" state once it scrolls into the viewport.
 * Used together with the `.fade-in-up` CSS class for a
 * subtle, single-purpose fade + slide animation.
 * ----------------------------------------------------------
 */
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node); // animate only once
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
};

export default useScrollReveal;
