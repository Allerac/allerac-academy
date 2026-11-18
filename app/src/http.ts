// Small HTTP helpers for the JSON API.

const SECURITY_HEADERS: Record<string, string> = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};

export function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: SECURITY_HEADERS });
}

export function error(status: number, code: string): Response {
  return json({ ok: false, error: code }, status);
}

export class HttpError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
  ) {
    super(code);
  }
}

const MAX_BODY_BYTES = 16 * 1024;

export async function readJson(request: Request): Promise<Record<string, unknown>> {
  if (!request.headers.get("Content-Type")?.includes("application/json")) {
    throw new HttpError(415, "unsupported_media_type");
  }
  const text = await request.text();
  if (text.length > MAX_BODY_BYTES) throw new HttpError(413, "payload_too_large");
  try {
    const value = JSON.parse(text);
    if (value && typeof value === "object" && !Array.isArray(value)) return value;
  } catch {
    // fall through
  }
  throw new HttpError(400, "invalid_json");
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/**
 * Anonymous per-browser student id, sent as the X-Student-Id header.
 * TODO(login): replace with an authenticated user id once login exists.
 */
export function requireStudentId(request: Request): string {
  const id = request.headers.get("X-Student-Id") ?? "";
  if (!UUID_RE.test(id)) throw new HttpError(400, "invalid_student_id");
  return id.toLowerCase();
}

export function optionalString(value: unknown, maxLength: number): string {
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") throw new HttpError(400, "invalid_field");
  return value.trim().slice(0, maxLength);
}

export function intInRange(value: unknown, min: number, max: number): number {
  if (typeof value !== "number" || !Number.isInteger(value) || value < min || value > max) {
    throw new HttpError(400, "invalid_field");
  }
  return value;
}
