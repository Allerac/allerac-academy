// Read access to the bundled course content, plus the public (student-safe) views.

import { courses } from "./generated/content";
import type { CourseBundle, Lesson } from "./types";

export const DEFAULT_LANG = "pt";

/** Maps any ?lang= value to a language we have content for ("en-US" -> "en", unknown -> "pt"). */
export function resolveLang(lang: string | null | undefined): string {
  const base = (lang ?? "").trim().slice(0, 2).toLowerCase();
  return courses[base] ? base : DEFAULT_LANG;
}

export function getCourse(lang: string | null): CourseBundle {
  return courses[resolveLang(lang)];
}

/** A lesson in the requested language, falling back to Portuguese if it is not translated yet. */
export function getLesson(lang: string | null, lessonId: string): Lesson | null {
  return ownLesson(getCourse(lang), lessonId) ?? ownLesson(courses[DEFAULT_LANG], lessonId);
}

function ownLesson(course: CourseBundle, lessonId: string): Lesson | null {
  return Object.hasOwn(course.lessons, lessonId) ? course.lessons[lessonId] : null;
}

/** Course map for the browser: no lesson bodies. */
export function publicCourse(course: CourseBundle) {
  const { lessons: _lessons, ...rest } = course;
  return rest;
}

/** Lesson for the browser. Tutor notes are stripped here and must stay server-side. */
export function publicLesson(lesson: Lesson) {
  return {
    id: lesson.id,
    moduleId: lesson.moduleId,
    number: lesson.number,
    title: lesson.title,
    problemHtml: lesson.problem.html,
    blocks: lesson.blocks.map((b) => ({ index: b.index, title: b.title, html: b.html })),
    missionHtml: lesson.mission.html,
    goDeeperHtml: lesson.goDeeper.html,
  };
}
