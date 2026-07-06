# Project Architecture

This document defines the organization rules for `fpvilela.dev`.

It exists to describe the structure required by the current project, the current SvelteKit setup, and the code boundaries already established in the repository.

New implementations must follow this architecture unless this document is intentionally updated first.

## Objectives

The project structure must make the following things clear:

- what is route code;
- what is reusable library code;
- what is server-only code;
- what is raw source data;
- what is transformation logic;
- what is page-facing output.

The architecture is designed to keep data loading predictable, imports safe, and feature code easy to locate.

## Project-Level Structure

This project uses the following high-level structure:

```text
data/
docs/
src/
  lib/
  routes/
```

Each top-level area has a different purpose.

### `data/`

`data/` stores raw content sources used by the application.

Current example:

- `data/resume/*.yaml`

Rules:

- keep only raw content files here;
- do not place application logic here;
- do not place UI code here;
- treat these files as source material, not final page models.

### `docs/`

`docs/` stores written project documentation, specifications, and architecture decisions.

Rules:

- architecture and implementation agreements belong here;
- design specifications belong here;
- this directory is documentation only, not runtime code.

### `src/`

`src/` stores the application code.

This project follows the SvelteKit split between:

- `src/routes` for route entry points and route-local code;
- `src/lib` for reusable library code;
- `src/lib/server` for server-only library code.

## SvelteKit Boundaries

SvelteKit gives this project an important structural distinction:

- `src/lib` is reusable library code;
- `src/lib/server` is reusable server-only library code;
- `+page.server.ts` is a server entry point for page data loading;
- `+page.svelte` consumes the data returned by `load()`.

Practical meaning for this project:

- if code can be shared with Svelte components, it may live in `src/lib`;
- if code reads files or must never be imported by client-facing code, it must live in `src/lib/server`;
- page-specific data loading starts in `+page.server.ts`.

## Current Feature Pattern: Resume Data

The resume flow is the current reference pattern for structured server-side data loading.

```text
data/
  resume/
    companies.yaml
    experiences.yaml
    projects.yaml
    roles.yaml
    ...

src/
  lib/
    types/
      resume.ts
    server/
      resume/
        build-experiences.ts
        load-resume-sources.ts
        source-types.ts
  routes/
    +page.server.ts
    +page.svelte
```

This structure exists because the feature contains four distinct kinds of code:

1. raw source files;
2. raw source record definitions;
3. source loading;
4. derived page-facing output assembly.

Those concerns must not be collapsed into one file.

## Directory Responsibilities

### `src/routes/`

`src/routes/` contains route entry points and route-local UI.

Use this directory for:

- `+page.svelte`;
- `+page.server.ts`;
- layout files;
- route-only components when they are not reused elsewhere.

Route files are responsible for connecting the framework to the rest of the application.

### `src/lib/`

`src/lib/` contains reusable application code.

Use this directory for:

- shared components;
- shared assets;
- shared types;
- shared utilities that are genuinely reusable.

This directory is not automatically server-only.

### `src/lib/types/`

`src/lib/types/` contains shared types that may be needed by both server code and page code.

Current example:

- `src/lib/types/resume.ts`

Use this directory for:

- final page-facing data shapes;
- shared domain types that are safe to import outside server-only code.

### `src/lib/server/`

`src/lib/server/` contains reusable server-only code.

Use this directory for:

- file access;
- server-only data loading;
- private integration code;
- server-only domain logic that depends on server-only boundaries.

Do not place client-safe shared code here.

### `src/lib/server/<feature>/`

When server-only code belongs to a specific feature, group it by feature.

Current example:

- `src/lib/server/resume/`

This makes two things explicit:

- the code is server-only;
- the code belongs to the `resume` feature.

## File Responsibilities in the Resume Feature

### `src/lib/server/resume/load-resume-sources.ts`

This file loads raw resume source data from `data/resume/`.

It is responsible for:

- locating the YAML files;
- reading their contents;
- parsing them;
- returning raw source data grouped into one object.

It is the file-system boundary for the resume feature.

### `src/lib/server/resume/source-types.ts`

This file defines the raw record shapes used by the resume source files.

Examples:

- `ResumeExperienceRecord`
- `CompanyRecord`
- `RoleRecord`
- `ProjectRecord`

