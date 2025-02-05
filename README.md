# Next.js Starter Template

This is a Next.js starter template that includes basic configurations and structure to help you get started quickly. But it's quite opinionated since it used my own configuration presets, so feel free to customize it to your needs.

## What's Included

- Next.js 15
- React 19
- TailwindCSS v4

## Configuration

- next.config.ts: Next.js configuration
- tsconfig.json: TypeScript configuration
- eslint.config.mjs: ESLint configuration
- prettier.config.js: Prettier configuration
- .cspell.json: Spell checking configuration
- editorconfig: Code style consistency
- .npmrc: npm configuration
- .nvmrc: Node.js version management
- commitlint.config.ts: Git commit message linting
- simple-git-hooks: Git hooks for code quality

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
```

## Recommended VSCode Extensions

The following extensions are recommended for this project:

- `editorconfig.editorconfig`: EditorConfig
- `dbaeumer.vscode-eslint`: ESLint
- `bradlc.vscode-tailwindcss`: Tailwind CSS
- `streetsidesoftware.code-spell-checker`: Code Spell Checker

## GitHub Actions

This project includes GitHub Actions workflows to automate code quality checks. The CI workflow runs on pull requests to the main branch and includes the following checks:

- ESLint: Lints the code for style and syntax issues
- TypeScript: Performs type checking
- Prettier: Checks code formatting
- Spelling: Checks for spelling errors
- Knip: Scans for unused files, exports and dependencies

These checks ensure that the code meets the project's quality standards before merging into the main branch.

## Usage Guide

1. Install dependencies using pnpm:
   ```bash
   pnpm install
   ```
2. Start the development server:
   ```bash
   pnpm run dev
   ```
3. Build the project:
   ```bash
   pnpm run build
   ```
4. Start the production server:
   ```bash
   pnpm run start
   ```

## Notes

Please search for `TODO` in the project to fill in necessary fields such as project name, description, and repository URL.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
