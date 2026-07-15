import { useState } from "react";

const links = ["Studio", "Service", "Blog", "Contact"];

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-30">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className="font-display text-xl font-semibold tracking-tight text-ink"
        >
          Elementum
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted transition-colors hover:text-ink"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-ink/10 bg-ink px-5 py-2.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5 sm:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 rounded bg-ink transition-transform duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-ink transition-opacity duration-300 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-6 rounded bg-ink transition-transform duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out md:hidden ${
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-6 sm:px-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-sage-light hover:text-ink"
              >
                {link}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-ink px-4 py-2.5 text-center text-sm font-medium text-cream"
            >
              Let&apos;s talk
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
