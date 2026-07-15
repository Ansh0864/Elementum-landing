import Reveal from "./Reveal.jsx";

const offers = [
  {
    label: "Office of multiple interest content",
    title: "Collaborative & partnership",
    accent: "coral",
  },
  {
    label: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
    accent: "gold",
  },
  {
    label: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
    accent: "sage",
  },
];

const accentClassMap = {
  coral: {
    text: "text-coral",
    titleHover: "group-hover:text-coral",
  },
  gold: {
    text: "text-gold",
    titleHover: "group-hover:text-gold",
  },
  sage: {
    text: "text-sage",
    titleHover: "group-hover:text-sage",
  },
};

function OfferList() {
  return (
    <section id="offer" className="mx-auto max-w-6xl px-6 py-10 sm:px-10 md:py-14">
      <h2 className="font-display text-balance text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        What <span className="text-sage">we can</span>{" "}
        <span className="text-coral">offer</span> you!
      </h2>

      <ul className="mt-8 divide-y divide-ink/10 border-t border-ink/10">
        {offers.map((offer, index) => {
          const accent = accentClassMap[offer.accent];
          return (
            <Reveal key={offer.title} as="li" delay={index * 100}>
              <a
                href="#contact"
                className="group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-center sm:justify-between sm:gap-6"
              >
                <span className="w-full max-w-[220px] text-sm text-muted">
                  {offer.label}
                </span>
                <span
                  className={`font-display flex-1 text-xl font-medium text-ink transition-colors sm:text-2xl ${accent.titleHover}`}
                >
                  {offer.title}
                </span>
                <span
                  aria-hidden="true"
                  className={`hidden text-2xl transition-transform group-hover:translate-x-1 sm:inline-block ${accent.text}`}
                >
                  →
                </span>
              </a>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}

export default OfferList;
