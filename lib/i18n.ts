// i18next setup — 4 client-side languages, English default, localStorage-persisted.
//
// SSR note: we pin `lng: "en"` and disable detector auto-detection on init
// (detection.order = []). This guarantees the server-rendered HTML and the
// first client render are identical (English), so there is no React hydration
// mismatch. The stored language is applied right after mount by I18nProvider.
// `caches: ["localStorage"]` lets i18next persist the choice on every
// changeLanguage() call, so the preference survives refreshes.
"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "@/locales/en.json";
import zh from "@/locales/zh.json";
import es from "@/locales/es.json";
import vi from "@/locales/vi.json";

export const STORAGE_KEY = "orderai-lang";

// Order = primary-to-secondary as requested: English, 中文, Español, Tiếng Việt.
export const LANGUAGES = [
  { code: "en", label: "English", short: "EN" },
  { code: "zh", label: "中文", short: "中" },
  { code: "es", label: "Español", short: "ES" },
  { code: "vi", label: "Tiếng Việt", short: "VI" },
] as const;

export type LanguageCode = (typeof LANGUAGES)[number]["code"];

export const SUPPORTED_LNGS = LANGUAGES.map((l) => l.code);

export function isSupportedLng(value: unknown): value is LanguageCode {
  return typeof value === "string" && (SUPPORTED_LNGS as string[]).includes(value);
}

if (!i18n.isInitialized) {
  i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      resources: {
        en: { translation: en },
        zh: { translation: zh },
        es: { translation: es },
        vi: { translation: vi },
      },
      lng: "en",
      fallbackLng: "en",
      supportedLngs: SUPPORTED_LNGS,
      detection: {
        // Empty order = no auto-detect during init (deterministic SSR).
        order: [],
        // Persist the user's choice to localStorage on changeLanguage().
        caches: ["localStorage"],
        lookupLocalStorage: STORAGE_KEY,
      },
      interpolation: { escapeValue: false },
      react: { useSuspense: false },
    });
}

export default i18n;
