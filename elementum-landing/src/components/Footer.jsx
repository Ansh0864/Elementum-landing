import WaveDivider from "./WaveDivider.jsx";

const columns = [
  {
    title: "Company",
    links: ["Home", "Studio", "Service", "Blog"],
  },
  {
    title: "Terms & Policies",
    links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accessibility"],
  },
  {
    title: "Follow Us",
    links: ["Instagram", "LinkedIn", "Youtube", "Twitter"],
  },
];

function Footer() {
  return (
    <footer className="bg-sage-light">
      <WaveDivider color="sage" className="h-8" />

      <div className="px-6 pb-8 pt-2 sm:px-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 sm:grid-cols-4">
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="font-display text-sm font-semibold text-ink">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-sm text-muted transition-colors hover:text-sage"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-semibold text-ink">
              Get in touch
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic text-muted">
              <p>1496 W Fulton St, STE 20, Chicago, IL 63007</p>
              <p>
                <a href="tel:0123456789000" className="hover:text-sage">
                  0123 456 789 000
                </a>
              </p>
              <p>
                <a href="mailto:info@elementum.com" className="hover:text-sage">
                  info@elementum.com
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-ink/10 pt-6 text-xs text-muted sm:flex-row">
          <p>© 2026 Elementum. All rights reserved.</p>
          <p>Made with intention, for changemakers.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
