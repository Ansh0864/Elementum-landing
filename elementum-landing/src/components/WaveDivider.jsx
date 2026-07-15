/**
 * A slow, gently drifting wave line used between sections as a
 * visual rhythm device — echoes the squiggle accents from the
 * original design instead of a plain straight divider.
 */
function WaveDivider({ color = "sage", flip = false, className = "" }) {
  const strokeClass =
    color === "coral"
      ? "text-coral"
      : color === "gold"
      ? "text-gold"
      : color === "lavender"
      ? "text-lavender"
      : "text-sage";

  return (
    <div
      aria-hidden="true"
      className={`relative h-10 w-full overflow-hidden ${className} ${
        flip ? "-scale-y-100" : ""
      }`}
    >
      <svg
        className={`absolute left-0 top-1/2 h-8 w-[200%] -translate-y-1/2 animate-wave-drift ${strokeClass}`}
        viewBox="0 0 600 40"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 20c25-16 50-16 75 0s50 16 75 0 50-16 75 0 50 16 75 0 50-16 75 0 50 16 75 0 50-16 75 0 50 16 75 0"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export default WaveDivider;
