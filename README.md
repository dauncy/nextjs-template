# NextJS Template Repo
###### By Daniel Wilder

---

This repository is a template repo for Next.js projects.
Features Include:
- Next.js 15 (App Router)
- Typescript
- Tailwind CSS v4
- Shadcn UI
- Husky pre-commit with lint-staged
- ESLint + Prettier
- typed env
---

#### Use template
```bash
npx create-next-app@latest <app-name> --example "https://github.com/dauncy/nextjs-template"
```

#### Install

```bash
bun install
```

#### Run

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Linting, Formatting, and Pre-commit

- ESLint: `bun run lint`
- Prettier (check): `bun run prettier`
- Prettier (write): `bun run format`
- Pre-commit (husky + lint-staged): runs ESLint and Prettier on staged files

### Tailwind CSS v4

Tailwind v4 uses a CSS-first configuration. We import Tailwind via `@import "tailwindcss";` in `app/globals.css` and define theme tokens with `@theme`. The legacy `tailwind.config.ts` has been removed.

### Useful Resources

- [NextJS](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com/docs)
- [husky](https://typicode.github.io/husky/#/)
- [lint-staged](https://github.com/okonet/lint-staged)
- [env-ts](https://github.com/t3-oss/env-ts)
