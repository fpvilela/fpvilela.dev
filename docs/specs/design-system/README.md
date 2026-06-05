# Design System Spec

This directory defines the visual specification layer for the site.

It sits between the content and structural specs in `docs/specs/homepage/` and the build work described in `docs/specs/implementation/implementation-plan.md`.

Use these files in this order:

1. `visual-direction.md`
2. `design-tokens.md`
3. `page-composition.md`

The intent is to move from broad aesthetic decisions to concrete implementation rules.

## Scope

These specs should define:

- Visual tone and brand direction.
- Color, typography, spacing, and motion rules.
- Reusable layout and section behavior.
- Homepage-specific composition decisions.

These specs should not define:

- Resume data structure.
- Final code implementation details.
- Copy beyond short UI labels or examples.

## Working Method

When a decision is still open, mark it as one of:

- `Decided`
- `Needs exploration`
- `Needs comparison`

Only implement major visual choices in code after they are marked `Decided`.
