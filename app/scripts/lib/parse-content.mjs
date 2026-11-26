// Parses the course Markdown in content/<lang>/ into a structured object.
// Runs at build time only (Node). The Worker imports the generated output.
//
// Lesson files have fixed sections (see docs/course-format.md). Section names
// are content, so they are localized; the labels per language live below.

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";
import { Marked } from "marked";

/** Localized section labels used in the Markdown files. */
export const SECTION_LABELS = {
  pt: {
    problem: "Problema",
    blocks: "Blocos",
    mission: "Missão",
    goDeeper: "Para ir mais fundo",
    objective: "Objetivo",
    tutorNotes: "Notas para o tutor",
    modulePrefix: "Módulo",
  },
  en: {
    problem: "Problem",
    blocks: "Blocks",
    mission: "Mission",
    goDeeper: "Go deeper",
    objective: "Goal",
    tutorNotes: "Tutor notes",
    modulePrefix: "Module",
  },
  es: {
    problem: "Problema",
    blocks: "Bloques",
    mission: "Misión",
    goDeeper: "Para profundizar",
    objective: "Objetivo",
    tutorNotes: "Notas para el tutor",
    modulePrefix: "Módulo",
  },
};

const ALL_TUTOR_NOTE_LABELS = Object.values(SECTION_LABELS).map((l) => l.tutorNotes);

const marked = new Marked({ gfm: true });
marked.use({
  renderer: {
    // External links open in a new tab; relative .md links are not useful in the app.
    link({ href, title, tokens }) {
      const text = this.parser.parseInline(tokens);
      if (/^https?:\/\//.test(href)) {
        const t = title ? ` title="${escapeHtml(title)}"` : "";
        return `<a href="${escapeHtml(href)}"${t} target="_blank" rel="noopener noreferrer">${text}</a>`;
      }
      return `<span>${text}</span>`;
    },
  },
});

export function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderMarkdown(md) {
  const trimmed = md.trim();
  return trimmed ? marked.parse(trimmed) : "";
}

