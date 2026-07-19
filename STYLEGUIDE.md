# Cape Cod Vibin' web style guide

This document is the source of truth for the current site and every page added later. The existing home page is the visual reference implementation. When this guide and an accidental one-off implementation differ, follow this guide and the shared tokens.

## 1. Creative direction

The visual identity is a **refined Cape Cod field guide**: warm, local, handcrafted, calm, and quietly nostalgic. It should feel like an illustrated coastal journal made by people who know the places—not a generic beach-resort site.

The signature combination is:

- Oyster-paper backgrounds and generous negative space.
- Atlantic navy as the visual anchor.
- Weathered teal, seafoam, marsh green, and sandy beige as natural supporting colors.
- Editorial serif headlines paired with clear sans-serif utility text.
- Hand-painted, location-specific artwork.
- Soft depth, rounded forms, and restrained movement.

Avoid tropical brights, glossy luxury styling, nautical clichés, neon color, purple gradients, generic stock beach photography, overly playful bubble forms, dense dashboard layouts, or a second visual system.

## 2. Required CSS architecture

Every page must load only the shared entrypoint:

```html
<link rel="stylesheet" href="css/site.css" />
```

`css/site.css` imports every stylesheet in dependency order. This makes the full design system available to every current and future page.

| File | Responsibility |
| --- | --- |
| `variables.css` | Brand tokens: colors, type, spacing, layout, radii, shadows, motion |
| `base.css` | Reset, global elements, layout primitives, headings, buttons, utilities |
| `animations.css` | Shared reveal behavior and reduced-motion handling |
| `nav.css` | Site-wide header, desktop navigation, mobile menu |
| `hero.css` | Hero composition and hero-specific responsive behavior |
| `collection.css` | Artwork collection grid and print cards |
| `locations.css` | Featured-location grid and chips |
| `story.css` | Editorial image-and-copy split layout |
| `social.css` | Dark social section and social link cards |
| `shop.css` | Shop call-to-action layout |
| `footer.css` | Site-wide footer |

Placement rules:

- Extend an existing component in its existing file.
- Put broadly reusable primitives in `base.css`.
- Put new global values in `variables.css` before using them.
- For a truly new component family, create `css/<component>.css` and add exactly one import to `site.css` after its dependencies.
- Never use inline styles or page-local `<style>` blocks.
- Never hard-code a brand hex value outside `variables.css`. Existing translucent colors must be derived from the approved palette.

## 3. Color system

Use semantic tokens when one fits; use named brand tokens only when the color itself carries meaning.

| Token | Value | Role |
| --- | --- | --- |
| `--color-atlantic-navy` | `#1c3a4b` | Primary text, dark sections, primary buttons, structural anchor |
| `--color-weathered-teal` | `#45737a` | Links, eyebrows, active/hover accents |
| `--color-seafoam-blue` | `#9fc9c3` | Soft highlights and text on navy |
| `--color-marsh-green` | `#7c8c5b` | Illustrated/natural accent; use sparingly in UI |
| `--color-sandy-beige` | `#e3d3ae` | Borders, image grounds, warm dividers |
| `--color-oyster-cream` | `#f6f1e7` | Primary page background and text on navy |
| `--color-white` | `#ffffff` | Alternate section/card surface |
| `--color-text-muted` | `#4a6472` | Supporting copy on light backgrounds |

Surface rhythm should alternate cream and white, with navy reserved for high-emphasis bands such as social proof and the footer. Teal is an accent, not a large-area replacement for navy. Marsh green belongs mainly in artwork and small natural details.

Contrast rules:

- On navy, use oyster cream for primary text and seafoam or translucent oyster cream for secondary text.
- On cream or white, use navy for headings/body anchors and `--color-text-muted` for secondary copy.
- Do not place muted teal copy on navy or beige copy on cream when it weakens readability.

## 4. Typography

The approved pair is fixed:

