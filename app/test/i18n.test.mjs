// UI string tests: every language has exactly the same keys and placeholders as pt.
import { test } from "node:test";
import assert from "node:assert/strict";
import pt from "../public/i18n/pt.js";
import en from "../public/i18n/en.js";
import es from "../public/i18n/es.js";

const placeholders = (s) => [...s.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort();

for (const [lang, dict] of Object.entries({ en, es })) {
  test(`${lang}.js has the same keys as pt.js`, () => {
    assert.deepEqual(Object.keys(dict).sort(), Object.keys(pt).sort());
  });

  test(`${lang}.js keeps every {placeholder}`, () => {
    for (const key of Object.keys(pt)) {
      assert.deepEqual(placeholders(dict[key]), placeholders(pt[key]), `${lang} ${key}`);
      assert.ok(dict[key].trim(), `${lang} ${key} is not empty`);
    }
  });
}
