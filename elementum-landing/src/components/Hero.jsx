import AvatarCluster from "./AvatarCluster.jsx";
import { useScrollY } from "../hooks/useScrollY.js";

const avatars = [
  { src: "https://i.pravatar.cc/120?img=12", className: "left-0 top-24 h-14 w-14 md:h-16 md:w-16" },
  { src: "https://i.pravatar.cc/120?img=33", className: "left-16 top-4 h-12 w-12 md:h-14 md:w-14" },
  { src: "https://i.pravatar.cc/120?img=47", className: "right-24 top-0 h-16 w-16 md:h-20 md:w-20" },
  { src: "https://i.pravatar.cc/120?img=15", className: "right-8 top-16 h-11 w-11 md:h-14 md:w-14" },
  { src: "https://i.pravatar.cc/120?img=56", className: "right-2 top-32 h-14 w-14 md:h-16 md:w-16" },
];

const mobileAvatars = avatars.slice(0, 4);

function Hero() {
  const scrollY = useScrollY();

  return (
    <section id="top" className="relative overflow-hidden px-6 pb-10 pt-6 sm:px-10">
      {/* decorative blob accent, drifts slower than scroll for a parallax feel */}
      <div
        aria-hidden="true"
        className="absolute -right-10 top-10 md:h-32 md:w-28"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      >
        <div
          className="h-24 w-20 rotate-12 bg-lavender/80 rounded-blob animate-float md:h-32 md:w-28"
          style={{ "--float-rotate": "12deg" }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <div className="relative pt-4 text-center">
          <AvatarCluster avatars={avatars} className="hidden md:block" />
          <span
            aria-hidden="true"
            className="absolute right-0 top-40 hidden h-11 w-11 items-center justify-center rounded-full border-4 border-cream bg-coral text-sm font-semibold text-cream shadow-md md:flex"
          >
            R
          </span>

          <h1 className="font-display text-balance animate-fade-in-up text-4xl font-semibold leading-[1.15] text-ink sm:text-5xl md:text-6xl">
            The thinkers and doers were{" "}
            <span className="text-coral">changing</span> the{" "}
            <span className="relative text-sage">
              status
              <svg
                aria-hidden="true"
                viewBox="0 0 120 12"
                className="absolute -bottom-2 left-0 h-3 w-full text-sage"
              >
                <path
                  d="M2 8c15-8 30-8 45 0s30 8 45 0 20-6 25 0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  pathLength="1"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  style={{
                    animation: "draw-line 1s ease-out 0.6s forwards",
                  }}
                />
              </svg>
            </span>{" "}
            <span className="text-gold">Quo</span> with
          </h1>
        </div>

        <p
          className="mx-auto mt-6 max-w-xl text-balance animate-fade-in-up text-center text-base text-muted"
          style={{ animationDelay: "120ms" }}
        >
          We are a team of strategists, designers, content creators and
          researchers. Together, we believe progress only happens when brands
          are brave enough to leave the safe path behind.
        </p>

        <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
          <div className="flex -space-x-3">
            {mobileAvatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar.src}
                alt=""
                className="h-11 w-11 rounded-full border-4 border-cream object-cover shadow-md transition-transform hover:z-10 hover:scale-110"
              />
            ))}
            <span className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-cream bg-coral text-xs font-semibold text-cream shadow-md">
              R
            </span>
          </div>
        </div>

        <div
          className="mt-8 flex animate-fade-in-up justify-center"
          style={{ animationDelay: "220ms" }}
        >
          <a
            href="#offer"
            className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
          >
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
