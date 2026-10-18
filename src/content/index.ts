import { en } from "./en.ts";
import { es } from "./es.ts";
import type { Locale, SectionKey, SiteContent } from "./types.ts";

export type { Locale, SectionKey, SiteContent } from "./types.ts";
export * from "./shared.ts";

const content: Record<Locale, SiteContent> = { es, en };

export function getContent(locale: Locale): SiteContent {
  return content[locale];
}

/** Para cada idioma, id de sección → clave común. */
export function sectionKeyById(locale: Locale): Record<string, SectionKey> {
  const ids = content[locale].sectionIds;
  return Object.fromEntries(Object.entries(ids).map(([key, id]) => [id, key as SectionKey]));
}
