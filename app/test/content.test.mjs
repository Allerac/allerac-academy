// Content parser tests: every lesson parses and tutor notes never leak into student-visible fields.
import { test } from "node:test";
import assert from "node:assert/strict";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildCourse, extractTutorNotes, parseLesson } from "../scripts/lib/parse-content.mjs";

const contentRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "..", "content");

test("pt course builds with modules 0, 1 and 2 available", () => {
  const course = buildCourse(contentRoot, "pt");
  const available = course.modules.filter((m) => m.available).map((m) => m.number);
  assert.deepEqual(available, [0, 1, 2]);
  assert.ok(course.modules.length >= 8, "course map lists all planned modules");
  for (const m of course.modules.filter((x) => x.available)) {
    for (const l of m.lessons) assert.ok(l.minutes > 0, `${l.id} has minutes from module.md`);
  }
});

test("tutor notes are extracted and never visible", () => {
  const course = buildCourse(contentRoot, "pt");
  const withNotes = Object.values(course.lessons).flatMap((l) => l.blocks).filter((b) => b.tutorNotes);
  assert.ok(withNotes.length > 20, "most blocks carry tutor notes");
  for (const lesson of Object.values(course.lessons)) {
    assert.ok(lesson.blocks.length > 0, `${lesson.id} has blocks`);
    for (const b of lesson.blocks) {
      // Tutor notes are optional per block.
      assert.ok(!b.html.includes("Notas para o tutor"), `${lesson.id} block ${b.index + 1} html leaks notes`);
      assert.ok(!b.markdown.includes("Notas para o tutor"));
      if (b.tutorNotes) {
        assert.ok(!b.html.includes(b.tutorNotes.slice(0, 30)), `${lesson.id} block ${b.index + 1} html contains note text`);
      }
    }
    for (const section of [lesson.problem, lesson.mission, lesson.goDeeper]) {
      assert.ok(!section.html.includes("Notas para o tutor"));
    }
  }
});

test("multi-line tutor notes are fully removed, other blockquotes stay", () => {
  const body = "Text.\n\n> A normal quote.\n\n> **Notas para o tutor:** line one\n> line two\n\nAfter.";
  const { visible, notes } = extractTutorNotes(body, "Notas para o tutor");
  assert.equal(notes, "line one\nline two");
  assert.ok(visible.includes("> A normal quote."));
  assert.ok(visible.includes("After."));
  assert.ok(!visible.includes("line two"));
});

test("missing sections fail the build", () => {
  assert.throws(() => parseLesson("# 9.9 X\n\n## Problema\n\nP\n", "pt", { id: "x/y", moduleId: "x", slug: "y" }), /Blocos/);
});
