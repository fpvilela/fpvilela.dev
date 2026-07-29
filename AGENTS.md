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

## Single Source of Truth Instruction

This repository must preserve a strict Single Source of Truth (SoT) rule.

Working rules:

- Never duplicate domain data across multiple files, formats, or structures when those copies represent the same business fact.
- Do not introduce derived YAML, JSON, TypeScript objects, or route-specific data files that mirror or partially repeat data already owned by another source.
- Treat existing canonical data sources as authoritative, and derive route-specific views from them at runtime instead of creating parallel content sources.
- If a proposed optimization requires copying, syncing, or manually maintaining the same data in more than one place, reject that approach and preserve SoT.
- When data must be filtered for a page, keep the filtering logic in code and keep the underlying data in its canonical source.

Implementation expectation:

- Prefer one canonical source file per domain dataset.
- Prefer transformations, filtering, sorting, and projection in application code over duplicating content into page-specific source files.
- If a change appears to conflict with SoT, call out the conflict explicitly before implementing it.

## DRY Instruction

This repository must preserve a strict Don't Repeat Yourself (DRY) rule.

Working rules:

- Never duplicate the same business logic, transformation logic, validation logic, or file-loading logic across multiple files or routes.
- If the same task is performed in more than one place, extract it into a small, well-named reusable function or module instead of copying the implementation.
- Prefer removing repetition in a way that preserves the clarity of the main flow.
- In main functions such as `+page.server.ts`, `+layout.server.ts`, endpoints, or top-level route handlers, prefer keeping the execution sequence explicit and easy to read, even if the function becomes longer.
- When a route's main function is meant to explain the step-by-step flow, prefer local helpers for repeated mechanical tasks over pushing core flow into multiple external helper files.
- When refactoring repeated code, preserve the existing behavior and keep the abstraction narrow and explicit.
- If a proposed abstraction would hide important domain meaning or create an overly generic helper, keep the logic local and explain why that is the better tradeoff.

Implementation expectation:

- Shared logic may live in reusable utilities when that genuinely improves comprehension.
- Repeated low-level mechanics such as identical `try/catch`, parsing, or lookup guards may be extracted into small helpers without hiding the route's main sequence.
- Route files may remain intentionally verbose when that makes the runtime flow easier to understand at a glance.
