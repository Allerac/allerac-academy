// Minimal i18n: a dictionary per language and a t() helper with {placeholders}.
import pt from "./pt.js";

const dictionaries = { pt };
export const SUPPORTED_LANGS = Object.keys(dictionaries);
export const DEFAULT_LANG = "pt";

export function detectLang() {
  const saved = localStorage.getItem("academy.lang");
  if (saved && dictionaries[saved]) return saved;
  const nav = (navigator.language || "").slice(0, 2);
  return dictionaries[nav] ? nav : DEFAULT_LANG;
}

let current = DEFAULT_LANG;
export function setLang(lang) {
  current = dictionaries[lang] ? lang : DEFAULT_LANG;
  document.documentElement.lang = current === "pt" ? "pt-BR" : current;
}
export function getLang() {
  return current;
}

export function t(key, vars = {}) {
  const text = dictionaries[current][key] ?? dictionaries[DEFAULT_LANG][key] ?? key;
  return text.replace(/\{(\w+)\}/g, (_, name) => (name in vars ? String(vars[name]) : `{${name}}`));
}
