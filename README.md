# Elementum — Landing Page

A responsive React landing page built from a Figma design, using Tailwind CSS v4 for styling and a handful of small custom hooks for scroll-based animation. No UI framework or component library — everything is hand-built and componentized for reuse.

## Tech Stack

- **React 18** + **Vite** — app shell and dev server
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — utility-first styling, theme tokens defined in `src/index.css`
- Plain CSS keyframes for animation (no animation library)

## Getting Started

```bash
npm install
npm run dev       # start local dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

Requires Node 18+.

## Project Structure

```
elementum-landing/
├── index.html
├── package.json
├── vite.config.js          # Vite + @tailwindcss/vite plugin
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx             # React root
    ├── App.jsx              # routing/composition only — no logic
    ├── index.css            # Tailwind import + @theme design tokens + keyframes
    ├── pages/
    │   └── Home.jsx         # composes all sections in order
    ├── hooks/
    │   ├── useInView.js     # IntersectionObserver hook, powers scroll reveals
    │   └── useScrollY.js    # throttled scroll position, powers the hero parallax
    └── components/
        ├── Navbar.jsx        # sticky header + animated mobile hamburger menu
        ├── Hero.jsx          # headline, scattered avatar cluster, parallax blob
        ├── AvatarCluster.jsx # reusable scattered-avatar layout (used in Hero + Testimonial)
        ├── FeatureRow.jsx    # reusable alternating image/text row
        ├── OfferList.jsx     # "What we can offer you" case-study rows
        ├── Testimonial.jsx   # customer quote section
        ├── Newsletter.jsx    # subscribe form with validation + inline feedback
        ├── WaveDivider.jsx   # animated wavy line divider between sections
        ├── Footer.jsx        # link columns + contact details
        ├── Reveal.jsx        # fade/slide-up wrapper for scroll-triggered reveals
        └── BackToTop.jsx     # floating scroll-to-top button
```

## Design Notes

- **Colors, fonts, and border-radius tokens** are defined once in `src/index.css` under `@theme` (Tailwind v4's CSS-first config) — change a value there and it updates everywhere it's used.
- **Component reusability**: `FeatureRow` and `AvatarCluster` are each used more than once with different props/content rather than duplicated per section. `Reveal` and `WaveDivider` are generic wrappers used throughout the page.
- **Responsiveness**: layout is mobile-first with `sm:` / `md:` / `lg:` breakpoints; the avatar clusters and nav collapse to simpler mobile-friendly layouts under `md`.

## Interactions & Animations

- Scroll-triggered fade-up reveals on each major section (staggered for the offer list rows)
- Animated mobile menu (hamburger → X, slide-down panel)
- Parallax-drifting decorative blob in the hero
- Ambient floating avatars with staggered timing
- Animated wave dividers between sections
- Hover states: nav links, offer rows (color + arrow shift), images (subtle zoom), avatars (scale up), buttons (lift)
- Functional newsletter form with email validation and inline success/error feedback
- Back-to-top button that appears after scrolling
- All animations respect `prefers-reduced-motion`

## Notes

- Images (avatars, feature photos) are pulled from `pravatar.cc` and `images.unsplash.com` — swap these for real assets before shipping to production.
- No routing library is used; `App.jsx` is kept as the composition/routing entry point per project convention, ready to introduce React Router if additional pages are added later.
