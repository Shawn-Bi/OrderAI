// Demo — playable sample calls per industry (placeholder audio + script preview).
"use client";

import { useTranslation } from "react-i18next";
import {
  Sparkles,
  Flower2,
  UtensilsCrossed,
  Stethoscope,
  Clock,
  type LucideIcon,
} from "lucide-react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal } from "@/components/motion/reveal";

// Stable per-tab config (value/icon/audio) lives in code; copy comes from i18n.
// `audio: null` means we have no recording that matches this tab's script yet —
// the tab shows a "coming soon" notice instead of a player, so we never ship a
// dead control or audio that contradicts the transcript printed beside it.
// All four are currently null: demo-nail.mp3 exists but its content does not
// match the gel-manicure script shown here.
// TODO: fill in a path per tab as each call is recorded and verified against
// its script (/audio/demo-nail.mp3, demo-massage.mp3, demo-restaurant.mp3,
// demo-clinic.mp3). The player then appears automatically for that tab.
const TAB_META: { value: string; icon: LucideIcon; audio: string | null }[] = [
  { value: "nail", icon: Sparkles, audio: null },
  { value: "massage", icon: Flower2, audio: null },
  { value: "restaurant", icon: UtensilsCrossed, audio: null },
  { value: "clinic", icon: Stethoscope, audio: null },
];

type DemoTabCopy = {
  label: string;
  title: string;
  blurb: string;
  lines: { speaker: "AI" | "Customer"; text: string }[];
};

export function Demo() {
  const { t } = useTranslation();
  const tabs = t("demo.tabs", { returnObjects: true }) as DemoTabCopy[];

  return (
    <section id="demo" className="bg-white py-20 md:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
            {t("demo.heading")}
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            {t("demo.subheading")}
          </p>
        </Reveal>

        <Tabs defaultValue="nail" className="mx-auto mt-12 max-w-3xl">
          <div className="flex justify-center">
            <TabsList>
              {TAB_META.map((meta, i) => {
                const Icon = meta.icon;
                return (
                  <TabsTrigger key={meta.value} value={meta.value}>
                    <Icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{tabs[i]?.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </div>

          {TAB_META.map((meta, i) => {
            const tab = tabs[i];
            if (!tab) return null;
            return (
              <TabsContent key={meta.value} value={meta.value} className="mt-8">
                <div className="rounded-2xl border border-stone-200 bg-gradient-to-br from-cream to-white p-7 shadow-sm md:p-9">
                  <h3 className="text-xl font-bold text-ink">{tab.title}</h3>
                  <p className="mt-1 text-stone-600">{tab.blurb}</p>

                  {meta.audio ? (
                    /* Native controls play the clip through in full — no duration
                       cap, no truncation. preload="metadata" fetches only the
                       header so the scrubber shows the real length up front. */
                    <audio
                      controls
                      preload="metadata"
                      src={meta.audio}
                      className="mt-6 w-full"
                    >
                      {t("demo.audioFallback")}
                    </audio>
                  ) : (
                    <div className="mt-6 flex items-center gap-3 rounded-xl border border-dashed border-stone-300 bg-stone-50/80 px-5 py-4">
                      <Clock className="h-5 w-5 shrink-0 text-stone-400" />
                      <div>
                        <p className="text-sm font-medium text-stone-600">
                          {t("demo.audioComingSoon")}
                        </p>
                        <p className="mt-0.5 text-xs text-stone-500">
                          {t("demo.audioComingSoonSub")}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="mt-7 space-y-3 border-t border-stone-200 pt-6">
                    {tab.lines.map((line, idx) => (
                      <div key={idx} className="flex gap-3 text-sm">
                        <span
                          className={
                            line.speaker === "AI"
                              ? "w-20 shrink-0 font-semibold text-brand-600"
                              : "w-20 shrink-0 font-semibold text-stone-500"
                          }
                        >
                          {line.speaker === "AI"
                            ? t("demo.roleAI")
                            : t("demo.roleCaller")}
                        </span>
                        <span className="text-stone-700">{line.text}</span>
                      </div>
                    ))}
                    <p className="pt-2 text-xs text-stone-400">
                      {t("demo.scriptNote")}
                    </p>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
