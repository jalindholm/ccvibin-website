# Cape Cod Vibin' website instructions

These instructions apply to every file and every future page in this repository.

Before changing markup, styles, imagery, or page layout, read [`STYLEGUIDE.md`](STYLEGUIDE.md) in full. It is the visual and implementation contract for this site.

## Non-negotiable rules

1. Preserve the established "refined Cape Cod field guide" aesthetic. Extend the existing system; do not introduce a competing visual theme.
2. Every HTML page must load `css/site.css`, the single shared stylesheet entrypoint. Do not link component CSS files individually and do not create page-specific stylesheet bundles.
3. Add reusable tokens to `css/variables.css`, shared primitives to `css/base.css`, and component styles to the closest existing component file. If a genuinely new reusable component is needed, create one focused CSS file and add its `@import` to `css/site.css`.
4. Use existing CSS custom properties. Do not place raw brand colors, one-off spacing scales, font families, shadows, radii, or transition timing in component rules when a token exists.
5. Do not use inline `style` attributes. Do not duplicate shared rules in HTML or JavaScript.
6. Follow the existing BEM-like class pattern: `.component`, `.component__element`, `.component--modifier`.
7. Use the existing `container`, `section`, `section-head`, `eyebrow`, `section-title`, `section-copy`, and `btn` primitives before creating alternatives.
8. Preserve responsive, keyboard, focus, reduced-motion, and semantic HTML behavior. New pages must work at 320px wide without horizontal scrolling.
9. Reuse the site header, footer, logo, and existing artwork language. New imagery should feel hand-painted, local, place-specific, and drawn from the approved palette.
10. Do not modify another contributor's unrelated work. Validate the final page and confirm that every import in `css/site.css` resolves.

## Required page setup

Root-level pages must use:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
<link rel="stylesheet" href="css/site.css" />
```

Use the appropriate relative path to `css/site.css` if a page is placed in a subdirectory.

