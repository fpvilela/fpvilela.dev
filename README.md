# fpvilela.dev

Personal professional website built with SvelteKit.

## Stack

- SvelteKit
- TypeScript
- Pure CSS
- YAML as the canonical resume data source

## Project Structure

```text
data/
  resume/      # canonical website data and resume dataset
docs/
  specs/       # implementation plans, references, and page templates
src/           # application code
static/        # public assets served as-is
```

### Folder Roles

- `data/resume`
  Stores the source-of-truth structured data for the website. These YAML files should be edited here, not duplicated elsewhere.
- `docs/specs`
  Stores planning and implementation guidance, including structure definitions, references, and page templates.
- `src`
  Stores SvelteKit routes, components, loaders, and application logic.
- `static`
  Stores public assets that should be served directly, such as images, icons, and downloadable files.

## Development

Install dependencies and start the dev server:

```sh
npm install
npm run dev
```

To open the local app in a browser:

```sh
npm run dev -- --open
```

## Quality Checks

```sh
npm run check
npm run lint
npm run test
```

## Production Build

```sh
npm run build
npm run preview
```
