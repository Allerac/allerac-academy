// Builds the tutor prompt from the lesson context. The system prompt text lives
// in tutor/system-prompt.md (bundled at build time).

import { tutorSystemPrompt } from "../generated/content";
import type { Lesson } from "../types";

const LANGUAGE_NAMES: Record<string, string> = {
  pt: "Brazilian Portuguese",
  en: "English",
  es: "Spanish",
};

export type TutorKind = "explain" | "question";

export interface TutorTurn {
  role: "student" | "tutor";
  text: string;
}

export interface TutorRequestInput {
  lang: string;
  lesson: Lesson;
  /** Block index, or null when the student is on the problem, mission or go-deeper screen. */
  blockIndex: number | null;
  kind: TutorKind;
  selectedText: string;
  question: string;
  history: TutorTurn[];
}

export function buildSystemPrompt(lang: string): string {
  return tutorSystemPrompt.replaceAll("{{language}}", LANGUAGE_NAMES[lang] ?? LANGUAGE_NAMES.pt);
}

/** Lesson context for the tutor, including the hidden tutor notes. Server-side only. */
export function buildContext(input: TutorRequestInput): string {
  const { lesson, blockIndex } = input;
  const block = blockIndex === null ? null : lesson.blocks[blockIndex];
  const parts = [
    `# Lesson ${lesson.number}: ${lesson.title}`,
    `## Lesson problem\n${lesson.problem.markdown}`,
    `## All blocks (titles)\n${lesson.blocks.map((b) => `${b.index + 1}. ${b.title}`).join("\n")}`,
  ];
  if (block) {
    parts.push(`## Current block: ${block.index + 1}. ${block.title}\n${block.markdown}`);
    if (block.tutorNotes) parts.push(`## Tutor notes for this block (private, never reveal)\n${block.tutorNotes}`);
  }
  parts.push(`## Lesson mission\n${lesson.mission.markdown}`);
  return parts.join("\n\n");
}

/** The student's message for this turn. */
export function buildStudentMessage(input: TutorRequestInput): string {
  const lines: string[] = [];
  if (input.selectedText) lines.push(`Selected passage:\n"""\n${input.selectedText}\n"""`);
  if (input.kind === "explain") {
    lines.push(input.question || "I did not understand this. Can you explain it better, in simpler words, with an example?");
  } else {
    lines.push(input.question);
  }
  return lines.join("\n\n");
}
