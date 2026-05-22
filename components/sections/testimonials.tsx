// Testimonials — placeholder proof cards (no fabricated names, stories, or metrics).
"use client";

import { useTranslation } from "react-i18next";
import { Star } from "lucide-react";

import { Reveal } from "@/components/motion/reveal";

type TestimonialCopy = { quote: string; attribution: string };

export function Testimonials() {
  const { t } = useTranslation();
  const items = t("testimonials.items", {
    returnObjects: true,
  }) as TestimonialCopy[];

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {t("testimonials.heading")}
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            {t("testimonials.subheading")}
          </p>
        </Reveal>

        <Reveal className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <figure
              key={i}
              className="flex flex-col rounded-2xl border border-stone-200 bg-gradient-to-br from-cream to-white p-7 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex gap-1 text-brand-500">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-ink">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm font-medium text-stone-500">
                {item.attribution}
              </figcaption>
            </figure>
          ))}
        </Reveal>

        {/* TODO: 替换为真实客户姓名/店名/城市与引述，移除占位符 */}
      </div>
    </section>
  );
}
