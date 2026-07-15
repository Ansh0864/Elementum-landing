import AvatarCluster from "./AvatarCluster.jsx";

const avatars = [
  { src: "https://i.pravatar.cc/120?img=68", className: "left-0 top-0 h-12 w-12 md:h-14 md:w-14" },
  { src: "https://i.pravatar.cc/120?img=32", className: "left-10 top-40 h-11 w-11 md:h-12 md:w-12" },
  { src: "https://i.pravatar.cc/120?img=5", className: "left-0 top-24 h-14 w-14 md:h-16 md:w-16" },
  { src: "https://i.pravatar.cc/120?img=22", className: "right-16 top-2 h-12 w-12 md:h-14 md:w-14" },
  { src: "https://i.pravatar.cc/120?img=44", className: "right-0 top-16 h-16 w-16 md:h-20 md:w-20" },
  { src: "https://i.pravatar.cc/120?img=51", className: "right-4 top-44 h-11 w-11 md:h-12 md:w-12" },
];

function Testimonial() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 sm:px-10 md:py-14">
      <h2 className="text-balance text-center font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        <span className="text-sage">What</span> our customer says{" "}
        <span className="text-gold">About</span> us
      </h2>

      <div className="relative mx-auto mt-10 max-w-lg">
        <AvatarCluster avatars={avatars} className="hidden md:block" />

        <blockquote className="relative z-10 rounded-3xl bg-sage-light px-8 py-10 text-center sm:px-10">
          <span aria-hidden="true" className="text-4xl leading-none text-sage">
            &ldquo;
          </span>
          <p className="mt-2 text-balance text-ink">
            Elementum delivered the site within the timeline just as we
            requested. In the end, we saw a 50% increase in traffic within
            days of launch, and their team used technologies we hadn&apos;t
            worked with before, which turned out to be both easy to use and
            reliable.
          </p>
          <span aria-hidden="true" className="text-4xl leading-none text-sage">
            &rdquo;
          </span>
        </blockquote>
      </div>
    </section>
  );
}

export default Testimonial;