/** Splits Markdown into sections by a heading level ("## " or "### "). */
function splitByHeading(md, prefix) {
  const lines = md.split(/\r?\n/);
  const intro = [];
  const sections = [];
  let current = null;
  let inFence = false;
  for (const line of lines) {
    if (/^```/.test(line)) inFence = !inFence;
    if (!inFence && line.startsWith(prefix) && !line.startsWith(prefix + "#")) {
      current = { title: line.slice(prefix.length).trim(), body: [] };
      sections.push(current);
    } else if (current) {
      current.body.push(line);
    } else {
      intro.push(line);
    }
  }
  return {
    intro: intro.join("\n"),
    sections: sections.map((s) => ({ title: s.title, body: s.body.join("\n") })),
  };
}

/**
 * Removes the tutor-notes blockquote(s) from a block body and returns both parts.
 * A tutor note is a blockquote whose first line starts with "> **<label>:**".
 */
export function extractTutorNotes(body, label) {
  const lines = body.split(/\r?\n/);
  const visible = [];
  const notes = [];
  const marker = new RegExp(`^>\\s*\\*\\*${escapeRegExp(label)}:?\\*\\*:?`, "i");
  let inNote = false;
  for (const line of lines) {
    if (!inNote && marker.test(line)) {
      inNote = true;
      notes.push(line.replace(marker, "").replace(/^>\s?/, "").trim());
      continue;
    }
    if (inNote) {
      if (/^>/.test(line)) {
        notes.push(line.replace(/^>\s?/, ""));
        continue;
      }
      inNote = false;
    }
    visible.push(line);
  }
  return { visible: visible.join("\n").trim(), notes: notes.join("\n").trim() };
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Parses a lesson Markdown file. */
export function parseLesson(md, lang, ids) {
  const labels = SECTION_LABELS[lang];
  const titleMatch = md.match(/^#\s+(.+)$/m);
  if (!titleMatch) throw new Error(`${ids.id}: missing "# " title`);
  const fullTitle = titleMatch[1].trim();
  const numMatch = fullTitle.match(/^(\d+\.\d+)\s+(.*)$/);
  const number = numMatch ? numMatch[1] : "";
  const title = numMatch ? numMatch[2] : fullTitle;

  const { sections } = splitByHeading(md, "## ");
  const byTitle = Object.fromEntries(sections.map((s) => [s.title, s.body]));
  for (const key of ["problem", "blocks", "mission"]) {
    if (!(labels[key] in byTitle)) {
      throw new Error(`${ids.id}: missing section "## ${labels[key]}"`);
    }
  }

  const blockSections = splitByHeading(byTitle[labels.blocks], "### ").sections;
  if (blockSections.length === 0) throw new Error(`${ids.id}: no "### " blocks`);
  const blocks = blockSections.map((b, i) => {
    const { visible, notes } = extractTutorNotes(b.body, labels.tutorNotes);
    // Any language's tutor-notes label left in the visible text means a note would leak
    // (misplaced, or written with another language's label after copying a file).
    const leaked = ALL_TUTOR_NOTE_LABELS.find((label) => visible.includes(`**${label}`));
    if (leaked) {
      throw new Error(`${ids.id}: block ${i + 1} has "${leaked}" in an unexpected place (expected "${labels.tutorNotes}")`);
    }
    return {
      index: i,
      title: b.title.replace(/^\d+\.\s*/, ""),
      markdown: visible,
      html: renderMarkdown(visible),
      tutorNotes: notes,
    };
  });

  const problemMd = byTitle[labels.problem];
  const missionMd = byTitle[labels.mission];
  const goDeeperMd = byTitle[labels.goDeeper] ?? "";
  return {
    id: ids.id,
    moduleId: ids.moduleId,
    slug: ids.slug,
    number,
    title,
    problem: { markdown: problemMd.trim(), html: renderMarkdown(problemMd) },
    blocks,
    mission: { markdown: missionMd.trim(), html: renderMarkdown(missionMd) },
    goDeeper: { markdown: goDeeperMd.trim(), html: renderMarkdown(goDeeperMd) },
  };
}

/** Parses module.md: title, goal and the lesson table (for minutes). */
export function parseModule(md, lang, moduleId) {
  const labels = SECTION_LABELS[lang];
  const titleMatch = md.match(/^#\s+(.+)$/m);
  if (!titleMatch) throw new Error(`${moduleId}/module.md: missing "# " title`);
  const { number, title } = splitModuleTitle(titleMatch[1].trim(), labels.modulePrefix);
  const { sections } = splitByHeading(md, "## ");
  const goal = sections.find((s) => s.title === labels.objective)?.body ?? "";
  const minutes = {};
  for (const m of md.matchAll(/\]\(([^)]+)\.md\)\s*\|\s*~?(\d+)\s*min/g)) {
    minutes[m[1]] = Number(m[2]);
  }
  return { number, title, goalHtml: renderMarkdown(goal), minutes };
}

function splitModuleTitle(text, prefix) {
  const m = text.match(new RegExp(`^${escapeRegExp(prefix)}\\s+(\\d+):\\s*(.*)$`));
  return m ? { number: Number(m[1]), title: m[2] } : { number: null, title: text };
}

/** Parses course.md: intro text and the full module map (written or not). */
export function parseCourseMap(md, lang) {
  const labels = SECTION_LABELS[lang];
  const titleMatch = md.match(/^#\s+(.+)$/m);
  const { intro, sections } = splitByHeading(md, "## ");
  const introText = intro
    .replace(/^#\s+.+$/m, "")
    .split(/\r?\n/)
    .filter((l) => !/^\s*-\s*\[/.test(l)) // drop the link list to module files
    .join("\n");
  const modules = sections
    .map((s) => {
      const { number, title } = splitModuleTitle(s.title, labels.modulePrefix);
      return number === null ? null : { number, title, summaryHtml: renderMarkdown(s.body) };
    })
    .filter(Boolean);
  return { title: titleMatch ? titleMatch[1].trim() : "", introHtml: renderMarkdown(introText), modules };
}

/** Builds the whole course for one language from content/<lang>/. */
export function buildCourse(contentRoot, lang) {
  if (!SECTION_LABELS[lang]) throw new Error(`No section labels for language "${lang}"`);
  const langDir = join(contentRoot, lang);
  const coursePath = join(langDir, "course.md");
  if (!existsSync(coursePath)) return null;
  const map = parseCourseMap(readFileSync(coursePath, "utf8"), lang);

  const moduleDirs = readdirSync(langDir)
    .filter((d) => /^\d+-/.test(d) && statSync(join(langDir, d)).isDirectory())
    .sort();

  const written = new Map();
  const lessons = {};
  for (const moduleId of moduleDirs) {
    const dir = join(langDir, moduleId);
    const modulePath = join(dir, "module.md");
    if (!existsSync(modulePath)) continue;
    const mod = parseModule(readFileSync(modulePath, "utf8"), lang, moduleId);
    const lessonFiles = readdirSync(dir)
      .filter((f) => /^\d+-.+\.md$/.test(f))
      .sort();
    const lessonSummaries = [];
    for (const file of lessonFiles) {
      const slug = file.replace(/\.md$/, "");
      const id = `${moduleId}/${slug}`;
      const lesson = parseLesson(readFileSync(join(dir, file), "utf8"), lang, { id, moduleId, slug });
      lessons[id] = lesson;
      lessonSummaries.push({
        id,
        slug,
        number: lesson.number,
        title: lesson.title,
        minutes: mod.minutes[slug] ?? null,
        blockCount: lesson.blocks.length,
      });
    }
    const number = mod.number ?? Number(moduleId.split("-")[0]);
    written.set(number, { id: moduleId, number, title: mod.title, goalHtml: mod.goalHtml, lessons: lessonSummaries });
  }

  // Merge the course map (all planned modules) with the modules written so far.
  const numbers = new Set([...map.modules.map((m) => m.number), ...written.keys()]);
  const modules = [...numbers]
    .sort((a, b) => a - b)
    .map((number) => {
      const planned = map.modules.find((m) => m.number === number);
      const w = written.get(number);
      return {
        id: w?.id ?? null,
        number,
        title: planned?.title ?? w?.title ?? "",
        summaryHtml: planned?.summaryHtml ?? "",
        goalHtml: w?.goalHtml ?? "",
        available: Boolean(w && w.lessons.length > 0),
        lessons: w?.lessons ?? [],
      };
    });

  return { lang, title: map.title, introHtml: map.introHtml, modules, lessons };
}
