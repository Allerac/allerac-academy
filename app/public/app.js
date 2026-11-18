// Allerac Academy front end: course map and lesson player.
// Hash routes: #/ (map) and #/lesson/<moduleId>/<lessonSlug>.

import { api } from "./api.js";
import { el } from "./dom.js";
import { detectLang, setLang, t } from "./i18n/index.js";
import { explain, mountTutor, openTutor, unmountTutor } from "./tutor.js";

const WEEKLY_GOAL_LESSONS = 3;
const LESSON_DONE = -1;

const app = document.getElementById("app");
let course = null;
let progress = [];
let tutorAvailable = false;

setLang(detectLang());
window.addEventListener("hashchange", route);
start();

async function start() {
  render(loading());
  try {
    const [c, p, s] = await Promise.all([
      api.course(),
      api.progress().catch(() => ({ progress: [] })),
      api.tutorStatus().catch(() => ({ available: false })),
    ]);
    course = c;
    progress = p.progress;
    tutorAvailable = s.available;
    route();
  } catch {
    render(errorView(start));
  }
}

function route() {
  unmountTutor();
  window.scrollTo(0, 0);
  const hash = location.hash.replace(/^#\/?/, "");
  if (hash.startsWith("lesson/")) return lessonPage(hash.slice("lesson/".length));
  render(mapPage());
}

function render(...nodes) {
  app.replaceChildren(...nodes);
}

function loading() {
  return el("div", { class: "center-screen" }, [el("div", { class: "spinner", "aria-hidden": "true" }), el("p", {}, t("app.loading"))]);
}

function errorView(retry) {
  return el("div", { class: "center-screen" }, [
    el("p", {}, t("app.error")),
    el("button", { class: "btn btn-primary", type: "button", onclick: retry }, t("app.retry")),
  ]);
}

let toastTimer;
function toast(message) {
  const node = document.getElementById("toast");
  node.textContent = message;
  node.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (node.hidden = true), 3500);
}

// ---------- progress helpers ----------

function isLessonDone(lessonId) {
  return progress.some((p) => p.lesson_id === lessonId && p.block_index === LESSON_DONE);
}

function blocksDone(lessonId) {
  return new Set(progress.filter((p) => p.lesson_id === lessonId && p.block_index >= 0).map((p) => p.block_index));
}

function startOfWeek(date = new Date()) {
  const d = new Date(date);
  const day = (d.getDay() + 6) % 7; // Monday = 0
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() - day);
  return d;
}

function lessonsDoneThisWeek() {
  const since = startOfWeek();
  return progress.filter((p) => p.block_index === LESSON_DONE && new Date(p.completed_at) >= since).length;
}

function allLessons() {
  return course.modules.flatMap((m) => m.lessons.map((l) => ({ ...l, moduleNumber: m.number })));
}

function nextLesson() {
  return allLessons().find((l) => !isLessonDone(l.id)) ?? null;
}

function localMark(lessonId, blockIndex) {
  if (progress.some((p) => p.lesson_id === lessonId && p.block_index === blockIndex)) return;
  progress.push({ lesson_id: lessonId, block_index: blockIndex, completed_at: new Date().toISOString() });
}

// ---------- course map ----------

function mapPage() {
  const done = lessonsDoneThisWeek();
  const pct = Math.min(100, Math.round((done / WEEKLY_GOAL_LESSONS) * 100));
  const next = nextLesson();

  const goal = el("section", { class: "card goal-card" }, [
    el("div", { class: "goal-ring", style: `--pct:${pct}`, "aria-hidden": "true" }, el("span", {}, `${Math.min(done, WEEKLY_GOAL_LESSONS)}/${WEEKLY_GOAL_LESSONS}`)),
    el("div", {}, [
      el("h2", {}, t("map.weeklyGoal")),
      el("p", { class: "goal-text" }, done >= WEEKLY_GOAL_LESSONS ? t("map.weeklyGoalDone") : t("map.weeklyGoalProgress", { done, goal: WEEKLY_GOAL_LESSONS })),
      el("p", { class: "muted small" }, t("map.weeklyGoalHint")),
    ]),
  ]);

  const nextCard = next
    ? el("a", { class: "card next-card", href: `#/lesson/${next.id}` }, [
        el("span", { class: "eyebrow" }, t("map.nextUp")),
        el("strong", {}, `${next.number} ${next.title}`),
        el("span", { class: "btn btn-primary btn-sm" }, blocksDone(next.id).size ? t("map.continue") : t("map.start")),
      ])
    : null;

  const modules = course.modules.map((m) => moduleCard(m, next));

  return el("main", { class: "page map-page" }, [
    el("header", { class: "map-header" }, [
      el("div", { class: "brand" }, [el("img", { src: "/favicon.svg", alt: "", width: 32, height: 32 }), el("span", {}, t("app.name"))]),
    ]),
    el("section", { class: "intro", html: course.introHtml }),
    goal,
    nextCard,
    el("ol", { class: "module-list" }, modules),
  ]);
}

