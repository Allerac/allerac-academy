// End-to-end language test against a running `wrangler dev` (default http://127.0.0.1:8787).
// Checks browser-language detection, the PT / EN / ES switcher, that the choice is
// saved, that API calls carry ?lang=, and that tutor notes never reach the page.
// Usage: BASE_URL=http://127.0.0.1:8787 SCREENSHOT_DIR=./screenshots npm run test:e2e:i18n

import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
import assert from "node:assert/strict";

const BASE_URL = process.env.BASE_URL ?? "http://127.0.0.1:8787";
const SHOTS = process.env.SCREENSHOT_DIR ?? "./screenshots";
const CHROME_PATH = process.env.CHROME_PATH ?? "/usr/bin/google-chrome";
const PREFIX = process.env.SCREENSHOT_PREFIX ?? "";
const NOTE_LABELS = ["Notas para o tutor", "Tutor notes", "Notas para el tutor"];
mkdirSync(SHOTS, { recursive: true });

const browser = await chromium.launch({ executablePath: CHROME_PATH, args: ["--no-sandbox"] });
const step = (msg) => console.log(`✓ ${msg}`);
const errors = [];

async function newPage(locale) {
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    locale,
  });
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push(String(e)));
  const apiLangs = [];
  page.on("request", (r) => {
    const url = new URL(r.url());
    if (url.pathname.startsWith("/api/")) apiLangs.push(url.searchParams.get("lang"));
  });
  return { context, page, apiLangs };
}
const shot = async (page, name) => { await page.waitForTimeout(400); await page.screenshot({ path: `${SHOTS}/${PREFIX}${name}.png` }); };
async function assertNoNotes(page, where) {
  const html = await page.content();
  for (const label of NOTE_LABELS) assert.ok(!html.includes(label), `${where}: "${label}" reached the browser`);
}

// 1. A Spanish browser gets Spanish by default.
{
  const { context, page, apiLangs } = await newPage("es-ES");
  await page.goto(BASE_URL);
  await page.getByText("Meta de la semana").first().waitFor();
  await page.getByText("Primer día de trabajo").waitFor();
  assert.equal(await page.evaluate(() => document.documentElement.lang), "es");
  assert.equal(await page.getByRole("button", { name: "ES" }).getAttribute("aria-pressed"), "true");
  assert.ok(apiLangs.length > 0 && apiLangs.every((l) => l === "es"), `API calls carry ?lang=es (${apiLangs})`);
  await shot(page, "map-es");
  step("es browser -> Spanish map");

  // Lesson problem screen in Spanish, no tutor notes in the page.
  await page.locator('a.lesson-node[href="#/lesson/00-first-day/01-ai-coworker"]').click();
  await page.getByText("El problema").waitFor();
  await page.getByText("Un pasajero perdió su vuelo de conexión", { exact: false }).waitFor();
  await assertNoNotes(page, "es problem");
  await shot(page, "lesson-problem-es");
  await page.getByRole("button", { name: "Lo intenté, sigamos" }).click();
  await page.getByText("Bloque 1 de 4").waitFor();
  await assertNoNotes(page, "es block");
  await page.getByRole("button", { name: "Quiero saber más" }).click();
  await page.getByText("El tutor no está disponible ahora").waitFor();
  step("es lesson + tutor unavailable state in Spanish");
  await context.close();
}

// 2. An unsupported browser language falls back to Portuguese; the switcher saves the choice.
{
  const { context, page, apiLangs } = await newPage("de-DE");
  await page.goto(BASE_URL);
  await page.getByText("Meta da semana").first().waitFor();
  assert.equal(await page.evaluate(() => document.documentElement.lang), "pt-BR");
  step("unsupported browser language -> Portuguese");

  apiLangs.length = 0;
  await page.getByRole("button", { name: "EN" }).click();
  await page.getByText("Weekly goal").first().waitFor();
  await page.getByText("First day at work").waitFor();
  assert.equal(await page.evaluate(() => document.documentElement.lang), "en");
  assert.equal(await page.evaluate(() => localStorage.getItem("academy.lang")), "en");
  assert.ok(apiLangs.includes("en") && !apiLangs.includes("pt"), `API calls switch to ?lang=en (${apiLangs})`);
  await shot(page, "map-en");
  step("switch to EN");

  await page.reload();
  await page.getByText("Weekly goal").first().waitFor();
  step("choice persists after reload");

  await page.locator('a.lesson-node[href="#/lesson/02-where-code-lives/03-code-editor"]').click();
  await page.getByText("The problem").waitFor();
  await assertNoNotes(page, "en problem");
  for (let i = 1; i <= 5; i++) {
    await page.getByRole("button", { name: i === 1 ? "I tried, let's go" : "Continue" }).click();
    await page.getByText(`Block ${i} of 5`).waitFor();
    await assertNoNotes(page, `en block ${i}`);
  }
  step("en lesson blocks without tutor notes");

  await page.getByRole("link", { name: "Close lesson" }).click();
  await page.getByRole("button", { name: "PT" }).click();
  await page.getByText("Meta da semana").first().waitFor();
  assert.equal(await page.evaluate(() => localStorage.getItem("academy.lang")), "pt");
  step("switch back to PT");
  await context.close();
}

assert.deepEqual(errors, [], `page errors: ${errors.join("; ")}`);
await browser.close();
console.log("E2E i18n test passed");
