// Pricing — three tiers; the Growth plan is visually emphasized as Most Popular.
"use client";

import { useTranslation } from "react-i18next";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

// Stable plan identifiers used both as i18n key segments and React keys.
const PLAN_KEYS = ["starter", "growth", "pro"] as const;
type PlanKey = (typeof PLAN_KEYS)[number];

// Which plan is visually emphasized (layout concern, not copy).
const FEATURED_PLAN: PlanKey = "growth";

export function Pricing() {
  const { t } = useTranslation();

  const plans = PLAN_KEYS.map((key) => ({
    key,
    name: t(`pricing.${key}.name`),
    price: t(`pricing.${key}.price`),
    tagline: t(`pricing.${key}.tagline`),
    features: t(`pricing.${key}.features`, { returnObjects: true }) as string[],
    cta: t(`pricing.${key}.cta`),
  }));

  return (
    <section id="pricing" className="bg-cream py-20 md:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {t("pricing.heading")}
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            {t("pricing.subheading")}
          </p>
        </Reveal>

        <Reveal className="mx-auto mt-16 grid max-w-5xl items-stretch gap-8 md:grid-cols-3">
          {plans.map((plan) => {
            const featured = plan.key === FEATURED_PLAN;
            return (
              <div
                key={plan.key}
                className={cn(
                  "relative flex flex-col rounded-2xl bg-white p-8 transition-all duration-200",
                  featured
                    ? "border-2 border-orange-500 shadow-xl shadow-orange-200/50 hover:shadow-orange-200/80 md:scale-105"
                    : "border border-stone-200 shadow-sm hover:-translate-y-1 hover:shadow-md"
                )}
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                    {t("pricing.badge.mostPopular")}
                  </span>
                )}

                <h3 className="text-lg font-bold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-stone-500">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span
                    className={cn(
                      "font-extrabold tracking-tight text-ink",
                      featured ? "text-6xl" : "text-5xl"
                    )}
                  >
                    {plan.price}
                  </span>
                  <span className="text-stone-500">
                    {t("pricing.perMonth")}
                  </span>
                </div>

                <ul className="mt-7 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-stone-700"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="mt-8 w-full"
                  variant={featured ? "default" : "outline"}
                >
                  <a href="#trial">{plan.cta}</a>
                </Button>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
