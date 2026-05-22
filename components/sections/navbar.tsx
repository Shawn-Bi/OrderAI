// Navbar — sticky top bar: OrderAI logo, anchor nav, language switcher, CTA.
"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import { Menu, X, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/sections/language-switcher";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { key: "features", href: "#features" },
  { key: "useCases", href: "#use-cases" },
  { key: "pricing", href: "#pricing" },
  { key: "faq", href: "#faq" },
] as const;

export function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-cream/85 backdrop-blur-md">
      <nav className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold text-ink">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PhoneCall className="h-5 w-5" />
          </span>
          <span className="text-xl tracking-tight">OrderAI</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-brand-600"
            >
              {t(`navbar.${link.key}`)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <Button asChild>
            <a href="#trial">{t("navbar.cta")}</a>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            aria-label={t("navbar.toggleMenu")}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-stone-200/70 bg-cream md:hidden",
          open ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="container flex flex-col gap-1 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-3 py-3 text-base font-medium text-stone-700 hover:bg-secondary"
            >
              {t(`navbar.${link.key}`)}
            </a>
          ))}
          <Button asChild className="mt-2 w-full">
            <a href="#trial" onClick={() => setOpen(false)}>
              {t("navbar.cta")}
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
