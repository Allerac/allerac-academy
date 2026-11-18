// End-to-end smoke test against a running `wrangler dev` (default http://127.0.0.1:8787).
// Uses playwright-core with a local Chrome/Chromium (set CHROME_PATH if needed).
// Usage: BASE_URL=http://127.0.0.1:8787 SCREENSHOT_DIR=./screenshots npm run test:e2e
//        EXPECT_TUTOR=available  -> expects a tutor reply instead of the unavailable state.

import { chromium } from "playwright-core";
import { mkdirSync } from "node:fs";
import assert from "node:assert/strict";

const BASE_URL = process.env.BASE_URL ?? "http://127.0.0.1:8787";
const SHOTS = process.env.SCREENSHOT_DIR ?? "./screenshots";
const EXPECT_TUTOR = process.env.EXPECT_TUTOR ?? "unavailable";
const CHROME_PATH = process.env.CHROME_PATH ?? "/usr/bin/google-chrome";
const PREFIX = process.env.SCREENSHOT_PREFIX ?? "";
mkdirSync(SHOTS, { recursive: true });

const browser = await chromium.launch({ executablePath: CHROME_PATH, args: ["--no-sandbox"] });
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
  locale: "pt-BR",
});
const page = await context.newPage();
const errors = [];
page.on("pageerror", (e) => errors.push(String(e)));
const shot = async (name) => { await page.waitForTimeout(400); await page.screenshot({ path: `${SHOTS}/${PREFIX}${name}.png` }); };
const step = (msg) => console.log(`✓ ${msg}`);

// 1. Course map
await page.goto(BASE_URL);
await page.getByText("Meta da semana").first().waitFor();
await page.getByText("Primeiro dia de trabalho").waitFor();
assert.ok(await page.getByText("Em breve").count() >= 1, "unwritten modules show as coming soon");
await shot("01-course-map");
step("course map");

// 2. Lesson: problem screen first
await page.locator('a.lesson-node[href="#/lesson/00-first-day/01-ai-coworker"]').click();
await page.getByText("O problema").waitFor();
await page.locator("textarea.attempt").fill("Eu pediria desculpas e explicaria as opções.");
await shot("02-problem");
await page.getByRole("button", { name: "Tentei, vamos lá" }).click();
step("problem screen");

// 3. First block, "didn't get it" -> tutor panel
await page.getByText("Bloco 1 de 4").waitFor();
const html = await page.content();
assert.ok(!html.includes("Notas para o tutor"), "tutor notes must never reach the browser");
await shot("03-block");
await page.getByRole("button", { name: /Não entendi/ }).click();
await page.locator(".tutor-sheet.open").waitFor();
if (EXPECT_TUTOR === "unavailable") {
  await page.getByText("Tutor indisponível no momento").waitFor();
  step("didn't get it + tutor unavailable state");
} else {
  await page.locator(".msg-tutor:not(.pending)").first().waitFor({ timeout: 15000 });
  step("didn't get it + tutor replied");
}
await page.waitForTimeout(300);
await shot("04-tutor");
await page.getByRole("button", { name: "Fechar tutor" }).click();

// 4. Walk through the remaining blocks
for (let i = 1; i <= 4; i++) {
  await page.getByRole("button", { name: "Continuar" }).click();
  if (i < 4) await page.getByText(`Bloco ${i + 1} de 4`).waitFor();
}
await page.getByText("Missão", { exact: false }).first().waitFor();
await shot("05-mission");
await page.getByRole("button", { name: "Fiz a missão" }).click();
step("blocks and mission");

// 5. Go deeper + feedback
await page.getByText("Como foi esta lição?").waitFor();
await page.getByRole("button", { name: "Enviar e concluir" }).click();
await page.getByText("Escolha uma nota de 1 a 5.").waitFor();
await page.locator("#hardest").fill("Entender o que é contexto.");
await page.getByRole("radio", { name: "4" }).click();
await shot("06-feedback");
await page.getByRole("button", { name: "Enviar e concluir" }).click();
await page.getByText("Lição concluída!").waitFor();
await shot("07-done");
step("feedback + lesson done");

// 6. Back on the map, progress is visible
await page.getByRole("link", { name: "Voltar ao mapa" }).click();
await page.getByText("1/4 lições").waitFor();
await page.getByText("1 de 3 lições").waitFor();
await shot("08-map-progress");
step("progress on map");

assert.deepEqual(errors, [], `page errors: ${errors.join("; ")}`);
await browser.close();
console.log("E2E smoke test passed");
