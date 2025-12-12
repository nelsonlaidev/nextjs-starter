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
- Package manager: **pnpm** (enforced via `preinstall` in [`package.json`](package.json))

Notes:

- [`.npmrc`](.npmrc) sets `engine-strict=true` and `save-exact=true`.

If you use `nvm`:

```bash
nvm install
nvm use
```

If you don’t have pnpm yet:

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

## Getting started

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000

## Scripts

All scripts live in [`package.json`](package.json).

| Command                             | Description                                        |
| ----------------------------------- | -------------------------------------------------- |
| `pnpm dev`                          | Start Next.js dev server                           |
| `pnpm build`                        | Build the app                                      |
| `pnpm start`                        | Start the built server from `.next/`               |
| `pnpm lint` / `pnpm lint:fix`       | Lint (and optionally auto-fix)                     |
| `pnpm typecheck`                    | TypeScript typecheck (no emit)                     |
| `pnpm format` / `pnpm format:check` | Format (and check) with Prettier                   |
| `pnpm knip`                         | Find unused files/exports/dependencies             |
| `pnpm check`                        | Run `lint` + `typecheck` + `format:check` + `knip` |
| `pnpm clean`                        | Remove `.next`                                     |

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
pnpm prepare
```

## CI

The CI workflow at [`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on pull requests to `main` and includes:

- ESLint (`pnpm lint`)
- TypeScript (`pnpm typecheck`)
- Prettier (`pnpm format:check`)
- Knip (`pnpm knip`)

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