- Display: `--font-display` — Fraunces, used for headings, place names, and expressive brand moments.
- Body: `--font-body` — Inter, used for paragraphs, navigation, labels, controls, and utility content.

Use the existing size tokens (`--fs-xs` through `--fs-4xl`) and line-height tokens. Do not introduce arbitrary pixel font sizes.

Typography patterns:

- Hero title: Fraunces, `--fs-4xl`, wide tracking; `--fs-3xl` on small screens.
- Section title: Fraunces, `--fs-2xl`; `--fs-xl` on small screens.
- Card/place title: Fraunces, usually `--fs-lg`.
- Body copy: Inter, `--fs-base` or `--fs-md`, `--lh-normal`.
- Eyebrow/metadata: Inter, `--fs-xs`, semibold, uppercase, `--tracking-wider`, teal.
- Buttons/nav: Inter, `--fs-sm`, medium or semibold, uppercase, `--tracking-wide`.

Keep paragraphs to roughly 50–60 characters per line (`50ch`–`60ch`). Use title case for editorial headings, uppercase only for short labels, navigation, and the hero statement. Avoid all-caps paragraphs.

## 5. Spacing and layout

Spacing follows the 8px-based `--space-1` through `--space-8` scale. Use these tokens instead of one-off margins and padding.

- Main content width: `--container-max` (`1240px`).
- Standard horizontal gutter: `--container-pad` (`1.5rem`).
- Standard section spacing: `--space-7` vertically; `--space-6` at 768px and below.
- Standard section intro: maximum `640px`, with `--space-5` below it.
- Content alignment: editorial sections may be left-aligned; broad calls to action may be centered.
- Use generous breathing room. Do not compress sections to fit more content above the fold.

Preferred responsive grid behavior:

- Three-column cards: 3 columns desktop, 2 at 1024px, 1 at 640px.
- Five-column compact items: 5 desktop, 3 at 1024px, 2 at 480px.
- Two-column editorial split: 2 desktop, 1 near 900px.

Canonical breakpoints are 480px, 640px when a card grid specifically needs it, 768px, 900px, and 1024px. Do not add nearly identical breakpoints without a concrete layout need.

## 6. Shape, border, and depth

Use the tokenized radii:

- `--radius-sm`: compact controls and subtle details.
- `--radius-md`: cards, chips, and standard panels.
- `--radius-lg`: large editorial and social panels.
- `--radius-pill`: buttons and compact CTAs.

Depth is soft and navy-tinted. Use `--shadow-soft` at rest and `--shadow-hover` only for interactive elevation. Borders should normally use `--color-border`. Avoid heavy black shadows, glassmorphism beyond the existing blurred sticky navigation, sharp card corners, or mixed radius styles in one component family.

## 7. Components and composition

### Header and navigation

Reuse the existing `.nav` markup and classes. It is sticky, translucent cream, and 76px tall. Desktop links use the animated teal underline; the Shop action is a navy pill. At 1024px and below, use the existing full-screen mobile menu and toggle behavior from `js/main.js`.

### Hero

Use a centered, spacious composition with the brand mark, one concise Fraunces statement, one supporting sentence, and no more than two actions. The existing coastal texture may be reused at low opacity. Do not crowd the hero with cards, badges, or multiple competing messages.

### Section introduction

Use this order:

```html
<div class="section-head">
  <span class="eyebrow">Short context</span>
  <h2 class="section-title">Editorial heading</h2>
  <p class="section-copy">One concise supporting idea.</p>
</div>
```

Add `.section-head--center` only when the whole section is intentionally centered.

### Buttons

Use `.btn` with an existing modifier:

- `.btn--primary`: default high-emphasis action.
- `.btn--secondary`: outlined action beside a primary action on light backgrounds.
- `.btn--pale`: action on navy/dark backgrounds.

Button labels should be short verbs such as “Shop Now,” “Explore Locations,” or “Read the Story.” Do not invent square, gradient, or oversized button variants.

### Cards

