// Features — the six core capabilities, each with a one-line description.
"use client";

import { useTranslation } from "react-i18next";
import {
  PhoneCall,
  CalendarCheck,
  Voicemail,
  Languages,
  UserRoundCheck,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

type FeatureCopy = { title: string; desc: string };

// Icons stay in code (not translatable); zipped with copy by index.
const ICONS: LucideIcon[] = [
  PhoneCall,
  CalendarCheck,
  Voicemail,
  Languages,
  UserRoundCheck,
  RefreshCw,
];

export function Features() {
  const { t } = useTranslation();
  const items = t("features.items", { returnObjects: true }) as FeatureCopy[];

  return (
    <section id="features" className="bg-cream py-20 md:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {t("features.heading")}
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            {t("features.subheading")}
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => {
            const Icon = ICONS[i] ?? PhoneCall;
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-brand-600">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-stone-600">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
