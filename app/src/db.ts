// D1 access for progress, "didn't get it" events, feedback and tutor request metadata.

export const LESSON_DONE = -1;

export interface ProgressRow {
  lesson_id: string;
  block_index: number;
  completed_at: string;
}

export async function listProgress(db: D1Database, studentId: string): Promise<ProgressRow[]> {
  const { results } = await db
    .prepare("SELECT lesson_id, block_index, completed_at FROM progress WHERE student_id = ? ORDER BY completed_at")
    .bind(studentId)
    .all<ProgressRow>();
  return results;
}

export async function markProgress(db: D1Database, studentId: string, lessonId: string, blockIndex: number) {
  // Keep the first completion time; repeated visits do not reset it.
  await db
    .prepare("INSERT OR IGNORE INTO progress (student_id, lesson_id, block_index) VALUES (?, ?, ?)")
    .bind(studentId, lessonId, blockIndex)
    .run();
}

export async function recordStuck(db: D1Database, studentId: string, lessonId: string, blockIndex: number) {
  await db
    .prepare("INSERT INTO stuck_events (student_id, lesson_id, block_index) VALUES (?, ?, ?)")
    .bind(studentId, lessonId, blockIndex)
    .run();
}

export async function recordFeedback(
  db: D1Database,
  studentId: string,
  lessonId: string,
  hardest: string,
  clarity: number,
) {
  await db
    .prepare("INSERT INTO lesson_feedback (student_id, lesson_id, hardest, clarity) VALUES (?, ?, ?, ?)")
    .bind(studentId, lessonId, hardest || null, clarity)
    .run();
}

export async function recordTutorRequest(
  db: D1Database,
  studentId: string,
  lessonId: string,
  blockIndex: number | null,
  kind: "explain" | "question",
  ok: boolean,
) {
  await db
    .prepare("INSERT INTO tutor_requests (student_id, lesson_id, block_index, kind, ok) VALUES (?, ?, ?, ?, ?)")
    .bind(studentId, lessonId, blockIndex, kind, ok ? 1 : 0)
    .run();
}

export async function countRecentTutorRequests(db: D1Database, studentId: string, minutes: number): Promise<number> {
  const row = await db
    .prepare(
      "SELECT COUNT(*) AS n FROM tutor_requests WHERE student_id = ? AND created_at >= strftime('%Y-%m-%dT%H:%M:%fZ', 'now', ?)",
    )
    .bind(studentId, `-${minutes} minutes`)
    .first<{ n: number }>();
  return row?.n ?? 0;
}
