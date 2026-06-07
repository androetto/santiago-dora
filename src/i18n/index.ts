import { en } from "./en";
import { es } from "./es";
import type { Lang, Translations } from "./ui";

const translations: Record<Lang, Translations> = { es, en };

export type { Lang, Translations };

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}

export function getLangPath(lang: Lang): string {
  return lang === "en" ? "/en" : "/";
}

export const locales: Lang[] = ["es", "en"];

export function getOgLocale(lang: Lang): string {
  return lang === "en" ? "en_US" : "es_AR";
}
