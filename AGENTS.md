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

## Svelte Verification Instruction

When the user asks for any code change, review, explanation, suggestion, or clarification involving files, directories, or code in this repository, treat Svelte and SvelteKit behavior as verification-required.

This requirement applies especially to:

- `.svelte`, `.svelte.js`, and `.svelte.ts` files.
- Routing, layouts, pages, load behavior, actions, forms, and other SvelteKit conventions.
- Template syntax, reactivity, runes, bindings, events, snippets, rendering, and component composition.
- Styling behavior that depends on Svelte semantics, including scoped styles and `:global(...)`.
- TypeScript, JavaScript, HTML, and CSS changes when they interact with Svelte or SvelteKit behavior.
- Questions about project structure, directory conventions, or framework-specific best practices.

Working rules:

- Never guess about how Svelte or SvelteKit works.
- Always verify current behavior against the most recent official Svelte documentation before answering or changing code.
- Use the internet for that verification whenever the request depends on Svelte or SvelteKit behavior.
- Prefer official sources from `https://svelte.dev/` only.
- Check the most relevant current documentation pages first, then use package-specific references as needed.
- Prefer primary documentation and specifications over blog posts, tutorials, forum answers, or memory.
- If the answer depends on recent framework behavior, cite or reference the official page used.
- If official documentation is unclear or silent, say that explicitly instead of inventing certainty.

Preferred official sources:

1. `https://svelte.dev/docs/svelte/overview`
2. `https://svelte.dev/docs/kit/introduction`
3. `https://svelte.dev/docs/svelte/llms.txt`
4. `https://svelte.dev/docs/kit/llms.txt`
5. `https://svelte.dev/llms.txt`

Implementation expectation:

- Verify the framework behavior first.
- Then inspect the local repository code.
- Then propose or implement changes based on both the verified documentation and the repository context.
- When recommending a change, align the explanation with how Svelte actually works today, not with older Svelte patterns unless the repository is intentionally using legacy APIs.