// LanguageSwitcher — navbar dropdown to change the site language.
// Styled to match the light/cream navbar; selection persists via i18next
// (localStorage). Closes on outside-click or Escape.
"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { Globe, Check, ChevronDown } from "lucide-react";

import { LANGUAGES } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const current =
    LANGUAGES.find((l) => l.code === i18n.language) ?? LANGUAGES[0];

  React.useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const choose = (code: string) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={t("language.label")}
        className="flex h-10 items-center gap-1.5 rounded-full border border-stone-300 bg-transparent px-3 text-sm font-semibold text-ink transition-colors hover:bg-secondary hover:border-stone-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Globe className="h-4 w-4 text-stone-500" />
        <span>{current.short}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-stone-500 transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={t("language.label")}
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-stone-200 bg-white p-1.5 shadow-xl shadow-orange-200/20"
        >
          {LANGUAGES.map((lang) => {
            const active = lang.code === current.code;
            return (
              <button
                key={lang.code}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => choose(lang.code)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                  active
                    ? "bg-secondary font-semibold text-brand-600"
                    : "font-medium text-stone-700 hover:bg-secondary"
                )}
              >
                <span className="flex items-center gap-2.5">
                  <span
                    className={cn(
                      "w-7 text-xs font-bold",
                      active ? "text-brand-600" : "text-stone-400"
                    )}
                  >
                    {lang.short}
                  </span>
                  <span>{lang.label}</span>
                </span>
                {active && <Check className="h-4 w-4 shrink-0 text-brand-600" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
