// FAQ — the questions shop owners actually ask before signing up.
"use client";

import { useTranslation } from "react-i18next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/motion/reveal";

// Stable per-question keys for both i18n lookup and React keys.
const FAQ_KEYS = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8"] as const;

export function FAQ() {
  const { t } = useTranslation();

  const items = FAQ_KEYS.map((key) => ({
    key,
    question: t(`faq.${key}.question`),
    answer: t(`faq.${key}.answer`),
  }));

  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="container max-w-3xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {t("faq.heading")}
          </h2>
          <p className="mt-4 text-lg text-stone-600">{t("faq.subheading")}</p>
        </Reveal>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {items.map((item) => (
            <AccordionItem key={item.key} value={item.key}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
