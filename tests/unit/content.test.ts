import { test } from "node:test";
import assert from "node:assert/strict";
import { getContent } from "../../src/content/index.ts";

function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, shape(v)]));
  }
  return typeof value;
}

test("es y en tienen la misma forma", () => {
  assert.deepEqual(shape(getContent("en")), shape(getContent("es")));
});

test("no hay datos privados", () => {
  for (const locale of ["es", "en"] as const) {
    const json = JSON.stringify(getContent(locale));
    for (const banned of ["603", "28/01/2000", "Máster", "Master", "carnet", "driver"]) {
      assert.ok(!json.includes(banned), `${locale} contiene «${banned}»`);
    }
  }
});

test("cifras del hero", () => {
  assert.deepEqual(
    getContent("es").hero.stats.map((s) => s.value),
    ["~60", "Diario", "140", "iOS + Android"],
  );
});

test("inglés sin los tiempos verbales mezclados", () => {
  const json = JSON.stringify(getContent("en"));
  assert.ok(!json.includes("Deployed and run in production"));
  assert.ok(!json.includes("I deploy and run in production a"));
});

test("BeerFinder: la API se despliega en Laravel Cloud", () => {
  for (const locale of ["es", "en"] as const) {
    assert.match(getContent(locale).project.arch.api, /Laravel Cloud/);
  }
});

test("BeerFinder: arquitectura real (sin capa Cloudflare inventada ni Redis en producción)", () => {
  for (const locale of ["es", "en"] as const) {
    const { arch, tech } = getContent(locale).project;
    const labels = Object.values(arch).join(" | ");
    assert.doesNotMatch(labels, /Redis/);
    assert.match(labels, /Cloudflare R2/);
    assert.match(labels, /Expo Push/);
    assert.match(labels, /Inertia/);
    assert.ok(!tech.includes("Cloudflare") && !tech.includes("Redis"));
    for (const t of ["Cloudflare R2", "Laravel Cloud", "Inertia + React", "EAS Update", "Sentry"]) assert.ok(tech.includes(t), `${locale}: falta ${t}`);
  }
});

test("BeerFinder: la app es bilingüe", () => {
  assert.doesNotMatch(getContent("en").project.description, /The app is in Spanish/);
  assert.match(getContent("en").project.description, /English and Spanish/);
  assert.match(getContent("es").project.description, /español e inglés/);
});
