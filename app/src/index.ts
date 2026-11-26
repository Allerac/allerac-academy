// Allerac Academy Worker: JSON API under /api/*, static front end from public/.

import { getCourse, getLesson, publicCourse, publicLesson, resolveLang } from "./content";
import {
  countRecentTutorRequests,
  LESSON_DONE,
  listProgress,
  markProgress,
  recordFeedback,
  recordStuck,
  recordTutorRequest,
} from "./db";
import { error, HttpError, intInRange, json, optionalString, readJson, requireStudentId } from "./http";
import { askAlleracOne, isTutorConfigured, TutorUnavailableError } from "./tutor/allerac-one";
import { buildContext, buildStudentMessage, buildSystemPrompt, type TutorTurn } from "./tutor/prompt";
import type { Env } from "./types";

const TUTOR_RATE_LIMIT = { requests: 30, minutes: 60 };

export default {
  async fetch(request, env, ctx): Promise<Response> {
    const url = new URL(request.url);
    if (!url.pathname.startsWith("/api/")) return env.ASSETS.fetch(request);
    try {
      return await handleApi(request, env, ctx, url);
    } catch (err) {
      if (err instanceof HttpError) return error(err.status, err.code);
      console.error(JSON.stringify({ msg: "unhandled_error", path: url.pathname, error: String(err) }));
      return error(500, "internal_error");
    }
  },
} satisfies ExportedHandler<Env>;

async function handleApi(request: Request, env: Env, ctx: ExecutionContext, url: URL): Promise<Response> {
  const lang = resolveLang(url.searchParams.get("lang"));
  const route = `${request.method} ${url.pathname}`;

  if (route === "GET /api/course") return json(publicCourse(getCourse(lang)));

  if (request.method === "GET" && url.pathname.startsWith("/api/lessons/")) {
    const lessonId = decodeURIComponent(url.pathname.slice("/api/lessons/".length));
    const lesson = getLesson(lang, lessonId);
    return lesson ? json(publicLesson(lesson)) : error(404, "lesson_not_found");
  }

  if (route === "GET /api/tutor/status") return json({ available: isTutorConfigured(env) });

  if (route === "GET /api/progress") {
    const studentId = requireStudentId(request);
    return json({ progress: await listProgress(env.DB, studentId) });
  }

  if (route === "POST /api/progress") {
    const studentId = requireStudentId(request);
    const body = await readJson(request);
    const lesson = requireLesson(lang, body.lessonId);
    const blockIndex = body.blockIndex === null || body.blockIndex === undefined
      ? LESSON_DONE
      : intInRange(body.blockIndex, 0, lesson.blocks.length - 1);
    await markProgress(env.DB, studentId, lesson.id, blockIndex);
    return json({ ok: true });
  }

  if (route === "POST /api/stuck") {
    const studentId = requireStudentId(request);
    const body = await readJson(request);
    const lesson = requireLesson(lang, body.lessonId);
    const blockIndex = intInRange(body.blockIndex, 0, lesson.blocks.length - 1);
    await recordStuck(env.DB, studentId, lesson.id, blockIndex);
    return json({ ok: true });
  }

  if (route === "POST /api/feedback") {
    const studentId = requireStudentId(request);
    const body = await readJson(request);
    const lesson = requireLesson(lang, body.lessonId);
    const clarity = intInRange(body.clarity, 1, 5);
    const hardest = optionalString(body.hardest, 2000);
    await recordFeedback(env.DB, studentId, lesson.id, hardest, clarity);
    return json({ ok: true });
  }

  if (route === "POST /api/tutor") return handleTutor(request, env, ctx, lang);

  return error(404, "not_found");
}

function requireLesson(lang: string, lessonId: unknown) {
  if (typeof lessonId !== "string") throw new HttpError(400, "invalid_lesson");
  const lesson = getLesson(lang, lessonId);
  if (!lesson) throw new HttpError(404, "lesson_not_found");
  return lesson;
}

async function handleTutor(request: Request, env: Env, ctx: ExecutionContext, lang: string): Promise<Response> {
  const studentId = requireStudentId(request);
  const body = await readJson(request);
  const lesson = requireLesson(lang, body.lessonId);
  const blockIndex = body.blockIndex === null || body.blockIndex === undefined
    ? null
    : intInRange(body.blockIndex, 0, lesson.blocks.length - 1);
  const kind = body.kind === "explain" ? "explain" : "question";
  const selectedText = optionalString(body.selectedText, 1500);
  const question = optionalString(body.question, 1000);
  if (kind === "question" && !question) throw new HttpError(400, "empty_question");
  const history = parseHistory(body.history);

  const unavailable = () => json({ ok: false, error: "tutor_unavailable" }, 503);
  const log = (ok: boolean) =>
    ctx.waitUntil(recordTutorRequest(env.DB, studentId, lesson.id, blockIndex, kind, ok).catch(() => {}));

  if (!isTutorConfigured(env)) {
    log(false);
    return unavailable();
  }

  const recent = await countRecentTutorRequests(env.DB, studentId, TUTOR_RATE_LIMIT.minutes);
  if (recent >= TUTOR_RATE_LIMIT.requests) return error(429, "rate_limited");

  const input = { lang, lesson, blockIndex, kind, selectedText, question, history } as const;
  try {
    const reply = await askAlleracOne(env, {
      systemPrompt: buildSystemPrompt(lang),
      context: buildContext(input),
      history,
      message: buildStudentMessage(input),
      language: lang,
      conversationId: `${studentId}:${lesson.id}`,
    });
    log(true);
    return json({ ok: true, reply });
  } catch (err) {
    log(false);
    if (err instanceof TutorUnavailableError) return unavailable();
    throw err;
  }
}

function parseHistory(value: unknown): TutorTurn[] {
  if (!Array.isArray(value)) return [];
  return value
    .slice(-10)
    .filter((t): t is { role: string; text: string } =>
      Boolean(t) && typeof t === "object" && typeof t.text === "string" && (t.role === "student" || t.role === "tutor"),
    )
    .map((t) => ({ role: t.role as TutorTurn["role"], text: t.text.slice(0, 2000) }));
}
