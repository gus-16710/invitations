# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production (static export)
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 16 static-export app** (`output: "export"` in `next.config.js`) that serves as a digital invitation platform for Spanish-language events. The domain is `invitaciones.unaideamas.com`.

### App Structure

`src/app/` uses the Next.js App Router. Each invitation lives under a category route:

- `/bautizos/[name]/` — Christening/baptism invitations
- `/bodas/[couple]/` — Wedding invitations
- `/quinces/[name]/` — Quinceañera invitations
- `/festejos/[name]/` — General celebration invitations
- `/escolar/[name]/` — School event invitations

Each individual invitation is a collection of section components (Header, Ceremony, Reception, Gallery, GodParents, Confirm, etc.) composed in a `page.tsx`. Assets (images, audio) for each invitation live in `public/img/[category]/[name]/`.

### Key Libraries

- **Framer Motion** — animations on most section components
- **Swiper / Splide / react-photo-album** — photo galleries and carousels
- **yet-another-react-lightbox** — image lightbox
- **canvas-confetti** — celebratory effects
- **NextUI + Flowbite** — UI components (configured in `tailwind.config.ts`)
- **react-player** — embedded video
- **@number-flow/react** — animated number counters

### Path Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).

### Static Export Notes

- Images must use `unoptimized` (set globally in `next.config.js`)
- All routes produce static HTML at build time — no server-side data fetching
- `trailingSlash: true` is enabled
