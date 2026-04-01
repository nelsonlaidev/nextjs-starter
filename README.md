# Next.js Starter

Minimal starter for building an SSR-enabled React app with Next.js (App Router).

## Tech stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **PostCSS** (Tailwind via `@tailwindcss/postcss`)
- **TypeScript**
- **ESLint + Prettier**
- **Lefthook** (pre-commit formatting/linting)
- **Knip** (dead-code / unused exports detection)

## Requirements

- Node: see [`.nvmrc`](.nvmrc)
- Package manager: **bun** (enforced via `preinstall` in [`package.json`](package.json))

Notes:

- [`.npmrc`](.npmrc) sets `engine-strict=true` and `save-exact=true`.

If you use `nvm`:

```bash
nvm install
nvm use
```

If you don’t have bun yet:

```bash
curl -fsSL https://bun.com/install | bash
```

## Getting started

```bash
bun install
bun dev
```

Open http://localhost:3000

## Scripts

All scripts live in [`package.json`](package.json).

| Command                           | Description                                        |
| --------------------------------- | -------------------------------------------------- |
| `bun dev`                         | Start Next.js dev server                           |
| `bun run build`                   | Build the app                                      |
| `bun start`                       | Start the built server from `.next/`               |
| `bun lint` / `bun lint:fix`       | Lint (and optionally auto-fix)                     |
| `bun typecheck`                   | TypeScript typecheck (no emit)                     |
| `bun format` / `bun format:check` | Format (and check) with Prettier                   |
| `bun knip`                        | Find unused files/exports/dependencies             |
| `bun check`                       | Run `lint` + `typecheck` + `format:check` + `knip` |
| `bun clean`                       | Remove `.next`                                     |

## Routing

Routes are file-based under [`src/app/`](src/app):

- Root layout: [`Layout`](src/app/layout.tsx)
- Index route: [`Page`](src/app/page.tsx)

Notes:

- Add new pages by creating new folders/files inside [`src/app/`](src/app).
- Metadata lives alongside routes (see `metadata` in [`src/app/layout.tsx`](src/app/layout.tsx)).

## Styling

Tailwind is enabled via:

- [`src/styles/globals.css`](src/styles/globals.css) (Tailwind entry)
- Imported in [`src/app/layout.tsx`](src/app/layout.tsx)
- PostCSS plugin config in [`postcss.config.mjs`](postcss.config.mjs)

## Git hooks

Pre-commit hooks are configured via [`lefthook.yml`](lefthook.yml):

- Formats staged files with Prettier
- Auto-fixes staged files with ESLint

Install hooks:

```bash
bun prepare
```

## CI

The CI workflow at [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on pull requests to `main` and includes:

- ESLint (`bun lint`)
- TypeScript (`bun typecheck`)
- Prettier (`bun format:check`)
- Knip (`bun knip`)

## Project structure

```text
src/
  app/               # App Router routes
    layout.tsx       # Root layout
    page.tsx         # Index route
  styles/
    globals.css      # Tailwind entry
```

## License

MIT — see [`LICENSE`](LICENSE).
