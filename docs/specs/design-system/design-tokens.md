# Design Tokens

## Objective

Define the reusable visual tokens that implementation can translate into global CSS variables.

## Token Status

Overall status: `Decided`

These values are approved as the initial implementation baseline. Minor tuning during UI implementation is allowed if contrast, rhythm, or responsiveness needs adjustment.

## Color System

Status: `Decided`

Define:

- Background color.
- Surface color.
- Primary text color.
- Secondary text color.
- Accent color.
- Accent contrast color.
- Border color.
- Muted tag or chip background.
- Focus ring color.

Suggested output format:

```txt
--color-bg: #f5f1e8
--color-surface: #fbf8f2
--color-text: #171717
--color-text-muted: #5f5a52
--color-accent: #1f6a5e
--color-accent-contrast: #f6fbf8
--color-border: #d8d0c4
--color-chip: #ece5d8
--color-focus: #0f4c81
```

Usage rules:

- `--color-bg` is the main page canvas.
- `--color-surface` is for subtle content grouping, not full card framing everywhere.
- `--color-accent` is the primary action and interactive emphasis color.
- `--color-focus` must remain visually distinct from the accent color.
- Links in long text should default to accent color with underline or underline-on-hover behavior.

## Typography

Status: `Decided`

Define:

- Display font family.
- Body font family.
- Monospace font family.
- Hero heading size range.
- Section heading size.
- Body copy size.
- Small metadata size.
- Preferred line-height ranges.
- Font-weight usage by role.

Questions to resolve:

- Should the site use one type family or a paired system?
- Should project and experience metadata use monospace accents?

Final decisions:

- Use a paired system.
- Display font family: `"Fraunces", "Iowan Old Style", "Times New Roman", serif`
- Body font family: `"Manrope", "Inter", "Segoe UI", sans-serif`
- Monospace font family: `"IBM Plex Mono", "SFMono-Regular", "Consolas", monospace`
- Hero heading size range: `clamp(3.4rem, 8vw, 6.8rem)`
- Hero intro line size: `clamp(1rem, 1.8vw, 1.2rem)`
- Section heading size: `clamp(1.6rem, 2.4vw, 2.4rem)`
- Body copy size: `1rem` base, `1.125rem` for lead copy
- Small metadata size: `0.875rem`
- Hero line-height: `0.95` to `1.02`
- Section heading line-height: `1.05` to `1.15`
- Body line-height: `1.6`
- Metadata line-height: `1.4`
- Weight usage:
  - Display headings: `600`
  - Section headings: `600`
  - Body text: `400`
  - Strong body emphasis: `600`
  - Metadata and labels: `500`
- Project and experience metadata may use monospace accents selectively for dates, anchors, and small labels only.

## Spacing Scale

Status: `Decided`

Define:

- Base spacing unit.
- Section vertical padding.
- Container width.
- Grid gap sizes.
- Card or item spacing.
- Mobile and desktop spacing differences.

Suggested output format:

```txt
--space-1: 0.25rem
--space-2: 0.5rem
--space-3: 0.875rem
--space-4: 1.25rem
--space-5: 2rem
--space-6: 3.5rem
--space-7: 5rem
--space-8: 7rem
--container-max: 72rem
--container-narrow: 46rem
```

Layout rules:

- Mobile horizontal padding: `1rem`
- Tablet horizontal padding: `1.5rem`
- Desktop horizontal padding: `2rem`
- Standard section vertical padding: `var(--space-7)`
- Compact section vertical padding: `var(--space-6)`
- Hero top padding should be larger than standard sections.

## Shape and Borders

Status: `Decided`

Define:

- Border radius scale.
- Border thickness defaults.
- Divider treatment.
- When rounded containers are allowed.

Final decisions:

- Border radius scale:
  - `--radius-sm: 0.4rem`
  - `--radius-md: 0.8rem`
  - `--radius-lg: 1.4rem`
- Border thickness default: `1px`
- Divider treatment: thin solid dividers using `--color-border`
- Rounded containers are allowed for chips, CTA buttons, and occasional grouped surfaces only.
- Major page sections should not all be enclosed in rounded cards.

## Shadows and Depth

Status: `Decided`

Define:

- Whether shadows exist at all.
- If used, limit them to one or two depth levels.
- Prefer subtle depth over floating-card aesthetics.

Final decisions:

- Use shadows sparingly.
- Default sections: no shadow.
- Interactive grouped surfaces may use one subtle shadow:
  - `0 10px 30px rgba(23, 23, 23, 0.06)`
- Avoid stacked shadow systems and glassmorphism.

## Motion

Status: `Decided`

Define:

- Page entrance behavior.
- Section reveal behavior.
- Hover transitions.
- Focus transitions.
- Duration and easing tokens.

Suggested output format:

```txt
--motion-fast: 140ms
--motion-base: 220ms
--motion-slow: 360ms
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1)
```

Behavior rules:

- Page entrance: subtle fade and rise on the hero only.
- Section reveal: optional low-distance fade and translate on scroll.
- Hover transitions: color, border, and transform only.
- Hover transform limit: `translateY(-2px)` maximum.
- Focus transitions should be near-instant and never delayed enough to hide focus feedback.
- Respect `prefers-reduced-motion` by disabling reveal motion and transforms.

## Accessibility Rules

Status: `Decided`

- All color choices must maintain readable contrast.
- Focus states must be visible without relying on color alone.
- Motion must be subtle and easy to disable.
- Typography decisions must preserve readability on mobile first.
