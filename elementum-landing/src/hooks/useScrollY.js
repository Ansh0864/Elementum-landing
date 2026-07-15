import { useEffect, useState } from "react";

/**
 * Returns the current vertical scroll position, throttled to
 * animation frames. Used for subtle parallax movement.
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let frame = null;

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        frame = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return scrollY;
}
