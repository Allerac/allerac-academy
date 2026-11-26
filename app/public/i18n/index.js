// Minimal i18n: a dictionary per language and a t() helper with {placeholders}.
// The language comes from the saved choice, then the browser, then Portuguese.
import en from "./en.js";
import es from "./es.js";
import pt from "./pt.js";

const dictionaries = { pt, en, es };
export const SUPPORTED_LANGS = ["pt", "en", "es"];
export const DEFAULT_LANG = "pt";
const STORAGE_KEY = "academy.lang";
const HTML_LANG = { pt: "pt-BR", en: "en", es: "es" };

function savedLang() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null; // storage can be blocked (private mode, strict settings)
  }
}

/** Saved choice first, then the browser's preferred languages, then Portuguese. */
export function detectLang() {
  const saved = savedLang();
  if (saved && dictionaries[saved]) return saved;
  const preferred = navigator.languages?.length ? navigator.languages : [navigator.language || ""];
  for (const tag of preferred) {
    const base = String(tag).slice(0, 2).toLowerCase();
    if (dictionaries[base]) return base;
  }
  return DEFAULT_LANG;
}

let current = DEFAULT_LANG;

/** Sets the active language and updates <html lang>. Pass persist=true for a user choice. */
export function setLang(lang, { persist = false } = {}) {
  current = dictionaries[lang] ? lang : DEFAULT_LANG;
  document.documentElement.lang = HTML_LANG[current];
  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, current);
    } catch {
      // the choice still applies for this visit
    }
  }
}

export function getLang() {
  return current;
}

export function t(key, vars = {}) {
  const text = dictionaries[current][key] ?? dictionaries[DEFAULT_LANG][key] ?? key;
  return text.replace(/\{(\w+)\}/g, (_, name) => (name in vars ? String(vars[name]) : `{${name}}`));
}
