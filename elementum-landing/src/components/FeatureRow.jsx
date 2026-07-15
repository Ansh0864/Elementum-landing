/**
 * An alternating image/text row used for the "Tomorrow could be built
 * today" and "See how we can help you progress" sections. Pass
 * `reverse` to flip the image to the left on desktop.
 */
function FeatureRow({
  heading,
  headingAccent,
  paragraph,
  imageSrc,
  imageAlt,
  reverse = false,
  accentColor = "coral",
  sectionBg = "transparent",
}) {
  const accentClasses =
    accentColor === "coral"
      ? "bg-coral"
      : accentColor === "lavender"
      ? "bg-lavender"
      : accentColor === "gold"
      ? "bg-gold"
      : "bg-sage";

  const headingAccentClasses =
    accentColor === "coral"
      ? "text-coral"
      : accentColor === "lavender"
      ? "text-lavender"
      : accentColor === "gold"
      ? "text-gold"
      : "text-sage";

  const sectionBgClasses =
    sectionBg === "blush"
      ? "bg-blush/30"
      : sectionBg === "lavenderTint"
      ? "bg-lavender/10"
      : "bg-transparent";

  return (
    <section className={sectionBgClasses}>
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-8 sm:px-10 md:py-12 lg:flex-row lg:gap-12 ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="relative w-full max-w-md shrink-0 lg:max-w-none lg:flex-1">
          <div
            aria-hidden="true"
            className={`absolute -top-4 h-8 w-8 rotate-12 ${accentClasses} ${
              reverse ? "-right-3" : "right-4"
            }`}
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
          <div
            aria-hidden="true"
            className={`absolute -bottom-4 h-6 w-6 -rotate-12 ${accentClasses} opacity-80 ${
              reverse ? "left-6" : "left-10"
            }`}
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
          <div className="overflow-hidden rounded-[2.5rem]">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="aspect-[4/3] w-full object-cover shadow-lg transition-transform duration-500 hover:scale-[1.06]"
            />
          </div>
        </div>

        <div className="w-full text-center lg:flex-1 lg:text-left">
          <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            {headingAccent ? (
              <>
                <span className={headingAccentClasses}>{headingAccent}</span>{" "}
                {heading}
              </>
            ) : (
              heading
            )}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-balance text-muted lg:mx-0">
            {paragraph}
          </p>
          <a
            href="#offer"
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-ink underline decoration-sage decoration-2 underline-offset-4"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}

export default FeatureRow;
