// Content parser tests: every lesson parses in every language, the languages stay
// in sync, and tutor notes never leak into student-visible fields.
import { test } from "node:test";
import assert from "node:assert/strict";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildCourse, extractTutorNotes, parseLesson, SECTION_LABELS } from "../scripts/lib/parse-content.mjs";

const contentRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "content");
const LANGS = ["pt", "en", "es"];
const courses = Object.fromEntries(LANGS.map((lang) => [lang, buildCourse(contentRoot, lang)]));
// Every label for tutor notes, so a note written in one language is caught in any other.
const ALL_NOTE_LABELS = Object.values(SECTION_LABELS).map((l) => l.tutorNotes);

for (const lang of LANGS) {
  test(`${lang}: course builds with modules 0 to 4 available`, () => {
    const course = courses[lang];
    assert.ok(course, `content/${lang}/course.md exists`);
    assert.equal(course.lang, lang);
    const available = course.modules.filter((m) => m.available).map((m) => m.number);
    assert.deepEqual(available, [0, 1, 2, 3, 4]);
    assert.ok(course.modules.length >= 8, "course map lists all planned modules");
    for (const m of course.modules) {
      assert.ok(m.title, `${lang} module ${m.number} has a title`);
      assert.ok(m.summaryHtml, `${lang} module ${m.number} has a summary in the course map`);
    }
    for (const m of course.modules.filter((x) => x.available)) {
      assert.ok(m.goalHtml, `${lang} module ${m.number} has a goal`);
      for (const l of m.lessons) assert.ok(l.minutes > 0, `${lang} ${l.id} has minutes from module.md`);
    }
  });

  test(`${lang}: tutor notes are extracted and never visible`, () => {
    const course = courses[lang];
    const withNotes = Object.values(course.lessons).flatMap((l) => l.blocks).filter((b) => b.tutorNotes);
    assert.ok(withNotes.length > 20, "most blocks carry tutor notes");
    for (const lesson of Object.values(course.lessons)) {
      assert.ok(lesson.blocks.length > 0, `${lesson.id} has blocks`);
      const visible = [
        lesson.title,
        lesson.problem.html, lesson.problem.markdown,
        lesson.mission.html, lesson.mission.markdown,
        lesson.goDeeper.html, lesson.goDeeper.markdown,
        ...lesson.blocks.flatMap((b) => [b.title, b.html, b.markdown]),
      ];
      for (const text of visible) {
        for (const label of ALL_NOTE_LABELS) {
          assert.ok(!text.includes(label), `${lang} ${lesson.id} leaks "${label}"`);
        }
      }
      for (const b of lesson.blocks) {
        // Tutor notes are optional per block.
        if (b.tutorNotes) {
          assert.ok(!b.html.includes(b.tutorNotes.slice(0, 30)), `${lang} ${lesson.id} block ${b.index + 1} html contains note text`);
        }
      }
    }
  });
}

test("all languages have the same modules, lessons and blocks", () => {
  const shape = (course) => ({
    modules: course.modules.map((m) => ({ id: m.id, number: m.number, available: m.available })),
    lessons: Object.values(course.lessons).map((l) => ({
      id: l.id,
      number: l.number,
      blocks: l.blocks.length,
      notes: l.blocks.map((b) => Boolean(b.tutorNotes)),
      hasGoDeeper: Boolean(l.goDeeper.markdown),
    })),
  });
  const minutes = (course) => course.modules.flatMap((m) => m.lessons.map((l) => [l.id, l.minutes]));
  for (const lang of ["en", "es"]) {
    assert.deepEqual(shape(courses[lang]), shape(courses.pt), `${lang} matches pt`);
    assert.deepEqual(minutes(courses[lang]), minutes(courses.pt), `${lang} lesson times match pt`);
  }
});

test("translations are really translated (titles differ from pt)", () => {
  for (const lang of ["en", "es"]) {
    for (const [id, lesson] of Object.entries(courses.pt.lessons)) {
      const other = courses[lang].lessons[id];
      assert.notEqual(other.title, lesson.title, `${lang} ${id} title looks untranslated`);
      assert.notEqual(other.problem.markdown, lesson.problem.markdown, `${lang} ${id} problem looks untranslated`);
    }
  }
});

test("multi-line tutor notes are fully removed, other blockquotes stay", () => {
  for (const lang of LANGS) {
    const label = SECTION_LABELS[lang].tutorNotes;
    const body = `Text.\n\n> A normal quote.\n\n> **${label}:** line one\n> line two\n\nAfter.`;
    const { visible, notes } = extractTutorNotes(body, label);
    assert.equal(notes, "line one\nline two", lang);
    assert.ok(visible.includes("> A normal quote."));
    assert.ok(visible.includes("After."));
    assert.ok(!visible.includes("line two"));
  }
});

test("missing sections fail the build, with the label of that language", () => {
  const ids = { id: "x/y", moduleId: "x", slug: "y" };
  assert.throws(() => parseLesson("# 9.9 X\n\n## Problema\n\nP\n", "pt", ids), /Blocos/);
  assert.throws(() => parseLesson("# 9.9 X\n\n## Problem\n\nP\n", "en", ids), /Blocks/);
  assert.throws(() => parseLesson("# 9.9 X\n\n## Problema\n\nP\n", "es", ids), /Bloques/);
});

test("a tutor note under another language's label fails the build", () => {
  const md = "# 9.9 X\n\n## Problem\n\nP\n\n## Blocks\n\n### 1. B\nText.\n\n> **Notas para o tutor:** wrong label\n\n## Mission\n\nM\n";
  assert.throws(() => parseLesson(md, "en", { id: "x/y", moduleId: "x", slug: "y" }), /Notas para o tutor/);
});
