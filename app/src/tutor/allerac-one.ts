// Allerac One client for the tutor. This is the ONLY module that knows the
// Allerac One request and response shape.
//
// Config (same pattern as the onelanding Worker):
//   ALLERAC_ONE_BASE_URL     var    base URL of Allerac One (via Cloudflare Tunnel)
//   ALLERAC_ONE_DOMAIN_SLUG  var    the Allerac One unit that acts as the tutor
//   BOT_API_KEY              secret API key for that unit
//
// TODO(allerac-one-contract): the endpoint path, auth header, request body and
// response fields below are a best guess. Confirm them against the real
// Allerac One API (and the onelanding Worker) once the tutor unit exists, and
// only change this file.

import type { Env } from "../types";
import type { TutorTurn } from "./prompt";

export class TutorUnavailableError extends Error {
  constructor(readonly reason: "not_configured" | "upstream_error" | "timeout" | "bad_response") {
    super(reason);
  }
}

export interface AlleracOneChatRequest {
  systemPrompt: string;
  context: string;
  history: TutorTurn[];
  message: string;
  /** Stable anonymous id so Allerac One can keep per-student memory, if supported. */
  conversationId: string;
}

const TIMEOUT_MS = 25_000;

export function isTutorConfigured(env: Env): boolean {
  return Boolean(env.ALLERAC_ONE_BASE_URL && env.ALLERAC_ONE_DOMAIN_SLUG && env.BOT_API_KEY);
}

export async function askAlleracOne(env: Env, req: AlleracOneChatRequest): Promise<string> {
  if (!isTutorConfigured(env)) throw new TutorUnavailableError("not_configured");

  const base = env.ALLERAC_ONE_BASE_URL!.replace(/\/+$/, "");
  // TODO(allerac-one-contract): confirm path and body.
  const url = `${base}/api/domains/${encodeURIComponent(env.ALLERAC_ONE_DOMAIN_SLUG!)}/chat`;
  const body = {
    message: req.message,
    system_prompt: req.systemPrompt,
    context: req.context,
    history: req.history.map((t) => ({ role: t.role === "student" ? "user" : "assistant", content: t.text })),
    conversation_id: req.conversationId,
    source: "allerac-academy",
  };

  let response: Response;
  try {
    response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // TODO(allerac-one-contract): confirm header name (Bearer vs X-API-Key).
        Authorization: `Bearer ${env.BOT_API_KEY}`,
      },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch (err) {
    const timedOut = err instanceof Error && (err.name === "TimeoutError" || err.name === "AbortError");
    console.error(JSON.stringify({ msg: "allerac_one_fetch_failed", timedOut, error: String(err) }));
    throw new TutorUnavailableError(timedOut ? "timeout" : "upstream_error");
  }

  if (!response.ok) {
    console.error(JSON.stringify({ msg: "allerac_one_bad_status", status: response.status }));
    throw new TutorUnavailableError("upstream_error");
  }

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    throw new TutorUnavailableError("bad_response");
  }
  // TODO(allerac-one-contract): confirm the reply field name.
  const reply = pickReply(data);
  if (!reply) throw new TutorUnavailableError("bad_response");
  return reply;
}

function pickReply(data: unknown): string | null {
  if (!data || typeof data !== "object") return null;
  const d = data as Record<string, unknown>;
  for (const key of ["reply", "response", "message", "content", "answer"]) {
    if (typeof d[key] === "string" && (d[key] as string).trim()) return (d[key] as string).trim();
  }
  return null;
}
