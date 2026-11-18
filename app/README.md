# Allerac Academy app

The learning site for Allerac Academy, served at `academy.allerac.ai`.

- **Stack:** one Cloudflare Worker (`allerac-academy`) with static assets. No front-end framework: plain HTML, CSS and ES modules in `public/`, a small TypeScript JSON API in `src/`.
- **Data:** Cloudflare D1 (`DB` binding) for progress, "didn't get it" events, end-of-lesson feedback and tutor request metadata.
- **AI tutor:** the Worker calls a unit of Allerac One. If it is not configured or fails, the UI shows "Tutor indisponível no momento" and everything else keeps working.

## Layout

```
app/
  wrangler.jsonc           Worker config (assets, D1, vars, custom domain)
  migrations/              D1 schema (SQL migrations)
  scripts/
    build-content.mjs      Build step: content/ + tutor/ -> src/generated/content.ts
    lib/parse-content.mjs  Markdown parser for course, module and lesson files
  src/
    index.ts               Worker entry: /api/* routes, everything else -> static assets
    content.ts             Access to bundled content + student-safe views (no tutor notes)
    db.ts                  D1 queries
    http.ts                JSON/validation helpers, anonymous student id
    tutor/prompt.ts        Builds the tutor prompt (system prompt, lesson context, notes)
    tutor/allerac-one.ts   The only module that knows the Allerac One API shape
  public/                  Front end (map, lesson player, tutor panel)
    i18n/                  UI strings per language (pt now; en/es later)
  test/                    Parser tests (node:test) and a Playwright e2e smoke test
```

## Local development

Requirements: Node.js 20+.

```bash
cd app
npm install
npm run db:migrate:local      # creates the local D1 database in .wrangler/
npm run dev                   # http://localhost:8787
```

`wrangler dev` runs the content build first and watches `../content` and `../tutor`, so editing Markdown reloads the site.

Optional: copy `.dev.vars.example` to `.dev.vars` to try the tutor against a local or reachable Allerac One. Without it the tutor shows as unavailable, which is the expected state today.

### Tests

```bash
npm run typecheck             # builds content, then tsc
npm test                      # content parser tests (tutor notes never leak, all lessons parse)
npm run dev &                 # in another terminal
npm run test:e2e              # map -> full lesson -> "didn't get it" -> feedback -> progress
```

The e2e test uses `playwright-core` with a local Chrome (`CHROME_PATH`, default `/usr/bin/google-chrome`) at phone size and saves screenshots to `SCREENSHOT_DIR` (default `./screenshots`, git-ignored). Set `EXPECT_TUTOR=available` when the tutor is configured.

## How content is loaded

Content lives in `content/<lang>/` at the repo root and is the single source of truth. At build time, `scripts/build-content.mjs`:

1. reads `course.md` (course map, including modules not written yet, shown as "Em breve");
2. reads every `NN-module/module.md` (title, goal, minutes per lesson from the lesson table);
3. parses every lesson file into its fixed sections: Problem, Blocks (`### N. Title`), Mission and Go deeper;
4. splits each block's `> **Notas para o tutor:** ...` blockquote out into a separate `tutorNotes` field;
5. renders Markdown to HTML and writes `src/generated/content.ts` (git-ignored), which the Worker bundles.

The build fails if a lesson is missing a required section. Section labels per language are defined in `SECTION_LABELS` in `scripts/lib/parse-content.mjs`; add a language there before adding `content/<lang>/`.

**Tutor notes never reach the browser.** The lesson API (`src/content.ts`, `publicLesson`) sends only titles and rendered HTML. Tutor notes are used only server-side in the tutor prompt. Both the parser tests and the e2e test check this.

Content edits need no code changes: edit the Markdown, then redeploy.

## API

