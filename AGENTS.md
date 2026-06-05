# Repository Agents

## Design System Instruction

When working on UI, layout, styling, or presentation code in this repository, always consult `docs/specs/design-system/` before proposing or generating implementation.

This requirement applies to:

- Global CSS tokens and resets.
- Component CSS.
- Layout structure.
- Section composition.
- Typography choices.
- Color usage.
- Motion and interaction styling.
- Responsive behavior.

Required source files:

1. `docs/specs/design-system/visual-direction.md`
2. `docs/specs/design-system/design-tokens.md`
3. `docs/specs/design-system/page-composition.md`

Working rules:

- Treat those files as the primary design authority for the site.
- Do not invent a conflicting visual language without first updating the design specs.
- When generating CSS or UI markup, translate the documented decisions into code explicitly.
- If a requested UI change conflicts with the design specs, call out the conflict and either update the specs first or state that the implementation is intentionally diverging.
- Prefer spec-driven decisions over generic portfolio or framework defaults.

Implementation expectation:

- CSS variables should be derived from `design-tokens.md`.
- Section layout should follow `page-composition.md`.
- Visual tone should follow `visual-direction.md`.

If the task is not UI-related, use normal repository context and ignore this instruction.