function moduleCard(m, next) {
  const total = m.lessons.length;
  const doneCount = m.lessons.filter((l) => isLessonDone(l.id)).length;
  const header = el("div", { class: "module-head" }, [
    el("span", { class: "module-number" }, t("map.module", { number: m.number })),
    el("h3", {}, m.title),
    m.available
      ? el("div", { class: "module-progress" }, [
          el("div", { class: "bar" }, el("span", { style: `width:${total ? (doneCount / total) * 100 : 0}%` })),
          el("span", { class: "small muted" }, t("map.lessonsDone", { done: doneCount, total })),
        ])
      : el("span", { class: "badge" }, t("map.comingSoon")),
  ]);
  if (!m.available) {
    return el("li", { class: "card module-card locked" }, [header, el("div", { class: "module-summary small muted", html: m.summaryHtml })]);
  }
  const lessons = m.lessons.map((l) => {
    const done = isLessonDone(l.id);
    const current = next && next.id === l.id;
    const partial = !done && blocksDone(l.id).size > 0;
    return el("li", {}, el("a", { class: `lesson-node${done ? " done" : ""}${current ? " current" : ""}`, href: `#/lesson/${l.id}` }, [
      el("span", { class: "node-dot", "aria-hidden": "true" }, done ? "✓" : l.number),
      el("span", { class: "node-body" }, [
        el("span", { class: "node-title" }, l.title),
        el("span", { class: "small muted" }, [
          l.minutes ? t("map.minutes", { minutes: l.minutes }) : "",
          partial ? ` · ${blocksDone(l.id).size}/${l.blockCount}` : "",
        ]),
      ]),
      el("span", { class: "node-cta small" }, done ? t("map.review") : partial ? t("map.continue") : current ? t("map.start") : ""),
    ]));
  });
  return el("li", { class: "card module-card" }, [header, el("ol", { class: "lesson-path" }, lessons)]);
}

// ---------- lesson player ----------