All `/api/*` requests take `?lang=pt` (default `pt`). Student requests send `X-Student-Id` (anonymous UUID kept in `localStorage`).

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/course` | Course map (modules, lessons, minutes) |
| GET | `/api/lessons/<module>/<lesson>` | One lesson, without tutor notes |
| GET | `/api/progress` | The student's completed blocks and lessons |
| POST | `/api/progress` | `{ lessonId, blockIndex }` (`blockIndex: null` = lesson done) |
| POST | `/api/stuck` | "Didn't get it": `{ lessonId, blockIndex }` |
| POST | `/api/feedback` | End-of-lesson: `{ lessonId, clarity: 1..5, hardest? }` |
| GET | `/api/tutor/status` | `{ available }` (config present) |
| POST | `/api/tutor` | `{ lessonId, blockIndex, kind: "explain" \| "question", selectedText?, question?, history? }` -> `{ ok, reply }` or `503 tutor_unavailable` |

The tutor endpoint is rate limited to 30 requests per student per hour.

## Environment and secrets

| Name | Type | Purpose |
| --- | --- | --- |
| `ALLERAC_ONE_BASE_URL` | var | Allerac One base URL (exposed through Cloudflare Tunnel) |
| `ALLERAC_ONE_DOMAIN_SLUG` | var | The Allerac One unit that acts as the tutor |
| `BOT_API_KEY` | secret | API key for that unit. Never in `wrangler.jsonc`, never sent to the browser |
| `DB` | D1 binding | Database `academy` |

The tutor is "available" only when all three tutor settings are set. The Allerac One request shape lives only in `src/tutor/allerac-one.ts` and is a best guess for now (see the `TODO(allerac-one-contract)` notes there). The tutor system prompt is in [`/tutor/system-prompt.md`](../tutor/system-prompt.md).

## D1

Schema: `migrations/0001_initial.sql`.

- `progress`: `(student_id, lesson_id, block_index)`, `block_index = -1` means the lesson is done.
- `stuck_events`: one row per "didn't get it" tap.
- `lesson_feedback`: clarity 1 to 5 and optional "what was hardest".
- `tutor_requests`: metadata only (no text): lesson, block, kind, success. Feeds the automatic tutor signals in `docs/feedback.md` and the rate limit.

Useful query for the review list:

```sql
SELECT lesson_id, block_index, COUNT(*) AS taps
FROM stuck_events GROUP BY lesson_id, block_index ORDER BY taps DESC;
```

## Deploy

Live at **https://academy.allerac.ai** (account Allerac, zone `allerac.ai`).

Resources:
- Worker `allerac-academy`, custom domain `academy.allerac.ai`, `workers.dev` disabled.
- D1 database `academy` (`a6a0b4c2-0f6e-42a5-b679-14d208050ca5`), migration `0001_initial.sql` applied.

The first deploy was done through the Cloudflare API, with the static files bundled inside the Worker, because no Wrangler login was available. The first `wrangler deploy` replaces it with the standard setup (Worker + static assets).

### Automatic deploys (GitHub Actions)

`.github/workflows/deploy.yml` deploys on every push to `main` that touches `app/`, `content/` or `tutor/`, and can also be run by hand (`workflow_dispatch`). It runs typecheck and tests, applies remote D1 migrations, then runs `wrangler deploy`.

The job runs in the GitHub environment **`production`**, which holds these secrets:

| Secret | Value |
| --- | --- |
| `CLOUDFLARE_API_TOKEN` | Account API token that can deploy the `allerac-academy` Worker and apply D1 migrations (Workers Scripts Edit, D1 Edit) |
| `CLOUDFLARE_ACCOUNT_ID` | The Cloudflare account id |

Cloudflare Workers Builds is not used, because the Git connection could not list the repository.

### Manual deploy

```bash
cd app
npx wrangler login       # or CLOUDFLARE_API_TOKEN
npm run deploy           # D1 migrations (remote) + wrangler deploy
```

### Tutor (later)

When the tutor unit exists in Allerac One:

```bash
npx wrangler secret put BOT_API_KEY
# set ALLERAC_ONE_BASE_URL and ALLERAC_ONE_DOMAIN_SLUG in wrangler.jsonc "vars"
```

## TODO

- **Login.** Progress uses an anonymous per-browser id. Clearing the browser or switching phones loses progress. Add real login (for example Cloudflare Access with one-time PIN, or GitHub sign-in) and map the anonymous id to the account.
- **Allerac One contract.** Confirm endpoint, auth header and response field in `src/tutor/allerac-one.ts`.
- **Tutor-led mission check.** Missions are self-reported ("Fiz a missão"); the tutor should verify them (for example by checking a GitHub link).
- **Automatic tutor signals.** Data is stored (`tutor_requests`, `stuck_events`), but there is no review page yet.
- **Translations.** Add `public/i18n/en.js` and `es.js` and a language switcher once `content/en` and `content/es` exist.