These types describe the source format, not the final UI format.

### `src/lib/server/resume/build-experiences.ts`

This file builds the final experience list from already loaded source data.

It is responsible for:

- resolving references between experiences, companies, roles, and projects;
- assembling the final output shape;
- returning `ExperienceItem[]`.

It is not the place for file access or external loading.

### `src/lib/types/resume.ts`

This file defines the final shared resume-facing types used by the application.

Current example:

- `ExperienceItem`
- `LinkItem`

These types represent the structure consumed by page code.

### `src/routes/+page.server.ts`

This file is the homepage server data entry point.

It is responsible for:

- triggering the loading of resume source data;
- passing loaded data into the experience builder;
- returning the final page data consumed by `+page.svelte`.

For page data, this file is the orchestration boundary between the framework and the feature modules.

## Orchestration Rule

When a page needs server-side data assembly, the route `load()` function is the default orchestrator.

Expected pattern:

```ts
export const load: PageServerLoad = async () => {
	const sourceData = loadFeatureSources();

	return {
		items: buildItems(sourceData)
	};
};
```

This pattern is used because it makes the page data flow easy to follow:

1. route entry point starts the process;
2. server-only source loading happens in dedicated modules;
3. transformation happens in dedicated modules;
4. final page data is returned from one clear place.

If a route’s orchestration becomes too large, extraction is allowed. If that happens, the extracted code must still be clearly identified as orchestration code rather than generic utility code.

## Naming Rules

Names must describe responsibility, not act as vague storage buckets.

Preferred naming styles:

- feature-oriented names for domain-specific modules;
- action-oriented names for modules that perform one clear step;
- server-explicit names when the file boundary itself should make server usage obvious.

Current examples:

- `build-experiences.ts`
- `load-resume-sources.ts`
- `source-types.ts`
- `resume.ts`

Avoid by default:

- `helpers.ts`
- `utils.ts`
- `common.ts`
- `misc.ts`

These names are only acceptable when the code is truly generic and meaningfully reusable across unrelated parts of the application.

## When `utils` Is Appropriate

`src/lib/utils/` is allowed only for project-wide generic code.

A function belongs there only if:

- it is not tied to a specific feature;
- it keeps the same meaning outside its original context;
- several unrelated parts of the app can reuse it.

Examples that may fit:

- `groupBy`
- `clamp`
- `assertDefined`

Examples that do not fit:

- `getExperiences`
- `loadResumeSources`
- `getCompanyHref` when it only exists for resume data

## When to Split Files Further

Do not split files only to create more folders.

Split a file when one or more of these become true:

- the file grows enough to hurt readability;
- the file contains different concepts that change for different reasons;
- the file name no longer describes everything inside it;
- editing one concept repeatedly requires scanning through unrelated concepts.

Example:

- `source-types.ts` is acceptable today because it groups raw source record definitions for one feature.
- if those source definitions grow independently, a future structure like this is valid:

```text
src/lib/server/resume/source-types/
  companies.ts
  experiences.ts
  projects.ts
  roles.ts
```

That split is optional and should be introduced only when the code actually needs it.

## Default Pattern for New Features

For new data-driven features, prefer this shape:

```text
src/lib/types/<feature>.ts
src/lib/server/<feature>/
  source-types.ts
  load-<feature>-sources.ts
  build-<feature-part>.ts
src/routes/<route>/+page.server.ts
```

This pattern keeps the following concerns separate:

- raw source format;
- source loading;
- feature-specific transformation;
- route orchestration;
- page-facing types.

## Non-Negotiable Rules

- Do not read files directly inside page-facing builders.
- Do not place feature-specific logic in vague catch-all folders by default.
- Do not place server-only loading code in `src/lib`.
- Do not return raw source records to page components when a page-facing shape is required.
- Do not introduce a second structural pattern for similar feature work without updating this document first.

## Change Policy

This document is an architecture agreement.

If the project needs a different structure in the future:

1. update this document first;
2. explain the new boundary or pattern;
3. apply the change consistently.

## References

- SvelteKit project structure: https://svelte.dev/docs/kit/project-structure
- SvelteKit load functions: https://svelte.dev/docs/kit/load
- SvelteKit server-only modules: https://svelte.dev/docs/kit/server-only-modules
