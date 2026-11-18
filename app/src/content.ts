// Read access to the bundled course content, plus the public (student-safe) views.

import { courses } from "./generated/content";
import type { CourseBundle, Lesson } from "./types";

export const DEFAULT_LANG = "pt";

export function getCourse(lang: string | null): CourseBundle {
  return (lang && courses[lang]) || courses[DEFAULT_LANG];
}

export function getLesson(lang: string | null, lessonId: string): Lesson | null {
  return getCourse(lang).lessons[lessonId] ?? null;
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
