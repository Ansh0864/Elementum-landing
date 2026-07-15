import { useInView } from "../hooks/useInView.js";

/**
 * Wraps a section and fades/slides it up the first time it enters the
 * viewport. `delay` (ms) can be used to stagger multiple children.
 */
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
