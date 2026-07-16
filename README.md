# Automobili Parfums — Haute Parfumerie Sant'Agata

A luxury fragrance house storefront built with React 19, TypeScript, Vite 8, and Tailwind CSS 4. The interface follows a strict automotive design language: carbon-black surfaces, a single gallant-yellow accent, a 0px monolithic radius rule, and an editorial display type scale.

The application covers the full commerce journey — campaign landing, catalogue browsing, product detail, a guided scent profiler, bespoke commission enquiry, concierge contact, and a validated checkout funnel with order confirmation.

## Highlights

- **Seven routed views** with hash-based navigation, so every screen is bookmarkable and browser back/forward works out of the box.
- **Reactive shopping bag** built on a dependency-free observable store with `localStorage` persistence and derived subtotal.
- **Scent profiler** — a multi-step questionnaire that scores the catalogue and recommends a matching fragrance.
- **Integer minor-unit pricing** throughout, so no currency value ever passes through a floating-point calculation.
- **Accessible by construction** — skip-to-content link, keyboard-navigable search overlay, labelled controls, focus-visible states, and reduced-motion-safe transitions.
- **Responsive design system** with a documented token layer for color, typography, and spacing.

## Tech Stack

| Layer | Choice |
| --- | --- |
| UI runtime | React 19 + React DOM |
| Language | TypeScript 7 (strict, ES2022, bundler resolution) |
| Build tooling | Vite 8 with `@vitejs/plugin-react` |
| Styling | Tailwind CSS 4 via `@tailwindcss/vite` |
| Icons | `lucide-react` |
| Animation | `motion` |
| Runtime server | Express with `dotenv` |

## Getting Started

```bash
npm install
npm run dev
```

The dev server binds to `http://localhost:3000` and listens on all interfaces.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server on port 3000 |
| `npm run build` | Produce a production bundle in `dist/` |
| `npm run preview` | Serve the production bundle locally |
| `npm run lint` | Type-check the project with `tsc --noEmit` |
| `npm run clean` | Remove `dist/` and generated server output |

## Environment

Copy `.env.example` to `.env` and provide:

| Variable | Purpose |
| --- | --- |
| `GEMINI_API_KEY` | Credential for server-side Gemini API calls |
| `APP_URL` | Canonical deployed URL, used for self-referential links and OAuth callbacks |

Secrets are git-ignored. Only `.env.example` is tracked.

## Project Structure

```
├── index.html                  # Host document, SEO meta, font preloads
├── vite.config.ts              # React + Tailwind plugins, @ alias
├── tsconfig.json               # ES2022, bundler resolution, path aliases
├── metadata.json               # Applet identity and capability declaration
└── src/
    ├── main.tsx                # React 19 root bootstrap
    ├── App.tsx                 # Application shell, hash router, overlays
    ├── index.css               # Design tokens and global type rules
    ├── types/
    │   └── commerce.ts         # Fragrance, variant, cart, order contracts
    ├── data/
    │   └── fragrances.ts       # Product catalogue, hero campaign, shipping rates
    ├── lib/
    │   ├── cartStore.ts        # Observable bag store with persistence
    │   └── formatters.ts       # Currency and editorial date formatting
    ├── components/
    │   ├── ui/                 # Giallo, Ghost, Outlined buttons; SectionHeading
    │   ├── layout/             # Navbar, Footer
    │   ├── product/            # ProductCard
    │   ├── cart/               # CartDrawer
    │   └── search/             # SearchModal
    ├── views/
    │   ├── HomeView.tsx        # Campaign landing
    │   ├── CollectionView.tsx  # Filterable catalogue grid
    │   ├── ProductDetailView.tsx
    │   ├── ProfilerView.tsx    # Guided scent recommendation
    │   ├── AtelierView.tsx     # Bespoke commission enquiry
    │   ├── ConciergeView.tsx   # Contact and service commitments
    │   └── CheckoutView.tsx    # Validated funnel with order confirmation
    └── assets/images/          # Campaign and product photography
```

## Architecture Notes

**Routing.** `App.tsx` maintains the active view in React state and mirrors it to `window.location.hash`, listening for `hashchange` to support direct links and history navigation. Product detail routes encode the product slug (`#pdp/giallo-corsa-extrait`).

**State.** There is no external state library. `cartStore.ts` holds module-level cart state, a `Set` of subscribers, and a `useCart` hook that subscribes via `useEffect`. Every mutation persists to a versioned `localStorage` key.

**Money.** All prices are integer cents (`priceMinor`). Formatting happens only at render time in `formatters.ts`, which keeps totals exact.

**Styling.** Colors, the type scale, and an 8px spacing rhythm are declared as Tailwind 4 `@theme` tokens and mirrored into `:root` for direct CSS access. A global `border-radius: 0` rule enforces the hard-edged aesthetic.

**Accessibility.** Interactive controls are real `<button>` elements with descriptive labels, the search overlay traps and manages focus on open, and every route is reachable from the primary navigation.

## Routes

| Hash | View |
| --- | --- |
| `#` | Home |
| `#collection` | Collection grid |
| `#pdp/<slug>` | Product detail |
| `#profiler` | Scent profiler |
| `#atelier` | Bespoke atelier |
| `#concierge` | Concierge |
| `#checkout` | Checkout |

## Production Build

```bash
npm run build
npm run preview
```

The static bundle is emitted to `dist/` and can be deployed to any static host or CDN.

## License

Proprietary. All branding, campaign copy, and olfactory copy are the property of their respective owners.