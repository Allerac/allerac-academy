// Shared types for the Worker. The CourseBundle shape is produced by
// scripts/lib/parse-content.mjs at build time.

export interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  ALLERAC_ONE_BASE_URL?: string;
  ALLERAC_ONE_DOMAIN_SLUG?: string;
  /** Secret. Never sent to the browser. */
  BOT_API_KEY?: string;
}

export interface RenderedSection {
  markdown: string;
  html: string;
}

export interface Block extends RenderedSection {
  index: number;
  title: string;
  /** Hidden guidance for the AI tutor. Must never be sent to the browser. */
  tutorNotes: string;
}

export interface Lesson {
  id: string;
  moduleId: string;
  slug: string;
  number: string;
  title: string;
  problem: RenderedSection;
  blocks: Block[];
  mission: RenderedSection;
  goDeeper: RenderedSection;
}

export interface LessonSummary {
  id: string;
  slug: string;
  number: string;
  title: string;
  minutes: number | null;
  blockCount: number;
}

export interface CourseModule {
  id: string | null;
  number: number;
  title: string;
  summaryHtml: string;
  goalHtml: string;
  available: boolean;
  lessons: LessonSummary[];
}

export interface CourseBundle {
  lang: string;
  title: string;
  introHtml: string;
  modules: CourseModule[];
  lessons: Record<string, Lesson>;
}
