# Notebook

A paper-and-ink design system: warm paper, one ink, pastel tints used like a marker, hand-drawn
marks, nothing rounded. Tokens, one stylesheet, React components for Next.js, and a Storybook.

Extracted from [romeohunneaul/portfolio](https://github.com/romeohunneaul/portfolio).

## Install

```bash
npm i github:romeohunneaul/notebook
```

The package ships TypeScript source. In `next.config.ts`:

```ts
const nextConfig = { transpilePackages: ["@romeohunneaul/notebook"] };
```

## Styles

Tailwind v4 is the styling engine: the stylesheet declares the tokens as Tailwind utilities
(`bg-paper`, `text-ink`, `border-rule`, `text-meta`, `font-mono`…) and the component classes.
In your global CSS, after Tailwind, import it and let Tailwind scan the package so the utilities
the components use get generated:

```css
@import "tailwindcss";
@import "@romeohunneaul/notebook/styles.css";
@source "../../node_modules/@romeohunneaul/notebook/src";
```

Paint the root yourself: `<body className="notebook-body font-sans">` (or `bg-paper text-ink`).

**Fonts.** The type tokens expect `--font-schibsted` and `--font-space-mono`; without them they fall
back to the same faces by name. With `next/font`:

```tsx
import { Schibsted_Grotesk, Space_Mono } from "next/font/google";
const sans = Schibsted_Grotesk({ subsets: ["latin"], variable: "--font-schibsted" });
const mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-space-mono" });
// <html className={`${sans.variable} ${mono.variable}`}>
```

**Night theme.** Tokens flip when `<html data-theme="dark">`. Set it before first paint with the
inline script the package exports, and let `ThemeToggle` switch it:

```tsx
import { THEME_SCRIPT } from "@romeohunneaul/notebook";
// in <head>: <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
```

## Components

```tsx
import { Button, Chip, NoteCard, SectionHeading, EntryRow, ThemeToggle } from "@romeohunneaul/notebook";
```

| Component | What |
|---|---|
| `Button` | `variant: "outlined" \| "quiet"`. Ink line and hard shadow, or bare type over a drawn line. Never a fill |
| `Chip` | bare mono type; `state: "rest" \| "selected" \| "disabled"`. The marker swipes when the enclosing `.draws` row is hovered |
| `NoteCard` | a published note: title, date, summary, tags; `href` makes it a link |
| `EntryRow`, `TextLink` | a list row and a link, both drawing their mark on hover |
| `SectionHeading` | a real heading closed by an ink rule, optional `aside` and `lede` |
| `Disclosure`, `OpenOnHash` | a `<details>` with a drawn summary, opened by URL hash |
| `Highlight`, `Mark`, `DrawnMark`, `Sticker` | the marker tint behind text, hand-drawn marks, the margin sticker |
| `Logo`, `LogoSquare`, `RidgeSketch` | the wordmark and its motions, the margin sketch |
| `ThemeToggle`, `useTheme`, `setTheme` | the day / night switch and its hook |
| `Reveal` (`@romeohunneaul/notebook/reveal`) | GSAP entrance; needs `gsap` and `@gsap/react` installed |

Every component has a story: `npm run storybook` in this repo, `npm run build-storybook` for a
static site to host.

## Rules that travel with the tokens

- One loud colour (`--accent-strong`), used for one mark. Tints are backgrounds behind text.
- Highlight = meaning (static). Drawn mark = interaction (hover, focus, current).
- `--radius: 0`. Nothing rounded.
- Soft ink (`text-soft`) is for metadata only.
- Interaction makes three moves: an ink line (draw), a paper shift with `--shadow-hover` (shift), the marker (swipe). Entrances (logo, sketch, `Reveal`) are not interactions.
- Spacing utilities step on `--space-1` (4px); titles use `font-title`, hand-drawn strokes `--stroke-fine`.
- `prefers-reduced-motion: reduce` shows every drawing finished and every hover at once.

## License

MIT
