// I18nProvider — wraps the app in the i18next context and, after mount,
// applies the language saved in localStorage (default stays English on the
// server / first paint to avoid hydration mismatch).
"use client";

import * as React from "react";
import { I18nextProvider } from "react-i18next";

import i18n, { STORAGE_KEY, isSupportedLng } from "@/lib/i18n";

export function I18nProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    // Apply the persisted preference once, on the client, post-hydration.
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isSupportedLng(stored) && stored !== i18n.language) {
        i18n.changeLanguage(stored);
      }
    } catch {
      // localStorage can throw (private mode / disabled) — fall back to English.
    }

    const syncHtmlLang = (lng: string) => {
      document.documentElement.lang = lng;
    };
    syncHtmlLang(i18n.language || "en");
    i18n.on("languageChanged", syncHtmlLang);
    return () => {
      i18n.off("languageChanged", syncHtmlLang);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