async function lessonPage(lessonId) {
  render(loading());
  let lesson;
  try {
    lesson = await api.lesson(lessonId);
  } catch (err) {
    render(err.status === 404 ? el("div", { class: "center-screen" }, [el("p", {}, t("lesson.notFound")), el("a", { class: "btn", href: "#/" }, t("lesson.doneMap"))]) : errorView(() => lessonPage(lessonId)));
    return;
  }
  if (location.hash.replace(/^#\/?/, "") !== `lesson/${lessonId}`) return; // navigated away

  // Screens: problem, blocks..., mission, wrap-up (go deeper + feedback), done.
  const screens = [
    { type: "problem" },
    ...lesson.blocks.map((b) => ({ type: "block", block: b })),
    { type: "mission" },
    { type: "wrapup" },
    { type: "done" },
  ];
  let index = 0;
  let problemAttempt = "";

  const progressBar = el("div", { class: "lesson-progress", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": screens.length - 1 });
  const segments = screens.slice(0, -1).map(() => el("span"));
  progressBar.append(...segments);

  const closeLink = el("a", { class: "icon-btn", href: "#/", "aria-label": t("lesson.close") }, "✕");
  const tutorBtn = el("button", { class: "tutor-fab", type: "button", onclick: openTutor }, [el("span", { "aria-hidden": "true" }, "✦"), t("tutor.open")]);
  const top = el("header", { class: "lesson-top" }, [closeLink, progressBar]);
  const body = el("div", { class: "lesson-screen" });
  const backBtn = el("button", { class: "btn btn-ghost", type: "button" }, t("lesson.back"));
  const nextBtn = el("button", { class: "btn btn-primary", type: "button" }, t("lesson.next"));
  const nav = el("footer", { class: "lesson-nav" }, [backBtn, nextBtn]);

  backBtn.addEventListener("click", () => go(index - 1));
  nextBtn.addEventListener("click", () => advance());

  render(el("main", { class: "page lesson-page" }, [top, el("p", { class: "lesson-title small muted" }, `${lesson.number} · ${lesson.title}`), body, tutorBtn, nav]));
  mountTutor({
    lessonId: lesson.id,
    available: tutorAvailable,
    getBlockIndex: () => (screens[index].type === "block" ? screens[index].block.index : null),
  });

  // Resume at the first unread block if the lesson is in progress.
  const seen = blocksDone(lesson.id);
  if (!isLessonDone(lesson.id) && seen.size > 0 && seen.size < lesson.blocks.length) {
    const firstUnread = lesson.blocks.findIndex((b) => !seen.has(b.index));
    go(1 + firstUnread);
  } else {
    go(0);
  }

  function go(i) {
    index = Math.max(0, Math.min(screens.length - 1, i));
    const screen = screens[index];
    segments.forEach((s, n) => s.classList.toggle("filled", n < index || (screen.type === "done" && n <= index)));
    progressBar.setAttribute("aria-valuenow", String(index));
    backBtn.hidden = index === 0 || screen.type === "done";
    nav.hidden = screen.type === "wrapup" || screen.type === "done";
    tutorBtn.hidden = screen.type === "done";
    nextBtn.textContent = screen.type === "problem" ? t("lesson.problemCta") : screen.type === "mission" ? t("lesson.missionDone") : t("lesson.next");
    body.replaceChildren(renderScreen(screen));
    body.classList.remove("enter");
    void body.offsetWidth; // restart the enter animation
    body.classList.add("enter");
    window.scrollTo(0, 0);
  }

  function advance() {
    const screen = screens[index];
    if (screen.type === "problem") {
      const value = body.querySelector("textarea")?.value.trim();
      if (value) problemAttempt = value;
      if (problemAttempt) toast(t("lesson.problemThanks"));
    }
    if (screen.type === "block") {
      localMark(lesson.id, screen.block.index);
      api.markBlock(lesson.id, screen.block.index).catch(() => {});
    }
    go(index + 1);
  }

  async function finishLesson() {
    localMark(lesson.id, LESSON_DONE);
    try {
      await api.markLesson(lesson.id);
    } catch {
      // progress is kept locally for this session; the next visit retries implicitly
    }
    go(screens.length - 1);
  }

  function renderScreen(screen) {
    switch (screen.type) {
      case "problem":
        return el("section", { class: "screen problem-screen" }, [
          el("span", { class: "eyebrow" }, t("lesson.problem")),
          el("div", { class: "lesson-text problem-text", html: lesson.problemHtml }),
          el("p", { class: "muted small" }, t("lesson.problemHint")),
          el("textarea", { class: "attempt", rows: 3, placeholder: t("lesson.problemPlaceholder"), maxlength: 2000, "aria-label": t("lesson.problemPlaceholder") }, problemAttempt),
        ]);
      case "block": {
        const b = screen.block;
        const stuckBtn = el("button", { class: "btn btn-outline stuck-btn", type: "button" }, ["🤔 ", t("lesson.didntGetIt")]);
        stuckBtn.addEventListener("click", () => {
          api.stuck(lesson.id, b.index).catch(() => {});
          stuckBtn.classList.add("pressed");
          toast(t("lesson.didntGetItThanks"));
          explain();
        });
        return el("section", { class: "screen block-screen" }, [
          el("span", { class: "eyebrow" }, t("lesson.block", { index: b.index + 1, total: lesson.blocks.length })),
          el("h1", {}, b.title),
          el("div", { class: "lesson-text", html: b.html }),
          el("div", { class: "block-actions" }, [stuckBtn]),
        ]);
      }
      case "mission":
        return el("section", { class: "screen mission-screen" }, [
          el("span", { class: "eyebrow" }, "🚀 " + t("lesson.mission")),
          el("p", { class: "muted small" }, t("lesson.missionHint")),
          el("div", { class: "lesson-text", html: lesson.missionHtml }),
        ]);
      case "wrapup":
        return wrapupScreen();
      case "done":
        return doneScreen();
    }
  }

  function wrapupScreen() {
    let clarity = 0;
    const error = el("p", { class: "form-error small", hidden: true }, t("lesson.feedbackNeedRating"));
    const ratings = el("div", { class: "rating", role: "radiogroup", "aria-label": t("lesson.feedbackClarity") },
      [1, 2, 3, 4, 5].map((n) => {
        const b = el("button", { type: "button", class: "rating-btn", role: "radio", "aria-checked": "false" }, String(n));
        b.addEventListener("click", () => {
          clarity = n;
          error.hidden = true;
          ratings.querySelectorAll(".rating-btn").forEach((x, i) => {
            x.classList.toggle("selected", i + 1 === n);
            x.setAttribute("aria-checked", String(i + 1 === n));
          });
        });
        return b;
      }),
    );
    const hardest = el("textarea", { rows: 3, maxlength: 2000, placeholder: t("lesson.feedbackHardestPlaceholder"), id: "hardest" });
    const submit = el("button", { class: "btn btn-primary", type: "submit" }, t("lesson.feedbackSubmit"));
    const skip = el("button", { class: "btn btn-ghost", type: "button" }, t("lesson.feedbackSkip"));
    const back = el("button", { class: "btn btn-ghost", type: "button" }, t("lesson.back"));
    back.addEventListener("click", () => go(index - 1));
    skip.addEventListener("click", finishLesson);
    const form = el("form", { class: "feedback-form card" }, [
      el("h2", {}, t("lesson.feedbackTitle")),
      el("label", { for: "hardest" }, t("lesson.feedbackHardest")),
      hardest,
      el("p", { class: "label" }, t("lesson.feedbackClarity")),
      ratings,
      el("div", { class: "rating-legend small muted" }, [el("span", {}, t("lesson.feedbackClarityLow")), el("span", {}, t("lesson.feedbackClarityHigh"))]),
      error,
      el("div", { class: "form-actions" }, [back, skip, submit]),
    ]);
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      if (!clarity) {
        error.hidden = false;
        return;
      }
      submit.disabled = true;
      try {
        await api.feedback(lesson.id, clarity, hardest.value.trim());
      } catch {
        // feedback is best effort; never block the student
      }
      finishLesson();
    });
    return el("section", { class: "screen wrapup-screen" }, [
      el("span", { class: "eyebrow" }, "📚 " + t("lesson.goDeeper")),
      el("div", { class: "lesson-text go-deeper", html: lesson.goDeeperHtml }),
      form,
    ]);
  }

  function doneScreen() {
    const next = nextLesson();
    return el("section", { class: "screen done-screen center" }, [
      el("div", { class: "done-badge", "aria-hidden": "true" }, "🎉"),
      el("h1", {}, t("lesson.doneTitle")),
      el("p", {}, t("lesson.doneText")),
      el("p", { class: "goal-text" }, lessonsDoneThisWeek() >= WEEKLY_GOAL_LESSONS ? t("map.weeklyGoalDone") : `${t("map.weeklyGoal")}: ${t("map.weeklyGoalProgress", { done: lessonsDoneThisWeek(), goal: WEEKLY_GOAL_LESSONS })}`),
      el("div", { class: "done-actions" }, [
        next && next.id !== lesson.id ? el("a", { class: "btn btn-primary", href: `#/lesson/${next.id}` }, t("lesson.doneNext")) : null,
        el("a", { class: "btn btn-ghost", href: "#/" }, t("lesson.doneMap")),
      ]),
    ]);
  }
}
