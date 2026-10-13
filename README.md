# Cadence

A hand-built React + TypeScript version of the Cadence Leadership & Communication website, which we recently launched on Webflow. I'm rebuilding it from scratch to show how I work in React: component structure, typing, and keeping content separate from layout.

It's a work in progress. The home page is the focus; the other routes are stubs.

## Running it

```bash
npm install
npm run dev
```

Other scripts: `npm run build` (type-check, then bundle), `npm run lint`, `npm run preview`.

## Stack

- React 19 and TypeScript
- Vite
- React Router
- CSS Modules for component styles, with Bootstrap's grid loaded from a CDN
- General Sans via Fontshare

## How it's organised

```
src/
  components/   One folder per component, each with its own CSS module
  content/      All the site copy, image URLs and nav links
  pages/        Home, About, NotFound
  types/        Shared prop and content types
  Utils/        Small hooks (useMediaQuery)
```

**Content lives in `src/content/`.** Components don't have copy written into their JSX; they import it. Each file covers one area (`home.ts`, `services.ts`, `team.ts` and so on) and is typed with the interfaces in `src/types`. Editing the site's wording shouldn't mean opening a component, and a missing field should show up as a type error.

**Styling** is CSS Modules plus a handful of design tokens (colours, spacing, fonts) in `src/index.css`. Bootstrap is only there for the grid and a few utility classes.

## Things worth a look

- **Draggable team rail** (`components/TeamSection`): click-and-drag scrolling built on pointer events, plus Left/Right buttons that scroll one card at a time. No carousel library.
- **Tabbed services section** (`components/TabSection`): a tab bar on larger screens, which turns into a stacked list on mobile via a `useMediaQuery` hook.
- **Typed content layer**, as described above.

## Status

Still to do:

- The Coaching, Courses, 360 and About pages. The nav links exist but most routes aren't built.
- The footer is a placeholder.
- The two test files (`Button`, `CornerTab`) are written for Vitest, but Vitest and Testing Library aren't installed yet, so they don't run and are excluded from the type-check.
- Accessibility pass and real alt text on the team photos.
