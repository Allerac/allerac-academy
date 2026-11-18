// Browser API client. Every request carries the anonymous student id.

import { getLang } from "./i18n/index.js";

const STUDENT_KEY = "academy.studentId";

/**
 * Anonymous per-browser id, kept in localStorage.
 * TODO(login): replace with a real account so progress follows the student across devices.
 */
export function studentId() {
  let id = localStorage.getItem(STUDENT_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(STUDENT_KEY, id);
  }
  return id;
}

export class ApiError extends Error {
  constructor(status, code) {
    super(code);
    this.status = status;
    this.code = code;
  }
}

async function request(method, path, body) {
  const url = `${path}${path.includes("?") ? "&" : "?"}lang=${encodeURIComponent(getLang())}`;
  const res = await fetch(url, {
    method,
    headers: {
      "X-Student-Id": studentId(),
      ...(body ? { "Content-Type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  let data = null;
  try {
    data = await res.json();
  } catch {
    // non-JSON response
  }
  if (!res.ok) throw new ApiError(res.status, data?.error ?? "http_error");
  return data;
}

export const api = {
  course: () => request("GET", "/api/course"),
  lesson: (id) => request("GET", `/api/lessons/${id.split("/").map(encodeURIComponent).join("/")}`),
  progress: () => request("GET", "/api/progress"),
  tutorStatus: () => request("GET", "/api/tutor/status"),
  markBlock: (lessonId, blockIndex) => request("POST", "/api/progress", { lessonId, blockIndex }),
  markLesson: (lessonId) => request("POST", "/api/progress", { lessonId, blockIndex: null }),
  stuck: (lessonId, blockIndex) => request("POST", "/api/stuck", { lessonId, blockIndex }),
  feedback: (lessonId, clarity, hardest) => request("POST", "/api/feedback", { lessonId, clarity, hardest }),
  tutor: (payload) => request("POST", "/api/tutor", payload),
};
