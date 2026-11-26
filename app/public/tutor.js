// Tutor panel (bottom sheet) and the "learn more" button on selected text.
// If the tutor is not configured or Allerac One fails, the panel shows
// an "unavailable" notice (tutor.unavailable) and the rest of the lesson keeps working.

import { api, ApiError } from "./api.js";
import { t } from "./i18n/index.js";
import { el } from "./dom.js";

let state = null; // { lessonId, getBlockIndex, history, available }
let sheet = null;
let selectionButton = null;

export function mountTutor({ lessonId, getBlockIndex, available }) {
  unmountTutor();
  state = { lessonId, getBlockIndex, history: [], available };
  sheet = buildSheet();
  document.body.append(sheet.root);
  selectionButton = el("button", { class: "selection-explain", type: "button", hidden: true }, t("tutor.explainBetter"));
  selectionButton.addEventListener("pointerdown", (e) => e.preventDefault()); // keep the selection
  selectionButton.addEventListener("click", () => {
    const text = currentSelection();
    selectionButton.hidden = true;
    if (text) explain({ selectedText: text });
  });
  document.body.append(selectionButton);
  document.addEventListener("selectionchange", onSelectionChange);
}

export function unmountTutor() {
  document.removeEventListener("selectionchange", onSelectionChange);
  sheet?.root.remove();
  selectionButton?.remove();
  sheet = null;
  selectionButton = null;
  state = null;
}

export function setTutorAvailable(available) {
  if (!state) return;
  state.available = available;
  sheet?.renderStatus();
}

/** Opens the panel and asks the tutor to explain a passage or the current block. */
export function explain({ selectedText = "" } = {}) {
  openTutor();
  const question = selectedText ? t("tutor.explainSelection") : t("tutor.explainBlock");
  send({ kind: "explain", selectedText, question });
}

export function openTutor() {
  if (!sheet) return;
  sheet.root.hidden = false;
  requestAnimationFrame(() => sheet.root.classList.add("open"));
  sheet.renderStatus();
}

function closeTutor() {
  if (!sheet) return;
  sheet.root.classList.remove("open");
  sheet.root.hidden = true;
}

function currentSelection() {
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || sel.rangeCount === 0) return "";
  const range = sel.getRangeAt(0);
  const container = range.commonAncestorContainer;
  const node = container.nodeType === 1 ? container : container.parentElement;
  if (!node?.closest(".lesson-text")) return "";
  return sel.toString().trim().slice(0, 1500);
}

function onSelectionChange() {
  if (!selectionButton) return;
  const text = currentSelection();
  if (!text) {
    selectionButton.hidden = true;
    return;
  }
  const rect = window.getSelection().getRangeAt(0).getBoundingClientRect();
  const top = Math.min(window.innerHeight - 56, rect.bottom + 10);
  selectionButton.style.top = `${Math.max(8, top)}px`;
  selectionButton.style.left = `${Math.min(window.innerWidth - 150, Math.max(8, rect.left))}px`;
  selectionButton.hidden = false;
}

async function send({ kind, selectedText = "", question = "" }) {
  if (!state || !sheet) return;
  const blockIndex = state.getBlockIndex();
  sheet.addMessage("student", question, selectedText);
  const pending = sheet.addMessage("tutor", t("tutor.thinking"));
  pending.classList.add("pending");
  try {
    const res = await api.tutor({
      lessonId: state.lessonId,
      blockIndex,
      kind,
      selectedText,
      question,
      history: state.history,
    });
    pending.classList.remove("pending");
    pending.querySelector(".msg-text").textContent = res.reply;
    state.history.push({ role: "student", text: [selectedText, question].filter(Boolean).join("\n\n") });
    state.history.push({ role: "tutor", text: res.reply });
    state.available = true;
  } catch (err) {
    pending.remove();
    if (err instanceof ApiError && err.status === 429) {
      sheet.addMessage("system", t("tutor.rateLimited"));
    } else {
      state.available = false;
    }
  }
  sheet.renderStatus();
}

function buildSheet() {
  const messages = el("div", { class: "tutor-messages" });
  const status = el("div", { class: "tutor-status", role: "alert", hidden: true }, [
    el("strong", {}, t("tutor.unavailable")),
    el("p", {}, t("tutor.unavailableHint")),
  ]);
  const input = el("textarea", { rows: 1, placeholder: t("tutor.placeholder"), maxlength: 1000, "aria-label": t("tutor.placeholder") });
  const sendBtn = el("button", { type: "submit", class: "btn btn-primary" }, t("tutor.send"));
  const form = el("form", { class: "tutor-form" }, [input, sendBtn]);
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (!q) return;
    input.value = "";
    send({ kind: "question", question: q });
  });
  const closeBtn = el("button", { type: "button", class: "icon-btn", "aria-label": t("tutor.close") }, "✕");
  closeBtn.addEventListener("click", closeTutor);
  const panel = el("section", { class: "tutor-panel", role: "dialog", "aria-label": t("tutor.title") }, [
    el("header", { class: "tutor-header" }, [el("span", { class: "tutor-avatar", "aria-hidden": "true" }, "✦"), el("h2", {}, t("tutor.title")), closeBtn]),
    status,
    messages,
    form,
  ]);
  const backdrop = el("div", { class: "tutor-backdrop" });
  backdrop.addEventListener("click", closeTutor);
  const root = el("div", { class: "tutor-sheet", hidden: true }, [backdrop, panel]);
  const empty = el("p", { class: "tutor-empty" }, t("tutor.empty"));
  messages.append(empty);

  return {
    root,
    addMessage(role, text, quote = "") {
      empty.remove();
      const msg = el("div", { class: `msg msg-${role}` }, [
        quote ? el("blockquote", { class: "msg-quote" }, quote) : null,
        el("p", { class: "msg-text" }, text),
      ]);
      messages.append(msg);
      messages.scrollTop = messages.scrollHeight;
      return msg;
    },
    renderStatus() {
      const unavailable = state && !state.available;
      status.hidden = !unavailable;
      root.classList.toggle("is-unavailable", Boolean(unavailable));
    },
  };
}
