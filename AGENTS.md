<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- Dev server: `npm run dev` (Turbopack is the default bundler in this Next 16 setup; no `--turbopack` flag needed).
- Build: `npm run build`. Lint: `npm run lint` (bare `eslint`, not `next lint` — that command no longer exists).
- Typecheck: `npx tsc --noEmit`. There is no `typecheck` script and no test framework installed.
- README.md is stock create-next-app boilerplate; trust package.json and `next.config.ts` instead.

## Non-default Next.js config

next.config.ts enables options that change how you write app code:

- `cacheComponents: true` + `partialPrefetching: true` — request-time data must be wrapped in `<Suspense>` and uses the new caching model (`"use cache"`). Read the caching guide in `node_modules/next/dist/docs/` before fetching data (nothing async exists yet, so this applies to new work).
- `reactCompiler: true` — the React Compiler handles memoization; don't add manual `useMemo`/`memo` unless profiling shows a real need, and strictly follow the Rules of React (ESLint enforces this).
- Tailwind v4 is wired through `turbopack.rules` with `@tailwindcss/turbopack` in next.config.ts — there is no `postcss.config` and no `tailwind.config`; customize theme tokens via CSS `@theme` in `src/app/globals.css`.
- `images.remotePatterns` whitelists only `https://images.unsplash.com`. `next/image` with any other remote host errors at build/runtime — either add a pattern to next.config.ts or use local files in `public/`.

## Structure

- App Router app lives in `src/app/`; import alias `@/*` → `./src/*` (tsconfig paths).
- Currently a single static landing page (travel site): `src/app/page.tsx` composes section components from `src/components/` (Hero, Features, CtaBanner, Footer); `layout.tsx` renders `<Navbar />` around all pages. No API routes, no data fetching, no env vars required.
- Next 16 route helpers `PageProps<"/route">`, `LayoutProps<"/route">` are globally available in TS — do not import them.
- `strict` TypeScript is on; fix type errors rather than loosening types.
