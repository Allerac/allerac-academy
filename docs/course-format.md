# Course Format (proposed)

> Status: **proposed**. This format is a starting point, not a rule. We update it as we learn what works for students.

## Goal

Allerac Academy is a hands-on, "start working today" course on AI-assisted software development. Students learn by doing real work from day one, and finish able to contribute to real Allerac projects.

Current focus: a single beginner student with limited time (shift work), studying mostly on a phone in short breaks. Growth ideas are parked in [`roadmap.md`](roadmap.md).

## Core principles

1. **Start with a problem.** Every lesson opens with a concrete problem the student tries to solve *before* any theory. The concept arrives as the answer to a pain the student already felt.
2. **One idea per screen.** Content is split into short blocks, each holding a single idea.
3. **Learn by doing.** Every lesson ends with a practical mission in the real world (GitHub, AI tools, Allerac projects), not just inside the app.
4. **Instant feedback.** Every step tells the student if they got it right, or "almost, look at this".
5. **Short and mobile-first.** Lessons take 10 to 15 minutes and work on a phone.
6. **Weekly goals, not daily streaks.** Shift workers cannot study every day; progress is measured per week.
7. **AI everywhere.** AI is not just one module: each module teaches how to use AI for that specific stage of the work.
8. **Broad problems.** Problems come from everyday life so they fit anyone. The AI tutor may personalize examples to the student's profile.

## UX reference

Main reference: [Brilliant](https://brilliant.org).

What we take from it:
- Problem-first lessons.
- One idea per screen, with an interaction on each.
- Immediate feedback, where a mistake becomes an explanation.
- A visual learning path with visible progress.

What Allerac Academy adds:
- An AI tutor the student can ask about any part of the text.
- Real-world missions: the student leaves the app to do real work on GitHub and Allerac projects.

## Lesson structure

Each lesson is one Markdown file with these fixed sections:

| Section | Purpose |
| --- | --- |
| **Problem** | The opening challenge. The student tries it before any theory. |
| **Blocks** | Short reading blocks, one idea each (2 to 5 minutes total). Also a reference to come back to later. |
| **Tutor notes** | Hidden notes per block for the AI tutor: good analogies, common mistakes, extra examples. Never shown to the student. |
| **Mission** | A practical, real-world task. The tutor checks it at the end. |
| **Go deeper** | Optional curated videos (see below). |

### Lesson flow

1. Student sees the **problem** and tries to solve it.
2. Student reads the **blocks**, one per screen.
3. An **AI tutor chat** guides the lesson: asks questions, corrects, and adapts to the student's pace.
4. Student completes the **mission**; the tutor verifies it.
5. Student gives quick **feedback**.

## "Explain better"

On any block, the student can select a passage and ask the tutor to explain it better, or type their own question ("why does this matter?", "give me an example").

The tutor receives:
- the selected passage,
- the block and lesson context,
- the hidden tutor notes for that block.

This is why blocks must be short and hold a single idea: each question gets a clear context.

## Reference videos

We do not produce videos for now. Instead, each lesson may point to existing videos (Anthropic, OpenAI and others) under **Go deeper**:
- One or two videos per lesson at most.
- Include the exact timestamp when a video is long.
- Note the language and whether subtitles exist in Portuguese or Spanish.
- Record the date each link was last checked, so we can review them periodically.

## Student feedback

See [`feedback.md`](feedback.md) for details. Three layers, from simplest to richest:
1. A **"didn't get it"** button on every block: one tap, pinpoints the unclear passage.
2. **Automatic tutor signals**: repeated "explain better" requests on the same block, or repeated failed missions, flag a weak spot.
3. A **quick question at the end of each lesson**: "what was hardest?" plus a 1 to 5 clarity rating.

All feedback becomes a list of passages to rewrite.

## Languages

- Course content is written in **Portuguese first**, then translated to **English** and **Spanish** once each module is approved. Modules 0, 1 and 2 exist in all three.
- Translations keep the same folders, file names and Markdown structure as `content/pt/`. Only the text changes, including the section headings and the tutor-notes label (see `SECTION_LABELS` in `app/scripts/lib/parse-content.mjs`).
- English is simple and international. Spanish is neutral, for Spain and Latin America (no strong regionalisms; "tú", "computadora", "teléfono").
- Names of buttons and menus in external tools (GitHub, Codespaces, VS Code) stay as they appear in the tool's English interface. Links point to official docs in the same language when they exist (for example `docs.github.com/es`).
- **Code, code comments, code documentation, and folder and file names are always in English**, in every language version.

## Writing on demand

We write only the course map and the first modules up front. Later modules are written as the student progresses, so content follows real needs.
