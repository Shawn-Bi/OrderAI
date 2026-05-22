// UseCases — three industry "missed call = lost money" stories with the AI save.
"use client";

import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Flower2,
  UtensilsCrossed,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

type UseCaseCopy = {
  industry: string;
  when: string;
  loss: string;
  problem: string;
  save: string;
};

// Icons stay in code (not translatable); zipped with copy by index.
const ICONS: LucideIcon[] = [Sparkles, Flower2, UtensilsCrossed, Stethoscope];

export function UseCases() {
  const { t } = useTranslation();
  const items = t("useCases.items", { returnObjects: true }) as UseCaseCopy[];

  return (
    <section id="use-cases" className="bg-white py-20 md:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {t("useCases.heading")}
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            {t("useCases.subheading")}
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((c, i) => {
            const Icon = ICONS[i] ?? Sparkles;
            return (
              <div
                key={c.industry}
                className="flex flex-col rounded-2xl border border-stone-200 bg-gradient-to-br from-cream to-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary text-brand-600">
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wide text-stone-500">
                    {c.industry}
                  </span>
                </div>

                <p className="mt-6 text-base leading-relaxed text-ink">
                  <span className="font-bold text-brand-600">{c.when}</span> —{" "}
                  {c.problem}{" "}
                  <span className="font-bold text-brand-600">{c.loss}.</span>
                </p>
                <p className="mt-3 text-base leading-relaxed text-stone-700">
                  {c.save}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
