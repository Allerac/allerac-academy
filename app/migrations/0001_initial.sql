-- Initial schema for Allerac Academy.
-- student_id is an anonymous per-browser id for now (TODO: real login).

-- Lesson and block completion. block_index is -1 for the whole lesson.
CREATE TABLE IF NOT EXISTS progress (
  student_id   TEXT    NOT NULL,
  lesson_id    TEXT    NOT NULL,
  block_index  INTEGER NOT NULL DEFAULT -1,
  completed_at TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')),
  PRIMARY KEY (student_id, lesson_id, block_index)
);

-- One row per "didn't get it" tap.
CREATE TABLE IF NOT EXISTS stuck_events (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id  TEXT    NOT NULL,
  lesson_id   TEXT    NOT NULL,
  block_index INTEGER NOT NULL,
  created_at  TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_stuck_lesson_block ON stuck_events (lesson_id, block_index);

-- End-of-lesson check: what was hardest (optional) and clarity 1 to 5.
CREATE TABLE IF NOT EXISTS lesson_feedback (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id TEXT    NOT NULL,
  lesson_id  TEXT    NOT NULL,
  hardest    TEXT,
  clarity    INTEGER NOT NULL CHECK (clarity BETWEEN 1 AND 5),
  created_at TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_feedback_lesson ON lesson_feedback (lesson_id);

-- Tutor requests ("explain better" and free questions). Feeds the automatic
-- tutor signals in docs/feedback.md and a simple per-student rate limit.
-- Only metadata is stored, not the conversation text.
CREATE TABLE IF NOT EXISTS tutor_requests (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  student_id  TEXT    NOT NULL,
  lesson_id   TEXT    NOT NULL,
  block_index INTEGER,
  kind        TEXT    NOT NULL CHECK (kind IN ('explain', 'question')),
  ok          INTEGER NOT NULL,
  created_at  TEXT    NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_tutor_student_time ON tutor_requests (student_id, created_at);
CREATE INDEX IF NOT EXISTS idx_tutor_lesson_block ON tutor_requests (lesson_id, block_index);