Cards use a white or warm neutral surface, meaningful artwork, `--radius-md` or `--radius-lg`, and soft elevation. On hover/focus, lift by 4–6px; image cards may scale their image to approximately `1.045`. Keep metadata compact and follow the established order: place name, town/region label, short tagline.

### Dark sections

Dark sections use Atlantic navy, oyster headings, softened oyster body copy, and seafoam accents. Keep dark sections purposeful and infrequent so they retain emphasis.

### Header and footer reuse

All standalone pages should retain the same header and footer structure, social URLs, contact treatment, logo, and primary Shop destination unless product requirements explicitly change them.

## 8. Imagery and iconography

Use existing assets before adding new ones. New imagery should be:

- Based on a real Cape Cod place or recognizable local detail.
- Painterly, screen-print-like, or editorially illustrated.
- Dominated by the approved navy/teal/seafoam/sand/cream palette.
- Calm and graphic rather than photorealistic or stock-like.

Maintain consistent artwork crops within a grid. Product/print cards use a 4:5 frame. Use SVG for simple icons and decorative textures; include useful alternative text for content imagery and empty `alt` text for purely decorative images.

## 9. Motion and interaction

Motion is restrained and coastal-calm:

- Use `--ease-base` and the existing duration tokens.
- Reveal content with the existing `[data-reveal]` pattern: fade plus a 24px upward settle.
- Hover elevation should be subtle and reversible.
- Avoid looping decorative motion, bounce easing, parallax, or unrelated animation styles.
- Every effect must degrade cleanly under `prefers-reduced-motion: reduce`.

Hover and keyboard focus should receive equivalent visual feedback. Do not remove browser focus indication unless replacing it with a clear, high-contrast `:focus-visible` treatment.

## 10. Content voice

Write like a knowledgeable local: specific, warm, understated, and proud. Name real places and sensory details. Favor short statements over slogans piled together.

Good: “The light on Scargo Lake” and “Wear your favorite place.”

Avoid generic tourism language such as “escape to paradise,” invented superlatives, corporate product jargon, or copy that could describe any coastline.

## 11. Accessibility and quality requirements

- Use semantic landmarks and a single descriptive `h1` per page.
- Keep heading levels in order.
- Give controls accessible names and preserve `aria-expanded`/`aria-controls` behavior for navigation.
- Ensure all links and controls are keyboard reachable.
- Use meaningful `alt` text for informative images and `alt=""` for decoration.
- External links opened in a new tab must include `rel="noopener noreferrer"`.
- Pages must remain usable at 200% zoom and at 320px viewport width.
- Avoid layout shifts by providing image dimensions or stable aspect ratios.
- Keep JavaScript progressive: content must remain readable if animation APIs are unavailable.

## 12. New-page starter

Use the current `index.html` header and footer as the canonical shared chrome. The page body should begin with this structure:

```html
<main id="top">
  <section class="section">
    <div class="container">
      <div class="section-head" data-reveal>
        <span class="eyebrow">Context</span>
        <h1 class="section-title">Page title</h1>
        <p class="section-copy">A concise local, specific introduction.</p>
      </div>
      <!-- Page content using existing or documented components -->
    </div>
  </section>
</main>
```

## 13. Pre-merge checklist for agents

- Read this guide and inspect the current home page before editing.
- Confirm the page loads `css/site.css` and does not individually link component CSS.
- Confirm every import in `css/site.css` resolves and remains in dependency order.
- Reuse existing tokens and primitives; add tokens only when the value is genuinely reusable.
- Search for inline styles, raw brand hex values outside `variables.css`, and duplicate component rules.
- Check desktop, 1024px, 768px, 480px, and 320px layouts.
- Test hover, keyboard focus, mobile navigation, Escape-to-close, and reduced motion.
- Verify headings, alternative text, external-link attributes, and color contrast.
- Preserve the cream/navy/teal editorial identity and the local, illustrated Cape Cod voice.

